import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Building, CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "For Students",
      description: "Empower your academic journey with comprehensive achievement tracking",
      features: [
        "Build verified digital portfolio",
        "Track all achievements in one place",
        "Prepare for placements and admissions",
        "Showcase skills and experiences",
        "Access career planning tools"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "For Faculty",
      description: "Streamline student mentoring and tracking with real-time data",
      features: [
        "Real-time student progress monitoring",
        "Simplified verification process",
        "Data-driven mentoring insights",
        "Reduced administrative workload",
        "Enhanced student engagement"
      ]
    },
    {
      icon: <Building className="h-8 w-8 text-accent" />,
      title: "For Institutions",
      description: "Modernize operations and improve accreditation readiness",
      features: [
        "NAAC/AICTE compliance support",
        "Comprehensive analytics dashboard",
        "Reduced paperwork and errors",
        "Enhanced institutional reputation",
        "Data-driven decision making"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Benefits for Everyone
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Smart Student Hub delivers value to students, faculty, and institutions through comprehensive digital transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-card p-3 rounded-full w-fit shadow-soft mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                <CardDescription className="text-lg">
                  {benefit.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary p-8 rounded-2xl text-center shadow-medium">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Join hundreds of educational institutions already using Smart Student Hub to enhance student success and institutional efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Schedule Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Sales
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Benefits;