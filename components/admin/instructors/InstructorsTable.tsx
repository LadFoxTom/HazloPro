"use client"

import Link from "next/link"
import { Edit, Trash2, Calendar } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface Instructor {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string | null
  isActive: boolean
  _count: {
    workshopDates: number
    workshops: number
  }
}

interface InstructorsTableProps {
  instructors: Instructor[]
}

export default function InstructorsTable({ instructors }: InstructorsTableProps) {
  const router = useRouter()

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"? This action cannot be undone.`)) {
      return
    }

    try {
      const response = await fetch(`/api/admin/instructors/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete instructor")
      }

      toast.success("Instructor deleted successfully")
      router.refresh()
    } catch (error) {
      toast.error("Failed to delete instructor")
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Workshops</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {instructors.map((instructor) => (
              <tr key={instructor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {instructor.firstName} {instructor.lastName}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {instructor.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {instructor.phone || "-"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {instructor._count.workshops}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {instructor._count.workshopDates}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {instructor.isActive ? (
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      Active
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      Inactive
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/instructors/${instructor.id}`}
                      className="text-teal-600 hover:text-teal-700"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/admin/instructors/${instructor.id}/schedule`}
                      className="text-teal-600 hover:text-teal-700"
                      title="View Schedule"
                    >
                      <Calendar className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDelete(instructor.id, `${instructor.firstName} ${instructor.lastName}`)}
                      className="text-red-600 hover:text-red-700"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
