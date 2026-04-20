'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Target, Award, Heart } from 'lucide-react'

const team = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: '15+ years in digital strategy',
  },
  {
    name: 'Sarah Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Award-winning designer',
  },
  {
    name: 'Marcus Williams',
    role: 'Tech Lead',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Full-stack architect',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    bio: 'Growth specialist',
  },
]

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every decision we make is backed by data and focused on measurable outcomes.',
  },
  {
    icon: Users,
    title: 'Client-First',
    description: 'Your success is our success. We treat every project like it\'s our own.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We don\'t settle for good enough. We obsess over details that matter.',
  },
  {
    icon: Heart,
    title: 'Partnership',
    description: 'We build long-term relationships, not one-off transactions.',
  },
]

export default function About() {
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
            <span className="text-accent-blue font-semibold uppercase tracking-widest">About Us</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mt-4 mb-6">
              We Build <span className="gradient-text">Digital Empires</span>
            </h1>
            <p className="text-xl text-gray-400">
              Founded in 2019, JCode has grown from a small design studio to a full-service 
              digital agency. We believe in the power of thoughtful design and strategic 
              marketing to transform businesses.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  It started with a simple frustration: why do so many businesses struggle 
                  to translate their offline success into the digital world?
                </p>
                <p>
                  We set out to change that. JCode was born from the belief that great 
                  design and smart strategy should work together—not as separate disciplines, 
                  but as a unified force for growth.
                </p>
                <p>
                  Today, we partner with ambitious businesses across industries, helping 
                  them navigate the digital landscape with confidence. From startups to 
                  established enterprises, our approach remains the same: listen deeply, 
                  think strategically, and execute flawlessly.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden glass">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  width={800}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 glass rounded-xl">
                <p className="text-4xl font-bold gradient-text">5+</p>
                <p className="text-gray-400">Years of Excellence</p>
              </div>
            </motion.div>
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
            <span className="text-accent-purple font-semibold uppercase tracking-widest">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Principles That <span className="gradient-text">Guide Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 text-center hover:glow-purple transition-shadow"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-cyan font-semibold uppercase tracking-widest">The Team</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Meet The <span className="gradient-text">People</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group text-center"
              >
                <div className="relative mb-6 mx-auto w-48 h-48">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="relative w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-accent-blue">{member.role}</p>
                <p className="text-gray-400 text-sm mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s discuss how we can help you achieve your digital goals.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </main>
  )
}
