import { Button } from "@/components/ui/button";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-secondary p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Smart Student Hub</span>
            </div>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6 max-w-md">
              Empowering students and institutions with comprehensive achievement tracking 
              and portfolio management solutions for the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" className="w-fit">
                Request Demo
              </Button>
              <Button variant="outline" className="w-fit border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Sales
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Platform</h3>
            <ul className="space-y-4">
              <li><a href="#features" className="text-primary-foreground/80 hover:text-secondary transition-colors">Features</a></li>
              <li><a href="#benefits" className="text-primary-foreground/80 hover:text-secondary transition-colors">Benefits</a></li>
              <li><a href="#impact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Impact</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">info@smartstudenthub.edu</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">Education District, Learning City</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80">
              © 2024 Smart Student Hub. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;