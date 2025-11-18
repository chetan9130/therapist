import { useState } from "react";
import { Check, Calendar, Clock, FileText, CreditCard, ChevronRight, ChevronLeft, User, Video, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { toast } from "@/hooks/use-toast";
import { format } from "date-fns";

const mockTherapists = [
  {
    id: 1,
    name: "Dr. Kavita Bhargava",
    specialties: ["Anxiety", "Depression", "Stress Management"],
    languages: ["English", "Hindi"],
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    nextAvailable: "Today, 3:00 PM",
    appointmentTypes: [
      { id: 1, name: "Initial Consultation", duration: 60, price: 1500, description: "First-time comprehensive assessment" },
      { id: 2, name: "Follow-up Session", duration: 45, price: 1200, description: "Regular therapy session" },
      { id: 3, name: "Quick Check-in", duration: 30, price: 800, description: "Brief progress check" },
    ],
  },
 
];

const generateTimeSlots = (date: Date) => {
  const slots = [];
  const startHour = 9;
  const endHour = 18;
  
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute of [0, 30]) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      const isAvailable = Math.random() > 0.3; // Mock availability
      slots.push({ time, isAvailable });
    }
  }
  return slots;
};

export default function BookTherapist() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTherapist, setSelectedTherapist] = useState<typeof mockTherapists[0] | null>(null);
  const [selectedAppointmentType, setSelectedAppointmentType] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [intakeForm, setIntakeForm] = useState({
    reason: "",
    previousTherapy: "",
    medications: "",
    concerns: "",
  });
  const [consentGiven, setConsentGiven] = useState(false);

  const steps = [
    { number: 1, title: "Select Therapist", icon: User },
    { number: 2, title: "Appointment Type", icon: Video },
    { number: 3, title: "Date & Time", icon: Calendar },
    { number: 4, title: "Intake Form", icon: FileText },
    { number: 5, title: "Payment", icon: CreditCard },
  ];

  const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : [];

  const handleNext = () => {
    if (currentStep === 1 && !selectedTherapist) {
      toast({ title: "Please select a therapist", variant: "destructive" });
      return;
    }
    if (currentStep === 2 && !selectedAppointmentType) {
      toast({ title: "Please select an appointment type", variant: "destructive" });
      return;
    }
    if (currentStep === 3 && (!selectedDate || !selectedTime)) {
      toast({ title: "Please select date and time", variant: "destructive" });
      return;
    }
    if (currentStep === 4 && !consentGiven) {
      toast({ title: "Please provide consent to continue", variant: "destructive" });
      return;
    }
    if (currentStep === 5) {
      handleBooking();
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleBooking = () => {
    toast({
      title: "Booking Confirmed!",
      description: `Your appointment with ${selectedTherapist?.name} is scheduled for ${format(selectedDate!, "PPP")} at ${selectedTime}`,
    });
    // Redirect to dashboard or confirmation page
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                      currentStep >= step.number
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-muted bg-background text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="h-6 w-6" />
                    ) : (
                      <step.icon className="h-6 w-6" />
                    )}
                  </div>
                  <div className="text-center mt-2">
                    <div className="text-xs font-medium hidden sm:block">{step.title}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-2 transition-colors ${
                      currentStep > step.number ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{steps[currentStep - 1].title}</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Step 1: Select Therapist */}
            {currentStep === 1 && (
              <div className="space-y-4">
                {mockTherapists.map((therapist) => (
                  <Card
                    key={therapist.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedTherapist?.id === therapist.id ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setSelectedTherapist(therapist)}
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <img
                          src={therapist.image}
                          alt={therapist.name}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-semibold">{therapist.name}</h3>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-primary">★</span>
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  {therapist.rating} ({therapist.reviews} reviews)
                                </span>
                              </div>
                            </div>
                            {selectedTherapist?.id === therapist.id && (
                              <Badge className="bg-primary">Selected</Badge>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {therapist.specialties.map((specialty) => (
                              <Badge key={specialty} variant="secondary">{specialty}</Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Languages: {therapist.languages.join(", ")}</span>
                            <span>•</span>
                            <span className="text-primary font-medium">Next: {therapist.nextAvailable}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Step 2: Appointment Type */}
            {currentStep === 2 && selectedTherapist && (
              <RadioGroup value={selectedAppointmentType?.id.toString()}>
                <div className="space-y-4">
                  {selectedTherapist.appointmentTypes.map((type) => (
                    <Card
                      key={type.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedAppointmentType?.id === type.id ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setSelectedAppointmentType(type)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <RadioGroupItem value={type.id.toString()} id={`type-${type.id}`} />
                            <div className="flex-1">
                              <Label htmlFor={`type-${type.id}`} className="text-lg font-semibold cursor-pointer">
                                {type.name}
                              </Label>
                              <p className="text-muted-foreground mt-1">{type.description}</p>
                              <div className="flex items-center gap-4 mt-3 text-sm">
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{type.duration} minutes</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">₹{type.price}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </RadioGroup>
            )}

            {/* Step 3: Date & Time */}
            {currentStep === 3 && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Select Date</h3>
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border"
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-4">
                    Available Slots {selectedDate && `on ${format(selectedDate, "PP")}`}
                  </h3>
                  <div className="grid grid-cols-3 gap-2 max-h-96 overflow-y-auto">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot.time}
                        variant={selectedTime === slot.time ? "default" : "outline"}
                        disabled={!slot.isAvailable}
                        onClick={() => setSelectedTime(slot.time)}
                        className="w-full"
                      >
                        {slot.time}
                      </Button>
                    ))}
                  </div>
                  {selectedDate && selectedTime && (
                    <div className="mt-6 p-4 bg-accent rounded-lg">
                      <p className="text-sm font-medium">Selected Appointment</p>
                      <p className="text-lg font-semibold mt-1">
                        {format(selectedDate, "PPP")} at {selectedTime}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Slot will be held for 5 minutes during checkout
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Intake Form */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="reason">Primary reason for seeking therapy</Label>
                  <Textarea
                    id="reason"
                    placeholder="Tell us briefly what brings you here..."
                    value={intakeForm.reason}
                    onChange={(e) => setIntakeForm({ ...intakeForm, reason: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="previous">Previous therapy experience (if any)</Label>
                  <Textarea
                    id="previous"
                    placeholder="Have you attended therapy before?"
                    value={intakeForm.previousTherapy}
                    onChange={(e) => setIntakeForm({ ...intakeForm, previousTherapy: e.target.value })}
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medications">Current medications (if any)</Label>
                  <Input
                    id="medications"
                    placeholder="List any medications you're taking"
                    value={intakeForm.medications}
                    onChange={(e) => setIntakeForm({ ...intakeForm, medications: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="concerns">Any specific concerns or goals</Label>
                  <Textarea
                    id="concerns"
                    placeholder="What would you like to achieve from therapy?"
                    value={intakeForm.concerns}
                    onChange={(e) => setIntakeForm({ ...intakeForm, concerns: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="border-t pt-6 mt-6">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={consentGiven}
                      onCheckedChange={(checked) => setConsentGiven(checked as boolean)}
                    />
                    <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                      I consent to sharing this information with my therapist. I understand that this information
                      will be kept confidential and used only to provide better care. I also consent to video
                      recording of sessions for quality assurance purposes (recordings are stored securely and
                      deleted after 30 days).
                    </Label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Payment */}
            {currentStep === 5 && selectedTherapist && selectedAppointmentType && (
              <div className="space-y-6">
                <div className="bg-accent/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Booking Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Therapist</span>
                      <span className="font-medium">{selectedTherapist.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Session Type</span>
                      <span className="font-medium">{selectedAppointmentType.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{selectedAppointmentType.duration} minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date & Time</span>
                      <span className="font-medium">
                        {selectedDate && format(selectedDate, "PP")} at {selectedTime}
                      </span>
                    </div>
                    <div className="border-t pt-3 mt-3 flex justify-between text-lg">
                      <span className="font-semibold">Total Amount</span>
                      <span className="font-bold text-primary">₹{selectedAppointmentType.price}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Select Payment Method</h3>
                  <RadioGroup defaultValue="razorpay">
                    <Card className="cursor-pointer hover:shadow-md">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <RadioGroupItem value="razorpay" id="razorpay" />
                          <Label htmlFor="razorpay" className="flex-1 cursor-pointer">
                            <div className="font-semibold">Razorpay</div>
                            <div className="text-sm text-muted-foreground">
                              Credit/Debit Card, UPI, Net Banking
                            </div>
                          </Label>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer hover:shadow-md">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <RadioGroupItem value="stripe" id="stripe" />
                          <Label htmlFor="stripe" className="flex-1 cursor-pointer">
                            <div className="font-semibold">Stripe</div>
                            <div className="text-sm text-muted-foreground">
                              International cards accepted
                            </div>
                          </Label>
                        </div>
                      </CardContent>
                    </Card>
                  </RadioGroup>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Cancellation Policy</h4>
                  <p className="text-xs text-muted-foreground">
                    Free cancellation up to 12 hours before appointment. Cancel within 12 hours for 50% refund.
                    No-shows are non-refundable.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button onClick={handleNext} size="lg">
            {currentStep === 5 ? "Confirm & Pay" : "Continue"}
            {currentStep < 5 && <ChevronRight className="ml-2 h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
