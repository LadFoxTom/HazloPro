import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Create booking
    const booking = await prisma.booking.create({
      data: {
        workshopId: body.workshopId,
        workshopDateId: body.workshopDateId,
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        birthdate: new Date(body.birthdate),
        street: body.street,
        city: body.city,
        postalCode: body.postalCode,
        isCompany: body.isCompany || false,
        companyName: body.companyName,
        companyCif: body.companyCif,
        companyAddress: body.companyAddress,
        comments: body.comments,
      },
    })

    // Update booked spots
    await prisma.workshopDate.update({
      where: { id: body.workshopDateId },
      data: {
        bookedSpots: {
          increment: 1,
        },
      },
    })

    return NextResponse.json({ 
      success: true, 
      booking,
      message: "Booking created successfully" 
    })
  } catch (error: any) {
    console.error("Error creating booking:", error)
    return NextResponse.json(
      { error: "Failed to create booking", message: error.message },
      { status: 500 }
    )
  }
}
