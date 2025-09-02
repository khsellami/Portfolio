"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const [filter, setFilter] = useState<"All" | "Front-End" | "Back-End" | "AI/ML">("All")

  const skills = [
    { name: "React.js", category: "Front-End" },
    { name: "Next.js", category: "Front-End" },
    { name: "HTML & CSS", category: "Front-End" },
    { name: "JavaScript / TypeScript", category: "Front-End" },
    { name: "Node.js", category: "Back-End" },
    { name: "Fastify", category: "Back-End" },
    { name: "SQLite / MySQL", category: "Back-End" },
    { name: "Python", category: "AI/ML" },
    { name: "PyTorch", category: "AI/ML" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "Machine Learning", category: "AI/ML" },
    { name: "Computer Vision", category: "AI/ML" },
  ]

  const categories: ("All" | "Front-End" | "Back-End" | "AI/ML")[] = ["All", "Front-End", "Back-End", "AI/ML"]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-[family-name:var(--font-playfair)] animate-fadeInUp">
            Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <br></br>
            My technical skills span front-end, back-end development, and AI/ML projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
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
