'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Megaphone, ArrowRight, Check, Target, TrendingUp, Users, Zap } from 'lucide-react'

const features = [
  { icon: Target, title: 'Precision Targeting', description: 'Reach your ideal audience with laser-focused campaigns.' },
  { icon: TrendingUp, title: 'ROI Focused', description: 'Every dollar spent is tracked for maximum return.' },
  { icon: Users, title: 'Audience Growth', description: 'Expand your reach and build a loyal following.' },
  { icon: Zap, title: 'Quick Results', description: 'See measurable impact within weeks, not months.' },
]

const services = [
  'Search Engine Marketing (SEM)',
  'Social Media Advertising',
  'Display & Retargeting Campaigns',
  'Email Marketing Automation',
  'Content Marketing Strategy',
  'Analytics & Reporting',
]

export default function DigitalMarketing() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-purple/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-accent-purple font-semibold uppercase tracking-widest">Services</span>
              <h1 className="text-5xl md:text-6xl font-display font-bold mt-4 mb-6">
                Digital <span className="gradient-text">Marketing</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Data-driven marketing campaigns that reach your audience and maximize ROI. 
                We turn clicks into customers with strategic, measurable approaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-semibold glow-purple"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Campaign
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <Link
                  href="/#portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold"
                >
                  View Results
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
                <div className="aspect-video rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-pink-500/20 flex items-center justify-center">
                  <Megaphone className="w-24 h-24 text-accent-purple" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 p-4 glass rounded-xl">
                <p className="text-2xl font-bold gradient-text">280%</p>
                <p className="text-sm text-gray-400">Avg. ROI Increase</p>
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
              What We <span className="gradient-text">Offer</span>
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
                <div className="inline-flex p-3 rounded-xl bg-accent-purple/20 mb-4">
                  <feature.icon className="w-6 h-6 text-accent-purple" />
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
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Our Services</h3>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Why <span className="gradient-text">Marketing</span> Matters
              </h2>
              <p className="text-gray-400 mb-6">
                In today&apos;s digital landscape, having a great product isn&apos;t enough. 
                You need strategic marketing to connect with your audience, build trust, 
                and drive conversions.
              </p>
              <p className="text-gray-400 mb-8">
                We combine data-driven strategies with creative storytelling to help 
                your brand cut through the noise and resonate with the right people.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold gradient-text">50M+</p>
                  <p className="text-sm text-gray-400">Impressions Generated</p>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold gradient-text">10K+</p>
                  <p className="text-sm text-gray-400">Leads Delivered</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Scale Your Marketing?
          </h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s create a marketing strategy that delivers real, measurable results.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </main>
  )
}
