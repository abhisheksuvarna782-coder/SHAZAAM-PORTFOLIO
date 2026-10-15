import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Instagram } from 'lucide-react'
import { siteConfig } from '../config'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

// About section portrait — replace /images/about-portrait.png with actual photo
function AboutPortrait() {
  return (
    <div className="relative w-full aspect-[3/4] bg-[#0B0D0B] overflow-hidden">
      <img
        src="/images/about-portrait.png"
        alt="Shazaaam — The face behind the feed"
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#B6FF00] opacity-60" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#B6FF00] opacity-60" />

      {/* Subtle green edge glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 60px rgba(182,255,0,0.06)' }}
      />

      {/* Bottom fade to bg */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0B0D0B] to-transparent" />
    </div>
  )
}

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section id="about" ref={ref} className="relative bg-[#0B0D0B] py-28 lg:py-40 overflow-hidden">
      {/* Decorative top line */}
      <div className="divider mb-0" />

      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 20% 60%, rgba(182,255,0,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">About</span>
          <div className="flex-1 h-[1px] bg-[rgba(182,255,0,0.12)]" />
          <span className="font-display text-xs text-[#A0A69D] tracking-widest">02</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Portrait */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            <AboutPortrait />

            {/* Instagram handle overlay */}
            <motion.a
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-5 -right-5 flex items-center gap-3 bg-[#050505] border border-[rgba(182,255,0,0.2)] px-5 py-3 hover:border-[#B6FF00] transition-all duration-300 group cursor-none"
            >
              <Instagram size={16} className="text-[#B6FF00]" />
              <span className="font-display text-sm font-semibold text-[#F5F7F2] group-hover:text-[#B6FF00] transition-colors">
                {siteConfig.instagramHandle}
              </span>
            </motion.a>
          </motion.div>

          {/* Right: Bio */}
          <div className="flex flex-col justify-center pt-4 lg:pt-16">
            {/* Big headline */}
            <div className="overflow-hidden mb-8">
              <motion.h2
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="font-display font-bold leading-[0.95] tracking-tight text-[#F5F7F2]"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                THE FACE<br />
                <span className="text-[#B6FF00]">BEHIND</span><br />
                THE FEED.
              </motion.h2>
            </div>

            {/* Divider */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="w-16 h-[2px] bg-[#B6FF00] mb-8"
            />

            {/* Bio paragraphs */}
            {siteConfig.bio.map((para, i) => (
              <motion.p
                key={i}
                custom={3 + i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="text-[#A0A69D] font-body text-base leading-relaxed mb-5"
              >
                {para}
              </motion.p>
            ))}

            {/* Facts grid */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-px bg-[rgba(182,255,0,0.08)] border border-[rgba(182,255,0,0.08)] mt-8 mb-10"
            >
              {[
                { label: 'Niche', value: 'Tech & Culture' },
                { label: 'Content', value: 'Video First' },
                { label: 'Style', value: 'Raw & Honest' },
                { label: 'Vibe', value: 'Digital Native' },
              ].map((item) => (
                <div key={item.label} className="bg-[#101410] px-5 py-4">
                  <div className="font-body text-[0.65rem] text-[#A0A69D] uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="font-display text-sm font-semibold text-[#F5F7F2]">{item.value}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              custom={7}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary self-start"
            >
              FOLLOW ON INSTAGRAM <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="divider mt-28 lg:mt-40" />
    </section>
  )
}
