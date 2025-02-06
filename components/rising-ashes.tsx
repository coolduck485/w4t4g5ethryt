"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Particle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      className="absolute bottom-0 w-1 h-1 bg-white rounded-full opacity-0"
      initial={{ y: "100%", opacity: 0 }}
      animate={{
        y: "-100vh",
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{
        left: `${Math.random() * 100}%`,
      }}
    />
  )
}

export const RisingAshes = () => {
  const [particles, setParticles] = useState<number[]>([])

  useEffect(() => {
    setParticles(Array.from({ length: 50 }, (_, i) => i))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {particles.map((_, i) => (
        <Particle key={i} delay={Math.random() * 10} />
      ))}
    </div>
  )
}

