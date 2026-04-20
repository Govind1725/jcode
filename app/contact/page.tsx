'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, Loader2, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-purple/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent-purple font-semibold uppercase tracking-widest">Contact Us</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mt-4 mb-6">
              Let&apos;s Build <span className="gradient-text">Something Great</span>
            </h1>
            <p className="text-xl text-gray-400">
              Have a project in mind? We&apos;d love to hear about it. Get in touch and 
              let&apos;s start a conversation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-2xl p-8 md:p-12">
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                    <h3 className="text-3xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-gray-400 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-accent-blue hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-700 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-700 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-700 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-700 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Service Interested In</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-700 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                        >
                          <option value="">Select a service</option>
                          <option value="web-development">Website Development</option>
                          <option value="digital-marketing">Digital Marketing</option>
                          <option value="graphic-design">Graphic Design</option>
                          <option value="ad-campaigns">Ad Campaign Management</option>
                          <option value="branding">Branding & Strategy</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Budget Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-700 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                        >
                          <option value="">Select budget</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k+">$50,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Details *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-700 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors resize-none"
                        placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl gradient-bg text-white font-semibold flex items-center justify-center gap-2 glow-purple disabled:opacity-50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent-blue/20">
                      <MapPin className="w-5 h-5 text-accent-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-gray-400">123 Digital Avenue<br />New York, NY 10001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent-purple/20">
                      <Mail className="w-5 h-5 text-accent-purple" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:hello@jcode.agency" className="text-gray-400 hover:text-white transition-colors">
                        hello@jcode.agency
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent-cyan/20">
                      <Phone className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-green-500/20">
                      <Clock className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-green-500/20 border border-green-500/30 hover:bg-green-500/30 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <MessageCircle className="w-6 h-6 text-green-500" />
                <span className="font-semibold text-green-500">Chat on WhatsApp</span>
              </motion.a>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Response</h3>
                <p className="text-gray-400 text-sm mb-4">
                  We typically respond within 2-4 hours during business hours. For urgent 
                  inquiries, consider reaching us via phone or WhatsApp.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>We&apos;re online now</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
