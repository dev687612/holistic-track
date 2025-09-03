import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  Shield, 
  Smartphone, 
  Calendar, 
  Award, 
  Users, 
  Settings, 
  Download 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Dynamic Student Dashboard",
      description: "Real-time updates on academic performance, attendance, and credit-based activities with interactive analytics."
    },
    {
      icon: <Calendar className="h-8 w-8 text-secondary" />,
      title: "Activity Tracker",
      description: "Upload and validate participation in seminars, conferences, online courses, internships, and extra-curriculars."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Faculty Approval Panel",
      description: "Faculty or admin can approve uploaded records to maintain credibility and ensure data accuracy."
    },
    {
      icon: <Download className="h-8 w-8 text-primary" />,
      title: "Auto-Generated Digital Portfolio",
      description: "Downloadable and shareable verified student portfolio in PDF or web link format."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-secondary" />,
      title: "Analytics & Reporting",
      description: "For institutions to generate reports for NAAC, AICTE, NIRF, or internal evaluations."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-accent" />,
      title: "Mobile + Web Platform",
      description: "Access your achievements and portfolio from anywhere with our responsive design."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Integration Support",
      description: "Can link with existing Learning Management Systems (LMS), ERP, or digital university platforms."
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Comprehensive Record Tracking",
      description: "Track everything from academic achievements to extracurricular activities and community service."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Platform Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the comprehensive features that make Smart Student Hub the perfect solution for modern education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="bg-gradient-card p-3 rounded-full w-fit shadow-soft mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Features;