'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const shapes = [
  { type: 'code', x: '10%', y: '20%', size: 80, delay: 0 },
  { type: 'chart', x: '85%', y: '15%', size: 100, delay: 0.2 },
  { type: 'pixel', x: '75%', y: '60%', size: 60, delay: 0.4 },
  { type: 'orbit', x: '15%', y: '70%', size: 90, delay: 0.6 },
  { type: 'cube', x: '50%', y: '40%', size: 70, delay: 0.8 },
  { type: 'data', x: '90%', y: '80%', size: 75, delay: 1 },
]

function CodeIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className="opacity-30">
      <path
        d="M25 20L10 40L25 60"
        fill="none"
        stroke="url(#grad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M55 20L70 40L55 60"
        fill="none"
        stroke="url(#grad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 15L65 65"
        fill="none"
        stroke="url(#grad1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function ChartIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className="opacity-30">
      <rect x="10" y="50" width="12" height="20" fill="#3B82F6" rx="2" />
      <rect x="30" y="35" width="12" height="35" fill="#8B5CF6" rx="2" />
      <rect x="50" y="20" width="12" height="50" fill="#06B6D4" rx="2" />
      <path
        d="M10 15L30 25L50 10L70 20"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="70" cy="20" r="4" fill="#3B82F6" />
    </svg>
  )
}

function PixelIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className="opacity-30">
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <motion.rect
            key={`${row}-${col}`}
            x={10 + col * 15}
            y={10 + row * 15}
            width="12"
            height="12"
            fill={(row + col) % 2 === 0 ? '#3B82F6' : '#8B5CF6'}
            rx="2"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 2,
              delay: (row * 4 + col) * 0.1,
              repeat: Infinity,
            }}
          />
        ))
      )}
    </svg>
  )
}

function OrbitIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className="opacity-30">
      <ellipse
        cx="40"
        cy="40"
        rx="30"
        ry="15"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="1"
      />
      <ellipse
        cx="40"
        cy="40"
        rx="30"
        ry="15"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="1"
        transform="rotate(60 40 40)"
      />
      <ellipse
        cx="40"
        cy="40"
        rx="30"
        ry="15"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="1"
        transform="rotate(120 40 40)"
      />
      <circle cx="40" cy="25" r="5" fill="#3B82F6" />
      <circle cx="55" cy="52" r="5" fill="#06B6D4" />
      <circle cx="25" cy="52" r="5" fill="#8B5CF6" />
      <circle cx="40" cy="40" r="8" fill="#3B82F6" />
    </svg>
  )
}

function CubeIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className="opacity-30">
      <path
        d="M40 10L70 25V55L40 70L10 55V25L40 10Z"
        fill="none"
        stroke="url(#grad2)"
        strokeWidth="2"
      />
      <path d="M40 10V40M40 40L70 25M40 40L10 25" fill="none" stroke="url(#grad2)" strokeWidth="1.5" />
      <path d="M40 40V70" fill="none" stroke="url(#grad2)" strokeWidth="1.5" />
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function DataIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className="opacity-30">
      <circle cx="40" cy="40" r="25" fill="none" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="40" cy="40" r="15" fill="none" stroke="#3B82F6" strokeWidth="1" />
      <path
        d="M40 15V25M40 55V65M15 40H25M55 40H65"
        stroke="#06B6D4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="40" cy="40" r="3" fill="#3B82F6" />
    </svg>
  )
}

const iconComponents: Record<string, React.FC<{ size: number }>> = {
  code: CodeIcon,
  chart: ChartIcon,
  pixel: PixelIcon,
  orbit: OrbitIcon,
  cube: CubeIcon,
  data: DataIcon,
}

export default function FloatingElements() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => {
        const IconComponent = iconComponents[shape.type]
        const isEven = index % 2 === 0

        return (
          <motion.div
            key={shape.type + index}
            className="absolute"
            style={{
              left: shape.x,
              top: shape.y,
              y: isEven ? y1 : y2,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: shape.delay, duration: 0.8 }}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 6 + index,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ display: 'inline-block' }}
            >
                <IconComponent size={shape.size} />
            </motion.div>
          </motion.div>
        )
      })}

      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96"
        animate={{
          background: [
            'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96"
        animate={{
          background: [
            'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          ],
        }}
        style={{ transitionDelay: '4s' }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </div>
  )
}
