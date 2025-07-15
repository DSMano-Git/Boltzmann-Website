// import { useEffect, useState, useRef } from "react";
// import { motion, useAnimationControls } from "framer-motion";

// export default function MainPageherocontent() {
//   // NOTE: TAGLINE AS MULTILINE
//   const taglineLines = [
//     "Reimagine drug discovery through"
//   ];

//   const phrases = [
//     "Generative AI",
//     "Multi-Agent Systems",
//     "Automated Scientific Workflows",
//   ];

//   const [startTyping, setStartTyping] = useState(false);
//   const [phraseIndex, setPhraseIndex] = useState(0);
//   const [displayedLetters, setDisplayedLetters] = useState('');
//   const [phase, setPhase] = useState('idle');
//   const [cursorVisible, setCursorVisible] = useState(true);
//   const textRef = useRef();
//   const [textWidth, setTextWidth] = useState(0);

//   const [taglineRevealed, setTaglineRevealed] = useState(false);
//   const controls = useAnimationControls();

//   // Canvas animation refs
//   const canvasRef = useRef();
//   const animationRef = useRef();
//   const particlesRef = useRef([]);
//   const lastTimeRef = useRef(0);
//   const fps = 30; // Reduced from 60 to 30
//   const frameInterval = 1000 / fps;

//   const primaryColor = '#0D47A1';

//   // Animate tagline reveal - MUCH FASTER
//   useEffect(() => {
//     const sequence = async () => {
//       await controls.start("visible");
//       setTaglineRevealed(true);
//     };
//     sequence();
//   }, [controls]);

//   // Start typing immediately after tagline - FASTER
//   useEffect(() => {
//     if (taglineRevealed) {
//       setPhase('typing');
//       setStartTyping(true);
//     }
//   }, [taglineRevealed]);

//   // Cursor blink - FASTER
//   useEffect(() => {
//     const blink = setInterval(() => setCursorVisible(v => !v), 300); // Faster blinking
//     return () => clearInterval(blink);
//   }, []);

//   // Measure width for highlight
//   useEffect(() => {
//     if (textRef.current) {
//       setTextWidth(textRef.current.offsetWidth);
//     }
//   }, [displayedLetters]);

//   // Canvas Animation Setup - OPTIMIZED
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initParticles();
//     };

//     const initParticles = () => {
//       const particles = [];
//       const count = Math.min(150, Math.floor((window.innerWidth * window.innerHeight) / 1000)); // Reduced particle count
//       const colors = [
//         primaryColor,
//         '#1565C0',
//         '#42A5F5',
//         '#90CAF9',
//         '#E3F2FD',
//         '#00C853',
//         '#4CAF50'
//       ];

//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.5, // Slightly faster movement
//           vy: (Math.random() - 0.5) * 0.5,
//           size: 1.5 + Math.random() * 2.5,
//           opacity: 0.4 + Math.random() * 0.4,
//           color: colors[Math.floor(Math.random() * colors.length)],
//           angle: Math.random() * Math.PI * 2,
//           spin: (Math.random() - 0.5) * 0.02,
//           pulseSpeed: 0.01 + Math.random() * 0.015,
//           pulsePhase: Math.random() * Math.PI * 2
//         });
//       }
//       particlesRef.current = particles;
//     };

//     const drawParticle = (p) => {
//       ctx.beginPath();
//       const pulseSize = p.size * (0.8 + 0.2 * Math.sin(p.pulsePhase));
//       p.pulsePhase += p.pulseSpeed;
//       p.angle += p.spin;
//       ctx.save();
//       ctx.translate(p.x, p.y);
//       ctx.rotate(p.angle);
//       ctx.globalAlpha = p.opacity;
//       ctx.fillStyle = p.color;
//       ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
//       ctx.fill();
//       ctx.restore();
//     };

//     const drawConnection = (p1, p2, distance) => {
//       const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
//       gradient.addColorStop(0, p1.color);
//       gradient.addColorStop(1, p2.color);
//       ctx.beginPath();
//       ctx.moveTo(p1.x, p1.y);
//       ctx.lineTo(p2.x, p2.y);
//       ctx.strokeStyle = gradient;
//       ctx.globalAlpha = 0.2 * (1 - distance / 200); // Increased opacity and distance for more visible lines
//       ctx.lineWidth = 0.8;
//       ctx.stroke();
//     };

//     const animate = (timestamp) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;
//       const deltaTime = timestamp - lastTimeRef.current;
//       if (deltaTime > frameInterval) {
//         lastTimeRef.current = timestamp - (deltaTime % frameInterval);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         const particles = particlesRef.current;

