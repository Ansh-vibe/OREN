'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

const categories = ['All', 'Restaurant', 'E-commerce', 'CRM', 'Branding', 'Business']

const projects = [
  {
    id: 1,
    title: 'Kloof Street House',
    subtitle: 'Cape Town Restaurant Experience',
    category: 'Restaurant',
    tags: ['Next.js', 'Framer Motion', 'Reservation System'],
    description:
      'Luxury restaurant website with elegant animations, reservation system, interactive food menu, and gallery experience. Cinematic transitions and mobile-first design.',
    url: 'https://rooftop-reserve-4.preview.emergentagent.com/',
    accentColor: 'oklch(0.72 0.14 50)',
    year: '2026',
  },
  {
    id: 2,
    title: 'Utopia Cape Town',
    subtitle: 'Fine Dining Website',
    category: 'Restaurant',
    tags: ['React', 'Smooth Animations', 'Booking System'],
    description:
      'High-end restaurant branding with smooth page animations, smart booking system, interactive gallery, and elegant typography for an immersive dining experience.',
    url: 'https://intimate-feast.preview.emergentagent.com/',
    accentColor: 'oklch(0.65 0.12 200)',
    year: '2026',
  },
  {
    id: 3,
    title: 'ShopNova',
    subtitle: 'E-commerce Platform',
    category: 'E-commerce',
    tags: ['Next.js', 'Stripe', 'Razorpay'],
    description:
      'Full-featured online store with seamless checkout, inventory management, and multi-payment gateway integration for a D2C brand.',
    url: '#portfolio',
    accentColor: 'oklch(0.7 0.2 290)',
    year: '2026',
  },
  {
    id: 4,
    title: 'BusinessCore CRM',
    subtitle: 'CRM & Business Automation',
    category: 'CRM',
    tags: ['Node.js', 'PostgreSQL', 'Dashboard'],
    description:
      'Custom CRM solution with lead management, analytics dashboard, automated follow-ups, and integration with WhatsApp Business API.',
    url: '#portfolio',
    accentColor: 'oklch(0.6 0.18 160)',
    year: '2026',
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-28 relative overflow-hidden">
      {/* BG accent */}
      <div
        className="absolute right-0 top-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.55 0.2 290 / 0.06) 0%, transparent 70%)',
          transform: 'translate(30%, -50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
            Featured Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-4xl md:text-6xl font-display font-black tracking-tight text-balance leading-none"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Our Latest
              <br />
              <span className="text-gold-gradient">Portfolio</span>
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm md:text-base">
              Handcrafted digital experiences that blend luxury aesthetics with high-performance
              engineering.
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-background font-semibold'
                  : 'border border-border text-muted-foreground hover:border-gold/30 hover:text-foreground'
              }`}
              style={
                activeCategory === cat
                  ? { background: 'var(--color-gold)', color: 'var(--background)' }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative glass-card rounded-3xl overflow-hidden"
              >
                {/* Preview area */}
                <div
                  className="relative h-56 overflow-hidden flex items-center justify-center"
                  style={{
                    background: `radial-gradient(ellipse at 60% 40%, ${project.accentColor}/15 0%, oklch(0.1 0 0) 80%)`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="text-8xl font-display font-black opacity-5 select-none"
                      style={{ fontFamily: 'var(--font-syne)', color: project.accentColor }}
                    >
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  {/* Project label */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs border border-border/60 rounded-full px-3 py-1 text-muted-foreground bg-background/40 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>

                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-display font-bold" style={{ fontFamily: 'var(--font-syne)' }}>
                        {project.title}
                      </h3>
                      <p className="text-sm" style={{ color: project.accentColor }}>
                        {project.subtitle}
                      </p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-300"
                    >
                      <ExternalLink size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `0 0 40px ${project.accentColor}/08 inset`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
            style={{ '--hover-color': 'var(--color-gold)' } as React.CSSProperties}
          >
            Start your project with OREN
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
