import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import { notFound } from "next/navigation"
import WorkshopDatesManager from "@/components/admin/workshops/WorkshopDatesManager"

export default async function WorkshopDatesPage({ params }: { params: { id: string } }) {
  const session = await auth()
  
  if (!session) {
    redirect("/admin/login")
  }

  const workshop = await prisma.workshop.findUnique({
    where: { id: params.id },
    include: {
      dates: {
        include: {
          _count: {
            select: { bookings: true },
          },
        },
        orderBy: { date: "asc" },
      },
    },
  })

  if (!workshop) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Manage Dates</h1>
        <p className="text-gray-600 mt-1">{workshop.title}</p>
      </div>
      <WorkshopDatesManager workshop={workshop} />
    </div>
  )
}
