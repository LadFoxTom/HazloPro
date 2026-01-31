import { z } from "zod"

export const workshopSchema = z.object({
  slug: z.string()
    .min(3, "Slug must be at least 3 characters")
    .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
  title: z.string().min(5, "Title must be at least 5 characters"),
  titleEn: z.string().min(5, "English title must be at least 5 characters"),
  description: z.string().min(20).max(200),
  descriptionEn: z.string().min(20).max(200),
  fullDescription: z.string().min(100, "Full description must be at least 100 characters"),
  fullDescriptionEn: z.string().min(100),
  category: z.enum([
    "FONTANERIA", "ELECTRICIDAD", "ALICATADO", "CARPINTERIA",
    "PINTURA", "ESTUCADO", "ALBANILERIA", "BRICOLAJE",
    "SOLDADURA", "SUELOS", "CLIMATIZACION"
  ]),
  level: z.enum(["APRENDE", "CONSTRUYE", "DOMINA", "TODOS"]),
  location: z.string().min(2),
  price: z.number().min(0).max(10000),
  lessons: z.number().int().min(1).max(20),
  duration: z.string().min(2),
  durationEn: z.string().min(2),
  maxParticipants: z.number().int().min(1).max(20).default(10),
  imageUrl: z.string().url("Must be a valid URL"),
  isActive: z.boolean().default(true),
  isPopular: z.boolean().default(false),
})

export type WorkshopFormData = z.infer<typeof workshopSchema>
