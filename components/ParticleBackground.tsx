"use client"

import { useEffect, useRef } from "react"

const PARTICLE_COUNT = 100 // Increased for better coverage

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = document.documentElement.scrollWidth
      canvas.height = document.documentElement.scrollHeight
    }

    updateCanvasSize()

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = []

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1, // Slightly smaller particles
        speedX: Math.random() * 1 - 0.5, // Slower speed
        speedY: Math.random() * 1 - 0.5, // Slower speed
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)" // More transparent
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      updateCanvasSize()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }} />
}

