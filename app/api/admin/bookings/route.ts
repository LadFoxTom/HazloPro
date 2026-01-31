import { NextRequest, NextResponse } from "next/server"
import { requireAdmin } from "@/lib/admin-auth"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  const { error } = await requireAdmin()
  if (error) return error

  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get("page") || "1")
  const limit = parseInt(searchParams.get("limit") || "20")
  const skip = (page - 1) * limit

  const where: any = {}
  
  if (searchParams.get("status")) {
    where.status = searchParams.get("status")
  }
  
  if (searchParams.get("paymentStatus")) {
    where.paymentStatus = searchParams.get("paymentStatus")
  }
  
  if (searchParams.get("workshopId")) {
    where.workshopId = searchParams.get("workshopId")
  }
  
  if (searchParams.get("search")) {
    const search = searchParams.get("search")!
    where.OR = [
      { firstName: { contains: search, mode: "insensitive" } },
      { lastName: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
      { bookingNumber: { contains: search, mode: "insensitive" } },
    ]
  }

  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where,
      include: {
        workshop: true,
        workshopDate: true,
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.booking.count({ where }),
  ])

  return NextResponse.json({
    bookings,
    total,
    pages: Math.ceil(total / limit),
  })
}
