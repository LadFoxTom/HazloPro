import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import { notFound } from "next/navigation"
import ContactDetail from "@/components/admin/contacts/ContactDetail"

export default async function ContactDetailPage({ params }: { params: { id: string } }) {
  const session = await auth()
  
  if (!session) {
    redirect("/admin/login")
  }

  const contact = await prisma.contact.findUnique({
    where: { id: params.id },
  })

  if (!contact) {
    notFound()
  }

  // Mark as read
  if (!contact.isRead) {
    await prisma.contact.update({
      where: { id: params.id },
      data: { isRead: true },
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Contact Message</h1>
        <p className="text-gray-600 mt-1">From {contact.name}</p>
      </div>
      <ContactDetail contact={contact} />
    </div>
  )
}
