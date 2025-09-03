import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Upload, UserCheck, FileText } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Register Your Profile",
      description: "Create your comprehensive student profile with academic details, goals, and interests.",
      details: ["Personal information setup", "Academic background entry", "Career goal setting", "Interest categories selection"]
    },
    {
      icon: <Upload className="h-8 w-8 text-secondary" />,
      title: "Upload Activities",
      description: "Document all your achievements, certifications, and participation records.",
      details: ["Conference attendance", "Workshop certificates", "Competition results", "Volunteer activities"]
    },
    {
      icon: <UserCheck className="h-8 w-8 text-accent" />,
      title: "Faculty Verification",
      description: "Faculty members review and verify your uploaded achievements for credibility.",
      details: ["Document validation", "Achievement verification", "Quality assurance", "Official approval"]
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Generate Portfolio",
      description: "Automatically create professional portfolios ready for job applications and admissions.",
      details: ["Automated formatting", "Professional templates", "PDF generation", "Shareable links"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How Smart Student Hub Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these simple steps to build your comprehensive digital portfolio and showcase your achievements
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {steps.map((step, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-card p-3 rounded-full shadow-soft">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-lg">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;