import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Create contact message
    const contact = await prisma.contact.create({
      data: {
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
      },
    })

    return NextResponse.json({ 
      success: true, 
      contact,
      message: "Message sent successfully" 
    })
  } catch (error: any) {
    console.error("Error creating contact:", error)
    return NextResponse.json(
      { error: "Failed to send message", message: error.message },
      { status: 500 }
    )
  }
}
