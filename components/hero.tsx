"use client"

import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { ParticleBackground } from "./ParticleBackground"
import { useTypingEffect } from "@/hooks/useTypingEffect"

export function Hero() {
  const name = "dri"
  const jobTitles = [
    "Freelancer",
    "Developer",
    "Designer",
    "Creator",
    "Artist",
  ]
  const { text: currentJobTitle, showCursor } = useTypingEffect(jobTitles)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    })
  }, [controls])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center z-10 space-y-6"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-400"
        >
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="text-6xl md:text-7xl font-bold tracking-tighter"
        >
          {name.split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
              animate={controls}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-4xl md:text-5xl text-zinc-400 h-[1.5em] flex items-center justify-center"
        >
          <span className="inline-flex items-center">
            {currentJobTitle}
            <span
              className={`inline-block w-[3px] h-[1.1em] ml-[2px] bg-white ${showCursor ? "opacity-100" : "opacity-0"}`}
            />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-zinc-500 italic"
        >
          Making your ideas come to life with affordable freelancing services
        </motion.p>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
  className="flex gap-4 justify-center pt-4"
>
  <Button
    size="lg"
    variant="outline"  // Same variant as before
    className="rounded-full"
    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
  >
    <motion.span
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}  // Scale the button on hover
      transition={{ type: "spring", stiffness: 300, damping: 10 }}  // Smooth transition
    >
      View My Work
    </motion.span>
  </Button>
  <Button
    size="lg"
    variant="outline"
    className="rounded-full"
    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
  >
    <motion.span
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}  // Scale the button on hover
      transition={{ type: "spring", stiffness: 300, damping: 10 }}  // Smooth transition
    >
      Contact Me
    </motion.span>
  </Button>
</motion.div>

      </motion.div>
    </section>
  )
}

