"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useState } from "react"

const instructorSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  bio: z.string().optional(),
  bioEn: z.string().optional(),
  specialties: z.array(z.string()).default([]),
  isActive: z.boolean().default(true),
})

type InstructorFormData = z.infer<typeof instructorSchema>

const categories = [
  "FONTANERIA", "ELECTRICIDAD", "ALICATADO", "CARPINTERIA",
  "PINTURA", "ESTUCADO", "ALBANILERIA", "BRICOLAJE",
  "SOLDADURA", "SUELOS", "CLIMATIZACION"
]

interface InstructorFormProps {
  initialData?: any
  instructorId?: string
}

export default function InstructorForm({ initialData, instructorId }: InstructorFormProps) {
  const router = useRouter()
  const isEditing = !!instructorId
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<InstructorFormData>({
    resolver: zodResolver(instructorSchema),
    defaultValues: initialData
      ? {
          firstName: initialData.firstName,
          lastName: initialData.lastName,
          email: initialData.email,
          phone: initialData.phone || "",
          bio: initialData.bio || "",
          bioEn: initialData.bioEn || "",
          specialties: initialData.specialties || [],
          isActive: initialData.isActive,
        }
      : {
          isActive: true,
          specialties: [],
        },
  })

  const onSubmit = async (data: InstructorFormData) => {
    setIsSubmitting(true)
    try {
      const url = isEditing
        ? `/api/admin/instructors/${instructorId}`
        : "/api/admin/instructors"
      
      const response = await fetch(url, {
        method: isEditing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Failed to save instructor")
      }

      toast.success(
        isEditing ? "Instructor updated successfully" : "Instructor created successfully"
      )
      
      router.push("/admin/instructors")
      router.refresh()
    } catch (error: any) {
      toast.error(error.message || "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleSpecialty = (category: string) => {
    const current = form.getValues("specialties") || []
    const updated = current.includes(category)
      ? current.filter((c) => c !== category)
      : [...current, category]
    form.setValue("specialties", updated)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {/* Basic Information */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              {...form.register("firstName")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            {form.formState.errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.firstName.message}
              </p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              {...form.register("lastName")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            {form.formState.errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.lastName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              {...form.register("email")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              {...form.register("phone")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Biography</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio (Spanish)
            </label>
            <textarea
              {...form.register("bio")}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio (English)
            </label>
            <textarea
              {...form.register("bioEn")}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Specialties</h2>
        <p className="text-sm text-gray-600 mb-4">Select the categories this instructor specializes in</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {categories.map((category) => {
            const isSelected = form.watch("specialties")?.includes(category)
            return (
              <label
                key={category}
                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-teal-50 border-teal-500"
                    : "bg-white border-gray-300 hover:bg-gray-50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleSpecialty(category)}
                  className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
                />
                <span className="ml-3 text-sm text-gray-700">{category}</span>
              </label>
            )
          })}
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Settings</h2>
        
        <label className="flex items-center">
          <input
            type="checkbox"
            {...form.register("isActive")}
            className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
          />
          <span className="ml-3 text-sm text-gray-700">Active</span>
        </label>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting
            ? "Saving..."
            : isEditing
            ? "Update Instructor"
            : "Create Instructor"
          }
        </button>
      </div>
    </form>
  )
}
