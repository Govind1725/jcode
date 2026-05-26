'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react'

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-3 text-3xl font-display font-bold group"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/logo.png"
                alt="JCode Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="gradient-text">JCode</span>
            </motion.a>
            <p className="text-gray-400 mt-4 max-w-md">
              We build digital systems that drive measurable business growth. 
              From strategy to execution—we scale your digital presence.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg glass hover:bg-accent-blue/20 transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-blue" />
                <span>New York, NY</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-blue" />
                <a href="mailto:hello@jcode.agency" className="hover:text-white transition-colors">
                  hello@jcode.agency
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-blue" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} JCode. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
