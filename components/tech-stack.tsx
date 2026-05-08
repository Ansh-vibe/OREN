'use client'

import { motion } from 'framer-motion'

const technologies = [
  { name: 'React', abbr: 'Re', color: 'oklch(0.65 0.18 220)' },
  { name: 'Next.js', abbr: 'Nx', color: 'oklch(0.85 0 0)' },
  { name: 'Node.js', abbr: 'No', color: 'oklch(0.65 0.17 145)' },
  { name: 'TypeScript', abbr: 'TS', color: 'oklch(0.55 0.18 240)' },
  { name: 'Tailwind', abbr: 'Tw', color: 'oklch(0.65 0.15 200)' },
  { name: 'MongoDB', abbr: 'Mg', color: 'oklch(0.65 0.18 145)' },
  { name: 'PostgreSQL', abbr: 'Pg', color: 'oklch(0.55 0.16 250)' },
  { name: 'Firebase', abbr: 'Fb', color: 'oklch(0.7 0.17 50)' },
  { name: 'Stripe', abbr: 'St', color: 'oklch(0.6 0.18 280)' },
  { name: 'Razorpay', abbr: 'Rz', color: 'oklch(0.55 0.2 250)' },
  { name: 'Odoo', abbr: 'Od', color: 'oklch(0.65 0.16 155)' },
  { name: 'Framer', abbr: 'Fm', color: 'oklch(0.6 0.2 300)' },
]

export default function TechStack() {
  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-border/50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
            Technology
          </p>
          <h2
            className="text-4xl md:text-5xl font-display font-black tracking-tight text-balance"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Built With
            <span className="text-gold-gradient"> Modern Stack</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl glass-card cursor-default transition-all duration-300"
            >
              {/* Logo circle */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold font-mono transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${tech.color}/10`,
                  color: tech.color,
                  border: `1px solid ${tech.color}/20`,
                  fontFamily: 'var(--font-geist-mono)',
                }}
              >
                {tech.abbr}
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                {tech.name}
              </span>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at center, ${tech.color}/05 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
