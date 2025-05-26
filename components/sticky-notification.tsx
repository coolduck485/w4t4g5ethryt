"use client"

import { Info, CheckCircle, AlertTriangle, AlertCircle, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function StickyNotification() {
  // ========================================
  // CUSTOMIZATION SETTINGS - EDIT THESE!
  // ========================================

  // Message content
  const message = "🎉 Special offer: Get 50% off all premium plans this week only!"

  // Choose your notification type: "info" | "success" | "warning" | "error" | "custom"
  const type = "custom"

  // Custom colors (only used when type is "custom")
  const customBackground = "bg-purple-50 border-purple-200 text-purple-800"
  const customIconColor = "text-purple-500"

  // Choose your icon: Info, CheckCircle, AlertTriangle, AlertCircle, Bell, Megaphone, Star, Heart
  // const CustomIcon = Star // Change this to any icon you want


  // discord

    const CustomIcon = () => (
    <FontAwesomeIcon
        icon={faDiscord}
        className={cn("h-5 w-5 flex-shrink-0", customIconColor)}
    />
    )
  // ========================================
  // END CUSTOMIZATION SETTINGS
  // ========================================

  const notificationStyles = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800",
    custom: customBackground,
  }

  const iconStyles = {
    info: "text-blue-500",
    success: "text-green-500",
    warning: "text-yellow-500",
    error: "text-red-500",
    custom: customIconColor,
  }

  const defaultIcons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle,
    custom: CustomIcon,
  }

  const Icon = defaultIcons[type]

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full border-b backdrop-blur-sm transition-all duration-300 ease-in-out",
        notificationStyles[type],
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[3rem] items-center justify-center py-3">
          <div className="flex items-center space-x-3">
            <Icon className={cn("h-5 w-5 flex-shrink-0", iconStyles[type])} />
            <p className="text-sm font-medium leading-5">{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
