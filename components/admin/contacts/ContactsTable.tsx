"use client"

import Link from "next/link"
import { format } from "date-fns"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface Contact {
  id: string
  name: string
  email: string
  subject: string
  isRead: boolean
  createdAt: Date
}

interface ContactsTableProps {
  contacts: Contact[]
  currentPage: number
  totalPages: number
  total: number
}

export default function ContactsTable({ contacts, currentPage, totalPages, total }: ContactsTableProps) {
  const router = useRouter()
  const [filterStatus, setFilterStatus] = useState("")

  const handleFilter = () => {
    const params = new URLSearchParams()
    if (filterStatus) params.set("status", filterStatus)
    router.push(`/admin/contacts?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Filters */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex gap-4">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="">All Messages</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
          <button
            onClick={handleFilter}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            Apply Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contacts.map((contact) => (
              <tr key={contact.id} className={`hover:bg-gray-50 ${!contact.isRead ? "bg-yellow-50" : ""}`}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {format(new Date(contact.createdAt), "MMM d, yyyy")}
                </td>
                <td className={`px-6 py-4 text-sm ${!contact.isRead ? "font-semibold text-gray-900" : "text-gray-700"}`}>
                  {contact.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {contact.email}
                </td>
                <td className={`px-6 py-4 text-sm ${!contact.isRead ? "font-semibold text-gray-900" : "text-gray-700"}`}>
                  {contact.subject}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contact.isRead ? (
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      Read
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                      Unread
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link
                    href={`/admin/contacts/${contact.id}`}
                    className="text-teal-600 hover:text-teal-700"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing {(currentPage - 1) * 20 + 1} to {Math.min(currentPage * 20, total)} of {total} contacts
          </div>
          <div className="flex gap-2">
            {currentPage > 1 && (
              <Link
                href={`/admin/contacts?page=${currentPage - 1}`}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Previous
              </Link>
            )}
            {currentPage < totalPages && (
              <Link
                href={`/admin/contacts?page=${currentPage + 1}`}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Next
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
