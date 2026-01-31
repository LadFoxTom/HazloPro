import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import InstructorForm from "@/components/admin/instructors/InstructorForm"
import { notFound } from "next/navigation"

export default async function EditInstructorPage({ params }: { params: { id: string } }) {
  const session = await auth()
  
  if (!session) {
    redirect("/admin/login")
  }

  const instructor = await prisma.instructor.findUnique({
    where: { id: params.id },
  })

  if (!instructor) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Edit Instructor</h1>
        <p className="text-gray-600 mt-1">Update instructor details</p>
      </div>
      <InstructorForm initialData={instructor} instructorId={params.id} />
    </div>
  )
}
