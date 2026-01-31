import { prisma } from "@/lib/db"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
import StatusBadge from "./StatusBadge"

export default async function RecentBookings() {
  const recentBookings = await prisma.booking.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      status: true,
      createdAt: true,
      workshop: {
        select: {
          id: true,
          title: true,
        },
      },
      workshopDate: {
        select: {
          id: true,
          date: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  })

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Bookings</h2>
      <div className="space-y-4">
        {recentBookings.length === 0 ? (
          <p className="text-gray-500 text-sm">No recent bookings</p>
        ) : (
          recentBookings.map((booking) => (
            <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-gray-900">
                      {booking.firstName} {booking.lastName}
                    </h3>
                    <StatusBadge status={booking.status} />
                  </div>
                  <p className="text-sm text-gray-600">{booking.workshop.title}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDistanceToNow(new Date(booking.createdAt), { addSuffix: true })}
                  </p>
                </div>
                <Link
                  href={`/admin/bookings/${booking.id}`}
                  className="ml-4 text-sm text-teal-600 hover:text-teal-700 font-medium"
                >
                  View
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
      <Link
        href="/admin/bookings"
        className="block mt-4 text-sm text-teal-600 hover:text-teal-700 font-medium text-center"
      >
        View all bookings →
      </Link>
    </div>
  )
}
