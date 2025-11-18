import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Clock, Users, Award, Play, CheckCircle2, BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const mockCourseDetail = {
  id: 1,
  title: "Mindfulness & Stress Management",
  instructor: "Dr. Sarah Johnson",
  instructorBio: "Licensed Clinical Psychologist with 15+ years of experience in mindfulness-based therapy.",
  instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  price: 4999,
  originalPrice: 7999,
  rating: 4.8,
  students: 1247,
  duration: "6 weeks",
  level: "Beginner",
  category: "Stress Management",
  thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop",
  previewVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  description: "Learn practical mindfulness techniques to reduce stress, improve focus, and enhance your overall well-being. This comprehensive course combines ancient wisdom with modern psychology.",
  whatYoullLearn: [
    "Core mindfulness meditation techniques",
    "Stress identification and management strategies",
    "Breathing exercises for instant calm",
    "Body scan and progressive relaxation",
    "Mindful eating and living practices",
    "Building a sustainable daily practice",
  ],
  requirements: [
    "No prior experience needed",
    "A quiet space for practice",
    "Open mind and willingness to learn",
  ],
  modules: [
    {
      id: 1,
      title: "Introduction to Mindfulness",
      lessons: [
        { id: 1, title: "What is Mindfulness?", duration: "12:30", type: "video", isPreview: true },
        { id: 2, title: "The Science Behind Mindfulness", duration: "18:45", type: "video", isPreview: false },
        { id: 3, title: "Setting Your Intentions", duration: "10:15", type: "video", isPreview: false },
        { id: 4, title: "Module 1 Resources", duration: "", type: "pdf", isPreview: false },
      ],
    },
    {
      id: 2,
      title: "Fundamentals of Meditation",
      lessons: [
        { id: 5, title: "Preparing Your Space", duration: "8:20", type: "video", isPreview: false },
        { id: 6, title: "Posture and Positioning", duration: "15:30", type: "video", isPreview: false },
        { id: 7, title: "Guided Meditation Practice", duration: "20:00", type: "video", isPreview: false },
        { id: 8, title: "Common Challenges", duration: "12:45", type: "video", isPreview: false },
      ],
    },
    {
      id: 3,
      title: "Breathing Techniques",
      lessons: [
        { id: 9, title: "Diaphragmatic Breathing", duration: "14:20", type: "video", isPreview: false },
        { id: 10, title: "4-7-8 Breathing Method", duration: "11:15", type: "video", isPreview: false },
        { id: 11, title: "Box Breathing for Stress", duration: "9:30", type: "video", isPreview: false },
      ],
    },
    {
      id: 4,
      title: "Body Awareness & Relaxation",
      lessons: [
        { id: 12, title: "Body Scan Meditation", duration: "25:00", type: "video", isPreview: false },
        { id: 13, title: "Progressive Muscle Relaxation", duration: "18:30", type: "video", isPreview: false },
        { id: 14, title: "Yoga for Mindfulness", duration: "22:15", type: "video", isPreview: false },
      ],
    },
    {
      id: 5,
      title: "Mindful Living",
      lessons: [
        { id: 15, title: "Mindful Eating Practices", duration: "16:40", type: "video", isPreview: false },
        { id: 16, title: "Mindfulness in Daily Activities", duration: "13:25", type: "video", isPreview: false },
        { id: 17, title: "Dealing with Difficult Emotions", duration: "19:10", type: "video", isPreview: false },
      ],
    },
    {
      id: 6,
      title: "Building Your Practice",
      lessons: [
        { id: 18, title: "Creating a Routine", duration: "14:50", type: "video", isPreview: false },
        { id: 19, title: "Overcoming Obstacles", duration: "17:20", type: "video", isPreview: false },
        { id: 20, title: "Your Mindfulness Journey", duration: "11:30", type: "video", isPreview: false },
        { id: 21, title: "Course Completion Certificate", duration: "", type: "certificate", isPreview: false },
      ],
    },
  ],
  reviews: [
    {
      id: 1,
      user: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      comment: "Life-changing course! Dr. Johnson's teaching style is so calming and effective.",
    },
    {
      id: 2,
      user: "Rahul Mehta",
      rating: 5,
      date: "1 month ago",
      comment: "The practical techniques helped me manage my work stress significantly.",
    },
    {
      id: 3,
      user: "Anita Desai",
      rating: 4,
      date: "1 month ago",
      comment: "Great content and well-structured. Would love more advanced modules.",
    },
  ],
};

