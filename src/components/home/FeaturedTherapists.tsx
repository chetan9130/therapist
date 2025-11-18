import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const therapists = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
    specialties: ["Anxiety", "Depression", "PTSD"],
    languages: ["English", "Spanish"],
    rating: 4.9,
    nextAvailable: "Today, 2:00 PM",
  },
  {
    id: 2,
    name: "Dr. James Chen",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
    specialties: ["Relationships", "Family Therapy"],
    languages: ["English", "Mandarin"],
    rating: 4.8,
    nextAvailable: "Tomorrow, 10:00 AM",
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400",
    specialties: ["Stress", "Mindfulness", "Work-Life Balance"],
    languages: ["English", "Hindi"],
    rating: 5.0,
    nextAvailable: "Today, 4:30 PM",
  },
  {
    id: 4,
    name: "Dr. Michael Roberts",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    specialties: ["Addiction", "Trauma", "CBT"],
    languages: ["English"],
    rating: 4.9,
    nextAvailable: "Dec 28, 9:00 AM",
  },
];

export const FeaturedTherapists = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % therapists.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + therapists.length) % therapists.length);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Meet Our Expert Therapists
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certified professionals ready to support your mental wellness journey
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {therapists.slice(currentIndex, currentIndex + 3).map((therapist, idx) => {
              const actualIndex = (currentIndex + idx) % therapists.length;
              const actualTherapist = therapists[actualIndex];
              
              return (
                <Card key={actualTherapist.id} className="p-6 hover:shadow-medium transition-smooth">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={actualTherapist.photo}
                      alt={actualTherapist.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-accent"
                    />
                    <h3 className="font-heading font-semibold text-lg mb-1">
                      {actualTherapist.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{actualTherapist.rating}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {actualTherapist.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="text-sm text-muted-foreground mb-1">
                      Languages: {actualTherapist.languages.join(", ")}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-primary mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Next: {actualTherapist.nextAvailable}</span>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Book Appointment
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-medium flex items-center justify-center hover:scale-110 transition-smooth"
            aria-label="Previous therapists"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-medium flex items-center justify-center hover:scale-110 transition-smooth"
            aria-label="Next therapists"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
