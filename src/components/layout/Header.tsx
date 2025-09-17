import { Calendar, Bell, User, Heart, Leaf } from "lucide-react"
import { WellnessButton } from "@/components/ui/wellness-button"
import { Badge } from "@/components/ui/badge"

interface HeaderProps {
  userType?: "patient" | "practitioner"
  userName?: string
}

export const Header = ({ userType = "practitioner", userName = "Dr. Sharma" }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-wellness-green to-wellness-blue">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">PanchaFlow</h1>
            <p className="text-xs text-muted-foreground">Wellness Management</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#dashboard" className="text-sm font-medium transition-colors hover:text-wellness-green">
            Dashboard
          </a>
          <a href="#schedule" className="flex items-center text-sm font-medium transition-colors hover:text-wellness-green">
            <Calendar className="h-4 w-4 mr-1" />
            Schedule
          </a>
          <a href="#patients" className="text-sm font-medium transition-colors hover:text-wellness-green">
            {userType === "practitioner" ? "Patients" : "My Therapy"}
          </a>
          <a href="#analytics" className="text-sm font-medium transition-colors hover:text-wellness-green">
            Progress
          </a>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <WellnessButton variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </WellnessButton>
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 bg-wellness-amber text-xs">
              3
            </Badge>
          </div>

          {/* Wellness Score */}
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded-full bg-wellness-soft">
            <Heart className="h-4 w-4 text-wellness-green" />
            <span className="text-sm font-medium text-wellness-green">98%</span>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">{userName}</p>
              <p className="text-xs text-muted-foreground capitalize">{userType}</p>
            </div>
            <WellnessButton variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </WellnessButton>
          </div>
        </div>
      </div>
    </header>
  )
}