export default function CourseDetail() {
  const { id } = useParams();
  const [showCheckout, setShowCheckout] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const course = mockCourseDetail;

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const totalDuration = "8h 30m";

  const handleEnroll = () => {
    setShowCheckout(true);
  };

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === "welcome10") {
      toast({
        title: "Coupon Applied!",
        description: "You saved ₹500 with code WELCOME10",
      });
    } else {
      toast({
        title: "Invalid Coupon",
        description: "Please check your coupon code and try again",
        variant: "destructive",
      });
    }
  };

  const handleProceedToPayment = () => {
    toast({
      title: "Redirecting to Payment",
      description: "Please complete your payment to access the course",
    });
    // In real app, this would redirect to payment gateway
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Course Header */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/20 to-background">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Badge variant="secondary" className="mb-2">{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-muted-foreground">({course.students.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  <span>{totalDuration} total</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-5 w-5" />
                  <span>{totalLessons} lessons</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={course.instructorImage}
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium">{course.instructor}</p>
                  <p className="text-sm text-muted-foreground">{course.instructorBio}</p>
                </div>
              </div>
            </div>

            {/* Sticky Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                    <iframe
                      src={course.previewVideo}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-primary">₹{course.price.toLocaleString()}</span>
                      <span className="text-lg text-muted-foreground line-through">₹{course.originalPrice.toLocaleString()}</span>
                      <Badge variant="destructive" className="ml-auto">38% OFF</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Limited time offer!</p>
                  </div>
                  <Button onClick={handleEnroll} className="w-full mb-3" size="lg">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Preview
                  </Button>
                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Lifetime access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Downloadable resources</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Access on mobile and desktop</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle>What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {course.whatYoullLearn.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Curriculum */}
            <Card>
              <CardHeader>
                <CardTitle>Course Curriculum</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {course.modules.length} modules • {totalLessons} lessons • {totalDuration}
                </p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {course.modules.map((module) => (
                    <AccordionItem key={module.id} value={`module-${module.id}`}>
                      <AccordionTrigger className="text-left">
                        <div>
                          <div className="font-semibold">{module.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {module.lessons.length} lessons
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-4">
                          {module.lessons.map((lesson) => (
                            <div key={lesson.id} className="flex items-center justify-between py-2 hover:bg-accent/50 px-3 rounded">
                              <div className="flex items-center gap-3">
                                {lesson.type === "video" && <Play className="h-4 w-4 text-muted-foreground" />}
                                {lesson.type === "pdf" && <Download className="h-4 w-4 text-muted-foreground" />}
                                {lesson.type === "certificate" && <Award className="h-4 w-4 text-primary" />}
                                <span className="text-sm">{lesson.title}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                {lesson.duration && (
                                  <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                                )}
                                {lesson.isPreview && (
                                  <Badge variant="outline" className="text-xs">Preview</Badge>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Student Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {course.reviews.map((review) => (
                  <div key={review.id} className="border-b last:border-0 pb-6 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold">{review.user}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "fill-primary text-primary" : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Complete Your Enrollment</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-accent/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{course.title}</h4>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Course Fee</span>
                <span className="font-semibold">₹{course.price.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="coupon">Have a coupon code?</Label>
              <div className="flex gap-2">
                <Input
                  id="coupon"
                  placeholder="Enter code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <Button onClick={handleApplyCoupon} variant="outline">Apply</Button>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold text-primary">₹{course.price.toLocaleString()}</span>
              </div>
              <Button onClick={handleProceedToPayment} className="w-full" size="lg">
                Proceed to Payment
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
