// import React, { useEffect, useRef } from 'react';
// import Footer from '../components/Footer.jsx';

// const LifeScienceHero = () => {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef();
//   const lastTimeRef = useRef(0);

//   const fps = 60;
//   const frameInterval = 1000 / fps;
//   const primaryColor = '#4F1985';

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
//       const count = Math.min(200, Math.floor((window.innerWidth * window.innerHeight) / 3000));
//       const colors = [
//         primaryColor,
//         '#6A28A0',
//         '#8852B5',
//         '#A678CC'
//       ];

//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.3,
//           vy: (Math.random() - 0.5) * 0.3,
//           size: 1 + Math.random() * 1.5,
//           opacity: 0.4 + Math.random() * 0.5,
//           color: colors[Math.floor(Math.random() * colors.length)],
//           angle: Math.random() * Math.PI * 2,
//           spin: (Math.random() - 0.5) * 0.01,
//           pulseSpeed: 0.01 + Math.random() * 0.02,
//           pulsePhase: Math.random() * Math.PI * 2
//         });
//       }
//       particlesRef.current = particles;
//     };

//     const drawParticle = (p) => {
//       ctx.beginPath();
//       const pulseSize = p.size * (0.9 + 0.2 * Math.sin(p.pulsePhase));
//       p.pulsePhase += p.pulseSpeed;
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
//       ctx.globalAlpha = 0.2 * (1 - distance / 150);
//       ctx.lineWidth = 0.7;
//       ctx.stroke();
//     };

//     const animate = (timestamp) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;
//       const deltaTime = timestamp - lastTimeRef.current;
//       if (deltaTime > frameInterval) {
//         lastTimeRef.current = timestamp - (deltaTime % frameInterval);

//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         const particles = particlesRef.current;

//         // Draw connections first
//         for (let i = 0; i < particles.length; i++) {
//           const p1 = particles[i];
//           for (let j = i + 1; j < particles.length; j++) {
//             const p2 = particles[j];
//             const dx = p1.x - p2.x;
//             const dy = p1.y - p2.y;
//             const distanceSq = dx * dx + dy * dy;
//             if (distanceSq < 22500) { // 150^2
//               drawConnection(p1, p2, Math.sqrt(distanceSq));
//             }
//           }
//         }

//         // Update & draw particles
//         for (let i = 0; i < particles.length; i++) {
//           const p = particles[i];
//           p.x += p.vx;
//           p.y += p.vy;
//           if (p.x < -50) p.x = canvas.width + 50;
//           if (p.x > canvas.width + 50) p.x = -50;
//           if (p.y < -50) p.y = canvas.height + 50;
//           if (p.y > canvas.height + 50) p.y = -50;
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

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#2A0A46] via-[#3B0F60] to-[#4F1985]">
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
//         style={{ zIndex: 0 }}
//       />

//       <div className="relative z-10 flex flex-col items-center justify-center text-center w-screen h-screen px-4 animate-fadeIn">
//         <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//           Welcome to Boltzmann AI
//         </h1>
//         <p className="text-lg md:text-xl text-purple-100 max-w-2xl mb-8">
//           We accelerate life science discovery with cutting-edge AI solutions.
//         </p>
//         <div className="flex gap-4">
//           <button className="px-6 py-3 rounded-full bg-[#4F1985] hover:bg-[#6A28A0] text-white transition transform hover:scale-105">
//             Learn More
//           </button>
//           <button className="px-6 py-3 rounded-full border-2 border-[#A678CC] text-purple-100 hover:bg-[#A678CC]/30 transition transform hover:scale-105">
//             Our Products
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default LifeScienceHero;

// import React, { useEffect, useRef, useCallback } from 'react';
// import Footer from '../components/Footer.jsx';

// const LifeScienceHero = () => {
//   // Refs for canvas and animation control
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef(null);
//   const lastFrameTimeRef = useRef(0);
  
//   // Configuration constants
//   const FPS_TARGET = 60;
//   const FRAME_INTERVAL = 1000 / FPS_TARGET;
//   const PARTICLE_COLORS = [
//     '#8B5FBF', // Darker purple
//     '#9D72D5', // Medium purple
//     '#A67CCF'  // Soft purple
//   ];

//   // Initialize particles
//   const initParticles = useCallback((canvas) => {
//     const particleCount = Math.min(250, Math.floor((canvas.width * canvas.height) / 2500));
//     const particles = [];
    
//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.2,
//         vy: (Math.random() - 0.5) * 0.2,
//         size: 1.8 + Math.random() * 1.2, // Slightly larger
//         baseSize: 1.8 + Math.random() * 1.2,
//         opacity: 0.6 + Math.random() * 0.3, // More opaque
//         color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
//         angle: Math.random() * Math.PI * 2,
//         spin: (Math.random() - 0.5) * 0.008,
//         pulseSpeed: 0.003 + Math.random() * 0.007,
//         pulsePhase: Math.random() * Math.PI * 2
//       });
//     }
    
//     particlesRef.current = particles;
//   }, []);

//   // Handle canvas resize
//   const handleResize = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     initParticles(canvas);
//   }, [initParticles]);

//   // Draw a single particle
//   const drawParticle = useCallback((ctx, particle) => {
//     const pulseSize = particle.baseSize * (0.9 + 0.1 * Math.sin(particle.pulsePhase));
//     particle.pulsePhase += particle.pulseSpeed;
    
//     ctx.save();
//     ctx.translate(particle.x, particle.y);
//     ctx.rotate(particle.angle);
//     ctx.globalAlpha = particle.opacity;
//     ctx.fillStyle = particle.color;
    
//     // Draw main particle with subtle glow
//     ctx.beginPath();
//     ctx.arc(0, 0, pulseSize * 1.3, 0, Math.PI * 2);
//     ctx.fillStyle = `rgba(139, 95, 191, ${particle.opacity * 0.2})`;
//     ctx.fill();
    
//     // Core particle
//     ctx.beginPath();
//     ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
//     ctx.shadowBlur = 6;
//     ctx.shadowColor = particle.color;
//     ctx.fill();
    
//     ctx.restore();
//   }, []);

//   // Draw connections between particles
//   const drawConnections = useCallback((ctx, particles) => {
//     const connectionDistance = 180;
    
//     for (let i = 0; i < particles.length; i++) {
//       for (let j = i + 1; j < particles.length; j++) {
//         const p1 = particles[i];
//         const p2 = particles[j];
//         const dx = p1.x - p2.x;
//         const dy = p1.y - p2.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
        
//         if (distance < connectionDistance) {
//           const opacity = 0.3 * (1 - distance / connectionDistance); // Increased opacity
          
//           ctx.beginPath();
//           ctx.moveTo(p1.x, p1.y);
//           ctx.lineTo(p2.x, p2.y);
//           ctx.strokeStyle = `rgba(106, 40, 160, ${opacity})`; // Darker purple
//           ctx.lineWidth = 0.9; // Slightly thicker
//           ctx.stroke();
//         }
//       }
//     }
//   }, []);

//   // Animation loop
//   const animate = useCallback((timestamp) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext('2d');
//     if (!ctx || !canvas) return;
    
//     const deltaTime = timestamp - lastFrameTimeRef.current;
    
//     if (deltaTime > FRAME_INTERVAL) {
//       lastFrameTimeRef.current = timestamp - (deltaTime % FRAME_INTERVAL);
      
//       // Clear canvas completely
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       const particles = particlesRef.current;
      
//       // Draw connections first
//       drawConnections(ctx, particles);
      
//       // Update and draw particles
//       particles.forEach(particle => {
//         particle.x += particle.vx;
//         particle.y += particle.vy;
//         particle.angle += particle.spin;
        
//         // Boundary wrapping
//         if (particle.x < -50) particle.x = canvas.width + 50;
//         if (particle.x > canvas.width + 50) particle.x = -50;
//         if (particle.y < -50) particle.y = canvas.height + 50;
//         if (particle.y > canvas.height + 50) particle.y = -50;
        
//         drawParticle(ctx, particle);
//       });
//     }
    
//     animationRef.current = requestAnimationFrame(animate);
//   }, [drawConnections, drawParticle]);

//   // Setup and cleanup
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     handleResize();
//     animationRef.current = requestAnimationFrame(animate);
    
//     const debouncedResize = debounce(handleResize, 100);
//     window.addEventListener('resize', debouncedResize);
    
//     return () => {
//       cancelAnimationFrame(animationRef.current);
//       window.removeEventListener('resize', debouncedResize);
//     };
//   }, [animate, handleResize]);

//   const debounce = (func, delay) => {
//     let timeoutId;
//     return (...args) => {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => func.apply(this, args), delay);
//     };
//   };

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-transparent">
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-screen h-screen pointer-events-none opacity-100"
//         style={{ zIndex: 0 }}
//       />

//       {/* Content with elegant animation */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center w-screen h-screen px-4">
//         <div className="transform translate-y-6 opacity-0 animate-floatIn"
//              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4F1985] mb-4 tracking-tight">
//             Revolutionizing <span className="text-[#6A28A0]">Life Sciences</span>
//           </h1>
//           <p className="text-lg md:text-xl text-[#6B46C1] max-w-2xl mb-8 leading-relaxed">
//             Harnessing the power of AI to accelerate breakthroughs and transform healthcare discovery.
//           </p>
//           <div className="flex gap-4">
//             <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#4F1985] to-[#6A28A0] text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#4F1985]/40">
//               Explore Solutions
//             </button>
//             <button className="px-8 py-3 rounded-full border-2 border-[#8B5FBF] text-[#6A28A0] hover:bg-[#8B5FBF]/20 transition-all hover:scale-105">
//               See Our Research
//             </button>
//           </div>
//         </div>
//       </div>

//       <Footer className="relative z-20" />
//     </div>
//   );
// };

// export default React.memo(LifeScienceHero);


// import React, { useEffect, useRef } from 'react';
// import Footer from '../components/Footer.jsx';

// const LifeScienceHero = () => {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef();
//   const lastTimeRef = useRef(0);
//   const fps = 60;
//   const frameInterval = 1000 / fps;

//   // Brand color
//   const primaryColor = '#4F1985';

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // --- Handle resize
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initParticles();
//     };

//     // --- Particle initialization
//     const initParticles = () => {
//       const particles = [];
//       const count = Math.min(250, Math.floor((window.innerWidth * window.innerHeight) / 2500));
//       const colors = [
//         primaryColor,
//         '#875FC1',
//         '#A67CCF',
//         '#BFA1E6'
//       ];

//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.25,
//           vy: (Math.random() - 0.5) * 0.25,
//           size: 1.5 + Math.random() * 1.5,
//           opacity: 0.35 + Math.random() * 0.4,
//           color: colors[Math.floor(Math.random() * colors.length)],
//           angle: Math.random() * Math.PI * 2,
//           spin: (Math.random() - 0.5) * 0.01,
//           pulseSpeed: 0.005 + Math.random() * 0.01,
//           pulsePhase: Math.random() * Math.PI * 2
//         });
//       }
//       particlesRef.current = particles;
//     };

//     // --- Draw single particle
//     const drawParticle = (p) => {
//       ctx.beginPath();
//       const pulseSize = p.size * (0.85 + 0.15 * Math.sin(p.pulsePhase));
//       p.pulsePhase += p.pulseSpeed;
//       ctx.save();
//       ctx.translate(p.x, p.y);
//       ctx.rotate(p.angle);
//       ctx.globalAlpha = p.opacity;
//       ctx.fillStyle = p.color;
//       ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
//       ctx.shadowBlur = 6;
//       ctx.shadowColor = p.color;
//       ctx.fill();
//       ctx.restore();
//     };

//     // --- Draw connection
//     const drawConnection = (p1, p2, distance) => {
//       const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
//       gradient.addColorStop(0, p1.color);
//       gradient.addColorStop(1, p2.color);
//       ctx.beginPath();
//       ctx.moveTo(p1.x, p1.y);
//       ctx.lineTo(p2.x, p2.y);
//       ctx.strokeStyle = gradient;
//       ctx.globalAlpha = 0.15 * (1 - distance / 160);
//       ctx.lineWidth = 0.7;
//       ctx.stroke();
//     };

//     // --- Animation loop
//     const animate = (timestamp) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;
//       const deltaTime = timestamp - lastTimeRef.current;
//       if (deltaTime > frameInterval) {
//         lastTimeRef.current = timestamp - (deltaTime % frameInterval);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         const particles = particlesRef.current;

//         // Connections
//         for (let i = 0; i < particles.length; i++) {
//           const p1 = particles[i];
//           for (let j = i + 1; j < particles.length; j++) {
//             const p2 = particles[j];
//             const dx = p1.x - p2.x;
//             const dy = p1.y - p2.y;
//             const distanceSq = dx * dx + dy * dy;
//             if (distanceSq < 25600) { // 160^2
//               drawConnection(p1, p2, Math.sqrt(distanceSq));
//             }
//           }
//         }

//         // Move and draw
//         for (let i = 0; i < particles.length; i++) {
//           const p = particles[i];
//           p.x += p.vx;
//           p.y += p.vy;
//           if (p.x < -50) p.x = canvas.width + 50;
//           if (p.x > canvas.width + 50) p.x = -50;
//           if (p.y < -50) p.y = canvas.height + 50;
//           if (p.y > canvas.height + 50) p.y = -50;
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

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#2A0A46] via-[#3B0F60] to-[#4F1985]">
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
//         style={{ zIndex: 0 }}
//       />

//       <div className="relative z-10 flex flex-col items-center justify-center text-center w-screen h-screen px-4 animate-fadeIn">
//         <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//           Welcome to Boltzmann AI
//         </h1>
//         <p className="text-lg md:text-xl text-purple-100 max-w-2xl mb-8">
//           We accelerate life science discovery with cutting-edge AI solutions.
//         </p>
//         <div className="flex gap-4">
//           <button className="px-6 py-3 rounded-full bg-[#4F1985] hover:bg-[#6A28A0] text-white transition transform hover:scale-105">
//             Learn More
//           </button>
//           <button className="px-6 py-3 rounded-full border-2 border-[#A678CC] text-purple-100 hover:bg-[#A678CC]/30 transition transform hover:scale-105">
//             Our Products
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default LifeScienceHero;







// import React, { useEffect, useRef } from 'react';
// import Footer from '../components/Footer';
// const LifeScienceHero = () => {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef();
//   const lastTimeRef = useRef(0);
//   const fps = 60;
//   const frameInterval = 1000 / fps;

//   // Enhanced brand colors
//   const primaryColor = '#4F1985';

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // --- Handle resize
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initParticles();
//     };

//     // --- Particle initialization
//     const initParticles = () => {
//       const particles = [];
//       const count = Math.min(300, Math.floor((window.innerWidth * window.innerHeight) / 2200));
//       const colors = [
//         primaryColor,
//         '#875FC1',
//         '#A67CCF',
//         '#BFA1E6',
//         '#E6D5FF',
//         '#FF6B9D',
//         '#00D4FF'
//       ];

//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.3,
//           vy: (Math.random() - 0.5) * 0.3,
//           size: 1.2 + Math.random() * 2,
//           opacity: 0.25 + Math.random() * 0.5,
//           color: colors[Math.floor(Math.random() * colors.length)],
//           angle: Math.random() * Math.PI * 2,
//           spin: (Math.random() - 0.5) * 0.015,
//           pulseSpeed: 0.008 + Math.random() * 0.012,
//           pulsePhase: Math.random() * Math.PI * 2
//         });
//       }
//       particlesRef.current = particles;
//     };

//     // --- Draw single particle
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
//       ctx.shadowBlur = 8;
//       ctx.shadowColor = p.color;
//       ctx.fill();
//       ctx.restore();
//     };

//     // --- Draw connection
//     const drawConnection = (p1, p2, distance) => {
//       const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
//       gradient.addColorStop(0, p1.color);
//       gradient.addColorStop(1, p2.color);
//       ctx.beginPath();
//       ctx.moveTo(p1.x, p1.y);
//       ctx.lineTo(p2.x, p2.y);
//       ctx.strokeStyle = gradient;
//       ctx.globalAlpha = 0.2 * (1 - distance / 180);
//       ctx.lineWidth = 0.8;
//       ctx.stroke();
//     };

//     // --- Animation loop
//     const animate = (timestamp) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;
//       const deltaTime = timestamp - lastTimeRef.current;
//       if (deltaTime > frameInterval) {
//         lastTimeRef.current = timestamp - (deltaTime % frameInterval);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         const particles = particlesRef.current;

//         // Connections
//         for (let i = 0; i < particles.length; i++) {
//           const p1 = particles[i];
//           for (let j = i + 1; j < particles.length; j++) {
//             const p2 = particles[j];
//             const dx = p1.x - p2.x;
//             const dy = p1.y - p2.y;
//             const distanceSq = dx * dx + dy * dy;
//             if (distanceSq < 32400) { // 180^2
//               drawConnection(p1, p2, Math.sqrt(distanceSq));
//             }
//           }
//         }

//         // Move and draw
//         for (let i = 0; i < particles.length; i++) {
//           const p = particles[i];
//           p.x += p.vx;
//           p.y += p.vy;
//           if (p.x < -50) p.x = canvas.width + 50;
//           if (p.x > canvas.width + 50) p.x = -50;
//           if (p.y < -50) p.y = canvas.height + 50;
//           if (p.y > canvas.height + 50) p.y = -50;
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

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A0A2E] via-[#2A0A46] to-[#4F1985]">
//       {/* Enhanced background overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
//         style={{ zIndex: 0 }}
//       />

//       {/* Floating elements */}
//       <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl animate-pulse" />
//       <div className="absolute bottom-32 right-32 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-500/15 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
//       <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/25 to-purple-500/25 blur-lg animate-pulse" style={{ animationDelay: '2s' }} />

//       <div className="relative z-10 flex flex-col items-center justify-center text-center w-screen h-screen px-4">
//         {/* Main content with enhanced styling */}
//         <div className="max-w-5xl mx-auto space-y-8">
//           {/* Subtitle badge */}
         

//           {/* Main heading with enhanced typography */}
          

//           {/* Enhanced description */}
        

//           {/* Enhanced buttons */}
          
            
           
//           {/* Stats or features section */}
          
            
            
//         </div>
//       </div>

//       {/* Enhanced footer */}
   
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 1s ease-out forwards;
//         }
        
//         .animate-fadeIn:nth-child(1) {
//           animation-delay: 0.2s;
//         }
        
//         .animate-fadeIn:nth-child(2) {
//           animation-delay: 0.4s;
//         }
        
//         .animate-fadeIn:nth-child(3) {
//           animation-delay: 0.6s;
//         }
        
//         .animate-fadeIn:nth-child(4) {
//           animation-delay: 0.8s;
//         }
//       `}</style>
//          <Footer />
//     </div>
//   );
// };

// export default LifeScienceHero;


//section animation

// import { useEffect, useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Pipeline() {
//   const phrases = [
//     "Generative ",
//     "Multi-Agent Systems",
//     "Automated Scientific Workflows",
//     "Computational Drug Discovery",
//     "Physics-Informed ML"
//   ];

//   const [showTitle, setShowTitle] = useState(false);
//   const [showTagline, setShowTagline] = useState(false);
//   const [phraseIndex, setPhraseIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const containerRef = useRef(null);

//   // Parallax and scroll effects
//   useEffect(() => {
//     const handleScroll = () => {
//       if (containerRef.current) {
//         const { top, height } = containerRef.current.getBoundingClientRect();
//         const progress = 1 - Math.max(0, top + height) / (window.innerHeight + height);
//         setScrollProgress(Math.min(1, Math.max(0, progress)));
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Control initial sequence with staggered animations
//   useEffect(() => {
//     const t1 = setTimeout(() => setShowTitle(true), 300);
//     const t2 = setTimeout(() => setShowTagline(true), 1200);
//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//     };
//   }, []);

//   // Phrase loop with smoother transitions
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setPhraseIndex((prev) => (prev + 1) % phrases.length);
//         setIsAnimating(false);
//       }, 800);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, []);

//   // Background gradient effect based on scroll
//   const bgGradient = `linear-gradient(
//     ${135 + scrollProgress * 45}deg,
//     hsl(${200 + scrollProgress * 40}, 80%, 95%) 0%,
//     hsl(${220 + scrollProgress * 20}, 70%, 96%) 100%
//   )`;

//   // Particle effects configuration
//   const particles = Array.from({ length: 20 }).map((_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     size: Math.random() * 0.5 + 0.3,
//     delay: Math.random() * 2,
//     duration: Math.random() * 3 + 2
//   }));

//   return (
//     <div 
//       ref={containerRef}
//       style={{
//         position: 'relative',
//         overflow: 'hidden',
//         minHeight: '120vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         background: bgGradient,
//         padding: '4rem 2rem',
//         fontFamily: "'Inter', sans-serif",
//         willChange: 'background'
//       }}
//     >
//       {/* Animated background particles */}
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         overflow: 'hidden',
//         zIndex: 0
//       }}>
//         {particles.map((particle) => (
//           <motion.div
//             key={particle.id}
//             initial={{ opacity: 0 }}
//             animate={{ 
//               opacity: [0, 0.6, 0],
//               x: `${particle.x + Math.sin(particle.delay) * 10}%`,
//               y: `${particle.y + Math.cos(particle.delay) * 10}%`
//             }}
//             transition={{
//               duration: particle.duration,
//               delay: particle.delay,
//               repeat: Infinity,
//               repeatType: 'reverse',
//               ease: 'easeInOut'
//             }}
//             style={{
//               position: 'absolute',
//               width: `${particle.size}rem`,
//               height: `${particle.size}rem`,
//               background: 'radial-gradient(circle, #007ACC 0%, rgba(0,122,204,0) 70%)',
//               borderRadius: '50%',
//               filter: 'blur(1px)'
//             }}
//           />
//         ))}
//       </div>

//       {/* Content container */}
//       <div style={{
//         position: 'relative',
//         zIndex: 1,
//         maxWidth: '1200px',
//         margin: '0 auto',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center'
//       }}>
//         {/* Title Animation with motion */}
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: '100%' }}
//           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//           style={{
//             overflow: 'hidden',
//             marginBottom: '1.5rem',
//             alignSelf: 'flex-start'
//           }}
//         >
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             style={{
//               fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
//               fontWeight: 800,
//               background: 'linear-gradient(90deg, #007ACC 0%, #00B4D8 100%)',
//               WebkitBackgroundClip: 'text',
//               backgroundClip: 'text',
//               color: 'transparent',
//               lineHeight: 1.1,
//               textAlign: 'left',
//               margin: 0,
//               padding: 0
//             }}
//           >
//             Boltzmann Labs
//           </motion.h1>
//         </motion.div>

//         {/* Tagline Animation */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 0.6 }}
//           style={{
//             marginBottom: '2rem',
//             maxWidth: '800px'
//           }}
//         >
//           <p style={{
//             fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
//             color: '#555',
//             lineHeight: 1.6,
//             margin: 0
//           }}>
//             Reimagining drug discovery through
//           </p>
//         </motion.div>

//         {/* Animated phrase with 3D effect */}
//         <div style={{
//           height: '120px',
//           position: 'relative',
//           perspective: '1000px',
//           marginBottom: '3rem'
//         }}>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={phraseIndex}
//               initial={{ 
//                 opacity: 0,
//                 rotateX: 90,
//                 y: 50,
//                 filter: 'blur(10px)'
//               }}
//               animate={{ 
//                 opacity: 1,
//                 rotateX: 0,
//                 y: 0,
//                 filter: 'blur(0px)'
//               }}
//               exit={{ 
//                 opacity: 0,
//                 rotateX: -90,
//                 y: -50,
//                 filter: 'blur(10px)'
//               }}
//               transition={{ 
//                 duration: 0.8,
//                 ease: [0.22, 1, 0.36, 1]
//               }}
//               style={{
//                 position: 'absolute',
//                 left: '50%',
//                 transform: 'translateX(-50%)',
//                 fontSize: 'clamp(2rem, 5vw, 3.5rem)',
//                 fontWeight: 700,
//                 background: 'linear-gradient(45deg, #007ACC 30%, #00B4D8 90%)',
//                 WebkitBackgroundClip: 'text',
//                 backgroundClip: 'text',
//                 color: 'transparent',
//                 textAlign: 'center',
//                 padding: '0 1rem'
//               }}
//             >
//               {phrases[phraseIndex]}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Decorative animated line */}
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: '100%' }}
//           transition={{ delay: 1.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
//           style={{
//             height: '2px',
//             background: 'linear-gradient(90deg, rgba(0,122,204,0) 0%, #007ACC 50%, rgba(0,122,204,0) 100%)',
//             margin: '2rem 0',
//             maxWidth: '400px'
//           }}
//         />

//         {/* Animated CTA button */}
//         <motion.button
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2.5, duration: 0.6 }}
//           whileHover={{ 
//             scale: 1.05,
//             boxShadow: '0 10px 20px rgba(0, 122, 204, 0.2)'
//           }}
//           whileTap={{ scale: 0.98 }}
//           style={{
//             background: 'linear-gradient(45deg, #007ACC 0%, #00B4D8 100%)',
//             color: 'white',
//             border: 'none',
//             padding: '1rem 2.5rem',
//             fontSize: '1.1rem',
//             fontWeight: 600,
//             borderRadius: '50px',
//             cursor: 'pointer',
//             marginTop: '1rem',
//             position: 'relative',
//             overflow: 'hidden'
//           }}
//         >
//           <span style={{ position: 'relative', zIndex: 2 }}>
//             Explore Our Technology
//           </span>
//           <motion.span
//             initial={{ x: '-100%' }}
//             whileHover={{ x: '100%' }}
//             transition={{ duration: 0.6 }}
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               background: 'linear-gradient(45deg, #00B4D8 0%, #007ACC 100%)',
//               zIndex: 1
//             }}
//           />
//         </motion.button>
//       </div>

