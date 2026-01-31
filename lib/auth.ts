import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

// Initialize Prisma directly here to ensure it's available
const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          console.log("🔐 Authorize called with:", {
            email: credentials?.email,
            hasPassword: !!credentials?.password,
          })

          if (!credentials?.email || !credentials?.password) {
            console.log("❌ Missing credentials")
            return null
          }

          const email = credentials.email as string
          const password = credentials.password as string

          console.log(`🔍 Looking up user: ${email}`)
          console.log(`🔍 Prisma client available:`, !!prisma)
          console.log(`🔍 Prisma adminUser available:`, !!(prisma as any)?.adminUser)
          
          if (!prisma) {
            console.error("❌ Prisma client is not initialized")
            return null
          }
          
          const user = await prisma.adminUser.findUnique({
            where: { email },
          })
          
          if (!user) {
            console.log(`❌ User not found: ${email}`)
            return null
          }
          
          console.log(`✅ User found: ${user.email}, active: ${user.isActive}`)
          
          if (!user.isActive) {
            console.log(`❌ User is inactive: ${email}`)
            return null
          }
          
          console.log(`🔐 Comparing password...`)
          const isValid = await bcrypt.compare(password, user.passwordHash)
          console.log(`🔐 Password valid: ${isValid}`)
          
          if (!isValid) {
            console.log(`❌ Invalid password for: ${email}`)
            return null
          }
          
          console.log(`✅ Login successful for: ${email}`)
          
          // Update last login (don't fail if this fails)
          try {
            await prisma.adminUser.update({
              where: { id: user.id },
              data: { lastLoginAt: new Date() },
            })
          } catch (updateError) {
            console.warn("⚠️ Failed to update lastLoginAt:", updateError)
          }
          
          const result = {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          }
          
          console.log(`✅ Returning user:`, result)
          return result
        } catch (error) {
          console.error("❌ Auth error:", error)
          if (error instanceof Error) {
            console.error("Error message:", error.message)
            console.error("Error stack:", error.stack)
          }
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60, // 8 hours
  },
})
