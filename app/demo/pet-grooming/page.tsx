'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Scissors, Bath, Sparkles, PawPrint, ChevronRight, Star, Phone, Mail, MapPin, Menu, X } from 'lucide-react'

const services = [
  { icon: Bath, title: 'Bath & Brush', desc: 'Deep cleansing bath with premium shampoo, blow dry, and thorough brushing.', price: '$35' },
  { icon: Scissors, title: 'Full Grooming', desc: 'Complete haircut and styling tailored to your pet\'s breed and preferences.', price: '$55' },
  { icon: Sparkles, title: 'Nail Trim', desc: 'Safe and gentle nail trimming to keep your pet comfortable and healthy.', price: '$15' },
  { icon: PawPrint, title: 'Ear Cleaning', desc: 'Thorough ear cleaning to prevent infections and keep ears healthy.', price: '$20' },
  { icon: Sparkles, title: 'Teeth Brushing', desc: 'Dental hygiene service to maintain fresh breath and healthy teeth.', price: '$15' },
  { icon: Star, title: 'Spa Package', desc: 'The ultimate pampering experience with all services plus aromatherapy.', price: '$99' },
]

const gallery = [
  { name: 'Max', breed: 'Golden Retriever', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop' },
  { name: 'Bella', breed: 'Labrador', img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=400&fit=crop' },
  { name: 'Charlie', breed: 'Beagle', img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop' },
  { name: 'Luna', breed: 'Husky', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop' },
  { name: 'Cooper', breed: 'Border Collie', img: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&h=400&fit=crop' },
  { name: 'Daisy', breed: 'Poodle', img: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=400&fit=crop' },
]

const plans = [
  { name: 'Basic', price: '$35', features: ['Bath & shampoo', 'Blow dry', 'Brush out', 'Nail trim', 'Ear cleaning'], featured: false },
  { name: 'Premium', price: '$65', features: ['Everything in Basic', 'Full haircut & styling', 'Teeth brushing', 'Paw pad trim', 'Cologne spray', 'Bandana or bow'], featured: true },
  { name: 'Spa Deluxe', price: '$99', features: ['Everything in Premium', 'Deep conditioning', 'Aromatherapy', 'Massage therapy', 'Blueberry facial', 'Priority booking'], featured: false },
]

export default function PetGroomingDemo() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800 font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold flex items-center gap-2">
            <PawPrint className="w-6 h-6 text-amber-500" />
            PawSpa
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-amber-600 transition-colors">Gallery</a>
            <a href="#pricing" className="hover:text-amber-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-amber-600 transition-colors">Reviews</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors">Book Now</a>
          </div>
          <button className="md:hidden text-stone-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white border-b border-amber-100 px-6 py-4 flex flex-col gap-3 text-sm font-medium text-stone-600">
            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-amber-600">Services</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="hover:text-amber-600">Gallery</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)} className="hover:text-amber-600">Pricing</a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)} className="hover:text-amber-600">Reviews</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-full bg-amber-500 text-white text-center">Book Now</a>
          </motion.div>
        )}
      </nav>

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase flex items-center gap-2 mb-4">
              <PawPrint className="w-4 h-4" /> 1 Pet Spa in Town
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Pamper Your<br />Furry Friend
            </h1>
            <p className="text-stone-500 text-lg mb-8 max-w-md">
              Professional grooming services that make tails wag! Book your pet&apos;s spa day and watch them shine.
            </p>
            <div className="flex items-center gap-4">
              <a href="#contact" className="px-6 py-3 rounded-full bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors shadow-lg shadow-amber-200">Book Appointment</a>
              <a href="#services" className="px-6 py-3 rounded-full border border-stone-300 text-stone-700 font-medium hover:bg-stone-100 transition-colors">View Services</a>
            </div>
            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-amber-100">
              <div><span className="text-2xl font-bold">5,000+</span><p className="text-xs text-stone-500">Happy Pets</p></div>
              <div><span className="text-2xl font-bold">4.9</span><p className="text-xs text-stone-500">Rating</p></div>
              <div><span className="text-2xl font-bold">10+</span><p className="text-xs text-stone-500">Years Exp.</p></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=500&fit=crop" alt="Happy groomed dog" className="w-full h-auto rounded-2xl shadow-2xl" />
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Tail-Wagging Services</h2>
            <p className="text-stone-500 mt-3 max-w-xl mx-auto">From basic grooming to full spa treatments, we&apos;ve got everything your furry friend needs!</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 hover:border-amber-200 transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-4"><s.icon className="w-5 h-5 text-amber-600" /></div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-stone-500 text-sm mb-3">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-amber-600">{s.price}</span>
                  <a href="#contact" className="text-sm font-medium text-amber-600 hover:text-amber-700 flex items-center gap-1">Book <ChevronRight className="w-3 h-3" /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Pet Gallery</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Our Happy Clients</h2>
            <p className="text-stone-500 mt-3">Check out some of our adorable guests after their spa day!</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {gallery.map((pet) => (
              <motion.div key={pet.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} className="text-center">
                <div className="rounded-2xl overflow-hidden mb-2 aspect-square">
                  <img src={pet.img} alt={pet.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-semibold">{pet.name}</p>
                <p className="text-xs text-stone-500">{pet.breed}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Simple Pricing</h2>
            <p className="text-stone-500 mt-3">Choose the perfect package for your furry friend. No hidden fees!</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -4 }} className={`relative p-6 rounded-2xl border ${plan.featured ? 'bg-amber-500 text-white border-amber-500 shadow-xl shadow-amber-200' : 'bg-amber-50 border-amber-100'}`}>
                {plan.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-amber-600 text-xs font-semibold shadow">Most Popular</span>}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-4xl font-bold mb-4 ${plan.featured ? 'text-white' : ''}`}>{plan.price} <span className="text-sm font-normal">per visit</span></p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" /> {f}</li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center py-3 rounded-full font-medium transition-colors ${plan.featured ? 'bg-white text-amber-600 hover:bg-amber-50' : 'bg-amber-500 text-white hover:bg-amber-600'}`}>Book Now</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">What Pet Parents Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: 'Max has never looked better! The team at PawSpa is amazing. They\'re so gentle and patient with him.', name: 'Sarah Johnson', pet: 'Max the Golden Retriever', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
              { text: 'Luna\'s coat is always so fluffy and clean after her visits. The spa package is worth every penny.', name: 'Michael Chen', pet: 'Luna the Husky', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
              { text: 'Best grooming service in town! Bella\'s haircuts are always perfect. The staff really knows how to handle different breeds.', name: 'Emily Davis', pet: 'Bella the Poodle', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
            ].map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white border border-amber-100">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                <p className="text-stone-600 text-sm mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div><p className="text-sm font-semibold">{t.name}</p><p className="text-xs text-stone-500">{t.pet}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Book Now</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Ready to Pamper Your Pet?</h2>
            <p className="text-stone-500 mb-6">Book your appointment online in just a few clicks. We&apos;ll take care of the rest!</p>
            <div className="space-y-3">
              {[
                { icon: Sparkles, text: 'Same-day appointments available' },
                { icon: Sparkles, text: 'Free pickup & drop-off (within 5 miles)' },
                { icon: Sparkles, text: 'Easy online payment' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-stone-600"><item.icon className="w-4 h-4 text-amber-500 shrink-0" />{item.text}</div>
              ))}
            </div>
          </motion.div>
          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-amber-50 border border-amber-100 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
            <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
            <input type="text" placeholder="Pet's Name" className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
            <select className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-300">
              <option>Basic Grooming - $35</option>
              <option>Premium Grooming - $65</option>
              <option>Spa Deluxe - $99</option>
            </select>
            <input type="date" className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
            <button type="submit" className="w-full py-3 rounded-full bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors shadow-lg shadow-amber-200">Book Appointment</button>
          </motion.form>
        </div>
      </section>

      <footer className="py-12 px-6 bg-stone-900 text-stone-400">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div><span className="text-white text-lg font-bold flex items-center gap-2 mb-3"><PawPrint className="w-5 h-5 text-amber-400" />PawSpa</span><p className="text-sm">Professional pet grooming services that make tails wag!</p></div>
          <div><h4 className="text-white font-semibold mb-3">Services</h4><div className="space-y-2 text-sm"><p>Bath & Brush</p><p>Full Grooming</p><p>Nail Trim</p><p>Spa Package</p></div></div>
          <div><h4 className="text-white font-semibold mb-3">Company</h4><div className="space-y-2 text-sm"><p>About Us</p><p>Our Team</p><p>Careers</p><p>Contact</p></div></div>
          <div><h4 className="text-white font-semibold mb-3">Support</h4><div className="space-y-2 text-sm"><p>FAQ</p><p>Booking Help</p><p>Pet Care Tips</p><p>Gift Cards</p></div></div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-stone-800 text-sm text-center">PawSpa. All rights reserved.</div>
      </footer>
    </div>
  )
}
