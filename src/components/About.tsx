import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle, 
  Eye, 
  Play, 
  Upload, 
  UserCheck, 
  Users 
} from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import facultyPreview from "@/assets/faculty-preview.jpg";
import portfolioPreview from "@/assets/portfolio-preview.jpg";

const About = () => {
  const steps = [
    {
      step: "01",
      title: "Student Registration",
      description: "Students create their profile and start documenting achievements from Day 1",
      icon: Users,
      details: ["Complete profile setup", "Connect academic records", "Set achievement goals"]
    },
    {
      step: "02", 
      title: "Activity Upload",
      description: "Upload certificates, project work, competition results, and extracurricular activities",
      icon: Upload,
      details: ["Drag & drop file uploads", "Multiple format support", "Automatic categorization"]
    },
    {
      step: "03",
      title: "Faculty Verification",
      description: "Faculty and administrators review and approve submitted achievements for credibility",
      icon: UserCheck,
      details: ["Real-time approval workflow", "Bulk verification tools", "Quality assurance checks"]
    },
    {
      step: "04",
      title: "Portfolio Generation",
      description: "Auto-generate professional portfolios ready for career opportunities",
      icon: CheckCircle,
      details: ["PDF export functionality", "Shareable web links", "Customizable templates"]
    }
  ];

  const previews = [
    {
      title: "Student Dashboard",
      description: "Comprehensive view of all achievements, progress tracking, and upcoming opportunities",
      image: dashboardPreview,
      features: ["Real-time progress tracking", "Achievement analytics", "Goal setting tools"]
    },
    {
      title: "Faculty Approval Panel",
      description: "Streamlined interface for faculty to review and verify student submissions",
      image: facultyPreview,
      features: ["Bulk approval actions", "Verification workflow", "Quality control tools"]
    },
    {
      title: "Generated Portfolio",
      description: "Professional portfolios automatically created from verified achievements",
      image: portfolioPreview,
      features: ["PDF export ready", "Shareable links", "Professional formatting"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How Smart Student Hub
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the simple yet powerful workflow that transforms how students track achievements 
            and institutions manage student records.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Simple 4-Step Process
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative animate-scale-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-primary z-10"></div>
                )}
                
                <Card className="bg-gradient-card border-border hover:shadow-medium transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-4 relative">
                      <step.icon className="h-8 w-8 text-white" />
                      <div className="absolute -top-2 -right-2 bg-secondary text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-center mb-4 leading-relaxed">
                      {step.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Previews */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Platform Previews
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {previews.map((preview, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={preview.image} 
                    alt={preview.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="animate-scale-in">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {preview.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {preview.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {preview.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Demo CTA */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              See It In Action
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Experience the full power of Smart Student Hub with our interactive demo. 
              See how easy it is to track, verify, and showcase achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo Video
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary group">
                Try Interactive Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;