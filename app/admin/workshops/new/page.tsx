import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import WorkshopForm from "@/components/admin/workshops/WorkshopForm"

export default async function NewWorkshopPage() {
  const session = await auth()
  
  if (!session) {
    redirect("/admin/login")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Create New Workshop</h1>
        <p className="text-gray-600 mt-1">Add a new workshop to the platform</p>
      </div>
      <WorkshopForm />
    </div>
  )
}
