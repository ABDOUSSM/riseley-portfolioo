"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface MouseFollowerProps {
  mousePosition: { x: number; y: number }
  cursorVariant: string
}

export default function MouseFollower({ mousePosition, cursorVariant }: MouseFollowerProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Short delay to prevent the cursor from showing at (0,0) on initial load
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      height: 50,
      width: 50,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      borderColor: "rgba(59, 130, 246, 0.6)",
      borderWidth: "2px",
      mixBlendMode: "normal",
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      borderColor: "rgba(59, 130, 246, 0.3)",
      borderWidth: "2px",
      mixBlendMode: "difference",
    },
    button: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      borderColor: "rgba(59, 130, 246, 0.8)",
      borderWidth: "3px",
      mixBlendMode: "normal",
    },
  }

  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-50 rounded-full pointer-events-none hidden md:block border"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 z-50 rounded-full pointer-events-none hidden md:block bg-primary"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          height: 8,
          width: 8,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 28, mass: 0.1 }}
      />
    </>
  )
}