//       {/* Animated floating molecules */}
//       <motion.div 
//         animate={{ 
//           y: [0, -20, 0],
//           rotate: [0, 5, 0]
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         style={{
//           position: 'absolute',
//           bottom: '10%',
//           right: '10%',
//           opacity: 0.7
//         }}
//       >
//         <svg width="80" height="80" viewBox="0 0 100 100">
//           <circle cx="50" cy="50" r="30" fill="none" stroke="#007ACC" strokeWidth="2" />
//           <circle cx="30" cy="30" r="8" fill="#00B4D8" />
//           <circle cx="70" cy="30" r="5" fill="#007ACC" />
//           <circle cx="50" cy="70" r="6" fill="#00B4D8" />
//           <line x1="30" y1="30" x2="50" y2="50" stroke="#007ACC" strokeWidth="2" />
//           <line x1="70" y1="30" x2="50" y2="50" stroke="#007ACC" strokeWidth="2" />
//           <line x1="50" y1="70" x2="50" y2="50" stroke="#007ACC" strokeWidth="2" />
//         </svg>
//       </motion.div>
//     </div>
//   );
// }

//








// import React, { useEffect, useRef } from 'react';
// import MacBookComponent from './Laptopanimation';
// import Footer from '../components/Footer';
// const LifeScienceHero = () => {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef();
//   const lastTimeRef = useRef(0);
//   const fps = 60;
//   const frameInterval = 1000 / fps;

//   // Enhanced brand colors
//   const primaryColor = '#4F1985';

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // --- Handle resize
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initParticles();
//     };

//     // --- Particle initialization
//     const initParticles = () => {
//       const particles = [];
//       const count = Math.min(300, Math.floor((window.innerWidth * window.innerHeight) / 2200));
//       const colors = [
//         primaryColor,
//         '#875FC1',
//         '#A67CCF',
//         '#BFA1E6',
//         '#E6D5FF',
//         '#FF6B9D',
//         '#00D4FF'
//       ];

//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.3,
//           vy: (Math.random() - 0.5) * 0.3,
//           size: 1.2 + Math.random() * 2,
//           opacity: 0.25 + Math.random() * 0.5,
//           color: colors[Math.floor(Math.random() * colors.length)],
//           angle: Math.random() * Math.PI * 2,
//           spin: (Math.random() - 0.5) * 0.015,
//           pulseSpeed: 0.008 + Math.random() * 0.012,
//           pulsePhase: Math.random() * Math.PI * 2
//         });
//       }
//       particlesRef.current = particles;
//     };

//     // --- Draw single particle
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
//       ctx.shadowBlur = 8;
//       ctx.shadowColor = p.color;
//       ctx.fill();
//       ctx.restore();
//     };

//     // --- Draw connection
//     const drawConnection = (p1, p2, distance) => {
//       const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
//       gradient.addColorStop(0, p1.color);
//       gradient.addColorStop(1, p2.color);
//       ctx.beginPath();
//       ctx.moveTo(p1.x, p1.y);
//       ctx.lineTo(p2.x, p2.y);
//       ctx.strokeStyle = gradient;
//       ctx.globalAlpha = 0.2 * (1 - distance / 180);
//       ctx.lineWidth = 0.8;
//       ctx.stroke();
//     };

//     // --- Animation loop
//     const animate = (timestamp) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;
//       const deltaTime = timestamp - lastTimeRef.current;
//       if (deltaTime > frameInterval) {
//         lastTimeRef.current = timestamp - (deltaTime % frameInterval);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         const particles = particlesRef.current;

//         // Connections
//         for (let i = 0; i < particles.length; i++) {
//           const p1 = particles[i];
//           for (let j = i + 1; j < particles.length; j++) {
//             const p2 = particles[j];
//             const dx = p1.x - p2.x;
//             const dy = p1.y - p2.y;
//             const distanceSq = dx * dx + dy * dy;
//             if (distanceSq < 32400) { // 180^2
//               drawConnection(p1, p2, Math.sqrt(distanceSq));
//             }
//           }
//         }

//         // Move and draw
//         for (let i = 0; i < particles.length; i++) {
//           const p = particles[i];
//           p.x += p.vx;
//           p.y += p.vy;
//           if (p.x < -50) p.x = canvas.width + 50;
//           if (p.x > canvas.width + 50) p.x = -50;
//           if (p.y < -50) p.y = canvas.height + 50;
//           if (p.y > canvas.height + 50) p.y = -50;
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
  

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A0A2E] via-[#2A0A46] to-[#4F1985]">
//       {/* Enhanced background overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
//         style={{ zIndex: 0 }}
//       />

//       {/* Floating elements */}
//       <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl animate-pulse" />
//       <div className="absolute bottom-32 right-32 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-500/15 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
//       <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/25 to-purple-500/25 blur-lg animate-pulse" style={{ animationDelay: '2s' }} />

//       <div className="relative z-10 flex flex-col items-center justify-center text-center w-screen h-screen px-4">
//         {/* Main content with enhanced styling */}
//         <div className="max-w-5xl mx-auto space-y-8">
//           {/* Subtitle badge */}
         

//           {/* Main heading with enhanced typography */}
          

//           {/* Enhanced description */}
        

//           {/* Enhanced buttons */}
          
            
           
//           {/* Stats or features section */}
          
            
            
//         </div>
//       </div>

//       {/* Enhanced footer */}
   
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 1s ease-out forwards;
//         }
        
//         .animate-fadeIn:nth-child(1) {
//           animation-delay: 0.2s;
//         }
        
//         .animate-fadeIn:nth-child(2) {
//           animation-delay: 0.4s;
//         }
        
//         .animate-fadeIn:nth-child(3) {
//           animation-delay: 0.6s;
//         }
        
//         .animate-fadeIn:nth-child(4) {
//           animation-delay: 0.8s;
//         }
//       `}</style>
//          <Footer />
//     </div>
//   );
// };

// export default LifeScienceHero;


// import React, { useEffect, useRef } from 'react';
// import Footer from '../components/Footer';
// const LifeScienceHero = () => {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef();
//   const lastTimeRef = useRef(0);
//   const fps = 60;
//   const frameInterval = 1000 / fps;

//   // Enhanced brand colors
//   const primaryColor = '#4F1985';

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // --- Handle resize
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initParticles();
//     };

//     // --- Particle initialization
//     const initParticles = () => {
//       const particles = [];
//       const count = Math.min(300, Math.floor((window.innerWidth * window.innerHeight) / 2200));
//       const colors = [
//         primaryColor,
//         '#875FC1',
//         '#A67CCF',
//         '#BFA1E6',
//         '#E6D5FF',
//         '#FF6B9D',
//         '#00D4FF'
//       ];

//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.3,
//           vy: (Math.random() - 0.5) * 0.3,
//           size: 1.2 + Math.random() * 2,
//           opacity: 0.25 + Math.random() * 0.5,
//           color: colors[Math.floor(Math.random() * colors.length)],
//           angle: Math.random() * Math.PI * 2,
//           spin: (Math.random() - 0.5) * 0.015,
//           pulseSpeed: 0.008 + Math.random() * 0.012,
//           pulsePhase: Math.random() * Math.PI * 2
//         });
//       }
//       particlesRef.current = particles;
//     };

//     // --- Draw single particle
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
//       ctx.shadowBlur = 8;
//       ctx.shadowColor = p.color;
//       ctx.fill();
//       ctx.restore();
//     };

//     // --- Draw connection
//     const drawConnection = (p1, p2, distance) => {
//       const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
//       gradient.addColorStop(0, p1.color);
//       gradient.addColorStop(1, p2.color);
//       ctx.beginPath();
//       ctx.moveTo(p1.x, p1.y);
//       ctx.lineTo(p2.x, p2.y);
//       ctx.strokeStyle = gradient;
//       ctx.globalAlpha = 0.2 * (1 - distance / 180);
//       ctx.lineWidth = 0.8;
//       ctx.stroke();
//     };

//     // --- Animation loop
//     const animate = (timestamp) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;
//       const deltaTime = timestamp - lastTimeRef.current;
//       if (deltaTime > frameInterval) {
//         lastTimeRef.current = timestamp - (deltaTime % frameInterval);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         const particles = particlesRef.current;

//         // Connections
//         for (let i = 0; i < particles.length; i++) {
//           const p1 = particles[i];
//           for (let j = i + 1; j < particles.length; j++) {
//             const p2 = particles[j];
//             const dx = p1.x - p2.x;
//             const dy = p1.y - p2.y;
//             const distanceSq = dx * dx + dy * dy;
//             if (distanceSq < 32400) { // 180^2
//               drawConnection(p1, p2, Math.sqrt(distanceSq));
//             }
//           }
//         }

//         // Move and draw
//         for (let i = 0; i < particles.length; i++) {
//           const p = particles[i];
//           p.x += p.vx;
//           p.y += p.vy;
//           if (p.x < -50) p.x = canvas.width + 50;
//           if (p.x > canvas.width + 50) p.x = -50;
//           if (p.y < -50) p.y = canvas.height + 50;
//           if (p.y > canvas.height + 50) p.y = -50;
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
  

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A0A2E] via-[#2A0A46] to-[#4F1985]">
//       {/* Enhanced background overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
//         style={{ zIndex: 0 }}
//       />

//       {/* Floating elements */}
//       <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl animate-pulse" />
//       <div className="absolute bottom-32 right-32 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-500/15 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
//       <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/25 to-purple-500/25 blur-lg animate-pulse" style={{ animationDelay: '2s' }} />

//       <div className="relative z-10 flex flex-col items-center justify-center text-center w-screen h-screen px-4">
//         {/* Main content with enhanced styling */}
//         <div className="max-w-5xl mx-auto space-y-8">
//           {/* Subtitle badge */}
         

//           {/* Main heading with enhanced typography */}
          

//           {/* Enhanced description */}
        

//           {/* Enhanced buttons */}
          
            
           
//           {/* Stats or features section */}
          
            
            
//         </div>
//       </div>

//       {/* Enhanced footer */}
   
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 1s ease-out forwards;
//         }
        
//         .animate-fadeIn:nth-child(1) {
//           animation-delay: 0.2s;
//         }
        
//         .animate-fadeIn:nth-child(2) {
//           animation-delay: 0.4s;
//         }
        
//         .animate-fadeIn:nth-child(3) {
//           animation-delay: 0.6s;
//         }
        
//         .animate-fadeIn:nth-child(4) {
//           animation-delay: 0.8s;
//         }
//       `}</style>
//          <Footer />
//     </div>
//   );
// };

// export default LifeScienceHero;


  // Handle parallax mouse movement
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const x = (e.clientX / window.innerWidth - 0.5) * 30;
  //     const y = (e.clientY / window.innerHeight - 0.5) * 30;
  //     setMouseOffset({ x, y });
  //   };
  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);

  // import React, { useEffect, useRef } from 'react';
// import Footer from '../components/Footer'
// const LifeScienceHero = () => {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef();
//   const lastTimeRef = useRef(0);
//   const fps = 60;
//   const frameInterval = 1000 / fps;

//   const primaryColor = '#4F1985';

//   const textToDisplay = 'Boltzmann Labs';
//   const textRevealProgressRef = useRef(0);
//   const textRevealSpeed = 120;
//   const lastRevealTimeRef = useRef(0);

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
//       const count = Math.min(300, Math.floor((window.innerWidth * window.innerHeight) / 2200));
//       const colors = [
//         primaryColor,
//         '#875FC1',
//         '#A67CCF',
//         '#BFA1E6',
//         '#E6D5FF',
//         '#FF6B9D',
//         '#00D4FF'
//       ];

//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.3,
//           vy: (Math.random() - 0.5) * 0.3,
//           size: 1.2 + Math.random() * 2,
//           opacity: 0.5 + Math.random() * 0.5,
//           color: colors[Math.floor(Math.random() * colors.length)],
//           angle: Math.random() * Math.PI * 2,
//           spin: (Math.random() - 0.5) * 0.015,
//           pulseSpeed: 0.008 + Math.random() * 0.012,
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
//       ctx.shadowBlur = 0;
//       ctx.shadowColor = 'transparent';
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
//       ctx.globalAlpha = 0.2 * (1 - distance / 180);
//       ctx.lineWidth = 0.8;
//       ctx.stroke();
//     };

//     const drawAnimatedText = () => {
//       const visibleText = textToDisplay.slice(0, Math.floor(textRevealProgressRef.current));
//       ctx.save();
//       ctx.font = 'bold 56px Arial Rounded MT Bold, Arial, sans-serif';
//       ctx.fillStyle = 'white';
//       ctx.textBaseline = 'middle';
//       ctx.textAlign = 'left';
//       ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
//       ctx.shadowBlur = 8;
//       ctx.fillText(visibleText, 60, canvas.height / 2);
//       ctx.restore();
//     };

//     const animate = (timestamp) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;
//       const deltaTime = timestamp - lastTimeRef.current;
//       if (deltaTime > frameInterval) {
//         lastTimeRef.current = timestamp - (deltaTime % frameInterval);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         const particles = particlesRef.current;

//         for (let i = 0; i < particles.length; i++) {
//           const p1 = particles[i];
//           for (let j = i + 1; j < particles.length; j++) {
//             const p2 = particles[j];
//             const dx = p1.x - p2.x;
//             const dy = p1.y - p2.y;
//             const distanceSq = dx * dx + dy * dy;
//             if (distanceSq < 25600) {
//               drawConnection(p1, p2, Math.sqrt(distanceSq));
//             }
//           }
//         }

//         for (let i = 0; i < particles.length; i++) {
//           const p = particles[i];
//           p.x += p.vx;
//           p.y += p.vy;
//           if (p.x < -50) p.x = canvas.width + 50;
//           if (p.x > canvas.width + 50) p.x = -50;
//           if (p.y < -50) p.y = canvas.height + 50;
//           if (p.y > canvas.height + 50) p.y = -50;
//           drawParticle(p);
//         }

//         if (!lastRevealTimeRef.current) lastRevealTimeRef.current = timestamp;
//         if (timestamp - lastRevealTimeRef.current > textRevealSpeed) {
//           if (textRevealProgressRef.current < textToDisplay.length) {
//             textRevealProgressRef.current += 1;
//           }
//           lastRevealTimeRef.current = timestamp;
//         }

//         drawAnimatedText();
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

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A0A2E] via-[#2A0A46] to-[#4F1985]">
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
//         style={{ zIndex: 0 }}
//       />
//       <Footer />
//     </div>
//   );
// };

// export default LifeScienceHero;


// import React, { useEffect, useRef, useState } from 'react';

// const LifeScienceHero = () => {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef();
//   const lastTimeRef = useRef(0);

//   const fps = 60;
//   const frameInterval = 1000 / fps;

//   const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

//   const primaryColor = '#4F1985';
//   const animationState = useRef({
//   headlineWords: "Leading the way in AI Drug Discovery".split(" "),
//   currentWordCount: 0,
//   lastWordTime: 0,
//   wordDelay: 400,
//   boltzRevealStart: null,
//   boltzRevealProgress: 0,
//   phase: 1
// });


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
//       const count = Math.min(300, Math.floor((window.innerWidth * window.innerHeight) / 2200));
//       const colors = [
//         primaryColor, '#875FC1', '#A67CCF', '#BFA1E6',
//         '#E6D5FF', '#FF6B9D', '#00D4FF'
//       ];
//       particlesRef.current = Array.from({ length: count }, () => ({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.3,
//         vy: (Math.random() - 0.5) * 0.3,
//         size: 1.2 + Math.random() * 2,
//         opacity: 0.5 + Math.random() * 0.5,
//         color: colors[Math.floor(Math.random() * colors.length)],
//         angle: Math.random() * Math.PI * 2,
//         spin: (Math.random() - 0.5) * 0.015,
//         pulseSpeed: 0.008 + Math.random() * 0.012,
//         pulsePhase: Math.random() * Math.PI * 2
//       }));
//     };

//     const drawParticle = (p) => {
//       ctx.beginPath();
//       const pulseSize = p.size * (0.8 + 0.2 * Math.sin(p.pulsePhase));
//       p.pulsePhase += p.pulseSpeed;
//       p.angle += p.spin;
//       ctx.save();
//       ctx.translate(p.x + mouseOffset.x, p.y + mouseOffset.y);
//       ctx.rotate(p.angle);
//       ctx.globalAlpha = p.opacity;
//       ctx.fillStyle = p.color;
//       ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
//       ctx.fill();
//       ctx.restore();
//     };

//     const drawConnection = (p1, p2, distance) => {
//       ctx.beginPath();
//       ctx.moveTo(p1.x + mouseOffset.x, p1.y + mouseOffset.y);
//       ctx.lineTo(p2.x + mouseOffset.x, p2.y + mouseOffset.y);
//       const gradient = ctx.createLinearGradient(
//         p1.x + mouseOffset.x, p1.y + mouseOffset.y,
//         p2.x + mouseOffset.x, p2.y + mouseOffset.y
//       );
//       gradient.addColorStop(0, p1.color);
//       gradient.addColorStop(1, p2.color);
//       ctx.strokeStyle = gradient;
//       ctx.globalAlpha = 0.15 * (1 - distance / 180);
//       ctx.lineWidth = 0.8;
//       ctx.stroke();
//     };

// const drawTextBlock = (timestamp) => {
//   const marginLeft = 60 + mouseOffset.x * 0.3;
//   const centerY = canvas.height / 2 + mouseOffset.y * 0.3;

//   ctx.save();
//   ctx.textAlign = 'left';
//   ctx.textBaseline = 'top';
//   ctx.shadowColor = 'rgba(0,0,0,0.7)';
//   ctx.shadowBlur = 6;
//   ctx.shadowOffsetX = 2;
//   ctx.shadowOffsetY = 2;

//   const state = animationState.current;

//   // PHASE 1: Word-by-word headline
//   if (state.phase === 1) {
//     if (!state.lastWordTime) state.lastWordTime = timestamp;
//     if (timestamp - state.lastWordTime > state.wordDelay && state.currentWordCount < state.headlineWords.length) {
//       state.currentWordCount += 1;
//       state.lastWordTime = timestamp;
//     }

//     ctx.font = 'bold 42px Arial Rounded MT Bold, Arial, sans-serif';
//     ctx.fillStyle = '#FFFFFF';

//     const visibleWords = state.headlineWords.slice(0, state.currentWordCount).join(" ");
//     ctx.fillText(visibleWords, marginLeft, centerY - 40);

//     // When finished, move to Phase 2
//     if (state.currentWordCount === state.headlineWords.length) {
//       state.phase = 2;
//       state.boltzRevealStart = timestamp;
//     }
//   }

//   // PHASE 2: Smooth horizontal reveal of "Boltzmann Labs"
//   if (state.phase === 2 && state.boltzRevealStart) {
//     const elapsed = timestamp - state.boltzRevealStart;
//     const progress = Math.min(elapsed / 1500, 1);
//     state.boltzRevealProgress = progress;

//     const boltzText = "Boltzmann Labs";
//     ctx.font = 'bold 56px Arial Rounded MT Bold, Arial, sans-serif';
//     const totalWidth = ctx.measureText(boltzText).width;

//     // Clip effect for wipe reveal
//     ctx.save();
//     ctx.beginPath();
//     ctx.rect(marginLeft, centerY + 30, totalWidth * progress, 80);
//     ctx.clip();

//     // Split-color text
//     const boltzWidth = ctx.measureText('Boltzmann ').width;
//     ctx.fillStyle = '#3B82F6';
//     ctx.fillText('Boltzmann', marginLeft, centerY + 30);

//     ctx.fillStyle = '#9333EA';
//     ctx.fillText('Labs', marginLeft + boltzWidth, centerY + 30);

//     ctx.restore();
//   }

//   ctx.restore();
// };



//     const animate = (timestamp) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;
//       const deltaTime = timestamp - lastTimeRef.current;
//       if (deltaTime > frameInterval) {
//         lastTimeRef.current = timestamp - (deltaTime % frameInterval);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         const particles = particlesRef.current;

//         // Draw connections
//         for (let i = 0; i < particles.length; i++) {
//           for (let j = i + 1; j < particles.length; j++) {
//             const dx = particles[i].x - particles[j].x;
//             const dy = particles[i].y - particles[j].y;
//             const distSq = dx * dx + dy * dy;
//             if (distSq < 25600) {
//               drawConnection(particles[i], particles[j], Math.sqrt(distSq));
//             }
//           }
//         }

//         // Update and draw particles
//         for (let p of particles) {
//           p.x += p.vx;
//           p.y += p.vy;
//           if (p.x < -50) p.x = canvas.width + 50;
//           if (p.x > canvas.width + 50) p.x = -50;
//           if (p.y < -50) p.y = canvas.height + 50;
//           if (p.y > canvas.height + 50) p.y = -50;
//           drawParticle(p);
//         }

//         // Draw static text block inside canvas
//      drawTextBlock(timestamp);

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
//   }, [primaryColor, mouseOffset]);

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-black">
//       {/* Single fullscreen canvas with everything inside */}
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-screen h-screen"
//         style={{ zIndex: 0 }}
//       />
//     </div>
//   );
// };

// export default LifeScienceHero;



// import React, { useEffect, useRef } from 'react';
// import Footer from '../components/Footer.jsx';

// const LifeScienceHero = () => {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef();
//   const lastTimeRef = useRef(0);
//   const fps = 60;
//   const frameInterval = 1000 / fps;

//   // Brand color
//   const primaryColor = '#4F1985';

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // --- Handle resize
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initParticles();
//     };

//     // --- Particle initialization
//     const initParticles = () => {
//       const particles = [];
//       const count = Math.min(250, Math.floor((window.innerWidth * window.innerHeight) / 2500));
//       const colors = [
//         primaryColor,
//         '#875FC1',
//         '#A67CCF',
//         '#BFA1E6'
//       ];

//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.25,
//           vy: (Math.random() - 0.5) * 0.25,
//           size: 1.5 + Math.random() * 1.5,
//           opacity: 0.35 + Math.random() * 0.4,
//           color: colors[Math.floor(Math.random() * colors.length)],
//           angle: Math.random() * Math.PI * 2,
//           spin: (Math.random() - 0.5) * 0.01,
//           pulseSpeed: 0.005 + Math.random() * 0.01,
//           pulsePhase: Math.random() * Math.PI * 2
//         });
//       }
//       particlesRef.current = particles;
//     };

//     // --- Draw single particle
//     const drawParticle = (p) => {
//       ctx.beginPath();
//       const pulseSize = p.size * (0.85 + 0.15 * Math.sin(p.pulsePhase));
//       p.pulsePhase += p.pulseSpeed;
//       ctx.save();
//       ctx.translate(p.x, p.y);
//       ctx.rotate(p.angle);
//       ctx.globalAlpha = p.opacity;
//       ctx.fillStyle = p.color;
//       ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
//       ctx.shadowBlur = 6;
//       ctx.shadowColor = p.color;
//       ctx.fill();
//       ctx.restore();
//     };

//     // --- Draw connection
//     const drawConnection = (p1, p2, distance) => {
//       const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
//       gradient.addColorStop(0, p1.color);
//       gradient.addColorStop(1, p2.color);
//       ctx.beginPath();
//       ctx.moveTo(p1.x, p1.y);
//       ctx.lineTo(p2.x, p2.y);
//       ctx.strokeStyle = gradient;
//       ctx.globalAlpha = 0.15 * (1 - distance / 160);
//       ctx.lineWidth = 0.7;
//       ctx.stroke();
//     };

//     // --- Animation loop
//     const animate = (timestamp) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;
//       const deltaTime = timestamp - lastTimeRef.current;
//       if (deltaTime > frameInterval) {
//         lastTimeRef.current = timestamp - (deltaTime % frameInterval);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         const particles = particlesRef.current;

//         // Connections
//         for (let i = 0; i < particles.length; i++) {
//           const p1 = particles[i];
//           for (let j = i + 1; j < particles.length; j++) {
//             const p2 = particles[j];
//             const dx = p1.x - p2.x;
//             const dy = p1.y - p2.y;
//             const distanceSq = dx * dx + dy * dy;
//             if (distanceSq < 25600) { // 160^2
//               drawConnection(p1, p2, Math.sqrt(distanceSq));
//             }
//           }
//         }

//         // Move and draw
//         for (let i = 0; i < particles.length; i++) {
//           const p = particles[i];
//           p.x += p.vx;
//           p.y += p.vy;
//           if (p.x < -50) p.x = canvas.width + 50;
//           if (p.x > canvas.width + 50) p.x = -50;
//           if (p.y < -50) p.y = canvas.height + 50;
//           if (p.y > canvas.height + 50) p.y = -50;
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

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#2A0A46] via-[#3B0F60] to-[#4F1985]">
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
//         style={{ zIndex: 0 }}
//       />

//       <div className="relative z-10 flex flex-col items-center justify-center text-center w-screen h-screen px-4 animate-fadeIn">
//         <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//           Welcome to Boltzmann AI
//         </h1>
//         <p className="text-lg md:text-xl text-purple-100 max-w-2xl mb-8">
//           We accelerate life science discovery with cutting-edge AI solutions.
//         </p>
//         <div className="flex gap-4">
//           <button className="px-6 py-3 rounded-full bg-[#4F1985] hover:bg-[#6A28A0] text-white transition transform hover:scale-105">
//             Learn More
//           </button>
//           <button className="px-6 py-3 rounded-full border-2 border-[#A678CC] text-purple-100 hover:bg-[#A678CC]/30 transition transform hover:scale-105">
//             Our Products
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default LifeScienceHero;


// import React, { useEffect, useRef } from 'react';
// import Footer from '../components/Footer.jsx';

// const LifeScienceHero = () => {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef();
//   const lastTimeRef = useRef(0);
//   const fps = 60;
//   const frameInterval = 1000 / fps;

//   // Brand colors
//   const colors = [
//     '#4F1985', // Primary purple
//     '#6A28A0', // Secondary purple
//     '#8B5FBF', // Lighter purple
//   ];

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     // Set up high DPI canvas for sharp rendering
//     const dpr = window.devicePixelRatio || 1;
//     const ctx = canvas.getContext('2d');
    
//     const resizeCanvas = () => {
//       const width = window.innerWidth;
//       const height = window.innerHeight;
      
//       canvas.width = width * dpr;
//       canvas.height = height * dpr;
//       canvas.style.width = `${width}px`;
//       canvas.style.height = `${height}px`;
      
//       ctx.scale(dpr, dpr);
//       initParticles();
//     };

//     // Initialize particles
//     const initParticles = () => {
//       const particles = [];
//       const count = Math.min(300, Math.floor((window.innerWidth * window.innerHeight) / 2000));
      
//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * window.innerWidth,
//           y: Math.random() * window.innerHeight,
//           vx: (Math.random() - 0.5) * 0.3,
//           vy: (Math.random() - 0.5) * 0.3,
//           size: 1.2 + Math.random() * 0.8, // Smaller size for sharpness
//           color: colors[Math.floor(Math.random() * colors.length)],
//           angle: Math.random() * Math.PI * 2,
//           spin: (Math.random() - 0.5) * 0.01,
//           pulseSpeed: 0.005 + Math.random() * 0.01,
//           pulsePhase: Math.random() * Math.PI * 2
//         });
//       }
//       particlesRef.current = particles;
//     };

//     // Draw sharp particle
//     const drawParticle = (p) => {
//       const pulseSize = p.size * (0.9 + 0.1 * Math.sin(p.pulsePhase));
//       p.pulsePhase += p.pulseSpeed;
      
//       ctx.save();
//       ctx.translate(p.x, p.y);
//       ctx.rotate(p.angle);
      
//       // Draw solid particle without opacity
//       ctx.beginPath();
//       ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
//       ctx.fillStyle = p.color;
//       ctx.fill();
      
//       ctx.restore();
//     };

//     // Draw connection without gradient
//     const drawConnection = (p1, p2, distance) => {
//       ctx.beginPath();
//       ctx.moveTo(p1.x, p1.y);
//       ctx.lineTo(p2.x, p2.y);
      
//       // Use solid color for sharp lines
//       ctx.strokeStyle = '#6A28A0';
//       ctx.lineWidth = 0.8;
//       ctx.stroke();
//     };

//     // Animation loop
//     const animate = (timestamp) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;
//       const deltaTime = timestamp - lastTimeRef.current;
      
//       if (deltaTime > frameInterval) {
//         lastTimeRef.current = timestamp - (deltaTime % frameInterval);
        
//         // Clear canvas with solid color
//         ctx.fillStyle = '#2A0A46';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
        
//         const particles = particlesRef.current;

//         // Draw connections first
//         for (let i = 0; i < particles.length; i++) {
//           const p1 = particles[i];
//           for (let j = i + 1; j < particles.length; j++) {
//             const p2 = particles[j];
//             const dx = p1.x - p2.x;
//             const dy = p1.y - p2.y;
//             const distanceSq = dx * dx + dy * dy;
//             if (distanceSq < 22500) { // 150^2
//               drawConnection(p1, p2, Math.sqrt(distanceSq));
//             }
//           }
//         }

//         // Update and draw particles
//         for (let i = 0; i < particles.length; i++) {
//           const p = particles[i];
//           p.x += p.vx;
//           p.y += p.vy;
//           p.angle += p.spin;
          
//           // Boundary check
//           if (p.x < -20) p.x = window.innerWidth + 20;
//           if (p.x > window.innerWidth + 20) p.x = -20;
//           if (p.y < -20) p.y = window.innerHeight + 20;
//           if (p.y > window.innerHeight + 20) p.y = -20;
          
//           drawParticle(p);
//         }
//       }
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     resizeCanvas();
//     animationRef.current = requestAnimationFrame(animate);
    
//     const resizeObserver = new ResizeObserver(() => {
//       resizeCanvas();
//     });
//     resizeObserver.observe(document.body);

//     return () => {
//       cancelAnimationFrame(animationRef.current);
//       resizeObserver.disconnect();
//     };
//   }, []);

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#2A0A46] via-[#3B0F60] to-[#4F1985]">
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
//         style={{ zIndex: 0 }}
//       />

//       <div className="relative z-10 flex flex-col items-center justify-center text-center w-screen h-screen px-4">
//         <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//           Welcome to Boltzmann AI
//         </h1>
//         <p className="text-lg md:text-xl text-purple-100 max-w-2xl mb-8">
//           We accelerate life science discovery with cutting-edge AI solutions.
//         </p>
//         <div className="flex gap-4">
//           <button className="px-6 py-3 rounded-full bg-[#4F1985] hover:bg-[#6A28A0] text-white transition-all hover:scale-105 shadow-lg">
//             Learn More
//           </button>
//           <button className="px-6 py-3 rounded-full border-2 border-[#A678CC] text-purple-100 hover:bg-[#A678CC]/20 transition-all hover:scale-105">
//             Our Products
//           </button>
//         </div>
//       </div>

//       <Footer className="relative z-20" />
//     </div>
//   );
// };

// export default LifeScienceHero;

// import React, { useEffect, useRef } from 'react';

// const LifeScienceHero = () => {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef();
//   const lastTimeRef = useRef(0);
//   const fps = 60;
//   const frameInterval = 1000 / fps;

//   // Enhanced brand colors
//   const primaryColor = '#4F1985';

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // --- Handle resize
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initParticles();
//     };

//     // --- Particle initialization
//     const initParticles = () => {
//       const particles = [];
//       const count = Math.min(300, Math.floor((window.innerWidth * window.innerHeight) / 2200));
//       const colors = [
//         primaryColor,
//         '#875FC1',
//         '#A67CCF',
//         '#BFA1E6',
//         '#E6D5FF',
//         '#FF6B9D',
//         '#00D4FF'
//       ];

//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.3,
//           vy: (Math.random() - 0.5) * 0.3,
//           size: 1.2 + Math.random() * 2,
//           opacity: 0.25 + Math.random() * 0.5,
//           color: colors[Math.floor(Math.random() * colors.length)],
//           angle: Math.random() * Math.PI * 2,
//           spin: (Math.random() - 0.5) * 0.015,
//           pulseSpeed: 0.008 + Math.random() * 0.012,
//           pulsePhase: Math.random() * Math.PI * 2
//         });
//       }
//       particlesRef.current = particles;
//     };

//     // --- Draw single particle (no shadow to prevent white artifacts)
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
//       ctx.shadowBlur = 0; // Remove shadow
//       ctx.shadowColor = 'transparent';
//       ctx.fill();
//       ctx.restore();
//     };

//     // --- Draw connection (solid colors to prevent white lightning)
 
//     const drawConnection = (p1, p2, distance) => {
//       const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
//       gradient.addColorStop(0, p1.color);
//       gradient.addColorStop(1, p2.color);
//       ctx.beginPath();
//       ctx.moveTo(p1.x, p1.y);
//       ctx.lineTo(p2.x, p2.y);
//       ctx.strokeStyle = gradient;
//       ctx.globalAlpha = 0.2 * (1 - distance / 180);
//       ctx.lineWidth = 0.8;
//       ctx.stroke();
//     };
//    const drawAnimatedText = () => {
//       const visibleText = textToDisplay.slice(0, Math.floor(textRevealProgressRef.current));
//       ctx.save();
//       ctx.font = 'bold 56px Arial Rounded MT Bold, Arial, sans-serif';
//       ctx.fillStyle = 'white';
//       ctx.textBaseline = 'middle';
//       ctx.textAlign = 'left';
//       ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
//       ctx.shadowBlur = 8;
//       ctx.fillText(visibleText, 60, canvas.height / 2);
//       ctx.restore();
//     };
//     // --- Animation loop
//     const animate = (timestamp) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;
//       const deltaTime = timestamp - lastTimeRef.current;
//       if (deltaTime > frameInterval) {
//         lastTimeRef.current = timestamp - (deltaTime % frameInterval);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         const particles = particlesRef.current;

//         // Connections (fixed to prevent white lightning artifacts)
//         for (let i = 0; i < particles.length; i++) {
//           const p1 = particles[i];
//           for (let j = i + 1; j < particles.length; j++) {
//             const p2 = particles[j];
//             const dx = p1.x - p2.x;
//             const dy = p1.y - p2.y;
//             const distanceSq = dx * dx + dy * dy;
//             if (distanceSq < 25600) { // 160^2 - reduced connection distance
//               drawConnection(p1, p2, Math.sqrt(distanceSq));
//             }
//           }
//         }

//         // Move and draw
//         for (let i = 0; i < particles.length; i++) {
//           const p = particles[i];
//           p.x += p.vx;
//           p.y += p.vy;
//           if (p.x < -50) p.x = canvas.width + 50;
//           if (p.x > canvas.width + 50) p.x = -50;
//           if (p.y < -50) p.y = canvas.height + 50;
//           if (p.y > canvas.height + 50) p.y = -50;
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

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A0A2E] via-[#2A0A46] to-[#4F1985]">
//       {/* Enhanced background overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
//         style={{ zIndex: 0 }}
//       />

//       {/* Floating elements */}
//       <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl animate-pulse" />
//       <div className="absolute bottom-32 right-32 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-500/15 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
//       <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/25 to-purple-500/25 blur-lg animate-pulse" style={{ animationDelay: '2s' }} />

//       <div className="relative z-10 flex flex-col items-center justify-center text-center w-screen h-screen px-4">
//         {/* Main content with enhanced styling */}
//         <div className="max-w-5xl mx-auto space-y-8">
//           {/* Subtitle badge */}
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-purple-200 mb-6 animate-fadeIn">
//             <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2 animate-pulse"></span>
//             Revolutionary AI for Life Sciences
//           </div>

//           {/* Main heading with enhanced typography */}
//           <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300 mb-6 leading-tight animate-fadeIn">
//             Welcome to
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
//               Boltzmann AI
//             </span>
//           </h1>

//           {/* Enhanced description */}
//           <p className="text-xl md:text-2xl text-purple-100/90 max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeIn font-light">
//             We accelerate life science discovery with cutting-edge AI solutions that transform research, drug development, and biological insights.
//           </p>

//           {/* Enhanced buttons */}
//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeIn">
//             <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden">
//               <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//               <span className="relative flex items-center gap-2">
//                 Learn More
//                 <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </span>
//             </button>
            
//             <button className="group relative px-8 py-4 rounded-full border-2 border-purple-400/50 text-purple-100 font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-400/20 hover:border-purple-400 backdrop-blur-sm">
//               <span className="flex items-center gap-2">
//                 Our Products
//                 <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                 </svg>
//               </span>
//             </button>
//           </div>

//           {/* Stats or features section */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fadeIn">
//             <div className="text-center group">
//               <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">50+</div>
//               <div className="text-purple-200/80 text-sm uppercase tracking-wide">Research Partners</div>
//             </div>
//             <div className="text-center group">
//               <div className="text-4xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">10M+</div>
//               <div className="text-purple-200/80 text-sm uppercase tracking-wide">Data Points Analyzed</div>
//             </div>
//             <div className="text-center group">
//               <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">95%</div>
//               <div className="text-purple-200/80 text-sm uppercase tracking-wide">Accuracy Rate</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced footer */}
//       <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/50 to-transparent p-8">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-purple-200/60 text-sm">
//           <div className="mb-4 md:mb-0">
//             © 2024 Boltzmann AI. Pioneering the future of life sciences.
//           </div>
//           <div className="flex space-x-6">
//             <a href="#" className="hover:text-purple-300 transition-colors">Privacy</a>
//             <a href="#" className="hover:text-purple-300 transition-colors">Terms</a>
//             <a href="#" className="hover:text-purple-300 transition-colors">Contact</a>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 1s ease-out forwards;
//         }
        
//         .animate-fadeIn:nth-child(1) {
//           animation-delay: 0.2s;
//         }
        
//         .animate-fadeIn:nth-child(2) {
//           animation-delay: 0.4s;
//         }
        
//         .animate-fadeIn:nth-child(3) {
//           animation-delay: 0.6s;
//         }
        
//         .animate-fadeIn:nth-child(4) {
//           animation-delay: 0.8s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LifeScienceHero;


////////

// import React, { useEffect, useRef } from 'react';
// import Footer from '../components/Footer.jsx';

// const LifeScienceHero = () => {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef();
//   const lastTimeRef = useRef(0);
//   const fps = 60;
//   const frameInterval = 1000 / fps;

//   // Brand color
//   const primaryColor = '#4F1985';

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // --- Handle resize
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initParticles();
//     };

//     // --- Particle initialization
//     const initParticles = () => {
//       const particles = [];
//       const count = Math.min(250, Math.floor((window.innerWidth * window.innerHeight) / 2500));
//       const colors = [
//         primaryColor,
//         '#875FC1',
//         '#A67CCF',
//         '#BFA1E6'
//       ];

//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.25,
//           vy: (Math.random() - 0.5) * 0.25,
//           size: 1.5 + Math.random() * 1.5,
//           opacity: 0.35 + Math.random() * 0.4,
//           color: colors[Math.floor(Math.random() * colors.length)],
//           angle: Math.random() * Math.PI * 2,
//           spin: (Math.random() - 0.5) * 0.01,
//           pulseSpeed: 0.005 + Math.random() * 0.01,
//           pulsePhase: Math.random() * Math.PI * 2
//         });
//       }
//       particlesRef.current = particles;
//     };

//     // --- Draw single particle
//     const drawParticle = (p) => {
//       ctx.beginPath();
//       const pulseSize = p.size * (0.85 + 0.15 * Math.sin(p.pulsePhase));
//       p.pulsePhase += p.pulseSpeed;
//       ctx.save();
//       ctx.translate(p.x, p.y);
//       ctx.rotate(p.angle);
//       ctx.globalAlpha = p.opacity;
//       ctx.fillStyle = p.color;
//       ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
//       ctx.shadowBlur = 6;
//       ctx.shadowColor = p.color;
//       ctx.fill();
//       ctx.restore();
//     };

//     // --- Draw connection
//     const drawConnection = (p1, p2, distance) => {
//       const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
//       gradient.addColorStop(0, p1.color);
//       gradient.addColorStop(1, p2.color);
//       ctx.beginPath();
//       ctx.moveTo(p1.x, p1.y);
//       ctx.lineTo(p2.x, p2.y);
//       ctx.strokeStyle = gradient;
//       ctx.globalAlpha = 0.15 * (1 - distance / 160);
//       ctx.lineWidth = 0.7;
//       ctx.stroke();
//     };

//     // --- Animation loop
//     const animate = (timestamp) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;
//       const deltaTime = timestamp - lastTimeRef.current;
//       if (deltaTime > frameInterval) {
//         lastTimeRef.current = timestamp - (deltaTime % frameInterval);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         const particles = particlesRef.current;

//         // Connections
//         for (let i = 0; i < particles.length; i++) {
//           const p1 = particles[i];
//           for (let j = i + 1; j < particles.length; j++) {
//             const p2 = particles[j];
//             const dx = p1.x - p2.x;
//             const dy = p1.y - p2.y;
//             const distanceSq = dx * dx + dy * dy;
//             if (distanceSq < 25600) { // 160^2
//               drawConnection(p1, p2, Math.sqrt(distanceSq));
//             }
//           }
//         }

//         // Move and draw
//         for (let i = 0; i < particles.length; i++) {
//           const p = particles[i];
//           p.x += p.vx;
//           p.y += p.vy;
//           if (p.x < -50) p.x = canvas.width + 50;
//           if (p.x > canvas.width + 50) p.x = -50;
//           if (p.y < -50) p.y = canvas.height + 50;
//           if (p.y > canvas.height + 50) p.y = -50;
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

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#2A0A46] via-[#3B0F60] to-[#4F1985]">
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
//         style={{ zIndex: 0 }}
//       />

//       <div className="relative z-10 flex flex-col items-center justify-center text-center w-screen h-screen px-4 animate-fadeIn">
//         <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//           Welcome to Boltzmann AI
//         </h1>
//         <p className="text-lg md:text-xl text-purple-100 max-w-2xl mb-8">
//           We accelerate life science discovery with cutting-edge AI solutions.
//         </p>
//         <div className="flex gap-4">
//           <button className="px-6 py-3 rounded-full bg-[#4F1985] hover:bg-[#6A28A0] text-white transition transform hover:scale-105">
//             Learn More
//           </button>
//           <button className="px-6 py-3 rounded-full border-2 border-[#A678CC] text-purple-100 hover:bg-[#A678CC]/30 transition transform hover:scale-105">
//             Our Products
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default LifeScienceHero;


// import React, { useEffect, useRef } from 'react';
// import Footer from '../components/Footer.jsx';

// const LifeScienceHero = () => {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef();
//   const lastTimeRef = useRef(0);
//   const fps = 60;
//   const frameInterval = 1000 / fps;

//   // Brand colors
//   const colors = [
//     '#4F1985', // Primary purple
//     '#6A28A0', // Secondary purple
//     '#8B5FBF', // Lighter purple
//   ];

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     // Set up high DPI canvas for sharp rendering
//     const dpr = window.devicePixelRatio || 1;
//     const ctx = canvas.getContext('2d');
    
//     const resizeCanvas = () => {
//       const width = window.innerWidth;
//       const height = window.innerHeight;
      
//       canvas.width = width * dpr;
//       canvas.height = height * dpr;
//       canvas.style.width = `${width}px`;
//       canvas.style.height = `${height}px`;
      
//       ctx.scale(dpr, dpr);
//       initParticles();
//     };

//     // Initialize particles
//     const initParticles = () => {
//       const particles = [];
//       const count = Math.min(300, Math.floor((window.innerWidth * window.innerHeight) / 2000));
      
//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * window.innerWidth,
//           y: Math.random() * window.innerHeight,
//           vx: (Math.random() - 0.5) * 0.3,
//           vy: (Math.random() - 0.5) * 0.3,
//           size: 1.2 + Math.random() * 0.8, // Smaller size for sharpness
//           color: colors[Math.floor(Math.random() * colors.length)],
//           angle: Math.random() * Math.PI * 2,
//           spin: (Math.random() - 0.5) * 0.01,
//           pulseSpeed: 0.005 + Math.random() * 0.01,
//           pulsePhase: Math.random() * Math.PI * 2
//         });
//       }
//       particlesRef.current = particles;
//     };

//     // Draw sharp particle
//     const drawParticle = (p) => {
//       const pulseSize = p.size * (0.9 + 0.1 * Math.sin(p.pulsePhase));
//       p.pulsePhase += p.pulseSpeed;
      
//       ctx.save();
//       ctx.translate(p.x, p.y);
//       ctx.rotate(p.angle);
      
//       // Draw solid particle without opacity
//       ctx.beginPath();
//       ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
//       ctx.fillStyle = p.color;
//       ctx.fill();
      
//       ctx.restore();
//     };

//     // Draw connection without gradient
//     const drawConnection = (p1, p2, distance) => {
//       ctx.beginPath();
//       ctx.moveTo(p1.x, p1.y);
//       ctx.lineTo(p2.x, p2.y);
      
//       // Use solid color for sharp lines
//       ctx.strokeStyle = '#6A28A0';
//       ctx.lineWidth = 0.8;
//       ctx.stroke();
//     };

//     // Animation loop
//     const animate = (timestamp) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;
//       const deltaTime = timestamp - lastTimeRef.current;
      
//       if (deltaTime > frameInterval) {
//         lastTimeRef.current = timestamp - (deltaTime % frameInterval);
        
//         // Clear canvas with solid color
//         ctx.fillStyle = '#2A0A46';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
        
//         const particles = particlesRef.current;

//         // Draw connections first
//         for (let i = 0; i < particles.length; i++) {
//           const p1 = particles[i];
//           for (let j = i + 1; j < particles.length; j++) {
//             const p2 = particles[j];
//             const dx = p1.x - p2.x;
//             const dy = p1.y - p2.y;
//             const distanceSq = dx * dx + dy * dy;
//             if (distanceSq < 22500) { // 150^2
//               drawConnection(p1, p2, Math.sqrt(distanceSq));
//             }
//           }
//         }

//         // Update and draw particles
//         for (let i = 0; i < particles.length; i++) {
//           const p = particles[i];
//           p.x += p.vx;
//           p.y += p.vy;
//           p.angle += p.spin;
          
//           // Boundary check
//           if (p.x < -20) p.x = window.innerWidth + 20;
//           if (p.x > window.innerWidth + 20) p.x = -20;
//           if (p.y < -20) p.y = window.innerHeight + 20;
//           if (p.y > window.innerHeight + 20) p.y = -20;
          
//           drawParticle(p);
//         }
//       }
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     resizeCanvas();
//     animationRef.current = requestAnimationFrame(animate);
    
//     const resizeObserver = new ResizeObserver(() => {
//       resizeCanvas();
//     });
//     resizeObserver.observe(document.body);

//     return () => {
//       cancelAnimationFrame(animationRef.current);
//       resizeObserver.disconnect();
//     };
//   }, []);

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#2A0A46] via-[#3B0F60] to-[#4F1985]">
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
//         style={{ zIndex: 0 }}
//       />

//       <div className="relative z-10 flex flex-col items-center justify-center text-center w-screen h-screen px-4">
//         <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//           Welcome to Boltzmann AI
//         </h1>
//         <p className="text-lg md:text-xl text-purple-100 max-w-2xl mb-8">
//           We accelerate life science discovery with cutting-edge AI solutions.
//         </p>
//         <div className="flex gap-4">
//           <button className="px-6 py-3 rounded-full bg-[#4F1985] hover:bg-[#6A28A0] text-white transition-all hover:scale-105 shadow-lg">
//             Learn More
//           </button>
//           <button className="px-6 py-3 rounded-full border-2 border-[#A678CC] text-purple-100 hover:bg-[#A678CC]/20 transition-all hover:scale-105">
//             Our Products
//           </button>
//         </div>
//       </div>

//       <Footer className="relative z-20" />
//     </div>
//   );
// };

// export default LifeScienceHero;

// import React, { useEffect, useRef } from 'react';

// const LifeScienceHero = () => {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef();
//   const lastTimeRef = useRef(0);
//   const fps = 60;
//   const frameInterval = 1000 / fps;

//   // Enhanced brand colors
//   const primaryColor = '#4F1985';

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // --- Handle resize
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initParticles();
//     };

//     // --- Particle initialization
//     const initParticles = () => {
//       const particles = [];
//       const count = Math.min(300, Math.floor((window.innerWidth * window.innerHeight) / 2200));
//       const colors = [
//         primaryColor,
//         '#875FC1',
//         '#A67CCF',
//         '#BFA1E6',
//         '#E6D5FF',
//         '#FF6B9D',
//         '#00D4FF'
//       ];

//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.3,
//           vy: (Math.random() - 0.5) * 0.3,
//           size: 1.2 + Math.random() * 2,
//           opacity: 0.25 + Math.random() * 0.5,
//           color: colors[Math.floor(Math.random() * colors.length)],
//           angle: Math.random() * Math.PI * 2,
//           spin: (Math.random() - 0.5) * 0.015,
//           pulseSpeed: 0.008 + Math.random() * 0.012,
//           pulsePhase: Math.random() * Math.PI * 2
//         });
//       }
//       particlesRef.current = particles;
//     };

//     // --- Draw single particle (no shadow to prevent white artifacts)
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
//       ctx.shadowBlur = 0; // Remove shadow
//       ctx.shadowColor = 'transparent';
//       ctx.fill();
//       ctx.restore();
//     };

//     // --- Draw connection (solid colors to prevent white lightning)
 
//     const drawConnection = (p1, p2, distance) => {
//       const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
//       gradient.addColorStop(0, p1.color);
//       gradient.addColorStop(1, p2.color);
//       ctx.beginPath();
//       ctx.moveTo(p1.x, p1.y);
//       ctx.lineTo(p2.x, p2.y);
//       ctx.strokeStyle = gradient;
//       ctx.globalAlpha = 0.2 * (1 - distance / 180);
//       ctx.lineWidth = 0.8;
//       ctx.stroke();
//     };
//    const drawAnimatedText = () => {
//       const visibleText = textToDisplay.slice(0, Math.floor(textRevealProgressRef.current));
//       ctx.save();
//       ctx.font = 'bold 56px Arial Rounded MT Bold, Arial, sans-serif';
//       ctx.fillStyle = 'white';
//       ctx.textBaseline = 'middle';
//       ctx.textAlign = 'left';
//       ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
//       ctx.shadowBlur = 8;
//       ctx.fillText(visibleText, 60, canvas.height / 2);
//       ctx.restore();
//     };
//     // --- Animation loop
//     const animate = (timestamp) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;
//       const deltaTime = timestamp - lastTimeRef.current;
//       if (deltaTime > frameInterval) {
//         lastTimeRef.current = timestamp - (deltaTime % frameInterval);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         const particles = particlesRef.current;

//         // Connections (fixed to prevent white lightning artifacts)
//         for (let i = 0; i < particles.length; i++) {
//           const p1 = particles[i];
//           for (let j = i + 1; j < particles.length; j++) {
//             const p2 = particles[j];
//             const dx = p1.x - p2.x;
//             const dy = p1.y - p2.y;
//             const distanceSq = dx * dx + dy * dy;
//             if (distanceSq < 25600) { // 160^2 - reduced connection distance
//               drawConnection(p1, p2, Math.sqrt(distanceSq));
//             }
//           }
//         }

//         // Move and draw
//         for (let i = 0; i < particles.length; i++) {
//           const p = particles[i];
//           p.x += p.vx;
//           p.y += p.vy;
//           if (p.x < -50) p.x = canvas.width + 50;
//           if (p.x > canvas.width + 50) p.x = -50;
//           if (p.y < -50) p.y = canvas.height + 50;
//           if (p.y > canvas.height + 50) p.y = -50;
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

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A0A2E] via-[#2A0A46] to-[#4F1985]">
//       {/* Enhanced background overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
//         style={{ zIndex: 0 }}
//       />

//       {/* Floating elements */}
//       <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl animate-pulse" />
//       <div className="absolute bottom-32 right-32 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-500/15 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
//       <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/25 to-purple-500/25 blur-lg animate-pulse" style={{ animationDelay: '2s' }} />

//       <div className="relative z-10 flex flex-col items-center justify-center text-center w-screen h-screen px-4">
//         {/* Main content with enhanced styling */}
//         <div className="max-w-5xl mx-auto space-y-8">
//           {/* Subtitle badge */}
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-purple-200 mb-6 animate-fadeIn">
//             <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2 animate-pulse"></span>
//             Revolutionary AI for Life Sciences
//           </div>

//           {/* Main heading with enhanced typography */}
//           <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300 mb-6 leading-tight animate-fadeIn">
//             Welcome to
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
//               Boltzmann AI
//             </span>
//           </h1>

//           {/* Enhanced description */}
//           <p className="text-xl md:text-2xl text-purple-100/90 max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeIn font-light">
//             We accelerate life science discovery with cutting-edge AI solutions that transform research, drug development, and biological insights.
//           </p>

//           {/* Enhanced buttons */}
//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeIn">
//             <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden">
//               <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//               <span className="relative flex items-center gap-2">
//                 Learn More
//                 <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </span>
//             </button>
            
//             <button className="group relative px-8 py-4 rounded-full border-2 border-purple-400/50 text-purple-100 font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-400/20 hover:border-purple-400 backdrop-blur-sm">
//               <span className="flex items-center gap-2">
//                 Our Products
//                 <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                 </svg>
//               </span>
//             </button>
//           </div>

//           {/* Stats or features section */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fadeIn">
//             <div className="text-center group">
//               <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">50+</div>
//               <div className="text-purple-200/80 text-sm uppercase tracking-wide">Research Partners</div>
//             </div>
//             <div className="text-center group">
//               <div className="text-4xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">10M+</div>
//               <div className="text-purple-200/80 text-sm uppercase tracking-wide">Data Points Analyzed</div>
//             </div>
//             <div className="text-center group">
//               <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">95%</div>
//               <div className="text-purple-200/80 text-sm uppercase tracking-wide">Accuracy Rate</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced footer */}
//       <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/50 to-transparent p-8">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-purple-200/60 text-sm">
//           <div className="mb-4 md:mb-0">
//             © 2024 Boltzmann AI. Pioneering the future of life sciences.
//           </div>
//           <div className="flex space-x-6">
//             <a href="#" className="hover:text-purple-300 transition-colors">Privacy</a>
//             <a href="#" className="hover:text-purple-300 transition-colors">Terms</a>
//             <a href="#" className="hover:text-purple-300 transition-colors">Contact</a>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 1s ease-out forwards;
//         }
        
//         .animate-fadeIn:nth-child(1) {
//           animation-delay: 0.2s;
//         }
        
//         .animate-fadeIn:nth-child(2) {
//           animation-delay: 0.4s;
//         }
        
//         .animate-fadeIn:nth-child(3) {
//           animation-delay: 0.6s;
//         }
        
//         .animate-fadeIn:nth-child(4) {
//           animation-delay: 0.8s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LifeScienceHero;


//macbookcontent
// import React from 'react';

// const MacBookComponent = () => {
//   const styles = {
//     container: {
//       width: '400px',
//       height: '300px',
//       perspective: '1200px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     laptop: {
//       transformStyle: 'preserve-3d',
//       position: 'relative',
//  transform: 'rotateX(-20deg) rotateY(-30deg) rotateZ(10deg)',


//       animation: 'float 4s ease-in-out infinite',
//     },
//     lid: {
//       width: '350px',
//       height: '220px',
//       background: '#1d1d1f',
//       transformOrigin: 'bottom center',
//       borderRadius: '16px 16px 0 0',
//       transform: 'rotateX(-25deg)',
//       position: 'relative',
//       zIndex: 2,
//       boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
//       overflow: 'hidden',
//       border: '1px solid rgba(255,255,255,0.1)',
//       animation: 'openLid 2s ease-out forwards',
//     },
//     lidBack: {
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       background: '#1d1d1f',
//       borderRadius: '16px 16px 0 0',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       backfaceVisibility: 'visible',
//       transform: 'rotateX(180deg)',
//     },
//     appleLogo: {
//       width: '16px',
//       height: '16px',
//       background: 'rgba(255,255,255,0.8)',
//       WebkitMask: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'/%3E%3C/svg%3E") center/contain no-repeat`,
//       mask: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'/%3E%3C/svg%3E") center/contain no-repeat`,
//     },
//     screen: {
//       width: '100%',
//       height: '100%',
//       position: 'relative',
//       overflow: 'hidden',
//       background: '#000',
//     },
//     screenBezel: {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       border: '6px solid #0d0d0d',
//       borderRadius: '6px',
//       pointerEvents: 'none',
//       zIndex: 2,
//     },
//     notch: {
//       position: 'absolute',
//       top: 0,
//       left: '50%',
//       transform: 'translateX(-50%)',
//       width: '60px',
//       height: '12px',
//       background: '#0d0d0d',
//       borderRadius: '0 0 6px 6px',
//       zIndex: 3,
//     },
//     screenContent: {
//       width: '100%',
//       height: '100%',
//       background: '#fff',
//       display: 'flex',
//       flexDirection: 'column',
//       opacity: 0,
//       animation: 'fadeIn 1s ease 2s forwards',
//     },
//     browserHeader: {
//       height: '20px',
//       background: '#f5f5f7',
//       display: 'flex',
//       alignItems: 'center',
//       padding: '0 8px',
//       borderBottom: '1px solid #e1e1e3',
//     },
//     browserControls: {
//       display: 'flex',
//       gap: '4px',
//       marginRight: '8px',
//     },
//     controlBtn: {
//       width: '6px',
//       height: '6px',
//       borderRadius: '50%',
//     },
//     close: { background: '#ff5f56' },
//     minimize: { background: '#ffbd2e' },
//     maximize: { background: '#27c93f' },
//     searchBar: {
//       flex: 1,
//       height: '14px',
//       background: '#fff',
//       borderRadius: '3px',
//       border: '1px solid #d6d6d8',
//       display: 'flex',
//       alignItems: 'center',
//       padding: '0 6px',
//       fontSize: '6px',
//       color: '#555',
//     },
//     browserContent: {
//       flex: 1,
//       background: '#fff',
//       padding: '8px',
//       overflow: 'hidden',
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     dashboard: {
//       display: 'flex',
//       gap: '8px',
//       height: '100%',
//     },
//     sidebar: {
//       width: '60px',
//       background: '#f8f9fa',
//       borderRadius: '3px',
//       padding: '6px',
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '3px',
//     },
//     sidebarItem: {
//       padding: '4px',
//       borderRadius: '2px',
//       fontSize: '5px',
//       color: '#333',
//       cursor: 'pointer',
//       textAlign: 'center',
//     },
//     sidebarItemActive: {
//       background: '#e9f0ff',
//       color: '#0066ff',
//       fontWeight: '500',
//     },
//     mainContent: {
//       flex: 1,
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     contentHeader: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       marginBottom: '6px',
//       alignItems: 'center',
//     },
//     contentTitle: {
//       fontSize: '8px',
//       fontWeight: '600',
//       color: '#333',
//     },
//     contentControls: {
//       display: 'flex',
//       gap: '4px',
//     },
//     controlBtnSm: {
//       padding: '2px 4px',
//       background: '#f5f5f7',
//       border: '1px solid #d6d6d8',
//       borderRadius: '2px',
//       fontSize: '5px',
//       color: '#333',
//       cursor: 'pointer',
//     },
//     dataGrid: {
//       flex: 1,
//       background: '#fff',
//       border: '1px solid #e1e1e3',
//       borderRadius: '3px',
//       overflow: 'hidden',
//       fontSize: '6px',
//     },
//     gridHeader: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr 1fr 1fr',
//       background: '#f8f9fa',
//       padding: '4px 6px',
//       borderBottom: '1px solid #e1e1e3',
//       fontWeight: '600',
//       color: '#555',
//     },
//     gridRow: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr 1fr 1fr',
//       padding: '4px 6px',
//       borderBottom: '1px solid #f0f0f0',
//       color: '#333',
//     },
//     base: {
//       background: '#e8e8e8',
//       padding: '12px',
//       borderRadius: '0 0 16px 16px',
//       boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
//       transform: 'translateY(-4px)',
//       zIndex: 1,
//       position: 'relative',
//     },
//     keyboard: {
//       background: '#1a1a1a',
//       borderRadius: '6px',
//       padding: '8px',
//       display: 'grid',
//       gridTemplateColumns: 'repeat(15, 1fr)',
//       gap: '3px',
//       marginBottom: '8px',
//     },
//     key: {
//       background: '#333',
//       height: '12px',
//       borderRadius: '2px',
//       boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
//       border: '1px solid #555',
//     },
//     spacebar: {
//       gridColumn: 'span 7',
//     },
//     trackpad: {
//       width: '80px',
//       height: '50px',
//       background: '#ddd',
//       margin: '0 auto',
//       borderRadius: '6px',
//       boxShadow: 'inset 0 0 6px rgba(0,0,0,0.2)',
//       border: '1px solid #ccc',
//     },
//     glare: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.05), transparent)',
//       animation: 'glare 4s infinite linear',
//       pointerEvents: 'none',
//       zIndex: 1,
//     },
//   };

//   const keyframes = `
//     @keyframes float {
//       0%, 100% { transform: rotateX(-10deg) rotateY(15deg) translateY(0); }
//       50% { transform: rotateX(-8deg) rotateY(15deg) translateY(-8px); }
//     }
//     @keyframes openLid {
//       0% { transform: rotateX(-180deg); }
//       100% { transform: rotateX(-25deg); }
//     }
//     @keyframes fadeIn {
//       to { opacity: 1; }
//     }
//     @keyframes glare {
//       from { transform: translateX(-100%) rotate(-20deg); }
//       to { transform: translateX(200%) rotate(-20deg); }
//     }
//   `;

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: keyframes }} />
//       <div style={styles.container}>
//         <div style={styles.laptop}>
//           <div style={styles.lid}>
//             <div style={styles.lidBack}>
//               <div style={styles.appleLogo}></div>
//             </div>
//             <div style={styles.screen}>
//               <div style={styles.screenBezel}></div>
//               <div style={styles.notch}></div>
//               <div style={styles.screenContent}>
//                 <div style={styles.browserHeader}>
//                   <div style={styles.browserControls}>
//                     <div style={{...styles.controlBtn, ...styles.close}}></div>
//                     <div style={{...styles.controlBtn, ...styles.minimize}}></div>
//                     <div style={{...styles.controlBtn, ...styles.maximize}}></div>
//                   </div>
//                   <div style={styles.searchBar}>app.example.com</div>
//                 </div>
//                 <div style={styles.browserContent}>
//                   <div style={styles.dashboard}>
//                     <div style={styles.sidebar}>
//                       <div style={{...styles.sidebarItem, ...styles.sidebarItemActive}}>Home</div>
//                       <div style={styles.sidebarItem}>Data</div>
//                       <div style={styles.sidebarItem}>Stats</div>
//                       <div style={styles.sidebarItem}>Settings</div>
//                     </div>
//                     <div style={styles.mainContent}>
//                       <div style={styles.contentHeader}>
//                         <div style={styles.contentTitle}>Dashboard</div>
//                         <div style={styles.contentControls}>
//                           <button style={styles.controlBtnSm}>Export</button>
//                           <button style={styles.controlBtnSm}>Filter</button>
//                         </div>
//                       </div>
//                       <div style={styles.dataGrid}>
//                         <div style={styles.gridHeader}>
//                           <div>Metric</div>
//                           <div>Current</div>
//                           <div>Target</div>
//                           <div>Status</div>
//                         </div>
//                         <div style={styles.gridRow}>
//                           <div>Revenue</div>
//                           <div>$1.2M</div>
//                           <div>$1.1M</div>
//                           <div>+9%</div>
//                         </div>
//                         <div style={styles.gridRow}>
//                           <div>Users</div>
//                           <div>24.8K</div>
//                           <div>22.5K</div>
//                           <div>+10%</div>
//                         </div>
//                         <div style={{...styles.gridRow, borderBottom: 'none'}}>
//                           <div>Conv.</div>
//                           <div>3.2%</div>
//                           <div>3.0%</div>
//                           <div>+7%</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div style={styles.glare}></div>
//           </div>
//           <div style={styles.base}>
//             <div style={styles.keyboard}>
//               {/* Row 1 - Function keys */}
//               {Array.from({ length: 15 }, (_, i) => (
//                 <div key={`row1-${i}`} style={styles.key}></div>
//               ))}
              
