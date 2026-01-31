import { NextRequest, NextResponse } from "next/server"
import { requireAdmin } from "@/lib/admin-auth"
import { PrismaClient } from "@prisma/client"
import { z } from "zod"
import { logAction } from "@/lib/audit"

const prisma = new PrismaClient()

const instructorSchema = z.object({
  firstName: z.string().min(2).optional(),
  lastName: z.string().min(2).optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  bio: z.string().optional(),
  bioEn: z.string().optional(),
  specialties: z.array(z.string()).optional(),
  isActive: z.boolean().optional(),
})

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error } = await requireAdmin()
  if (error) return error

  const instructor = await prisma.instructor.findUnique({
    where: { id: params.id },
    include: {
      workshopDates: {
        include: {
          workshop: true,
        },
        orderBy: { date: "asc" },
      },
      workshops: {
        include: {
          workshop: true,
        },
      },
    },
  })

  if (!instructor) {
    return NextResponse.json(
      { error: "NOT_FOUND", message: "Instructor not found" },
      { status: 404 }
    )
  }

  return NextResponse.json({ instructor })
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error, user } = await requireAdmin()
  if (error) return error

  try {
    const existingInstructor = await prisma.instructor.findUnique({
      where: { id: params.id },
    })

    if (!existingInstructor) {
      return NextResponse.json(
        { error: "NOT_FOUND", message: "Instructor not found" },
        { status: 404 }
      )
    }

    const body = await request.json()
    const data = instructorSchema.parse(body)

    const instructor = await prisma.instructor.update({
      where: { id: params.id },
      data: {
        ...data,
        phone: data.phone !== undefined ? (data.phone || null) : undefined,
        bio: data.bio !== undefined ? (data.bio || null) : undefined,
        bioEn: data.bioEn !== undefined ? (data.bioEn || null) : undefined,
      },
    })

    await logAction(user.id, "UPDATE", "Instructor", instructor.id, {
      before: existingInstructor,
      after: instructor,
    })

    return NextResponse.json({ instructor })
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        {
          error: "VALIDATION_ERROR",
          message: "Validation failed",
          details: error.errors,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        error: "INTERNAL_ERROR",
        message: error.message || "Failed to update instructor",
      },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error, user } = await requireAdmin()
  if (error) return error

  try {
    const instructor = await prisma.instructor.findUnique({
      where: { id: params.id },
      include: {
        workshopDates: true,
        workshops: true,
      },
    })

    if (!instructor) {
      return NextResponse.json(
        { error: "NOT_FOUND", message: "Instructor not found" },
        { status: 404 }
      )
    }

    if (instructor.workshopDates.length > 0 || instructor.workshops.length > 0) {
      return NextResponse.json(
        {
          error: "CONFLICT",
          message: "Cannot delete instructor with assigned workshops or dates",
        },
        { status: 409 }
      )
    }

    await prisma.instructor.delete({
      where: { id: params.id },
    })

    await logAction(user.id, "DELETE", "Instructor", params.id, {
      before: instructor,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "INTERNAL_ERROR",
        message: error.message || "Failed to delete instructor",
      },
      { status: 500 }
    )
  }
}
