"use client"

import { format } from "date-fns"
import { X } from "lucide-react"
import StatusBadge from "../StatusBadge"

interface WorkshopDate {
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
  instructor: {
    id: string
    firstName: string
    lastName: string
  } | null
  bookings: Array<{
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status: string
  }>
}

interface DateBookingsModalProps {
  date: Date
  workshopDates: WorkshopDate[]
  onClose: () => void
}

export default function DateBookingsModal({ date, workshopDates, onClose }: DateBookingsModalProps) {
  const totalBookings = workshopDates.reduce((sum, wd) => sum + wd.bookings.length, 0)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {format(date, "EEEE, MMMM d, yyyy")}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {totalBookings} booking{totalBookings !== 1 ? "s" : ""} across {workshopDates.length} workshop{workshopDates.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {workshopDates.map((workshopDate) => (
            <div key={workshopDate.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {workshopDate.workshop.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {workshopDate.workshop.category} • {workshopDate.workshop.location}
                  </p>
                  <p className="text-sm text-gray-600">
                    {format(new Date(workshopDate.date), "HH:mm")} • {workshopDate.bookedSpots}/{workshopDate.maxSpots} spots
                  </p>
                  {workshopDate.instructor && (
                    <p className="text-sm text-teal-600 mt-1">
                      Instructor: {workshopDate.instructor.firstName} {workshopDate.instructor.lastName}
                    </p>
                  )}
                </div>
              </div>

              {workshopDate.bookings.length > 0 ? (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Bookings ({workshopDate.bookings.length})
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {workshopDate.bookings.map((booking) => (
                          <tr key={booking.id} className="hover:bg-gray-50">
                            <td className="px-3 py-2 text-gray-900">
                              {booking.firstName} {booking.lastName}
                            </td>
                            <td className="px-3 py-2 text-gray-600">{booking.email}</td>
                            <td className="px-3 py-2 text-gray-600">{booking.phone}</td>
                            <td className="px-3 py-2">
                              <StatusBadge status={booking.status} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-500">No bookings yet</p>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
