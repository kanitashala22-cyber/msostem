import { Link } from "wouter";
import { Code, Send } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      return await apiRequest("/api/contact", "POST", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });
      setName("");
      setEmail("");
      setMessage("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate({ name, email, message });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Form Section */}
        <div className="mb-16 bg-gray-800 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-400">Have questions? We'd love to hear from you!</p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
                  data-testid="input-contact-name"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
                  data-testid="input-contact-email"
                />
              </div>
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary min-h-[150px]"
                data-testid="textarea-contact-message"
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                data-testid="button-send-message"
              >
                {contactMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>

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
