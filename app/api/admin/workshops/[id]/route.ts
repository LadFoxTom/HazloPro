import { NextRequest, NextResponse } from "next/server"
import { requireAdmin } from "@/lib/admin-auth"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
import { workshopSchema } from "@/lib/validations/workshop"
import { logAction } from "@/lib/audit"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error } = await requireAdmin()
  if (error) return error

  const workshop = await prisma.workshop.findUnique({
    where: { id: params.id },
    include: {
      dates: {
        orderBy: { date: "asc" },
      },
      bookings: {
        include: {
          workshopDate: true,
        },
      },
    },
  })

  if (!workshop) {
    return NextResponse.json(
      { error: "NOT_FOUND", message: "Workshop not found" },
      { status: 404 }
    )
  }

  return NextResponse.json({ workshop })
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error, user } = await requireAdmin()
  if (error) return error

  try {
    const existingWorkshop = await prisma.workshop.findUnique({
      where: { id: params.id },
    })

    if (!existingWorkshop) {
      return NextResponse.json(
        { error: "NOT_FOUND", message: "Workshop not found" },
        { status: 404 }
      )
    }

    const body = await request.json()
    const data = workshopSchema.partial().parse(body)

    const workshop = await prisma.workshop.update({
      where: { id: params.id },
      data: {
        ...data,
        price: data.price ? data.price : undefined,
        lessons: data.lessons ? data.lessons : undefined,
      },
    })

    await logAction(user.id, "UPDATE", "Workshop", workshop.id, {
      before: existingWorkshop,
      after: workshop,
    })

    return NextResponse.json({ workshop })
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
        message: error.message || "Failed to update workshop",
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
    const workshop = await prisma.workshop.findUnique({
      where: { id: params.id },
      include: {
        bookings: true,
      },
    })

    if (!workshop) {
      return NextResponse.json(
        { error: "NOT_FOUND", message: "Workshop not found" },
        { status: 404 }
      )
    }

    if (workshop.bookings.length > 0) {
      return NextResponse.json(
        {
          error: "CONFLICT",
          message: "Cannot delete workshop with existing bookings",
        },
        { status: 409 }
      )
    }

    await prisma.workshop.delete({
      where: { id: params.id },
    })

    await logAction(user.id, "DELETE", "Workshop", params.id, {
      before: workshop,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "INTERNAL_ERROR",
        message: error.message || "Failed to delete workshop",
      },
      { status: 500 }
    )
  }
}
