'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Leaf, Star, ChevronRight, Menu, X } from 'lucide-react'

const treatments = [
  { icon: Sparkles, title: 'Swedish Massage', desc: 'Classic relaxation massage to ease tension and stress', duration: '60 min', price: '$89' },
  { icon: Heart, title: 'Facial Treatment', desc: 'Deep cleansing and rejuvenating facial for glowing skin', duration: '45 min', price: '$75' },
  { icon: Sparkles, title: 'Hot Stone Therapy', desc: 'Heated stones to melt away muscle tension', duration: '90 min', price: '$120' },
  { icon: Leaf, title: 'Aromatherapy', desc: 'Essential oils combined with massage for total relaxation', duration: '75 min', price: '$99' },
]

const testimonials = [
  { text: 'The most relaxing experience I\'ve ever had. The therapists are incredibly skilled and the atmosphere is so peaceful.', name: 'Emily Rose', treatment: 'Swedish Massage', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { text: 'My skin has never looked better! The organic products they use are amazing and the results speak for themselves.', name: 'Sarah Chen', treatment: 'Facial Treatment', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
  { text: 'A truly transformative experience. The hot stone therapy melted away all my stress. The staff is so attentive.', name: 'Jessica Miller', treatment: 'Hot Stone Therapy', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' },
]

export default function BeautySpaDemo() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-rose-50 text-stone-800 font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">SerenitySpa</span>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href="#services" className="hover:text-rose-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-rose-600 transition-colors">About</a>
            <a href="#testimonials" className="hover:text-rose-600 transition-colors">Reviews</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 text-white hover:opacity-90 transition-opacity">Book Now</a>
          </div>
          <button className="md:hidden text-stone-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white border-b border-rose-100 px-6 py-4 flex flex-col gap-3 text-sm font-medium text-stone-600">
            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-rose-600">Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-rose-600">About</a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)} className="hover:text-rose-600">Reviews</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 text-white text-center">Book Now</a>
          </motion.div>
        )}
      </nav>

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-rose-500 text-sm font-semibold tracking-widest uppercase flex items-center gap-2 mb-4">Award-Winning Spa Experience</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Relax, Rejuvenate,<br />Renew
            </h1>
            <p className="text-stone-500 text-lg mb-8 max-w-md">
              Escape the everyday and discover a sanctuary of peace. Our expert therapists provide personalized treatments for your mind, body, and soul.
            </p>
            <div className="flex items-center gap-4">
              <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-rose-200">Book Appointment</a>
              <a href="#services" className="px-6 py-3 rounded-full border border-stone-300 text-stone-700 font-medium hover:bg-stone-100 transition-colors">View Services</a>
            </div>
            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-rose-100">
              <div><span className="text-2xl font-bold">15+</span><p className="text-xs text-stone-500">Years Exp.</p></div>
              <div><span className="text-2xl font-bold">10K+</span><p className="text-xs text-stone-500">Happy Clients</p></div>
              <div><span className="text-2xl font-bold">50+</span><p className="text-xs text-stone-500">Treatments</p></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-purple-200 rounded-full blur-3xl -z-10" />
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=700&fit=crop" alt="Spa treatment" className="w-full h-auto rounded-2xl shadow-2xl" />
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-rose-500 text-sm font-semibold tracking-widest uppercase">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Treatments for Body &amp; Soul</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100 hover:border-rose-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-purple-100 flex items-center justify-center mb-4"><t.icon className="w-6 h-6 text-rose-600" /></div>
                <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
                <p className="text-stone-500 text-sm mb-4">{t.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-rose-600">{t.price}</span>
                  <span className="text-xs text-stone-400">{t.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=500&fit=crop" alt="Spa interior" className="w-full h-auto rounded-2xl shadow-2xl" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-rose-500 text-sm font-semibold tracking-widest uppercase">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Your Journey to Wellness</h2>
            <p className="text-stone-500 mb-6">Founded in 2008, Serenity Spa has been a sanctuary for those seeking relaxation and rejuvenation. Our team of certified therapists combines ancient healing traditions with modern techniques.</p>
            <p className="text-stone-500 mb-8">We use only the finest organic products, ensuring every treatment nurtures your body while being kind to the environment.</p>
            <div className="grid grid-cols-2 gap-4">
              {['100% Organic', 'Expert Therapists', 'Premium Products', 'Flexible Hours'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-stone-700"><Star className="w-4 h-4 text-rose-500 fill-rose-500" />{item}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-rose-500 text-sm font-semibold tracking-widest uppercase">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">What Our Clients Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-rose-400 text-rose-400" />)}</div>
                <p className="text-stone-600 text-sm mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div><p className="text-sm font-semibold">{t.name}</p><p className="text-xs text-stone-500">{t.treatment}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-rose-500 text-sm font-semibold tracking-widest uppercase">Book Now</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Schedule Your Visit</h2>
            <p className="text-stone-500 mb-6">Ready to relax? Book your appointment online and let us take care of the rest.</p>
          </motion.div>
          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-white border border-rose-100 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-rose-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300" />
            <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-rose-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300" />
            <select className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-rose-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300">
              <option>Swedish Massage</option>
              <option>Facial Treatment</option>
              <option>Hot Stone Therapy</option>
              <option>Aromatherapy</option>
            </select>
            <input type="date" className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-rose-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300" />
            <textarea placeholder="Special Requests" rows={3} className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-rose-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300" />
            <button type="submit" className="w-full py-3 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-rose-200">Book Appointment</button>
          </motion.form>
        </div>
      </section>

      <footer className="py-12 px-6 bg-stone-900 text-stone-400">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div><span className="text-white text-lg font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-3 block">SerenitySpa</span><p className="text-sm">Your sanctuary for relaxation and rejuvenation.</p></div>
          <div><h4 className="text-white font-semibold mb-3">Services</h4><div className="space-y-2 text-sm"><p>Massage</p><p>Facials</p><p>Body Treatments</p><p>Packages</p></div></div>
          <div><h4 className="text-white font-semibold mb-3">Company</h4><div className="space-y-2 text-sm"><p>About</p><p>Team</p><p>Careers</p><p>Press</p></div></div>
          <div><h4 className="text-white font-semibold mb-3">Support</h4><div className="space-y-2 text-sm"><p>Contact</p><p>FAQ</p><p>Gift Cards</p><p>Membership</p></div></div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-stone-800 text-sm text-center">SerenitySpa. All rights reserved.</div>
      </footer>
    </div>
  )
}
