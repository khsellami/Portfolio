"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function SkillsSection() {
  const [filter, setFilter] = useState<
    "All" | "Front-End" | "Back-End" | "AI/ML" | "Databases" | "Tools/DevOps" | "Methodologies" | "Others"
  >("All")

  const skills = [
    // Programming Languages
    { name: "C / C++", category: "Others" },
    { name: "Shell Scripting", category: "Others" },
    { name: "JavaScript (ES6+)", category: "Front-End" },

    // Frontend
    { name: "HTML5 / CSS3", category: "Front-End" },
    { name: "React.js / Next.js", category: "Front-End" },
    { name: "Bootstrap / Tailwind CSS", category: "Front-End" },

    // Backend
    { name: "Node.js (Express, Fastify)", category: "Back-End" },
    { name: "RESTful API", category: "Back-End" },
    { name: "Authentication & Authorization (JWT, OAuth2)", category: "Back-End" },
    { name: "WebSockets", category: "Back-End" },

    // Databases
    { name: "MySQL", category: "Databases" },
    { name: "PostgreSQL", category: "Databases" },
    { name: "SQLite", category: "Databases" },
    { name: "MongoDB", category: "Databases" },

    // AI/ML
    { name: "Python", category: "AI/ML" },
    { name: "PyTorch", category: "AI/ML" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "Machine Learning", category: "AI/ML" },
    { name: "Computer Vision", category: "AI/ML" },

    // Tools/DevOps
    { name: "Docker / Docker Compose", category: "Tools/DevOps" },
    { name: "CI/CD", category: "Tools/DevOps" },
    { name: "NGINX", category: "Tools/DevOps" },
    { name: "AWS", category: "Tools/DevOps" },
    { name: "Git & GitHub", category: "Tools/DevOps" },
    { name: "Postman", category: "Tools/DevOps" },

    // Methodologies
    { name: "Merise / UML", category: "Methodologies" },
  ]

  const categories: (
    | "All"
    | "Front-End"
    | "Back-End"
    | "AI/ML"
    | "Databases"
    | "Tools/DevOps"
    | "Methodologies"
    | "Others"
  )[] = ["All", "Front-End", "Back-End", "Databases", "AI/ML", "Tools/DevOps", "Methodologies", "Others"]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-[family-name:var(--font-playfair)] animate-fadeInUp">
            Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My technical skills span front-end, back-end development, databases, DevOps, and AI/ML projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border ${
                filter === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border"
              } transition-colors duration-300`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid (compact) */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills
            .filter((skill) => filter === "All" || skill.category === filter)
            .map((skill, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  )
}
