import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { siteConfig } from '../config'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const collaborationTypes = [
  { label: 'Product Reviews', desc: 'Honest, in-depth reviews that resonate.' },
  { label: 'Sponsored Content', desc: 'Authentic integrations that feel natural.' },
  { label: 'Brand Campaigns', desc: 'Creative campaigns built around your brand story.' },
  { label: 'Tech Partnerships', desc: 'Dedicated coverage for tech launches & events.' },
]

export default function CollaborationSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="collaborate" ref={ref} className="relative bg-[#0B0D0B] py-28 lg:py-40 overflow-hidden">
      <div className="divider mb-0" />

      {/* Background — subtle green accent top-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 90% 20%, rgba(182,255,0,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Large decorative number */}
      <div
        className="absolute right-0 top-0 bottom-0 flex items-center pr-12 pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display font-bold text-[20vw] leading-none text-[rgba(182,255,0,0.03)] tracking-tighter"
        >
          06
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <motion.span custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="section-label">
            Collaborate
          </motion.span>
          <div className="flex-1 h-[1px] bg-[rgba(182,255,0,0.12)]" />
          <motion.span custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="font-display text-xs text-[#A0A69D] tracking-widest">06</motion.span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Main CTA */}
          <div>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="font-display font-bold leading-[0.95] tracking-tight text-[#F5F7F2] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.8rem)' }}
            >
              LET'S CREATE<br />
              SOMETHING<br />
              <span className="text-[#B6FF00]">THAT MATTERS.</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-[#A0A69D] font-body text-base leading-relaxed mb-10 max-w-md"
            >
              Have an idea, a product, or a story worth sharing? Let's turn it into something memorable. I create content that connects — not just advertises.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={`mailto:${siteConfig.businessEmail}`}
                className="btn-primary"
                aria-label={`Send email to ${siteConfig.businessEmail}`}
              >
                START A COLLABORATION <ArrowUpRight size={16} />
              </a>
              <a
                href={`mailto:${siteConfig.businessEmail}`}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Mail size={15} />
                {siteConfig.businessEmail}
              </a>
            </motion.div>

            {/* Notice about email */}
            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-[#A0A69D] text-xs mt-4"
            >
              * Update business email in <code className="text-[#B6FF00] bg-[rgba(182,255,0,0.08)] px-1.5 py-0.5">src/config.ts</code> with your verified contact.
            </motion.p>
          </div>

          {/* Right: Collaboration types */}
          <div>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="font-display text-xs font-semibold text-[#A0A69D] tracking-[0.2em] uppercase mb-8"
            >
              What we can do together
            </motion.p>

            <div className="space-y-px">
              {collaborationTypes.map((type, i) => (
                <motion.div
                  key={type.label}
                  custom={3 + i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  className="group flex items-start gap-5 p-6 bg-[#101410] border border-[rgba(182,255,0,0.06)] hover:border-[rgba(182,255,0,0.2)] transition-all duration-300 hover:bg-[#121912]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#B6FF00] mt-2 flex-shrink-0 group-hover:shadow-[0_0_10px_rgba(182,255,0,0.8)] transition-all duration-300" />
                  <div>
                    <h3 className="font-display text-base font-bold text-[#F5F7F2] mb-1 group-hover:text-[#B6FF00] transition-colors">
                      {type.label}
                    </h3>
                    <p className="text-[#A0A69D] text-sm">{type.desc}</p>
                  </div>
                  <div className="ml-auto flex-shrink-0 text-[rgba(182,255,0,0)] group-hover:text-[#B6FF00] transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="divider mt-28 lg:mt-40" />
    </section>
  )
}
