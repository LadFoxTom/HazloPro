import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export async function requireAdmin() {
  const session = await auth()
  
  if (!session?.user) {
    return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) }
  }
  
  return { user: session.user }
}

export async function requireRole(allowedRoles: string[]) {
  const session = await auth()
  
  if (!session?.user) {
    return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) }
  }
  
  if (!allowedRoles.includes(session.user.role as string)) {
    return { error: NextResponse.json({ error: "Forbidden" }, { status: 403 }) }
  }
  
  return { user: session.user }
}
