'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Sparkles, Globe } from 'lucide-react'

interface Demo {
  id: number
  title: string
  category: string
  description: string
  demoUrl: string
  thumbnail: string
  gradient: string
}

const categories = ['All', 'SaaS', 'Agency', 'Ecommerce', 'Dashboard', 'AI', 'Portfolio', 'Corporate'] as const

const demos: Demo[] = [
  {
    id: 1,
    title: 'PawSpa',
    category: 'Agency',
    description: 'Professional pet grooming services landing page with booking and pricing',
    demoUrl: '/demo/pet-grooming',
    thumbnail: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=500&fit=crop',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'SerenitySpa',
    category: 'Agency',
    description: 'Luxury beauty spa and wellness center with treatment bookings',
    demoUrl: '/demo/beauty-spa',
    thumbnail: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=700&fit=crop',
    gradient: 'from-rose-400 via-pink-500 to-purple-500',
  },
  {
    id: 3,
    title: 'LuxeEstate',
    category: 'Corporate',
    description: 'Premium real estate platform featuring luxury property listings',
    demoUrl: '/demo/real-estate',
    thumbnail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    gradient: 'from-slate-500 via-gray-500 to-zinc-500',
  },
]

const gradientMap: Record<number, string> = {}
demos.forEach(d => { gradientMap[d.id] = d.gradient })

function DemoCard({ demo, onSelect }: { demo: Demo; onSelect: (demo: Demo) => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const rotateX = useTransform(mouseY, [0, 1], [4, -4])
  const rotateY = useTransform(mouseX, [0, 1], [-4, 4])
  const springRotateX = useSpring(rotateX, { damping: 20, stiffness: 250 })
  const springRotateY = useSpring(rotateY, { damping: 20, stiffness: 250 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5)
    mouseY.set(0.5)
    setIsHovered(false)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={cardRef}
      layout
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(demo)}
      whileHover={{ scale: 1.02, z: 20 }}
      className="group relative bg-surface/60 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-accent-blue/30 transition-colors duration-500"
    >
      <div className={`relative h-48 sm:h-52 md:h-56 overflow-hidden bg-gradient-to-br ${demo.gradient}`}>
        {!imgError && (
          <Image
            src={demo.thumbnail}
            alt={`${demo.title} preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-all duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            } ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          animate={isHovered ? { x: '200%' } : { x: '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />

        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium border border-white/10">
          {demo.category}
        </span>

        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white drop-shadow-lg">
            {demo.title}
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
          {demo.description}
        </p>
        <a
          href={demo.demoUrl}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue group-hover:text-white transition-colors duration-300"
        >
          View Demo
          <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>

      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          boxShadow: 'inset 0 1px 0 0 rgba(59,130,246,0.15), 0 0 40px rgba(59,130,246,0.08)',
        }}
      />
    </motion.div>
  )
}

export default function WebsiteDemos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filteredDemos = activeCategory === 'All'
    ? demos
    : demos.filter(d => d.category === activeCategory)

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-40 -left-40 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 -right-40 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-white/70 text-sm font-medium border border-white/5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Live Demos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-6 mb-4"
          >
            Website Demos{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Fully functional demo pages recreated from the uupm.cc design system.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/20'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredDemos.map((demo, i) => (
              <motion.div
                key={demo.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.05,
                  ease: [0.25, 0.25, 0, 1],
                }}
              >
                <DemoCard demo={demo} onSelect={() => window.location.href = demo.demoUrl} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {filteredDemos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <Globe className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No demos found in this category.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