//         // Draw connections - OPTIMIZED
//         for (let i = 0; i < particles.length; i++) {
//           const p1 = particles[i];
//           for (let j = i + 1; j < particles.length; j++) {
//             const p2 = particles[j];
//             const dx = p1.x - p2.x;
//             const dy = p1.y - p2.y;
//             const distanceSq = dx * dx + dy * dy;
//             if (distanceSq < 35000) { // Increased connection distance for more lines
//               drawConnection(p1, p2, Math.sqrt(distanceSq));
//             }
//           }
//         }

//         // Update and draw particles
//         for (let i = 0; i < particles.length; i++) {
//           const p = particles[i];
//           p.x += p.vx;
//           p.y += p.vy;
//           if (p.x < -30) p.x = canvas.width + 30;
//           if (p.x > canvas.width + 30) p.x = -30;
//           if (p.y < -30) p.y = canvas.height + 30;
//           if (p.y > canvas.height + 30) p.y = -30;
//           drawParticle(p);
//         }
//       }
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     resizeCanvas();
//     animationRef.current = requestAnimationFrame(animate);
//     window.addEventListener('resize', resizeCanvas);

//     return () => {
//       cancelAnimationFrame(animationRef.current);
//       window.removeEventListener('resize', resizeCanvas);
//     };
//   }, [primaryColor]);

//   // Typing logic - MUCH FASTER
//   useEffect(() => {
//     if (!startTyping) return;

//     const currentPhrase = phrases[phraseIndex];
//     let interval;
//     let pauseTimeout;

//     if (phase === 'typing') {
//       let i = 0;
//       setDisplayedLetters('');
//       interval = setInterval(() => {
//         i++;
//         setDisplayedLetters(currentPhrase.slice(0, i));
//         if (i === currentPhrase.length) {
//           clearInterval(interval);
//           pauseTimeout = setTimeout(() => setPhase('highlighting'), 200); // Reduced from 600ms
//         }
//       }, 40); // Faster typing speed
//     }

//     if (phase === 'highlighting') {
//       pauseTimeout = setTimeout(() => setPhase('erasing'), 800); // Reduced from 1600ms
//     }

//     if (phase === 'erasing') {
//       let i = currentPhrase.length;
//       interval = setInterval(() => {
//         i--;
//         setDisplayedLetters(currentPhrase.slice(0, i));
//         if (i === 0) {
//           clearInterval(interval);
//           setTimeout(() => {
//             setPhraseIndex((prev) => (prev + 1) % phrases.length);
//             setPhase('typing');
//           }, 100); // Reduced from 300ms
//         }
//       }, 25); // Faster erasing speed
//     }

//     return () => {
//       clearInterval(interval);
//       clearTimeout(pauseTimeout);
//     };
//   }, [phase, phraseIndex, startTyping]);

//   const taglineLineVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1, // Reduced from 0.2
//         duration: 0.4, // Reduced from 0.8
//         ease: [0.42, 0, 0.58, 1]
//       }
//     })
//   };

//   return (
//     <div
//       style={{
//         position: 'relative',
//         minHeight: '100vh',
//         background: 'linear-gradient(135deg, #f7fafd, #eef2f5)',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'flex-start',
//         padding: '5rem 3rem',
//         fontFamily: "'Inter', sans-serif",
//         boxSizing: 'border-box',
//         overflow: 'hidden'
//       }}
//     >
//       {/* Animated Canvas Background */}
//       <canvas
//         ref={canvasRef}
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: 0,
//           pointerEvents: 'none'
//         }}
//       />

//       {/* Content Layer */}
//       <div style={{ position: 'relative', zIndex: 1 }}>
//         {/* Logo - FASTER */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }} // Reduced from 1s
//           style={{
//             fontSize: '4rem',
//             fontWeight: 800,
//             background: 'linear-gradient(90deg, #0D47A1, #00C853)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             marginBottom: '1.5rem',
//             letterSpacing: '-0.02em',
//             cursor: 'default'
//           }}
//         >
//           BOLTZMANN LABS
//         </motion.h1>

//         {/* Tagline multiline animated - FASTER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }} // Reduced from 1.2s
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             marginBottom: '1.8rem',
//             marginLeft: '0.1rem',
//             fontSize: '2rem',
//             fontWeight: 500,
//             color: '#222',
//             maxWidth: '800px',
//             lineHeight: 1.4,
//             letterSpacing: '-0.01em'
//           }}
//         >
//           {taglineLines.map((line, index) => (
//             <motion.span
//               custom={index}
//               key={index}
//               initial="hidden"
//               animate={controls}
//               variants={taglineLineVariants}
//               style={{
//                 marginBottom: '0.4em',
//                 display: 'inline-block',
//                 whiteSpace: 'nowrap'
//               }}
//             >
//               {line}
//             </motion.span>
//           ))}
//         </motion.div>