//               {/* Row 2 - Numbers */}
//               {Array.from({ length: 15 }, (_, i) => (
//                 <div key={`row2-${i}`} style={styles.key}></div>
//               ))}
              
//               {/* Row 3 - QWERTY */}
//               {Array.from({ length: 15 }, (_, i) => (
//                 <div key={`row3-${i}`} style={styles.key}></div>
//               ))}
              
//               {/* Row 4 - ASDF */}
//               {Array.from({ length: 15 }, (_, i) => (
//                 <div key={`row4-${i}`} style={styles.key}></div>
//               ))}
              
//               {/* Row 5 - ZXCV with spacebar */}
//               {Array.from({ length: 4 }, (_, i) => (
//                 <div key={`row5-${i}`} style={styles.key}></div>
//               ))}
//               <div style={{...styles.key, ...styles.spacebar}}></div>
//               {Array.from({ length: 4 }, (_, i) => (
//                 <div key={`row5-end-${i}`} style={styles.key}></div>
//               ))}
//             </div>
//             <div style={styles.trackpad}></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MacBookComponent;

{/*modules*/}
// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence, useTransform, useScroll, useSpring } from 'framer-motion';
// import styled from 'styled-components';

// const Container = styled.div`
//   width: 100%;
//   padding: 2rem 0.3rem;

//   position: relative;
//   overflow: hidden;
//   isolation: isolate;
// `;

// const GradientBackground = styled.div`
//   position: absolute;
//   inset: 0;
 
//   z-index: -2;
// `;

// const FloatingElements = styled.div`
//   position: absolute;
//   inset: 0;
//   overflow: hidden;
//   z-index: -1;
// `;

// const FloatingCircle = styled(motion.div)`
//   position: absolute;
//   border-radius: 50%;
//   filter: blur(80px);
//   opacity: 0.12;
// `;

// const ContentWrapper = styled.div`
//   max-width: 1440px;
//   margin: 0 auto;
// `;

// const Header = styled.div`
//   text-align: center;
//   margin-bottom: 6rem;
//   max-width: 800px;
//   margin-left: auto;
//   margin-right: auto;
// `;

// const Title = styled(motion.h2)`
//   font-size: clamp(2.5rem, 5vw, 4rem);
//   font-weight: 700;
//   margin-bottom: 1.5rem;
//   background: linear-gradient(90deg, #0a0a0a 0%, #3b3b3b 100%);
//   -webkit-background-clip: text;
//   background-clip: text;
//   color: transparent;
//   line-height: 1.2;
//   letter-spacing: -0.03em;
// `;

// const Subtitle = styled(motion.p)`
//   font-size: 1.25rem;
//   color: #6b7280;
//   line-height: 1.6;
// `;

// const Card = styled(motion.div)`
//   background: rgba(255, 255, 255, 0.96);
//   border-radius: 2rem;
//   overflow: hidden;
//   box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
//   backdrop-filter: blur(20px);
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   position: relative;
// `;

// const TabBar = styled.div`
//   display: flex;
//   background: rgba(248, 249, 255, 0.7);
//   border-bottom: 1px solid rgba(0, 0, 0, 0.05);
//   position: relative;
// `;

// const TabIndicator = styled(motion.div)`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   height: 3px;
//   background: linear-gradient(90deg, #0D47A1, #1976D2);
//   border-radius: 3px 3px 0 0;
// `;

// const Tab = styled.button`
//   flex: 1;
//   padding: 1.5rem 2rem;
//   font-size: 1.1rem;
//   font-weight: 600;
//   color: ${props => props.$active ? '#0D47A1' : '#6b7280'};
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   transition: color 0.3s cubic-bezier(0.16, 1, 0.3, 1);
//   position: relative;
//   outline: none;
  
//   &:hover {
//     color: ${props => props.$active ? '#0D47A1' : '#4b5563'};
//   }
// `;

// const ContentArea = styled.div`
//   display: flex;
//   min-height: 500px;
//   position: relative;
  
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const TextContent = styled(motion.div)`
//   flex: 1;
//   padding: 4rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
  
//   @media (max-width: 768px) {
//     padding: 2rem;
//     order: 2;
//   }
// `;

// const Description = styled(motion.p)`
//   font-size: 1.25rem;
//   line-height: 1.8;
//   color: #374151;
//   margin-bottom: 2.5rem;
//   font-weight: 400;
// `;

// const Button = styled(motion.button)`
//   align-self: flex-start;
//   padding: 1rem 2rem;
//   background: linear-gradient(90deg, #0D47A1, #1976D2);
//   color: white;
//   border: none;
//   border-radius: 50px;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
//   box-shadow: 0 4px 20px rgba(13, 71, 161, 0.2);
//   outline: none;
//   position: relative;
//   overflow: hidden;
  
//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(90deg, #1976D2, #0D47A1);
//     opacity: 0;
//     transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
//   }
  
//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 8px 25px rgba(13, 71, 161, 0.3);
    
//     &::after {
//       opacity: 1;
//     }
//   }
  
//   span {
//     position: relative;
//     z-index: 1;
//   }
// `;

// const ImageContainer = styled(motion.div)`
//   flex: 1;
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem;
  
//   @media (max-width: 768px) {
//     padding: 2rem;
//     order: 1;
//   }
// `;

// const Image = styled(motion.img)`
//   width: 100%;
//   max-width: 600px;
//   border-radius: 1rem;
//   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
//   object-fit: cover;
// `;

// const modules = [
//   {
//     name: "Bioresearch",
//     description: "Experience breakthrough efficiency with our purpose-built research interface. Advanced AI-driven insights and collaborative tools accelerate discovery while maintaining rigorous scientific standards.",
//     imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     name: "Bioprocess",
//     description: "Optimize every stage from small-scale experiments to full production. Our intelligent workflows adapt to your processes while ensuring compliance and full traceability across all operations.",
//     imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360e9a9e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     name: "In Vivo",
//     description: "Precision management for complex in vivo studies. Our platform reduces administrative overhead by 60% while providing unparalleled data integrity and audit capabilities.",
//     imageUrl: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     name: "Connect",
//     description: "Seamlessly integrate teams and data across your organization. Our secure, scalable infrastructure breaks down silos and enables real-time, data-driven decision making at every level.",
//     imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// const circleVariants = {
//   initial: {
//     scale: 0.8,
//     opacity: 0,
//   },
//   animate: (i) => ({
//     scale: 1,
//     opacity: 0.12,
//     transition: {
//       delay: i * 0.2,
//       duration: 1.5,
//       ease: [0.16, 1, 0.3, 1],
//     }
//   })
// };

// const titleVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: { 
//     opacity: 1, 
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1]
//     }
//   }
// };

// const subtitleVariants = {
//   initial: { opacity: 0, y: 10 },
//   animate: { 
//     opacity: 1, 
//     y: 0,
//     transition: {
//       delay: 0.2,
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1]
//     }
//   }
// };

// const cardVariants = {
//   initial: { opacity: 0, y: 30 },
//   animate: { 
//     opacity: 1, 
//     y: 0,
//     transition: {
//       delay: 0.4,
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1]
//     }
//   }
// };

// const textVariants = {
//   enter: { opacity: 0, x: -20 },
//   center: { 
//     opacity: 1, 
//     x: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1]
//     }
//   },
//   exit: { opacity: 0, x: 20 }
// };

// const imageVariants = {
//   enter: { opacity: 0, x: 20, scale: 0.95 },
//   center: { 
//     opacity: 1, 
//     x: 0,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1]
//     }
//   },
//   exit: { opacity: 0, x: -20, scale: 0.95 }
// };

// export default function PremiumModuleExplorer() {
//   const [selected, setSelected] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const tabRefs = useRef([]);
//   const contentRef = useRef();
  
//   const { scrollYProgress } = useScroll({
//     target: contentRef,
//     offset: ["start end", "end start"]
//   });
  
//   const y = useSpring(
//     useTransform(scrollYProgress, [0, 1], [-50, 50]),
//     { stiffness: 300, damping: 30 }
//   );

//   const handleTabClick = (index) => {
//     setDirection(index > selected ? 1 : -1);
//     setSelected(index);
//   };

//   useEffect(() => {
//     tabRefs.current = tabRefs.current.slice(0, modules.length);
//   }, []);

//   return (
//     <Container ref={contentRef}>
//       <GradientBackground />
      
//       <FloatingElements>
//         <FloatingCircle
//           custom={0}
//           variants={circleVariants}
//           initial="initial"
//           animate="animate"
//           style={{
//             width: '600px',
//             height: '600px',
//             background: 'linear-gradient(135deg, #0D47A1, #1976D2)',
//             top: '10%',
//             left: '10%'
//           }}
//         />
//         <FloatingCircle
//           custom={1}
//           variants={circleVariants}
//           initial="initial"
//           animate="animate"
//           style={{
//             width: '800px',
//             height: '800px',
//             background: 'linear-gradient(135deg, #4CAF50, #8BC34A)',
//             bottom: '-20%',
//             right: '10%'
//           }}
//         />
//       </FloatingElements>
      
//       <ContentWrapper>
//         <Header>
//           <Title variants={titleVariants} initial="initial" animate="animate">
//             Discover Our Platform
//           </Title>
//           <Subtitle variants={subtitleVariants} initial="initial" animate="animate">
//             Comprehensive solutions designed for modern scientific teams, from discovery through development
//           </Subtitle>
//         </Header>
        
//         <Card variants={cardVariants} initial="initial" animate="animate">
//           <TabBar>
//             {modules.map((module, index) => (
//               <Tab
//                 key={index}
//                 ref={el => tabRefs.current[index] = el}
//                 $active={selected === index}
//                 onClick={() => handleTabClick(index)}
//               >
//                 {module.name}
//               </Tab>
//             ))}
//             <TabIndicator
//               layoutId="tabIndicator"
//               initial={false}
//               transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//               style={{
//                 width: tabRefs.current[selected]?.offsetWidth || 0,
//                 left: tabRefs.current[selected]?.offsetLeft || 0
//               }}
//             />
//           </TabBar>
          
//           <ContentArea>
//             <TextContent>
//               <AnimatePresence custom={direction} mode="wait">
//                 <Description
//                   key={selected}
//                   custom={direction}
//                   variants={textVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                 >
//                   {modules[selected].description}
//                 </Description>
//               </AnimatePresence>
              
//               <Button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span>Learn more</span>
//               </Button>
//             </TextContent>
            
//             <ImageContainer>
//               <AnimatePresence custom={direction} mode="wait">
//                 <Image
//                   key={selected}
//                   custom={direction}
//                   variants={imageVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   src={modules[selected].imageUrl}
//                   alt={modules[selected].name}
//                   style={{ y }}
//                 />
//               </AnimatePresence>
//             </ImageContainer>
//           </ContentArea>
//         </Card>
//       </ContentWrapper>
//     </Container>
//   );
// }
// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence, useTransform, useScroll, useSpring } from 'framer-motion';
// import styled, { css } from 'styled-components';

// const Container = styled.section`
//   width: 100%;
//   padding: 10rem 2rem;
//   position: relative;
//   overflow: hidden;
//   isolation: isolate;
//   background: #fcfcfc;
// `;

// const ContentWrapper = styled.div`
//   max-width: 1440px;
//   margin: 0 auto;
//   position: relative;
// `;

// const Header = styled.div`
//   text-align: center;
//   margin-bottom: 6rem;
//   max-width: 800px;
//   margin-left: auto;
//   margin-right: auto;
// `;

// const Title = styled(motion.h2)`
//   font-size: clamp(2.5rem, 5vw, 3.5rem);
//   font-weight: 700;
//   margin-bottom: 1.5rem;
//   color: #111;
//   line-height: 1.2;
//   letter-spacing: -0.03em;
// `;

// const Subtitle = styled(motion.p)`
//   font-size: 1.25rem;
//   color: #666;
//   line-height: 1.6;
//   font-weight: 400;
// `;

// const Card = styled(motion.div)`
//   background: #fff;
//   border-radius: 2rem;
//   overflow: hidden;
//   box-shadow: 0 12px 48px rgba(0, 0, 0, 0.06);
//   border: 1px solid rgba(0, 0, 0, 0.03);
//   position: relative;
// `;

// const TabBar = styled.div`
//   display: flex;
//   background: #f8f8f8;
//   position: relative;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.05);
// `;

// const TabIndicator = styled(motion.div)`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   height: 3px;
//   background: #111;
//   border-radius: 3px 3px 0 0;
// `;

// const Tab = styled.button`
//   flex: 1;
//   padding: 1.5rem 2rem;
//   font-size: 1.1rem;
//   font-weight: 500;
//   color: ${props => props.$active ? '#111' : '#888'};
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
//   position: relative;
//   outline: none;
  
//   &:hover {
//     color: #111;
//     background: rgba(0, 0, 0, 0.02);
//   }
// `;

// const ContentArea = styled.div`
//   display: flex;
//   min-height: 500px;
//   position: relative;
  
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const TextContent = styled(motion.div)`
//   flex: 1;
//   padding: 4rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
  
//   @media (max-width: 768px) {
//     padding: 2rem;
//     order: 2;
//   }
// `;

// const Description = styled(motion.p)`
//   font-size: 1.25rem;
//   line-height: 1.8;
//   color: #444;
//   margin-bottom: 2.5rem;
//   font-weight: 400;
// `;

// const Button = styled(motion.button)`
//   align-self: flex-start;
//   padding: 1rem 2rem;
//   background: #111;
//   color: white;
//   border: none;
//   border-radius: 50px;
//   font-size: 1rem;
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//   outline: none;
//   position: relative;
//   overflow: hidden;
  
//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
//     background: #222;
//   }
  
//   &:active {
//     transform: translateY(0);
//   }
// `;

// const ImageContainer = styled(motion.div)`
//   flex: 1;
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem;
  
//   @media (max-width: 768px) {
//     padding: 2rem;
//     order: 1;
//   }
// `;

// const Image = styled(motion.img)`
//   width: 100%;
//   max-width: 600px;
//   border-radius: 1rem;
//   box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
//   object-fit: cover;
// `;

// const modules = [
//   {
//     name: "Bioresearch",
//     description: "Experience breakthrough efficiency with our purpose-built research interface. Advanced AI-driven insights and collaborative tools accelerate discovery while maintaining rigorous scientific standards.",
//     imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     name: "Bioprocess",
//     description: "Optimize every stage from small-scale experiments to full production. Our intelligent workflows adapt to your processes while ensuring compliance and full traceability across all operations.",
//     imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360e9a9e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     name: "In Vivo",
//     description: "Precision management for complex in vivo studies. Our platform reduces administrative overhead by 60% while providing unparalleled data integrity and audit capabilities.",
//     imageUrl: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     name: "Connect",
//     description: "Seamlessly integrate teams and data across your organization. Our secure, scalable infrastructure breaks down silos and enables real-time, data-driven decision making at every level.",
//     imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// const titleVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: { 
//     opacity: 1, 
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1]
//     }
//   }
// };

// const subtitleVariants = {
//   initial: { opacity: 0, y: 10 },
//   animate: { 
//     opacity: 1, 
//     y: 0,
//     transition: {
//       delay: 0.2,
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1]
//     }
//   }
// };

// const cardVariants = {
//   initial: { opacity: 0, y: 30 },
//   animate: { 
//     opacity: 1, 
//     y: 0,
//     transition: {
//       delay: 0.4,
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1]
//     }
//   }
// };

// const textVariants = {
//   enter: { opacity: 0, x: -20 },
//   center: { 
//     opacity: 1, 
//     x: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1]
//     }
//   },
//   exit: { opacity: 0, x: 20 }
// };

// const imageVariants = {
//   enter: { opacity: 0, x: 20, scale: 0.95 },
//   center: { 
//     opacity: 1, 
//     x: 0,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1]
//     }
//   },
//   exit: { opacity: 0, x: -20, scale: 0.95 }
// };

// export default function PremiumModuleExplorer() {
//   const [selected, setSelected] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const tabRefs = useRef([]);
//   const contentRef = useRef();
  
//   const { scrollYProgress } = useScroll({
//     target: contentRef,
//     offset: ["start end", "end start"]
//   });
  
//   const y = useSpring(
//     useTransform(scrollYProgress, [0, 1], [-30, 30]),
//     { stiffness: 300, damping: 30 }
//   );

//   const handleTabClick = (index) => {
//     setDirection(index > selected ? 1 : -1);
//     setSelected(index);
//   };

//   useEffect(() => {
//     tabRefs.current = tabRefs.current.slice(0, modules.length);
//   }, []);

//   return (
//     <Container ref={contentRef}>
//       <ContentWrapper>
//         <Header>
//           <Title variants={titleVariants} initial="initial" animate="animate">
//             Explore Our Solutions
//           </Title>
//           <Subtitle variants={subtitleVariants} initial="initial" animate="animate">
//             Comprehensive tools designed for modern scientific teams, from discovery to development
//           </Subtitle>
//         </Header>
        
//         <Card variants={cardVariants} initial="initial" animate="animate">
//           <TabBar>
//             {modules.map((module, index) => (
//               <Tab
//                 key={index}
//                 ref={el => tabRefs.current[index] = el}
//                 $active={selected === index}
//                 onClick={() => handleTabClick(index)}
//               >
//                 {module.name}
//               </Tab>
//             ))}
//             <TabIndicator
//               layoutId="tabIndicator"
//               initial={false}
//               transition={{ type: 'spring', stiffness: 400, damping: 30 }}
//               style={{
//                 width: tabRefs.current[selected]?.offsetWidth || 0,
//                 left: tabRefs.current[selected]?.offsetLeft || 0
//               }}
//             />
//           </TabBar>
          
//           <ContentArea>
//             <TextContent>
//               <AnimatePresence custom={direction} mode="wait">
//                 <Description
//                   key={selected}
//                   custom={direction}
//                   variants={textVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                 >
//                   {modules[selected].description}
//                 </Description>
//               </AnimatePresence>
              
//               <Button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 Learn more
//               </Button>
//             </TextContent>
            
//             <ImageContainer>
//               <AnimatePresence custom={direction} mode="wait">
//                 <Image
//                   key={selected}
//                   custom={direction}
//                   variants={imageVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   src={modules[selected].imageUrl}
//                   alt={modules[selected].name}
//                   style={{ y }}
//                 />
//               </AnimatePresence>
//             </ImageContainer>
//           </ContentArea>
//         </Card>
//       </ContentWrapper>
//     </Container>
//   );
// }

//Blogs
// import React, { useState, useEffect } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import Footer from '../components/Footer';
// import boltzBuzzLogo from '../assets/boltz_buzz_logo.png';

// export default function BlogsPage() {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Simulated blog data
//   const blogs = Array.from({ length: 45 }, (_, i) => ({
//     id: i + 1,
//     title: `Proteins are essential for life #${i + 1}`,
//     author: 'Surya',
//     date: '30-6-2025',
//     image: 'https://via.placeholder.com/300x180?text=Image'
//   }));

//   const blogsPerPage = 15;

//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialPage = parseInt(searchParams.get('page') || '1', 10);
//   const [currentPage, setCurrentPage] = useState(initialPage);

//   useEffect(() => {
//     setSearchParams({ page: currentPage });
//   }, [currentPage, setSearchParams]);

//   const filteredBlogs = blogs.filter(blog =>
//     blog.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / blogsPerPage));
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

//   return (
//     <div style={{ fontFamily: "'Inter', sans-serif", }}>
//       <header style={{ textAlign: 'center', marginBottom: '40px', position: 'relative' }}>
//         <h1 style={{ fontSize: '32px', color: '#3b82f6', fontWeight: '800' }}>
//           Insights & Discoveries from AI Research
//         </h1>
//         <p style={{ fontSize: '18px', color: '#374151' }}>
//           Stay updated with the latest breakthroughs
//         </p>
//       </header>

//       <section style={{ textAlign: 'center', marginBottom: '32px' }}>
//         <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#3b82f6' }}>
//           Blogs
//         </h2>
//       </section>

