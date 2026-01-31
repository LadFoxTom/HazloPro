import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
import bcrypt from "bcryptjs"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    console.log("🔍 Testing auth for:", email)

    const user = await prisma.adminUser.findUnique({
      where: { email },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found", email }, { status: 404 })
    }

    console.log("✅ User found:", {
      email: user.email,
      isActive: user.isActive,
      role: user.role,
    })

    const isValid = await bcrypt.compare(password, user.passwordHash)
    console.log("🔐 Password check:", isValid)

    return NextResponse.json({
      userFound: true,
      isActive: user.isActive,
      passwordValid: isValid,
      email: user.email,
      role: user.role,
    })
  } catch (error: any) {
    console.error("❌ Test auth error:", error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
