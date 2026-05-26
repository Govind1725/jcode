'use client'

import { motion } from 'framer-motion'
import { Search, Compass, Palette, Code, Rocket, BarChart3 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'We dive deep into your business, audience, and goals to understand the full picture.',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Strategy',
    description: 'Crafting a data-backed roadmap tailored to your specific growth objectives.',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Design',
    description: 'Creating visually stunning, user-centric designs that captivate and convert.',
  },
  {
    number: '04',
    icon: Code,
    title: 'Development',
    description: 'Building robust, scalable solutions with cutting-edge technology.',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launch',
    description: 'Strategic deployment with thorough testing and quality assurance.',
  },
  {
    number: '06',
    icon: BarChart3,
    title: 'Optimize',
    description: 'Continuous monitoring, testing, and refinement for sustained growth.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-purple/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan font-semibold uppercase tracking-widest">How We Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A proven methodology that delivers consistent results, every time.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-8 h-full hover:glow-purple transition-shadow duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-bold gradient-text opacity-30">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
