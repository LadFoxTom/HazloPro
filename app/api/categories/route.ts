import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"

// Category translations and images
const categoryData: Record<string, { id: string; name: string; nameEn: string; image: string }> = {
  FONTANERIA: {
    id: "FONTANERIA",
    name: "Fontanería",
    nameEn: "Plumbing",
    image: "img/fotos-XCL_ROkw5t8-unsplash.jpg"
  },
  ELECTRICIDAD: {
    id: "ELECTRICIDAD",
    name: "Electricidad",
    nameEn: "Electrical",
    image: "img/ryno-marais-dhFpe7CTI5Y-unsplash.jpg"
  },
  ALICATADO: {
    id: "ALICATADO",
    name: "Alicatado",
    nameEn: "Tiling",
    image: "img/planimetrica-rvNkkzPGJQE-unsplash.jpg"
  },
  CARPINTERIA: {
    id: "CARPINTERIA",
    name: "Carpintería",
    nameEn: "Carpentry",
    image: "img/tekton-iHkc5NLlV6c-unsplash.jpg"
  },
  PINTURA: {
    id: "PINTURA",
    name: "Pintura",
    nameEn: "Painting",
    image: "img/bob-van-aubel-KIJBRWBfhvM-unsplash.jpg"
  },
  ESTUCADO: {
    id: "ESTUCADO",
    name: "Estucado",
    nameEn: "Plastering",
    image: "img/etienne-girardet-1fDq8DMtxJg-unsplash.jpg"
  },
  ALBANILERIA: {
    id: "ALBANILERIA",
    name: "Albañilería",
    nameEn: "Masonry",
    image: "img/waldemar-brandt-LXDwUbmPDQo-unsplash.jpg"
  },
  BRICOLAJE: {
    id: "BRICOLAJE",
    name: "Bricolaje",
    nameEn: "DIY",
    image: "img/tekton-YhKP9j4-5FQ-unsplash.jpg"
  },
  SOLDADURA: {
    id: "SOLDADURA",
    name: "Soldadura",
    nameEn: "Welding",
    image: "img/snapmaker-3d-printer-jQdS3Y9Trow-unsplash.jpg"
  },
  SUELOS: {
    id: "SUELOS",
    name: "Suelos",
    nameEn: "Flooring",
    image: "img/syd-mills-Eq-bV3cbsro-unsplash.jpg"
  },
  CLIMATIZACION: {
    id: "CLIMATIZACION",
    name: "Climatización",
    nameEn: "HVAC",
    image: "img/christopher-burns-Wiu3w-99tNg-unsplash.jpg"
  }
}

export async function GET() {
  try {
    // Get all unique categories from active workshops
    const workshops = await prisma.workshop.findMany({
      where: {
        isActive: true,
      },
      select: {
        category: true,
      },
      distinct: ["category"],
    })

    // Map categories to full objects with translations
    const categories = workshops
      .map((w) => categoryData[w.category])
      .filter(Boolean) // Remove any undefined entries

    // Return array directly (not wrapped in object)
    return NextResponse.json(categories)
  } catch (error: any) {
    console.error("Error fetching categories:", error)
    return NextResponse.json(
      { error: "Failed to fetch categories", message: error.message },
      { status: 500 }
    )
  }
}
