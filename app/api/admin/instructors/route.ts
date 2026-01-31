import { NextRequest, NextResponse } from "next/server"
import { requireAdmin } from "@/lib/admin-auth"
import { PrismaClient } from "@prisma/client"
import { z } from "zod"
import { logAction } from "@/lib/audit"

const prisma = new PrismaClient()

const instructorSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  bio: z.string().optional(),
  bioEn: z.string().optional(),
  specialties: z.array(z.string()).default([]),
  isActive: z.boolean().default(true),
})

export async function GET(request: NextRequest) {
  const { error } = await requireAdmin()
  if (error) return error

  const instructors = await prisma.instructor.findMany({
    include: {
      _count: {
        select: {
          workshopDates: true,
          workshops: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  })

  return NextResponse.json({ instructors })
}

export async function POST(request: NextRequest) {
  const { error, user } = await requireAdmin()
  if (error) return error

  try {
    const body = await request.json()
    const data = instructorSchema.parse(body)

    const instructor = await prisma.instructor.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || null,
        bio: data.bio || null,
        bioEn: data.bioEn || null,
        specialties: data.specialties,
        isActive: data.isActive,
      },
    })

    await logAction(user.id, "CREATE", "Instructor", instructor.id, {
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

    if (error.code === "P2002") {
      return NextResponse.json(
        {
          error: "CONFLICT",
          message: "An instructor with this email already exists",
        },
        { status: 409 }
      )
    }

    return NextResponse.json(
      {
        error: "INTERNAL_ERROR",
        message: error.message || "Failed to create instructor",
      },
      { status: 500 }
    )
  }
}
