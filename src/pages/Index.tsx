import { WellnessButton } from "@/components/ui/wellness-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  Bell, 
  Heart, 
  Users, 
  Activity, 
  Leaf, 
  Shield, 
  Smartphone,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react"
import heroImage from "@/assets/panchakarma-hero.jpg"

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated therapy scheduling with intelligent conflict resolution and optimal time allocation"
    },
    {
      icon: Bell,
      title: "Care Notifications",
      description: "Automated pre/post-procedure alerts and personalized wellness reminders"
    },
    {
      icon: Activity,
      title: "Real-Time Tracking",
      description: "Monitor therapy progress with visual analytics and personalized recovery milestones"
    },
    {
      icon: Heart,
      title: "Patient Feedback",
      description: "Integrated feedback loops to refine treatments and enhance healing outcomes"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into patient progress and practice performance"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Healthcare-grade security with full compliance for patient data protection"
    }
  ]

  const stats = [
    { value: "500+", label: "Active Patients" },
    { value: "50+", label: "Wellness Centers" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "System Reliability" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-wellness-green to-wellness-blue">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">PanchaFlow</h1>
              <p className="text-xs text-muted-foreground">Wellness Management</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium hover:text-wellness-green transition-colors">Features</a>
            <a href="#benefits" className="text-sm font-medium hover:text-wellness-green transition-colors">Benefits</a>
            <a href="#contact" className="text-sm font-medium hover:text-wellness-green transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <WellnessButton variant="ghost">Sign In</WellnessButton>
            <WellnessButton variant="healing" asChild>
              <a href="/dashboard">View Dashboard</a>
            </WellnessButton>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-wellness-soft text-wellness-green border-wellness-green/20">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Ayurvedic Innovation
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Modern
                  <span className="block text-transparent bg-gradient-to-r from-wellness-green to-wellness-blue bg-clip-text">
                    Panchakarma
                  </span>
                  Management
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Bridging ancient Ayurvedic wisdom with cutting-edge digital efficiency. 
                  Streamline your wellness practice with intelligent scheduling, patient tracking, and automated care protocols.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WellnessButton variant="wellness" size="xl" asChild>
                  <a href="/dashboard">
                    Explore Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </WellnessButton>
                <WellnessButton variant="soft" size="xl">
                  Schedule Demo
                </WellnessButton>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-wellness-green">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:ml-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Modern Panchakarma wellness center with traditional and digital elements"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wellness-green/20 to-transparent" />
              </div>
              
              {/* Floating UI Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-wellness p-4 border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-wellness-green to-wellness-blue rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Patient Progress</p>
                    <p className="text-sm text-muted-foreground">96% completion rate</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-wellness p-4 border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-wellness-amber rounded-full flex items-center justify-center">
                    <Bell className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Smart Alerts</p>
                    <p className="text-sm text-muted-foreground">Automated care reminders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-wellness-soft/30">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="bg-wellness-green/10 text-wellness-green border-wellness-green/20 mb-4">
              <Leaf className="h-3 w-3 mr-1" />
              Comprehensive Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Everything You Need for Modern Ayurvedic Practice
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From automated scheduling to real-time progress tracking, our platform integrates seamlessly 
              with your traditional Panchakarma practices while enhancing efficiency and patient care.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-wellness transition-all duration-300 bg-white/80 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-wellness-green to-wellness-blue rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="rounded-3xl bg-gradient-to-r from-wellness-green to-wellness-blue p-12 text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join wellness centers worldwide who trust PanchaFlow to deliver exceptional patient care 
              while maintaining the authentic essence of Ayurvedic healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WellnessButton variant="secondary" size="xl">
                Start Free Trial
              </WellnessButton>
              <WellnessButton variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-wellness-green">
                Schedule Consultation
              </WellnessButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-wellness-green to-wellness-blue">
                  <Leaf className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold">PanchaFlow</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Bridging ancient wisdom with modern efficiency for comprehensive wellness management.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-wellness-green transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-wellness-green transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-wellness-green transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-wellness-green transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-wellness-green transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-wellness-green transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-wellness-green transition-colors">About</a></li>
                <li><a href="#" className="hover:text-wellness-green transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-wellness-green transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 PanchaFlow. Empowering wellness practices worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
