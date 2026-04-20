'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = '1234567890'
  const message = encodeURIComponent('Hi! I\'m interested in your services and would like to discuss a project.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 glass rounded-2xl p-6 max-w-sm"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-full bg-green-500/20">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h4 className="font-semibold">Chat with us</h4>
                <p className="text-sm text-gray-400">We typically reply within minutes</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-green-500">Online now</span>
            </div>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 rounded-xl bg-green-500 text-white font-semibold text-center hover:bg-green-600 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Conversation
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function AnimatePresence({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
