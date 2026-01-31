import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET() {
  try {
    const workshops = await prisma.workshop.findMany({
      where: {
        isActive: true,
      },
      select: {
        id: true,
        slug: true,
        title: true,
        titleEn: true,
        description: true,
        descriptionEn: true,
        fullDescription: true,
        fullDescriptionEn: true,
        price: true,
        lessons: true,
        duration: true,
        durationEn: true,
        level: true,
        category: true,
        location: true,
        imageUrl: true,
        isPopular: true,
        dates: {
          where: {
            date: {
              gte: new Date(),
            },
          },
          select: {
            id: true,
            date: true,
            maxSpots: true,
            bookedSpots: true,
          },
          orderBy: {
            date: "asc",
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    // Convert Decimal prices to numbers for JSON serialization
    const workshopsWithNumbers = workshops.map((workshop) => ({
      ...workshop,
      price: Number(workshop.price),
    }))

    return NextResponse.json({ workshops: workshopsWithNumbers })
  } catch (error: any) {
    console.error("Error fetching workshops:", error)
    return NextResponse.json(
      { error: "Failed to fetch workshops", message: error.message },
      { status: 500 }
    )
  }
}
