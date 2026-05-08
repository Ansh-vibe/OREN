'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rahul Sharma',
    company: 'FreshCart India',
    role: 'Founder & CEO',
    review:
      'OREN built our entire e-commerce platform in just 3 weeks. The result was stunning — clean UI, blazing fast performance, and a checkout flow that genuinely converts. Our sales tripled in the first month.',
    rating: 5,
    initials: 'RS',
    accentColor: 'oklch(0.65 0.2 290)',
  },
  {
    name: 'Priya Mehta',
    company: 'Bloom Bridal Studio',
    role: 'Creative Director',
    review:
      'I needed a luxury wedding brand presence online. OREN delivered beyond expectations — the website looks like it belongs on Awwwards. Every animation, every hover state is pure magic.',
    rating: 5,
    initials: 'PM',
    accentColor: 'oklch(0.72 0.14 50)',
  },
  {
    name: 'Arjun Kapoor',
    company: 'TechNovate Solutions',
    role: 'Co-Founder',
    review:
      'We hired OREN for our CRM system. They understood our complex workflows perfectly and delivered a solution that saved our team 20 hours per week. Exceptional work and communication throughout.',
    rating: 5,
    initials: 'AK',
    accentColor: 'oklch(0.6 0.18 160)',
  },
  {
    name: 'Sneha Patel',
    company: 'Biryani Junction',
    role: 'Restaurant Owner',
    review:
      'Our restaurant website by OREN has been a game changer. The online reservation system and food gallery drive a 40% increase in table bookings. Highly professional team with great taste.',
    rating: 5,
    initials: 'SP',
    accentColor: 'oklch(0.7 0.17 50)',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [autoPlay])

  const prev = () => {
    setAutoPlay(false)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }
  const next = () => {
    setAutoPlay(false)
    setCurrent((c) => (c + 1) % testimonials.length)
  }

  const t = testimonials[current]

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-border/50" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
            Client Love
          </p>
          <h2
            className="text-4xl md:text-5xl font-display font-black tracking-tight"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            What Our Clients
            <span className="text-gold-gradient"> Say</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            >
              {/* BG accent */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${t.accentColor}/06 0%, transparent 60%)`,
                }}
              />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6 relative">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="var(--color-gold)" style={{ color: 'var(--color-gold)' }} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 max-w-2xl mx-auto relative font-light">
                &ldquo;{t.review}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4 relative">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: t.accentColor + '/20', color: t.accentColor, border: `1px solid ${t.accentColor}/30` }}
                >
                  {t.initials}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold/40 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoPlay(false); setCurrent(i) }}
                  className="transition-all duration-300"
                  aria-label={`Testimonial ${i + 1}`}
                >
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 24 : 8,
                      height: 8,
                      background: i === current ? 'var(--color-gold)' : 'var(--color-border)',
                    }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold/40 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
