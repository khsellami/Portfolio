"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-muted px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating code snippets */}
        <div className="absolute top-20 left-10 bg-card/80 backdrop-blur-sm border rounded-lg p-3 animate-float text-xs font-mono text-muted-foreground">
          <div>{"const solve = () => {"}</div>
          <div className="ml-2">{'return "Hello World";'}</div>
          <div>{"};"}</div>
        </div>

        <div
          className="absolute top-40 right-20 bg-card/80 backdrop-blur-sm border rounded-lg p-3 animate-float text-xs font-mono text-muted-foreground"
          style={{ animationDelay: "1s" }}
        >
          <div>{"if (success) {"}</div>
          <div className="ml-2">{"celebrate();"}</div>
          <div>{"};"}</div>
        </div>

        {/* Binary patterns */}
        <div
          className="absolute bottom-40 left-20 bg-card/60 backdrop-blur-sm border rounded-lg p-2 animate-float text-xs font-mono text-muted-foreground"
          style={{ animationDelay: "2s" }}
        >
          <div>1010110</div>
          <div>0110101</div>
        </div>

        {/* Terminal window */}
        <div
          className="absolute bottom-20 right-10 bg-card/80 backdrop-blur-sm border rounded-lg animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="bg-muted/50 px-3 py-1 rounded-t-lg flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <div className="p-3 text-xs font-mono text-muted-foreground">
            <div>$ npm run dev</div>
            <div className="text-green-600">✓ Ready in 2.1s</div>
          </div>
        </div>

        {/* Geometric tech shapes */}
        <div className="absolute top-1/2 left-5 w-8 h-8 border-2 border-primary/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-5 w-6 h-6 border-2 border-accent/20 animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary font-[family-name:var(--font-playfair)] animate-fade-in-up">
          Khadija Sellami
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Full-Stack Developer  |  AI Enthusiast  |  Competitive Coding Fan 
          </p>
          <div
            className="flex items-center justify-center gap-2 text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <MapPin className="h-4 w-4" />
            <span>Khouribga, Morocco</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            asChild
            className="hover:scale-110 transition-all duration-300 animate-glow hover:shadow-2xl"
          >
            <a
              href="https://drive.google.com/file/d/1Id7V-vRDdB5wiR3RzaRKypr-fU22ovqh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="hover:scale-110 transition-all duration-300 bg-transparent hover:bg-primary/10 hover:border-primary"
          >
            <a href="https://github.com/khsellami" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="hover:scale-110 transition-all duration-300 bg-transparent hover:bg-primary/10 hover:border-primary"
          >
            <a href="https://www.linkedin.com/in/khadija-sellami-057b72242/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="pt-8 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="animate-bounce hover:animate-none hover:scale-110 transition-all duration-300 group"
          >
            <span className="group-hover:translate-y-1 transition-transform duration-300">Explore My Work ↓</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
