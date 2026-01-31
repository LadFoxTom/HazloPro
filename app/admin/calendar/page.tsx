import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import CalendarView from "@/components/admin/calendar/CalendarView"

export default async function CalendarPage() {
  const session = await auth()
  
  if (!session) {
    redirect("/admin/login")
  }

  // Get all workshop dates for the next 2 months
  const startDate = new Date()
  const endDate = new Date()
  endDate.setMonth(endDate.getMonth() + 2)

  const workshopDates = await prisma.workshopDate.findMany({
    where: {
      date: {
        gte: startDate,
        lte: endDate,
      },
    },
    select: {
      id: true,
      date: true,
      maxSpots: true,
      bookedSpots: true,
      workshop: {
        select: {
          id: true,
          title: true,
          category: true,
          location: true,
        },
      },
      instructor: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
      bookings: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
          status: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Calendar Overview</h1>
        <p className="text-gray-600 mt-1">View and manage upcoming workshops</p>
      </div>
      <CalendarView workshopDates={workshopDates} />
    </div>
  )
}
