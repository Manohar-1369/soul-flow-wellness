import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  icon: LucideIcon
  trend?: {
    value: number
    label: string
    positive: boolean
  }
  variant?: "default" | "healing" | "wellness" | "medical" | "premium"
  className?: string
}

const variantStyles = {
  default: "border-border",
  healing: "border-wellness-green/20 bg-gradient-to-br from-wellness-green/5 to-transparent",
  wellness: "border-wellness-blue/20 bg-gradient-to-br from-wellness-blue/5 to-transparent", 
  medical: "border-wellness-blue/20 bg-gradient-to-br from-wellness-blue/5 to-transparent",
  premium: "border-wellness-amber/20 bg-gradient-to-br from-wellness-amber/5 to-transparent"
}

const iconStyles = {
  default: "text-foreground",
  healing: "text-wellness-green",
  wellness: "text-wellness-blue",
  medical: "text-wellness-blue",
  premium: "text-wellness-amber"
}

export const StatsCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend,
  variant = "default",
  className 
}: StatsCardProps) => {
  return (
    <Card className={cn("transition-all duration-300 hover:shadow-card", variantStyles[variant], className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={cn("h-5 w-5", iconStyles[variant])} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {trend && (
          <div className="flex items-center mt-2">
            <span className={cn(
              "text-xs font-medium",
              trend.positive ? "text-wellness-green" : "text-destructive"
            )}>
              {trend.positive ? "+" : ""}{trend.value}%
            </span>
            <span className="text-xs text-muted-foreground ml-1">{trend.label}</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}