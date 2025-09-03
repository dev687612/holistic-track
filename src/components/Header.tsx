import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Smart Student Hub</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</Link>
            <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link>
            <Link to="/benefits" className="text-muted-foreground hover:text-primary transition-colors">Benefits</Link>
            <Link to="/impact" className="text-muted-foreground hover:text-primary transition-colors">Impact</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="hidden md:inline-flex">
                Login
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;