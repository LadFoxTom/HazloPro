import { NextRequest, NextResponse } from "next/server"
import { requireAdmin } from "@/lib/admin-auth"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
import { logAction } from "@/lib/audit"

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error, user } = await requireAdmin()
  if (error) return error

  try {
    const original = await prisma.workshop.findUnique({
      where: { id: params.id },
      include: {
        dates: true,
      },
    })

    if (!original) {
      return NextResponse.json(
        { error: "NOT_FOUND", message: "Workshop not found" },
        { status: 404 }
      )
    }

    // Create duplicate with "(Copy)" suffix
    const duplicate = await prisma.workshop.create({
      data: {
        slug: `${original.slug}-copy-${Date.now()}`,
        title: `${original.title} (Copy)`,
        titleEn: `${original.titleEn} (Copy)`,
        description: original.description,
        descriptionEn: original.descriptionEn,
        fullDescription: original.fullDescription,
        fullDescriptionEn: original.fullDescriptionEn,
        category: original.category,
        level: original.level,
        location: original.location,
        price: original.price,
        lessons: original.lessons,
        duration: original.duration,
        durationEn: original.durationEn,
        imageUrl: original.imageUrl,
        isActive: false, // Inactive by default
        isPopular: false,
      },
    })

    // Duplicate dates
    if (original.dates.length > 0) {
      await prisma.workshopDate.createMany({
        data: original.dates.map((date) => ({
          workshopId: duplicate.id,
          date: date.date,
          maxSpots: date.maxSpots,
          bookedSpots: 0,
        })),
      })
    }

    await logAction(user.id, "CREATE", "Workshop", duplicate.id, {
      after: duplicate,
    })

    return NextResponse.json({ workshop: duplicate })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "INTERNAL_ERROR",
        message: error.message || "Failed to duplicate workshop",
      },
      { status: 500 }
    )
  }
}
