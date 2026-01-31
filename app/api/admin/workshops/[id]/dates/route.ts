import { NextRequest, NextResponse } from "next/server"
import { requireAdmin } from "@/lib/admin-auth"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
import { logAction } from "@/lib/audit"
import { z } from "zod"

const dateSchema = z.object({
  date: z.string().transform((str) => new Date(str)),
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
  maxSpots: z.number().int().min(1).max(20).default(10),
})

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error } = await requireAdmin()
  if (error) return error

  const dates = await prisma.workshopDate.findMany({
    where: { workshopId: params.id },
    include: {
      _count: {
        select: { bookings: true },
      },
    },
    orderBy: { date: "asc" },
  })

  return NextResponse.json({ dates })
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error, user } = await requireAdmin()
  if (error) return error

  try {
    const body = await request.json()
    const { date, startTime, maxSpots } = dateSchema.parse(body)

    // Combine date and time
    const [hours, minutes] = startTime.split(":").map(Number)
    const dateTime = new Date(date)
    dateTime.setHours(hours, minutes, 0, 0)

    // Get workshop to get default maxParticipants
    const workshop = await prisma.workshop.findUnique({
      where: { id: params.id },
    })

    if (!workshop) {
      return NextResponse.json(
        { error: "NOT_FOUND", message: "Workshop not found" },
        { status: 404 }
      )
    }

    const workshopDate = await prisma.workshopDate.create({
      data: {
        workshopId: params.id,
        date: dateTime,
        maxSpots: maxSpots || 10,
        bookedSpots: 0,
      },
    })

    await logAction(user.id, "CREATE", "WorkshopDate", workshopDate.id, {
      after: workshopDate,
    })

    return NextResponse.json({ date: workshopDate })
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
          message: "A date already exists for this workshop at this time",
        },
        { status: 409 }
      )
    }

    return NextResponse.json(
      {
        error: "INTERNAL_ERROR",
        message: error.message || "Failed to create date",
      },
      { status: 500 }
    )
  }
}
