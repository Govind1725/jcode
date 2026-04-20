'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <svg viewBox="0 0 50 50" className="w-full h-full">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="url(#cursorGradient)"
            strokeWidth="1"
            className="opacity-50"
          />
          <circle
            cx="25"
            cy="25"
            r="2"
            fill="#3B82F6"
          />
          <line x1="25" y1="0" x2="25" y2="10" stroke="#8B5CF6" strokeWidth="1" />
          <line x1="25" y1="40" x2="25" y2="50" stroke="#8B5CF6" strokeWidth="1" />
          <line x1="0" y1="25" x2="10" y2="25" stroke="#8B5CF6" strokeWidth="1" />
          <line x1="40" y1="25" x2="50" y2="25" stroke="#8B5CF6" strokeWidth="1" />
          <defs>
            <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-20 h-20 pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <svg viewBox="0 0 80 80" className="w-full h-full opacity-20">
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="0.5"
            strokeDasharray="5 5"
          />
        </svg>
      </motion.div>
    </>
  )
}
