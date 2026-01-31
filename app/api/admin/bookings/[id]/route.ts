import { NextRequest, NextResponse } from "next/server"
import { requireAdmin } from "@/lib/admin-auth"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
import { logAction } from "@/lib/audit"
import { z } from "zod"

const updateBookingSchema = z.object({
  status: z.enum(["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"]).optional(),
  paymentStatus: z.enum(["UNPAID", "PAID", "REFUNDED"]).optional(),
  internalNotes: z.string().optional(),
})

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error } = await requireAdmin()
  if (error) return error

  const booking = await prisma.booking.findUnique({
    where: { id: params.id },
    include: {
      workshop: true,
      workshopDate: true,
    },
  })

  if (!booking) {
    return NextResponse.json(
      { error: "NOT_FOUND", message: "Booking not found" },
      { status: 404 }
    )
  }

  return NextResponse.json({ booking })
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error, user } = await requireAdmin()
  if (error) return error

  try {
    const existingBooking = await prisma.booking.findUnique({
      where: { id: params.id },
    })

    if (!existingBooking) {
      return NextResponse.json(
        { error: "NOT_FOUND", message: "Booking not found" },
        { status: 404 }
      )
    }

    const body = await request.json()
    const data = updateBookingSchema.parse(body)

    const booking = await prisma.booking.update({
      where: { id: params.id },
      data: {
        status: data.status,
        paymentStatus: data.paymentStatus,
        paidAt: data.paymentStatus === "PAID" && !existingBooking.paidAt ? new Date() : existingBooking.paidAt,
      },
    })

    await logAction(user.id, "UPDATE", "Booking", booking.id, {
      before: existingBooking,
      after: booking,
    })

    return NextResponse.json({ booking })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "INTERNAL_ERROR",
        message: error.message || "Failed to update booking",
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
    const booking = await prisma.booking.findUnique({
      where: { id: params.id },
      include: {
        workshopDate: true,
      },
    })

    if (!booking) {
      return NextResponse.json(
        { error: "NOT_FOUND", message: "Booking not found" },
        { status: 404 }
      )
    }

    // Decrement booked spots
    await prisma.workshopDate.update({
      where: { id: booking.workshopDateId },
      data: {
        bookedSpots: { decrement: 1 },
      },
    })

    await prisma.booking.delete({
      where: { id: params.id },
    })

    await logAction(user.id, "DELETE", "Booking", params.id, {
      before: booking,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "INTERNAL_ERROR",
        message: error.message || "Failed to delete booking",
      },
      { status: 500 }
    )
  }
}
