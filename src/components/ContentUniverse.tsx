import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { contentCategories } from '../config'

// Content category images — replace with your own images in /public/images/
const categoryImages: Record<string, string> = {
  tech: '/images/tech-gadgets.png',
  unboxing: '/images/unboxing.png',
  culture: '/images/digital-culture.png',
  lifestyle: '/images/lifestyle.png',
}

function CategoryThumbnail({ type }: { type: string }) {
  const src = categoryImages[type] || categoryImages.tech

  return (
    <div className="w-full h-full bg-[#0A1500]">
      <img
        src={src}
        alt={`${type} content`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ContentUniverse() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="content" ref={ref} className="relative bg-[#050505] py-28 lg:py-40 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none grid-bg"
        style={{ opacity: 0.4 }}
      />

      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 80% 30%, rgba(182,255,0,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="section-label"
          >
            Content Universe
          </motion.span>
          <div className="flex-1 h-[1px] bg-[rgba(182,255,0,0.12)]" />
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-display text-xs text-[#A0A69D] tracking-widest"
          >
            03
          </motion.span>
        </div>

        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <h2
            className="font-display font-bold leading-[0.95] tracking-tight text-[#F5F7F2]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            MY WORLD.<br />
            <span className="text-[#B6FF00]">MY CONTENT.</span>
          </h2>
        </motion.div>

        {/* Editorial grid: big card + 3 smaller cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {/* Featured large card */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-7 content-card group"
          >
            <div className="relative overflow-hidden h-[300px] lg:h-[420px]">
              <div className="card-image w-full h-full">
                <CategoryThumbnail type={contentCategories[0].image} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#101410] via-transparent to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="section-label bg-[rgba(182,255,0,0.1)] px-3 py-1.5 border border-[rgba(182,255,0,0.2)]">
                  {contentCategories[0].tag}
                </span>
              </div>
            </div>
            <div className="p-7 flex items-end justify-between">
              <div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#F5F7F2] mb-2">
                  {contentCategories[0].title}
                </h3>
                <p className="text-[#A0A69D] text-sm leading-relaxed max-w-md">
                  {contentCategories[0].description}
                </p>
              </div>
              <div className="card-arrow flex-shrink-0 ml-6">
                <div className="w-12 h-12 border border-[rgba(182,255,0,0.2)] flex items-center justify-center group-hover:bg-[#B6FF00] group-hover:border-[#B6FF00] transition-all duration-300">
                  <ArrowUpRight
                    size={20}
                    className="text-[#B6FF00] group-hover:text-[#050505] transition-colors duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column: 3 stacked smaller cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-5">
            {contentCategories.slice(1).map((cat, i) => (
              <motion.div
                key={cat.id}
                custom={3 + i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="content-card group flex"
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden w-36 lg:w-44 flex-shrink-0">
                  <div className="card-image w-full h-full min-h-[130px]">
                    <CategoryThumbnail type={cat.image} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#101410]" />
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <span className="section-label text-[0.6rem] mb-3 block">{cat.tag}</span>
                    <h3 className="font-display text-base lg:text-lg font-bold text-[#F5F7F2] leading-tight mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-[#A0A69D] text-xs leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                  <div className="card-arrow mt-3">
                    <ArrowUpRight size={16} className="text-[#B6FF00] group-hover:text-[#F5F7F2] transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
