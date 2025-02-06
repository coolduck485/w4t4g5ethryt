import { Inter } from "next/font/google"
import "./globals.css"
import { RisingAshes } from "@/components/rising-ashes"
import type React from "react"
import { ParticleBackground } from "@/components/ParticleBackground"
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <ParticleBackground />
        {children}
      </body>
    </html>
  )
}

