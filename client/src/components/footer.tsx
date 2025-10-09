import { Link } from "wouter";
import { Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Code className="text-white text-xl" />
              </div>
              <span className="text-3xl font-bold gradient-text">MsoSTEM</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering women to code, creating pathways to success, and building a more inclusive tech industry, one student at a time.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Learn</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/courses">
                  <a className="hover:text-white transition-colors duration-300">HTML Fundamentals</a>
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  <a className="hover:text-white transition-colors duration-300">CSS Styling</a>
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  <a className="hover:text-white transition-colors duration-300">Responsive Design</a>
                </Link>
              </li>
              <li>
                <Link href="/playground">
                  <a className="hover:text-white transition-colors duration-300">Code Playground</a>
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  <a className="hover:text-white transition-colors duration-300">Learning Path</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/scholarships">
                  <a className="hover:text-white transition-colors duration-300">Scholarships</a>
                </Link>
              </li>
              <li>
                <a href="#community" className="hover:text-white transition-colors duration-300">Community</a>
              </li>
              <li>
                <a href="#success-stories" className="hover:text-white transition-colors duration-300">Success Stories</a>
              </li>
              <li>
                <a href="#mentorship" className="hover:text-white transition-colors duration-300">Mentorship</a>
              </li>
              <li>
                <a href="#career-guide" className="hover:text-white transition-colors duration-300">Career Guide</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 MsoSTEM. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
