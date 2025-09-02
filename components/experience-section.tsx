import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Computer Science Instructor",
      company: "OCP Group",
      period: "Jul 2025 – Sep 2025",
      location: "Khouribga, Morocco",
      description: [
        "Web application to manage IT requests: submission, tracking, notifications, and role-based statistics",
        "Technologies used: React, Next.js, Node.js, Express, SQLite",
      ],
    },
    {
      title: "Full Stack Development Intern",
      company: "KJR Telecom",
      period: "Aug 2024 – Sep 2024",
      location: "Casablanca, Morocco",
      description: [
        "Developed a Web application for optician management, including system design and data modeling using Merise methodology",
        "Technologies used: HTML, CSS, Bootstrap, JavaScript, PHP, MySQL",
      ],
    },
  ];
  



  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary font-[family-name:var(--font-playfair)] animate-fadeInUp">
          Experience
        </h2>

        {/* Experience Timeline */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-primary mb-8 animate-slideInLeft animation-delay-200">
            Professional Experience
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 pb-8 animate-fadeInUp animation-delay-300">
                <div className="absolute left-2 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-accent">{exp.company}</CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>






      </div>
    </section>
  )
}