//       <div style={{
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'flex-end',
//   maxWidth: '1200px',
//   margin: '0 auto 32px',
//   padding: '0 16px'
// }}>
//   {/* Search Bar */}
//   <div style={{
//     display: 'flex',
//     alignItems: 'center',
//     borderRadius: '999px',
//     border: '1px solid #d1d5db',
//     backgroundColor: '#f9fafb',
//     padding: '8px 20px',
//     width: '320px',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
//     transition: 'box-shadow 0.2s ease'
//   }}>
//     <span style={{ marginRight: '10px', color: '#9ca3af', fontSize: '16px' }}>🔍</span>
//     <input
//       type="text"
//       placeholder="Search blogs..."
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       style={{
//         border: 'none',
//         outline: 'none',
//         flex: 1,
//         fontSize: '14px',
//         backgroundColor: 'transparent'
//       }}
//     />
//   </div>

//   {/* No Results Section */}
//   {filteredBlogs.length === 0 && (
//     <section
//       style={{
//         marginTop: '24px',
//         width: '100%',
//         maxWidth: '700px',
//         background: 'linear-gradient(135deg, #f9f5ff, #f3e8ff)',
//         padding: '40px 24px',
//         textAlign: 'center',
//         borderRadius: '20px',
//         boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         marginInline: 'auto'
//       }}
//     >
//       <div style={{
//         fontSize: '48px',
//         color: '#a855f7',
//         marginBottom: '16px'
//       }}>😕</div>
//       <h3 style={{
//         fontSize: '24px',
//         fontWeight: '700',
//         color: '#4c1d95',
//         marginBottom: '12px'
//       }}>
//         No Results Found
//       </h3>
//       <p style={{
//         fontSize: '16px',
//         color: '#4b5563',
//         maxWidth: '500px',
//         lineHeight: '1.6'
//       }}>
//         We couldn't find any blogs matching <strong>"{searchTerm}"</strong>. 
//         Try refining your search or exploring other topics.
//       </p>
//     </section>
//   )}
// </div>


//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
//         gap: '24px',
//         maxWidth: '1200px',
//         margin: '0 auto'
//       }}>
//         {currentBlogs.map(blog => (
//           <Link
//             key={blog.id}
//             to={`/blogs/${blog.id}?page=${currentPage}`}
//             style={{
//               textDecoration: 'none',
//               color: 'inherit',
//               background: '#f9fafb',
//               borderRadius: '16px',
//               overflow: 'hidden',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between',
//               paddingBottom: '16px'
//             }}
//           >
//             <div style={{
//               width: '100%',
//               height: '180px',
//               backgroundImage: `url(${blog.image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}></div>

//             <div style={{ padding: '16px' }}>
//               <p style={{ fontSize: '14px', marginBottom: '12px' }}>
//                 {blog.title}
//               </p>
//               <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 fontSize: '12px',
//                 color: '#6b7280'
//               }}>
//                 <span>👤 {blog.author}</span>
//                 <span>📅 {blog.date}</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div style={{
//         marginTop: '40px',
//         maxWidth: '1200px',
//         marginInline: 'auto',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexWrap: 'wrap'
//       }}>
//         {/* Previous Button on left (only if not on first page) */}
//         {currentPage > 1 ? (
//           <button
//             onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//             style={{
//                   padding: '10px 20px',
//               borderRadius: '999px',
//               border: 'none',
//               background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
//               color: '#fff',
//               fontSize: '14px',
//               cursor: 'pointer',
//               boxShadow: '0 4px 8px rgba(99,102,241,0.2)',
//               transition: 'background 0.3s ease'
//             }}
//           >
//             Previous
//           </button>
//         ) : <div></div>}

//         {/* Next Button on right (only if not on last page) */}
//         {currentPage < totalPages ? (
//           <button
//             onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//             style={{
//                   padding: '10px 20px',
//               borderRadius: '999px',
//               border: 'none',
//               background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
//               color: '#fff',
//               fontSize: '14px',
//               cursor: 'pointer',
//               boxShadow: '0 4px 8px rgba(99,102,241,0.2)',
//               transition: 'background 0.3s ease'
//             }}
//           >
//             Next
//           </button>
//         ) : <div></div>}
//       </div>

//       {/* CTA Banner */}
//      <section
//   style={{
//     margin: '80px auto',
//     background: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
//     padding: '0',
//     borderRadius: '24px',
//     maxWidth: '740px',
//     boxShadow: '0 12px 24px rgba(0, 0, 0, 0.05)',
//     overflow: 'hidden',
//     position: 'relative',
//     border: '2px dotted rgba(167, 139, 250, 0.3)',
//   }}
// >
//   {/* Flex Container */}
//   <div
//     style={{
//       display: 'flex',
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       position: 'relative',
//       zIndex: 1,
//       minHeight: '300px',
//     }}
//   >
//     {/* Image Side */}
//     <div
//       style={{
//         flex: '1 1 300px',
//         minWidth: '280px',
//         position: 'relative',
//         overflow: 'hidden',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '20px',
//       }}
//     >
//       <div
//         style={{
//           width: '100%',
//           height: '100%',
//           background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)',
//           borderRadius: '16px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           border: '3px solid white',
//           boxShadow: 'inset 0 0 20px rgba(255,255,255,0.5)',
//         }}
//       >
//         <img
//           src={boltzBuzzLogo}
//           alt="Boltz Buzz Logo"
//           style={{
//             width: '80%',
//             height: 'auto',
//             objectFit: 'contain',
//             display: 'block',
//             filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
//           }}
//         />
//       </div>
//     </div>

//     {/* Text Side */}
//     <div
//       style={{
//         flex: '1 1 300px',
//         minWidth: '280px',
//         padding: '40px 40px 40px 50px', // Increased left padding to move text right
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         background: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
//         textAlign: 'left',
//         position: 'relative',
//       }}
//     >
//       <h3
//         style={{
//           fontSize: '28px',
//           fontWeight: '800',
//           color: '#6d28d9',
//           marginBottom: '16px',
//           lineHeight: '1.2',
//           letterSpacing: '-0.5px',
//           fontFamily: "'Comic Sans MS', cursive, sans-serif",
//           textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
//           position: 'relative',
//           display: 'inline-block',
//         }}
//       >
//         Want More Insights?
//       </h3>
//       <p
//         style={{
//           fontSize: '17px',
//           color: '#5b21b6',
//           marginBottom: '28px',
//           lineHeight: '1.6',
//           fontFamily: "'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
//         }}
//       >
//         Join our buzzing community on LinkedIn
//       </p>
//       <button
//         style={{
//           padding: '12px 24px',
//           background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '999px',
//           cursor: 'pointer',
//           fontSize: '16px',
//           fontWeight: '600',
//           boxShadow: '0 4px 12px rgba(167, 139, 250, 0.4)',
//           transition: 'all 0.3s ease',
//           alignSelf: 'flex-start',
//           fontFamily: "'Comic Sans MS', cursive, sans-serif",
//           position: 'relative',
//           overflow: 'hidden',
//         }}
//         onMouseOver={(e) => {
//           e.target.style.background = 'linear-gradient(90deg, #a78bfa, #8b5cf6)';
//           e.target.style.transform = 'translateY(-2px)';
//         }}
//         onMouseOut={(e) => {
//           e.target.style.background = 'linear-gradient(90deg, #8b5cf6, #a78bfa)';
//           e.target.style.transform = 'translateY(0)';
//         }}
//       >
//         Buzz With Us on LinkedIn
//       </button>
//     </div>
//   </div>
// </section>
//       <Footer />
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import Footer from '../components/Footer';
// import boltzBuzzLogo from '../assets/boltz_buzz_logo.png';

// export default function BlogsPage() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const categories = [
//     'Technology',
//     'Case Studies',
//     'Education',
//     'Collaboration',
//     'Industrial Insights'
//   ];

//   // Simulated blog data with categories
//   const blogs = Array.from({ length: 45 }, (_, i) => ({
//     id: i + 1,
//     title: `Proteins are essential for life #${i + 1}`,
//     author: 'Surya',
//     date: '30-6-2025',
//     image: 'https://via.placeholder.com/300x180?text=Image',
//     category: categories[i % categories.length]
//   }));

//   const blogsPerPage = 15;

//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialPage = parseInt(searchParams.get('page') || '1', 10);
//   const [currentPage, setCurrentPage] = useState(initialPage);

//   useEffect(() => {
//     setSearchParams({ page: currentPage });
//   }, [currentPage, setSearchParams]);

//   const filteredBlogs = blogs.filter(blog =>
//     blog.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / blogsPerPage));
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

//   return (
//     <div style={{ fontFamily: "'Inter', sans-serif" }}>
//       <header style={{ textAlign: 'center', marginBottom: '40px', position: 'relative' }}>
//         <h1 style={{ fontSize: '32px', color: '#3b82f6', fontWeight: '800' }}>
//           Insights & Discoveries from AI Research
//         </h1>
//         <p style={{ fontSize: '18px', color: '#374151' }}>
//           Stay updated with the latest breakthroughs
//         </p>
//       </header>

//       <section style={{ textAlign: 'center', marginBottom: '32px' }}>
//         <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#3b82f6' }}>
//           Blogs
//         </h2>
//       </section>

//       <div style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-end',
//         maxWidth: '1200px',
//         margin: '0 auto 32px',
//         padding: '0 16px'
//       }}>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           borderRadius: '999px',
//           border: '1px solid #d1d5db',
//           backgroundColor: '#f9fafb',
//           padding: '8px 20px',
//           width: '320px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
//           transition: 'box-shadow 0.2s ease'
//         }}>
//           <span style={{ marginRight: '10px', color: '#9ca3af', fontSize: '16px' }}>🔍</span>
//           <input
//             type="text"
//             placeholder="Search blogs..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{
//               border: 'none',
//               outline: 'none',
//               flex: 1,
//               fontSize: '14px',
//               backgroundColor: 'transparent'
//             }}
//           />
//         </div>

//         {filteredBlogs.length === 0 && (
//           <section
//             style={{
//               marginTop: '24px',
//               width: '100%',
//               maxWidth: '700px',
//               background: 'linear-gradient(135deg, #f9f5ff, #f3e8ff)',
//               padding: '40px 24px',
//               textAlign: 'center',
//               borderRadius: '20px',
//               boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               marginInline: 'auto'
//             }}
//           >
//             <div style={{
//               fontSize: '48px',
//               color: '#a855f7',
//               marginBottom: '16px'
//             }}>😕</div>
//             <h3 style={{
//               fontSize: '24px',
//               fontWeight: '700',
//               color: '#4c1d95',
//               marginBottom: '12px'
//             }}>
//               No Results Found
//             </h3>
//             <p style={{
//               fontSize: '16px',
//               color: '#4b5563',
//               maxWidth: '500px',
//               lineHeight: '1.6'
//             }}>
//               We couldn't find any blogs matching <strong>"{searchTerm}"</strong>. 
//               Try refining your search or exploring other topics.
//             </p>
//           </section>
//         )}
//       </div>

//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
//         gap: '24px',
//         maxWidth: '1200px',
//         margin: '0 auto'
//       }}>
//         {currentBlogs.map(blog => (
//           <Link
//             key={blog.id}
//             to={`/blogs/${blog.id}?page=${currentPage}`}
//             style={{
//               textDecoration: 'none',
//               color: 'inherit',
//               background: '#f9fafb',
//               borderRadius: '16px',
//               overflow: 'hidden',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between',
//               paddingBottom: '16px'
//             }}
//           >
//             <div style={{
//               width: '100%',
//               height: '180px',
//               backgroundImage: `url(${blog.image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}></div>

//             <div style={{ padding: '16px' }}>
//               <span style={{
//                 display: 'inline-block',
//                 padding: '4px 12px',
//                 borderRadius: '999px',
//                 background: '#e0e7ff',
//                 color: '#4338ca',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 marginBottom: '8px'
//               }}>
//                 {blog.category}
//               </span>
//               <p style={{ fontSize: '14px', marginBottom: '12px' }}>
//                 {blog.title}
//               </p>
//               <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 fontSize: '12px',
//                 color: '#6b7280'
//               }}>
//                 <span>👤 {blog.author}</span>
//                 <span>📅 {blog.date}</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       <div style={{
//         marginTop: '40px',
//         maxWidth: '1200px',
//         marginInline: 'auto',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexWrap: 'wrap'
//       }}>
//         {currentPage > 1 ? (
//           <button
//             onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//             style={{
//               padding: '10px 20px',
//               borderRadius: '999px',
//               border: 'none',
//               background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
//               color: '#fff',
//               fontSize: '14px',
//               cursor: 'pointer',
//               boxShadow: '0 4px 8px rgba(99,102,241,0.2)',
//               transition: 'background 0.3s ease'
//             }}
//           >
//             Previous
//           </button>
//         ) : <div></div>}

//         {currentPage < totalPages ? (
//           <button
//             onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//             style={{
//               padding: '10px 20px',
//               borderRadius: '999px',
//               border: 'none',
//               background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
//               color: '#fff',
//               fontSize: '14px',
//               cursor: 'pointer',
//               boxShadow: '0 4px 8px rgba(99,102,241,0.2)',
//               transition: 'background 0.3s ease'
//             }}
//           >
//             Next
//           </button>
//         ) : <div></div>}
//       </div>

//       <section
//         style={{
//           margin: '80px auto',
//           background: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
//           padding: '0',
//           borderRadius: '24px',
//           maxWidth: '740px',
//           boxShadow: '0 12px 24px rgba(0, 0, 0, 0.05)',
//           overflow: 'hidden',
//           position: 'relative',
//           border: '2px dotted rgba(167, 139, 250, 0.3)',
//         }}
//       >
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             flexWrap: 'wrap',
//             position: 'relative',
//             zIndex: 1,
//             minHeight: '300px',
//           }}
//         >
//           <div
//             style={{
//               flex: '1 1 300px',
//               minWidth: '280px',
//               position: 'relative',
//               overflow: 'hidden',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               padding: '20px',
//             }}
//           >
//             <div
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)',
//                 borderRadius: '16px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 border: '3px solid white',
//                 boxShadow: 'inset 0 0 20px rgba(255,255,255,0.5)',
//               }}
//             >
//               <img
//                 src={boltzBuzzLogo}
//                 alt="Boltz Buzz Logo"
//                 style={{
//                   width: '80%',
//                   height: 'auto',
//                   objectFit: 'contain',
//                   display: 'block',
//                   filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
//                 }}
//               />
//             </div>
//           </div>

//           <div
//             style={{
//               flex: '1 1 300px',
//               minWidth: '280px',
//               padding: '40px 40px 40px 50px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               background: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
//               textAlign: 'left',
//               position: 'relative',
//             }}
//           >
//             <h3
//               style={{
//                 fontSize: '28px',
//                 fontWeight: '800',
//                 color: '#6d28d9',
//                 marginBottom: '16px',
//                 lineHeight: '1.2',
//                 letterSpacing: '-0.5px',
//                 fontFamily: "'Comic Sans MS', cursive, sans-serif",
//                 textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
//               }}
//             >
//               Want More Insights?
//             </h3>
//             <p
//               style={{
//                 fontSize: '17px',
//                 color: '#5b21b6',
//                 marginBottom: '28px',
//                 lineHeight: '1.6',
//                 fontFamily: "'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
//               }}
//             >
//               Join our buzzing community on LinkedIn
//             </p>
//             <button
//               style={{
//                 padding: '12px 24px',
//                 background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: '999px',
//                 cursor: 'pointer',
//                 fontSize: '16px',
//                 fontWeight: '600',
//                 boxShadow: '0 4px 12px rgba(167, 139, 250, 0.4)',
//                 transition: 'all 0.3s ease',
//                 alignSelf: 'flex-start',
//                 fontFamily: "'Comic Sans MS', cursive, sans-serif",
//               }}
//               onMouseOver={(e) => {
//                 e.target.style.background = 'linear-gradient(90deg, #a78bfa, #8b5cf6)';
//                 e.target.style.transform = 'translateY(-2px)';
//               }}
//               onMouseOut={(e) => {
//                 e.target.style.background = 'linear-gradient(90deg, #8b5cf6, #a78bfa)';
//                 e.target.style.transform = 'translateY(0)';
//               }}
//             >
//               Buzz With Us on LinkedIn
//             </button>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

//Mainpage
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

//Homepage
// import React, { useEffect, useRef, useState } from 'react';
// import Footer from '../components/Footer';
// import InsightCards from '../components/InsightsSection';
// import MainPageherocontent from '../pages/Mainpageherocontent';
// import LaptopSection from '../pages/LandingPage';
// import { motion } from 'framer-motion';
// import ExploreModulesSection from '../components/Modules';

// export default function HomePage() {
//   const insightSectionRef = useRef(null);
//   const laptopSectionRef = useRef(null);
//   const [isLaptopVisible, setIsLaptopVisible] = useState(false);

//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = 'smooth';
//     return () => {
//       document.documentElement.style.scrollBehavior = 'auto';
//     };
//   }, []);

//   const scrollToInsights = () => {
//     insightSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsLaptopVisible(true);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     if (laptopSectionRef.current) {
//       observer.observe(laptopSectionRef.current);
//     }

//     return () => {
//       if (laptopSectionRef.current) {
//         observer.unobserve(laptopSectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div style={{ 
//       display: 'flex', 
//       flexDirection: 'column', 
//       minHeight: '100vh',
//       overflowX: 'hidden',
//       width: '100%'
//     }}>
//       <main style={{ 
//         flex: 1, 
//         width: '100%',
//         maxWidth: '100vw',
//       }}>
//         {/* HERO */}
//         <MainPageherocontent onScrollDown={scrollToInsights} />

//         {/* INSIGHTS & MODULES */}
//         <div 
//           ref={insightSectionRef} 
//           style={{ 
//             margin: '0 auto', 
//             width: '100%',
//             maxWidth: '100vw',
//             padding: '0 5%',
//             boxSizing: 'border-box'
//           }}
//         >
//           <InsightCards />
//           <div style={{ 
//             margin: '80px 0',
//             display: 'flex',
//             justifyContent: 'center',
//             width: '100%'
//           }}>
//             <div style={{ maxWidth: '1440px', width: '100%' }}>
//               <ExploreModulesSection />
//             </div>
//           </div>
//         </div>

//         {/* LAPTOP SECTION - SLIDE IN */}
//         <motion.div
//           ref={laptopSectionRef}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isLaptopVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1 }}
//           style={{
//             width: '100%',
//             boxSizing: 'border-box',
//             display: 'flex',
//             justifyContent: 'center',
//           }}
//         >
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'flex-start',
//               width: '100%',
//               maxWidth: '1400px',
//               gap: '60px',
//             }}
//           >
//             <LaptopSection isOpen={isLaptopVisible} />
//           </div>
//         </motion.div>
//       </main>

//       <Footer />
//     </div>
//   );
// // }
// import React, { useEffect, useRef, useState } from 'react';
// import Footer from '../components/Footer';
// import InsightCards from '../components/InsightsSection';
// import MainPageherocontent from '../pages/Mainpageherocontent';
// import LaptopSection from '../pages/LandingPage';
// import { motion, useAnimation } from 'framer-motion';
// import ExploreModulesSection from '../components/Modules';

// export default function HomePage() {
//   const insightSectionRef = useRef(null);
//   const laptopSectionRef = useRef(null);
//   const modulesSectionRef = useRef(null);
//   const [isLaptopVisible, setIsLaptopVisible] = useState(false);
//   const [isModulesVisible, setIsModulesVisible] = useState(false);
//   const controls = useAnimation();

//   // State for underline animation
//   const [underlineProgress, setUnderlineProgress] = useState(0);

//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = 'smooth';
//     return () => {
//       document.documentElement.style.scrollBehavior = 'auto';
//     };
//   }, []);

//   const scrollToInsights = () => {
//     insightSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (modulesSectionRef.current) {
//         const rect = modulesSectionRef.current.getBoundingClientRect();
//         const viewportHeight = window.innerHeight;
        
//         // Calculate how much of the section is visible (0 to 1)
//         const visibleRatio = Math.min(
//           1,
//           Math.max(0, (viewportHeight - rect.top) / viewportHeight)
//         );
        
//         setUnderlineProgress(visibleRatio);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const observers = [];
    
//     const laptopObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsLaptopVisible(true);
//             controls.start("visible");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const modulesObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsModulesVisible(true);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (laptopSectionRef.current) {
//       laptopObserver.observe(laptopSectionRef.current);
//       observers.push(laptopObserver);
//     }

//     if (modulesSectionRef.current) {
//       modulesObserver.observe(modulesSectionRef.current);
//       observers.push(modulesObserver);
//     }

//     return () => {
//       observers.forEach(observer => {
//         observer.disconnect();
//       });
//     };
//   }, [controls]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <div style={{ 
//       display: 'flex', 
//       flexDirection: 'column', 
//       minHeight: '100vh',
//       overflowX: 'hidden',
//       width: '100%'
//     }}>
//       <main style={{ 
//         flex: 1, 
//         width: '100%',
//         maxWidth: '100vw',
//       }}>
//         {/* HERO */}
//         <MainPageherocontent onScrollDown={scrollToInsights} />

//         {/* INSIGHTS & MODULES */}
//         <motion.div 
//           ref={insightSectionRef}
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           style={{ 
//             margin: '0 auto', 
//             width: '100%',
//             maxWidth: '100vw',
//             padding: '80px 5%',
//             boxSizing: 'border-box'
//           }}
//         >
//           <motion.div variants={itemVariants}>
//             <InsightCards />
//           </motion.div>
          
//           <motion.div 
//             ref={modulesSectionRef}
//             variants={itemVariants}
//             style={{ 
//               margin: '-30px 0 0',
//               display: 'flex',
//               justifyContent: 'center',
//               width: '100%',
//               position: 'relative'
//             }}
//           >
//             {/* Underline animation container */}
//             <div style={{
//               position: 'absolute',
//               bottom: -10,
//               left: 0,
//               width: '100%',
//               height: 2,
            
//               overflow: 'hidden'
//             }}>
//               <motion.div 
//                 style={{
//                   height: '100%',
                  
//                   width: '100%',
//                   transformOrigin: 'left center'
//                 }}
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: underlineProgress }}
//                 transition={{ duration: 0.3, ease: 'easeOut' }}
//               />
//             </div>
            
//             <div style={{ maxWidth: '1440px', width: '100%' }}>
//               <ExploreModulesSection isVisible={isModulesVisible} />
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* LAPTOP SECTION */}
//         <motion.div
//           ref={laptopSectionRef}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isLaptopVisible ? { 
//             opacity: 1, 
//             y: 0,
//             transition: { 
//               type: "spring", 
//               damping: 20, 
//               stiffness: 100,
//               delay: 0.2
//             } 
//           } : {}}
//           style={{
//             width: '100%',
//             boxSizing: 'border-box',
//             display: 'flex',
//             justifyContent: 'center',
//             padding: '80px 5%',
//           }}
//         >
//           <div style={{
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'center',
//             alignItems: 'flex-start',
//             width: '100%',
//             maxWidth: '1400px',
//           }}>
//             <LaptopSection isOpen={isLaptopVisible} />
//           </div>
//         </motion.div>
//       </main>

//       <Footer />
//     </div>
//   );
// }
// }


//// import React, { useEffect, useRef, useState } from 'react';
// import Footer from '../components/Footer';
// import InsightCards from '../components/InsightsSection';
// import MainPageherocontent from '../pages/Mainpageherocontent';
// import LaptopSection from '../pages/LandingPage';
// import { motion, useAnimation } from 'framer-motion';
// import ExploreModulesSection from '../components/Modules';
// import LabAutomationSection from '../components/LabAutomationSection';
// export default function HomePage() {
//   const insightSectionRef = useRef(null);
//   const laptopSectionRef = useRef(null);
//   const modulesSectionRef = useRef(null);
//   const [isLaptopVisible, setIsLaptopVisible] = useState(false);
//   const [isModulesVisible, setIsModulesVisible] = useState(false);
//   const controls = useAnimation();

//   // State for underline animation
//   const [underlineProgress, setUnderlineProgress] = useState(0);

//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = 'smooth';
//     return () => {
//       document.documentElement.style.scrollBehavior = 'auto';
//     };
//   }, []);

//   const scrollToInsights = () => {
//     insightSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (modulesSectionRef.current) {
//         const rect = modulesSectionRef.current.getBoundingClientRect();
//         const viewportHeight = window.innerHeight;
        
//         // Calculate how much of the section is visible (0 to 1)
//         const visibleRatio = Math.min(
//           1,
//           Math.max(0, (viewportHeight - rect.top) / viewportHeight)
//         );
        
//         setUnderlineProgress(visibleRatio);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const observers = [];
    
//     const laptopObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsLaptopVisible(true);
//             controls.start("visible");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const modulesObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsModulesVisible(true);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (laptopSectionRef.current) {
//       laptopObserver.observe(laptopSectionRef.current);
//       observers.push(laptopObserver);
//     }

//     if (modulesSectionRef.current) {
//       modulesObserver.observe(modulesSectionRef.current);
//       observers.push(modulesObserver);
//     }

//     return () => {
//       observers.forEach(observer => {
//         observer.disconnect();
//       });
//     };
//   }, [controls]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <div style={{ 
//       display: 'flex', 
//       flexDirection: 'column', 
//       minHeight: '100vh',
//       overflowX: 'hidden',
//       width: '100%'
//     }}>
//       <main style={{ 
//         flex: 1, 
//         width: '100%',
//         maxWidth: '100vw',
//       }}>
//         {/* HERO */}
//         <MainPageherocontent onScrollDown={scrollToInsights} />

//         {/* INSIGHTS & MODULES */}
//         <motion.div 
//           ref={insightSectionRef}
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           style={{ 
//             margin: '-50px auto', 
//             width: '100%',
//             maxWidth: '100vw',
//             padding: '10px 5%',
//             boxSizing: 'border-box'
//           }}
//         >
//           <motion.div variants={itemVariants}>
//             <InsightCards />
//           </motion.div>
//           {/*Information}*/}{/* Solutions Header */}
//           <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative' }}>
//             <h2
//               style={{
//                 fontSize: '42px',
//                 fontWeight: '700',
//                 color: '#111827',
//                 margin: 0
//               }}
//             >
//               Why teams choose Boltzmann Suite
//             </h2>
//             <span
//               style={{
//                 position: 'absolute',
//                 bottom: '-12px',
//                 left: '50%',
//                 transform: 'translateX(-50%)',
//                 width: '120px',
//                 height: '4px',
//                 background:
//                   'linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8))',
//                 borderRadius: '2px'
//               }}
//             />
            
//           </div>

//           {/* Lab Automation Sections */}
//           <LabAutomationSection
//             icon="⚛️"
//             heading="Gen AI for Scientific Precision"
//             paragraphs={[
//               'Designs molecules, predicts properties, and plans synthesis in real time.',
//               'Uses expert-trained agents for scientifically accurate results.',
//               'Automates tasks so teams can focus on innovation.'
//             ]}
//           />

//           <LabAutomationSection
//             icon="🧬"
//             heading="Integrated LIMS with customizable APIs and CLI-first workflows for seamless, flexible operations."
//             paragraphs={[
//               'Unifies all stages of the discovery lifecycle.',
//               'Connects molecular generation to synthesis and execution.',
//               'Automates workflows with real-time data exchange.'
//             ]}
//           />



// {/* Underline animation container */}
//           <motion.div 
//             ref={modulesSectionRef}
//             variants={itemVariants}
//             style={{ 
//               margin: '-30px 0 0',
//               display: 'flex',
//               justifyContent: 'center',
//               width: '100%',
//               position: 'relative'
//             }}
//           >
            
//             <div style={{
//               position: 'absolute',
//               bottom: -10,
//               left: 0,
//               width: '100%',
//               height: 2,
            
//               overflow: 'hidden'
//             }}>
//               <motion.div 
//                 style={{
//                   height: '100%',
                  
//                   width: '100%',
//                   transformOrigin: 'left center'
//                 }}
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: underlineProgress }}
//                 transition={{ duration: 0.3, ease: 'easeOut' }}
//               />
//             </div>
            
//             <div style={{ maxWidth: '1440px', width: '100%' }}>
//               <ExploreModulesSection isVisible={isModulesVisible} />
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* LAPTOP SECTION */}
//         <motion.div
//           ref={laptopSectionRef}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isLaptopVisible ? { 
//             opacity: 1, 
//             y: 0,
//             transition: { 
//               type: "spring", 
//               damping: 20, 
//               stiffness: 100,
//               delay: 0.2
//             } 
//           } : {}}
//           style={{
//             width: '100%',
//             boxSizing: 'border-box',
//             display: 'flex',
//             justifyContent: 'center',
//             padding: '80px 5%',
//           }}
//         >
//           <div style={{
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'center',
//             alignItems: 'flex-start',
//             width: '100%',
//             maxWidth: '1400px',
//           }}>
//             <LaptopSection isOpen={isLaptopVisible} />
//           </div>
//         </motion.div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// import React, { useEffect, useRef, useState } from 'react';
// import Footer from '../components/Footer';
// import InsightCards from '../components/InsightsSection';
// import MainPageherocontent from '../pages/Mainpageherocontent';
// import LaptopSection from '../pages/LandingPage';
// import { motion, useAnimation } from 'framer-motion';
// import ExploreModulesSection from '../components/Modules';
// import LabAutomationSection from '../components/LabAutomationSection';

// export default function HomePage() {
//   const insightSectionRef = useRef(null);
//   const laptopSectionRef = useRef(null);
//   const modulesSectionRef = useRef(null);
//   const [isLaptopVisible, setIsLaptopVisible] = useState(false);
//   const [isModulesVisible, setIsModulesVisible] = useState(false);
//   const controls = useAnimation();
//   const [underlineProgress, setUnderlineProgress] = useState(0);

//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = 'smooth';
//     return () => (document.documentElement.style.scrollBehavior = 'auto');
//   }, []);

//   const scrollToInsights = () => insightSectionRef.current?.scrollIntoView({ behavior: 'smooth' });

//   useEffect(() => {
//     const handleScroll = () => {
//       if (modulesSectionRef.current) {
//         const rect = modulesSectionRef.current.getBoundingClientRect();
//         const viewportHeight = window.innerHeight;
//         const visibleRatio = Math.min(1, Math.max(0, (viewportHeight - rect.top) / viewportHeight));
//         setUnderlineProgress(visibleRatio);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const observers = [];

//     const laptopObserver = new IntersectionObserver(
//       (entries) => entries.forEach((entry) => entry.isIntersecting && setIsLaptopVisible(true)),
//       { threshold: 0.2 }
//     );

//     const modulesObserver = new IntersectionObserver(
//       (entries) => entries.forEach((entry) => entry.isIntersecting && setIsModulesVisible(true)),
//       { threshold: 0.1 }
//     );

//     if (laptopSectionRef.current) laptopObserver.observe(laptopSectionRef.current) && observers.push(laptopObserver);
//     if (modulesSectionRef.current) modulesObserver.observe(modulesSectionRef.current) && observers.push(modulesObserver);

//     return () => observers.forEach((observer) => observer.disconnect());
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
//       <main style={{ flex: 1, width: '100%' }}>
//         {/* HERO */}
//         <MainPageherocontent onScrollDown={scrollToInsights} />

//         {/* INSIGHTS & MODULES */}
//         <motion.div
//           ref={insightSectionRef}
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           style={{ width: '100%', padding: '30px 5%', boxSizing: 'border-box' }}
//         >
//           <motion.div variants={itemVariants}>
//             <InsightCards />
//           </motion.div>

//           {/* Section Header */}
//           <div style={{ textAlign: 'center', margin: '30px 0 25px', position: 'relative' }}>
//             <h2 style={{   fontFamily: "'Inter', sans-serif",
//             fontSize: "48px",
//             fontWeight: "200",color: '#111827', margin: 0,}}>
//               Why teams choose Boltzmann Suite
//             </h2>
//             <span
//               style={{
//                 position: 'absolute',
//                 bottom: '-10px',
//                 left: '50%',
//                 transform: 'translateX(-50%)',
//                 width: '100px',
//                 height: '3px',
//                 background: 'linear-gradient(90deg, rgba(34,211,238,0.8), rgba(192,132,252,0.8), rgba(251,146,60,0.8))',
//                 borderRadius: '2px',
//               }}
//             />
//           </div>

//           {/* Lab Automation Sections */}
//           <LabAutomationSection
//             icon="⚛️"
//             heading="Gen AI for Scientific Precision"
//             paragraphs={[
//               'Designs molecules, predicts properties, and plans synthesis in real time.',
//               'Uses expert-trained agents for scientifically accurate results.',
//               'Automates tasks so teams can focus on innovation.',
//             ]}
//           />

//           <LabAutomationSection
//             icon="🧬"
//             heading="Integrated LIMS with customizable APIs and CLI-first workflows for seamless operations."
//             paragraphs={[
//               'Unifies all stages of the discovery lifecycle.',
//               'Connects molecular generation to synthesis and execution.',
//               'Automates workflows with real-time data exchange.',
//             ]}
//           />

//           {/* Modules & Underline */}
//           <motion.div
//             ref={modulesSectionRef}
//             variants={itemVariants}
//             style={{ margin: '20px 0 0', display: 'flex', justifyContent: 'center', position: 'relative' }}
//           >
//             <div style={{ position: 'absolute', bottom: -8, left: 0, width: '100%', height: 2, overflow: 'hidden' }}>
//               <motion.div
//                 style={{ height: '100%', width: '100%', transformOrigin: 'left center', backgroundColor: '#4F1985' }}
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: underlineProgress }}
//                 transition={{ duration: 0.3, ease: 'easeOut' }}
//               />
//             </div>
//             <div style={{ maxWidth: '1400px', width: '100%' }}>
//               <ExploreModulesSection isVisible={isModulesVisible} />
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* LAPTOP SECTION */}
//         <motion.div
//           ref={laptopSectionRef}
//           initial={{ opacity: 0, y: 50 }}
//           animate={
//             isLaptopVisible
//               ? { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 100, delay: 0.2 } }
//               : {}
//           }
//           style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '50px 5%' }}
//         >
//           <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', maxWidth: '1400px' }}>
//             <LaptopSection isOpen={isLaptopVisible} />
//           </div>
//         </motion.div>
//       </main>

