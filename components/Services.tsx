'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Monitor, Megaphone, Palette, TrendingUp, Rocket, Sparkles, ArrowRight } from 'lucide-react'
import { useInView } from 'framer-motion'

const services = [
  {
    icon: Monitor,
    title: 'Website Development',
    description: 'Custom-built, performance-optimized websites that convert visitors into customers.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    href: '/services/web-development',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that reach your audience and maximize ROI.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    href: '/services/digital-marketing',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Visually stunning designs that communicate your brand story effectively.',
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-500/10',
    href: '/services/graphic-design',
  },
  {
    icon: TrendingUp,
    title: 'Ad Campaign Management',
    description: 'Strategic paid media that delivers measurable business results.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Rocket,
    title: 'Branding & Strategy',
    description: 'Comprehensive brand identity that sets you apart from competitors.',
    color: 'from-rose-500 to-red-500',
    bgColor: 'bg-rose-500/10',
  },
  {
    icon: Sparkles,
    title: 'Conversion Optimization',
    description: 'Scientific testing and optimization to maximize your conversion rates.',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500/10',
  },
]

function TiltCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const xPct = (clientX - left) / width - 0.5
    const yPct = (clientY - top) / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.03 }}
        className="relative"
      >
        <div className="relative p-8 rounded-2xl glass overflow-hidden cursor-pointer h-full">
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            style={{ opacity: 0.05 }}
          />

          <div
            className={`inline-flex p-4 rounded-2xl ${service.bgColor} mb-6 relative`}
            style={{ transform: 'translateZ(50px)' }}
          >
            <service.icon className="w-8 h-8" style={{ transform: 'translateZ(50px)' }} />
          </div>

          <h3
            className="text-2xl font-semibold mb-3"
            style={{ transform: 'translateZ(30px)' }}
          >
            {service.title}
          </h3>

          <p
            className="text-gray-400 mb-6"
            style={{ transform: 'translateZ(20px)' }}
          >
            {service.description}
          </p>

          {service.href && (
            <motion.a
              href={service.href}
              className="inline-flex items-center gap-2 text-accent-blue hover:text-white transition-colors"
              style={{ transform: 'translateZ(20px)' }}
              whileHover={{ x: 5 }}
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          )}

          <motion.div
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-700`}
          />

          <div
            className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"
            style={{ transform: 'translateZ(0)' }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium">
              What We Do
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Services Built for{' '}
            <motion.span
              className="gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Growth
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            We offer comprehensive digital solutions designed to accelerate your business growth.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <TiltCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
    </section>
  )
}
