import { Header } from "@/components/layout/Header"
import { StatsCard } from "@/components/dashboard/StatsCard"
import { WellnessButton } from "@/components/ui/wellness-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Users, 
  Calendar, 
  Activity, 
  TrendingUp, 
  Clock, 
  Heart,
  Leaf,
  AlertCircle,
  CheckCircle2,
  Bell
} from "lucide-react"

export const Dashboard = () => {
  const upcomingAppointments = [
    { id: 1, patient: "Priya Sharma", therapy: "Abhyanga", time: "10:00 AM", status: "confirmed" },
    { id: 2, patient: "Rajesh Kumar", therapy: "Shirodhara", time: "11:30 AM", status: "pending" },
    { id: 3, patient: "Meera Patel", therapy: "Panchakarma", time: "2:00 PM", status: "confirmed" },
  ]

  const recentFeedback = [
    { id: 1, patient: "Anjali Gupta", rating: 5, therapy: "Abhyanga", comment: "Excellent treatment, feeling much better" },
    { id: 2, patient: "Vikram Singh", rating: 4, therapy: "Udvartana", comment: "Very relaxing session" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header userType="practitioner" userName="Dr. Ayesha Sharma" />
      
      <main className="container py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Good morning, Dr. Sharma 🌱</h1>
          <p className="text-muted-foreground mt-2">Here's your wellness practice overview for today</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatsCard
            title="Total Patients"
            value="142"
            description="Active in treatment"
            icon={Users}
            trend={{ value: 12, label: "from last month", positive: true }}
            variant="healing"
          />
          <StatsCard
            title="Today's Sessions"
            value="8"
            description="Scheduled treatments"
            icon={Calendar}
            trend={{ value: 5, label: "more than yesterday", positive: true }}
            variant="wellness"
          />
          <StatsCard
            title="Completion Rate"
            value="96%"
            description="Treatment success rate"
            icon={TrendingUp}
            trend={{ value: 2, label: "improvement", positive: true }}
            variant="medical"
          />
          <StatsCard
            title="Avg. Session Duration"
            value="85min"
            description="Per treatment session"
            icon={Clock}
            variant="premium"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Today's Schedule */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-wellness-green" />
                Today's Schedule
              </CardTitle>
              <CardDescription>Upcoming therapy sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-wellness-soft/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-wellness-green to-wellness-blue flex items-center justify-center">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{appointment.patient}</p>
                        <p className="text-sm text-muted-foreground">{appointment.therapy}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{appointment.time}</p>
                      <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"}>
                        {appointment.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <WellnessButton variant="soft" className="w-full mt-4">
                View Full Schedule
              </WellnessButton>
            </CardContent>
          </Card>

          {/* Notifications & Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2 text-wellness-amber" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-wellness-green/10 border border-wellness-green/20 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-wellness-green mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Treatment Complete</p>
                  <p className="text-xs text-muted-foreground">Priya completed Abhyanga session</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-wellness-amber/10 border border-wellness-amber/20 rounded-lg">
                <AlertCircle className="h-5 w-5 text-wellness-amber mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Pre-care Reminder</p>
                  <p className="text-xs text-muted-foreground">Send fasting guidelines to Rajesh</p>
                </div>
              </div>

              <WellnessButton variant="outline" size="sm" className="w-full">
                View All Notifications
              </WellnessButton>
            </CardContent>
          </Card>

          {/* Wellness Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-wellness-blue" />
                Wellness Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Patient Satisfaction</span>
                  <span className="font-medium">94%</span>
                </div>
                <Progress value={94} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Treatment Adherence</span>
                  <span className="font-medium">88%</span>
                </div>
                <Progress value={88} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Recovery Progress</span>
                  <span className="font-medium">76%</span>
                </div>
                <Progress value={76} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Recent Feedback */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Leaf className="h-5 w-5 mr-2 text-wellness-green" />
                Recent Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentFeedback.map((feedback) => (
                <div key={feedback.id} className="border-b last:border-0 pb-4 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-sm">{feedback.patient}</p>
                    <div className="flex">
                      {Array.from({ length: feedback.rating }).map((_, i) => (
                        <Heart key={i} className="h-3 w-3 fill-wellness-amber text-wellness-amber" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{feedback.therapy}</p>
                  <p className="text-xs mt-1">{feedback.comment}</p>
                </div>
              ))}
              <WellnessButton variant="ghost" size="sm" className="w-full">
                View All Feedback
              </WellnessButton>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}