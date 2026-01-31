import { NextRequest, NextResponse } from "next/server"
import { requireAdmin } from "@/lib/admin-auth"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
import { workshopSchema } from "@/lib/validations/workshop"
import { logAction } from "@/lib/audit"

export async function GET(request: NextRequest) {
  const { error, user } = await requireAdmin()
  if (error) return error

  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get("page") || "1")
  const limit = parseInt(searchParams.get("limit") || "20")
  const skip = (page - 1) * limit

  const where: any = {}
  
  if (searchParams.get("search")) {
    where.OR = [
      { title: { contains: searchParams.get("search"), mode: "insensitive" } },
      { titleEn: { contains: searchParams.get("search"), mode: "insensitive" } },
    ]
  }
  
  if (searchParams.get("category")) {
    where.category = searchParams.get("category")
  }
  
  if (searchParams.get("location")) {
    where.location = searchParams.get("location")
  }
  
  if (searchParams.get("status") === "active") {
    where.isActive = true
  } else if (searchParams.get("status") === "inactive") {
    where.isActive = false
  }

  const [workshops, total] = await Promise.all([
    prisma.workshop.findMany({
      where,
      include: {
        dates: true,
        _count: {
          select: { bookings: true },
        },
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.workshop.count({ where }),
  ])

  return NextResponse.json({
    workshops,
    total,
    pages: Math.ceil(total / limit),
  })
}

export async function POST(request: NextRequest) {
  const { error, user } = await requireAdmin()
  if (error) return error

  try {
    const body = await request.json()
    const data = workshopSchema.parse(body)

    const workshop = await prisma.workshop.create({
      data: {
        slug: data.slug,
        title: data.title,
        titleEn: data.titleEn,
        description: data.description,
        descriptionEn: data.descriptionEn,
        fullDescription: data.fullDescription,
        fullDescriptionEn: data.fullDescriptionEn,
        category: data.category,
        level: data.level,
        location: data.location,
        price: data.price,
        lessons: data.lessons,
        duration: data.duration,
        durationEn: data.durationEn,
        imageUrl: data.imageUrl,
        isActive: data.isActive,
        isPopular: data.isPopular,
      },
    })

    await logAction(user.id, "CREATE", "Workshop", workshop.id, {
      after: workshop,
    })

    return NextResponse.json({ workshop })
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        {
          error: "VALIDATION_ERROR",
          message: "Validation failed",
          details: error.errors,
        },
        { status: 400 }
      )
    }

    if (error.code === "P2002") {
      return NextResponse.json(
        {
          error: "CONFLICT",
          message: "A workshop with this slug already exists",
        },
        { status: 409 }
      )
    }

    return NextResponse.json(
      {
        error: "INTERNAL_ERROR",
        message: error.message || "Failed to create workshop",
      },
      { status: 500 }
    )
  }
}
