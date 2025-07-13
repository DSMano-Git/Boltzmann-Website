import React, { useEffect, useRef } from 'react';

const HeroAnimation = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef();
  const lastTimeRef = useRef(0);
  const fps = 60;
  const frameInterval = 1000 / fps;

  const primaryColor = '#4F1985';

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
      const count = Math.min(300, Math.floor((window.innerWidth * window.innerHeight) / 2200));
      const colors = [
        primaryColor,
        '#875FC1',
        '#A67CCF',
        '#BFA1E6',
        '#E6D5FF',
        '#FF6B9D',
        '#00D4FF'
      ];

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: 1.2 + Math.random() * 2,
          opacity: 0.5 + Math.random() * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.015,
          pulseSpeed: 0.008 + Math.random() * 0.012,
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
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';
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
      ctx.globalAlpha = 0.2 * (1 - distance / 180);
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

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distanceSq = dx * dx + dy * dy;
            if (distanceSq < 25600) {
              drawConnection(p1, p2, Math.sqrt(distanceSq));
            }
          }
        }

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -50) p.x = canvas.width + 50;
          if (p.x > canvas.width + 50) p.x = -50;
          if (p.y < -50) p.y = canvas.height + 50;
          if (p.y > canvas.height + 50) p.y = -50;
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

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A0A2E] via-[#2A0A46] to-[#4F1985]">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
    </div>
  );
};

export default HeroAnimation;
