import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Heart, Users, Award, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We provide empathetic, non-judgmental support tailored to your unique needs.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified therapists bring years of experience and diverse specializations.",
    },
    {
      icon: Award,
      title: "Evidence-Based",
      description: "All our methods are grounded in proven psychological research and best practices.",
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "We measure progress and adapt our approach to ensure your success.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Clinical Psychologist",
      photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
      specialties: "Anxiety, Depression, PTSD",
    },
    {
      name: "Dr. James Chen",
      role: "Marriage & Family Therapist",
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
      specialties: "Relationships, Family Therapy",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Mindfulness Coach",
      photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400",
      specialties: "Stress, Mindfulness, Work-Life Balance",
    },
    {
      name: "Dr. Michael Roberts",
      role: "Addiction Specialist",
      photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
      specialties: "Addiction, Trauma, CBT",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* <TopNav /> */}
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-accent/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                About KPsych Services
              </h1>
              <p className="text-lg text-muted-foreground">
                We're dedicated to making professional mental health care accessible, affordable, and effective for everyone. Our mission is to empower individuals on their journey to mental wellness through expert therapy and evidence-based courses.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  At KPsych Services, we believe that everyone deserves access to quality mental health care. Our platform connects you with certified therapists and provides comprehensive wellness courses designed to support your mental health journey.
                </p>
                <p className="text-muted-foreground mb-4">
                  Whether you're seeking therapy for specific challenges or looking to develop better coping strategies through our courses, we're here to provide the support you need in a safe, confidential environment.
                </p>
                <p className="text-muted-foreground">
                  We combine clinical expertise with modern technology to deliver flexible, effective mental health solutions that fit your lifestyle and budget.
                </p>
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-medium">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="p-6 text-center hover:shadow-medium transition-smooth">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-4">
              Meet Our Team
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our diverse team of certified professionals brings expertise across multiple specializations
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <Card key={member.name} className="overflow-hidden hover:shadow-medium transition-smooth">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="font-heading font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.specialties}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* <Footer /> */}
      <WhatsAppButton />
    </div>
  );
};

export default About;
