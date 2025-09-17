import { Header } from "@/components/layout/Header"
import { StatsCard } from "@/components/dashboard/StatsCard"
import { WellnessButton } from "@/components/ui/wellness-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Calendar, 
  Activity, 
  Heart, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  Leaf,
  Bell,
  Target,
  TrendingUp,
  Star
} from "lucide-react"

export const PatientDashboard = () => {
  const upcomingSessions = [
    { id: 1, therapy: "Abhyanga", date: "Today", time: "2:00 PM", practitioner: "Dr. Sharma", status: "confirmed" },
    { id: 2, therapy: "Shirodhara", date: "Tomorrow", time: "10:00 AM", practitioner: "Dr. Patel", status: "pending" },
    { id: 3, therapy: "Panchakarma", date: "Dec 20", time: "9:00 AM", practitioner: "Dr. Sharma", status: "scheduled" },
  ]

  const therapyProgress = [
    { name: "Abhyanga", completed: 8, total: 12, progress: 67 },
    { name: "Shirodhara", completed: 5, total: 8, progress: 63 },
    { name: "Udvartana", completed: 3, total: 6, progress: 50 },
  ]

  const todayPrecautions = [
    { type: "pre", title: "Light Breakfast", description: "Have a light meal 2 hours before treatment", completed: true },
    { type: "pre", title: "Avoid Cold Drinks", description: "No cold beverages 1 hour before session", completed: false },
    { type: "post", title: "Rest Period", description: "Rest for 30 minutes after treatment", completed: false },
    { type: "post", title: "Warm Water", description: "Drink warm water throughout the day", completed: false },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header userType="patient" userName="Priya Sharma" />
      
      <main className="container py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Priya 🌸</h1>
          <p className="text-muted-foreground mt-2">Continue your wellness journey with personalized Ayurvedic care</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatsCard
            title="Total Sessions"
            value="16"
            description="Completed treatments"
            icon={CheckCircle2}
            trend={{ value: 3, label: "this week", positive: true }}
            variant="healing"
          />
          <StatsCard
            title="Next Session"
            value="Today"
            description="2:00 PM - Abhyanga"
            icon={Clock}
            variant="wellness"
          />
          <StatsCard
            title="Progress Score"
            value="78%"
            description="Overall improvement"
            icon={TrendingUp}
            trend={{ value: 8, label: "this month", positive: true }}
            variant="medical"
          />
          <StatsCard
            title="Wellness Rating"
            value="4.8/5"
            description="Your feedback average"
            icon={Star}
            variant="premium"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Upcoming Sessions */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-wellness-green" />
                Upcoming Sessions
              </CardTitle>
              <CardDescription>Your scheduled therapy appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-wellness-soft/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-wellness-green to-wellness-blue flex items-center justify-center">
                        <Leaf className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{session.therapy}</p>
                        <p className="text-sm text-muted-foreground">{session.practitioner}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{session.date} • {session.time}</p>
                      <Badge variant={session.status === "confirmed" ? "default" : "secondary"}>
                        {session.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <WellnessButton variant="soft" className="w-full mt-4">
                Schedule New Session
              </WellnessButton>
            </CardContent>
          </Card>

          {/* Today's Care Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2 text-wellness-amber" />
                Today's Care Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {todayPrecautions.map((precaution, index) => (
                <div key={index} className={`flex items-start space-x-3 p-3 rounded-lg border ${
                  precaution.completed 
                    ? "bg-wellness-green/10 border-wellness-green/20" 
                    : precaution.type === "pre"
                    ? "bg-wellness-blue/10 border-wellness-blue/20"
                    : "bg-wellness-amber/10 border-wellness-amber/20"
                }`}>
                  {precaution.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-wellness-green mt-0.5" />
                  ) : (
                    <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                      precaution.type === "pre" ? "text-wellness-blue" : "text-wellness-amber"
                    }`} />
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium">{precaution.title}</p>
                    <p className="text-xs text-muted-foreground">{precaution.description}</p>
                    <Badge className="mt-1" variant={precaution.type === "pre" ? "default" : "secondary"}>
                      {precaution.type === "pre" ? "Pre-care" : "Post-care"}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Therapy Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-wellness-blue" />
                Therapy Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {therapyProgress.map((therapy) => (
                <div key={therapy.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{therapy.name}</span>
                    <span className="text-muted-foreground">{therapy.completed}/{therapy.total}</span>
                  </div>
                  <Progress value={therapy.progress} className="h-2 mb-1" />
                  <p className="text-xs text-muted-foreground">{therapy.progress}% complete</p>
                </div>
              ))}
              <WellnessButton variant="outline" size="sm" className="w-full mt-4">
                View Detailed Progress
              </WellnessButton>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2 text-wellness-green" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <WellnessButton variant="healing" className="w-full justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Report Symptoms
              </WellnessButton>
              <WellnessButton variant="wellness" className="w-full justify-start">
                <Star className="h-4 w-4 mr-2" />
                Rate Last Session
              </WellnessButton>
              <WellnessButton variant="soft" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Reschedule Appointment
              </WellnessButton>
              <WellnessButton variant="outline" className="w-full justify-start">
                <Heart className="h-4 w-4 mr-2" />
                Contact Practitioner
              </WellnessButton>
            </CardContent>
          </Card>

          {/* Wellness Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Leaf className="h-5 w-5 mr-2 text-wellness-green" />
                Wellness Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-wellness-soft rounded-lg border border-wellness-green/20">
                <p className="text-sm font-medium text-wellness-green mb-1">Daily Routine</p>
                <p className="text-xs text-muted-foreground">
                  Wake up before sunrise and practice deep breathing for 10 minutes to align with natural rhythms.
                </p>
              </div>
              <div className="p-3 bg-wellness-blue/10 rounded-lg border border-wellness-blue/20">
                <p className="text-sm font-medium text-wellness-blue mb-1">Nutrition Focus</p>
                <p className="text-xs text-muted-foreground">
                  Include warm, cooked foods and avoid cold drinks to support your digestive fire (Agni).
                </p>
              </div>
              <WellnessButton variant="ghost" size="sm" className="w-full">
                View All Tips
              </WellnessButton>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}