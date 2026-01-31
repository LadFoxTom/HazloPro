import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import Link from "next/link"
import { Plus } from "lucide-react"
import InstructorsTable from "@/components/admin/instructors/InstructorsTable"

export default async function InstructorsPage() {
  const session = await auth()
  
  if (!session) {
    redirect("/admin/login")
  }

  const instructors = await prisma.instructor.findMany({
    include: {
      _count: {
        select: {
          workshopDates: true,
          workshops: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Instructors</h1>
          <p className="text-gray-600 mt-1">Manage instructors and their schedules</p>
        </div>
        <Link
          href="/admin/instructors/new"
          className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Instructor
        </Link>
      </div>
      <InstructorsTable instructors={instructors} />
    </div>
  )
}
