import { prisma } from "@/lib/db"
import { format } from "date-fns"
import Link from "next/link"

export default async function UpcomingWorkshops() {
  const upcomingDates = await prisma.workshopDate.findMany({
    where: {
      date: { gte: new Date() },
    },
    select: {
      id: true,
      date: true,
      bookedSpots: true,
      maxSpots: true,
      workshop: {
        select: {
          id: true,
          title: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
    take: 5,
  })

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Workshops</h2>
      <div className="space-y-4">
        {upcomingDates.length === 0 ? (
          <p className="text-gray-500 text-sm">No upcoming workshops</p>
        ) : (
          upcomingDates.map((date) => {
            const fillPercentage = (date.bookedSpots / date.maxSpots) * 100
            return (
              <div key={date.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{date.workshop.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {format(new Date(date.date), "EEEE, MMMM d, yyyy 'at' HH:mm")}
                    </p>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">
                          {date.bookedSpots}/{date.maxSpots} spots filled
                        </span>
                        <span className="text-gray-500">{Math.round(fillPercentage)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-teal-600 h-2 rounded-full transition-all"
                          style={{ width: `${fillPercentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/admin/workshops/${date.workshop.id}/dates`}
                    className="ml-4 text-sm text-teal-600 hover:text-teal-700 font-medium"
                  >
                    Manage
                  </Link>
                </div>
              </div>
            )
          })
        )}
      </div>
      <Link
        href="/admin/workshops"
        className="block mt-4 text-sm text-teal-600 hover:text-teal-700 font-medium text-center"
      >
        View all workshops →
      </Link>
    </div>
  )
}
