"use client"

import { motion, AnimatePresence } from "framer-motion"
import { SendIcon } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { ParticleBackground } from "./ParticleBackground"
import { useState, useRef, useEffect } from "react"

const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #4b5563;
    border-radius: 4px;
    border: none;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #6b7280;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:active {
    background: #9ca3af;
  }

  /* Firefox */
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #4b5563 transparent;
  }
`

const contactMethods = [
  {
    name: "Discord:",
    value: "biinary",
    borderColor: "#5564f2",
    textColor: "#5564f2",
    icon: (
      <FontAwesomeIcon
        icon={faDiscord}
        style={{ color: "#5564f2" }}
        className="w-12 h-12 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(85,100,242,0.8)]"
      />
    ),
    link: "https://discord.com/users/1365122799659646976",
  },
  {
    name: "Telegram:",
    value: "https://t.me/biiinary",
    borderColor: "#30a8ff",
    textColor: "#30a8ff",
    icon: (
      <SendIcon
        style={{ color: "#30a8ff" }}
        className="w-12 h-12 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(48,168,255,0.8)]"
      />
    ),
    link: "https://t.me/biiinary",
  },
]

// Editable TOS content - modify this section to change the terms
const TOS_CONTENT = {
  title: "Terms of Service",
  sections: [
    {
      heading: "1. Payment Policy",
      content:
        "Work will be completed prior to payment, but will not be delivered until full payment is received. Under no circumstances will the final product be sent before payment",
    },
    {
      heading: "2. Revisions",
      content:
        "Unlimited revisions are offered within the first 7 calendar days after delivery. After the first week, all revision requests are subject to additional charges based on the scope of changes.",
    },
    {
      heading: "3. Project Abandonment",
      content:
        "If the client fails to communicate, delays payment, or becomes unresponsive for more than 7 days, I reserve the right to pause or terminate work on the project, I may also halt work on any unpaid request at my discretion without obligation to complete or deliver the project.",
    },
    {
      heading: "4. Scope and Estimates",
      content:
        "All work is scoped before the project begins. Any additions or changes outside the original agreement may incur additional fees and extended timelines, Time estimates are approximate and may shift based on project complexity or client communication.",
    },
    {
      heading: "5. Ownership and Delivery",
      content:
        "You will gain full rights and access to the final work only after full payment has been received. Until then, all work remains my intellectual property and may not be used, copied, or distributed.",
    },
    {
      heading: "6. Communication",
      content:
        "Prompt communication is expected from both sides to ensure smooth progress.",
    },
    {
      heading: "7. Confidentiality",
      content:
        "All client data, project details, and shared information will be treated as confidential and will not be shared with third parties without explicit permission.",
    },
    {
      heading: "8. Updates to Terms",
      content:
        "We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of any changes.",
    },
  ],
  footer: "By proceeding, you acknowledge that you have read, understood, and agree to these terms of service.",
}

export function Contact() {
  const [showTOSModal, setShowTOSModal] = useState(false)
  const [selectedLink, setSelectedLink] = useState("")
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleContactClick = (link: string) => {
    setSelectedLink(link)
    setShowTOSModal(true)
    setHasScrolledToBottom(false)
  }

  const handleProceed = () => {
    setShowTOSModal(false)
    window.open(selectedLink, "_blank", "noopener,noreferrer")
    setSelectedLink("")
  }

  const handleNevermind = () => {
    setShowTOSModal(false)
    setSelectedLink("")
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10 // 10px tolerance
      setHasScrolledToBottom(isAtBottom)
    }
  }

  useEffect(() => {
    if (showTOSModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [showTOSModal])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
      <section id="contact" className="min-h-screen py-20 px-4 bg-black">
        <ParticleBackground />

        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center font-heading text-foreground"
          >
            I'm available for freelance work, Get in touch.
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
            {contactMethods.map((method) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="bg-black rounded-lg p-8 flex flex-col items-center cursor-pointer group"
                  style={{ border: `2px solid ${method.borderColor}` }}
                  onClick={() => handleContactClick(method.link)}
                >
                  <div className="mb-4 p-3 inline-block rounded-full">{method.icon}</div>
                  <p className="text-center" style={{ color: method.textColor }}>
                    {method.name}
                  </p>
                  <p className="text-muted-foreground text-center">{method.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOS Modal */}
      <AnimatePresence>
        {showTOSModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black border border-gray-800 rounded-lg w-full max-w-2xl max-h-[80vh] flex flex-col p-6"
              style={{ boxShadow: "0 0 50px rgba(255, 255, 255, 0.1)" }}
            >
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white text-center">{TOS_CONTENT.title}</h2>
              </div>

              {/* Inner Content Box */}
              <div className="flex-1 bg-black-900 border border-gray-700 rounded-lg p-6 mb-6 relative">
                {/* Scrollable Content Inside Inner Box */}
                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="h-full overflow-y-auto space-y-6 pr-2 custom-scrollbar"
                  style={{ maxHeight: "calc(80vh - 250px)" }}
                >
                  {TOS_CONTENT.sections.map((section, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">{section.heading}</h3>
                      <p className="text-gray-300 leading-relaxed">{section.content}</p>
                    </div>
                  ))}

                  <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-600">
                    <p className="text-white text-center font-medium">{TOS_CONTENT.footer}</p>
                  </div>
                </div>

                {/* Scroll Indicator Inside Inner Box */}
                {!hasScrolledToBottom && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      className="text-gray-400 text-sm flex flex-col items-center"
                    >
                      <span>Scroll down to continue</span>
                      <div className="w-1 h-6 bg-gradient-to-b from-gray-400 to-transparent rounded-full mt-2" />
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Footer with Buttons - Outside Inner Box */}
              <div className="flex gap-4 justify-end">
                <button
                  onClick={handleNevermind}
                  className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 border border-gray-600"
                >
                  Nevermind
                </button>
                <button
                  onClick={handleProceed}
                  disabled={!hasScrolledToBottom}
                  className={`px-6 py-2 rounded-lg transition-all duration-200 border ${
                    hasScrolledToBottom
                      ? "bg-white text-black hover:bg-gray-200 cursor-pointer border-white"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed border-gray-600"
                  }`}
                >
                  {hasScrolledToBottom ? "Proceed" : "Scroll to Continue"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
