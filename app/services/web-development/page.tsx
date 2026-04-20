'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Monitor, ArrowRight, Check, Zap, Globe, Shield, BarChart } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Lightning Fast', description: 'Optimized for speed with minimal load times.' },
  { icon: Globe, title: 'Fully Responsive', description: 'Perfect experience on all devices and screens.' },
  { icon: Shield, title: 'Secure & Reliable', description: 'Built with security best practices in mind.' },
  { icon: BarChart, title: 'SEO Optimized', description: 'Structured for search engine visibility.' },
]

const process = [
  'Discovery & Requirements Gathering',
  'UI/UX Design & Prototyping',
  'Responsive Development',
  'Quality Assurance Testing',
  'Launch & Deployment',
  'Ongoing Support & Maintenance',
]

export default function WebDevelopment() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-blue/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-accent-blue font-semibold uppercase tracking-widest">Services</span>
              <h1 className="text-5xl md:text-6xl font-display font-bold mt-4 mb-6">
                Website <span className="gradient-text">Development</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Custom-built, performance-optimized websites that convert visitors into customers. 
                We create digital experiences that look stunning and drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-semibold glow-blue"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <Link
                  href="/#portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
                  <Monitor className="w-24 h-24 text-accent-blue" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 p-4 glass rounded-xl">
                <p className="text-2xl font-bold gradient-text">100+</p>
                <p className="text-sm text-gray-400">Projects Delivered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold">
              Why Choose Our <span className="gradient-text">Development</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-accent-blue/20 mb-4">
                  <feature.icon className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-gray-400 mb-8">
                A proven methodology that ensures your project is delivered on time, 
                on budget, and exceeds expectations.
              </p>

              <div className="space-y-4">
                {process.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-300">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">What&apos;s Included</h3>
              <ul className="space-y-4">
                {[
                  'Custom Website Design',
                  'Responsive Development',
                  'CMS Integration',
                  'SEO Optimization',
                  'Performance Optimization',
                  'SSL Certificate',
                  'Analytics Setup',
                  '30 Days Support',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Starting from</p>
                <p className="text-4xl font-bold gradient-text">$5,000</p>
                <motion.a
                  href="/contact"
                  className="mt-6 block w-full py-3 rounded-xl gradient-bg text-white font-semibold text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get a Quote
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s discuss your website needs and create something amazing together.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </main>
  )
}
