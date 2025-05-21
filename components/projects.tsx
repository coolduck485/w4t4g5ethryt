"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ParticleBackground } from "./ParticleBackground"

const projects = [
  {
    title: "Roblox Game Botter",
    description: "An optimized private and powerful ROBLOX game botter that can run multiple accounts at once.",
    tags: ["C#", "Python", "Lua"],
    image: "/robloxbot.png?height=400&width=600",
  },
  {
    title: "Discord Bot",
    description: "A Discord bot that provides various utilities and commands.",
    tags: ["JavaScript", "Node.js", "Python"],
    image: "/discord.png?height=400&width=600",
  },

  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with user authentication and payment processing.",
    tags: ["MERN Stack", "Node.js"],
    image: "/tags.png?height=400&width=600",
  },
  {title: "Old Freelance Website",
    description: "An old freelance website that I built for myself to showcase my work and attract clients.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/infernus.png?height=400&width=600",
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <ParticleBackground />

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Some Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="group overflow-hidden bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardHeader className="p-0">
                  <div className="overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-[200px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

