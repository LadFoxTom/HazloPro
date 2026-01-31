import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import WorkshopForm from "@/components/admin/workshops/WorkshopForm"
import { notFound } from "next/navigation"

export default async function EditWorkshopPage({ params }: { params: { id: string } }) {
  const session = await auth()
  
  if (!session) {
    redirect("/admin/login")
  }

  const workshop = await prisma.workshop.findUnique({
    where: { id: params.id },
  })

  if (!workshop) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Edit Workshop</h1>
        <p className="text-gray-600 mt-1">Update workshop details</p>
      </div>
      <WorkshopForm initialData={workshop} workshopId={params.id} />
    </div>
  )
}
