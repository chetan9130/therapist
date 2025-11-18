import { useState } from "react";
import { Search, Filter, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockCourses = [
  {
    id: 1,
    title: "Mindfulness & Stress Management",
    instructor: "Dr. Sarah Johnson",
    price: 4999,
    rating: 4.8,
    students: 1247,
    duration: "6 weeks",
    level: "Beginner",
    category: "Stress Management",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop",
    description: "Learn practical mindfulness techniques to reduce stress and improve well-being.",
  },
  {
    id: 2,
    title: "Cognitive Behavioral Therapy Basics",
    instructor: "Dr. Michael Chen",
    price: 5999,
    rating: 4.9,
    students: 2103,
    duration: "8 weeks",
    level: "Intermediate",
    category: "CBT",
    thumbnail: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=400&h=250&fit=crop",
    description: "Master CBT principles to transform negative thought patterns.",
  },
  {
    id: 3,
    title: "Anxiety Management Techniques",
    instructor: "Dr. Emily Rodriguez",
    price: 4499,
    rating: 4.7,
    students: 1856,
    duration: "5 weeks",
    level: "Beginner",
    category: "Anxiety",
    thumbnail: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=250&fit=crop",
    description: "Overcome anxiety with proven psychological strategies.",
  },
  {
    id: 4,
    title: "Depression: Understanding & Recovery",
    instructor: "Dr. James Wilson",
    price: 6499,
    rating: 4.9,
    students: 1542,
    duration: "10 weeks",
    level: "All Levels",
    category: "Depression",
    thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop",
    description: "Comprehensive course on understanding and managing depression.",
  },
  {
    id: 5,
    title: "Building Self-Esteem & Confidence",
    instructor: "Dr. Lisa Martinez",
    price: 3999,
    rating: 4.6,
    students: 2341,
    duration: "4 weeks",
    level: "Beginner",
    category: "Personal Growth",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
    description: "Develop unshakeable confidence and positive self-image.",
  },
  {
    id: 6,
    title: "Relationship & Communication Skills",
    instructor: "Dr. Amanda Foster",
    price: 5499,
    rating: 4.8,
    students: 1923,
    duration: "7 weeks",
    level: "All Levels",
    category: "Relationships",
    thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=250&fit=crop",
    description: "Strengthen your relationships through effective communication.",
  },
];

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesLevel && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.students - a.students; // popular
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/20 to-background py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Our Courses
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Learn at your own pace with expert-led courses designed to support your mental health journey.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-card rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses or instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Stress Management">Stress Management</SelectItem>
                <SelectItem value="CBT">CBT</SelectItem>
                <SelectItem value="Anxiety">Anxiety</SelectItem>
                <SelectItem value="Depression">Depression</SelectItem>
                <SelectItem value="Personal Growth">Personal Growth</SelectItem>
                <SelectItem value="Relationships">Relationships</SelectItem>
              </SelectContent>
            </Select>

            {/* Level Filter */}
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} of {mockCourses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/courses/${course.id}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge variant="secondary">{course.category}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
                <Link to={`/courses/${course.id}`}>
                  <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground">{course.instructor}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{course.students.toLocaleString()} students</span>
                  <span>•</span>
                  <span>{course.duration}</span>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">
                  ₹{course.price.toLocaleString()}
                </div>
                <Button asChild>
                  <Link to={`/courses/${course.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search query</p>
          </div>
        )}
      </section>
    </div>
  );
}
