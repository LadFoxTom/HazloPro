"use client"

import { useState } from "react"
import { format } from "date-fns"
import StatusBadge from "../StatusBadge"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface Booking {
  id: string
  bookingNumber: string
  firstName: string
  lastName: string
  email: string
  phone: string
  birthdate: Date
  street: string
  city: string
  postalCode: string
  isCompany: boolean
  companyName?: string | null
  companyCif?: string | null
  companyAddress?: string | null
  comments?: string | null
  status: string
  paymentStatus: string
  paidAt?: Date | null
  createdAt: Date
  workshop: { title: string; price: number; location: string }
  workshopDate: { date: Date }
}

interface BookingDetailProps {
  booking: Booking
}

export default function BookingDetail({ booking }: BookingDetailProps) {
  const router = useRouter()
  const [status, setStatus] = useState(booking.status)
  const [paymentStatus, setPaymentStatus] = useState(booking.paymentStatus)
  const [isUpdating, setIsUpdating] = useState(false)

  const handleStatusUpdate = async (newStatus: string, newPaymentStatus?: string) => {
    setIsUpdating(true)
    try {
      const response = await fetch(`/api/admin/bookings/${booking.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: newStatus,
          paymentStatus: newPaymentStatus || paymentStatus,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update booking")
      }

      setStatus(newStatus)
      if (newPaymentStatus) setPaymentStatus(newPaymentStatus)
      toast.success("Booking updated successfully")
      router.refresh()
    } catch (error) {
      toast.error("Failed to update booking")
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Status Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <StatusBadge status={status} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Payment Status</p>
              <StatusBadge status={paymentStatus} />
            </div>
          </div>
          <div className="flex gap-2">
            <select
              value={status}
              onChange={(e) => handleStatusUpdate(e.target.value)}
              disabled={isUpdating}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            >
              <option value="PENDING">Pending</option>
              <option value="CONFIRMED">Confirmed</option>
              <option value="CANCELLED">Cancelled</option>
              <option value="COMPLETED">Completed</option>
            </select>
            <select
              value={paymentStatus}
              onChange={(e) => handleStatusUpdate(status, e.target.value)}
              disabled={isUpdating}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            >
              <option value="UNPAID">Unpaid</option>
              <option value="PAID">Paid</option>
              <option value="REFUNDED">Refunded</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="text-sm font-medium text-gray-900">
                {booking.firstName} {booking.lastName}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-sm font-medium text-gray-900">{booking.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="text-sm font-medium text-gray-900">{booking.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Birthdate</p>
              <p className="text-sm font-medium text-gray-900">
                {format(new Date(booking.birthdate), "MMMM d, yyyy")}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Address</p>
              <p className="text-sm font-medium text-gray-900">
                {booking.street}<br />
                {booking.city} {booking.postalCode}
              </p>
            </div>
          </div>
        </div>

        {/* Workshop Details */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Workshop Details</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Workshop</p>
              <p className="text-sm font-medium text-gray-900">{booking.workshop.title}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Date</p>
              <p className="text-sm font-medium text-gray-900">
                {format(new Date(booking.workshopDate.date), "EEEE, MMMM d, yyyy 'at' HH:mm")}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <p className="text-sm font-medium text-gray-900">{booking.workshop.location}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Price</p>
              <p className="text-sm font-medium text-gray-900">
                €{Number(booking.workshop.price).toFixed(2)}
              </p>
            </div>
            {booking.paidAt && (
              <div>
                <p className="text-sm text-gray-600">Paid At</p>
                <p className="text-sm font-medium text-gray-900">
                  {format(new Date(booking.paidAt), "MMMM d, yyyy 'at' HH:mm")}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Company Information */}
        {booking.isCompany && (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Company Name</p>
                <p className="text-sm font-medium text-gray-900">{booking.companyName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">CIF</p>
                <p className="text-sm font-medium text-gray-900">{booking.companyCif}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Company Address</p>
                <p className="text-sm font-medium text-gray-900">{booking.companyAddress}</p>
              </div>
            </div>
          </div>
        )}

        {/* Comments */}
        {booking.comments && (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Comments</h2>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{booking.comments}</p>
          </div>
        )}
      </div>
    </div>
  )
}
