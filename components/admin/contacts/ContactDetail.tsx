"use client"

import { format } from "date-fns"
import { Mail, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface Contact {
  id: string
  name: string
  email: string
  subject: string
  message: string
  isRead: boolean
  createdAt: Date
}

interface ContactDetailProps {
  contact: Contact
}

export default function ContactDetail({ contact }: ContactDetailProps) {
  const router = useRouter()

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this contact message?")) {
      return
    }

    try {
      const response = await fetch(`/api/admin/contacts/${contact.id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete contact")
      }

      toast.success("Contact message deleted")
      router.push("/admin/contacts")
    } catch (error) {
      toast.error("Failed to delete contact message")
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{contact.subject}</h2>
          <p className="text-sm text-gray-600 mt-1">
            From {contact.name} • {format(new Date(contact.createdAt), "MMMM d, yyyy 'at' HH:mm")}
          </p>
        </div>
        <div className="flex gap-2">
          <a
            href={`mailto:${contact.email}?subject=Re: ${contact.subject}`}
            className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Reply
          </a>
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-700">Email</p>
          <p className="text-sm text-gray-900 mt-1">{contact.email}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Message</p>
          <p className="text-sm text-gray-900 mt-2 whitespace-pre-wrap">{contact.message}</p>
        </div>
      </div>
    </div>
  )
}