//       <Footer />
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const YearlyTimeline = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   const years = [
//     {
//       year: "2019",
//       title: "Foundation",
//       subtitle: "Company Establishment",
//       description: "Launched with a vision to revolutionize data processing in scientific research",
//       color: "#8B5CF6",
//     },
//     {
//       year: "2020",
//       title: "First Product",
//       subtitle: "Data Collection Platform",
//       description: "Released our initial data ingestion platform for research institutions",
//       color: "#0EA5E9",
//     },
//     {
//       year: "2021",
//       title: "Expansion",
//       subtitle: "Series A Funding",
//       description: "Secured $10M in funding to expand our engineering team",
//       color: "#10B981",
//     },
//     {
//       year: "2022",
//       title: "Breakthrough",
//       subtitle: "AI Integration",
//       description: "Implemented machine learning capabilities into our analysis tools",
//       color: "#F59E0B",
//     },
//     {
//       year: "2023",
//       title: "Partnerships",
//       subtitle: "Industry Collaborations",
//       description: "Formed strategic partnerships with major research universities",
//       color: "#EC4899",
//     },
//     {
//       year: "2024",
//       title: "Global Reach",
//       subtitle: "International Expansion",
//       description: "Opened offices in Europe and Asia to serve global clients",
//       color: "#6366F1",
//     },
//     {
//       year: "2025",
//       title: "Innovation",
//       subtitle: "Next-Gen Platform",
//       description: "Launched our next generation integrated research platform",
//       color: "#F97316",
//     }
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const pathVariants = {
//     hidden: { pathLength: 0 },
//     visible: {
//       pathLength: 1,
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const circleVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.8
//       }
//     }
//   };

//   const yearTextVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Calculate x positions for 7 items
//   const calculateXPosition = (index) => {
//     return 150 + (index * 150);
//   };

//   return (
//     <div className="min-h-screen bg-white py-16 px-4 sm:px-8">
//       <div className="max-w-7xl mx-auto">
//         <motion.div 
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//           variants={containerVariants}
//         >
//           <svg 
//             className="w-full h-[800px]" 
//             viewBox="0 0 1200 800" 
//             preserveAspectRatio="xMidYMid meet"
//           >
//             <defs>
//               <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                 <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//               </linearGradient>
//               <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                 <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//               </linearGradient>
//               <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                 <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//               </linearGradient>
//               <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                 <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//               </linearGradient>
//               <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                 <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//               </linearGradient>
//               <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                 <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//               </linearGradient>
//               <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                 <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//               </linearGradient>
              
//               <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                 <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                 <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                 <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                 <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                 <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                 <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//               </linearGradient>

//               <filter id="dropShadow">
//                 <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//               </filter>
//             </defs>

//             <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
//               <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F1F5F9" strokeWidth="1" strokeOpacity="0.5"/>
//             </pattern>
//             <rect width="1200" height="800" fill="url(#grid)" />

//             {/* Connection path */}
//             <motion.path
//               d={`M ${calculateXPosition(0)},200 L ${calculateXPosition(6)},200`}
//               fill="none"
//               stroke="#E2E8F0"
//               strokeWidth="3"
//               strokeDasharray="8,4"
//             />
            
//             <motion.path
//               d={`M ${calculateXPosition(0)},200 L ${calculateXPosition(6)},200`}
//               fill="none"
//               stroke="url(#pathGradient)"
//               strokeWidth="4"
//               strokeLinecap="round"
//               variants={pathVariants}
//             />

//             {/* Vertical connection lines */}
//             {years.map((year, index) => {
//               const xPos = calculateXPosition(index);
//               const yOffset = index % 2 === 0 ? 100 : 300;
//               return (
//                 <motion.path
//                   key={`line-${index}`}
//                   d={`M ${xPos},200 L ${xPos},${yOffset}`}
//                   fill="none"
//                   stroke="#64748B"
//                   strokeWidth="2"
//                   strokeDasharray="5,5"
//                   variants={{
//                     hidden: { opacity: 0 },
//                     visible: { opacity: 1 }
//                   }}
//                   transition={{ duration: 0.5 }}
//                 />
//               );
//             })}

//             {/* Main circular indicators */}
//             {years.map((year, index) => {
//               const xPos = calculateXPosition(index);
//               const radius = 50;
//               const gradientId = `gradient${index + 1}`;
//               const yOffset = index % 2 === 0 ? 100 : 300;
//               const boxHeight = 120;
//               const boxY = index % 2 === 0 ? yOffset - boxHeight : yOffset;
//               const boxWidth = 140;
              
//               return (
//                 <g key={index}>
//                   {/* Background circle */}
//                   <motion.circle
//                     cx={xPos}
//                     cy={200}
//                     r={radius + 8}
//                     fill="#F8FAFC"
//                     stroke="#E2E8F0"
//                     strokeWidth="2"
//                     filter="url(#dropShadow)"
//                     variants={circleVariants}
//                   />
                  
//                   {/* Progress background */}
//                   <motion.circle
//                     cx={xPos}
//                     cy={200}
//                     r={radius}
//                     fill="none"
//                     stroke="#F1F5F9"
//                     strokeWidth="8"
//                     variants={circleVariants}
//                   />
                  
//                   {/* Colored ring */}
//                   <motion.circle
//                     cx={xPos}
//                     cy={200}
//                     r={radius}
//                     fill="none"
//                     stroke={`url(#${gradientId})`}
//                     strokeWidth="8"
//                     strokeLinecap="round"
//                     initial={{ pathLength: 0 }}
//                     animate={{ pathLength: 1 }}
//                     transition={{ duration: 1.5, ease: "easeInOut" }}
//                   />

//                   {/* Year text */}
//                   <motion.text
//                     x={xPos}
//                     y={200}
//                     textAnchor="middle"
//                     dominantBaseline="middle"
//                     fill={year.color}
//                     style={{ fontWeight: 'bold', fontSize: '18px' }}
//                     variants={yearTextVariants}
//                   >
//                     {year.year}
//                   </motion.text>

//                   Info cards
//                   <motion.g variants={cardVariants}>
//                     <rect
//                       x={xPos - boxWidth/2}
//                       y={boxY}
//                       width={boxWidth}
//                       height={boxHeight}
//                       rx="12"
//                       fill="white"
//                       stroke="#E2E8F0"
//                       strokeWidth="1"
//                       filter="url(#dropShadow)"
//                     />
                    
//                     <text
//                       x={xPos}
//                       y={boxY + 30}
//                       textAnchor="middle"
//                       style={{ fontSize: '14px', fontWeight: 'bold' }}
//                       fill="#1E293B"
//                     >
//                       {year.title}
//                     </text>
                    
//                     <text
//                       x={xPos}
//                       y={boxY + 50}
//                       textAnchor="middle"
//                       style={{ fontSize: '12px', fontWeight: '600' }}
//                       fill={year.color}
//                     >
//                       {year.subtitle}
//                     </text>
                    
//                     {year.description.split(' ').reduce((acc, word, i, arr) => {
//                       const lineIndex = Math.floor(i / 4);
//                       if (!acc[lineIndex]) acc[lineIndex] = [];
//                       acc[lineIndex].push(word);
//                       return acc;
//                     }, []).map((line, lineIndex) => (
//                       <text
//                         key={lineIndex}
//                         x={xPos}
//                         y={boxY + 75 + (lineIndex * 15)}
//                         textAnchor="middle"
//                         style={{ fontSize: '11px' }}
//                         fill="#64748B"
//                       >
//                         {line.join(' ')}
//                       </text>
//                     ))}
//                   </motion.g>
//                 </g>
//               );
//             })}

//             Title
//             {/* <motion.text
//               x="600"
//               y="80"
//               textAnchor="middle"
//               fill="#1E293B"
//               style={{ fontSize: '28px', fontWeight: 'bold' }}
//               variants={{
//                 hidden: { opacity: 0, y: -20 },
//                 visible: { opacity: 1, y: 0 }
//               }}
//               transition={{ duration: 0.8 }}
//             >
//               Our Journey (2019-2025)
//             </motion.text> */}
            
//             {/* Subtitle */}
//             {/* <motion.text
//               x="600"
//               y="120"
//               textAnchor="middle"
//               fill="#64748B"
//               style={{ fontSize: '16px' }}
//               variants={{
//                 hidden: { opacity: 0 },
//                 visible: { opacity: 0.8 }
//               }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//             >
//               Milestones and achievements through the years
//             </motion.text> */}
//           </svg>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default YearlyTimeline;


// import React, { useState, useEffect } from 'react';
// import { motion, useTransform, useViewportScroll } from 'framer-motion';
// import { useMediaQuery } from 'react-responsive';

// const YearlyTimeline = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
//   const { scrollYProgress } = useViewportScroll();

//   const years = [
//     {
//       year: "2019",
//       title: "Foundation",
//       subtitle: "Company Establishment",
//       description: "Launched with a vision to revolutionize data processing in scientific research",
//       color: "#8B5CF6",
//     },
//     {
//       year: "2020",
//       title: "First Product",
//       subtitle: "Data Collection Platform",
//       description: "Released our initial data ingestion platform for research institutions",
//       color: "#0EA5E9",
//     },
//     {
//       year: "2021",
//       title: "Expansion",
//       subtitle: "Series A Funding",
//       description: "Secured $10M in funding to expand our engineering team",
//       color: "#10B981",
//     },
//     {
//       year: "2022",
//       title: "Breakthrough",
//       subtitle: "AI Integration",
//       description: "Implemented machine learning capabilities into our analysis tools",
//       color: "#F59E0B",
//     },
//     {
//       year: "2023",
//       title: "Partnerships",
//       subtitle: "Industry Collaborations",
//       description: "Formed strategic partnerships with major research universities",
//       color: "#EC4899",
//     },
//     {
//       year: "2024",
//       title: "Global Reach",
//       subtitle: "International Expansion",
//       description: "Opened offices in Europe and Asia to serve global clients",
//       color: "#6366F1",
//     },
//     {
//       year: "2025",
//       title: "Innovation",
//       subtitle: "Next-Gen Platform",
//       description: "Launched our next generation integrated research platform",
//       color: "#F97316",
//     }
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const pathVariants = {
//     hidden: { pathLength: 0 },
//     visible: {
//       pathLength: 1,
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const circleVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.8
//       }
//     }
//   };

//   const yearTextVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Calculate positions based on screen size
//   const calculateXPosition = (index, total) => {
//     if (isMobile) {
//       return 150;
//     }
//     return 150 + (index * 150);
//   };

//   const calculateYPosition = (index, total) => {
//     if (isMobile) {
//       return 150 + (index * 200);
//     }
//     return 200;
//   };

//   const calculatePath = () => {
//     if (isMobile) {
//       const firstY = calculateYPosition(0, years.length);
//       const lastY = calculateYPosition(years.length - 1, years.length);
//       return `M 150,${firstY} L 150,${lastY}`;
//     } else {
//       const firstX = calculateXPosition(0, years.length);
//       const lastX = calculateXPosition(years.length - 1, years.length);
//       return `M ${firstX},200 L ${lastX},200`;
//     }
//   };

//   const calculateCardOffset = (index) => {
//     if (isMobile) {
//       return { x: 120, y: 0 };
//     }
//     return { x: 0, y: index % 2 === 0 ? -100 : 100 };
//   };

//   return (
//     <div className="min-h-screen bg-white py-16 px-4 sm:px-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <motion.div 
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//           variants={containerVariants}
//         >
//           {/* Desktop SVG */}
//           {!isMobile && (
//             <svg 
//               className="w-full h-[800px] hidden md:block" 
//               viewBox="0 0 1200 800" 
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <defs>
//                 <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                 </linearGradient>
                
//                 <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                   <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                   <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                   <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                   <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                   <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                 </linearGradient>

//                 <filter id="dropShadow">
//                   <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                 </filter>
//               </defs>

//               <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
//                 <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F1F5F9" strokeWidth="1" strokeOpacity="0.5"/>
//               </pattern>
//               <rect width="1200" height="800" fill="url(#grid)" />

//               {/* Connection path */}
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="#E2E8F0"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//               />
              
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="url(#pathGradient)"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 variants={pathVariants}
//               />

//               {/* Vertical connection lines */}
//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const offset = calculateCardOffset(index);
//                 return (
//                   <motion.path
//                     key={`line-${index}`}
//                     d={`M ${xPos},${yPos} L ${xPos + offset.x},${yPos + offset.y}`}
//                     fill="none"
//                     stroke="#64748B"
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     variants={{
//                       hidden: { opacity: 0 },
//                       visible: { opacity: 1 }
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 );
//               })}

//               {/* Main circular indicators */}
//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const radius = 50;
//                 const gradientId = `gradient${index + 1}`;
//                 const offset = calculateCardOffset(index);
//                 const boxX = xPos + offset.x;
//                 const boxY = yPos + offset.y;
//                 const boxHeight = 120;
//                 const boxWidth = 140;
                
//                 return (
//                   <g key={index}>
//                     {/* Background circle */}
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius + 8}
//                       fill="#F8FAFC"
//                       stroke="#E2E8F0"
//                       strokeWidth="2"
//                       filter="url(#dropShadow)"
//                       variants={circleVariants}
//                     />
                    
//                     {/* Progress background */}
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke="#F1F5F9"
//                       strokeWidth="8"
//                       variants={circleVariants}
//                     />
                    
//                     {/* Colored ring */}
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke={`url(#${gradientId})`}
//                       strokeWidth="8"
//                       strokeLinecap="round"
//                       initial={{ pathLength: 0 }}
//                       animate={{ pathLength: 1 }}
//                       transition={{ duration: 1.5, ease: "easeInOut" }}
//                     />

//                     {/* Year text */}
//                     <motion.text
//                       x={xPos}
//                       y={yPos}
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       fill={year.color}
//                       style={{ fontWeight: 'bold', fontSize: '18px' }}
//                       variants={yearTextVariants}
//                     >
//                       {year.year}
//                     </motion.text>

//                     {/* Info cards */}
//                     <motion.g variants={cardVariants}>
//                       <rect
//                         x={boxX - boxWidth/2}
//                         y={boxY - boxHeight/2}
//                         width={boxWidth}
//                         height={boxHeight}
//                         rx="12"
//                         fill="white"
//                         stroke="#E2E8F0"
//                         strokeWidth="1"
//                         filter="url(#dropShadow)"
//                       />
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + 30}
//                         textAnchor="middle"
//                         style={{ fontSize: '14px', fontWeight: 'bold' }}
//                         fill="#1E293B"
//                       >
//                         {year.title}
//                       </text>
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + 50}
//                         textAnchor="middle"
//                         style={{ fontSize: '12px', fontWeight: '600' }}
//                         fill={year.color}
//                       >
//                         {year.subtitle}
//                       </text>
                      
//                       {year.description.split(' ').reduce((acc, word, i, arr) => {
//                         const lineIndex = Math.floor(i / 4);
//                         if (!acc[lineIndex]) acc[lineIndex] = [];
//                         acc[lineIndex].push(word);
//                         return acc;
//                       }, []).map((line, lineIndex) => (
//                         <text
//                           key={lineIndex}
//                           x={boxX}
//                           y={boxY - boxHeight/2 + 75 + (lineIndex * 15)}
//                           textAnchor="middle"
//                           style={{ fontSize: '11px' }}
//                           fill="#64748B"
//                         >
//                           {line.join(' ')}
//                         </text>
//                       ))}
//                     </motion.g>
//                   </g>
//                 );
//               })}
//             </svg>
//           )}

//           {/* Mobile SVG */}
//           {isMobile && (
//             <div className="relative h-full w-full md:hidden" style={{ height: `${years.length * 200 + 100}px` }}>
//               <svg 
//                 className="w-full h-full" 
//                 viewBox={`0 0 300 ${years.length * 200 + 100}`} 
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <defs>
//                   <linearGradient id="mgradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                   </linearGradient>
                  
//                   <linearGradient id="mpathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                     <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                     <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                     <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                     <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                     <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                     <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                   </linearGradient>

//                   <filter id="mdropShadow">
//                     <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                   </filter>
//                 </defs>

//                 <pattern id="mgrid" width="50" height="50" patternUnits="userSpaceOnUse">
//                   <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F1F5F9" strokeWidth="1" strokeOpacity="0.5"/>
//                 </pattern>
//                 <rect width="300" height={years.length * 200 + 100} fill="url(#mgrid)" />

//                 {/* Connection path */}
//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="#E2E8F0"
//                   strokeWidth="3"
//                   strokeDasharray="8,4"
//                 />
                
//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="url(#mpathGradient)"
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                   variants={pathVariants}
//                 />

//                 {/* Horizontal connection lines */}
//                 {years.map((year, index) => {
//                   const xPos = calculateXPosition(index, years.length);
//                   const yPos = calculateYPosition(index, years.length);
//                   const offset = calculateCardOffset(index);
//                   return (
//                     <motion.path
//                       key={`line-${index}`}
//                       d={`M ${xPos},${yPos} L ${xPos + offset.x},${yPos + offset.y}`}
//                       fill="none"
//                       stroke="#64748B"
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       variants={{
//                         hidden: { opacity: 0 },
//                         visible: { opacity: 1 }
//                       }}
//                       transition={{ duration: 0.5 }}
//                     />
//                   );
//                 })}

//                 {/* Main circular indicators */}
//                 {years.map((year, index) => {
//                   const xPos = calculateXPosition(index, years.length);
//                   const yPos = calculateYPosition(index, years.length);
//                   const radius = 30;
//                   const gradientId = `mgradient${index + 1}`;
//                   const offset = calculateCardOffset(index);
//                   const boxX = xPos + offset.x;
//                   const boxY = yPos + offset.y;
//                   const boxHeight = 100;
//                   const boxWidth = 120;
                  
//                   return (
//                     <g key={index}>
//                       {/* Background circle */}
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius + 8}
//                         fill="#F8FAFC"
//                         stroke="#E2E8F0"
//                         strokeWidth="2"
//                         filter="url(#mdropShadow)"
//                         variants={circleVariants}
//                       />
                      
//                       {/* Progress background */}
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke="#F1F5F9"
//                         strokeWidth="6"
//                         variants={circleVariants}
//                       />
                      
//                       {/* Colored ring */}
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke={`url(#${gradientId})`}
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         initial={{ pathLength: 0 }}
//                         animate={{ pathLength: 1 }}
//                         transition={{ duration: 1.5, ease: "easeInOut" }}
//                       />

//                       {/* Year text */}
//                       <motion.text
//                         x={xPos}
//                         y={yPos}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                         fill={year.color}
//                         style={{ fontWeight: 'bold', fontSize: '14px' }}
//                         variants={yearTextVariants}
//                       >
//                         {year.year}
//                       </motion.text>

//                       {/* Info cards */}
//                       <motion.g variants={cardVariants}>
//                         <rect
//                           x={boxX - boxWidth/2}
//                           y={boxY - boxHeight/2}
//                           width={boxWidth}
//                           height={boxHeight}
//                           rx="12"
//                           fill="white"
//                           stroke="#E2E8F0"
//                           strokeWidth="1"
//                           filter="url(#mdropShadow)"
//                         />
                        
//                         <text
//                           x={boxX}
//                           y={boxY - boxHeight/2 + 25}
//                           textAnchor="middle"
//                           style={{ fontSize: '12px', fontWeight: 'bold' }}
//                           fill="#1E293B"
//                         >
//                           {year.title}
//                         </text>
                        
//                         <text
//                           x={boxX}
//                           y={boxY - boxHeight/2 + 40}
//                           textAnchor="middle"
//                           style={{ fontSize: '10px', fontWeight: '600' }}
//                           fill={year.color}
//                         >
//                           {year.subtitle}
//                         </text>
                        
//                         {year.description.split(' ').reduce((acc, word, i, arr) => {
//                           const lineIndex = Math.floor(i / 3);
//                           if (!acc[lineIndex]) acc[lineIndex] = [];
//                           acc[lineIndex].push(word);
//                           return acc;
//                         }, []).map((line, lineIndex) => (
//                           <text
//                             key={lineIndex}
//                             x={boxX}
//                             y={boxY - boxHeight/2 + 60 + (lineIndex * 12)}
//                             textAnchor="middle"
//                             style={{ fontSize: '9px' }}
//                             fill="#64748B"
//                           >
//                             {line.join(' ')}
//                           </text>
//                         ))}
//                       </motion.g>
//                     </g>
//                   );
//                 })}
//               </svg>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default YearlyTimeline;


//ok


// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useMediaQuery } from 'react-responsive';

// const YearlyTimeline = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const isMobile = useMediaQuery({ query: '(max-width: 1024px)' }); // Changed to 1024px to include tablets

//   const years = [
//   {
//     "year": "2019",
//     "title": "Foundation",
//     "subtitle": "Founded in Bangalore, India as a research group",
//     "description": "Began as a research group focused on scientific innovation",
//     "color": "#8B5CF6"
//   },
//   {
//     "year": "2020",
//     "title": "Google Startups",
//     "subtitle": "Part of Google Startups",
//     "description": "Joined Google Startups program to accelerate growth",
//     "color": "#0EA5E9"
//   },
//   {
//     "year": "2021",
//     "title": "Early Growth",
//     "subtitle": "Pre-Seed Funding & BoltChem Beta",
//     "description": "Raised $100k pre-seed, launched BoltChem beta, started commercial operations, and became part of Microsoft Startups",
//     "color": "#10B981"
//   },
//   {
//     "year": "2022",
//     "title": "Expansion",
//     "subtitle": "Partnerships",
//     "description": "2 Partnerships (US Biotech, Top research lab) and 1 joint venture",
//     "color": "#F59E0B"
//   },
//   {
//     "year": "2023",
//     "title": "Product Launches",
//     "subtitle": "ReBolt SaaS Launch & Collaborations",
//     "description": "Launched ReBolt SaaS, BoltPro beta, collaborated with Indian big pharma, 100 case studies using BoltChem, antibody and enzyme collaborations",
//     "color": "#EC4899"
//   },
//   {
//     "year": "2024",
//     "title": "Innovation",
//     "subtitle": "Multiple Betas",
//     "description": "Launched Boltbio alpha, Multi Agents beta with NASSCOM AI & SINE incubation",
//     "color": "#6366F1"
//   },
//   {
//     "year": "2025",
//     "title": "AI Discovery",
//     "subtitle": "BZ AI Suite & Clinbolt Beta",
//     "description": "Launched BZ AI discovery suite, Clinbolt beta, and first self-driven lab",
//     "color": "#F97316"
//   }
// ];


//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const pathVariants = {
//     hidden: { pathLength: 0 },
//     visible: {
//       pathLength: 1,
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const circleVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.8
//       }
//     }
//   };

//   const yearTextVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Calculate positions based on screen size
//   const calculateXPosition = (index, total) => {
//     if (isMobile) {
//       return 150;
//     }
//     return 150 + (index * 150);
//   };

//   const calculateYPosition = (index, total) => {
//     if (isMobile) {
//       return 150 + (index * 200);
//     }
//     return 200;
//   };

//   const calculatePath = () => {
//     if (isMobile) {
//       const firstY = calculateYPosition(0, years.length);
//       const lastY = calculateYPosition(years.length - 1, years.length);
//       return `M 150,${firstY} L 150,${lastY}`;
//     } else {
//       const firstX = calculateXPosition(0, years.length);
//       const lastX = calculateXPosition(years.length - 1, years.length);
//       return `M ${firstX},200 L ${lastX},200`;
//     }
//   };

//   const calculateCardOffset = (index) => {
//     if (isMobile) {
//       return { x: 0, y: 80 }; // Changed to place boxes directly below circles
//     }
//     return { x: 0, y: index % 2 === 0 ? 100 : -100 }; // Changed to vertical lines
//   };

//   return (
//     <div className="min-h-screen bg-white py-16 px-4 sm:px-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <motion.div 
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//           variants={containerVariants}
//         >
//           {/* Desktop SVG */}
//           {!isMobile && (
//             <svg 
//               className="w-full h-[600px] hidden lg:block" 
//               viewBox="0 0 1200 600" 
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <defs>
//                 <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                 </linearGradient>
                
//                 <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                   <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                   <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                   <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                   <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                   <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                 </linearGradient>

//                 <filter id="dropShadow">
//                   <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                 </filter>
//               </defs>

//               <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
//                 <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F1F5F9" strokeWidth="1" strokeOpacity="0.5"/>
//               </pattern>
//               <rect width="1200" height="600" fill="url(#grid)" />

//               {/* Main horizontal path */}
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="#E2E8F0"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//               />
              
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="url(#pathGradient)"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 variants={pathVariants}
//               />

//               {/* Vertical connection lines */}
//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const offset = calculateCardOffset(index);
//                 return (
//                   <motion.path
//                     key={`line-${index}`}
//                     d={`M ${xPos},${yPos} L ${xPos},${yPos + offset.y}`}
//                     fill="none"
//                     stroke="#64748B"
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     variants={{
//                       hidden: { opacity: 0 },
//                       visible: { opacity: 1 }
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 );
//               })}

//               {/* Main circular indicators and cards */}
//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const radius = 36;
//                 const gradientId = `gradient${index + 1}`;
//                 const offset = calculateCardOffset(index);
//                 const boxX = xPos;
//                 const boxY = yPos + offset.y;
//                 const boxHeight = 100;
//                 const boxWidth = 180;
//                 const boxPadding = 200;
                
//                 return (
//                   <g key={index}>
//                     {/* Background circle */}
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius }
//                       fill="#F8FAFC"
//                       stroke="#E2E8F0"
//                       strokeWidth="2"
//                       filter="url(#dropShadow)"
//                       variants={circleVariants}
//                     />
                    
//                     {/* Progress background */}
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke="#F1F5F9"
//                       strokeWidth="8"
//                       variants={circleVariants}
//                     />
                    
//                     {/* Colored ring */}
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke={`url(#${gradientId})`}
//                       strokeWidth="8"
//                       strokeLinecap="round"
//                       initial={{ pathLength: 0 }}
//                       animate={{ pathLength: 1 }}
//                       transition={{ duration: 1.5, ease: "easeInOut" }}
//                     />

//                     {/* Year text */}
//                     <motion.text
//                       x={xPos}
//                       y={yPos}
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       fill={year.color}
//                       style={{ fontWeight: 'bold', fontSize: '18px' }}
//                       variants={yearTextVariants}
//                     >
//                       {year.year}
//                     </motion.text>

//                     {/* Info cards */}
//                     <motion.g variants={cardVariants}>
//                       <rect
//                         x={boxX - boxWidth/2}
//                         y={boxY - boxHeight/2}
//                         width={boxWidth}
//                         height={boxHeight}
//                         padding={boxPadding}
//                         rx="12"
//                         fill="white"
//                         stroke="#E2E8F0"
//                         strokeWidth="1"
//                         filter="url(#dropShadow)"
//                       />
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + 25}
//                         textAnchor="middle"
//                         style={{ fontSize: '14px', fontWeight: 'bold' }}
//                         fill="#1E293B"
//                       >
//                         {year.title}
//                       </text>
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + 45}
//                         textAnchor="middle"
//                         style={{ fontSize: '12px', fontWeight: '600' }}
//                         fill={year.color}
//                       >
//                         {year.subtitle}
//                       </text>
                      
//                       {year.description.split(' ').reduce((acc, word, i, arr) => {
//                         const lineIndex = Math.floor(i / 5);
//                         if (!acc[lineIndex]) acc[lineIndex] = [];
//                         acc[lineIndex].push(word);
//                         return acc;
//                       }, []).map((line, lineIndex) => (
//                         <text
//                           key={lineIndex}
//                           x={boxX}
//                           y={boxY - boxHeight/2 + 65 + (lineIndex * 15)}
//                           textAnchor="middle"
//                           style={{ fontSize: '11px' }}
//                           fill="#64748B"
//                         >
//                           {line.join(' ')}
//                         </text>
//                       ))}
//                     </motion.g>
//                   </g>
//                 );
//               })}
//             </svg>
//           )}

//           {/* Mobile/Tablet SVG */}
//           {isMobile && (
//             <div className="relative h-full w-full lg:hidden" style={{ height: `${years.length * 180 + 100}px` }}>
//               <svg 
//                 className="w-full h-full" 
//                 viewBox={`0 0 300 ${years.length * 180 + 100}`} 
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <defs>
//                   <linearGradient id="mgradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                   </linearGradient>
                  
//                   <linearGradient id="mpathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                     <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                     <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                     <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                     <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                     <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                     <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                   </linearGradient>

//                   <filter id="mdropShadow">
//                     <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                   </filter>
//                 </defs>

//                 <pattern id="mgrid" width="50" height="50" patternUnits="userSpaceOnUse">
//                   <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F1F5F9" strokeWidth="1" strokeOpacity="0.5"/>
//                 </pattern>
//                 <rect width="300" height={years.length * 180 + 100} fill="url(#mgrid)" />

//                 {/* Vertical connection path */}
//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="#E2E8F0"
//                   strokeWidth="3"
//                   strokeDasharray="8,4"
//                 />
                
//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="url(#mpathGradient)"
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                   variants={pathVariants}
//                 />

//                 {/* Main circular indicators and cards */}
//                 {years.map((year, index) => {
//                   const xPos = calculateXPosition(index, years.length);
//                   const yPos = calculateYPosition(index, years.length);
//                   const radius = 30;
//                   const gradientId = `mgradient${index + 1}`;
//                   const boxHeight = 100;
//                   const boxWidth = 160;
                  
//                   return (
//                     <g key={index}>
//                       {/* Background circle */}
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius + 8}
//                         fill="#F8FAFC"
//                         stroke="#E2E8F0"
//                         strokeWidth="2"
//                         filter="url(#mdropShadow)"
//                         variants={circleVariants}
//                       />
                      
//                       {/* Progress background */}
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke="#F1F5F9"
//                         strokeWidth="6"
//                         variants={circleVariants}
//                       />
                      
//                       {/* Colored ring */}
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke={`url(#${gradientId})`}
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         initial={{ pathLength: 0 }}
//                         animate={{ pathLength: 1 }}
//                         transition={{ duration: 1.5, ease: "easeInOut" }}
//                       />

//                       {/* Year text */}
//                       <motion.text
//                         x={xPos}
//                         y={yPos}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                         fill={year.color}
//                         style={{ fontWeight: 'bold', fontSize: '14px' }}
//                         variants={yearTextVariants}
//                       >
//                         {year.year}
//                       </motion.text>

//                       {/* Info cards - placed directly below circles */}
//                       <motion.g variants={cardVariants}>
//                         <rect
//                           x={xPos - boxWidth/2}
//                           y={yPos + 50}
//                           width={boxWidth}
//                           height={boxHeight}
//                           rx="12"
//                           fill="white"
//                           stroke="#E2E8F0"
//                           strokeWidth="1"
//                           filter="url(#mdropShadow)"
//                         />
                        
//                         <text
//                           x={xPos}
//                           y={yPos + 75}
//                           textAnchor="middle"
//                           style={{ fontSize: '12px', fontWeight: 'bold' }}
//                           fill="#1E293B"
//                         >
//                           {year.title}
//                         </text>
                        
//                         <text
//                           x={xPos}
//                           y={yPos + 95}
//                           textAnchor="middle"
//                           style={{ fontSize: '10px', fontWeight: '600' }}
//                           fill={year.color}
//                         >
//                           {year.subtitle}
//                         </text>
                        
//                         {year.description.split(' ').reduce((acc, word, i, arr) => {
//                           const lineIndex = Math.floor(i / 4);
//                           if (!acc[lineIndex]) acc[lineIndex] = [];
//                           acc[lineIndex].push(word);
//                           return acc;
//                         }, []).map((line, lineIndex) => (
//                           <text
//                             key={lineIndex}
//                             x={xPos}
//                             y={yPos + 115 + (lineIndex * 12)}
//                             textAnchor="middle"
//                             style={{ fontSize: '9px' }}
//                             fill="#64748B"
//                           >
//                             {line.join(' ')}
//                           </text>
//                         ))}
//                       </motion.g>
//                     </g>
//                   );
//                 })}
//               </svg>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default YearlyTimeline;
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useMediaQuery } from 'react-responsive';

// const YearlyTimeline = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

//   const years = [
//     {
//       "year": "2019",
//       "title": "Foundation",
//       "subtitle": "Founded as a research group",
//       "description": "Began as a research group focused on scientific innovation in Bangalore, India",
//       "color": "#8B5CF6"
//     },
//     {
//       "year": "2020",
//       "title": "Google Startups",
//       "subtitle": "Accelerated Growth",
//       "description": "Selected for Google Startups program to accelerate our technology development",
//       "color": "#0EA5E9"
//     },
//     {
//       "year": "2021",
//       "title": "Early Growth",
//       "subtitle": "Funding & First Product",
//       "description": "Raised $100k pre-seed funding, launched BoltChem beta, and joined Microsoft Startups",
//       "color": "#10B981"
//     },
//     {
//       "year": "2022",
//       "title": "Expansion",
//       "subtitle": "Strategic Partnerships",
//       "description": "Formed 2 key partnerships (US Biotech firm and top research lab) and 1 joint venture",
//       "color": "#F59E0B"
//     },
//     {
//       "year": "2023",
//       "title": "Product Launches",
//       "subtitle": "SaaS Platform & Collaborations",
//       "description": "Launched ReBolt SaaS and BoltPro beta. Collaborated with Indian pharmaceutical leaders",
//       "color": "#EC4899"
//     },
//     {
//       "year": "2024",
//       "title": "Innovation",
//       "subtitle": "AI Advancements",
//       "description": "Launched Boltbio alpha and Multi Agents beta with NASSCOM AI & SINE incubation",
//       "color": "#6366F1"
//     },
//     {
//       "year": "2025",
//       "title": "AI Discovery",
//       "subtitle": "Breakthrough Technologies",
//       "description": "Launched BZ AI discovery suite, Clinbolt beta, and established first self-driven lab",
//       "color": "#F97316"
//     }
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const pathVariants = {
//     hidden: { pathLength: 0 },
//     visible: {
//       pathLength: 1,
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const circleVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.8
//       }
//     }
//   };

//   const yearTextVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Calculate positions based on screen size
//   const calculateXPosition = (index, total) => {
//     if (isMobile) {
//       return 150;
//     }
//     return 150 + (index * 180); // Increased spacing between years
//   };

//   const calculateYPosition = (index, total) => {
//     if (isMobile) {
//       return 150 + (index * 220); // Increased vertical spacing for mobile
//     }
//     return 200;
//   };

//   const calculatePath = () => {
//     if (isMobile) {
//       const firstY = calculateYPosition(0, years.length);
//       const lastY = calculateYPosition(years.length - 1, years.length);
//       return `M 150,${firstY} L 150,${lastY}`;
//     } else {
//       const firstX = calculateXPosition(0, years.length);
//       const lastX = calculateXPosition(years.length - 1, years.length);
//       return `M ${firstX},200 L ${lastX},200`;
//     }
//   };

//   const calculateCardOffset = (index) => {
//     if (isMobile) {
//       return { x: 0, y: 80 };
//     }
//     return { x: 0, y: index % 2 === 0 ? 140 : -140 }; // Increased vertical offset for desktop
//   };

//   return (
//     <div className="min-h-screen bg-white py-16 px-4 sm:px-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Journey Through the Years</h2>
//         <motion.div 
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//           variants={containerVariants}
//         >
//           {/* Desktop SVG */}
//           {!isMobile && (
//             <svg 
//               className="w-full h-[700px] hidden lg:block" 
//               viewBox="0 0 1400 700" 
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <defs>
//                 <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                 </linearGradient>
                
//                 <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                   <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                   <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                   <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                   <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                   <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                 </linearGradient>

//                 <filter id="dropShadow">
//                   <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                 </filter>
//               </defs>

//               <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
//                 <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F1F5F9" strokeWidth="1" strokeOpacity="0.5"/>
//               </pattern>
//               <rect width="1400" height="700" fill="url(#grid)" />

//               {/* Main horizontal path */}
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="#E2E8F0"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//               />
              
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="url(#pathGradient)"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 variants={pathVariants}
//               />

//               {/* Vertical connection lines */}
//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const offset = calculateCardOffset(index);
//                 return (
//                   <motion.path
//                     key={`line-${index}`}
//                     d={`M ${xPos},${yPos} L ${xPos},${yPos + (offset.y > 0 ? offset.y - 20 : offset.y + 20)}`}
//                     fill="none"
//                     stroke={year.color}
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     strokeOpacity="0.5"
//                     variants={{
//                       hidden: { opacity: 0 },
//                       visible: { opacity: 1 }
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 );
//               })}

//               {/* Main circular indicators and cards */}
//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const radius = 40;
//                 const gradientId = `gradient${index + 1}`;
//                 const offset = calculateCardOffset(index);
//                 const boxX = xPos;
//                 const boxY = yPos + offset.y;
//                 const boxHeight = 140; // Increased height
//                 const boxWidth = 220; // Increased width
                
//                 return (
//                   <g key={index}>
//                     {/* Background circle */}
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius + 8}
//                       fill="#F8FAFC"
//                       stroke="#E2E8F0"
//                       strokeWidth="2"
//                       filter="url(#dropShadow)"
//                       variants={circleVariants}
//                     />
                    
//                     {/* Progress background */}
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke="#F1F5F9"
//                       strokeWidth="8"
//                       variants={circleVariants}
//                     />
                    
//                     {/* Colored ring */}
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke={`url(#${gradientId})`}
//                       strokeWidth="8"
//                       strokeLinecap="round"
//                       initial={{ pathLength: 0 }}
//                       animate={{ pathLength: 1 }}
//                       transition={{ duration: 1.5, ease: "easeInOut" }}
//                     />

//                     {/* Year text */}
//                     <motion.text
//                       x={xPos}
//                       y={yPos}
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       fill={year.color}
//                       style={{ fontWeight: 'bold', fontSize: '18px' }}
//                       variants={yearTextVariants}
//                     >
//                       {year.year}
//                     </motion.text>

//                     {/* Info cards */}
//                     <motion.g variants={cardVariants}>
//                       <rect
//                         x={boxX - boxWidth/2}
//                         y={boxY - boxHeight/2}
//                         width={boxWidth}
//                         height={boxHeight}
//                         rx="12"
//                         fill="white"
//                         stroke="#E2E8F0"
//                         strokeWidth="1"
//                         filter="url(#dropShadow)"
//                       />
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + 30}
//                         textAnchor="middle"
//                         style={{ fontSize: '16px', fontWeight: 'bold' }}
//                         fill="#1E293B"
//                       >
//                         {year.title}
//                       </text>
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + 55}
//                         textAnchor="middle"
//                         style={{ fontSize: '14px', fontWeight: '600' }}
//                         fill={year.color}
//                       >
//                         {year.subtitle}
//                       </text>
                      
//                       {/* Description with proper line breaks */}
//                       <foreignObject 
//                         x={boxX - boxWidth/2 + 15} 
//                         y={boxY - boxHeight/2 + 75} 
//                         width={boxWidth - 30} 
//                         height={boxHeight - 85}
//                       >
//                         <div 
//                           xmlns="http://www.w3.org/1999/xhtml"
//                           style={{
//                             fontSize: '12px',
//                             color: '#64748B',
//                             lineHeight: '1.5',
//                             textAlign: 'center'
//                           }}
//                         >
//                           {year.description}
//                         </div>
//                       </foreignObject>
//                     </motion.g>
//                   </g>
//                 );
//               })}
//             </svg>
//           )}

//           {/* Mobile/Tablet SVG */}
//           {isMobile && (
//             <div className="relative w-full lg:hidden" style={{ height: `${years.length * 240 + 100}px` }}>
//               <svg 
//                 className="w-full h-full" 
//                 viewBox={`0 0 300 ${years.length * 240 + 100}`} 
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <defs>
//                   <linearGradient id="mgradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                   </linearGradient>
                  
//                   <linearGradient id="mpathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                     <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                     <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                     <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                     <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                     <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                     <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                   </linearGradient>

//                   <filter id="mdropShadow">
//                     <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                   </filter>
//                 </defs>

//                 <pattern id="mgrid" width="50" height="50" patternUnits="userSpaceOnUse">
//                   <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F1F5F9" strokeWidth="1" strokeOpacity="0.5"/>
//                 </pattern>
//                 <rect width="300" height={years.length * 240 + 100} fill="url(#mgrid)" />

//                 {/* Vertical connection path */}
//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="#E2E8F0"
//                   strokeWidth="3"
//                   strokeDasharray="8,4"
//                 />
                
//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="url(#mpathGradient)"
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                   variants={pathVariants}
//                 />

//                 {/* Main circular indicators and cards */}
//                 {years.map((year, index) => {
//                   const xPos = calculateXPosition(index, years.length);
//                   const yPos = calculateYPosition(index, years.length);
//                   const radius = 30;
//                   const gradientId = `mgradient${index + 1}`;
//                   const boxHeight = 130;
//                   const boxWidth = 200;
                  
//                   return (
//                     <g key={index}>
//                       {/* Background circle */}
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius + 8}
//                         fill="#F8FAFC"
//                         stroke="#E2E8F0"
//                         strokeWidth="2"
//                         filter="url(#mdropShadow)"
//                         variants={circleVariants}
//                       />
                      
//                       {/* Progress background */}
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke="#F1F5F9"
//                         strokeWidth="6"
//                         variants={circleVariants}
//                       />
                      
//                       {/* Colored ring */}
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke={`url(#${gradientId})`}
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         initial={{ pathLength: 0 }}
//                         animate={{ pathLength: 1 }}
//                         transition={{ duration: 1.5, ease: "easeInOut" }}
//                       />

//                       {/* Year text */}
//                       <motion.text
//                         x={xPos}
//                         y={yPos}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                         fill={year.color}
//                         style={{ fontWeight: 'bold', fontSize: '14px' }}
//                         variants={yearTextVariants}
//                       >
//                         {year.year}
//                       </motion.text>

//                       {/* Info cards - placed directly below circles */}
//                       <motion.g variants={cardVariants}>
//                         <rect
//                           x={xPos - boxWidth/2}
//                           y={yPos + 50}
//                           width={boxWidth}
//                           height={boxHeight}
//                           rx="12"
//                           fill="white"
//                           stroke="#E2E8F0"
//                           strokeWidth="1"
//                           filter="url(#mdropShadow)"
//                         />
                        
//                         <text
//                           x={xPos}
//                           y={yPos + 80}
//                           textAnchor="middle"
//                           style={{ fontSize: '14px', fontWeight: 'bold' }}
//                           fill="#1E293B"
//                         >
//                           {year.title}
//                         </text>
                        
//                         <text
//                           x={xPos}
//                           y={yPos + 105}
//                           textAnchor="middle"
//                           style={{ fontSize: '12px', fontWeight: '600' }}
//                           fill={year.color}
//                         >
//                           {year.subtitle}
//                         </text>
                        
//                         {/* Description with proper line breaks */}
//                         <foreignObject 
//                           x={xPos - boxWidth/2 + 15} 
//                           y={yPos + 120} 
//                           width={boxWidth - 30} 
//                           height={boxHeight - 80}
//                         >
//                           <div 
//                             xmlns="http://www.w3.org/1999/xhtml"
//                             style={{
//                               fontSize: '11px',
//                               color: '#64748B',
//                               lineHeight: '1.4',
//                               textAlign: 'center'
//                             }}
//                           >
//                             {year.description}
//                           </div>
//                         </foreignObject>
//                       </motion.g>
//                     </g>
//                   );
//                 })}
//               </svg>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default YearlyTimeline;


// import React, { useEffect, useRef, useState } from 'react';
// import Footer from '../components/Footer';
// import InsightCards from '../components/InsightsSection';
// import MainPageherocontent from '../pages/Mainpageherocontent';
// import LaptopSection from '../pages/LandingPage';
// import { motion, useAnimation } from 'framer-motion';
// import ExploreModulesSection from '../components/Modules';
// import LabAutomationSection from '../components/LabAutomationSection';
// import Images from '../components/Images'

// export default function HomePage() {
//   const insightSectionRef = useRef(null);
//   const laptopSectionRef = useRef(null);
//   const modulesSectionRef = useRef(null);
//   const [isLaptopVisible, setIsLaptopVisible] = useState(false);
//   const [isModulesVisible, setIsModulesVisible] = useState(false);
//   const [underlineProgress, setUnderlineProgress] = useState(0);

//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = 'smooth';
//     return () => (document.documentElement.style.scrollBehavior = 'auto');
//   }, []);

//   const scrollToInsights = () => insightSectionRef.current?.scrollIntoView({ behavior: 'smooth' });

//   useEffect(() => {
//     const handleScroll = () => {
//       if (modulesSectionRef.current) {
//         const rect = modulesSectionRef.current.getBoundingClientRect();
//         const viewportHeight = window.innerHeight;
//         const visibleRatio = Math.min(1, Math.max(0, (viewportHeight - rect.top) / viewportHeight));
//         setUnderlineProgress(visibleRatio);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const observers = [];

//     const laptopObserver = new IntersectionObserver(
//       (entries) => entries.forEach((entry) => entry.isIntersecting && setIsLaptopVisible(true)),
//       { threshold: 0.2 }
//     );

//     const modulesObserver = new IntersectionObserver(
//       (entries) => entries.forEach((entry) => entry.isIntersecting && setIsModulesVisible(true)),
//       { threshold: 0.1 }
//     );

//     if (laptopSectionRef.current) laptopObserver.observe(laptopSectionRef.current) && observers.push(laptopObserver);
//     if (modulesSectionRef.current) modulesObserver.observe(modulesSectionRef.current) && observers.push(modulesObserver);

//     return () => observers.forEach((observer) => observer.disconnect());
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
//   };

//   return (
//     <div style={{ 
//       display: 'flex', 
//       flexDirection: 'column', 
//       minHeight: '100vh', 
//       overflowX: 'hidden', 
//       width: '100%',
//       margin: 0,
//       padding: 0 
//     }}>
//       <main style={{ 
//         flex: 1, 
//         width: '100%',
//         margin: 0,
//         padding: 0 
//       }}>
//         {/* HERO */}
//         <MainPageherocontent onScrollDown={scrollToInsights} />
//         {/*Images*/}
//         <Images />

