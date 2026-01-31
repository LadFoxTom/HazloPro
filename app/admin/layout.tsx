import AdminLayout from "@/components/admin/AdminLayout"
import AdminSessionProvider from "@/components/admin/AdminSessionProvider"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HazloPro Admin',
  description: 'Admin panel voor HazloPro workshops',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AdminSessionProvider>
      <AdminLayout>{children}</AdminLayout>
    </AdminSessionProvider>
  )
}
