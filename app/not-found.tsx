'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-purple/10 via-transparent to-transparent" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[10rem] md:text-[15rem] font-display font-bold leading-none gradient-text select-none">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto mb-8">
            Looks like this page wandered off. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/"
              className="group px-8 py-4 rounded-full gradient-bg text-white font-semibold flex items-center justify-center gap-2 glow-purple"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5" />
              Back to Home
            </motion.a>
            <motion.button
              onClick={() => window.history.back()}
              className="px-8 py-4 rounded-full glass text-white font-semibold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-gray-500 text-sm mb-4">Or explore our key pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="text-accent-blue hover:underline">About</Link>
            <Link href="/contact" className="text-accent-purple hover:underline">Contact</Link>
            <Link href="/#services" className="text-accent-cyan hover:underline">Services</Link>
            <Link href="/#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
