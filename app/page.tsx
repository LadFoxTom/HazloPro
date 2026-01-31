import { redirect } from 'next/navigation'

export default function HomePage() {
  // Redirect to the static HTML site
  redirect('/index.html')
}
