import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                K
              </div>
              <span className="font-heading font-bold text-xl">KPsych Services</span>
            </div>
            <p className="text-white/80 mb-4">
              Professional therapy services and mental wellness courses for your personal growth journey.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-smooth flex items-center justify-center">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-smooth flex items-center justify-center">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-smooth flex items-center justify-center">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-smooth flex items-center justify-center">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-white/80 hover:text-white transition-smooth">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-white/80 hover:text-white transition-smooth">
                  Book Therapist
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>Individual Therapy</li>
              <li>Couples Counseling</li>
              <li>Family Therapy</li>
              <li>Mental Wellness Courses</li>
              <li>Online Sessions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/80">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>hello@kpsych.com</span>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>123 Wellness Street, Suite 100<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2024 KPsych Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-white/60 hover:text-white transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