//         {/* Typing Area with reserved space */}
//         <div
//           style={{
//             position: 'relative',
//             fontSize: '2.5rem',
//             fontWeight: 700,
//             color: '#0D47A1',
//             whiteSpace: 'nowrap',
//             height: '3rem',
//             overflow: 'hidden',
//             visibility: startTyping ? 'visible' : 'hidden'
//           }}
//         >
//           {startTyping && (
//             <span
//               ref={textRef}
//               style={{
//                 position: 'relative',
//                 display: 'inline-block',
//                 padding: '0 0.15em'
//               }}
//             >
//               {/* Highlight Swipe - FASTER */}
//               {(phase === 'highlighting' || phase === 'erasing' || phase === 'typing') && (
//                 <motion.div
//                   animate={{
//                     width: textWidth,
//                     opacity: displayedLetters ? 0.15 : 0
//                   }}
//                   initial={{ width: 0, opacity: 0.15 }}
//                   transition={{
//                     duration: phase === 'highlighting' ? 0.2 : 0.05, // Faster highlight
//                     ease: [0.4, 0, 0.2, 1]
//                   }}
//                   style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     height: '100%',
//                     backgroundColor: '#90CAF9',
//                     borderRadius: '4px',
//                     zIndex: 0
//                   }}
//                 />
//               )}

//               {/* Text with Cursor */}
//               <span
//                 style={{
//                   position: 'relative',
//                   zIndex: 1
//                 }}
//               >
//                 {displayedLetters}
//                 {(phase === 'typing' || phase === 'highlighting') && (
//                   <span
//                     style={{
//                       opacity: cursorVisible ? 1 : 0,
//                       marginLeft: '2px',
//                       borderLeft: '2px solid currentColor',
//                       height: '1em',
//                       display: 'inline-block',
//                       verticalAlign: 'bottom',
//                     }}
//                   />
//                 )}
//               </span>
//             </span>
//           )}

//           {/* Underline - FASTER */}
//           {startTyping && (
//             <motion.div
//               initial={false}
//               animate={{
//                 width: phase === 'typing' ? textRef.current?.offsetWidth || 0 : 0,
//                 opacity: phase === 'typing' ? 1 : 0
//               }}
//               transition={{
//                 duration: 0.2, // Faster underline animation
//                 ease: [0.42, 0, 0.58, 1]
//               }}
//               style={{
//                 height: '3px',
//                 backgroundColor: '#0D47A1',
//                 marginTop: '6px',
//                 borderRadius: '2px'
//               }}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import videoFile from '/src/assets/video.mp4'; // ✅ Adjust if needed based on your project setup

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

  const canvasRef = useRef();
  const animationRef = useRef();
  const particlesRef = useRef([]);
  const lastTimeRef = useRef(0);
  const fps = 30;
  const frameInterval = 1000 / fps;
  const primaryColor = '#0D47A1';

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
      const count = Math.min(150, Math.floor((window.innerWidth * window.innerHeight) / 4000));
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
            if (distanceSq < 35000) {
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
  }, [primaryColor]);

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
      }, 40);
    }

    if (phase === 'highlighting') {
      pauseTimeout = setTimeout(() => setPhase('erasing'), 800);
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
      }, 25);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(pauseTimeout);
    };
  }, [phase, phraseIndex, startTyping]);

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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5rem 3rem',
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
          maxWidth: '50%',
          paddingRight: '2rem',
          boxSizing: 'border-box'
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          style={{
            fontSize: '4rem',
            fontWeight: 800,
            background: 'linear-gradient(90deg, #0D47A1, #00C853)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
            cursor: 'default'
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
            marginBottom: '1.8rem',
            marginLeft: '0.1rem',
            fontSize: '2rem',
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
                whiteSpace: 'nowrap'
              }}
            >
              {line}
            </motion.span>
          ))}
        </motion.div>

        <div
          style={{
            position: 'relative',
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#0D47A1',
            whiteSpace: 'nowrap',
            height: '3rem',
            overflow: 'hidden',
            visibility: startTyping ? 'visible' : 'hidden'
          }}
        >
          {startTyping && (
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
          )}

          {startTyping && (
            <motion.div
              initial={false}
              animate={{
                width: phase === 'typing' ? textRef.current?.offsetWidth || 0 : 0,
                opacity: phase === 'typing' ? 1 : 0
              }}
              transition={{
                duration: 0.2,
                ease: [0.42, 0, 0.58, 1]
              }}
              style={{
                height: '3px',
                backgroundColor: '#0D47A1',
                marginTop: '6px',
                borderRadius: '2px'
              }}
            />
          )}
        </div>
      </div>

      {/* Right Side: Video */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          maxWidth: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <video
          src={videoFile}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '50%',
            height: 'auto',
            borderRadius: '12px',
            // boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            maxHeight: '80vh'
          }}
        />
      </div>
    </div>
  );
}