//         {/* INSIGHTS */}
//         <motion.div
//           ref={insightSectionRef}
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           style={{ 
//             width: '100%', 
//             padding: '40px 5%', 
//             boxSizing: 'border-box',
//             margin: 0
//           }}
//         >
//           {/* INSIGHT CARDS */}
//           <motion.div 
//             variants={itemVariants}
//             style={{ marginBottom: '80px' }}
//           >
//             <InsightCards />
//           </motion.div>

//           {/* Section Header */}
//           <div style={{ 
//             textAlign: 'center', 
//             position: 'relative',
            
//           }}>
//             <h2 style={{ 
//               fontFamily: "'Inter', sans-serif", 
//               fontSize: '42px', 
//               fontWeight: '200', 
//               color: '#111827', 
//               margin: 0,
//               padding: 0,
              
//             }}>
//               Why teams choose Boltzmann Suite
//             </h2>
//             <span
//               style={{
//                 position: 'absolute',
//                 bottom: '-10px',
//                 left: '50%',
//                 transform: 'translateX(-50%)',
//                 width: '100px',
//                 height: '3px',
//                 background: 'linear-gradient(90deg, rgba(34,211,238,0.8), rgba(192,132,252,0.8), rgba(251,146,60,0.8))',
//                 borderRadius: '2px',
               
//               }}
//             />
//           </div>

//           {/* Lab Automation Sections */}
       

//            <div >
//             <LabAutomationSection
//               icon="⚛️"
//               heading="Gen AI for Scientific Precision"
//               paragraphs={[
//                 'Unifies all stages of the discovery lifecycle.',
//                 'Connects molecular generation to synthesis and execution.',
//                 'Automates workflows with real-time data exchange.',
//               ]}
//             />
//           </div>

//           <div >
//             <LabAutomationSection
//               icon="🧬"
//               heading="Integrated LIMS with customizable APIs and CLI-first workflows for seamless operations."
//               paragraphs={[
//                 'Unifies all stages of the discovery lifecycle.',
//                 'Connects molecular generation to synthesis and execution.',
//                 'Automates workflows with real-time data exchange.',
//               ]}
//             />
//           </div>

//           {/* Modules & Underline */}
//           <motion.div
//             ref={modulesSectionRef}
//             variants={itemVariants}
//             style={{ 
         
//               display: 'flex', 
//               justifyContent: 'center', 
//               position: 'relative',
//               width: '100%'
//             }}
//           >
//             <div style={{ 
//               position: 'absolute', 
//               bottom: -8, 
//               left: 0, 
//               width: '100%', 
//               height: 2, 
//               overflow: 'hidden' 
//             }}>
//               <motion.div
//                 style={{ 
//                   height: '100%', 
//                   width: '100%', 
//                   transformOrigin: 'left center', 
                  
//                 }}
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: underlineProgress }}
//                 transition={{ duration: 0.3, ease: 'easeOut' }}
//               />
//             </div>
//             <div style={{ 
//               maxWidth: '1400px', 
//               width: '100%',
             
//               boxSizing: 'border-box'
//             }}>
//               <ExploreModulesSection isVisible={isModulesVisible} />
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* LAPTOP SECTION */}
//         <motion.div
//           ref={laptopSectionRef}
//           initial={{ opacity: 0, y: 50 }}
//           animate={
//             isLaptopVisible
//               ? { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 100, delay: 0.2 } }
//               : {}
//           }
//           style={{ 
//             width: '100%', 
//             display: 'flex', 
//             justifyContent: 'center', 
          
//             boxSizing: 'border-box'
//           }}
//         >
//           <div style={{ 
//             display: 'flex', 
//             flexDirection: 'row', 
//             justifyContent: 'center', 
//             width: '100%', 
//             maxWidth: '1400px',
          
//           }}>
//             <LaptopSection isOpen={isLaptopVisible} />
//           </div>
//         </motion.div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

//// import React from "react";
// import { FaBullhorn, FaChartLine, FaFire, FaRobot, FaSyncAlt, FaExpand } from "react-icons/fa";

// const BusinessGuidance = () => {
//   const cards = [
    
//     {
//       title: "AI + Automation",
//       text: "Orchestrating multi-agent systems that handle complex research workflows.",
//       icon: <FaRobot className="icon" />,
//       color: "#2EC4B6" // Mint
//     },
//     {
//       title: "Seamless Integration",
//       text: "From in silico modeling to lab automation, our tools connect the dots.",
//       icon: <FaSyncAlt className="icon" />,
//       color: "#E71D36" // Red
//     },
//     {
//       title: "Scalable Innovation",
//       text: "Flexible enough for startups, powerful enough for enterprise R&D.",
//       icon: <FaExpand className="icon" />,
//       color: "#662E9B" // Deep purple
//     }
//   ];

//   return (
//     <section className="business-guidance">
//       <div className="container">
//         <h2 className="section-title">
//           Guide your business forward with media intelligence.
//           <span className="title-underline"></span>
//         </h2>

//         <div className="cards-container">
//           {cards.map((card, index) => (
//             <div 
//               key={index}
//               className="guidance-card"
//               style={{ backgroundColor: card.color }}
//             >
//               <div className="card-icon">{card.icon}</div>
//               <h3 className="card-title">{card.title}</h3>
//               <p className="card-text">{card.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .business-guidance {
//           padding: 80px 20px;
//           text-align: center;
//           background-color: #f8f9fa;
//         }
        
//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }
        
//         .section-title {
//           font-size: 2.5rem;
//           margin-bottom: 60px;
//           color: #2b2d42;
//           font-weight: 500;
//           line-height: 1.3;
//         }
        
//         .title-underline {
//           display: block;
//           width: 100px;
//           height: 4px;
//           background: linear-gradient(90deg, #6C63FF, #00B4D8);
//           margin: 20px auto 0;
//           border-radius: 2px;
//         }
        
//         .cards-container {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 30px;
//           justify-content: center;
//         }
        
//         .guidance-card {
//           color: #fff;
//           border-radius: 16px;
//           padding: 40px 30px;
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           text-align: left;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.1);
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           min-height: 280px;
//         }
        
//         .guidance-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 15px 35px rgba(0,0,0,0.15);
//         }
        
//         .card-icon {
//           font-size: 2rem;
//           margin-bottom: 20px;
//           background-color: rgba(255,255,255,0.2);
//           width: 60px;
//           height: 60px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
        
//         .card-title {
//           font-size: 1.4rem;
//           font-weight: 600;
//           margin-bottom: 15px;
//           line-height: 1.3;
//         }
        
//         .card-text {
//           font-size: 1rem;
//           line-height: 1.6;
//           opacity: 0.9;
//         }
        
//         @media (max-width: 1024px) {
//           .section-title {
//             font-size: 2.2rem;
//             margin-bottom: 50px;
//           }
          
//           .guidance-card {
//             padding: 30px 25px;
//             min-height: 260px;
//           }
//         }
        
//         @media (max-width: 768px) {
//           .business-guidance {
//             padding: 60px 20px;
//           }
          
//           .section-title {
//             font-size: 2rem;
//             margin-bottom: 40px;
//           }
          
//           .cards-container {
//             grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           }
//         }
        
//         @media (max-width: 480px) {
//           .business-guidance {
//             padding: 50px 15px;
//           }
          
//           .section-title {
//             font-size: 1.8rem;
//             margin-bottom: 30px;
//           }
          
//           .guidance-card {
//             padding: 25px 20px;
//             min-height: auto;
//           }
          
//           .card-title {
//             font-size: 1.3rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default BusinessGuidance;

//timeline - useful

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useMediaQuery } from 'react-responsive';

// const YearlyTimeline = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

//   const years = [
//     {
//       "year": "2019",
//       "title": "Foundation",
//       "subtitle": "Founded as a research group",
//       "description": "Began as a research group focused on scientific innovation in Bangalore, India",
//       "color": "#8B5CF6"
//     },
//     {
//       "year": "2020",
//       "title": "Google Startups",
//       "subtitle": "Accelerated Growth",
//       "description": "Selected for Google Startups program to accelerate our technology development",
//       "color": "#0EA5E9"
//     },
//     {
//       "year": "2021",
//       "title": "Early Growth",
//       "subtitle": "Funding & First Product",
//       "description": "Raised $100k pre-seed funding, launched BoltChem beta, and joined Microsoft Startups",
//       "color": "#10B981"
//     },
//     {
//       "year": "2022",
//       "title": "Expansion",
//       "subtitle": "Strategic Partnerships",
//       "description": "Formed 2 key partnerships (US Biotech firm and top research lab) and 1 joint venture",
//       "color": "#F59E0B"
//     },
//     {
//       "year": "2023",
//       "title": "Product Launches",
//       "subtitle": "SaaS Platform & Collaborations",
//       "description": "Launched ReBolt SaaS and BoltPro beta. Collaborated with Indian pharmaceutical leaders",
//       "color": "#EC4899"
//     },
//     {
//       "year": "2024",
//       "title": "Innovation",
//       "subtitle": "AI Advancements",
//       "description": "Launched Boltbio alpha and Multi Agents beta with NASSCOM AI & SINE incubation",
//       "color": "#6366F1"
//     },
//     {
//       "year": "2025",
//       "title": "AI Discovery",
//       "subtitle": "Breakthrough Technologies",
//       "description": "Launched BZ AI discovery suite, Clinbolt beta, and established first self-driven lab",
//       "color": "#F97316"
//     }
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const pathVariants = {
//     hidden: { pathLength: 0 },
//     visible: {
//       pathLength: 1,
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const circleVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.8
//       }
//     }
//   };

//   const yearTextVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Calculate positions based on screen size
//   const calculateXPosition = (index, total) => {
//     if (isMobile) {
//       return 150; // Centered for mobile
//     }
//     return 150 + (index * 180); // Increased spacing between years
//   };

//   const calculateYPosition = (index, total) => {
//     if (isMobile) {
//       return 100 + (index * 220); // Increased vertical spacing for mobile
//     }
//     return 200;
//   };

//   const calculatePath = () => {
//     if (isMobile) {
//       const firstY = calculateYPosition(0, years.length);
//       const lastY = calculateYPosition(years.length - 1, years.length);
//       return `M 150,${firstY} L 150,${lastY}`;
//     } else {
//       const firstX = calculateXPosition(0, years.length);
//       const lastX = calculateXPosition(years.length - 1, years.length);
//       return `M ${firstX},200 L ${lastX},200`;
//     }
//   };

//   const calculateCardOffset = (index) => {
//     if (isMobile) {
//       return { x: 0, y: 80 };
//     }
//     return { x: 0, y: index % 2 === 0 ? 140 : -140 }; // Increased vertical offset for desktop
//   };

//   return (
//     <div className="min-h-screen bg-white py-16 px-4 sm:px-8 overflow-hidden" style={{marginTop: '20px'}}>
//       <div className="max-w-7xl mx-auto">
//         <h2 style={{textAlign: 'center',marginTop: '8%',marginBottom: '6%',fontWeight: 400,color: '#4F1985',fontSize: '2.5rem'}}>Our Journey. <span
//             style={{
//               display: "block",
//               width: "80px",
//               height: "4px",
//               backgroundColor: "#4F1985",
//               margin: "15px auto 0",
            
//               borderRadius: "2px"
//             }}
//           /></h2>
//         <motion.div 
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//           variants={containerVariants}
//         >
//           {/* Desktop SVG */}
//           {!isMobile && (
//             <svg 
//               className="w-full h-[700px] hidden lg:block" 
//               viewBox="0 0 1400 700" 
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <defs>
//                 <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                 </linearGradient>
                
//                 <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                   <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                   <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                   <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                   <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                   <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                 </linearGradient>

//                 <filter id="dropShadow">
//                   <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                 </filter>
//               </defs>

//               <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
//                 <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F1F5F9" strokeWidth="1" strokeOpacity="0.5"/>
//               </pattern>
//               <rect width="1400" height="700" fill="url(#grid)" />

//               {/* Main horizontal path */}
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="#E2E8F0"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//               />
              
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="url(#pathGradient)"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 variants={pathVariants}
//               />

//               {/* Vertical connection lines */}
//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const offset = calculateCardOffset(index);
//                 return (
//                   <motion.path
//                     key={`line-${index}`}
//                     d={`M ${xPos},${yPos} L ${xPos},${yPos + (offset.y > 0 ? offset.y - 20 : offset.y + 20)}`}
//                     fill="none"
//                     stroke={year.color}
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     strokeOpacity="0.5"
//                     variants={{
//                       hidden: { opacity: 0 },
//                       visible: { opacity: 1 }
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 );
//               })}

//               {/* Main circular indicators and cards */}
//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const radius = 40;
//                 const gradientId = `gradient${index + 1}`;
//                 const offset = calculateCardOffset(index);
//                 const boxX = xPos;
//                 const boxY = yPos + offset.y;
//                 const boxHeight = 140; // Increased height
//                 const boxWidth = 220; // Increased width
                
//                 return (
//                   <g key={index}>
//                     {/* Background circle */}
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius + 8}
//                       fill="#F8FAFC"
//                       stroke="#E2E8F0"
//                       strokeWidth="2"
//                       filter="url(#dropShadow)"
//                       variants={circleVariants}
//                     />
                    
//                     {/* Progress background */}
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke="#F1F5F9"
//                       strokeWidth="8"
//                       variants={circleVariants}
//                     />
                    
//                     {/* Colored ring */}
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke={`url(#${gradientId})`}
//                       strokeWidth="8"
//                       strokeLinecap="round"
//                       initial={{ pathLength: 0 }}
//                       animate={{ pathLength: 1 }}
//                       transition={{ duration: 1.5, ease: "easeInOut" }}
//                     />

//                     {/* Year text */}
//                     <motion.text
//                       x={xPos}
//                       y={yPos}
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       fill={year.color}
//                       style={{ fontWeight: 'bold', fontSize: '18px' }}
//                       variants={yearTextVariants}
//                     >
//                       {year.year}
//                     </motion.text>

//                     {/* Info cards */}
//                     <motion.g variants={cardVariants}>
//                       <rect
//                         x={boxX - boxWidth/2}
//                         y={boxY - boxHeight/2}
//                         width={boxWidth}
//                         height={boxHeight}
//                         rx="12"
//                         fill="white"
//                         stroke="#E2E8F0"
//                         strokeWidth="1"
//                         filter="url(#dropShadow)"
//                       />
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + 30}
//                         textAnchor="middle"
//                         style={{ fontSize: '16px', fontWeight: 'bold' }}
//                         fill="#1E293B"
//                       >
//                         {year.title}
//                       </text>
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + 55}
//                         textAnchor="middle"
//                         style={{ fontSize: '14px', fontWeight: '600' }}
//                         fill={year.color}
//                       >
//                         {year.subtitle}
//                       </text>
                      
//                       {/* Description with proper line breaks */}
//                       <foreignObject 
//                         x={boxX - boxWidth/2 + 15} 
//                         y={boxY - boxHeight/2 + 75} 
//                         width={boxWidth - 30} 
//                         height={boxHeight - 85}
//                       >
//                         <div 
//                           xmlns="http://www.w3.org/1999/xhtml"
//                           style={{
//                             fontSize: '12px',
//                             color: '#64748B',
//                             lineHeight: '1.5',
//                             textAlign: 'center'
//                           }}
//                         >
//                           {year.description}
//                         </div>
//                       </foreignObject>
//                     </motion.g>
//                   </g>
//                 );
//               })}
//             </svg>
//           )}

//           {/* Mobile/Tablet SVG */}
//           {isMobile && (
//             <div className="relative w-full lg:hidden" style={{ height: `${years.length * 220 + 100}px` }}>
//               <svg 
//                 className="w-full h-full" 
//                 viewBox={`0 0 300 ${years.length * 220 + 100}`} 
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <defs>
//                   <linearGradient id="mgradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                   </linearGradient>
                  
//                   <linearGradient id="mpathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                     <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                     <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                     <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                     <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                     <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                     <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                   </linearGradient>

//                   <filter id="mdropShadow">
//                     <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                   </filter>
//                 </defs>

//                 <pattern id="mgrid" width="50" height="50" patternUnits="userSpaceOnUse">
//                   <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F1F5F9" strokeWidth="1" strokeOpacity="0.5"/>
//                 </pattern>
//                 <rect width="300" height={years.length * 220 + 100} fill="url(#mgrid)" />

//                 {/* Vertical connection path */}
//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="#E2E8F0"
//                   strokeWidth="3"
//                   strokeDasharray="8,4"
//                 />
                
//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="url(#mpathGradient)"
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                   variants={pathVariants}
//                 />

//                 {/* Vertical dashed connection lines */}
//                 {years.map((year, index) => {
//                   if (index === years.length - 1) return null; // Skip the last one
//                   const xPos = calculateXPosition(index, years.length);
//                   const yPos = calculateYPosition(index, years.length);
//                   const nextYPos = calculateYPosition(index + 1, years.length);
//                   return (
//                     <motion.path
//                       key={`mline-${index}`}
//                       d={`M ${xPos},${yPos + 30} L ${xPos},${nextYPos - 30}`}
//                       fill="none"
//                       stroke={year.color}
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       strokeOpacity="0.5"
//                       variants={{
//                         hidden: { opacity: 0 },
//                         visible: { opacity: 1 }
//                       }}
//                       transition={{ duration: 0.5 }}
//                     />
//                   );
//                 })}

//                 {/* Main circular indicators and cards */}
//                 {years.map((year, index) => {
//                   const xPos = calculateXPosition(index, years.length);
//                   const yPos = calculateYPosition(index, years.length);
//                   const radius = 30;
//                   const gradientId = `mgradient${index + 1}`;
//                   const boxHeight = 130;
//                   const boxWidth = 200;
                  
//                   return (
//                     <g key={index}>
//                       {/* Background circle */}
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius + 8}
                        
//                         stroke="#E2E8F0"
//                         strokeWidth="2"
//                         filter="url(#mdropShadow)"
//                         variants={circleVariants}
//                       />
                      
//                       {/* Progress background */}
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke="#F1F5F9"
//                         strokeWidth="6"
//                         variants={circleVariants}
//                       />
                      
//                       {/* Colored ring */}
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke={`url(#${gradientId})`}
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         initial={{ pathLength: 0 }}
//                         animate={{ pathLength: 1 }}
//                         transition={{ duration: 1.5, ease: "easeInOut" }}
//                       />

//                       {/* Year text */}
//                       <motion.text
//                         x={xPos}
//                         y={yPos}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                         fill={year.color}
//                         style={{ fontWeight: 'bold', fontSize: '14px' }}
//                         variants={yearTextVariants}
//                       >
//                         {year.year}
//                       </motion.text>

//                       {/* Info cards - placed directly below circles */}
//                       <motion.g variants={cardVariants}>
//                         <rect
//                           x={xPos - boxWidth/2}
//                           y={yPos + 50}
//                           width={boxWidth}
//                           height={boxHeight}
//                           rx="12"
//                           fill="white"
//                           stroke="#E2E8F0"
//                           strokeWidth="1"
//                           filter="url(#mdropShadow)"
//                         />
                        
//                         <text
//                           x={xPos}
//                           y={yPos + 80}
//                           textAnchor="middle"
//                           style={{ fontSize: '14px', fontWeight: 'bold' }}
//                           fill="#1E293B"
//                         >
//                           {year.title}
//                         </text>
                        
//                         <text
//                           x={xPos}
//                           y={yPos + 105}
//                           textAnchor="middle"
//                           style={{ fontSize: '12px', fontWeight: '600' }}
//                           fill={year.color}
//                         >
//                           {year.subtitle}
//                         </text>
                        
//                         {/* Description with proper line breaks */}
//                         <foreignObject 
//                           x={xPos - boxWidth/2 + 15} 
//                           y={yPos + 120} 
//                           width={boxWidth - 30} 
//                           height={boxHeight - 80}
//                         >
//                           <div 
//                             xmlns="http://www.w3.org/1999/xhtml"
//                             style={{
//                               fontSize: '11px',
//                               color: '#64748B',
//                               lineHeight: '1.4',
//                               textAlign: 'center'
//                             }}
//                           >
//                             {year.description}
//                           </div>
//                         </foreignObject>
//                       </motion.g>
//                     </g>
//                   );
//                 })}
//               </svg>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default YearlyTimeline;



// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useMediaQuery } from 'react-responsive';

// const YearlyTimeline = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

//   const years = [
//     {
//       "year": "2019",
//       "title": "Foundation",
//       "subtitle": "Founded as a research group",
//       "description": "Began as a research group focused on scientific innovation in Bangalore, India",
//       "color": "#8B5CF6"
//     },
//     {
//       "year": "2020",
//       "title": "Google Startups",
//       "subtitle": "Accelerated Growth",
//       "description": "Selected for Google Startups program to accelerate our technology development",
//       "color": "#0EA5E9"
//     },
//     {
//       "year": "2021",
//       "title": "Early Growth",
//       "subtitle": "Funding & First Product",
//       "description": "Raised $100k pre-seed funding, launched BoltChem beta, and joined Microsoft Startups",
//       "color": "#10B981"
//     },
//     {
//       "year": "2022",
//       "title": "Expansion",
//       "subtitle": "Strategic Partnerships",
//       "description": "Formed 2 key partnerships (US Biotech firm and top research lab) and 1 joint venture",
//       "color": "#F59E0B"
//     },
//     {
//       "year": "2023",
//       "title": "Product Launches",
//       "subtitle": "SaaS Platform & Collaborations",
//       "description": "Launched ReBolt SaaS and BoltPro beta. Collaborated with Indian pharmaceutical leaders",
//       "color": "#EC4899"
//     },
//     {
//       "year": "2024",
//       "title": "Innovation",
//       "subtitle": "AI Advancements",
//       "description": "Launched Boltbio alpha and Multi Agents beta with NASSCOM AI & SINE incubation",
//       "color": "#6366F1"
//     },
//     {
//       "year": "2025",
//       "title": "AI Discovery",
//       "subtitle": "Breakthrough Technologies",
//       "description": "Launched BZ AI discovery suite, Clinbolt beta, and established first self-driven lab",
//       "color": "#F97316"
//     }
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const pathVariants = {
//     hidden: { pathLength: 0 },
//     visible: {
//       pathLength: 1,
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const circleVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.8
//       }
//     }
//   };

//   const yearTextVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Calculate positions based on screen size
//   const calculateXPosition = (index, total) => {
//     if (isMobile) {
//       return 150; // Centered for mobile
//     }
//     return 150 + (index * 180); // Increased spacing between years
//   };

//   const calculateYPosition = (index, total) => {
//     if (isMobile) {
//       return 100 + (index * 220); // Increased vertical spacing for mobile
//     }
//     return 200;
//   };

//   const calculatePath = () => {
//     if (isMobile) {
//       const firstY = calculateYPosition(0, years.length);
//       const lastY = calculateYPosition(years.length - 1, years.length);
//       return `M 150,${firstY} L 150,${lastY}`;
//     } else {
//       const firstX = calculateXPosition(0, years.length);
//       const lastX = calculateXPosition(years.length - 1, years.length);
//       return `M ${firstX},200 L ${lastX},200`;
//     }
//   };

//   const calculateCardOffset = (index) => {
//     if (isMobile) {
//       return { x: 0, y: 80 };
//     }
//     return { x: 0, y: index % 2 === 0 ? 140 : -140 }; // Increased vertical offset for desktop
//   };

//   return (
//     <div className="min-h-screen bg-white py-16 px-4 sm:px-8 overflow-hidden" style={{marginTop: '20px'}}>
//       <div className="max-w-7xl mx-auto">
//         <h2 style={{textAlign: 'center',marginTop: '8%',marginBottom: '6%',fontWeight: 400,color: '#4F1985',fontSize: '2.5rem'}}>Our Journey. <span
//             style={{
//               display: "block",
//               width: "80px",
//               height: "4px",
//               backgroundColor: "#4F1985",
//               margin: "15px auto 0",
            
//               borderRadius: "2px"
//             }}
//           /></h2>
//         <motion.div 
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//           variants={containerVariants}
//         >
//           {/* Desktop SVG */}
//           {!isMobile && (
//             <svg 
//               className="w-full h-[700px] hidden lg:block" 
//               viewBox="0 0 1400 700" 
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <defs>
//                 <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                 </linearGradient>
                
//                 <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                   <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                   <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                   <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                   <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                   <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                 </linearGradient>

//                 <filter id="dropShadow">
//                   <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                 </filter>
//               </defs>

//               <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
//                 <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F1F5F9" strokeWidth="1" strokeOpacity="0.5"/>
//               </pattern>
//               <rect width="1400" height="700" fill="url(#grid)" />

//               {/* Main horizontal path */}
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="#E2E8F0"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//               />
              
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="url(#pathGradient)"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 variants={pathVariants}
//               />

//               {/* Vertical connection lines */}
//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const offset = calculateCardOffset(index);
//                 return (
//                   <motion.path
//                     key={`line-${index}`}
//                     d={`M ${xPos},${yPos} L ${xPos},${yPos + (offset.y > 0 ? offset.y - 20 : offset.y + 20)}`}
//                     fill="none"
//                     stroke={year.color}
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     strokeOpacity="0.5"
//                     variants={{
//                       hidden: { opacity: 0 },
//                       visible: { opacity: 1 }
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 );
//               })}

//               {/* Main circular indicators and cards */}
//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const radius = 40;
//                 const gradientId = `gradient${index + 1}`;
//                 const offset = calculateCardOffset(index);
//                 const boxX = xPos;
//                 const boxY = yPos + offset.y;
//                 const boxHeight = 140; // Increased height
//                 const boxWidth = 220; // Increased width
                
//                 return (
//                   <g key={index}>
//                     {/* Background circle */}
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius + 8}
//                       fill="#F8FAFC"
//                       stroke="#E2E8F0"
//                       strokeWidth="2"
//                       filter="url(#dropShadow)"
//                       variants={circleVariants}
//                     />
                    
//                     {/* Progress background */}
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke="#F1F5F9"
//                       strokeWidth="8"
//                       variants={circleVariants}
//                     />
                    
//                     {/* Colored ring */}
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke={`url(#${gradientId})`}
//                       strokeWidth="8"
//                       strokeLinecap="round"
//                       initial={{ pathLength: 0 }}
//                       animate={{ pathLength: 1 }}
//                       transition={{ duration: 1.5, ease: "easeInOut" }}
//                     />

//                     {/* Year text */}
//                     <motion.text
//                       x={xPos}
//                       y={yPos}
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       fill={year.color}
//                       style={{ fontWeight: 'bold', fontSize: '18px' }}
//                       variants={yearTextVariants}
//                     >
//                       {year.year}
//                     </motion.text>

//                     {/* Info cards */}
//                     <motion.g variants={cardVariants}>
//                       <rect
//                         x={boxX - boxWidth/2}
//                         y={boxY - boxHeight/2}
//                         width={boxWidth}
//                         height={boxHeight}
//                         rx="12"
//                         fill="white"
//                         stroke="#E2E8F0"
//                         strokeWidth="1"
//                         filter="url(#dropShadow)"
//                       />
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + 30}
//                         textAnchor="middle"
//                         style={{ fontSize: '16px', fontWeight: 'bold' }}
//                         fill="#1E293B"
//                       >
//                         {year.title}
//                       </text>
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + 55}
//                         textAnchor="middle"
//                         style={{ fontSize: '14px', fontWeight: '600' }}
//                         fill={year.color}
//                       >
//                         {year.subtitle}
//                       </text>
                      
//                       {/* Description with proper line breaks */}
//                       <foreignObject 
//                         x={boxX - boxWidth/2 + 15} 
//                         y={boxY - boxHeight/2 + 75} 
//                         width={boxWidth - 30} 
//                         height={boxHeight - 85}
//                       >
//                         <div 
//                           xmlns="http://www.w3.org/1999/xhtml"
//                           style={{
//                             fontSize: '12px',
//                             color: '#64748B',
//                             lineHeight: '1.5',
//                             textAlign: 'center'
//                           }}
//                         >
//                           {year.description}
//                         </div>
//                       </foreignObject>
//                     </motion.g>
//                   </g>
//                 );
//               })}
//             </svg>
//           )}

//           {/* Mobile/Tablet SVG */}
//           {isMobile && (
//             <div className="relative w-full lg:hidden" style={{ height: `${years.length * 220 + 100}px` }}>
//               <svg 
//                 className="w-full h-full" 
//                 viewBox={`0 0 300 ${years.length * 220 + 100}`} 
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <defs>
//                   <linearGradient id="mgradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                   </linearGradient>
                  
//                   <linearGradient id="mpathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                     <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                     <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                     <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                     <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                     <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                     <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                   </linearGradient>

//                   <filter id="mdropShadow">
//                     <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                   </filter>
//                 </defs>

//                 <pattern id="mgrid" width="50" height="50" patternUnits="userSpaceOnUse">
//                   <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F1F5F9" strokeWidth="1" strokeOpacity="0.5"/>
//                 </pattern>
//                 <rect width="300" height={years.length * 220 + 100} fill="url(#mgrid)" />

//                 {/* Vertical connection path */}
//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="#E2E8F0"
//                   strokeWidth="3"
//                   strokeDasharray="8,4"
//                 />
                
//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="url(#mpathGradient)"
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                   variants={pathVariants}
//                 />

//                 {/* Vertical dashed connection lines */}
//                 {years.map((year, index) => {
//                   if (index === years.length - 1) return null; // Skip the last one
//                   const xPos = calculateXPosition(index, years.length);
//                   const yPos = calculateYPosition(index, years.length);
//                   const nextYPos = calculateYPosition(index + 1, years.length);
//                   return (
//                     <motion.path
//                       key={`mline-${index}`}
//                       d={`M ${xPos},${yPos + 30} L ${xPos},${nextYPos - 30}`}
//                       fill="none"
//                       stroke={year.color}
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       strokeOpacity="0.5"
//                       variants={{
//                         hidden: { opacity: 0 },
//                         visible: { opacity: 1 }
//                       }}
//                       transition={{ duration: 0.5 }}
//                     />
//                   );
//                 })}

//                 {/* Main circular indicators and cards */}
//                 {years.map((year, index) => {
//                   const xPos = calculateXPosition(index, years.length);
//                   const yPos = calculateYPosition(index, years.length);
//                   const radius = 30;
//                   const gradientId = `mgradient${index + 1}`;
//                   const boxHeight = 130;
//                   const boxWidth = 200;
                  
//                   return (
//                     <g key={index}>
//                       {/* Background circle */}
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius + 8}
                        
//                         stroke="#E2E8F0"
//                         strokeWidth="2"
//                         filter="url(#mdropShadow)"
//                         variants={circleVariants}
//                       />
                      
//                       {/* Progress background */}
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke="#F1F5F9"
//                         strokeWidth="6"
//                         variants={circleVariants}
//                       />
                      
//                       {/* Colored ring */}
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke={`url(#${gradientId})`}
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         initial={{ pathLength: 0 }}
//                         animate={{ pathLength: 1 }}
//                         transition={{ duration: 1.5, ease: "easeInOut" }}
//                       />

//                       {/* Year text */}
//                       <motion.text
//                         x={xPos}
//                         y={yPos}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                         fill={year.color}
//                         style={{ fontWeight: 'bold', fontSize: '14px' }}
//                         variants={yearTextVariants}
//                       >
//                         {year.year}
//                       </motion.text>

//                       {/* Info cards - placed directly below circles */}
//                       <motion.g variants={cardVariants}>
//                         <rect
//                           x={xPos - boxWidth/2}
//                           y={yPos + 50}
//                           width={boxWidth}
//                           height={boxHeight}
//                           rx="12"
//                           fill="white"
//                           stroke="#E2E8F0"
//                           strokeWidth="1"
//                           filter="url(#mdropShadow)"
//                         />
                        
//                         <text
//                           x={xPos}
//                           y={yPos + 80}
//                           textAnchor="middle"
//                           style={{ fontSize: '14px', fontWeight: 'bold' }}
//                           fill="#1E293B"
//                         >
//                           {year.title}
//                         </text>
                        
//                         <text
//                           x={xPos}
//                           y={yPos + 105}
//                           textAnchor="middle"
//                           style={{ fontSize: '12px', fontWeight: '600' }}
//                           fill={year.color}
//                         >
//                           {year.subtitle}
//                         </text>
                        
//                         {/* Description with proper line breaks */}
//                         <foreignObject 
//                           x={xPos - boxWidth/2 + 15} 
//                           y={yPos + 120} 
//                           width={boxWidth - 30} 
//                           height={boxHeight - 80}
//                         >
//                           <div 
//                             xmlns="http://www.w3.org/1999/xhtml"
//                             style={{
//                               fontSize: '11px',
//                               color: '#64748B',
//                               lineHeight: '1.4',
//                               textAlign: 'center'
//                             }}
//                           >
//                             {year.description}
//                           </div>
//                         </foreignObject>
//                       </motion.g>
//                     </g>
//                   );
//                 })}
//               </svg>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default YearlyTimeline;





// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useMediaQuery } from 'react-responsive';

// const YearlyTimeline = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

//   const years = [
//     {
//       "year": "2019",
//       "title": "Foundation",
//       "subtitle": "Founded as a research group",
//       "description": "Began as a research group focused on scientific innovation in Bangalore, India",
//       "color": "#8B5CF6"
//     },
//     {
//       "year": "2020",
//       "title": "Google Startups",
//       "subtitle": "Accelerated Growth",
//       "description": "Selected for Google Startups program to accelerate our technology development",
//       "color": "#0EA5E9"
//     },
//     {
//       "year": "2021",
//       "title": "Early Growth",
//       "subtitle": "Funding & First Product",
//       "description": "Raised $100k pre-seed funding, launched BoltChem beta, and joined Microsoft Startups",
//       "color": "#10B981"
//     },
//     {
//       "year": "2022",
//       "title": "Expansion",
//       "subtitle": "Strategic Partnerships",
//       "description": "Formed 2 key partnerships (US Biotech firm and top research lab) and 1 joint venture",
//       "color": "#F59E0B"
//     },
//     {
//       "year": "2023",
//       "title": "Product Launches",
//       "subtitle": "SaaS Platform & Collaborations",
//       "description": "Launched ReBolt SaaS and BoltPro beta. Collaborated with Indian pharmaceutical leaders",
//       "color": "#EC4899"
//     },
//     {
//       "year": "2024",
//       "title": "Innovation",
//       "subtitle": "AI Advancements",
//       "description": "Launched Boltbio alpha and Multi Agents beta with NASSCOM AI & SINE incubation",
//       "color": "#6366F1"
//     },
//     {
//       "year": "2025",
//       "title": "AI Discovery",
//       "subtitle": "Breakthrough Technologies",
//       "description": "Launched BZ AI discovery suite, Clinbolt beta, and established first self-driven lab",
//       "color": "#F97316"
//     }
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const pathVariants = {
//     hidden: { pathLength: 0 },
//     visible: {
//       pathLength: 1,
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const circleVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.8
//       }
//     }
//   };

//   const yearTextVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const calculateXPosition = (index, total) => {
//     if (isMobile) {
//       return 150;
//     }
//     return 150 + (index * 180);
//   };

//   const calculateYPosition = (index, total) => {
//     if (isMobile) {
//       return 80 + (index * 180);
//     }
//     return 250;
//   };

//   const calculatePath = () => {
//     if (isMobile) {
//       const firstY = calculateYPosition(0, years.length);
//       const lastY = calculateYPosition(years.length - 1, years.length);
//       return `M 150,${firstY} L 150,${lastY}`;
//     } else {
//       const firstX = calculateXPosition(0, years.length);
//       const lastX = calculateXPosition(years.length - 1, years.length);
//       return `M ${firstX},250 L ${lastX},250`;
//     }
//   };

//   const calculateCardOffset = (index) => {
//     if (isMobile) {
//       return { x: 0, y: 70 };
//     }
//     return { x: 0, y: index % 2 === 0 ? 150 : -150 };
//   };

//   return (
//     <div className="bg-white px-4 sm:px-8 overflow-hidden" style={{ 
//       paddingTop: '40px',
//       paddingBottom: '40px',
//       marginBottom: '0'
//     }}>
//       <div className="max-w-7xl mx-auto">
//         <h2 style={{
//           textAlign: 'center',
//           marginTop: '0',
//           marginBottom: '40px',
//           fontWeight: 400,
//           color: '#4F1985',
//           fontSize: '2.5rem'
//         }}>
//           Our Journey.
//           <span style={{
//             display: "block",
//             width: "80px",
//             height: "4px",
//             backgroundColor: "#4F1985",
//             margin: "15px auto 0",
//             borderRadius: "2px"
//           }}/>
//         </h2>
        
//         <motion.div 
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//           variants={containerVariants}
//         >
//           {!isMobile && (
//             <svg 
//               className="w-full h-[600px] hidden lg:block" 
//               viewBox="0 0 1400 600" 
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <defs>
//                 <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                 </linearGradient>
                
//                 <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                   <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                   <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                   <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                   <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                   <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                 </linearGradient>

//                 <filter id="dropShadow">
//                   <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                 </filter>
//               </defs>

//               <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
//                 <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F1F5F9" strokeWidth="1" strokeOpacity="0.5"/>
//               </pattern>
//               <rect width="1400" height="600" fill="url(#grid)" />

//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="#E2E8F0"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//               />
              
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="url(#pathGradient)"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 variants={pathVariants}
//               />

//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const offset = calculateCardOffset(index);
//                 return (
//                   <motion.path
//                     key={`line-${index}`}
//                     d={`M ${xPos},${yPos} L ${xPos},${yPos + (offset.y > 0 ? offset.y - 20 : offset.y + 20)}`}
//                     fill="none"
//                     stroke={year.color}
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     strokeOpacity="0.5"
//                     variants={{
//                       hidden: { opacity: 0 },
//                       visible: { opacity: 1 }
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 );
//               })}

//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const radius = 40;
//                 const gradientId = `gradient${index + 1}`;
//                 const offset = calculateCardOffset(index);
//                 const boxX = xPos;
//                 const boxY = yPos + offset.y;
//                 const boxHeight = 140;
//                 const boxWidth = 220;
                
//                 return (
//                   <g key={index}>
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius + 8}
//                       fill="#F8FAFC"
//                       stroke="#E2E8F0"
//                       strokeWidth="2"
//                       filter="url(#dropShadow)"
//                       variants={circleVariants}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke="#F1F5F9"
//                       strokeWidth="8"
//                       variants={circleVariants}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke={`url(#${gradientId})`}
//                       strokeWidth="8"
//                       strokeLinecap="round"
//                       initial={{ pathLength: 0 }}
//                       animate={{ pathLength: 1 }}
//                       transition={{ duration: 1.5, ease: "easeInOut" }}
//                     />

//                     <motion.text
//                       x={xPos}
//                       y={yPos}
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       fill={year.color}
//                       style={{ fontWeight: 'bold', fontSize: '18px' }}
//                       variants={yearTextVariants}
//                     >
//                       {year.year}
//                     </motion.text>

//                     <motion.g variants={cardVariants}>
//                       <rect
//                         x={boxX - boxWidth/2}
//                         y={boxY - boxHeight/2}
//                         width={boxWidth}
//                         height={boxHeight}
//                         rx="12"
//                         fill="white"
//                         stroke="#E2E8F0"
//                         strokeWidth="1"
//                         filter="url(#dropShadow)"
//                       />
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + 30}
//                         textAnchor="middle"
//                         style={{ fontSize: '16px', fontWeight: 'bold' }}
//                         fill="#1E293B"
//                       >
//                         {year.title}
//                       </text>
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + 55}
//                         textAnchor="middle"
//                         style={{ fontSize: '14px', fontWeight: '600' }}
//                         fill={year.color}
//                       >
//                         {year.subtitle}
//                       </text>
                      
