'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'TechVentures Rebrand',
    category: 'Branding & Web',
    metric: '+180%',
    metricLabel: 'Increase in Leads',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['React', 'Branding', 'SEO'],
  },
  {
    title: 'GreenLeaf E-Commerce',
    category: 'Development & Marketing',
    metric: '+320%',
    metricLabel: 'Revenue Growth',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tags: ['Next.js', 'E-Commerce', 'Analytics'],
  },
  {
    title: 'HealthFirst App',
    category: 'UX Design & Development',
    metric: '50K+',
    metricLabel: 'Active Users',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Mobile', 'UX Design', 'Cloud'],
  },
  {
    title: 'Urban Style Store',
    category: 'Full Digital Strategy',
    metric: '+250%',
    metricLabel: 'Social Engagement',
    image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&q=80',
    tags: ['Social Media', 'Branding', 'Ads'],
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="portfolio" className="py-32 relative bg-surface/50 overflow-hidden" ref={ref}>
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-accent-purple/10 text-accent-purple text-sm font-medium">
              Our Work
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Results That{' '}
            <motion.span
              className="gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Speak
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Real projects with measurable outcomes. Every pixel we design serves a purpose.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl glass cursor-pointer"
              style={{ y: index % 2 === 0 ? y1 : y2 }}
            >
              <div className="aspect-video relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute top-4 right-4 z-30 p-3 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue text-sm">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mb-2 group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>

                <motion.div
                  className="flex items-baseline gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-4xl font-bold gradient-text">{project.metric}</span>
                  <span className="text-gray-400">{project.metricLabel}</span>
                </motion.div>
              </div>

              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-accent-blue/50 rounded-2xl transition-colors duration-300 z-40"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              <motion.div
                className="absolute top-0 left-0 w-full h-1 gradient-bg origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-50"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-accent-blue hover:text-white transition-colors font-semibold group"
            whileHover={{ x: 5 }}
          >
            View All Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="absolute top-1/4 -left-32 w-64 h-64 border border-accent-blue/10 rounded-full" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 border border-accent-purple/10 rounded-full" />
    </section>
  )
}
