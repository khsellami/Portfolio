import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Web Project - Creative Thinking",
      description:
        "Multi-page responsive web project built with HTML, CSS, JavaScript, and Bootstrap. Includes user authentication, profile management, payment processing, and informational pages.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      github: "https://github.com/khsellami/Web_project_Creative_Thinking",
      image: "/creative_thinking.png",
    },
    {
      title: "Cub3D - Raycasting Game Engine",
      description:
        "A 3D game engine inspired by Wolfenstein 3D, built at 42 School. Implements raycasting to render 3D environments from 2D maps with textures, sprites, and interactive controls.",
      technologies: ["C", "Raycasting", "MinilibX", "Computer Graphics"],
      github: "https://github.com/khsellami/cub3d",
      image: "/cub.png",
    },
    {
      title: "Inception",
      description:
      "System administration and virtualization project at 42 School. Built a secure infrastructure using Docker Compose with multiple containers (NGINX, WordPress, MariaDB) following best practices for networking, volumes, and security.",
      technologies: ["Docker", "NGINX", "WordPress", "MariaDB", "Linux", "Networking"],
      github: "https://github.com/khsellami/Inception_42",
      image: "/inception.png",
    },
    {
      title: "Ft_Transcendence",
      description:
      "A full-stack web application featuring a Pong game with user accounts, profiles, chat, and multiplayer. Built with a microservices architecture using Next.js frontend, multiple backend services, and an Nginx reverse proxy with HTTPS.",
      technologies: ["Next.js", "Node.js", "Fastify", "PostgreSQL", "Nginx", "Docker", "Microservices"],
      github: "https://github.com/khsellami/Ft_Transcendence",
      image: "/trans.png",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary font-[family-name:var(--font-playfair)] animate-fadeInUp">
           Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${200 + index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full animate-fadeInUp hover:scale-105 transition-transform"
                      style={{ animationDelay: `${400 + index * 200 + techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" asChild className="hover:scale-105 transition-transform">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
