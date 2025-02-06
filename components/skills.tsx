"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "Node.js" },
  { name: "React" },
  { name: "Python" },
  { name: "TypeScript" },
  { name: "Next.js" },
  { name: "GraphQL" },
  { name: "Docker" },
  { name: "AWS" },
]

export function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 bg-black">
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
          {skills.map((skill) => (
            <motion.div key={skill.name} className="relative group" whileHover={{ scale: 1.1 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="relative px-6 py-3 bg-card text-card-foreground rounded-lg overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
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
          ))}
        </motion.div>
      </div>
    </section>
  )
}

