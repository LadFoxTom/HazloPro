"use client"

import { format } from "date-fns"
import Link from "next/link"
import StatusBadge from "../StatusBadge"

interface Instructor {
  id: string
  firstName: string
  lastName: string
  email: string
  workshopDates: Array<{
    id: string
    date: Date
    maxSpots: number
    bookedSpots: number
    workshop: {
      id: string
      title: string
      category: string
      location: string
    }
    bookings: Array<{
      id: string
      firstName: string
      lastName: string
      email: string
      status: string
    }>
  }>
  workshops: Array<{
    workshop: {
      id: string
      title: string
      category: string
    }
  }>
}

interface InstructorScheduleProps {
  instructor: Instructor
}

export default function InstructorSchedule({ instructor }: InstructorScheduleProps) {
  const upcomingDates = instructor.workshopDates.filter(
    (wd) => new Date(wd.date) >= new Date()
  )
  const pastDates = instructor.workshopDates.filter(
    (wd) => new Date(wd.date) < new Date()
  )

  return (
    <div className="space-y-6">
      {/* Upcoming Workshops */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Workshops</h2>
        {upcomingDates.length === 0 ? (
          <p className="text-gray-500 text-sm">No upcoming workshops scheduled</p>
        ) : (
          <div className="space-y-4">
            {upcomingDates.map((date) => {
              const fillPercentage = (date.bookedSpots / date.maxSpots) * 100
              return (
                <div key={date.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{date.workshop.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {format(new Date(date.date), "EEEE, MMMM d, yyyy 'at' HH:mm")}
                      </p>
                      <p className="text-sm text-gray-600">
                        {date.workshop.category} • {date.workshop.location}
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
                      {date.bookings.length > 0 && (
                        <div className="mt-4">
                          <p className="text-sm font-medium text-gray-700 mb-2">
                            Bookings ({date.bookings.length})
                          </p>
                          <div className="space-y-1">
                            {date.bookings.map((booking) => (
                              <div key={booking.id} className="text-sm text-gray-600">
                                {booking.firstName} {booking.lastName} ({booking.email}) -{" "}
                                <StatusBadge status={booking.status} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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
            })}
          </div>
        )}
      </div>

      {/* Past Workshops */}
      {pastDates.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Past Workshops</h2>
          <div className="space-y-2">
            {pastDates.slice(0, 10).map((date) => (
              <div key={date.id} className="flex items-center justify-between py-2 border-b border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-900">{date.workshop.title}</p>
                  <p className="text-xs text-gray-500">
                    {format(new Date(date.date), "MMM d, yyyy")}
                  </p>
                </div>
                <span className="text-xs text-gray-500">
                  {date.bookedSpots} participants
                </span>
              </div>
            ))}
            {pastDates.length > 10 && (
              <p className="text-sm text-gray-500 mt-2">
                And {pastDates.length - 10} more past workshops...
              </p>
            )}
          </div>
        </div>
      )}

      {/* Assigned Workshops */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Assigned Workshops</h2>
        {instructor.workshops.length === 0 ? (
          <p className="text-gray-500 text-sm">Not assigned to any workshops</p>
        ) : (
          <div className="space-y-2">
            {instructor.workshops.map((wi) => (
              <Link
                key={wi.workshop.id}
                href={`/admin/workshops/${wi.workshop.id}`}
                className="flex items-center justify-between py-2 border-b border-gray-100 hover:bg-gray-50 rounded px-2"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">{wi.workshop.title}</p>
                  <p className="text-xs text-gray-500">{wi.workshop.category}</p>
                </div>
                <span className="text-xs text-teal-600">View →</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
