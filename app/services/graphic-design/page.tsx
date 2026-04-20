'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check, Brush, Layers, Palette, PenTool } from 'lucide-react'

const services = [
  'Logo Design & Brand Identity',
  'UI/UX Design',
  'Marketing Collateral',
  'Social Media Graphics',
  'Packaging Design',
  'Print Design',
]

const process = [
  { step: '01', title: 'Discovery', desc: 'Understanding your brand, audience, and goals.' },
  { step: '02', title: 'Concept', desc: 'Exploring multiple creative directions.' },
  { step: '03', title: 'Refinement', desc: 'Polishing and perfecting the chosen direction.' },
  { step: '04', title: 'Delivery', desc: 'Final files in all required formats.' },
]

export default function GraphicDesign() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-orange-500 font-semibold uppercase tracking-widest">Services</span>
              <h1 className="text-5xl md:text-6xl font-display font-bold mt-4 mb-6">
                Graphic <span className="gradient-text">Design</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Visually stunning designs that communicate your brand story effectively. 
                We create artwork that captivates, inspires, and converts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center">
                  <Brush className="w-24 h-24 text-orange-500" />
                </div>
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
              Our <span className="gradient-text">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/20">
                    <Layers className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="font-semibold">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold">
              Our <span className="gradient-text">Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="glass rounded-2xl p-6">
                  <p className="text-5xl font-bold gradient-text opacity-30 mb-4">{item.step}</p>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s create designs that make a lasting impression.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </main>
  )
}
