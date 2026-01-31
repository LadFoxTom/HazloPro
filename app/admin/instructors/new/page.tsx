import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import InstructorForm from "@/components/admin/instructors/InstructorForm"

export default async function NewInstructorPage() {
  const session = await auth()
  
  if (!session) {
    redirect("/admin/login")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Create New Instructor</h1>
        <p className="text-gray-600 mt-1">Add a new instructor to the platform</p>
      </div>
      <InstructorForm />
    </div>
  )
}
