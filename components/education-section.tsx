import { Card, CardContent } from "@/components/ui/card"

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary font-[family-name:var(--font-playfair)] animate-fadeInUp">
          Education
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300 animate-fadeInUp animation-delay-200">
            <CardContent className="p-8">
              <div className="space-y-6">
                
                <div className="border-l-4 border-primary pl-6 animate-slideInLeft animation-delay-300">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Engineering Degree in Computer Science & Data Engineering</h3>
                  <p className="text-lg text-muted-foreground mb-1">ENSA Khouribga</p>
                  <p className="text-muted-foreground mb-2">Expected: Aug 2025</p>
                  <p className="text-primary font-medium">Active Student at 1337 Khouribga</p>
                </div>

                <div className="border-l-4 border-primary pl-6 animate-slideInLeft animation-delay-400">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Student at 1337 Khouribga</h3>
                  <p className="text-lg text-muted-foreground mb-1">42 network</p>
                  <p className="text-muted-foreground mb-2">CGPA: 3.73/4.00 | Expected: Jan 2026</p>
                  <p className="text-primary font-medium">Recipient of Outstanding Student Achievement Award</p>
                </div>

                <div className="border-l-4 border-primary pl-6 animate-slideInLeft animation-delay-500">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Bac Sciences Physiques</h3>
                  <p className="text-lg text-muted-foreground mb-1">Ibn Abdoune</p>
                  <p className="text-muted-foreground">GPA: 5.00/5.00 | 2020</p>
                </div>


              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
