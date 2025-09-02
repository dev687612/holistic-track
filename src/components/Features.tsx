import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  CheckCircle, 
  Download, 
  FileText, 
  Shield, 
  Smartphone,
  Trophy,
  Users
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Dynamic Student Dashboard",
      description: "Real-time updates on academic performance, attendance, and credit-based activities with interactive analytics."
    },
    {
      icon: Trophy,
      title: "Activity Tracker",
      description: "Upload and validate participation in seminars, conferences, online courses, internships, and extra-curriculars."
    },
    {
      icon: CheckCircle,
      title: "Faculty Approval Panel",
      description: "Faculty and admin can approve uploaded records to maintain credibility and institutional standards."
    },
    {
      icon: Download,
      title: "Auto-Generated Portfolio",
      description: "Downloadable and shareable verified student portfolio in PDF or web link format for career opportunities."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Generate comprehensive reports for NAAC, AICTE, NIRF accreditation, or internal institutional evaluations."
    },
    {
      icon: Smartphone,
      title: "Mobile + Web Platform",
      description: "Access your achievements anywhere with our responsive web platform and dedicated mobile application."
    },
    {
      icon: Shield,
      title: "Integration Support",
      description: "Seamlessly connects with existing Learning Management Systems (LMS), ERP, or digital university platforms."
    },
    {
      icon: FileText,
      title: "Comprehensive Records",
      description: "Track conferences, certifications, competitions, leadership roles, internships, and community service."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Modern Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides everything institutions and students need 
            to track, verify, and showcase academic and co-curricular achievements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;