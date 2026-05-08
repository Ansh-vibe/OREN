'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

const floatingOrbs = [
  { size: 500, x: '70%', y: '20%', color: 'oklch(0.55 0.2 290 / 0.12)', delay: 0 },
  { size: 400, x: '10%', y: '60%', color: 'oklch(0.55 0.18 240 / 0.10)', delay: 0.5 },
  { size: 300, x: '55%', y: '75%', color: 'oklch(0.82 0.14 85 / 0.06)', delay: 1 },
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '8+', label: 'Services Offered' },
  { value: '2026', label: 'Founded' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(oklch(0.96 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(0.96 0 0 / 0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 mb-8"
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: 'var(--color-gold)' }}
          />
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
            Premium Digital Agency · Kanpur, India
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-balance leading-none mb-6"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          Building Modern
          <br />
          <span className="text-gold-gradient">Digital Experiences</span>
          <br />
          That Grow Businesses
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
        >
          We create premium websites, e-commerce platforms, CRM systems, branding, and digital
          solutions for startups and modern businesses across India and beyond.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{ background: 'var(--color-gold)', color: 'var(--background)' }}
          >
            Get Free Consultation
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold border border-border hover:border-gold/40 transition-all duration-300 hover:scale-105"
          >
            View Portfolio
          </a>
          <a
            href="https://wa.me/918400385071"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-medium border border-border hover:border-green-500/40 hover:text-green-400 transition-all duration-300"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl"
        >
          {stats.map((stat, i) => (
            <div key={i} className="border-l border-border pl-4">
              <div
                className="text-2xl font-display font-black"
                style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-gold)' }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, var(--color-gold), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
