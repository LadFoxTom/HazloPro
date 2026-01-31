import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import ContactsTable from "@/components/admin/contacts/ContactsTable"

export default async function ContactsPage({
  searchParams,
}: {
  searchParams: { page?: string; status?: string }
}) {
  const session = await auth()
  
  if (!session) {
    redirect("/admin/login")
  }

  const page = parseInt(searchParams.page || "1")
  const limit = 20
  const skip = (page - 1) * limit

  const where: any = {}
  
  if (searchParams.status === "unread") {
    where.isRead = false
  } else if (searchParams.status === "read") {
    where.isRead = true
  }

  const [contacts, total] = await Promise.all([
    prisma.contact.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.contact.count({ where }),
  ])

  const totalPages = Math.ceil(total / limit)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
        <p className="text-gray-600 mt-1">Manage contact form submissions</p>
      </div>
      <ContactsTable 
        contacts={contacts} 
        currentPage={page}
        totalPages={totalPages}
        total={total}
      />
    </div>
  )
}
