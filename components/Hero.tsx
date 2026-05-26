'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-blue/20 via-transparent to-transparent" />
        
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 800 800" className="w-full h-full opacity-10">
            <circle cx="400" cy="400" r="350" fill="none" stroke="url(#heroGrad)" strokeWidth="1" strokeDasharray="10 10" />
            <circle cx="400" cy="400" r="300" fill="none" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="5 5" />
            <defs>
              <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-gray-300">Digital Growth Partners</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-display font-bold leading-[1.1]">
            <AnimatedText text="We Build Digital" className="block" />
            <motion.span
              variants={itemVariants}
              className="block gradient-text mt-2"
            >
              Systems That Scale
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 md:mb-12"
        >
          From strategy to execution—we transform your digital presence into a{' '}
          <motion.span
            className="gradient-text font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            measurable growth engine
          </motion.span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            className="group relative px-8 py-4 rounded-full gradient-bg text-white font-semibold flex items-center justify-center gap-2 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Book a Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
          
          <motion.a
            href="#portfolio"
            className="group px-8 py-4 rounded-full glass text-white font-semibold flex items-center justify-center gap-2 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 border-2 border-accent-blue/50 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <Play className="w-5 h-5 group-hover:text-accent-blue transition-colors" />
            View Our Work
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            {['TechCorp', 'StartupX', 'GrowthLab', 'ScaleUp', 'Innovate'].map((brand, i) => (
              <motion.span
                key={brand}
                className="text-lg md:text-xl font-semibold text-gray-600 hover:text-white transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + i * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-14 rounded-full border-2 border-gray-600 flex items-start justify-center p-2 relative">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-gradient-to-b from-accent-blue to-accent-purple"
          />
        </div>
        <motion.span
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
