import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import Link from "next/link"
import { Plus } from "lucide-react"
import WorkshopsTable from "@/components/admin/workshops/WorkshopsTable"

export default async function WorkshopsPage({
  searchParams,
}: {
  searchParams: { page?: string; search?: string; category?: string; location?: string; status?: string }
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
    where.OR = [
      { title: { contains: searchParams.search, mode: "insensitive" } },
      { titleEn: { contains: searchParams.search, mode: "insensitive" } },
    ]
  }
  
  if (searchParams.category) {
    where.category = searchParams.category
  }
  
  if (searchParams.location) {
    where.location = searchParams.location
  }
  
  if (searchParams.status === "active") {
    where.isActive = true
  } else if (searchParams.status === "inactive") {
    where.isActive = false
  }

  const [workshops, total] = await Promise.all([
    prisma.workshop.findMany({
      where,
      select: {
        id: true,
        slug: true,
        title: true,
        titleEn: true,
        category: true,
        location: true,
        price: true,
        imageUrl: true,
        isActive: true,
        createdAt: true,
        dates: {
          select: {
            id: true,
            date: true,
            maxSpots: true,
            bookedSpots: true,
          },
          orderBy: { date: "asc" },
          take: 3, // Only get first 3 dates for list view
        },
        _count: {
          select: { bookings: true },
        },
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.workshop.count({ where }),
  ])

  const totalPages = Math.ceil(total / limit)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Workshops</h1>
          <p className="text-gray-600 mt-1">Manage all workshops and their schedules</p>
        </div>
        <Link
          href="/admin/workshops/new"
          className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Workshop
        </Link>
      </div>

      <WorkshopsTable 
        workshops={workshops} 
        currentPage={page}
        totalPages={totalPages}
        total={total}
      />
    </div>
  )
}
