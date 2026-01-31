"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Plus, Edit, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface WorkshopDate {
  id: string
  date: Date
  maxSpots: number
  bookedSpots: number
  _count: { bookings: number }
}

interface Workshop {
  id: string
  title: string
  maxParticipants?: number
  dates: WorkshopDate[]
}

interface WorkshopDatesManagerProps {
  workshop: Workshop
}

export default function WorkshopDatesManager({ workshop }: WorkshopDatesManagerProps) {
  const router = useRouter()
  const [isAdding, setIsAdding] = useState(false)
  const [newDate, setNewDate] = useState("")
  const [newTime, setNewTime] = useState("09:00")
  const [newMaxSpots, setNewMaxSpots] = useState(workshop.maxParticipants || 10)

  const handleAddDate = async () => {
    if (!newDate || !newTime) {
      toast.error("Please fill in all fields")
      return
    }

    try {
      const response = await fetch(`/api/admin/workshops/${workshop.id}/dates`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: newDate,
          startTime: newTime,
          maxSpots: newMaxSpots,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Failed to add date")
      }

      toast.success("Date added successfully")
      setIsAdding(false)
      setNewDate("")
      setNewTime("09:00")
      router.refresh()
    } catch (error: any) {
      toast.error(error.message || "Failed to add date")
    }
  }

  const handleDeleteDate = async (dateId: string) => {
    if (!confirm("Are you sure you want to delete this date?")) {
      return
    }

    try {
      const response = await fetch(`/api/admin/workshops/${workshop.id}/dates/${dateId}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Failed to delete date")
      }

      toast.success("Date deleted successfully")
      router.refresh()
    } catch (error: any) {
      toast.error(error.message || "Failed to delete date")
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Workshop Dates</h2>
        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Date
          </button>
        )}
      </div>

      {isAdding && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-4">Add New Date</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
              <input
                type="time"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Spots</label>
              <input
                type="number"
                min="1"
                max="20"
                value={newMaxSpots}
                onChange={(e) => setNewMaxSpots(parseInt(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleAddDate}
              className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Add Date
            </button>
            <button
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {workshop.dates.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No dates scheduled</p>
        ) : (
          workshop.dates.map((date) => {
            const fillPercentage = (date.bookedSpots / date.maxSpots) * 100
            return (
              <div
                key={date.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">
                      {format(new Date(date.date), "EEEE, MMMM d, yyyy 'at' HH:mm")}
                    </h3>
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
                    {date._count.bookings > 0 && (
                      <p className="text-sm text-gray-500 mt-2">
                        {date._count.bookings} booking{date._count.bookings !== 1 ? "s" : ""}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={() => handleDeleteDate(date.id)}
                      disabled={date._count.bookings > 0}
                      className="text-red-600 hover:text-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      title={date._count.bookings > 0 ? "Cannot delete date with bookings" : "Delete date"}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
