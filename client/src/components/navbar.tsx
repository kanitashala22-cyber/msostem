import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Code } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Code className="text-white text-lg" />
            </div>
            <span className="text-2xl font-bold gradient-text">CodeHer</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/courses">
              <a className={`font-medium transition-colors duration-300 ${
                isActive('/courses') 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}>
                Courses
              </a>
            </Link>
            <Link href="/scholarships">
              <a className={`font-medium transition-colors duration-300 ${
                isActive('/scholarships') 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}>
                Scholarships
              </a>
            </Link>
            <Link href="/playground">
              <a className={`font-medium transition-colors duration-300 ${
                isActive('/playground') 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}>
                Playground
              </a>
            </Link>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
              About
            </a>
            <Button className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Start Learning
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            <Link href="/courses">
              <a 
                className={`block font-medium transition-colors duration-300 ${
                  isActive('/courses') 
                    ? 'text-primary' 
                    : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </a>
            </Link>
            <Link href="/scholarships">
              <a 
                className={`block font-medium transition-colors duration-300 ${
                  isActive('/scholarships') 
                    ? 'text-primary' 
                    : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Scholarships
              </a>
            </Link>
            <Link href="/playground">
              <a 
                className={`block font-medium transition-colors duration-300 ${
                  isActive('/playground') 
                    ? 'text-primary' 
                    : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Playground
              </a>
            </Link>
            <a 
              href="#about" 
              className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <Button className="w-full bg-primary text-white hover:bg-primary/90 transition-all duration-300">
              Start Learning
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
