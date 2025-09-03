import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Award, Clock, Target } from "lucide-react";

const Impact = () => {
  const stats = [
    { number: "85%", label: "Improvement in Student Engagement", icon: <TrendingUp className="h-8 w-8 text-primary" /> },
    { number: "70%", label: "Reduction in Administrative Time", icon: <Clock className="h-8 w-8 text-secondary" /> },
    { number: "95%", label: "Student Satisfaction Rate", icon: <Award className="h-8 w-8 text-accent" /> },
    { number: "60%", label: "Faster Portfolio Creation", icon: <Target className="h-8 w-8 text-primary" /> }
  ];

  const impacts = [
    {
      title: "Student Empowerment",
      description: "Students gain confidence with verified digital portfolios that showcase their complete academic journey.",
      benefits: [
        "Enhanced job placement opportunities",
        "Better scholarship applications",
        "Improved self-awareness of achievements",
        "Streamlined admission processes"
      ]
    },
    {
      title: "Faculty Efficiency",
      description: "Faculty members save time while providing better mentorship through data-driven insights.",
      benefits: [
        "Real-time student progress tracking",
        "Automated verification workflows",
        "Enhanced mentoring capabilities",
        "Reduced administrative burden"
      ]
    },
    {
      title: "Institutional Excellence",
      description: "Institutions achieve higher rankings and smoother accreditation processes.",
      benefits: [
        "NAAC compliance readiness",
        "Improved institutional reputation",
        "Data-driven policy decisions",
        "Enhanced student outcomes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Measurable Impact
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Smart Student Hub transforms educational experiences with real, measurable results
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-gradient-card p-3 rounded-full w-fit mx-auto mb-4 shadow-soft">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Areas */}
        <div className="grid lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{impact.title}</CardTitle>
                <CardDescription className="text-lg">
                  {impact.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {impact.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-primary p-8 rounded-2xl shadow-medium">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Educational Revolution
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Be part of the transformation that's reshaping how educational institutions track, verify, and showcase student achievements.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Impact;