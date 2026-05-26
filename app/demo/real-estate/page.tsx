'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Building2, MapPin, Star, ChevronRight, Search, Menu, X, Phone, Mail } from 'lucide-react'

const listings = [
  { title: 'Modern Waterfront Villa', location: 'Miami Beach, FL', beds: 5, baths: 4, sqft: '6,200', price: '$4,500,000', featured: true, img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop' },
  { title: 'Luxury Penthouse Suite', location: 'Manhattan, NY', beds: 4, baths: 3, sqft: '4,800', price: '$8,900,000', featured: false, img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop' },
  { title: 'Contemporary Estate', location: 'Beverly Hills, CA', beds: 7, baths: 8, sqft: '12,000', price: '$12,500,000', featured: true, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop' },
]

const agents = [
  { name: 'Victoria Sterling', role: 'Senior Luxury Agent', sales: '$120M+', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
  { name: 'James Crawford', role: 'Commercial Specialist', sales: '$85M+', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
  { name: 'Sophia Chen', role: 'Residential Expert', sales: '$95M+', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
  { name: 'Michael Ross', role: 'Investment Advisor', sales: '$150M+', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
]

export default function RealEstateDemo() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">LUXEESTATE</span>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#listings" className="hover:text-slate-900 transition-colors">Properties</a>
            <a href="#agents" className="hover:text-slate-900 transition-colors">Agents</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors">Schedule Viewing</a>
          </div>
          <button className="md:hidden text-slate-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white border-b border-slate-100 px-6 py-4 flex flex-col gap-3 text-sm font-medium text-slate-600">
            <a href="#listings" onClick={() => setMenuOpen(false)} className="hover:text-slate-900">Properties</a>
            <a href="#agents" onClick={() => setMenuOpen(false)} className="hover:text-slate-900">Agents</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-slate-900">About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-full bg-slate-900 text-white text-center">Schedule Viewing</a>
          </motion.div>
        )}
      </nav>

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Premium Properties</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mt-4 mb-6">
              Find Your<br />Dream Home
            </h1>
            <p className="text-slate-300 text-lg mb-10">Discover exceptional properties in the most prestigious locations. Your perfect home awaits.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 flex-1 min-w-[200px]"><Search className="w-4 h-4 text-slate-400 shrink-0" /><input type="text" placeholder="Location, property type..." className="bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none w-full" /></div>
              <select className="bg-white/10 text-sm text-white rounded-xl px-4 py-2 border border-white/10 focus:outline-none">
                <option className="text-slate-800">All Types</option>
                <option className="text-slate-800">House</option>
                <option className="text-slate-800">Apartment</option>
                <option className="text-slate-800">Villa</option>
                <option className="text-slate-800">Penthouse</option>
              </select>
              <button className="px-6 py-2 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors whitespace-nowrap">Search</button>
            </div>
            <div className="flex items-center justify-center gap-8 mt-10">
              <div><span className="text-2xl font-bold text-white">500+</span><p className="text-xs text-slate-400">Properties</p></div>
              <div><span className="text-2xl font-bold text-white">$2B+</span><p className="text-xs text-slate-400">Sales Volume</p></div>
              <div><span className="text-2xl font-bold text-white">15+</span><p className="text-xs text-slate-400">Years Exp.</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="listings" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-between mb-8">
            <div><span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">Featured Listings</span><h2 className="text-3xl sm:text-4xl font-bold mt-1">Exceptional Properties</h2></div>
            <a href="#contact" className="hidden sm:flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">View All <ChevronRight className="w-4 h-4" /></a>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {listings.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }} className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="relative h-52 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  {p.featured && <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium">Featured</span>}
                </div>
                <div className="p-5">
                  <p className="flex items-center gap-1 text-xs text-slate-500 mb-1"><MapPin className="w-3 h-3" />{p.location}</p>
                  <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span>{p.beds} Beds</span><span>{p.baths} Baths</span><span>{p.sqft} sqft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-slate-900">{p.price}</span>
                    <a href="#contact" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">View Details <ChevronRight className="w-3 h-3" /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">The LuxeEstate Difference</h2>
            <p className="text-slate-500 mt-3">We combine expertise, technology, and personalized service to deliver an exceptional real estate experience.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: 'Virtual Tours', desc: 'Experience properties from anywhere with our immersive 3D virtual tours.' },
              { icon: Star, title: 'Expert Guidance', desc: 'Our experienced agents provide personalized service every step of the way.' },
              { icon: Building2, title: 'Secure Transactions', desc: 'Rest easy with our secure, transparent, and legally compliant process.' },
              { icon: Search, title: 'Market Insights', desc: 'Make informed decisions with our comprehensive market analysis and data.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4"><item.icon className="w-6 h-6 text-blue-600" /></div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="agents" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Meet Our Expert Agents</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((a, i) => (
              <motion.div key={a.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center group">
                <div className="rounded-2xl overflow-hidden mb-4 aspect-square">
                  <img src={a.img} alt={a.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-semibold">{a.name}</h3>
                <p className="text-sm text-slate-500 mb-1">{a.role}</p>
                <p className="text-sm font-bold text-blue-600">{a.sales} in Sales</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Ready to Find Your Dream Property?</h2>
              <p className="text-slate-300 mb-8">Schedule a consultation with one of our expert agents. We&apos;ll help you navigate the market and find the perfect property.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-blue-400 shrink-0" /><span className="text-slate-300">+1 (555) 123-4567</span></div>
                <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-blue-400 shrink-0" /><span className="text-slate-300">contact@luxeestate.com</span></div>
                <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-blue-400 shrink-0" /><span className="text-slate-300">123 Luxury Ave, New York, NY 10001</span></div>
              </div>
            </motion.div>
            <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea placeholder="Message" rows={3} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="submit" className="w-full py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">Request Consultation</button>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-slate-950 text-slate-500">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div><span className="text-white text-lg font-bold tracking-tight mb-3 block">LUXEESTATE</span><p className="text-sm">Your trusted partner in luxury real estate.</p></div>
          <div><h4 className="text-white font-semibold mb-3">Properties</h4><div className="space-y-2 text-sm"><p>For Sale</p><p>For Rent</p><p>New Developments</p><p>Commercial</p></div></div>
          <div><h4 className="text-white font-semibold mb-3">Services</h4><div className="space-y-2 text-sm"><p>Buy</p><p>Sell</p><p>Rent</p><p>Property Management</p></div></div>
          <div><h4 className="text-white font-semibold mb-3">Company</h4><div className="space-y-2 text-sm"><p>About Us</p><p>Our Team</p><p>Careers</p><p>Press</p></div></div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-slate-800 text-sm text-center">LuxeEstate. All rights reserved.</div>
      </footer>
    </div>
  )
}
