"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface NotificationBoxProps {
  id: string
  title: string
  description: string
  className?: string
}

export function NotificationBox({ id, title, description, className }: NotificationBoxProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if notification has been dismissed before
    const isDismissed = localStorage.getItem(`notification-${id}-dismissed`)

    if (!isDismissed) {
      // Show notification after a small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [id])

  const dismissNotification = () => {
    setIsVisible(false)
    // Store dismissal in localStorage
    localStorage.setItem(`notification-${id}-dismissed`, "true")
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 w-full max-w-sm overflow-hidden rounded-lg border bg-background shadow-lg animate-in slide-in-from-bottom-5 duration-300",
        className,
      )}
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex items-center">
          <h3 className="font-semibold leading-none tracking-tight">{title}</h3>
        </div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  )
}
