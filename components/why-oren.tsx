'use client'

import { motion } from 'framer-motion'
import {
  IndianRupee,
  Rocket,
  Clock,
  Code2,
  TrendingUp,
  Layers,
  HeadphonesIcon,
  Sparkles,
} from 'lucide-react'

const features = [
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Premium quality without enterprise pricing. Flexible packages for every budget.',
  },
  {
    icon: Rocket,
    title: 'Startup-Focused',
    description:
      'We understand startup velocity. Our process is lean, agile, and built for speed to market.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Rapid turnaround without cutting corners. Most projects live within 2–4 weeks.',
  },
  {
    icon: Code2,
    title: 'Modern Technologies',
    description:
      'Next.js, React, Node.js, PostgreSQL — we use the same stack as the world\'s top startups.',
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimized',
    description:
      'Every site we build is engineered for search — structured data, Core Web Vitals, and more.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description:
      'Future-proof code structure that grows with your business from MVP to enterprise scale.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Full Support',
    description:
      'We don\'t disappear post-launch. Ongoing maintenance, updates, and 24/7 support included.',
  },
  {
    icon: Sparkles,
    title: 'Premium UI/UX',
    description:
      'Design that converts. Every interface is crafted with Awwwards-level attention to detail.',
  },
]

export default function WhyOren() {
  return (
    <section id="why" className="py-28 relative overflow-hidden">
      {/* BG glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, oklch(0.82 0.14 85 / 0.03) 0%, transparent 70%)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-border/50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
            Why Us
          </p>
          <h2
            className="text-4xl md:text-6xl font-display font-black tracking-tight text-balance"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Why Choose
            <span className="text-gold-gradient"> OREN</span>
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group glass-card rounded-2xl p-6 transition-all duration-300 hover:border-gold/20"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'oklch(0.82 0.14 85 / 0.1)' }}
                >
                  <Icon size={18} style={{ color: 'var(--color-gold)' }} />
                </div>
                <h3 className="font-semibold text-sm mb-2">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 relative rounded-3xl overflow-hidden p-10 md:p-14 text-center"
          style={{
            background: 'linear-gradient(135deg, oklch(0.13 0 0), oklch(0.1 0 0))',
            border: '1px solid oklch(0.82 0.14 85 / 0.15)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, oklch(0.82 0.14 85 / 0.08), transparent 60%)',
            }}
          />
          <p className="text-xs tracking-widest uppercase mb-4 relative" style={{ color: 'var(--color-gold)' }}>
            Ready to Start?
          </p>
          <h3
            className="text-3xl md:text-5xl font-display font-black mb-4 text-balance relative"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Let&apos;s Build Something
            <span className="text-gold-gradient"> Extraordinary</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm relative">
            Join 30+ businesses that trust OREN to bring their digital vision to life. Free
            consultation. No commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: 'var(--color-gold)', color: 'var(--background)' }}
            >
              Get Free Consultation
            </a>
            <a
              href="https://wa.me/918400385071"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-sm font-medium border border-border hover:border-green-500/40 hover:text-green-400 transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
