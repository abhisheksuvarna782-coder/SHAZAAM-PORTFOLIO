import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ContentUniverse from './components/ContentUniverse'
import FeaturedVideos from './components/FeaturedVideos'
import SocialSection from './components/SocialSection'
import CollaborationSection from './components/CollaborationSection'
import Footer from './components/Footer'

// ─── Custom Cursor ───
function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    let raf: number
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`
        cursorRef.current.style.top = `${mouseY}px`
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      raf = requestAnimationFrame(animate)
    }

    const onEnter = () => setHovering(true)
    const onLeave = () => setHovering(false)

    window.addEventListener('mousemove', onMove, { passive: true })

    // Apply hover state to all interactive elements
    const interactives = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, label'
    )
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${hovering ? 'cursor-hover' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${hovering ? 'cursor-hover' : ''}`}
        aria-hidden="true"
      />
    </>
  )
}

// ─── Scroll Progress ───
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, width: '100%' }}
      aria-hidden="true"
    />
  )
}

// ─── Grain Overlay ───
function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />
}

// ─── Page Load Transition ───
function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      onAnimationComplete={() => setVisible(false)}
      className="fixed inset-0 z-[99999] bg-[#050505] flex items-center justify-center"
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-4"
      >
        {/* Animated wordmark */}
        <div className="font-display font-bold text-4xl tracking-tight">
          <span className="text-[#F5F7F2]">SHAZ</span>
          <span className="text-[#B6FF00]">AAAM</span>
          <span className="text-[#B6FF00]">.</span>
        </div>

        {/* Loading bar */}
        <div className="w-32 h-[1px] bg-[rgba(182,255,0,0.15)] overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="h-full bg-[#B6FF00] origin-left"
            style={{ boxShadow: '0 0 8px rgba(182,255,0,0.6)' }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function App() {
  return (
    <>
      <PageLoader />
      <GrainOverlay />
      <CustomCursor />
      <ScrollProgress />

      <div className="min-h-screen bg-[#050505]">
        <Navbar />

        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <ContentUniverse />
          <FeaturedVideos />
          <SocialSection />
          <CollaborationSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
