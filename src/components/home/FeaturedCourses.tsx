import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Managing Anxiety & Stress",
    instructor: "Dr. Sarah Mitchell",
    thumbnail: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=600",
    price: 49.99,
    rating: 4.8,
    students: 2340,
    duration: "6 weeks",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Building Healthy Relationships",
    instructor: "Dr. James Chen",
    thumbnail: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80&w=600",
    price: 59.99,
    rating: 4.9,
    students: 1890,
    duration: "8 weeks",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Mindfulness & Meditation",
    instructor: "Dr. Priya Sharma",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600",
    price: 39.99,
    rating: 5.0,
    students: 3120,
    duration: "4 weeks",
    level: "Beginner",
  },
];

export const FeaturedCourses = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Featured Wellness Courses
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn at your own pace with expert-led courses
            </p>
          </div>
          <Link to="/courses">
            <Button variant="outline" className="hidden md:flex">
              View All Courses
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-medium transition-smooth group">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <Badge className="absolute top-3 right-3 bg-white text-foreground">
                  {course.level}
                </Badge>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">•</span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {course.students.toLocaleString()}
                  </div>
                </div>
                
                <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2">
                  {course.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  by {course.instructor}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-heading font-bold text-primary">
                    ${course.price}
                  </div>
                  <Link to={`/courses/${course.id}`}>
                    <Button className="bg-primary hover:bg-primary/90">
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/courses">
            <Button variant="outline" className="w-full">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
