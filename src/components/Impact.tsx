import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, FileCheck, PieChart, Sparkles, Target, Zap } from "lucide-react";

const Impact = () => {
  const impacts = [
    {
      icon: Target,
      title: "Verified Digital Profiles",
      description: "Students build comprehensive, verified profiles from Day 1 of their academic journey",
      metric: "100%",
      metricLabel: "Profile Completeness"
    },
    {
      icon: FileCheck,
      title: "Reduced Administrative Burden",
      description: "Dramatically decrease paperwork and improve transparency during audits and accreditations",
      metric: "75%",
      metricLabel: "Time Saved"
    },
    {
      icon: Award,
      title: "Enhanced Career Readiness",
      description: "Better preparation for placements, fellowships, and postgraduate admissions",
      metric: "85%",
      metricLabel: "Placement Rate Improvement"
    },
    {
      icon: PieChart,
      title: "Data-Driven Decisions",
      description: "Empower faculty with real-time data for effective mentoring and institutional planning",
      metric: "90%",
      metricLabel: "Faculty Satisfaction"
    },
    {
      icon: Sparkles,
      title: "Activity Participation",
      description: "Encourage participation in co-curricular activities by making achievements visible and valued",
      metric: "60%",
      metricLabel: "Increase in Participation"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Align with digital transformation goals and modernize institutional operations",
      metric: "95%",
      metricLabel: "Digitization Success"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Measurable Impact &
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Smart Student Hub creates lasting positive change across educational institutions, 
            benefiting students, faculty, and administrative operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {impacts.map((impact, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <CardHeader className="pb-4">
                <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-4">
                  <impact.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{impact.metric}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  {impact.metricLabel}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold text-foreground mb-3">
                  {impact.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {impact.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bridge the Digital Gap in Education
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our Smart Student Hub addresses critical challenges in modern education by providing 
              a comprehensive solution that empowers students, simplifies faculty tasks, and 
              modernizes institutional operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Student Success</h4>
              <p className="text-muted-foreground">
                Holistic profile building and career preparation for enhanced opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-secondary p-4 rounded-full w-fit mx-auto mb-4">
                <FileCheck className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Institutional Excellence</h4>
              <p className="text-muted-foreground">
                Streamlined accreditation processes and data-driven decision making
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-accent to-accent-light p-4 rounded-full w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Future Ready</h4>
              <p className="text-muted-foreground">
                Digital transformation aligned with modern educational standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;