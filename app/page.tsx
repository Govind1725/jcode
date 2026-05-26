import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import WebsiteDemos from '@/components/WebsiteDemos'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <WebsiteDemos />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
