import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Play, X, ExternalLink } from 'lucide-react'
import { featuredVideos } from '../config'

interface Video {
  id: string
  title: string
  description: string
  tag: string
  youtubeId: string | null
  youtubeUrl: string
  thumbnail: string
}

// Video thumbnail images — replace with actual YouTube thumbnails
const thumbnailImages: Record<string, string> = {
  featured: '/images/tech-gadgets.png',
  review: '/images/unboxing.png',
  unbox: '/images/unboxing.png',
  culture: '/images/digital-culture.png',
}

function VideoThumbnail({ type }: { type: string }) {
  const src = thumbnailImages[type] || thumbnailImages.featured
  return (
    <div className="relative w-full h-full bg-[#0A1500]">
      <img
        src={src}
        alt="Video thumbnail"
        className="w-full h-full object-cover"
        loading="lazy"
        style={{ filter: 'brightness(0.6) saturate(0.9)' }}
      />
      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
    </div>
  )
}

// Video Modal Component
function VideoModal({
  video,
  onClose,
}: {
  video: Video
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9500] flex items-center justify-center p-4 lg:p-8"
        role="dialog"
        aria-modal="true"
        aria-label={`Video: ${video.title}`}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[rgba(5,5,5,0.95)] backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-4xl bg-[#101410] border border-[rgba(182,255,0,0.15)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(182,255,0,0.08)]">
            <div>
              <span className="section-label mr-3">{video.tag}</span>
              <span className="font-display text-sm font-semibold text-[#F5F7F2]">{video.title}</span>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-9 h-9 border border-[rgba(182,255,0,0.15)] hover:border-[#B6FF00] hover:text-[#B6FF00] text-[#A0A69D] transition-all cursor-none"
              aria-label="Close video"
            >
              <X size={16} />
            </button>
          </div>

          {/* Video embed or link */}
          <div className="aspect-video bg-[#0B0D0B]">
            {video.youtubeId ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                <VideoThumbnail type={video.thumbnail} />
                <div className="text-center px-8">
                  <p className="text-[#A0A69D] font-body text-sm mb-4">
                    Add YouTube video ID in <code className="text-[#B6FF00] bg-[rgba(182,255,0,0.08)] px-2 py-0.5">src/config.ts</code> to embed video
                  </p>
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2.5 px-5 inline-flex"
                  >
                    WATCH ON YOUTUBE <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function FeaturedVideos() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)

  const featured = featuredVideos[0]
  const others = featuredVideos.slice(1)

  return (
    <>
      <section id="videos" ref={ref} className="relative bg-[#0B0D0B] py-28 lg:py-40 overflow-hidden">
        <div className="divider mb-0" />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 80%, rgba(182,255,0,0.04) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <motion.span custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="section-label">
              Featured Videos
            </motion.span>
            <div className="flex-1 h-[1px] bg-[rgba(182,255,0,0.12)]" />
            <motion.span custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="font-display text-xs text-[#A0A69D] tracking-widest">04</motion.span>
          </div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-display font-bold leading-[0.95] tracking-tight mb-16"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}
          >
            PRESS PLAY.{' '}
            <span className="text-[#B6FF00]">ENTER MY WORLD.</span>
          </motion.h2>

          {/* Video Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
            {/* Featured large video */}
            <motion.button
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              onClick={() => setActiveVideo(featured)}
              className="lg:col-span-7 video-card group text-left cursor-none"
              aria-label={`Play ${featured.title}`}
            >
              <div className="relative overflow-hidden aspect-video">
                <div className="w-full h-full">
                  <VideoThumbnail type={featured.thumbnail} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#101410] via-[rgba(5,5,5,0.3)] to-transparent" />

                {/* Large play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="play-btn w-20 h-20 rounded-full border-2 border-[rgba(182,255,0,0.5)] bg-[rgba(5,5,5,0.5)] flex items-center justify-center">
                    <Play size={28} className="text-[#B6FF00] group-hover:text-[#050505] transition-colors ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="section-label bg-[rgba(182,255,0,0.12)] px-3 py-1.5 border border-[rgba(182,255,0,0.2)]">
                    {featured.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl lg:text-2xl font-bold text-[#F5F7F2] mb-2 group-hover:text-[#B6FF00] transition-colors">
                  {featured.title}
                </h3>
                <p className="text-[#A0A69D] text-sm">{featured.description}</p>
              </div>
            </motion.button>

            {/* Right side smaller videos */}
            <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-5">
              {others.map((video, i) => (
                <motion.button
                  key={video.id}
                  custom={3 + i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  onClick={() => setActiveVideo(video)}
                  className="video-card group flex text-left cursor-none"
                  aria-label={`Play ${video.title}`}
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden w-40 lg:w-48 flex-shrink-0">
                    <div className="w-full h-full min-h-[110px]">
                      <VideoThumbnail type={video.thumbnail} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="play-btn w-10 h-10 rounded-full border border-[rgba(182,255,0,0.4)] bg-[rgba(5,5,5,0.6)] flex items-center justify-center">
                        <Play size={12} className="text-[#B6FF00] group-hover:text-[#050505] transition-colors ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <span className="section-label text-[0.6rem] block mb-2">{video.tag}</span>
                      <h3 className="font-display text-base font-bold text-[#F5F7F2] leading-tight mb-1 group-hover:text-[#B6FF00] transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-[#A0A69D] text-xs line-clamp-2">{video.description}</p>
                    </div>
                    <div className="flex items-center gap-1.5 mt-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
                      <span className="text-[#A0A69D] text-[0.65rem] uppercase tracking-wider">Watch</span>
                    </div>
                  </div>
                </motion.button>
              ))}

              {/* View all link */}
              <motion.a
                custom={6}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                href="https://youtube.com/@callmeshazzam"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center justify-center mt-2 cursor-none"
              >
                ALL VIDEOS ON YOUTUBE <ExternalLink size={14} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="divider mt-28 lg:mt-40" />
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
