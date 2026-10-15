import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Instagram } from 'lucide-react'
import { siteConfig } from '../config'

// Social gallery tile — uses slices from the generated social grid image
// Replace /images/social-grid.png with actual Instagram screenshots
const tileImages = [
  '/images/social-grid.png',
  '/images/tech-gadgets.png',
  '/images/lifestyle.png',
  '/images/digital-culture.png',
  '/images/unboxing.png',
  '/images/social-grid.png',
]

function GalleryTile({ index }: { index: number }) {
  const src = tileImages[index % tileImages.length]
  return (
    <div className="w-full h-full bg-[#091200]">
      <img
        src={src}
        alt={`Instagram post ${index + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
        style={{ filter: 'brightness(0.85) saturate(1.1)' }}
      />
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function SocialSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  const tiles = Array.from({ length: 6 }, (_, i) => i)

  return (
    <section id="social" ref={ref} className="relative bg-[#050505] py-28 lg:py-40 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(182,255,0,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <motion.span custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="section-label">
            Community
          </motion.span>
          <div className="flex-1 h-[1px] bg-[rgba(182,255,0,0.12)]" />
          <motion.span custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="font-display text-xs text-[#A0A69D] tracking-widest">05</motion.span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Left: Text */}
          <div>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="font-display font-bold leading-[0.95] tracking-tight text-[#F5F7F2] mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
            >
              THE CONVERSATION<br />
              <span className="text-[#B6FF00]">DOESN'T STOP HERE.</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-[#A0A69D] font-body text-base leading-relaxed mb-8 max-w-md"
            >
              The content continues on Instagram. Behind-the-scenes, takes, and everything in between — follow the journey to stay in the loop.
            </motion.p>

            <motion.a
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex cursor-none"
            >
              <Instagram size={16} />
              FOLLOW THE JOURNEY <ArrowUpRight size={16} />
            </motion.a>

            {/* Handle */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex items-center gap-3 mt-8 pt-8 border-t border-[rgba(182,255,0,0.08)]"
            >
              <div className="w-10 h-10 bg-[#101410] border border-[rgba(182,255,0,0.15)] flex items-center justify-center">
                <Instagram size={18} className="text-[#B6FF00]" />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-[#F5F7F2]">
                  {siteConfig.instagramHandle}
                </div>
                <div className="font-body text-xs text-[#A0A69D]">Instagram</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Gallery grid */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-3 gap-2"
          >
            {tiles.map((i) => (
              <motion.a
                key={i}
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                custom={3 + i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="social-tile aspect-square overflow-hidden border border-[rgba(182,255,0,0.06)] hover:border-[rgba(182,255,0,0.25)] transition-all duration-300 cursor-none"
                aria-label={`View post ${i + 1} on Instagram`}
              >
                <GalleryTile index={i} />
                <div className="ig-icon">
                  <Instagram size={24} className="text-[#B6FF00] drop-shadow-lg" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Marquee band */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="overflow-hidden border-t border-b border-[rgba(182,255,0,0.08)] py-4"
        >
          <div className="marquee-track">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-6 font-display font-bold text-sm tracking-widest text-[#A0A69D] uppercase whitespace-nowrap">
                <span className="text-[#B6FF00]">✦</span> Follow @Callmeshazzam
                <span className="text-[#B6FF00]">✦</span> Digital Culture
                <span className="text-[#B6FF00]">✦</span> Tech &amp; Lifestyle
                <span className="text-[#B6FF00]">✦</span> Creator Content &nbsp;&nbsp;
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
