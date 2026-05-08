'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const counters = [
  { end: 50, suffix: '+', label: 'Projects Completed' },
  { end: 30, suffix: '+', label: 'Happy Clients' },
  { end: 15, suffix: '+', label: 'Technologies Mastered' },
  { end: 8, suffix: '+', label: 'Industries Served' },
]

function AnimatedCounter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1800
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, end])

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-5xl md:text-6xl font-display font-black text-gold-gradient mb-2"
        style={{ fontFamily: 'var(--font-syne)' }}
      >
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

const values = [
  {
    title: 'Our Mission',
    description:
      'To democratize access to premium digital solutions — giving every startup and SME the same cutting-edge tools that Fortune 500s enjoy, at accessible pricing.',
  },
  {
    title: 'Our Vision',
    description:
      'To become India\'s most trusted digital growth partner, recognized globally for transforming businesses through technology, design, and strategy.',
  },
  {
    title: 'Our Approach',
    description:
      'We pair deep technical expertise with luxury-level design sensibility. Every pixel, every line of code is crafted to convert, delight, and scale.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* BG accent */}
      <div
        className="absolute left-0 top-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.82 0.14 85 / 0.05) 0%, transparent 70%)',
          transform: 'translate(-40%, -50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl font-display font-black tracking-tight text-balance leading-tight mb-8"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Born in Kanpur,
              <br />
              <span className="text-gold-gradient">Built for the World</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                OREN was founded in 2026 by a passionate team of developers, designers, and
                marketers who believed that premium digital experiences shouldn&apos;t be reserved
                for enterprise budgets.
              </p>
              <p>
                Starting from Kanpur, Uttar Pradesh, we set out to bridge the gap between
                world-class design and affordable execution — serving startups, restaurants, local
                businesses, and e-commerce brands who deserve the best.
              </p>
              <p>
                Today, OREN delivers cinematic websites, robust CRM systems, and growth-focused
                digital marketing strategies that compete on a global stage — from Cape Town
                restaurants to Indian e-commerce brands.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-5"
                >
                  <h4 className="font-semibold mb-2 text-sm" style={{ color: 'var(--color-gold)' }}>
                    {v.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Counters + Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            {/* Counters */}
            <div className="glass-card rounded-3xl p-8 grid grid-cols-2 gap-8">
              {counters.map((c, i) => (
                <AnimatedCounter key={i} end={c.end} suffix={c.suffix} label={c.label} />
              ))}
            </div>

            {/* Quote */}
            <div
              className="relative rounded-3xl p-8 overflow-hidden"
              style={{
                background: 'radial-gradient(ellipse at top right, oklch(0.82 0.14 85 / 0.08), oklch(0.1 0 0) 80%)',
                border: '1px solid oklch(0.82 0.14 85 / 0.15)',
              }}
            >
              <div
                className="text-6xl font-display font-black opacity-10 mb-4 leading-none"
                style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-gold)' }}
              >
                &ldquo;
              </div>
              <p className="text-lg font-display font-semibold leading-relaxed mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
                We don&apos;t just build websites. We build digital assets that work for your
                business while you sleep.
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: 'var(--color-gold)', color: 'var(--background)' }}
                >
                  O
                </div>
                <div>
                  <div className="text-sm font-medium">OREN Team</div>
                  <div className="text-xs text-muted-foreground">Kanpur, India · 2026</div>
                </div>
              </div>
            </div>

            {/* Who we serve */}
            <div>
              <p className="text-xs text-muted-foreground tracking-wide uppercase mb-4">
                Who We Serve
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Startups',
                  'Local Businesses',
                  'Restaurants',
                  'Instagram Sellers',
                  'E-commerce Brands',
                  'SMEs',
                  'Personal Brands',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs rounded-full border border-border text-muted-foreground hover:border-gold/30 hover:text-foreground transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
