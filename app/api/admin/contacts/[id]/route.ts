import { NextRequest, NextResponse } from "next/server"
import { requireAdmin } from "@/lib/admin-auth"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
import { z } from "zod"

const updateContactSchema = z.object({
  isRead: z.boolean(),
})

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error } = await requireAdmin()
  if (error) return error

  const contact = await prisma.contact.findUnique({
    where: { id: params.id },
  })

  if (!contact) {
    return NextResponse.json(
      { error: "NOT_FOUND", message: "Contact not found" },
      { status: 404 }
    )
  }

  return NextResponse.json({ contact })
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    const body = await request.json()
    const data = updateContactSchema.parse(body)

    const contact = await prisma.contact.update({
      where: { id: params.id },
      data: {
        isRead: data.isRead,
      },
    })

    return NextResponse.json({ contact })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "INTERNAL_ERROR",
        message: error.message || "Failed to update contact",
      },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error } = await requireAdmin()
  if (error) return error

  try {
    await prisma.contact.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "INTERNAL_ERROR",
        message: error.message || "Failed to delete contact",
      },
      { status: 500 }
    )
  }
}
