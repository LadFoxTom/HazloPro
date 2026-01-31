import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import { Suspense } from "react"
import StatsCard from "@/components/admin/StatsCard"
import { 
  Wrench, 
  Calendar, 
  Euro, 
  Mail
} from "lucide-react"
import UpcomingWorkshops from "@/components/admin/UpcomingWorkshops"
import RecentBookings from "@/components/admin/RecentBookings"
import UpcomingWorkshopsSkeleton from "@/components/admin/UpcomingWorkshopsSkeleton"
import RecentBookingsSkeleton from "@/components/admin/RecentBookingsSkeleton"

export default async function AdminDashboard() {
  const session = await auth()
  
  if (!session) {
    redirect("/admin/login")
  }

  // Fetch dashboard stats with optimized queries
  const [
    totalWorkshops,
    activeWorkshops,
    upcomingDates,
    totalBookings,
    pendingBookings,
    confirmedBookings,
    unreadContacts,
    paidBookings,
  ] = await Promise.all([
    prisma.workshop.count(),
    prisma.workshop.count({ where: { isActive: true } }),
    prisma.workshopDate.count({
      where: {
        date: { gte: new Date() },
      },
    }),
    prisma.booking.count(),
    prisma.booking.count({ where: { status: "PENDING" } }),
    prisma.booking.count({ where: { status: "CONFIRMED" } }),
    prisma.contact.count({ where: { isRead: false } }),
    // Optimized revenue query - only select needed fields
    prisma.booking.findMany({
      where: {
        status: "CONFIRMED",
        paymentStatus: "PAID",
        paidAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      },
      select: {
        workshop: {
          select: {
            price: true,
          },
        },
      },
    }),
  ])

  const revenue = paidBookings.reduce((sum, booking) => {
    return sum + Number(booking.workshop.price)
  }, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Workshops"
          value={totalWorkshops.toString()}
          subtitle={`${activeWorkshops} active`}
          icon={Wrench}
          trend={null}
        />
        <StatsCard
          title="Bookings"
          value={totalBookings.toString()}
          subtitle={`${pendingBookings} pending`}
          icon={Calendar}
          trend={null}
        />
        <StatsCard
          title="Revenue"
          value={`€${revenue.toLocaleString()}`}
          subtitle="This month"
          icon={Euro}
          trend={null}
        />
        <StatsCard
          title="Contacts"
          value={unreadContacts.toString()}
          subtitle="Unread messages"
          icon={Mail}
          trend={null}
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Suspense fallback={<UpcomingWorkshopsSkeleton />}>
          <UpcomingWorkshops />
        </Suspense>
        <Suspense fallback={<RecentBookingsSkeleton />}>
          <RecentBookings />
        </Suspense>
      </div>
    </div>
  )
}
