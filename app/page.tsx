import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import About from '@/components/about'
import TechStack from '@/components/tech-stack'
import WhyOren from '@/components/why-oren'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <TechStack />
      <WhyOren />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
