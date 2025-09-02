"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary font-[family-name:var(--font-playfair)] animate-fadeInUp">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-slideInLeft animation-delay-200">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about
                  technology and programming!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-card transition-colors animate-fadeInUp animation-delay-400">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:shougatad@gmail.com" className="text-accent hover:underline">
                        sellamikhadija14@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-card transition-colors animate-fadeInUp animation-delay-500">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+212 626291660" className="text-accent hover:underline">
                        +212 626291660
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 animate-fadeInUp animation-delay-600">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:scale-105 transition-transform bg-transparent"
                  >
                    <a href="https://github.com/khsellami" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:scale-105 transition-transform bg-transparent"
                  >
                    <a href="https://www.linkedin.com/in/khadija-sellami-057b72242/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="hover:shadow-lg transition-shadow duration-300 animate-slideInRight animation-delay-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {submitStatus === "success" && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="animate-fadeInUp animation-delay-400">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="hover:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="animate-fadeInUp animation-delay-500">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="hover:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>
                <div className="animate-fadeInUp animation-delay-600">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="hover:border-primary transition-colors"
                    required
                  />
                </div>
                <div className="animate-fadeInUp animation-delay-700">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    className="hover:border-primary transition-colors"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full hover:scale-105 transition-transform animate-fadeInUp animation-delay-800 disabled:hover:scale-100"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
