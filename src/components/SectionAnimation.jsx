import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Pipeline() {
  const phrases = [
    "Generative ",
    "Multi-Agent Systems",
    "Automated Scientific Workflows",
    "Computational Drug Discovery",
    "Physics-Informed ML"
  ];

  const [showTitle, setShowTitle] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  // Parallax and scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const progress = 1 - Math.max(0, top + height) / (window.innerHeight + height);
        setScrollProgress(Math.min(1, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Control initial sequence with staggered animations
  useEffect(() => {
    const t1 = setTimeout(() => setShowTitle(true), 300);
    const t2 = setTimeout(() => setShowTagline(true), 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Phrase loop with smoother transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsAnimating(false);
      }, 800);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Background gradient effect based on scroll
  const bgGradient = `linear-gradient(
    ${135 + scrollProgress * 45}deg,
    hsl(${200 + scrollProgress * 40}, 80%, 95%) 0%,
    hsl(${220 + scrollProgress * 20}, 70%, 96%) 100%
  )`;

  // Particle effects configuration
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 0.5 + 0.3,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2
  }));

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '120vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: bgGradient,
        padding: '4rem 2rem',
        fontFamily: "'Inter', sans-serif",
        willChange: 'background'
      }}
    >
      {/* Animated background particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0
      }}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              x: `${particle.x + Math.sin(particle.delay) * 10}%`,
              y: `${particle.y + Math.cos(particle.delay) * 10}%`
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              width: `${particle.size}rem`,
              height: `${particle.size}rem`,
              background: 'radial-gradient(circle, #007ACC 0%, rgba(0,122,204,0) 70%)',
              borderRadius: '50%',
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* Title Animation with motion */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            overflow: 'hidden',
            marginBottom: '1.5rem',
            alignSelf: 'flex-start'
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              background: 'linear-gradient(90deg, #007ACC 0%, #00B4D8 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1.1,
              textAlign: 'left',
              margin: 0,
              padding: 0
            }}
          >
            Boltzmann Labs
          </motion.h1>
        </motion.div>

        {/* Tagline Animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{
            marginBottom: '2rem',
            maxWidth: '800px'
          }}
        >
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            color: '#555',
            lineHeight: 1.6,
            margin: 0
          }}>
            Reimagining drug discovery through
          </p>
        </motion.div>

        {/* Animated phrase with 3D effect */}
        <div style={{
          height: '120px',
          position: 'relative',
          perspective: '1000px',
          marginBottom: '3rem'
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={phraseIndex}
              initial={{ 
                opacity: 0,
                rotateX: 90,
                y: 50,
                filter: 'blur(10px)'
              }}
              animate={{ 
                opacity: 1,
                rotateX: 0,
                y: 0,
                filter: 'blur(0px)'
              }}
              exit={{ 
                opacity: 0,
                rotateX: -90,
                y: -50,
                filter: 'blur(10px)'
              }}
              transition={{ 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                background: 'linear-gradient(45deg, #007ACC 30%, #00B4D8 90%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                textAlign: 'center',
                padding: '0 1rem'
              }}
            >
              {phrases[phraseIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative animated line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, rgba(0,122,204,0) 0%, #007ACC 50%, rgba(0,122,204,0) 100%)',
            margin: '2rem 0',
            maxWidth: '400px'
          }}
        />

        {/* Animated CTA button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 20px rgba(0, 122, 204, 0.2)'
          }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: 'linear-gradient(45deg, #007ACC 0%, #00B4D8 100%)',
            color: 'white',
            border: 'none',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            borderRadius: '50px',
            cursor: 'pointer',
            marginTop: '1rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <span style={{ position: 'relative', zIndex: 2 }}>
            Explore Our Technology
          </span>
          <motion.span
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(45deg, #00B4D8 0%, #007ACC 100%)',
              zIndex: 1
            }}
          />
        </motion.button>
      </div>

      {/* Animated floating molecules */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          opacity: 0.7
        }}
      >
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="none" stroke="#007ACC" strokeWidth="2" />
          <circle cx="30" cy="30" r="8" fill="#00B4D8" />
          <circle cx="70" cy="30" r="5" fill="#007ACC" />
          <circle cx="50" cy="70" r="6" fill="#00B4D8" />
          <line x1="30" y1="30" x2="50" y2="50" stroke="#007ACC" strokeWidth="2" />
          <line x1="70" y1="30" x2="50" y2="50" stroke="#007ACC" strokeWidth="2" />
          <line x1="50" y1="70" x2="50" y2="50" stroke="#007ACC" strokeWidth="2" />
        </svg>
      </motion.div>
    </div>
  );
}