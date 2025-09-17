import { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WellnessButton } from "@/components/ui/wellness-button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Leaf, 
  Heart,
  CheckCircle2,
  AlertCircle
} from "lucide-react"

const therapyTypes = [
  { id: 'abhyanga', name: 'Abhyanga', duration: 90, description: 'Full body oil massage' },
  { id: 'shirodhara', name: 'Shirodhara', duration: 60, description: 'Continuous oil pouring on forehead' },
  { id: 'udvartana', name: 'Udvartana', duration: 75, description: 'Herbal powder massage' },
  { id: 'panchakarma', name: 'Panchakarma', duration: 120, description: 'Complete detoxification program' },
  { id: 'swedana', name: 'Swedana', duration: 45, description: 'Therapeutic steam treatment' },
]

const practitioners = [
  { id: 'dr-sharma', name: 'Dr. Ayesha Sharma', speciality: 'Panchakarma Expert', available: true },
  { id: 'dr-patel', name: 'Dr. Raj Patel', speciality: 'Traditional Ayurveda', available: true },
  { id: 'dr-gupta', name: 'Dr. Priya Gupta', speciality: 'Women\'s Wellness', available: false },
]

const timeSlots = [
  '9:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM', '4:30 PM'
]

export const TherapyScheduler = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTherapy, setSelectedTherapy] = useState<string>('')
  const [selectedPractitioner, setSelectedPractitioner] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [patientNotes, setPatientNotes] = useState<string>('')

  const selectedTherapyData = therapyTypes.find(t => t.id === selectedTherapy)
  const selectedPractitionerData = practitioners.find(p => p.id === selectedPractitioner)

  const handleSchedule = () => {
    // Here would be the actual scheduling logic
    console.log('Scheduling appointment:', {
      date: selectedDate,
      therapy: selectedTherapy,
      practitioner: selectedPractitioner,
      time: selectedTime,
      notes: patientNotes
    })
  }

  const isFormValid = selectedDate && selectedTherapy && selectedPractitioner && selectedTime

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Schedule Therapy Session</h1>
        <p className="text-muted-foreground">Book your personalized Ayurvedic treatment</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Calendar Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2 text-wellness-green" />
              Select Date
            </CardTitle>
            <CardDescription>Choose your preferred appointment date</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < new Date() || date.getDay() === 0} // Disable past dates and Sundays
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Therapy & Time Selection */}
        <div className="space-y-6">
          {/* Therapy Type */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Leaf className="h-5 w-5 mr-2 text-wellness-green" />
                Therapy Type
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={selectedTherapy} onValueChange={setSelectedTherapy}>
                <SelectTrigger>
                  <SelectValue placeholder="Select therapy type" />
                </SelectTrigger>
                <SelectContent>
                  {therapyTypes.map(therapy => (
                    <SelectItem key={therapy.id} value={therapy.id}>
                      <div className="flex flex-col">
                        <span className="font-medium">{therapy.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {therapy.duration} min • {therapy.description}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {selectedTherapyData && (
                <div className="p-3 bg-wellness-soft rounded-lg border border-wellness-green/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-wellness-green">{selectedTherapyData.name}</span>
                    <Badge variant="outline">{selectedTherapyData.duration} minutes</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{selectedTherapyData.description}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Practitioner Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2 text-wellness-blue" />
                Select Practitioner
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {practitioners.map(practitioner => (
                  <div
                    key={practitioner.id}
                    onClick={() => practitioner.available && setSelectedPractitioner(practitioner.id)}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      selectedPractitioner === practitioner.id
                        ? 'border-wellness-green bg-wellness-soft'
                        : practitioner.available
                        ? 'border-border hover:border-wellness-green/50 hover:bg-wellness-soft/30'
                        : 'border-border bg-muted cursor-not-allowed opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{practitioner.name}</p>
                        <p className="text-sm text-muted-foreground">{practitioner.speciality}</p>
                      </div>
                      {practitioner.available ? (
                        <Badge className="bg-wellness-green/10 text-wellness-green">Available</Badge>
                      ) : (
                        <Badge variant="secondary">Unavailable</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Time Slots */}
      {selectedDate && selectedPractitioner && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-wellness-amber" />
              Available Time Slots
            </CardTitle>
            <CardDescription>
              Available times for {selectedDate.toLocaleDateString()} with {selectedPractitionerData?.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {timeSlots.map(time => (
                <WellnessButton
                  key={time}
                  variant={selectedTime === time ? "healing" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTime(time)}
                  className="h-12"
                >
                  {time}
                </WellnessButton>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Additional Notes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="h-5 w-5 mr-2 text-wellness-green" />
            Additional Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="notes">Special Requirements or Health Concerns</Label>
            <Textarea
              id="notes"
              placeholder="Please mention any allergies, health conditions, or special requirements..."
              value={patientNotes}
              onChange={(e) => setPatientNotes(e.target.value)}
              className="min-h-20"
            />
          </div>
        </CardContent>
      </Card>

      {/* Booking Summary & Confirmation */}
      {isFormValid && (
        <Card className="border-wellness-green/20 bg-wellness-soft/30">
          <CardHeader>
            <CardTitle className="flex items-center text-wellness-green">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Booking Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Therapy</p>
                <p className="font-semibold">{selectedTherapyData?.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Practitioner</p>
                <p className="font-semibold">{selectedPractitionerData?.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Date & Time</p>
                <p className="font-semibold">
                  {selectedDate?.toLocaleDateString()} at {selectedTime}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Duration</p>
                <p className="font-semibold">{selectedTherapyData?.duration} minutes</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <WellnessButton 
                variant="wellness" 
                size="lg" 
                onClick={handleSchedule}
                className="flex-1"
              >
                Confirm Booking
              </WellnessButton>
              <WellnessButton variant="outline" size="lg">
                Save as Draft
              </WellnessButton>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Pre-care Instructions Preview */}
      {selectedTherapyData && (
        <Card className="border-wellness-blue/20 bg-wellness-blue/5">
          <CardHeader>
            <CardTitle className="flex items-center text-wellness-blue">
              <AlertCircle className="h-5 w-5 mr-2" />
              Pre-Treatment Guidelines
            </CardTitle>
            <CardDescription>Important instructions for {selectedTherapyData.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>• Have a light meal 2-3 hours before treatment</p>
              <p>• Avoid cold beverages and heavy foods</p>
              <p>• Arrive 15 minutes early for consultation</p>
              <p>• Wear comfortable, loose-fitting clothes</p>
              <p>• Inform about any allergies or health changes</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}