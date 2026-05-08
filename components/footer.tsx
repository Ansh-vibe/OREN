'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github } from 'lucide-react'

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  { label: 'Website Development', href: '#services' },
  { label: 'E-commerce', href: '#services' },
  { label: 'CRM & ERP', href: '#services' },
  { label: 'Branding', href: '#services' },
  { label: 'SEO & Marketing', href: '#services' },
]

const socials = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 pt-16 pb-8">
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16"
        style={{ background: 'linear-gradient(to bottom, var(--color-gold)/30, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span
                className="text-3xl font-display font-black tracking-tighter text-gold-gradient"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                OREN
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Premium digital agency building modern websites, CRM systems, and growth solutions for
              ambitious businesses.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-all duration-200"
                    style={{ '--hover-color': 'var(--color-gold)' } as React.CSSProperties}
                  >
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-foreground mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-foreground mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-foreground mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info.oren01@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={14} style={{ color: 'var(--color-gold-dim)' }} />
                  info.oren01@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918400385071"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone size={14} style={{ color: 'var(--color-gold-dim)' }} />
                  +91 8400385071
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-gold-dim)' }} />
                Kanpur, Uttar Pradesh, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} OREN Digital Agency. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with precision in{' '}
            <span style={{ color: 'var(--color-gold-dim)' }}>Kanpur, India</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
