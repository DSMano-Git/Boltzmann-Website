import { useEffect, useState, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import videoFile from '/src/assets/video3.mp4'; 

export default function MainPageherocontent() {
  const taglineLines = ["Reimagine drug discovery through"];
  const phrases = ["Generative AI", "Multi-Agent Systems", "Automated Scientific Workflows"];

  const [startTyping, setStartTyping] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedLetters, setDisplayedLetters] = useState('');
  const [phase, setPhase] = useState('idle');
  const [cursorVisible, setCursorVisible] = useState(true);
  const textRef = useRef();
  const [textWidth, setTextWidth] = useState(0);
  const [taglineRevealed, setTaglineRevealed] = useState(false);
  const controls = useAnimationControls();
  const [isMobile, setIsMobile] = useState(false);

  const canvasRef = useRef();
  const animationRef = useRef();
  const particlesRef = useRef([]);
  const lastTimeRef = useRef(0);
  const fps = 30;
  const frameInterval = 1000 / fps;
  const primaryColor = '#0D47A1';

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      setTaglineRevealed(true);
    };
    sequence();
  }, [controls]);

  useEffect(() => {
    if (taglineRevealed) {
      setPhase('typing');
      setStartTyping(true);
    }
  }, [taglineRevealed]);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible(v => !v), 300);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [displayedLetters]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const particles = [];
      const count = isMobile 
        ? Math.min(50, Math.floor((window.innerWidth * window.innerHeight) / 8000))
        : Math.min(150, Math.floor((window.innerWidth * window.innerHeight) / 4000));
      
      const colors = [primaryColor, '#1565C0', '#42A5F5', '#90CAF9', '#E3F2FD', '#00C853', '#4CAF50'];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: 1.5 + Math.random() * 2.5,
          opacity: 0.4 + Math.random() * 0.4,
          color: colors[Math.floor(Math.random() * colors.length)],
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.02,
          pulseSpeed: 0.01 + Math.random() * 0.015,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
      particlesRef.current = particles;
    };

    const drawParticle = (p) => {
      ctx.beginPath();
      const pulseSize = p.size * (0.8 + 0.2 * Math.sin(p.pulsePhase));
      p.pulsePhase += p.pulseSpeed;
      p.angle += p.spin;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawConnection = (p1, p2, distance) => {
      const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
      gradient.addColorStop(0, p1.color);
      gradient.addColorStop(1, p2.color);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = gradient;
      ctx.globalAlpha = 0.2 * (1 - distance / 200);
      ctx.lineWidth = 0.8;
      ctx.stroke();
    };

    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current;
      if (deltaTime > frameInterval) {
        lastTimeRef.current = timestamp - (deltaTime % frameInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const particles = particlesRef.current;

        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distanceSq = dx * dx + dy * dy;
            if (distanceSq < (isMobile ? 20000 : 35000)) {
              drawConnection(p1, p2, Math.sqrt(distanceSq));
            }
          }
        }

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -30) p.x = canvas.width + 30;
          if (p.x > canvas.width + 30) p.x = -30;
          if (p.y < -30) p.y = canvas.height + 30;
          if (p.y > canvas.height + 30) p.y = -30;
          drawParticle(p);
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animationRef.current = requestAnimationFrame(animate);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [primaryColor, isMobile]);

  useEffect(() => {
    if (!startTyping) return;
    const currentPhrase = phrases[phraseIndex];
    let interval;
    let pauseTimeout;

    if (phase === 'typing') {
      let i = 0;
      setDisplayedLetters('');
      interval = setInterval(() => {
        i++;
        setDisplayedLetters(currentPhrase.slice(0, i));
        if (i === currentPhrase.length) {
          clearInterval(interval);
          pauseTimeout = setTimeout(() => setPhase('highlighting'), 200);
        }
      }, isMobile ? 60 : 40);
    }

    if (phase === 'highlighting') {
      pauseTimeout = setTimeout(() => setPhase('erasing'), isMobile ? 600 : 800);
    }

    if (phase === 'erasing') {
      let i = currentPhrase.length;
      interval = setInterval(() => {
        i--;
        setDisplayedLetters(currentPhrase.slice(0, i));
        if (i === 0) {
          clearInterval(interval);
          setTimeout(() => {
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
            setPhase('typing');
          }, 100);
        }
      }, isMobile ? 35 : 25);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(pauseTimeout);
    };
  }, [phase, phraseIndex, startTyping, isMobile]);

  const taglineLineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.42, 0, 0.58, 1]
      }
    })
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f7fafd, #eef2f5)',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '3rem 1.5rem' : '5rem 3rem',
        fontFamily: "'Inter', sans-serif",
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Left Side: Text */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          maxWidth: isMobile ? '100%' : '50%',
          paddingRight: isMobile ? 0 : '2rem',
          boxSizing: 'border-box',
          marginBottom: isMobile ? '2rem' : 0,
          textAlign: isMobile ? 'center' : 'left'
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          style={{
            fontSize: isMobile ? '2.5rem' : '4rem',
            fontWeight: 800,
            background: 'linear-gradient(90deg, #0D47A1, #00C853)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: isMobile ? '1rem' : '1.5rem',
            letterSpacing: '-0.02em',
            cursor: 'default',
            lineHeight: 1.2
          }}
        >
          BOLTZMANN LABS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: isMobile ? '1.2rem' : '1.8rem',
            marginLeft: isMobile ? 0 : '0.1rem',
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: 500,
            color: '#222',
            maxWidth: '800px',
            lineHeight: 1.4,
            letterSpacing: '-0.01em'
          }}
        >
          {taglineLines.map((line, index) => (
            <motion.span
              custom={index}
              key={index}
              initial="hidden"
              animate={controls}
              variants={taglineLineVariants}
              style={{
                marginBottom: '0.4em',
                display: 'inline-block',
                whiteSpace: isMobile ? 'normal' : 'nowrap'
              }}
            >
              {line}
            </motion.span>
          ))}
        </motion.div>

        <div
          style={{
            position: 'relative',
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            fontWeight: 700,
            color: '#0D47A1',
            whiteSpace: isMobile ? 'normal' : 'nowrap',
            height: isMobile ? '2.5rem' : '3rem',
            overflow: 'hidden',
            visibility: startTyping ? 'visible' : 'hidden',
            textAlign: isMobile ? 'center' : 'left'
          }}
        >
          {startTyping && (
            <div style={{ 
              display: 'inline-block', 
              textAlign: 'left',
              width: '100%'
            }}>
              <span
                ref={textRef}
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  padding: '0 0.15em'
                }}
              >
                {(phase === 'highlighting' || phase === 'erasing' || phase === 'typing') && (
                  <motion.div
                    animate={{
                      width: textWidth,
                      opacity: displayedLetters ? 0.15 : 0
                    }}
                    initial={{ width: 0, opacity: 0.15 }}
                    transition={{
                      duration: phase === 'highlighting' ? 0.2 : 0.05,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      backgroundColor: '#90CAF9',
                      borderRadius: '4px',
                      zIndex: 0
                    }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 1 }}>
                  {displayedLetters}
                  {(phase === 'typing' || phase === 'highlighting') && (
                    <span
                      style={{
                        opacity: cursorVisible ? 1 : 0,
                        marginLeft: '2px',
                        borderLeft: '2px solid currentColor',
                        height: '1em',
                        display: 'inline-block',
                        verticalAlign: 'bottom',
                      }}
                    />
                  )}
                </span>
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Right Side: Video */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          maxWidth: isMobile ? '100%' : '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: isMobile ? '2rem' : 0
        }}
      >
        {/* <video
          src={videoFile}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: isMobile ? '90%' : '70%',
            height: 'auto',
            borderRadius: '12px',
            backgroundColor: '#000',
            maxHeight: isMobile ? '50vh' : '90vh',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}
        /> */}
      </div>
    </div>
  );
}