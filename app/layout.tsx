import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: "Khadija Sellami - Portfolio",
  description: "Computer Science Graduate | Aspiring Data Scientist | Competitive Programmer",
  generator: "app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${sourceSans.style.fontFamily};
  --font-sans: ${sourceSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-playfair: ${playfair.variable};
  --font-source-sans: ${sourceSans.variable};
}
        `}</style>
      </head>
      <body className={`${sourceSans.variable} ${playfair.variable} antialiased`}>{children}</body>
    </html>
  )
}
