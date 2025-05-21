"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ParticleBackground } from "./ParticleBackground"

type Skill = { name: string }

const skills: Skill[] = [
  { name: "Node.js" },
  { name: "React" },
  { name: "Python" },
  { name: "TypeScript" },
  { name: "Next.js" },
  { name: "C#" },
  { name: "MongoDB" },
  { name: "Tailwind" },
  { name: "HTML/CSS" },
  { name: "Docker" },
  { name: "Figma" },
  { name: "PostgreSQL" },
  { name: "Express" },
  { name: "GraphQL" },
  { name: "Firebase" },
  { name: "AWS" },
  { name: "Redis" },
  { name: "Bootstrap" },
]

// CONFIGURE THESE TO TASTE (in milliseconds)
const AUTO_POP_FREQUENCY = 2000  // how often a random skill auto-pops
const AUTO_POP_DURATION  = 1000   // how long that pop lasts

export function Skills() {
  const [randomPopIdx, setRandomPopIdx] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * skills.length)
      setRandomPopIdx(idx)
      // clear after duration
      setTimeout(() => setRandomPopIdx(null), AUTO_POP_DURATION)
    }, AUTO_POP_FREQUENCY)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section id="skills" className="min-h-screen py-20 px-4 bg-black">
      <ParticleBackground />
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center font-heading text-foreground"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, idx) => {
            // determine effective scale: hovered or auto-pop
            const isAuto = idx === randomPopIdx
            return (
              <motion.div
                key={skill.name}
                className="relative group"
                whileHover={{ scale: 1.1 }}
                animate={{ scale: isAuto ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="relative px-6 py-3 bg-card text-card-foreground rounded-lg overflow-hidden"
                >
                  <span className="font-medium text-lg">{skill.name}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-bold mt-12 text-center font-heading
             bg-gradient-to-r from-white to-zinc-500
             bg-clip-text text-transparent"
        >
          And more!
        </motion.h2>
      </div>
    </section>
  )
}
