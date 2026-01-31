import { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  subtitle: string
  icon: LucideIcon
  trend?: { value: number; isPositive: boolean } | null
}

export default function StatsCard({ title, value, subtitle, icon: Icon, trend }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>
        <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-teal-600" />
        </div>
      </div>
      {trend && (
        <div className={`mt-4 flex items-center text-sm ${trend.isPositive ? "text-green-600" : "text-red-600"}`}>
          <span>{trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%</span>
          <span className="ml-2 text-gray-500">vs last month</span>
        </div>
      )}
    </div>
  )
}
