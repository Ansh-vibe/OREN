'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'

const services = [
  'Website Development',
  'E-commerce Development',
  'CRM & ERP Solutions',
  'Branding & Design',
  'SEO & Digital Marketing',
  'Business Automation',
  'Social Media Marketing',
  'Website Maintenance',
]

const budgetRanges = [
  'Under ₹20,000',
  '₹20,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹3,00,000',
  '₹3,00,000+',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-border/50" />

      {/* BG glow */}
      <div
        className="absolute left-1/2 bottom-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.82 0.14 85 / 0.05) 0%, transparent 70%)',
          transform: 'translateX(-50%)',
        }}
      />

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
            Get in Touch
          </p>
          <h2
            className="text-4xl md:text-6xl font-display font-black tracking-tight text-balance"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Start Your
            <span className="text-gold-gradient"> Project</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm">
            Free consultation, no commitments. Tell us about your project and we&apos;ll craft a
            tailored solution that fits your vision and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg mb-6" style={{ fontFamily: 'var(--font-syne)' }}>
                Contact Details
              </h3>
              <div className="space-y-5">
                <a
                  href="mailto:info.oren01@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'oklch(0.82 0.14 85 / 0.1)' }}
                  >
                    <Mail size={16} style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Email Us</div>
                    <div className="text-sm group-hover:text-gold transition-colors" style={{ '--hover-color': 'var(--color-gold)' } as React.CSSProperties}>
                      info.oren01@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+918400385071"
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'oklch(0.82 0.14 85 / 0.1)' }}
                  >
                    <Phone size={16} style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Call Us</div>
                    <div className="text-sm group-hover:text-gold transition-colors">
                      +91 8400385071
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'oklch(0.82 0.14 85 / 0.1)' }}
                  >
                    <MapPin size={16} style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Location</div>
                    <div className="text-sm">Kanpur, Uttar Pradesh, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918400385071?text=Hi%20OREN!%20I%20would%20like%20to%20discuss%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 glass-card rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-green-500/10 flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle size={22} className="text-green-400" />
              </div>
              <div>
                <div className="font-semibold text-sm mb-0.5">WhatsApp Us</div>
                <div className="text-xs text-muted-foreground">
                  Quick response · Usually within 1 hour
                </div>
              </div>
            </a>

            {/* Map embed placeholder */}
            <div
              className="glass-card rounded-2xl overflow-hidden h-48 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin size={24} className="mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Kanpur, UP, India</p>
                <a
                  href="https://maps.google.com/?q=Kanpur,Uttar+Pradesh,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs mt-1 block hover:text-gold transition-colors"
                  style={{ color: 'var(--color-gold-dim)' }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-3xl p-12 flex flex-col items-center justify-center gap-4 h-full min-h-96 text-center"
              >
                <CheckCircle size={48} style={{ color: 'var(--color-gold)' }} />
                <h3 className="text-2xl font-display font-bold" style={{ fontFamily: 'var(--font-syne)' }}>
                  Message Sent!
                </h3>
                <p className="text-muted-foreground max-w-sm text-sm">
                  Thank you for reaching out. Our team will review your project and get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full text-sm border border-border hover:border-gold/40 transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-2 tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-surface rounded-xl px-4 py-3 text-sm border border-border focus:border-gold/40 focus:outline-none transition-all duration-200 placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-2 tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-surface rounded-xl px-4 py-3 text-sm border border-border focus:border-gold/40 focus:outline-none transition-all duration-200 placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-2 tracking-wide">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your company or brand"
                    className="w-full bg-surface rounded-xl px-4 py-3 text-sm border border-border focus:border-gold/40 focus:outline-none transition-all duration-200 placeholder:text-muted-foreground/50"
                  />
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-2 tracking-wide">
                    Service Required *
                  </label>
                  <select
                    required
                    className="w-full bg-surface rounded-xl px-4 py-3 text-sm border border-border focus:border-gold/40 focus:outline-none transition-all duration-200 appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-2 tracking-wide">
                    Budget Range
                  </label>
                  <select
                    className="w-full bg-surface rounded-xl px-4 py-3 text-sm border border-border focus:border-gold/40 focus:outline-none transition-all duration-200 appearance-none"
                  >
                    <option value="">Select your budget</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-2 tracking-wide">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project, goals, timeline..."
                    className="w-full bg-surface rounded-xl px-4 py-3 text-sm border border-border focus:border-gold/40 focus:outline-none transition-all duration-200 resize-none placeholder:text-muted-foreground/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:scale-100"
                  style={{ background: 'var(--color-gold)', color: 'var(--background)' }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
