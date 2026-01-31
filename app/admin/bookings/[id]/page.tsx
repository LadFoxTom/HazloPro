import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import { notFound } from "next/navigation"
import BookingDetail from "@/components/admin/bookings/BookingDetail"

export default async function BookingDetailPage({ params }: { params: { id: string } }) {
  const session = await auth()
  
  if (!session) {
    redirect("/admin/login")
  }

  const booking = await prisma.booking.findUnique({
    where: { id: params.id },
    include: {
      workshop: true,
      workshopDate: true,
    },
  })

  if (!booking) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Booking Details</h1>
        <p className="text-gray-600 mt-1">Booking #{booking.bookingNumber}</p>
      </div>
      <BookingDetail booking={booking} />
    </div>
  )
}
