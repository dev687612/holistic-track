import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, Users } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Students using digital learning platforms" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Smart Student
            <span className="block bg-gradient-to-r from-secondary-light to-accent-light bg-clip-text text-transparent">
              Achievement Hub
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Centralize, track, and showcase student achievements with our comprehensive 
            digital portfolio platform. Empowering students and institutions for success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Building Your Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-secondary-light" />
              </div>
              <div className="text-3xl font-bold mb-1">10,000+</div>
              <div className="text-white/80">Active Students</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Award className="h-8 w-8 text-accent-light" />
              </div>
              <div className="text-3xl font-bold mb-1">50,000+</div>
              <div className="text-white/80">Achievements Tracked</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <BookOpen className="h-8 w-8 text-secondary-light" />
              </div>
              <div className="text-3xl font-bold mb-1">200+</div>
              <div className="text-white/80">Institutions</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;