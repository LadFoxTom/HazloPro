import { NextRequest, NextResponse } from "next/server"
import { requireAdmin } from "@/lib/admin-auth"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
import { logAction } from "@/lib/audit"
import { z } from "zod"

const updateDateSchema = z.object({
  date: z.string().transform((str) => new Date(str)).optional(),
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional(),
  maxSpots: z.number().int().min(1).max(20).optional(),
})

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string; dateId: string } }
) {
  const { error, user } = await requireAdmin()
  if (error) return error

  try {
    const existingDate = await prisma.workshopDate.findUnique({
      where: { id: params.dateId },
    })

    if (!existingDate) {
      return NextResponse.json(
        { error: "NOT_FOUND", message: "Date not found" },
        { status: 404 }
      )
    }

    const body = await request.json()
    const data = updateDateSchema.parse(body)

    let dateTime = existingDate.date
    if (data.date && data.startTime) {
      const [hours, minutes] = data.startTime.split(":").map(Number)
      dateTime = new Date(data.date)
      dateTime.setHours(hours, minutes, 0, 0)
    }

    const workshopDate = await prisma.workshopDate.update({
      where: { id: params.dateId },
      data: {
        date: dateTime,
        maxSpots: data.maxSpots,
      },
    })

    await logAction(user.id, "UPDATE", "WorkshopDate", workshopDate.id, {
      before: existingDate,
      after: workshopDate,
    })

    return NextResponse.json({ date: workshopDate })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "INTERNAL_ERROR",
        message: error.message || "Failed to update date",
      },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string; dateId: string } }
) {
  const { error, user } = await requireAdmin()
  if (error) return error

  try {
    const workshopDate = await prisma.workshopDate.findUnique({
      where: { id: params.dateId },
      include: {
        bookings: true,
      },
    })

    if (!workshopDate) {
      return NextResponse.json(
        { error: "NOT_FOUND", message: "Date not found" },
        { status: 404 }
      )
    }

    if (workshopDate.bookings.length > 0) {
      return NextResponse.json(
        {
          error: "CONFLICT",
          message: "Cannot delete date with existing bookings",
        },
        { status: 409 }
      )
    }

    await prisma.workshopDate.delete({
      where: { id: params.dateId },
    })

    await logAction(user.id, "DELETE", "WorkshopDate", params.dateId, {
      before: workshopDate,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "INTERNAL_ERROR",
        message: error.message || "Failed to delete date",
      },
      { status: 500 }
    )
  }
}
