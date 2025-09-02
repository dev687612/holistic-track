import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, GraduationCap, TrendingUp, Users, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Student Empowerment",
      description: "Build a verified, holistic digital profile from Day 1 that showcases all achievements and skills.",
      features: ["Comprehensive achievement tracking", "Verified digital credentials", "Career-ready portfolios"]
    },
    {
      icon: TrendingUp,
      title: "Enhanced Placements",
      description: "Better preparation for placements, fellowships, and postgraduate admissions with complete profiles.",
      features: ["Improved placement rates", "Scholarship applications", "Higher education readiness"]
    },
    {
      icon: Users,
      title: "Faculty Benefits",
      description: "Real-time data access for effective mentoring, tracking, and student development guidance.",
      features: ["Student progress monitoring", "Data-driven mentoring", "Performance analytics"]
    },
    {
      icon: Zap,
      title: "Institutional Efficiency",
      description: "Streamlined operations during accreditation audits and policy evaluations with centralized data.",
      features: ["NAAC preparation", "Reduced paperwork", "Digital transformation"]
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transform Education with
            <span className="bg-gradient-secondary bg-clip-text text-transparent"> Measurable Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the tangible benefits of our Smart Student Hub across all stakeholders 
            in the educational ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-semibold text-foreground">
                      {benefit.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {benefit.description}
                </CardDescription>
                <ul className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="bg-accent w-2 h-2 rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Institution?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join hundreds of institutions already using Smart Student Hub to empower 
              their students and streamline operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;