import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import BookingsTable from "@/components/admin/bookings/BookingsTable"

export default async function BookingsPage({
  searchParams,
}: {
  searchParams: { page?: string; search?: string; status?: string; paymentStatus?: string }
}) {
  const session = await auth()
  
  if (!session) {
    redirect("/admin/login")
  }

  const page = parseInt(searchParams.page || "1")
  const limit = 20
  const skip = (page - 1) * limit

  const where: any = {}
  
  if (searchParams.search) {
    const search = searchParams.search
    where.OR = [
      { firstName: { contains: search, mode: "insensitive" } },
      { lastName: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
      { bookingNumber: { contains: search, mode: "insensitive" } },
    ]
  }
  
  if (searchParams.status) {
    where.status = searchParams.status
  }
  
  if (searchParams.paymentStatus) {
    where.paymentStatus = searchParams.paymentStatus
  }

  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where,
      select: {
        id: true,
        bookingNumber: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        status: true,
        paymentStatus: true,
        createdAt: true,
        workshop: {
          select: {
            id: true,
            title: true,
            price: true,
          },
        },
        workshopDate: {
          select: {
            id: true,
            date: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.booking.count({ where }),
  ])

  const totalPages = Math.ceil(total / limit)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Bookings</h1>
        <p className="text-gray-600 mt-1">Manage all workshop bookings</p>
      </div>
      <BookingsTable 
        bookings={bookings} 
        currentPage={page}
        totalPages={totalPages}
        total={total}
      />
    </div>
  )
}
