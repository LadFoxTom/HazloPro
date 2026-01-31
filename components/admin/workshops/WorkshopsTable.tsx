"use client"

import Link from "next/link"
import Image from "next/image"
import { Edit, Calendar, Copy, Trash2, ExternalLink, Search } from "lucide-react"
import StatusBadge from "../StatusBadge"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"

interface Workshop {
  id: string
  slug: string
  title: string
  category: string
  location: string
  price: number
  isActive: boolean
  imageUrl: string
  dates: Array<{ id: string; date: Date }>
  _count: { bookings: number }
}

interface WorkshopsTableProps {
  workshops: Workshop[]
  currentPage: number
  totalPages: number
  total: number
}

export default function WorkshopsTable({ workshops, currentPage, totalPages, total }: WorkshopsTableProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [search, setSearch] = useState("")
  const [filterCategory, setFilterCategory] = useState("")
  const [filterLocation, setFilterLocation] = useState("")
  const [filterStatus, setFilterStatus] = useState("")

  // Initialize filters from URL params
  useEffect(() => {
    setSearch(searchParams.get("search") || "")
    setFilterCategory(searchParams.get("category") || "")
    setFilterLocation(searchParams.get("location") || "")
    setFilterStatus(searchParams.get("status") || "")
  }, [searchParams])

  const buildUrl = (page?: number) => {
    const params = new URLSearchParams()
    if (search) params.set("search", search)
    if (filterCategory) params.set("category", filterCategory)
    if (filterLocation) params.set("location", filterLocation)
    if (filterStatus) params.set("status", filterStatus)
    if (page && page > 1) params.set("page", page.toString())
    return `/admin/workshops${params.toString() ? `?${params.toString()}` : ""}`
  }

  const handleSearch = () => {
    router.push(buildUrl(1))
  }

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
      return
    }

    try {
      const response = await fetch(`/api/admin/workshops/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete workshop")
      }

      toast.success("Workshop deleted successfully")
      router.refresh()
    } catch (error) {
      toast.error("Failed to delete workshop")
    }
  }

  const handleDuplicate = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/workshops/${id}/duplicate`, {
        method: "POST",
      })

      if (!response.ok) {
        throw new Error("Failed to duplicate workshop")
      }

      toast.success("Workshop duplicated successfully")
      router.refresh()
    } catch (error) {
      toast.error("Failed to duplicate workshop")
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Filters */}
      <div className="p-4 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search workshops..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="">All Categories</option>
            <option value="FONTANERIA">Fontanería</option>
            <option value="ELECTRICIDAD">Electricidad</option>
            <option value="ALICATADO">Alicatado</option>
            <option value="CARPINTERIA">Carpintería</option>
            <option value="PINTURA">Pintura</option>
            <option value="ESTUCADO">Estucado</option>
            <option value="ALBANILERIA">Albañilería</option>
            <option value="BRICOLAJE">Bricolaje</option>
            <option value="SOLDADURA">Soldadura</option>
            <option value="SUELOS">Suelos</option>
            <option value="CLIMATIZACION">Climatización</option>
          </select>
          <select
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="">All Locations</option>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Valencia">Valencia</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button
          onClick={handleSearch}
          className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          Apply Filters
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {workshops.map((workshop) => (
              <tr key={workshop.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                    <img
                      src={workshop.imageUrl}
                      alt={workshop.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{workshop.title}</div>
                  <div className="text-sm text-gray-500">{workshop.slug}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {workshop.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {workshop.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  €{Number(workshop.price).toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {workshop.isActive ? (
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      Active
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      Inactive
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {workshop.dates.length} date{workshop.dates.length !== 1 ? "s" : ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/workshops/${workshop.id}`}
                      className="text-teal-600 hover:text-teal-700"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/admin/workshops/${workshop.id}/dates`}
                      className="text-teal-600 hover:text-teal-700"
                      title="Manage Dates"
                    >
                      <Calendar className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDuplicate(workshop.id)}
                      className="text-teal-600 hover:text-teal-700"
                      title="Duplicate"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <a
                      href={`/talleres/${workshop.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700"
                      title="View on Site"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => handleDelete(workshop.id, workshop.title)}
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing {(currentPage - 1) * 20 + 1} to {Math.min(currentPage * 20, total)} of {total} workshops
          </div>
          <div className="flex gap-2">
            {currentPage > 1 && (
              <Link
                href={buildUrl(currentPage - 1)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Previous
              </Link>
            )}
            {currentPage < totalPages && (
              <Link
                href={buildUrl(currentPage + 1)}
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
