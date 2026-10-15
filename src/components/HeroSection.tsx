import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { siteConfig } from '../config'

// Animated letters helper
function SplitText({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.028,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

// Creator portrait — replace /creator-portrait.png with your actual photo
function PortraitPlaceholder() {
  return (
    <div className="relative w-full h-full bg-[#0B0D0B] overflow-hidden">
      {/* Creator portrait image — replace with actual photo at /creator-portrait.png */}
      <img
        src="/creator-portrait.png"
        alt="Shazaaam — Digital Creator"
        className="w-full h-full object-cover object-top"
        loading="eager"
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </div>
  )
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const parallaxY = useSpring(y, { stiffness: 50, damping: 20 })

  const headline = 'NOT JUST CONTENT.'


  const handleScrollDown = () => {
    const about = document.querySelector('#about')
    if (about) about.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCollaborate = () => {
    const collab = document.querySelector('#collaborate')
    if (collab) collab.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#050505] grid-bg"
    >
      {/* Background radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(182,255,0,0.05) 0%, transparent 60%)',
        }}
      />

      {/* Animated green orb */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[10%] top-[15%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(182,255,0,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 flex-1 flex items-center pt-[70px]">
        <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_540px] gap-12 lg:gap-0 items-center min-h-[calc(100vh-70px)]">

          {/* ─── Left: Typography ─── */}
          <motion.div
            style={{ y: parallaxY, opacity }}
            className="flex flex-col justify-center py-16 lg:py-0 z-10"
          >
            {/* Editorial Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-[1px] bg-[#B6FF00]" />
              <span className="section-label">Creator / Digital Culture / Technology</span>
            </motion.div>

            {/* Creator Name */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold leading-none tracking-tighter text-[#F5F7F2]"
                style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
              >
                SHAZ
                <span className="text-[#B6FF00] glow-green-text">AAAM</span>
                <span className="text-[#B6FF00]">.</span>
              </motion.h1>
            </div>

            {/* Headline */}
            <div className="mb-3 overflow-hidden">
              <div
                className="font-display font-bold leading-[1.05] text-[#F5F7F2]"
                style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.6rem)' }}
              >
                <SplitText text={headline} delay={0.5} />
              </div>
            </div>
            <div className="mb-8 overflow-hidden">
              <div
                className="font-display font-bold leading-[1.05]"
                style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.6rem)' }}
              >
                <SplitText
                  text="A WHOLE DIFFERENT"
                  delay={0.7}
                  className="text-[#F5F7F2]"
                />
                <span className="text-[#B6FF00] glow-green-text" style={{ marginLeft: '0.35em' }}>
                  <SplitText text="ENERGY." delay={0.9} />
                </span>
              </div>
            </div>

            {/* Bio intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="text-[#A0A69D] font-body text-base lg:text-lg leading-relaxed max-w-[520px] mb-10"
            >
              {siteConfig.bioIntro} — Where tech meets culture, and content becomes an experience.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#content"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#content')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
              >
                EXPLORE MY WORLD <ArrowUpRight size={16} />
              </a>
              <button
                onClick={handleCollaborate}
                className="btn-secondary"
              >
                LET'S COLLABORATE
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.8 }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-[rgba(182,255,0,0.08)]"
            >
              <div>
                <div className="font-display text-xl font-bold text-[#B6FF00]">Creator</div>
                <div className="font-body text-xs text-[#A0A69D] uppercase tracking-widest mt-0.5">Identity</div>
              </div>
              <div className="w-[1px] h-10 bg-[rgba(182,255,0,0.12)]" />
              <div>
                <div className="font-display text-xl font-bold text-[#F5F7F2]">Tech</div>
                <div className="font-body text-xs text-[#A0A69D] uppercase tracking-widest mt-0.5">& Culture</div>
              </div>
              <div className="w-[1px] h-10 bg-[rgba(182,255,0,0.12)]" />
              <div>
                <div className="font-display text-xl font-bold text-[#F5F7F2]">Digital</div>
                <div className="font-body text-xs text-[#A0A69D] uppercase tracking-widest mt-0.5">First</div>
              </div>
            </motion.div>
          </motion.div>

          {/* ─── Right: Portrait ─── */}
          <div className="relative hidden lg:block h-full min-h-[85vh]">
            {/* Green glow behind portrait */}
            <div className="portrait-glow" />

            {/* Portrait frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 top-[5%] bottom-0"
            >
              <div className="relative h-full">
                <PortraitPlaceholder />

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#B6FF00] opacity-60" />
                <div className="absolute bottom-0 left-4 w-12 h-12 border-b-2 border-l-2 border-[#B6FF00] opacity-60" />

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 1.2 }}
                  className="absolute top-8 -left-6 bg-[#0B0D0B] border border-[rgba(182,255,0,0.2)] px-4 py-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#B6FF00] animate-pulse" />
                    <span className="font-display text-xs font-semibold text-[#F5F7F2] tracking-wider uppercase">Creating Now</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-none group"
        aria-label="Scroll down"
      >
        <span className="section-label text-[0.6rem]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[#B6FF00] group-hover:text-[#F5F7F2] transition-colors"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}
