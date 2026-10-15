import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navLinks, siteConfig } from '../config'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.4 }
    )
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[8000] transition-all duration-500 ${scrolled ? 'navbar-scrolled' : ''}`}
        style={{ background: scrolled ? undefined : 'transparent' }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[70px]">
          {/* Wordmark */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-1 group cursor-none"
            aria-label="Go to homepage"
          >
            <span className="font-display font-bold text-xl tracking-tight text-[#F5F7F2]">
              {siteConfig.wordmark.slice(0, -1)}
            </span>
            <span className="font-display font-bold text-xl text-[#B6FF00] group-hover:drop-shadow-[0_0_8px_rgba(182,255,0,0.8)] transition-all duration-300">.</span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative font-display text-[0.75rem] font-medium tracking-[0.12em] uppercase transition-colors duration-300 cursor-none ${
                  activeSection === link.href ? 'text-[#B6FF00]' : 'text-[#A0A69D] hover:text-[#F5F7F2]'
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#B6FF00]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('#collaborate')}
              className="hidden lg:flex items-center gap-2 btn-primary text-[0.7rem] py-2.5 px-5"
            >
              WORK WITH ME <ArrowUpRight size={14} />
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-[#F5F7F2] hover:text-[#B6FF00] transition-colors cursor-none"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mobile-menu-overlay flex flex-col justify-center items-center gap-10 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#B6FF00] opacity-30" />

            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => handleNavClick(link.href)}
                className="font-display text-4xl font-bold tracking-tight text-[#F5F7F2] hover:text-[#B6FF00] transition-colors cursor-none"
              >
                {link.label}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              onClick={() => handleNavClick('#collaborate')}
              className="btn-primary mt-4 text-sm"
            >
              WORK WITH ME <ArrowUpRight size={16} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