//                       <foreignObject 
//                         x={boxX - boxWidth/2 + 15} 
//                         y={boxY - boxHeight/2 + 75} 
//                         width={boxWidth - 30} 
//                         height={boxHeight - 85}
//                       >
//                         <div 
//                           xmlns="http://www.w3.org/1999/xhtml"
//                           style={{
//                             fontSize: '12px',
//                             color: '#64748B',
//                             lineHeight: '1.5',
//                             textAlign: 'center'
//                           }}
//                         >
//                           {year.description}
//                         </div>
//                       </foreignObject>
//                     </motion.g>
//                   </g>
//                 );
//               })}
//             </svg>
//           )}

//           {isMobile && (
//             <div className="relative w-full lg:hidden" style={{ height: `${years.length * 180 + 60}px` }}>
//               <svg 
//                 className="w-full h-full" 
//                 viewBox={`0 0 300 ${years.length * 180 + 60}`} 
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <defs>
//                   <linearGradient id="mgradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                   </linearGradient>
                  
//                   <linearGradient id="mpathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                     <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                     <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                     <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                     <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                     <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                     <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                   </linearGradient>

//                   <filter id="mdropShadow">
//                     <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                   </filter>
//                 </defs>

//                 <pattern id="mgrid" width="50" height="50" patternUnits="userSpaceOnUse">
//                   <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F1F5F9" strokeWidth="1" strokeOpacity="0.5"/>
//                 </pattern>
//                 <rect width="300" height={years.length * 180 + 60} fill="url(#mgrid)" />

//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="#E2E8F0"
//                   strokeWidth="3"
//                   strokeDasharray="8,4"
//                 />
                
//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="url(#mpathGradient)"
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                   variants={pathVariants}
//                 />

//                 {years.map((year, index) => {
//                   if (index === years.length - 1) return null;
//                   const xPos = calculateXPosition(index, years.length);
//                   const yPos = calculateYPosition(index, years.length);
//                   const nextYPos = calculateYPosition(index + 1, years.length);
//                   return (
//                     <motion.path
//                       key={`mline-${index}`}
//                       d={`M ${xPos},${yPos + 30} L ${xPos},${nextYPos - 30}`}
//                       fill="none"
//                       stroke={year.color}
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       strokeOpacity="0.5"
//                       variants={{
//                         hidden: { opacity: 0 },
//                         visible: { opacity: 1 }
//                       }}
//                       transition={{ duration: 0.5 }}
//                     />
//                   );
//                 })}

//                 {years.map((year, index) => {
//                   const xPos = calculateXPosition(index, years.length);
//                   const yPos = calculateYPosition(index, years.length);
//                   const radius = 30;
//                   const gradientId = `mgradient${index + 1}`;
//                   const boxHeight = 130;
//                   const boxWidth = 200;
                  
//                   return (
//                     <g key={index}>
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius + 8}
//                         fill="#F8FAFC"
//                         stroke="#E2E8F0"
//                         strokeWidth="2"
//                         filter="url(#mdropShadow)"
//                         variants={circleVariants}
//                       />
                      
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke="#F1F5F9"
//                         strokeWidth="6"
//                         variants={circleVariants}
//                       />
                      
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke={`url(#${gradientId})`}
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         initial={{ pathLength: 0 }}
//                         animate={{ pathLength: 1 }}
//                         transition={{ duration: 1.5, ease: "easeInOut" }}
//                       />

//                       <motion.text
//                         x={xPos}
//                         y={yPos}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                         fill={year.color}
//                         style={{ fontWeight: 'bold', fontSize: '14px' }}
//                         variants={yearTextVariants}
//                       >
//                         {year.year}
//                       </motion.text>

//                       <motion.g variants={cardVariants}>
//                         <rect
//                           x={xPos - boxWidth/2}
//                           y={yPos + 50}
//                           width={boxWidth}
//                           height={boxHeight}
//                           rx="12"
//                           fill="white"
//                           stroke="#E2E8F0"
//                           strokeWidth="1"
//                           filter="url(#mdropShadow)"
//                         />
                        
//                         <text
//                           x={xPos}
//                           y={yPos + 80}
//                           textAnchor="middle"
//                           style={{ fontSize: '14px', fontWeight: 'bold' }}
//                           fill="#1E293B"
//                         >
//                           {year.title}
//                         </text>
                        
//                         <text
//                           x={xPos}
//                           y={yPos + 105}
//                           textAnchor="middle"
//                           style={{ fontSize: '12px', fontWeight: '600' }}
//                           fill={year.color}
//                         >
//                           {year.subtitle}
//                         </text>
                        
//                         <foreignObject 
//                           x={xPos - boxWidth/2 + 15} 
//                           y={yPos + 120} 
//                           width={boxWidth - 30} 
//                           height={boxHeight - 80}
//                         >
//                           <div 
//                             xmlns="http://www.w3.org/1999/xhtml"
//                             style={{
//                               fontSize: '11px',
//                               color: '#64748B',
//                               lineHeight: '1.4',
//                               textAlign: 'center'
//                             }}
//                           >
//                             {year.description}
//                           </div>
//                         </foreignObject>
//                       </motion.g>
//                     </g>
//                   );
//                 })}
//               </svg>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default YearlyTimeline;


// import React from "react";
// import { motion } from "framer-motion";
// import { FiCpu, FiGitPullRequest, FiCheckCircle } from "react-icons/fi";

// const CoreValues = () => {
//   const values = [
//     {
//       icon: <FiCpu size={32} />,
//       title: "Innovation at the Core",
//       description: "We believe innovation is not a one-off spark—it's a continuous process of curiosity, experimentation, and adaptation. From developing autonomous scientific workflows to designing new AI architectures for complex problem-solving, we are committed to pushing the boundaries of what's possible in science and technology."
//     },
//     {
//       icon: <FiGitPullRequest size={32} />,
//       title: "Open Source Research",
//       description: "We champion openness in science. By contributing tools, datasets, and methodologies to the open-source community, we enable researchers worldwide to collaborate, validate, and build upon shared knowledge—accelerating global progress in the process."
//     },
//     {
//       icon: <FiCheckCircle size={32} />,
//       title: "Scientific Integrity",
//       description: "Every discovery we pursue is rooted in data-driven rigor and ethical research practices. We maintain transparency, reproducibility, and reliability as the foundation of all our solutions."
//     }
//   ];

//   return (
//     <section className="values-section">
//       <div className="container">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="header"
//         >
//           <h2 className="eyebrow">WHAT WE STAND FOR</h2>
//           <p className="mission-statement">
//             We're not just building technology—we're building a movement.
//           </p>
//           <h3 className="subheader">Our core values guide everything we do:</h3>
//         </motion.div>

//         <div className="values-grid">
//           {values.map((value, index) => (
//             <motion.div
//               key={index}
//               className="value-card"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//             >
//               <div className="icon-container" style={{ background: `rgba(124, 58, 237, ${0.1 + index * 0.05})` }}>
//                 {value.icon}
//               </div>
//               <h4>{value.title}</h4>
//               <p>{value.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .values-section {
//           padding-bottom: 20px;
//         }
        
//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }
        
//         .header {
//           text-align: center;
//           margin-bottom: 4rem;
//           max-width: 800px;
//           margin-left: auto;
//           margin-right: auto;
//         }
        
//         .eyebrow {
//           font-size: 1rem;
//           text-transform: uppercase;
//           letter-spacing: 0.1em;
//           color: #7c3aed;
//           margin-bottom: 1.5rem;
//           font-weight: 600;
//         }
        
//         .mission-statement {
//           font-size: 1.75rem;
//           line-height: 1.4;
//           color: #111827;
//           margin-bottom: 1rem;
//           font-weight: 500;
//         }
        
//         .subheader {
//           font-size: 1.25rem;
//           color: #4b5563;
//           font-weight: 400;
//         }
        
//         .values-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 3rem;
//         }
        
//         .value-card {
//           background: white;
//           border-radius: 16px;
//           padding: 3rem 2rem;
//           box-shadow: 0 5px 30px rgba(0, 0, 0, 0.03);
//           border: 1px solid #e5e7eb;
//         }
        
//         .icon-container {
//           width: 72px;
//           height: 72px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 2rem;
//           color: #7c3aed;
//         }
        
//         h4 {
//           font-size: 1.5rem;
//           font-weight: 600;
//           margin-bottom: 1.5rem;
//           color: #111827;
//         }
        
//         .value-card p {
//           font-size: 1.1rem;
//           line-height: 1.8;
//           color: #4b5563;
//         }
        
//         @media (max-width: 768px) {
//           .values-section {
//             padding: 4rem 1.5rem;
//           }
          
//           .mission-statement {
//             font-size: 1.5rem;
//           }
          
//           .values-grid {
//             grid-template-columns: 1fr;
//             gap: 2rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default CoreValues;



// import React from "react";
// import { FaLinkedin } from "react-icons/fa";
// import { useMediaQuery } from "react-responsive";

// export default function LeadershipSection() {
//   const leaders = [
//     {
//       name: "SARATH KOLLI",
//       title: "Chief Executive Officer",
//       image: "/sarath-sir.png",
//       linkedin: "https://www.linkedin.com/in/sarathkolli"
//     },
//     {
//       name: "DR. PARITOSH PRASHAR",
//       title: "Chief Technology Officer",
//       image: "/paritosh-sir.png",
//       linkedin: "https://www.linkedin.com/in/paritoshprashar"
//     }
//   ];

//   const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });

//   const handleLinkedInClick = (url) => {
//     window.open(url, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <section className="leadership-section" style={{
//       padding: "2rem 1rem 5rem",
//       textAlign: "center",
//       fontFamily: "'Inter', sans-serif",
//       maxWidth: "1200px",
//       margin: "0 auto",
//       display: "flex",
//       flexDirection: "column",
//       minHeight: "100vh",
//       justifyContent: "center"
//     }}>
//       {/* Section Header */}
//       <header style={{ 
//         marginBottom: "3rem",
//         padding: "0 1rem",
//         transform: isMobileOrTablet ? "translateX(1px)" : "translateX(20px)" // Slight right shift
//       }}>
//         <h2 style={{
//           textAlign: 'center',
//           marginBottom: '1.5rem',
//           fontWeight: 400,
//           color: '#4F1985',
//           fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
//           fontFamily: 'timesnew'
//         }}>
//           Our Leadership
//           <span style={{
//             display: "block",
//             width: "80px",
//             height: "4px",
//             backgroundColor: "#4F1985",
//             margin: "15px auto 0",
//             borderRadius: "2px"
//           }} />
//         </h2>
//       </header>

//       {/* Leadership Cards Container */}
//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "3rem",
//         flexWrap: "wrap",
//         padding: "0 1rem",
//         width: "100%",
//      transform: isMobileOrTablet ? "translateX(38px)" : "none" // Slight right shift
//       }}>
//         {leaders.map((leader, idx) => (
//           <article 
//             key={idx}
//             style={{
//               backgroundColor: "#ffffff",
//               borderRadius: "1rem",
//               boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//               width: "clamp(280px, 90vw, 320px)",
//               overflow: "hidden",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               transition: "transform 0.3s ease, box-shadow 0.3s ease",
//               paddingBottom: "1.5rem",
//               margin: "1rem 0",
//               ":hover": {
//                 transform: isMobileOrTablet ? "translateY(-8px)" : "translateY(-8px)",
//                 boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
//               }
//             }}
//           >
//             {/* Profile Image */}
//             <div style={{
//               width: "100%",
//               padding: "2rem 1rem 1rem",
//               backgroundColor: "#f1f5f9",
//               display: "flex",
//               justifyContent: "center"
//             }}>
//               <div style={{
//                 width: "clamp(150px, 40vw, 200px)",
//                 height: "clamp(150px, 40vw, 200px)",
//                 borderRadius: "10%",
//                 overflow: "hidden",
//               }}>
//                 <img
//                   src={leader.image}
//                   alt={leader.name}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "contain",
//                     transition: "transform 0.3s ease"
//                   }}
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "/default-profile.png";
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Leader Info */}
//             <div style={{
//               padding: "1.5rem 1rem 0",
//               textAlign: "center",
//               width: "100%"
//             }}>
//               <h3 style={{
//                 fontSize: "clamp(1.1rem, 4vw, 1.375rem)",
//                 fontWeight: 700,
//                 color: "#1e293b",
//                 marginBottom: "0.5rem",
//                 lineHeight: "1.3"
//               }}>
//                 {leader.name}
//               </h3>
              
//               <p style={{
//                 color: "#64748b",
//                 fontSize: "clamp(0.9rem, 3vw, 1rem)",
//                 fontWeight: 500,
//                 marginBottom: "1.5rem",
//                 lineHeight: "1.5"
//               }}>
//                 {leader.title}
//               </p>

//               {/* LinkedIn Button */}
//               <button
//                 onClick={() => handleLinkedInClick(leader.linkedin)}
//                 style={{
//                   background: "transparent",
//                   border: "none",
//                   cursor: "pointer",
//                   padding: "0.5rem",
//                   color: "#0a66c2",
//                   transition: "all 0.2s ease",
//                   display: "inline-flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   borderRadius: "50%",
//                   ":hover": {
//                     color: "#004182",
//                     transform: "scale(1.1)",
//                     background: "rgba(10, 102, 194, 0.1)"
//                   }
//                 }}
//                 aria-label={`Connect with ${leader.name} on LinkedIn`}
//               >
//                 <FaLinkedin style={{ fontSize: "clamp(1.5rem, 5vw, 1.75rem)" }} />
//               </button>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }


//navbar - complete
import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useScrollTrigger,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme, styled } from '@mui/material/styles';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Our Suite', path: '/products' },
  { label: 'Buy Need', path: '#' },
  { label: 'Resources', path: '/blogs' },
  { label: 'About', path: '/about' },
];

const PRODUCT_ITEMS = [
  {
    img: '/images/product1.png',
    title: 'Product One',
    desc: 'A brief description of Product One goes here.',
  },
  {
    img: '/images/product2.png',
    title: 'Product Two',
    desc: 'Some quick info about Product Two.',
  },
  {
    img: '/images/product3.png',
    title: 'Product Three',
    desc: 'Short and catchy description of Product Three.',
  },
  // {
  //   img: '/images/product4.png',
  //   title: 'Product Four',
  //   desc: 'Details about Product Four.',
  // },
  // {
  //   img: '/images/product5.png',
  //   title: 'Product Five',
  //   desc: 'Cool things about Product Five.',
  // },
  // {
  //   img: '/images/product6.png',
  //   title: 'Product Six',
  //   desc: 'Why Product Six is awesome.',
  // },
];

const NavWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.action.hover,
  borderRadius: 24,
  padding: '4px',
  width: '100%',
  justifyContent: 'space-evenly',
}));

const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: 14,
  padding: '4px 16px',
  borderRadius: 20,
  backgroundColor: active ? theme.palette.background.paper : 'transparent',
  color: active ? '#4f1985' : theme.palette.text.primary,
  boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: active
      ? theme.palette.background.paper
      : theme.palette.action.selected,
  },
}));

