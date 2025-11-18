import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, BookOpen, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-background" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-accent rounded-full text-secondary text-sm font-medium">
              Professional Mental Wellness
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Your Journey to{" "}
              <span className="text-primary">Better Mental Health</span> Starts Here
            </h1>
            <p className="text-lg text-muted-foreground">
              Connect with certified therapists and enroll in evidence-based mental wellness courses designed to help you thrive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/book">
                <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2 group">
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/5">
                  <BookOpen className="h-5 w-5" />
                  Explore Courses
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-heading font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Expert Therapists</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Wellness Courses</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 shadow-medium overflow-hidden">
              <img
                src="src/assets/bg.jpeg"
                alt="Mental wellness professional"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-medium p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <div className="font-semibold">5000+ Sessions</div>
                  <div className="text-sm text-muted-foreground">Completed this month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
