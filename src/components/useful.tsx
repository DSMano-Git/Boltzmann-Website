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