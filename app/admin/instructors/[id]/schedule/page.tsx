import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import { notFound } from "next/navigation"
import InstructorSchedule from "@/components/admin/instructors/InstructorSchedule"

export default async function InstructorSchedulePage({ params }: { params: { id: string } }) {
  const session = await auth()
  
  if (!session) {
    redirect("/admin/login")
  }

  const instructor = await prisma.instructor.findUnique({
    where: { id: params.id },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      workshopDates: {
        select: {
          id: true,
          date: true,
          maxSpots: true,
          bookedSpots: true,
          workshop: {
            select: {
              id: true,
              title: true,
              location: true,
            },
          },
          _count: {
            select: {
              bookings: true,
            },
          },
        },
        orderBy: { date: "asc" },
      },
      workshops: {
        select: {
          workshop: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      },
    },
  })

  if (!instructor) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Instructor Schedule</h1>
        <p className="text-gray-600 mt-1">
          {instructor.firstName} {instructor.lastName}
        </p>
      </div>
      <InstructorSchedule instructor={instructor} />
    </div>
  )
}
