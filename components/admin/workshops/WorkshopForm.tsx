"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { workshopSchema, WorkshopFormData } from "@/lib/validations/workshop"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface WorkshopFormProps {
  initialData?: any
  workshopId?: string
}

export default function WorkshopForm({ initialData, workshopId }: WorkshopFormProps) {
  const router = useRouter()
  const isEditing = !!workshopId
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<WorkshopFormData>({
    resolver: zodResolver(workshopSchema),
    defaultValues: initialData
      ? {
          slug: initialData.slug,
          title: initialData.title,
          titleEn: initialData.titleEn,
          description: initialData.description,
          descriptionEn: initialData.descriptionEn,
          fullDescription: initialData.fullDescription,
          fullDescriptionEn: initialData.fullDescriptionEn,
          category: initialData.category,
          level: initialData.level,
          location: initialData.location,
          price: Number(initialData.price),
          lessons: initialData.lessons,
          duration: initialData.duration,
          durationEn: initialData.durationEn,
          maxParticipants: initialData.maxParticipants || 10,
          imageUrl: initialData.imageUrl,
          isActive: initialData.isActive,
          isPopular: initialData.isPopular,
        }
      : {
          isActive: true,
          isPopular: false,
          maxParticipants: 10,
          level: "APRENDE",
        },
  })

  const onSubmit = async (data: WorkshopFormData) => {
    setIsSubmitting(true)
    try {
      const url = isEditing
        ? `/api/admin/workshops/${workshopId}`
        : "/api/admin/workshops"
      
      const response = await fetch(url, {
        method: isEditing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Failed to save workshop")
      }

      toast.success(
        isEditing ? "Workshop updated successfully" : "Workshop created successfully"
      )
      
      router.push("/admin/workshops")
      router.refresh()
    } catch (error: any) {
      toast.error(error.message || "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    if (!isEditing && !form.getValues("slug")) {
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
      form.setValue("slug", slug)
    }
    form.setValue("title", title)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {/* Basic Information */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Slug *
            </label>
            <input
              {...form.register("slug")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            {form.formState.errors.slug && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.slug.message}
              </p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title (Spanish) *
            </label>
            <input
              {...form.register("title")}
              onChange={handleTitleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            {form.formState.errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.title.message}
              </p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title (English) *
            </label>
            <input
              {...form.register("titleEn")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            {form.formState.errors.titleEn && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.titleEn.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description (Spanish) *
            </label>
            <textarea
              {...form.register("description")}
              rows={3}
              maxLength={200}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            {form.formState.errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.description.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description (English) *
            </label>
            <textarea
              {...form.register("descriptionEn")}
              rows={3}
              maxLength={200}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            {form.formState.errors.descriptionEn && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.descriptionEn.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Description (Spanish) *
            </label>
            <textarea
              {...form.register("fullDescription")}
              rows={6}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            {form.formState.errors.fullDescription && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.fullDescription.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Description (English) *
            </label>
            <textarea
              {...form.register("fullDescriptionEn")}
              rows={6}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            {form.formState.errors.fullDescriptionEn && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.fullDescriptionEn.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
            <select
              {...form.register("category")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
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
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Level *</label>
            <select
              {...form.register("level")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="APRENDE">Aprende (Beginners)</option>
              <option value="CONSTRUYE">Construye (Intermediate)</option>
              <option value="DOMINA">Domina (Advanced)</option>
              <option value="TODOS">Todos (All levels)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
            <input
              {...form.register("location")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price (€) *</label>
            <input
              type="number"
              step="0.01"
              {...form.register("price", { valueAsNumber: true })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Lessons *</label>
            <input
              type="number"
              {...form.register("lessons", { valueAsNumber: true })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Duration (Spanish) *</label>
            <input
              {...form.register("duration")}
              placeholder="e.g., 18 horas"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Duration (English) *</label>
            <input
              {...form.register("durationEn")}
              placeholder="e.g., 18 hours"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Max Participants *</label>
            <input
              type="number"
              {...form.register("maxParticipants", { valueAsNumber: true })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Media */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Media</h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image URL *
          </label>
          <input
            {...form.register("imageUrl")}
            type="url"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="https://example.com/image.jpg"
          />
          {form.formState.errors.imageUrl && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.imageUrl.message}
            </p>
          )}
          {form.watch("imageUrl") && (
            <div className="mt-4">
              <img
                src={form.watch("imageUrl")}
                alt="Preview"
                className="w-48 h-48 object-cover rounded-lg border border-gray-200"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Settings</h2>
        
        <div className="space-y-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              {...form.register("isActive")}
              className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
            />
            <span className="ml-3 text-sm text-gray-700">Active (visible on website)</span>
          </label>
          
          <label className="flex items-center">
            <input
              type="checkbox"
              {...form.register("isPopular")}
              className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
            />
            <span className="ml-3 text-sm text-gray-700">Mark as popular</span>
          </label>
        </div>
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
            ? "Update Workshop"
            : "Create Workshop"
          }
        </button>
      </div>
    </form>
  )
}
