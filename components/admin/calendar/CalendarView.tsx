"use client"

import { useState } from "react"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"
import DateBookingsModal from "./DateBookingsModal"

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

interface CalendarViewProps {
  workshopDates: WorkshopDate[]
}

export default function CalendarView({ workshopDates }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedBookings, setSelectedBookings] = useState<WorkshopDate[]>([])

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const nextMonthStart = startOfMonth(addMonths(currentDate, 1))
  const nextMonthEnd = endOfMonth(addMonths(currentDate, 1))

  // Get all days for both months
  const firstMonthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })
  const secondMonthDays = eachDayOfInterval({ start: nextMonthStart, end: nextMonthEnd })

  const getWorkshopsForDate = (date: Date) => {
    return workshopDates.filter((wd) => isSameDay(new Date(wd.date), date))
  }

  const handleDateClick = (date: Date) => {
    const workshops = getWorkshopsForDate(date)
    if (workshops.length > 0) {
      setSelectedDate(date)
      setSelectedBookings(workshops)
    }
  }

  const renderMonth = (days: Date[], monthDate: Date) => {
    const startDay = days[0].getDay() // 0 = Sunday, 1 = Monday, etc.
    const emptyDays = Array(startDay).fill(null)

    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {format(monthDate, "MMMM yyyy")}
          </h2>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {/* Day headers */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
          {/* Empty cells for days before month starts */}
          {emptyDays.map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}
          {/* Days of the month */}
          {days.map((day) => {
            const dayWorkshops = getWorkshopsForDate(day)
            const isToday = isSameDay(day, new Date())
            const isCurrentMonth = isSameMonth(day, monthDate)

            return (
              <div
                key={day.toISOString()}
                onClick={() => handleDateClick(day)}
                className={`
                  aspect-square border border-gray-200 rounded-lg p-1 cursor-pointer
                  hover:bg-gray-50 transition-colors
                  ${isToday ? "ring-2 ring-teal-500" : ""}
                  ${!isCurrentMonth ? "opacity-50" : ""}
                  ${dayWorkshops.length > 0 ? "bg-teal-50 border-teal-300" : ""}
                `}
              >
                <div className="text-sm font-medium text-gray-900 mb-1">
                  {format(day, "d")}
                </div>
                {dayWorkshops.length > 0 && (
                  <div className="space-y-1">
                    {dayWorkshops.slice(0, 2).map((wd) => (
                      <div
                        key={wd.id}
                        className="text-xs bg-teal-600 text-white rounded px-1 truncate"
                        title={wd.workshop.title}
                      >
                        {wd.workshop.title}
                      </div>
                    ))}
                    {dayWorkshops.length > 2 && (
                      <div className="text-xs text-gray-600">
                        +{dayWorkshops.length - 2} more
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous Month
        </button>
        <button
          onClick={() => setCurrentDate(new Date())}
          className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          Today
        </button>
        <button
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Next Month
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Two month view */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {renderMonth(firstMonthDays, monthStart)}
        {renderMonth(secondMonthDays, nextMonthStart)}
      </div>

      {/* Bookings Modal */}
      {selectedDate && selectedBookings.length > 0 && (
        <DateBookingsModal
          date={selectedDate}
          workshopDates={selectedBookings}
          onClose={() => {
            setSelectedDate(null)
            setSelectedBookings([])
          }}
        />
      )}
    </div>
  )
}