export default function NavbarPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const suiteButtonRef = useRef(null);

  useEffect(() => {
    const currentItem = NAV_ITEMS.find(item => item.path === location.pathname);
    if (currentItem) {
      setActiveTab(currentItem.label);
    } else {
      setActiveTab('Home');
    }
  }, [location.pathname]);

  const handleNavClick = (label) => {
    setActiveTab(label);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="relative"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: "#4F1985",
          transition: 'all 0.3s ease',
          boxShadow: trigger ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'center', px: 2 }}>
          <Box sx={{ width: '100%', maxWidth: '1440px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', position: 'relative' }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img src="/logo.png" alt="Logo" height={50} style={{ marginRight: 8 }} />
              </RouterLink>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ flex: 1, mx: 4, position: 'relative' }}>
                <NavWrapper>
                  {NAV_ITEMS.map((item) => (
                    item.label === 'Our Suite' ? (
                      <NavButton
                        ref={suiteButtonRef}
                        key={item.label}
                        active={activeTab === item.label}
                        onMouseEnter={() => setShowMegaMenu(true)}
                        onMouseLeave={() => setShowMegaMenu(false)}
                      >
                        {item.label}
                      </NavButton>
                    ) : (
                      <NavButton
                        key={item.label}
                        active={activeTab === item.label}
                        component={RouterLink}
                        to={item.path}
                        onClick={() => setActiveTab(item.label)}
                      >
                        {item.label}
                      </NavButton>
                    )
                  ))}
                </NavWrapper>

                {/* Mega Menu */}
            {showMegaMenu && (
  <Box
    onMouseEnter={() => setShowMegaMenu(true)}
    onMouseLeave={() => setShowMegaMenu(false)}
    sx={{
      position: 'absolute',
      top: '100%',
      left: 0, // 🔹 Full-width from left edge of nav container
      width: '100%',
      backgroundColor: '#fff',
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      zIndex: 1200,

      // 🔹 Drop-down from top to bottom
      transformOrigin: 'top center',
      animation: 'dropdown 0.35s ease forwards',
      '@keyframes dropdown': {
        '0%': { transform: 'scaleY(0)', opacity: 0 },
        '100%': { transform: 'scaleY(1)', opacity: 1 },
      }
    }}
  >
    <Box sx={{ maxWidth: '1440px', mx: 'auto', p: { xs: 3, md: 6 } }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: 4,
        }}
      >
        {PRODUCT_ITEMS.map((product, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              bgcolor: '#fafafa',
              p: 3,
              borderRadius: 4,
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',

              // 🔹 Card hover effect
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                bgcolor: '#fff',
              },

              // 🔹 Staggered reveal animation for cards
              opacity: 0,
              transform: 'translateY(20px)',
              animation: `fadeUpCard 0.4s ease forwards`,
              animationDelay: `${idx * 0.1 + 0.15}s`, // delay to sync after dropdown opens
              '@keyframes fadeUpCard': {
                to: { opacity: 1, transform: 'translateY(0)' },
              }
            }}
          >
            <Box
              component="img"
              src={product.img}
              alt={product.title}
              sx={{
                width: 60,
                height: 60,
                mr: 2.5,
                borderRadius: 2,
                objectFit: 'contain',
              }}
            />
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 0.5,
                  color: '#4F1985'
                }}
              >
                {product.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.4
                }}
              >
                {product.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
)}

              </Box>
            )}

            {/* Desktop Contact Button */}
            {!isMobile && (
              <Button
                variant="contained"
                component={RouterLink}
                to="/contact"
                sx={{
                  textTransform: 'none',
                  fontSize: 13,
                  borderRadius: 2,
                  px: 2,
                  py: 0.5,
                  height: 35,
                  backgroundColor: '#4F1985',
                  '&:hover': { backgroundColor: '#3a1259' }
                }}
              >
                Request Demo
              </Button>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton edge="end" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />

          <List>
            {NAV_ITEMS.map((item) => (
              <ListItem disablePadding key={item.label}>
                <ListItemButton
                  component={RouterLink}
                  to={item.path}
                  onClick={() => handleNavClick(item.label)}
                  selected={activeTab === item.label}
                  sx={{
                    '&.Mui-selected': {
                      color: '#4f1985',
                      backgroundColor: 'transparent',
                    },
                    '&.Mui-selected:hover': {
                      backgroundColor: theme.palette.action.selected,
                    }
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: activeTab === item.label ? 600 : 'normal',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ my: 1 }} />

            <Box p={2}>
              <Button
                variant="contained"
                fullWidth
                component={RouterLink}
                to="/contact"
                sx={{
                  borderRadius: 5,
                  backgroundColor: '#4F1985',
                  '&:hover': { backgroundColor: '#3a1259' }
                }}
                onClick={() => setDrawerOpen(false)}
              >
                Contact Us
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

//// // import React, { useState, useEffect, useRef } from 'react';
// // import {
// //   Toolbar,
// //   IconButton,
// //   Button,
// //   Box,
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemButton,
// //   ListItemText,
// //   Divider,
// //   useMediaQuery,
// //   useScrollTrigger,
// //   Typography,
// // } from '@mui/material';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import CloseIcon from '@mui/icons-material/Close';
// // import { useTheme, styled } from '@mui/material/styles';
// // import { Link as RouterLink, useLocation } from 'react-router-dom';

// // const NAV_ITEMS = [
// //   { label: 'Home', path: '/' },
// //   { label: 'Our Suite', path: '/products' },
// //   { label: 'Buy Need', path: '#' },
// //   { label: 'Resources', path: '/blogs' },
// //   { label: 'About', path: '/about' },
// // ];

// // const PRODUCT_ITEMS = [
// //   {
// //     img: '/images/product1.png',
// //     title: 'Product One',
// //     desc: 'A brief description of Product One goes here.',
// //   },
// //   {
// //     img: '/images/product2.png',
// //     title: 'Product Two',
// //     desc: 'Some quick info about Product Two.',
// //   },
// //   {
// //     img: '/images/product3.png',
// //     title: 'Product Three',
// //     desc: 'Short and catchy description of Product Three.',
// //   },

// // ];

// // const NavWrapper = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   backgroundColor: theme.palette.action.hover,
// //   borderRadius: 24,
// //   padding: '4px',
// //   width: '100%',
// //   justifyContent: 'space-evenly',
// // }));

// // const NavButton = styled(Button, {
// //   shouldForwardProp: (prop) => prop !== 'active',
// // })(({ theme, active }) => ({
// //   textTransform: 'none',
// //   fontWeight: 500,
// //   fontSize: 14,
// //   padding: '4px 16px',
// //   borderRadius: 20,
// //   backgroundColor: active ? theme.palette.background.paper : 'transparent',
// //   color: active ? '#4f1985' : theme.palette.text.primary,
// //   boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
// //   transition: 'all 0.3s ease',
// //   '&:hover': {
// //     backgroundColor: active
// //       ? theme.palette.background.paper
// //       : theme.palette.action.selected,
// //   },
// // }));

// // export default function NavbarPage() {
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
// //   const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
// //   const location = useLocation();
// //   const [drawerOpen, setDrawerOpen] = useState(false);
// //   const [activeTab, setActiveTab] = useState('');
// //   const [showMegaMenu, setShowMegaMenu] = useState(false);
// //   const suiteButtonRef = useRef(null);

// //   useEffect(() => {
// //     const currentItem = NAV_ITEMS.find(item => item.path === location.pathname);
// //     if (currentItem) {
// //       setActiveTab(currentItem.label);
// //     } else {
// //       setActiveTab('Home');
// //     }
// //   }, [location.pathname]);

// //   const handleNavClick = (label) => {
// //     setActiveTab(label);
// //     setDrawerOpen(false);
// //   };

// //   return (
// //     <>
// //       <AppBar
// //         position="relative"
// //         elevation={trigger ? 4 : 0}
// //         sx={{
// //           backgroundColor: theme.palette.background.paper,
// //           color: "#4F1985",
// //           transition: 'all 0.3s ease',
// //           boxShadow: trigger ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
// //         }}
// //       >
// //         <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'center', px: 2 }}>
// //           <Box sx={{ width: '100%', maxWidth: '1440px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', position: 'relative' }}>
// //             {/* Logo */}
// //             <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
// //               <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
// //                 <img src="/logo.png" alt="Logo" height={50} style={{ marginRight: 8 }} />
// //               </RouterLink>
// //             </Box>

// //             {/* Desktop Navigation */}
// //             {!isMobile && (
// //               <Box sx={{ flex: 1, mx: 4, position: 'relative' }}>
// //                 <NavWrapper>
// //                   {NAV_ITEMS.map((item) => (
// //                     item.label === 'Our Suite' ? (
// //                       <NavButton
// //                         ref={suiteButtonRef}
// //                         key={item.label}
// //                         active={activeTab === item.label}
// //                         onMouseEnter={() => setShowMegaMenu(true)}
// //                         onMouseLeave={() => setShowMegaMenu(false)}
// //                       >
// //                         {item.label}
// //                       </NavButton>
// //                     ) : (
// //                       <NavButton
// //                         key={item.label}
// //                         active={activeTab === item.label}
// //                         component={RouterLink}
// //                         to={item.path}
// //                         onClick={() => setActiveTab(item.label)}
// //                       >
// //                         {item.label}
// //                       </NavButton>
// //                     )
// //                   ))}
// //                 </NavWrapper>

// //                 {/* Mega Menu */}
// //             {showMegaMenu && (
// //   <Box
// //     onMouseEnter={() => setShowMegaMenu(true)}
// //     onMouseLeave={() => setShowMegaMenu(false)}
// //     sx={{
// //       position: 'absolute',
// //       top: '100%',
// //       left: 0, // 🔹 Full-width from left edge of nav container
// //       width: '100%',
// //       backgroundColor: '#fff',
// //       boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
// //       zIndex: 1200,

// //       // 🔹 Drop-down from top to bottom
// //       transformOrigin: 'top center',
// //       animation: 'dropdown 0.35s ease forwards',
// //       '@keyframes dropdown': {
// //         '0%': { transform: 'scaleY(0)', opacity: 0 },
// //         '100%': { transform: 'scaleY(1)', opacity: 1 },
// //       }
// //     }}
// //   >
// //     <Box sx={{ maxWidth: '1440px', mx: 'auto', p: { xs: 3, md: 6 } }}>
// //       <Box
// //         sx={{
// //           display: 'grid',
// //           gridTemplateColumns: {
// //             xs: '1fr',
// //             sm: 'repeat(2, 1fr)',
// //             md: 'repeat(3, 1fr)',
// //             lg: 'repeat(4, 1fr)',
// //           },
// //           gap: 4,
// //         }}
// //       >
// //         {PRODUCT_ITEMS.map((product, idx) => (
// //           <Box
// //             key={idx}
// //             sx={{
// //               display: 'flex',
// //               alignItems: 'flex-start',
// //               bgcolor: '#fafafa',
// //               p: 3,
// //               borderRadius: 4,
// //               boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
// //               cursor: 'pointer',
// //               transition: 'all 0.3s ease',

// //               // 🔹 Card hover effect
// //               '&:hover': {
// //                 transform: 'translateY(-8px)',
// //                 boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
// //                 bgcolor: '#fff',
// //               },

// //               // 🔹 Staggered reveal animation for cards
// //               opacity: 0,
// //               transform: 'translateY(20px)',
// //               animation: `fadeUpCard 0.4s ease forwards`,
// //               animationDelay: `${idx * 0.1 + 0.15}s`, // delay to sync after dropdown opens
// //               '@keyframes fadeUpCard': {
// //                 to: { opacity: 1, transform: 'translateY(0)' },
// //               }
// //             }}
// //           >
// //             <Box
// //               component="img"
// //               src={product.img}
// //               alt={product.title}
// //               sx={{
// //                 width: 60,
// //                 height: 60,
// //                 mr: 2.5,
// //                 borderRadius: 2,
// //                 objectFit: 'contain',
// //               }}
// //             />
// //             <Box>
// //               <Typography
// //                 variant="subtitle1"
// //                 sx={{
// //                   fontWeight: 700,
// //                   mb: 0.5,
// //                   color: '#4F1985'
// //                 }}
// //               >
// //                 {product.title}
// //               </Typography>
// //               <Typography
// //                 variant="body2"
// //                 sx={{
// //                   color: 'text.secondary',
// //                   lineHeight: 1.4
// //                 }}
// //               >
// //                 {product.desc}
// //               </Typography>
// //             </Box>
// //           </Box>
// //         ))}
// //       </Box>
// //     </Box>
// //   </Box>
// // )}

// //               </Box>
// //             )}

// //             {/* Desktop Contact Button */}
// //             {!isMobile && (
// //               <Button
// //                 variant="contained"
// //                 component={RouterLink}
// //                 to="/contact"
// //                 sx={{
// //                   textTransform: 'none',
// //                   fontSize: 13,
// //                   borderRadius: 2,
// //                   px: 2,
// //                   py: 0.5,
// //                   height: 35,
// //                   backgroundColor: '#4F1985',
// //                   '&:hover': { backgroundColor: '#3a1259' }
// //                 }}
// //               >
// //                 Request Demo
// //               </Button>
// //             )}

// //             {/* Mobile Menu Icon */}
// //             {isMobile && (
// //               <IconButton edge="end" onClick={() => setDrawerOpen(true)}>
// //                 <MenuIcon />
// //               </IconButton>
// //             )}
// //           </Box>
// //         </Toolbar>
// //       </AppBar>

// //       {/* Mobile Drawer */}
// //       <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
// //         <Box sx={{ width: 280 }}>
// //           <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
// //             <Typography variant="h6">Menu</Typography>
// //             <IconButton onClick={() => setDrawerOpen(false)}>
// //               <CloseIcon />
// //             </IconButton>
// //           </Box>
// //           <Divider />

// //           <List>
// //             {NAV_ITEMS.map((item) => (
// //               <ListItem disablePadding key={item.label}>
// //                 <ListItemButton
// //                   component={RouterLink}
// //                   to={item.path}
// //                   onClick={() => handleNavClick(item.label)}
// //                   selected={activeTab === item.label}
// //                   sx={{
// //                     '&.Mui-selected': {
// //                       color: '#4f1985',
// //                       backgroundColor: 'transparent',
// //                     },
// //                     '&.Mui-selected:hover': {
// //                       backgroundColor: theme.palette.action.selected,
// //                     }
// //                   }}
// //                 >
// //                   <ListItemText
// //                     primary={item.label}
// //                     primaryTypographyProps={{
// //                       fontWeight: activeTab === item.label ? 600 : 'normal',
// //                     }}
// //                   />
// //                 </ListItemButton>
// //               </ListItem>
// //             ))}

// //             <Divider sx={{ my: 1 }} />

// //             <Box p={2}>
// //               <Button
// //                 variant="contained"
// //                 fullWidth
// //                 component={RouterLink}
// //                 to="/contact"
// //                 sx={{
// //                   borderRadius: 5,
// //                   backgroundColor: '#4F1985',
// //                   '&:hover': { backgroundColor: '#3a1259' }
// //                 }}
// //                 onClick={() => setDrawerOpen(false)}
// //               >
// //                 Contact Us
// //               </Button>
// //             </Box>
// //           </List>
// //         </Box>
// //       </Drawer>
// //     </>
// //   );
// // }


// import React, { useState, useEffect, useRef } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Button,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Divider,
//   useMediaQuery,
//   useScrollTrigger,
//   Typography,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import { useTheme, styled } from '@mui/material/styles';
// import { Link as RouterLink, useLocation } from 'react-router-dom';

// const NAV_ITEMS = [
//   { label: 'Home', path: '/' },
//   { label: 'Our Suite', path: '/products' },
//   { label: 'Buy Need', path: '#' },
//   { label: 'Resources', path: '/blogs' },
//   { label: 'About', path: '/about' },
// ];

// const PRODUCT_ITEMS = [
//   { img: '/images/product1.png', title: 'Product One', desc: 'A brief description of Product One goes here.' },
//   { img: '/images/product2.png', title: 'Product Two', desc: 'Some quick info about Product Two.' },
//   { img: '/images/product3.png', title: 'Product Three', desc: 'Short and catchy description of Product Three.' },
// ];

// const NavWrapper = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: 24,
//   padding: '4px',
//   width: '100%',
//   justifyContent: 'space-evenly',
// }));

// const NavButton = styled(Button, {
//   shouldForwardProp: (prop) => prop !== 'active',
// })(({ theme, active }) => ({
//   textTransform: 'none',
//   fontWeight: 500,
//   fontSize: 14,
//   padding: '4px 16px',
//   borderRadius: 20,
//   backgroundColor: active ? theme.palette.background.paper : 'transparent',
//   color: active ? '#4f1985' : theme.palette.text.primary,
//   boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     backgroundColor: active
//       ? theme.palette.background.paper
//       : theme.palette.action.selected,
//   },
// }));

// export default function NavbarPage() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
//   const location = useLocation();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('');
//   const [showMegaMenu, setShowMegaMenu] = useState(false);

//   const megaMenuTimer = useRef(null);

//   useEffect(() => {
//     const currentItem = NAV_ITEMS.find(item => item.path === location.pathname);
//     if (currentItem) {
//       setActiveTab(currentItem.label);
//     } else {
//       setActiveTab('Home');
//     }
//   }, [location.pathname]);

//   const handleNavClick = (label) => {
//     setActiveTab(label);
//     setDrawerOpen(false);
//   };

//   const handleMouseEnter = () => {
//     clearTimeout(megaMenuTimer.current);
//     setShowMegaMenu(true);
//   };

//   const handleMouseLeave = () => {
//     megaMenuTimer.current = setTimeout(() => {
//       setShowMegaMenu(false);
//     }, 150);
//   };

//   return (
//     <>
//       <AppBar
//         position="relative"
//         elevation={trigger ? 4 : 0}
//         sx={{
//           backgroundColor: theme.palette.background.paper,
//           color: "#4F1985",
//           transition: 'all 0.3s ease',
//           boxShadow: trigger ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
//         }}
//       >
//         <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'center', px: 2 }}>
//           <Box sx={{ width: '100%', maxWidth: '1440px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', position: 'relative' }}>
//             {/* Logo */}
//             <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//               <img src="/logo.png" alt="Logo" height={50} style={{ marginRight: 8 }} />
//             </RouterLink>

//             {/* Desktop Navigation */}
//             {!isMobile && (
//               <Box sx={{ flex: 1, mx: 4, position: 'relative' }}>
//                 <NavWrapper>
//                   {NAV_ITEMS.map((item) =>
//                     item.label === 'Our Suite' ? (
//                       <NavButton
//                         key={item.label}
//                         active={activeTab === item.label}
//                         onMouseEnter={handleMouseEnter}
//                         onMouseLeave={handleMouseLeave}
//                       >
//                         {item.label}
//                       </NavButton>
//                     ) : (
//                       <NavButton
//                         key={item.label}
//                         active={activeTab === item.label}
//                         component={RouterLink}
//                         to={item.path}
//                         onClick={() => setActiveTab(item.label)}
//                       >
//                         {item.label}
//                       </NavButton>
//                     )
//                   )}
//                 </NavWrapper>

//                 {/* Mega Menu */}
//                 {showMegaMenu && (
//                   <Box
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                     sx={{
//                       position: 'absolute',
//                       top: '100%',
//                       left: 0, // 🔹 adjust this to shift dropdown horizontally
//                       width: '100%',
//                       backgroundColor: '#fff',
//                       boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
//                       zIndex: 1200,
//                       transformOrigin: 'top center',
//                       animation: 'dropdownScale 0.3s ease forwards',
//                       '@keyframes dropdownScale': {
//                         from: { transform: 'scaleY(0)', opacity: 0 },
//                         to: { transform: 'scaleY(1)', opacity: 1 },
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         flexDirection: 'row',
//                         flexWrap: 'nowrap',
//                         overflowX: 'auto',
//                         p: { xs: 2, md: 4 },
//                         gap: 3,
//                         '&::-webkit-scrollbar': { height: 6 },
//                         '&::-webkit-scrollbar-thumb': { background: '#ccc', borderRadius: 3 },
//                       }}
//                     >
//                       {PRODUCT_ITEMS.map((product, idx) => (
//                         <Box
//                           key={idx}
//                           sx={{
//                             flex: '0 0 auto',
//                             width: 240,
//                             bgcolor: '#fafafa',
//                             p: 3,
//                             borderRadius: 4,
//                             boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
//                             cursor: 'pointer',
//                             transition: 'all 0.3s ease',
//                             '&:hover': {
//                               transform: 'translateY(-6px)',
//                               boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
//                               bgcolor: '#fff',
//                             },
//                             opacity: 0,
//                             transform: 'translateY(20px)',
//                             animation: `fadeUp 0.4s ease forwards`,
//                             animationDelay: `${idx * 0.1}s`,
//                             '@keyframes fadeUp': {
//                               to: { opacity: 1, transform: 'translateY(0)' },
//                             },
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={product.img}
//                             alt={product.title}
//                             sx={{
//                               width: 70,
//                               height: 70,
//                               mb: 1.5,
//                               borderRadius: 2,
//                               objectFit: 'contain',
//                               backgroundColor: '#fff',
//                               boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
//                             }}
//                           />
//                           <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#4F1985', mb: 0.5 }}>
//                             {product.title}
//                           </Typography>
//                           <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.4 }}>
//                             {product.desc}
//                           </Typography>
//                         </Box>
//                       ))}
//                     </Box>
//                   </Box>
//                 )}
//               </Box>
//             )}

//             {/* Desktop Contact Button */}
//             {!isMobile && (
//               <Button
//                 variant="contained"
//                 component={RouterLink}
//                 to="/contact"
//                 sx={{
//                   textTransform: 'none',
//                   fontSize: 13,
//                   borderRadius: 2,
//                   px: 2,
//                   py: 0.5,
//                   height: 35,
//                   backgroundColor: '#4F1985',
//                   '&:hover': { backgroundColor: '#3a1259' },
//                 }}
//               >
//                 Request Demo
//               </Button>
//             )}

//             {/* Mobile Menu Icon */}
//             {isMobile && (
//               <IconButton edge="end" onClick={() => setDrawerOpen(true)}>
//                 <MenuIcon />
//               </IconButton>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
//         <Box sx={{ width: 280 }}>
//           <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
//             <Typography variant="h6">Menu</Typography>
//             <IconButton onClick={() => setDrawerOpen(false)}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Divider />
//           <List>
//             {NAV_ITEMS.map((item) => (
//               <ListItem disablePadding key={item.label}>
//                 <ListItemButton
//                   component={RouterLink}
//                   to={item.path}
//                   onClick={() => handleNavClick(item.label)}
//                   selected={activeTab === item.label}
//                   sx={{
//                     '&.Mui-selected': {
//                       color: '#4f1985',
//                       backgroundColor: 'transparent',
//                     },
//                     '&.Mui-selected:hover': {
//                       backgroundColor: theme.palette.action.selected,
//                     },
//                   }}
//                 >
//                   <ListItemText
//                     primary={item.label}
//                     primaryTypographyProps={{
//                       fontWeight: activeTab === item.label ? 600 : 'normal',
//                     }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//             <Divider sx={{ my: 1 }} />
//             <Box p={2}>
//               <Button
//                 variant="contained"
//                 fullWidth
//                 component={RouterLink}
//                 to="/contact"
//                 sx={{
//                   borderRadius: 5,
//                   backgroundColor: '#4F1985',
//                   '&:hover': { backgroundColor: '#3a1259' },
//                 }}
//                 onClick={() => setDrawerOpen(false)}
//               >
//                 Contact Us
//               </Button>
//             </Box>
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// }

//navbar - page
// // import React, { useState, useEffect } from 'react';
// // import {
// //   AppBar,
// //   Toolbar,
// //   IconButton,
// //   Button,
// //   Box,
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemButton,
// //   ListItemText,
// //   Divider,
// //   useMediaQuery,
// //   useScrollTrigger,
// //   Typography,
// // } from '@mui/material';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import CloseIcon from '@mui/icons-material/Close';
// // import { useTheme, styled } from '@mui/material/styles';
// // import { Link as RouterLink, useLocation } from 'react-router-dom';

// // const NAV_ITEMS = [
// //   { label: 'Home', path: '/' },
// //   { label: 'Our Suite', path: '/products' },
// //   { label: 'Buy Need', path: '#' },
// //   { label: 'Resources', path: '/blogs' },
// //   { label: 'About', path: '/about' },
// // ];

// // const PRODUCT_ITEMS = [
// //   { img: '/images/product1.png', title: 'Product One', desc: 'A brief description of Product One goes here.' },
// //   { img: '/images/product2.png', title: 'Product Two', desc: 'Some quick info about Product Two.' },
// //   { img: '/images/product3.png', title: 'Product Three', desc: 'Short and catchy description of Product Three.' },
// // ];

// // const NavWrapper = styled(Box)(({ theme }) => ({
// //   display: 'flex',
// //   backgroundColor: theme.palette.action.hover,
// //   borderRadius: 24,
// //   padding: '4px',
// //   width: '100%',
// //   justifyContent: 'space-evenly',
// // }));

// // const NavButton = styled(Button, {
// //   shouldForwardProp: (prop) => prop !== 'active',
// // })(({ theme, active }) => ({
// //   textTransform: 'none',
// //   fontWeight: 500,
// //   fontSize: 14,
// //   padding: '4px 16px',
// //   borderRadius: 20,
// //   backgroundColor: active ? theme.palette.background.paper : 'transparent',
// //   color: active ? '#4f1985' : theme.palette.text.primary,
// //   boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
// //   transition: 'all 0.3s ease',
// //   '&:hover': {
// //     backgroundColor: active
// //       ? theme.palette.background.paper
// //       : theme.palette.action.selected,
// //   },
// // }));

// // export default function NavbarPage() {
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
// //   const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
// //   const location = useLocation();
// //   const [drawerOpen, setDrawerOpen] = useState(false);
// //   const [activeTab, setActiveTab] = useState('');
// //   const [showMegaMenu, setShowMegaMenu] = useState(false);
// //   const [megaMenuAnimating, setMegaMenuAnimating] = useState(false);

// //   useEffect(() => {
// //     const currentItem = NAV_ITEMS.find(item => item.path === location.pathname);
// //     if (currentItem) {
// //       setActiveTab(currentItem.label);
// //     } else {
// //       setActiveTab('Home');
// //     }
// //   }, [location.pathname]);

// //   const handleNavClick = (label) => {
// //     setActiveTab(label);
// //     setDrawerOpen(false);
// //   };

// //   const handleMouseEnter = () => {
// //     setMegaMenuAnimating(true);
// //     setShowMegaMenu(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setMegaMenuAnimating(false);
// //     setTimeout(() => setShowMegaMenu(false), 300);
// //   };

// //   return (
// //     <>
// //       <AppBar
// //         position="relative"
// //         elevation={trigger ? 4 : 0}
// //         sx={{
// //           backgroundColor: theme.palette.background.paper,
// //           color: "#4F1985",
// //           transition: 'all 0.3s ease',
// //           boxShadow: trigger ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
// //         }}
// //       >
// //         <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'center', px: 2 }}>
// //           <Box sx={{ width: '100%', maxWidth: '1440px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', position: 'relative' }}>
// //             <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
// //               <img src="/logo.png" alt="Logo" height={50} style={{ marginRight: 8 }} />
// //             </RouterLink>

// //             {!isMobile && (
// //               <Box sx={{ flex: 1, mx: 4, position: 'relative' }}>
// //                 <NavWrapper>
// //                   {NAV_ITEMS.map((item) =>
// //                     item.label === 'Our Suite' ? (
// //                       <NavButton
// //                         key={item.label}
// //                         active={activeTab === item.label}
// //                         onMouseEnter={handleMouseEnter}
// //                         onMouseLeave={handleMouseLeave}
// //                       >
// //                         {item.label}
// //                       </NavButton>
// //                     ) : (
// //                       <NavButton
// //                         key={item.label}
// //                         active={activeTab === item.label}
// //                         component={RouterLink}
// //                         to={item.path}
// //                         onClick={() => setActiveTab(item.label)}
// //                       >
// //                         {item.label}
// //                       </NavButton>
// //                     )
// //                   )}
// //                 </NavWrapper>

// //                 {/* Mega Menu */}
// //                 {showMegaMenu && (
// //                   <Box
// //                     onMouseEnter={handleMouseEnter}
// //                     onMouseLeave={handleMouseLeave}
// //                     sx={{
// //                       position: 'absolute',
// //                       top: '100%',
// //                       left: '-5%',
// //                       width: '100%',
// //                       backgroundColor: '#fff',
// //                       boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
// //                       borderRadius: '50px',
// //                       zIndex: 1200,
// //                       transformOrigin: 'top center',
// //                       animation: megaMenuAnimating ? 'dropdownOpen 0.3s ease forwards' : 'dropdownClose 0.3s ease forwards',
// //                       padding: { xs: 4, md: 8 },
// //                       display: 'flex',
// //                       flexWrap: 'wrap',
// //                       justifyContent: 'center',
// //                       gap: 4,
// //                       '@keyframes dropdownOpen': {
// //                         '0%': { transform: 'scaleY(0)', opacity: 0 },
// //                         '100%': { transform: 'scaleY(1)', opacity: 1 },
// //                       },
// //                       '@keyframes dropdownClose': {
// //                         '0%': { transform: 'scaleY(1)', opacity: 1 },
// //                         '100%': { transform: 'scaleY(0)', opacity: 0 },
// //                       },
// //                     }}
// //                   >
// //                     {PRODUCT_ITEMS.map((product, idx) => (
// //                       <Box
// //                         key={idx}
// //                         sx={{
// //                           flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' },
// //                           maxWidth: 350,
// //                           bgcolor: '#fafafa',
// //                           p: 3,
// //                           borderRadius: 4,
// //                           boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
// //                           cursor: 'pointer',
// //                           display: 'flex',
// //                           flexDirection: { xs: 'column', sm: 'row', md: 'row' },
// //                           alignItems: { xs: 'center', sm: 'flex-start' },
// //                           gap: 2,
// //                           transition: 'all 0.3s ease',
// //                           '&:hover': {
// //                             transform: 'translateY(-6px)',
// //                             boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
// //                             bgcolor: '#fff',
// //                           },
// //                           opacity: 0,
// //                           transform: 'translateY(20px)',
// //                           animation: `fadeUp 0.4s ease forwards`,
// //                           animationDelay: `${idx * 0.1}s`,
// //                           '@keyframes fadeUp': {
// //                             to: { opacity: 1, transform: 'translateY(0)' },
// //                           },
// //                         }}
// //                       >
// //                         <Box
// //                           component="img"
// //                           src={product.img}
// //                           alt={product.title}
// //                           sx={{
// //                             width: 80,
// //                             height: 80,
// //                             borderRadius: 2,
// //                             objectFit: 'contain',
// //                             flexShrink: 0,
// //                             marginBottom: { xs: 2, sm: 0 },
// //                           }}
// //                         />
// //                         <Box textAlign={{ xs: 'center', sm: 'left' }}>
// //                           <Typography variant="h6" sx={{ fontWeight: 700, color: '#4F1985', mb: 1 }}>
// //                             {product.title}
// //                           </Typography>
// //                           <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.5 }}>
// //                             {product.desc}
// //                           </Typography>
// //                         </Box>
// //                       </Box>
// //                     ))}
// //                   </Box>
// //                 )}
// //               </Box>
// //             )}

// //             {!isMobile && (
// //               <Button
// //                 variant="contained"
// //                 component={RouterLink}
// //                 to="/contact"
// //                 sx={{
// //                   textTransform: 'none',
// //                   fontSize: 13,
// //                   borderRadius: 2,
// //                   px: 2,
// //                   py: 0.5,
// //                   height: 35,
// //                   backgroundColor: '#4F1985',
// //                   '&:hover': { backgroundColor: '#3a1259' },
// //                 }}
// //               >
// //                 Request Demo
// //               </Button>
// //             )}

// //             {isMobile && (
// //               <IconButton edge="end" onClick={() => setDrawerOpen(true)}>
// //                 <MenuIcon />
// //               </IconButton>
// //             )}
// //           </Box>
// //         </Toolbar>
// //       </AppBar>

// //       {/* Mobile Drawer */}
// //       <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
// //         <Box sx={{ width: 280 }}>
// //           <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
// //             <Typography variant="h6">Menu</Typography>
// //             <IconButton onClick={() => setDrawerOpen(false)}>
// //               <CloseIcon />
// //             </IconButton>
// //           </Box>
// //           <Divider />
// //           <List>
// //             {NAV_ITEMS.map((item) => (
// //               <ListItem disablePadding key={item.label}>
// //                 <ListItemButton
// //                   component={RouterLink}
// //                   to={item.path}
// //                   onClick={() => handleNavClick(item.label)}
// //                   selected={activeTab === item.label}
// //                   sx={{
// //                     '&.Mui-selected': {
// //                       color: '#4f1985',
// //                       backgroundColor: 'transparent',
// //                     },
// //                     '&.Mui-selected:hover': {
// //                       backgroundColor: theme.palette.action.selected,
// //                     },
// //                   }}
// //                 >
// //                   <ListItemText
// //                     primary={item.label}
// //                     primaryTypographyProps={{
// //                       fontWeight: activeTab === item.label ? 600 : 'normal',
// //                     }}
// //                   />
// //                 </ListItemButton>
// //               </ListItem>
// //             ))}
// //             <Divider sx={{ my: 1 }} />
// //             <Box p={2}>
// //               <Button
// //                 variant="contained"
// //                 fullWidth
// //                 component={RouterLink}
// //                 to="/contact"
// //                 sx={{
// //                   borderRadius: 5,
// //                   backgroundColor: '#4F1985',
// //                   '&:hover': { backgroundColor: '#3a1259' },
// //                 }}
// //                 onClick={() => setDrawerOpen(false)}
// //               >
// //                 Contact Us
// //               </Button>
// //             </Box>
// //           </List>
// //         </Box>
// //       </Drawer>
// //     </>
// //   );
// // }

//// import React, { useState, useEffect, useRef } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Button,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Divider,
//   useMediaQuery,
//   useScrollTrigger,
//   Typography,
//   Collapse,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { useTheme, styled } from '@mui/material/styles';
// import { Link as RouterLink, useLocation } from 'react-router-dom';

// const NAV_ITEMS = [
//   { label: 'Home', path: '/' },
//   { label: 'Our Suite', path: '/products', hasDropdown: true },
//   { label: 'Buy Need', path: '#' },
//   { label: 'Resources', path: '/blogs' },
//   { label: 'About', path: '/about' },
// ];

// const PRODUCT_ITEMS = [
//   { 
//     img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Media Intelligence', 
//     path: '/media-intelligence',
//     desc: 'Monitor your brand across all media channels with real-time insights and comprehensive analytics.' 
//   },
//   { 
//     img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Media Relations', 
//     path: '/media-relations',
//     desc: 'Reach key journalists and media contacts to amplify your brand message effectively.' 
//   },
//   { 
//     img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Social Listening & Analytics', 
//     path: '/social-listening',
//     desc: 'Explore insights and trends from social media conversations about your brand.' 
//   },
  
// ];

// const NavWrapper = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: 24,
//   padding: '4px',
//   width: '100%',
//   justifyContent: 'space-evenly',
// }));

// const NavButton = styled(Button, {
//   shouldForwardProp: (prop) => prop !== 'active',
// })(({ theme, active }) => ({
//   textTransform: 'none',
//   fontWeight: 500,
//   fontSize: 14,
//   padding: '4px 16px',
//   borderRadius: 20,
//   backgroundColor: active ? theme.palette.background.paper : 'transparent',
//   color: active ? '#4f1985' : theme.palette.text.primary,
//   boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     backgroundColor: active
//       ? theme.palette.background.paper
//       : theme.palette.action.selected,
//   },
// }));

// export default function NavbarPage() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery('(max-width: 908px)');
//   const isTablet = useMediaQuery('(max-width: 1100px)');
//   const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
//   const location = useLocation();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('');
//   const [showMegaMenu, setShowMegaMenu] = useState(false);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  
//   // Use refs to track mouse state and timers
//   const megaMenuRef = useRef(null);
//   const navItemRef = useRef(null);
//   const hideTimeoutRef = useRef(null);
//   const isMouseInsideRef = useRef(false);

//   useEffect(() => {
//     const currentItem = NAV_ITEMS.find(item => item.path === location.pathname);
//     if (currentItem) {
//       setActiveTab(currentItem.label);
//     } else {
//       setActiveTab('Home');
//     }
//   }, [location.pathname]);

//   const handleNavClick = (label) => {
//     setActiveTab(label);
//     if (label === 'Our Suite') {
//       setMobileDropdownOpen(!mobileDropdownOpen);
//     } else {
//       setDrawerOpen(false);
//       setMobileDropdownOpen(false);
//     }
//   };

//   const showMenu = () => {
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
//     setShowMegaMenu(true);
//     isMouseInsideRef.current = true;
//   };

//   const hideMenu = () => {
//     isMouseInsideRef.current = false;
//     hideTimeoutRef.current = setTimeout(() => {
//       if (!isMouseInsideRef.current) {
//         setShowMegaMenu(false);
//       }
//     }, 200);
//   };

//   const handleNavItemMouseEnter = () => {
//     showMenu();
//   };

//   const handleNavItemMouseLeave = () => {
//     hideMenu();
//   };

//   const handleMegaMenuMouseEnter = () => {
//     showMenu();
//   };

//   const handleMegaMenuMouseLeave = () => {
//     hideMenu();
//   };

//   const handleProductClick = (product, event) => {
//     event.preventDefault();
//     event.stopPropagation();
    
//     // Hide the mega menu with smooth animation
//     setShowMegaMenu(false);
//     isMouseInsideRef.current = false;
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
    
//     // Close mobile drawer if open
//     setDrawerOpen(false);
//     setMobileDropdownOpen(false);
    
//     console.log(`Navigating to ${product.title}`);
//     // Add your navigation logic here
//     // window.location.href = product.path;
//   };

//   const handleLearnMoreClick = (product, event) => {
//     event.preventDefault();
//     event.stopPropagation();
    
//     // Hide the mega menu with smooth animation
//     setShowMegaMenu(false);
//     isMouseInsideRef.current = false;
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
    
//     // Close mobile drawer if open
//     setDrawerOpen(false);
//     setMobileDropdownOpen(false);
    
//     console.log(`Learn more about ${product.title}`);
//     // Add your learn more logic here
//   };

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (hideTimeoutRef.current) {
//         clearTimeout(hideTimeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <AppBar
//         position="relative"
//         elevation={trigger ? 4 : 0}
//         sx={{
//           backgroundColor: theme.palette.background.paper,
//           color: "#4F1985",
//           transition: 'all 0.3s ease',
//           boxShadow: trigger ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
//         }}
//       >
//         <Toolbar sx={{ 
//           minHeight: 64, 
//           display: 'flex', 
//           justifyContent: 'center', 
//           px: { xs: 2, sm: 3, md: 2 },
//           maxWidth: '100%',
//           overflow: 'hidden'
//         }}>
//           <Box sx={{ 
//             width: '200%', 
//             maxWidth: '1440px', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: isMobile ? 'space-between' : 'space-evenly',
//             position: 'relative',
//             minWidth: 0,
//           }}>
//             {/* Logo */}
//             <RouterLink 
//               to="/" 
//               style={{ 
//                 display: 'flex', 
//                 alignItems: 'center', 
//                 textDecoration: 'none',
//                 flexShrink: 0,
//                 minWidth: 'auto',
//               }}
//             >
//               <Box
//                 component="img"
//                 src="/logo.png"
//                 alt="Logo"
//                 sx={{
//                   height: { xs: 40, sm: 45, md: 50 },
//                   width: 'auto',
//                   maxWidth: { xs: 120, sm: 150 },
//                   objectFit: 'contain',
//                 }}
//                 onError={(e) => {
//                   // Fallback if logo doesn't load
//                   e.target.style.display = 'none';
//                   e.target.nextSibling.style.display = 'block';
//                 }}
//               />
//               <Typography
//                 variant="h6"
//                 sx={{
//                   display: 'none',
//                   color: '#4F1985',
//                   fontWeight: 700,
//                   fontSize: { xs: '1.1rem', sm: '1.25rem' },
//                 }}
//               >
//                 Logo
//               </Typography>
//             </RouterLink>

//             {/* Desktop Navigation */}
//             {!isMobile && (
//               <Box sx={{ 
//                 flex: 1, 
//                 mx: { sm: 2, md: 3, lg: 4 },
//                 minWidth: 0,
//                 position: 'relative',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 maxWidth: '700px',
//               }}>
//                 <NavWrapper sx={{
//                   width: '100%',
//                   maxWidth: '600px',
//                   minWidth: { sm: '400px', md: '500px' },
//                 }}>
//                   {NAV_ITEMS.map((item) =>
//                     item.hasDropdown ? (
//                       <Box
//                         key={item.label}
//                         ref={navItemRef}
//                         onMouseEnter={handleNavItemMouseEnter}
//                         onMouseLeave={handleNavItemMouseLeave}
//                         sx={{ position: 'relative', display: 'flex' }}
//                       >
//                         <NavButton active={activeTab === item.label}>
//                           {item.label}
//                         </NavButton>
//                       </Box>
//                     ) : (
//                       <NavButton
//                         key={item.label}
//                         active={activeTab === item.label}
//                         component={item.path !== '#' ? RouterLink : 'div'}
//                         to={item.path !== '#' ? item.path : undefined}
//                         onClick={() => setActiveTab(item.label)}
//                         sx={{ flex: '1 1 auto', minWidth: 0, fontSize: { sm: 12, md: 14 } }}
//                       >
//                         {item.label}
//                       </NavButton>
//                     )
//                   )}
//                 </NavWrapper>

//                 {/* Desktop Mega Menu */}
//                 {showMegaMenu && (
//                   <Box
//                     ref={megaMenuRef}
//                     onMouseEnter={handleMegaMenuMouseEnter}
//                     onMouseLeave={handleMegaMenuMouseLeave}
//                     sx={{
//                       position: 'fixed',
//                       top: '80px',
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                       width: isTablet ? '90vw' : '900px',
//                       maxWidth: '1100px',
//                       backgroundColor: '#fff',
//                       boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
//                       borderRadius: '24px',
//                       zIndex: 1300,
//                       padding: 4,
//                       // Smooth open animation
//                       opacity: 0,
//                       transform: 'translateX(-50%) translateY(-10px) scale(0.98)',
//                       animation: 'megaMenuOpen 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
//                       '@keyframes megaMenuOpen': {
//                         '0%': { 
//                           opacity: 0, 
//                           transform: 'translateX(-50%) translateY(-10px) scale(0.98)' 
//                         },
//                         '100%': { 
//                           opacity: 1, 
//                           transform: 'translateX(-50%) translateY(0) scale(1)' 
//                         },
//                       },
//                       // Smooth close animation when hiding
//                       '&.closing': {
//                         animation: 'megaMenuClose 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
//                       },
//                       '@keyframes megaMenuClose': {
//                         '0%': { 
//                           opacity: 1, 
//                           transform: 'translateX(-50%) translateY(0) scale(1)' 
//                         },
//                         '100%': { 
//                           opacity: 0, 
//                           transform: 'translateX(-50%) translateY(-5px) scale(0.99)' 
//                         },
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: 'grid',
//                         gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
//                         gap: 3,
//                         padding: 2,
//                       }}
//                     >
//                       {PRODUCT_ITEMS.map((product, idx) => (
//                         <Box
//                           key={idx}
//                           onClick={(event) => handleProductClick(product, event)}
//                           sx={{
//                             bgcolor: '#fafafa',
//                             p: 1.2,
//                             borderRadius: 3,
//                             boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//                             cursor: 'pointer',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'flex-start',
//                             gap: 1,
//                             transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                             border: '1px solid transparent',
//                             userSelect: 'none',
//                             position: 'relative',
//                             '&:hover': {
//                               transform: 'translateY(-4px)',
//                               boxShadow: '0 16px 40px rgba(79, 25, 133, 0.2)',
//                               bgcolor: '#fff',
//                               borderColor: 'rgba(79, 25, 133, 0.1)',
//                             },
//                             '&:active': {
//                               transform: 'translateY(-2px)',
//                             },
//                             // Staggered animation
//                             opacity: 0,
//                             transform: 'translateY(20px)',
//                             animation: `productFadeIn 0.4s ease forwards`,
//                             animationDelay: `${idx * 0.1}s`,
//                             '@keyframes productFadeIn': {
//                               to: { 
//                                 opacity: 1, 
//                                 transform: 'translateY(0)' 
//                               },
//                             },
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={product.img}
//                             alt={product.title}
//                             onError={(e) => {
//                               e.target.src = 'https://via.placeholder.com/300x140?text=Product+Image';
//                             }}
//                             sx={{
//                               width: '100%',
//                               height: 140,
//                               borderRadius: 2,
//                               objectFit: 'cover',
//                               mb: 1,
//                             }}
//                           />
//                           <Box sx={{ width: '100%' }}>
//                             <Typography 
//                               variant="h6" 
//                               sx={{ 
//                                 fontWeight: 700, 
//                                 color: '#4F1985', 
//                                 mb: 1,
//                                 fontSize: '1.1rem',
//                                 lineHeight: 1.3,
//                               }}
//                             >
//                               {product.title}
//                             </Typography>
//                             <Typography 
//                               variant="body2" 
//                               sx={{ 
//                                 color: 'text.secondary', 
//                                 lineHeight: 1.5,
//                                 fontSize: '0.875rem',
//                                 display: '-webkit-box',
//                                 WebkitLineClamp: 3,
//                                 WebkitBoxOrient: 'vertical',
//                                 overflow: 'hidden',
//                                 mb: 2,
//                               }}
//                             >
//                               {product.desc}
//                             </Typography>
//                             <Button
//                               size="small"
//                               onClick={(event) => handleLearnMoreClick(product, event)}
//                               sx={{
//                                 color: '#4F1985',
//                                 fontWeight: 600,
//                                 textTransform: 'none',
//                                 fontSize: '0.8rem',
//                                 padding: '6px 12px',
//                                 minWidth: 'auto',
//                                 borderRadius: 2,
//                                 backgroundColor: 'rgba(79, 25, 133, 0.08)',
//                                 '&:hover': {
//                                   backgroundColor: 'rgba(79, 25, 133, 0.15)',
//                                   transform: 'scale(1.02)',
//                                 },
//                                 '&:active': {
//                                   transform: 'scale(0.98)',
//                                 },
//                                 transition: 'all 0.2s ease',
//                               }}
//                             >
//                               Learn more →
//                             </Button>
//                           </Box>
//                         </Box>
//                       ))}
//                     </Box>
//                   </Box>
//                 )}
//               </Box>
//             )}

//             {/* Desktop Contact Button */}
//             {!isMobile && (
//               <Button
//                 variant="contained"
//                 component={RouterLink}
//                 to="/contact"
//                 sx={{
//                   textTransform: 'none',
//                   fontSize: { sm: 12, md: 13 },
//                   borderRadius: 2,
//                   px: { sm: 1.5, md: 2 },
//                   py: 0.5,
//                   height: { sm: 32, md: 35 },
//                   backgroundColor: '#4F1985',
//                   flexShrink: 0,
//                   minWidth: { sm: 'auto', md: 'auto' },
//                   '&:hover': { 
//                     backgroundColor: '#3a1259',
//                     transform: 'scale(1.02)',
//                   },
//                   transition: 'all 0.2s ease',
//                 }}
//               >
//                 Request Demo
//               </Button>
//             )}

//             {/* Mobile Menu Icon */}
//             {isMobile && (
//               <IconButton 
//                 edge="end" 
//                 onClick={() => setDrawerOpen(true)}
//                 sx={{ 
//                   flexShrink: 0,
//                   color: '#4F1985',
//                 }}
//               >
//                 <MenuIcon />
//               </IconButton>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer 
//         anchor="right" 
//         open={drawerOpen} 
//         onClose={() => {
//           setDrawerOpen(false);
//           setMobileDropdownOpen(false);
//         }}
//         sx={{
//           '& .MuiDrawer-paper': {
//             width: { xs: 300, sm: 320 },
//             maxWidth: '85vw',
//           },
//         }}
//       >
//         <Box sx={{ width: '100%', height: '100%' }}>
//           <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
//             <Typography variant="h6" sx={{ color: '#4F1985', fontWeight: 600 }}>
//               Menu
//             </Typography>
//             <IconButton onClick={() => {
//               setDrawerOpen(false);
//               setMobileDropdownOpen(false);
//             }}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Divider />
//           <List sx={{ flex: 1 }}>
//             {NAV_ITEMS.map((item) => (
//               <React.Fragment key={item.label}>
//                 <ListItem disablePadding>
//                   <ListItemButton
//                     component={!item.hasDropdown && item.path !== '#' ? RouterLink : 'div'}
//                     to={!item.hasDropdown && item.path !== '#' ? item.path : undefined}
//                     onClick={() => handleNavClick(item.label)}
//                     selected={activeTab === item.label}
//                     sx={{
//                       py: 1.5,
//                       '&.Mui-selected': {
//                         color: '#4f1985',
//                         backgroundColor: 'rgba(79, 25, 133, 0.08)',
//                         '& .MuiListItemText-primary': {
//                           fontWeight: 600,
//                         },
//                       },
//                       '&.Mui-selected:hover': {
//                         backgroundColor: 'rgba(79, 25, 133, 0.12)',
//                       },
//                       '&:hover': {
//                         backgroundColor: theme.palette.action.hover,
//                       },
//                     }}
//                   >
//                     <ListItemText
//                       primary={item.label}
//                       primaryTypographyProps={{
//                         fontWeight: activeTab === item.label ? 600 : 400,
//                         fontSize: '1rem',
//                       }}
//                     />
//                     {item.hasDropdown && (
//                       mobileDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />
//                     )}
//                   </ListItemButton>
//                 </ListItem>
                
//                 {/* Mobile Dropdown for Our Suite */}
//                 {item.hasDropdown && (
//                   <Collapse in={mobileDropdownOpen} timeout="auto" unmountOnExit>
//                     <List component="div" disablePadding>
//                       {PRODUCT_ITEMS.map((product, idx) => (
//                         <ListItem key={idx} disablePadding>
//                           <ListItemButton
//                             onClick={(event) => handleProductClick(product, event)}
//                             sx={{
//                               pl: 4,
//                               py: 1,
//                               '&:hover': {
//                                 backgroundColor: 'rgba(79, 25, 133, 0.05)',
//                               },
//                             }}
//                           >
//                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
//                               <Box
//                                 component="img"
//                                 src={product.img}
//                                 alt={product.title}
//                                 onError={(e) => {
//                                   e.target.src = 'https://via.placeholder.com/40x40?text=P';
//                                 }}
//                                 sx={{
//                                   width: 40,
//                                   height: 40,
//                                   borderRadius: 1,
//                                   objectFit: 'cover',
//                                   flexShrink: 0,
//                                 }}
//                               />
//                               <Box sx={{ minWidth: 0 }}>
//                                 <Typography
//                                   variant="subtitle2"
//                                   sx={{
//                                     fontWeight: 600,
//                                     color: '#4F1985',
//                                     fontSize: '0.9rem',
//                                     lineHeight: 1.2,
//                                   }}
//                                 >
//                                   {product.title}
//                                 </Typography>
//                                 <Typography
//                                   variant="caption"
//                                   sx={{
//                                     color: 'text.secondary',
//                                     fontSize: '0.75rem',
//                                     display: '-webkit-box',
//                                     WebkitLineClamp: 2,
//                                     WebkitBoxOrient: 'vertical',
//                                     overflow: 'hidden',
//                                     lineHeight: 1.3,
//                                   }}
//                                 >
//                                   {product.desc}
//                                 </Typography>
//                               </Box>
//                             </Box>
//                           </ListItemButton>
//                         </ListItem>
//                       ))}
//                     </List>
//                   </Collapse>
//                 )}
//               </React.Fragment>
//             ))}
//           </List>
//           <Divider />

          
//           <Box p={2}>
            
//             <Button
//               variant="contained"
//               fullWidth
//               component={RouterLink}
//               to="/contact"
//               sx={{
//                 borderRadius: 3,
//                 backgroundColor: '#4F1985',
//                 fontWeight: 600,
//                 py: 1.5,
//                 '&:hover': { 
//                   backgroundColor: '#3a1259',
//                   transform: 'scale(1.02)',
//                 },
//                 transition: 'all 0.2s ease',
//               }}
//               onClick={() => {
//                 setDrawerOpen(false);
//                 setMobileDropdownOpen(false);
//               }}
//             >
//               Request Demo
//             </Button>
//           </Box>
//         </Box>
//       </Drawer>
//     </>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Button,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Divider,
//   useMediaQuery,
//   useScrollTrigger,
//   Typography,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import { useTheme, styled } from '@mui/material/styles';
// import { Link as RouterLink, useLocation } from 'react-router-dom';

// const NAV_ITEMS = [
//   { label: 'Home', path: '/' },
//   { label: 'Our Suite', path: '/products' },
//   { label: 'Buy Need', path: '#' },
//   { label: 'Resources', path: '/blogs' },
//   { label: 'About', path: '/about' },
// ];

// const PRODUCT_ITEMS = [
//   { img: '/images/product1.png', title: 'Product One', desc: 'A brief description of Product One goes here.' },
//   { img: '/images/product2.png', title: 'Product Two', desc: 'Some quick info about Product Two.' },
//   { img: '/images/product3.png', title: 'Product Three', desc: 'Short and catchy description of Product Three.' },
// ];

// const NavWrapper = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: 24,
//   padding: '4px',
//   width: '100%',
//   justifyContent: 'space-evenly',
// }));

// const NavButton = styled(Button, {
//   shouldForwardProp: (prop) => prop !== 'active',
// })(({ theme, active }) => ({
//   textTransform: 'none',
//   fontWeight: 500,
//   fontSize: 14,
//   padding: '4px 16px',
//   borderRadius: 20,
//   backgroundColor: active ? theme.palette.background.paper : 'transparent',
//   color: active ? '#4f1985' : theme.palette.text.primary,
//   boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     backgroundColor: active
//       ? theme.palette.background.paper
//       : theme.palette.action.selected,
//   },
// }));

// export default function NavbarPage() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
//   const location = useLocation();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('');
//   const [showMegaMenu, setShowMegaMenu] = useState(false);
//   const [megaMenuAnimating, setMegaMenuAnimating] = useState(false);

//   useEffect(() => {
//     const currentItem = NAV_ITEMS.find(item => item.path === location.pathname);
//     if (currentItem) {
//       setActiveTab(currentItem.label);
//     } else {
//       setActiveTab('Home');
//     }
//   }, [location.pathname]);

//   const handleNavClick = (label) => {
//     setActiveTab(label);
//     setDrawerOpen(false);
//   };

//   const handleMouseEnter = () => {
//     setMegaMenuAnimating(true);
//     setShowMegaMenu(true);
//   };

//   const handleMouseLeave = () => {
//     setMegaMenuAnimating(false);
//     setTimeout(() => setShowMegaMenu(false), 300); // match animation duration
//   };

//   return (
//     <>
//       <AppBar
//         position="relative"
//         elevation={trigger ? 4 : 0}
//         sx={{
//           backgroundColor: theme.palette.background.paper,
//           color: "#4F1985",
//           transition: 'all 0.3s ease',
//           boxShadow: trigger ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
//         }}
//       >
//         <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'center', px: 2 }}>
//           <Box sx={{ width: '100%', maxWidth: '1440px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', position: 'relative' }}>
//             {/* Logo */}
//             <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//               <img src="/logo.png" alt="Logo" height={50} style={{ marginRight: 8 }} />
//             </RouterLink>

//             {/* Desktop Navigation */}
//             {!isMobile && (
//               <Box sx={{ flex: 1, mx: 4, position: 'relative' }}>
//                 <NavWrapper>
//                   {NAV_ITEMS.map((item) =>
//                     item.label === 'Our Suite' ? (
//                       <NavButton
//                         key={item.label}
//                         active={activeTab === item.label}
//                         onMouseEnter={handleMouseEnter}
//                         onMouseLeave={handleMouseLeave}
//                       >
//                         {item.label}
//                       </NavButton>
//                     ) : (
//                       <NavButton
//                         key={item.label}
//                         active={activeTab === item.label}
//                         component={RouterLink}
//                         to={item.path}
//                         onClick={() => setActiveTab(item.label)}
//                       >
//                         {item.label}
//                       </NavButton>
//                     )
//                   )}
//                 </NavWrapper>

//                 {/* Mega Menu */}
//                 {showMegaMenu && (
//                   <Box
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                     sx={{
//                       position: 'absolute',
//                       top: '100%',
//                       left: '-5%',
//                       width: '100%',
//                       backgroundColor: '#fff',
//                       boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
//                       borderRadius: '50px',
//                       zIndex: 1200,
//                       transformOrigin: 'top center',
//                       animation: megaMenuAnimating ? 'dropdownOpen 0.3s ease forwards' : 'dropdownClose 0.3s ease forwards',
//                       padding: { xs: 5, md: 8 },
//                       '@keyframes dropdownOpen': {
//                         '0%': { transform: 'scaleY(0)', opacity: 0 },
//                         '100%': { transform: 'scaleY(1)', opacity: 1 },
//                       },
//                       '@keyframes dropdownClose': {
//                         '0%': { transform: 'scaleY(1)', opacity: 1 },
//                         '100%': { transform: 'scaleY(0)', opacity: 0 },
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'space-evenly',
//                         gap: 4,
//                       }}
//                     >
//                       {PRODUCT_ITEMS.map((product, idx) => (
//                         <Box
//                           key={idx}
//                           sx={{
//                             flex: '1',
//                             maxWidth: 350,
//                             bgcolor: '#fafafa',
//                             p: 3,
//                             borderRadius: 4,
//                             boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
//                             cursor: 'pointer',
//                             display: 'flex',
//                             alignItems: 'flex-start',
//                             gap: 2,
//                             transition: 'all 0.3s ease',
//                             '&:hover': {
//                               transform: 'translateY(-6px)',
//                               boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
//                               bgcolor: '#fff',
//                             },
//                             opacity: 0,
//                             transform: 'translateY(20px)',
//                             animation: `fadeUp 0.4s ease forwards`,
//                             animationDelay: `${idx * 0.1}s`,
//                             '@keyframes fadeUp': {
//                               to: { opacity: 1, transform: 'translateY(0)' },
//                             },
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={product.img}
//                             alt={product.title}
//                             sx={{
//                               width: 80,
//                               height: 80,
//                               borderRadius: 2,
//                               objectFit: 'contain',
//                               flexShrink: 0,
//                             }}
//                           />
//                           <Box>
//                             <Typography variant="h6" sx={{ fontWeight: 700, color: '#4F1985', mb: 1 }}>
//                               {product.title}
//                             </Typography>
//                             <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.5 }}>
//                               {product.desc}
//                             </Typography>
//                           </Box>
//                         </Box>
//                       ))}
//                     </Box>
//                   </Box>
//                 )}
//               </Box>
//             )}

//             {/* Desktop Contact Button */}
//             {!isMobile && (
//               <Button
//                 variant="contained"
//                 component={RouterLink}
//                 to="/contact"
//                 sx={{
//                   textTransform: 'none',
//                   fontSize: 13,
//                   borderRadius: 2,
//                   px: 2,
//                   py: 0.5,
//                   height: 35,
//                   backgroundColor: '#4F1985',
//                   '&:hover': { backgroundColor: '#3a1259' },
//                 }}
//               >
//                 Request Demo
//               </Button>
//             )}

//             {/* Mobile Menu Icon */}
//             {isMobile && (
//               <IconButton edge="end" onClick={() => setDrawerOpen(true)}>
//                 <MenuIcon />
//               </IconButton>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
//         <Box sx={{ width: 280 }}>
//           <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
//             <Typography variant="h6">Menu</Typography>
//             <IconButton onClick={() => setDrawerOpen(false)}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Divider />
//           <List>
//             {NAV_ITEMS.map((item) => (
//               <ListItem disablePadding key={item.label}>
//                 <ListItemButton
//                   component={RouterLink}
//                   to={item.path}
//                   onClick={() => handleNavClick(item.label)}
//                   selected={activeTab === item.label}
//                   sx={{
//                     '&.Mui-selected': {
//                       color: '#4f1985',
//                       backgroundColor: 'transparent',
//                     },
//                     '&.Mui-selected:hover': {
//                       backgroundColor: theme.palette.action.selected,
//                     },
//                   }}
//                 >
//                   <ListItemText
//                     primary={item.label}
//                     primaryTypographyProps={{
//                       fontWeight: activeTab === item.label ? 600 : 'normal',
//                     }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//             <Divider sx={{ my: 1 }} />
//             <Box p={2}>
//               <Button
//                 variant="contained"
//                 fullWidth
//                 component={RouterLink}
//                 to="/contact"
//                 sx={{
//                   borderRadius: 5,
//                   backgroundColor: '#4F1985',
//                   '&:hover': { backgroundColor: '#3a1259' },
//                 }}
//                 onClick={() => setDrawerOpen(false)}
//               >
//                 Contact Us
//               </Button>
//             </Box>
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// }


