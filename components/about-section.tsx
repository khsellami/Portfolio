import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const skills = {
    languages: ["C", "C++", "Python", "Java (beginner)"],
    frameworks: ["PyTorch", "TensorFlow", "Streamlit", "Django", "REST API", "Git", "MySQL"],
    competencies: ["Data Structures", "Algorithms", "Machine Learning", "Deep Learning", "Reinforcement Learning"],
    tools: ["MS Office", "Google Workspace"],
  }

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary font-[family-name:var(--font-playfair)] animate-fadeInUp">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideInLeft">
            <div className="relative">
              <img
                src="#"
                alt="Khadija Sellami"
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="space-y-6 animate-slideInRight">
              <Card className="hover:shadow-lg transition-shadow duration-300 animate-fadeInUp animation-delay-200">
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed text-foreground">
                    I’m Khadija Sellami, a Computer Science and Data Engineering student from Khouribga, Morocco, with a passion for innovative technology solutions. I specialize in web development, artificial intelligence, and machine learning, combining technical expertise with creative problem-solving to build impactful digital experiences.

                    Currently, I’m pursuing my engineering degree while actively developing projects in machine learning, computer vision, and web development. I enjoy transforming complex technical challenges into elegant, user-friendly solutions that make a real difference.
                  </p>
                </CardContent>
              </Card>


          </div>
        </div>
      </div>
    </section>
  )
}
