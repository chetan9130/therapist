import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, User, X } from "lucide-react";
import { useState } from "react";

export const TopNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
              K
            </div>
            <span className="text-foreground">KPsych</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-smooth">
              Home
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-smooth">
              About us
            </Link>
            <Link to="/courses" className="text-muted-foreground hover:text-foreground transition-smooth">
              Courses
            </Link>
            <Link to="/book" className="text-muted-foreground hover:text-foreground transition-smooth">
              Book Therapist
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-smooth">
              Contact us
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/login">
              <Button variant="ghost" className="gap-2">
                <User className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link to="/book">
              <Button className="bg-primary hover:bg-primary/90">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/courses" 
                className="text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                to="/book" 
                className="text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Therapist
              </Link>
              <Link 
                to="/contact" 
                className="text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full gap-2">
                  <User className="h-4 w-4" />
                  Login
                </Button>
              </Link>
              <Link to="/book" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
