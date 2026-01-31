import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const workshop = await prisma.workshop.findUnique({
      where: {
        slug: params.slug,
      },
      include: {
        dates: {
          where: {
            date: {
              gte: new Date(),
            },
          },
          orderBy: {
            date: "asc",
          },
        },
      },
    })

    if (!workshop) {
      return NextResponse.json(
        { error: "Workshop not found" },
        { status: 404 }
      )
    }

    // Convert Decimal to number
    const workshopWithNumber = {
      ...workshop,
      price: Number(workshop.price),
    }

    return NextResponse.json(workshopWithNumber)
  } catch (error: any) {
    console.error("Error fetching workshop:", error)
    return NextResponse.json(
      { error: "Failed to fetch workshop", message: error.message },
      { status: 500 }
    )
  }
}
