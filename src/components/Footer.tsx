import { motion } from 'framer-motion'
import { ArrowUpRight, Instagram } from 'lucide-react'
import { navLinks, siteConfig } from '../config'

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="relative bg-[#050505] pt-20 pb-8 overflow-hidden" role="contentinfo">
      {/* Animated top green line */}
      <div className="absolute top-0 left-0 right-0">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#B6FF00] to-transparent origin-left"
          style={{ boxShadow: '0 0 10px rgba(182,255,0,0.3)' }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 pb-16 border-b border-[rgba(182,255,0,0.06)]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-5">
              <span className="font-display font-bold text-3xl text-[#F5F7F2] tracking-tight">
                {siteConfig.wordmark.slice(0, -1)}
              </span>
              <span className="font-display font-bold text-3xl text-[#B6FF00]">.</span>
            </div>
            <p className="font-display text-sm font-medium text-[#A0A69D] leading-relaxed mb-6 uppercase tracking-widest">
              Created with intention.<br />
              Built to stand out.
            </p>
            <p className="text-[#A0A69D] font-body text-sm leading-relaxed max-w-xs">
              A digital creator at the intersection of technology, culture, and entertainment.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="section-label mb-6">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="font-display text-sm font-medium text-[#A0A69D] hover:text-[#B6FF00] transition-colors duration-300 cursor-none tracking-wide"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="section-label mb-6">Connect</h3>
            <div className="space-y-4 mb-8">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group cursor-none"
                aria-label="Follow on Instagram"
              >
                <div className="w-9 h-9 bg-[#101410] border border-[rgba(182,255,0,0.1)] flex items-center justify-center group-hover:border-[#B6FF00] group-hover:bg-[rgba(182,255,0,0.05)] transition-all duration-300">
                  <Instagram size={16} className="text-[#A0A69D] group-hover:text-[#B6FF00] transition-colors" />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-[#F5F7F2] group-hover:text-[#B6FF00] transition-colors">
                    Instagram
                  </div>
                  <div className="font-body text-xs text-[#A0A69D]">{siteConfig.instagramHandle}</div>
                </div>
              </a>
            </div>

            <a
              href="#collaborate"
              onClick={(e) => { e.preventDefault(); handleNavClick('#collaborate') }}
              className="btn-primary text-xs py-3 px-5 inline-flex cursor-none"
            >
              WORK WITH ME <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
          <p className="font-body text-xs text-[#A0A69D]">
            © {year} Shazaaam. All rights reserved.
          </p>
          <p className="font-display text-xs font-medium text-[#A0A69D] tracking-widest uppercase">
            Creator · Technology · Culture
          </p>
        </div>
      </div>
    </footer>
  )
}
