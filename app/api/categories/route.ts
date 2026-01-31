import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"

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

    const categories = workshops.map((w) => w.category)

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
