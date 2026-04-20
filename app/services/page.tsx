'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Monitor, Megaphone, Palette, TrendingUp, Rocket, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Website Development',
    href: '/services/web-development',
    description: 'Custom-built, performance-optimized websites that convert visitors into customers.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    href: '/services/digital-marketing',
    description: 'Data-driven campaigns that reach your audience and maximize ROI.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    href: '/services/graphic-design',
    description: 'Visually stunning designs that communicate your brand story effectively.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: TrendingUp,
    title: 'Ad Campaign Management',
    href: '#',
    description: 'Strategic paid media that delivers measurable business results.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Rocket,
    title: 'Branding & Strategy',
    href: '#',
    description: 'Comprehensive brand identity that sets you apart from competitors.',
    color: 'from-rose-500 to-red-500',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Optimization',
    href: '#',
    description: 'Scientific testing and optimization to maximize your conversion rates.',
    color: 'from-violet-500 to-purple-500',
  },
]

export default function ServicesIndex() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-blue/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-accent-blue font-semibold uppercase tracking-widest">Services</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mt-4 mb-6">
              What We <span className="gradient-text">Offer</span>
            </h1>
            <p className="text-xl text-gray-400">
              Comprehensive digital solutions designed to accelerate your business growth. 
              Each service is crafted to deliver measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative glass rounded-2xl p-8 overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-6">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-accent-blue group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s discuss your goals and create a custom strategy tailored to your business.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </main>
  )
}
