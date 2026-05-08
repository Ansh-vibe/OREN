'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  ShoppingCart,
  BarChart3,
  Palette,
  Search,
  Zap,
  Wrench,
  Share2,
  ArrowUpRight,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Custom, fast, and beautifully crafted websites that convert visitors into customers. Built with Next.js and modern tech.',
    tag: 'Core Service',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    description:
      'Full-featured online stores with seamless checkout, inventory management, and payment integrations.',
    tag: 'Popular',
  },
  {
    icon: BarChart3,
    title: 'CRM & ERP Solutions',
    description:
      'Custom business management systems that streamline operations and scale with your growth.',
    tag: 'Enterprise',
  },
  {
    icon: Palette,
    title: 'Branding & Graphic Design',
    description:
      'Distinctive brand identities — logos, color systems, typography, and visual language that stands out.',
    tag: 'Creative',
  },
  {
    icon: Search,
    title: 'SEO & Digital Marketing',
    description:
      'Data-driven SEO strategies and digital campaigns that put your brand in front of the right audience.',
    tag: 'Growth',
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description:
      'Automate repetitive workflows, integrate APIs, and build tools that save your team hundreds of hours.',
    tag: 'Efficiency',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description:
      'Ongoing support, updates, performance optimization, and security monitoring for peace of mind.',
    tag: 'Support',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description:
      'Strategic social presence management, content creation, and community building that drives engagement.',
    tag: 'Marketing',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Section divider line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-border))' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
            What We Do
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-4xl md:text-6xl font-display font-black tracking-tight text-balance leading-none"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Services That
              <br />
              <span className="text-gold-gradient">Drive Results</span>
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm md:text-base">
              From concept to launch, we deliver end-to-end digital solutions crafted for modern
              businesses and ambitious startups.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-gold/20"
                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
              >
                {/* Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs text-muted-foreground tracking-wide border border-border/60 rounded-full px-2.5 py-0.5">
                    {service.tag}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    style={{ '--hover-color': 'var(--color-gold)' } as React.CSSProperties}
                  />
                </div>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'var(--color-gold)/10', backgroundColor: 'oklch(0.82 0.14 85 / 0.1)' }}
                >
                  <Icon size={20} style={{ color: 'var(--color-gold)' }} />
                </div>

                <h3 className="text-base font-semibold mb-2 leading-snug">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at top left, oklch(0.82 0.14 85 / 0.04) 0%, transparent 70%)',
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
