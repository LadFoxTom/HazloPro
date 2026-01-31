import { NextRequest, NextResponse } from "next/server"
import { requireAdmin } from "@/lib/admin-auth"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  const { error } = await requireAdmin()
  if (error) return error

  const [
    totalWorkshops,
    activeWorkshops,
    upcomingDates,
    totalBookings,
    pendingBookings,
    confirmedBookings,
    unreadContacts,
  ] = await Promise.all([
    prisma.workshop.count(),
    prisma.workshop.count({ where: { isActive: true } }),
    prisma.workshopDate.count({
      where: {
        date: { gte: new Date() },
      },
    }),
    prisma.booking.count(),
    prisma.booking.count({ where: { status: "PENDING" } }),
    prisma.booking.count({ where: { status: "CONFIRMED" } }),
    prisma.contact.count({ where: { isRead: false } }),
  ])

  // Calculate revenue
  const paidBookings = await prisma.booking.findMany({
    where: {
      status: "CONFIRMED",
      paymentStatus: "PAID",
      paidAt: {
        gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      },
    },
    include: {
      workshop: true,
    },
  })

  const revenueThisMonth = paidBookings.reduce((sum, booking) => {
    return sum + Number(booking.workshop.price)
  }, 0)

  return NextResponse.json({
    totalWorkshops,
    activeWorkshops,
    upcomingDates,
    totalBookings,
    pendingBookings,
    confirmedBookings,
    revenueThisMonth,
    unreadContacts,
  })
}
