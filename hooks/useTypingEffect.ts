"use client"

import { useState, useEffect } from "react"

const TYPING_INTERVAL = 150
const ERASING_INTERVAL = 100
const PAUSE_TIME = 500

export function useTypingEffect(words: string[]) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (currentText !== words[currentWordIndex]) {
        timeout = setTimeout(() => {
          setCurrentText(words[currentWordIndex].slice(0, currentText.length + 1))
        }, TYPING_INTERVAL)
      } else {
        timeout = setTimeout(() => setIsTyping(false), PAUSE_TIME)
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, ERASING_INTERVAL)
      } else {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, isTyping, currentWordIndex, words])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530) // Adjust blinking speed here

    return () => clearInterval(cursorInterval)
  }, [])

  return { text: currentText, showCursor }
}

