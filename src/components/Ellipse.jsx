import React, { useEffect, useRef, useState } from 'react';

export default function EllipticalAnimation() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // High-DPI setup
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 1400 * dpr;
    canvas.height = 900 * dpr;
    canvas.style.width = '1400px';
    canvas.style.height = '900px';
    ctx.scale(dpr, dpr);
    
    const CANVAS_WIDTH = 1400;
    const CANVAS_HEIGHT = 900;
    const centerX = CANVAS_WIDTH / 2;
    const centerY = CANVAS_HEIGHT / 2;
    
    // Metallic liquid orbital systems
    const liquidOrbits = [
      { 
        radiusX: 220, 
        radiusY: 90, 
        speed: 0.0008, 
        rotateAngle: 0,
        baseColor: '#c0c0c0',
        metallic: '#e8e8e8',
        highlight: '#ffffff',
        shadow: '#808080',
        viscosity: 0.15,
        droplets: []
      },
      { 
        radiusX: 180, 
        radiusY: 280, 
        speed: 0.0005, 
        rotateAngle: Math.PI / 3,
        baseColor: '#b8860b',
        metallic: '#ffd700',
        highlight: '#ffff99',
        shadow: '#8b6914',
        viscosity: 0.12,
        droplets: []
      },
      { 
        radiusX: 260, 
        radiusY: 70, 
        speed: 0.001, 
        rotateAngle: -Math.PI / 4,
        baseColor: '#cd7f32',
        metallic: '#d2691e',
        highlight: '#f4a460',
        shadow: '#8b4513',
        viscosity: 0.18,
        droplets: []
      },
      { 
        radiusX: 200, 
        radiusY: 240, 
        speed: 0.0006, 
        rotateAngle: Math.PI / 2,
        baseColor: '#4a4a4a',
        metallic: '#696969',
        highlight: '#dcdcdc',
        shadow: '#2f2f2f',
        viscosity: 0.14,
        droplets: []
      }
    ];
    
    // Floating metallic particles
    const floatingDroplets = Array.from({ length: 120 }, () => ({
      x: Math.random() * CANVAS_WIDTH,
      y: Math.random() * CANVAS_HEIGHT,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 0.2 + 0.05,
      opacity: Math.random() * 0.6 + 0.3,
      direction: Math.random() * Math.PI * 2,
      metallic: Math.random() > 0.5,
      shimmer: Math.random() * Math.PI * 2
    }));
    
    function createMetallicGradient(x, y, size, colors) {
      const gradient = ctx.createRadialGradient(x - size * 0.3, y - size * 0.3, 0, x, y, size);
      gradient.addColorStop(0, colors.highlight);
      gradient.addColorStop(0.3, colors.metallic);
      gradient.addColorStop(0.7, colors.baseColor);
      gradient.addColorStop(1, colors.shadow);
      return gradient;
    }
    
    function createLiquidSurface(x, y, size, colors, time) {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      const shimmer = Math.sin(time * 0.003) * 0.2 + 0.8;
      gradient.addColorStop(0, colors.highlight + Math.floor(shimmer * 255).toString(16).padStart(2, '0'));
      gradient.addColorStop(0.4, colors.metallic + 'dd');
      gradient.addColorStop(0.8, colors.baseColor + 'aa');
      gradient.addColorStop(1, colors.shadow + '66');
      return gradient;
    }
    
    function drawLiquidDroplet(x, y, size, colors, time, viscosity) {
      ctx.save();
      
      // Liquid deformation based on movement
      const deformation = Math.sin(time * 0.002) * viscosity;
      ctx.scale(1 + deformation, 1 - deformation * 0.5);
      
      // Shadow/depth
      ctx.shadowColor = colors.shadow;
      ctx.shadowBlur = size * 0.8;
      ctx.shadowOffsetX = size * 0.2;
      ctx.shadowOffsetY = size * 0.3;
      
      // Main liquid body
      ctx.fillStyle = createLiquidSurface(x, y, size, colors, time);
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
      
      // Metallic highlight
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      
      const highlightGradient = ctx.createRadialGradient(
        x - size * 0.4, y - size * 0.4, 0, 
        x - size * 0.2, y - size * 0.2, size * 0.6
      );
      highlightGradient.addColorStop(0, colors.highlight + 'cc');
      highlightGradient.addColorStop(0.5, colors.metallic + '66');
      highlightGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = highlightGradient;
      ctx.beginPath();
      ctx.arc(x - size * 0.2, y - size * 0.2, size * 0.6, 0, Math.PI * 2);
      ctx.fill();
      
      // Liquid surface tension effect
      ctx.strokeStyle = colors.baseColor + '44';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.95, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.restore();
    }
    
    function drawFloatingDroplets() {
      floatingDroplets.forEach(droplet => {
        const time = Date.now();
        const shimmer = Math.sin(time * 0.001 + droplet.shimmer) * 0.3 + 0.7;
        
        ctx.save();
        ctx.globalAlpha = droplet.opacity * shimmer;
        
        if (droplet.metallic) {
          const colors = {
            baseColor: '#c0c0c0',
            metallic: '#e8e8e8',
            highlight: '#ffffff',
            shadow: '#808080'
          };
          drawLiquidDroplet(droplet.x, droplet.y, droplet.size, colors, time, 0.1);
        } else {
          ctx.fillStyle = `rgba(200, 200, 200, ${droplet.opacity})`;
          ctx.beginPath();
          ctx.arc(droplet.x, droplet.y, droplet.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
        
        // Update position
        droplet.x += Math.cos(droplet.direction) * droplet.speed;
        droplet.y += Math.sin(droplet.direction) * droplet.speed;
        
        // Wrap around
        if (droplet.x < 0) droplet.x = CANVAS_WIDTH;
        if (droplet.x > CANVAS_WIDTH) droplet.x = 0;
        if (droplet.y < 0) droplet.y = CANVAS_HEIGHT;
        if (droplet.y > CANVAS_HEIGHT) droplet.y = 0;
      });
    }
    
    function drawLiquidTrail(trail, colors, maxSize) {
      for (let i = 1; i < trail.length; i++) {
        const alpha = i / trail.length;
        const size = (maxSize * alpha) / 2;
        
        ctx.save();
        ctx.globalAlpha = alpha * 0.6;
        
        const gradient = ctx.createRadialGradient(
          trail[i].x, trail[i].y, 0, 
          trail[i].x, trail[i].y, size
        );
        gradient.addColorStop(0, colors.metallic + 'aa');
        gradient.addColorStop(0.7, colors.baseColor + '44');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(trail[i].x, trail[i].y, size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }
    
    function draw() {
      // Deep metallic background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
      bgGradient.addColorStop(0, '#0a0a0a');
      bgGradient.addColorStop(0.5, '#1a1a1a');
      bgGradient.addColorStop(1, '#2a2a2a');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      
      // Floating ambient droplets
      drawFloatingDroplets();
      
      // Central metallic core
      ctx.save();
      const coreColors = {
        baseColor: '#c0c0c0',
        metallic: '#e8e8e8',
        highlight: '#ffffff',
        shadow: '#808080'
      };
      drawLiquidDroplet(centerX, centerY, 25, coreColors, Date.now(), 0.2);
      ctx.restore();
      
      liquidOrbits.forEach(orbit => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(orbit.rotateAngle);
        
        // Liquid orbital path with metallic sheen
        const pathGradient = ctx.createLinearGradient(-orbit.radiusX, -orbit.radiusY, orbit.radiusX, orbit.radiusY);
        pathGradient.addColorStop(0, orbit.shadow + '33');
        pathGradient.addColorStop(0.5, orbit.metallic + '22');
        pathGradient.addColorStop(1, orbit.shadow + '33');
        
        ctx.strokeStyle = pathGradient;
        ctx.lineWidth = 3;
        ctx.setLineDash([10, 20]);
        ctx.lineDashOffset = -Date.now() * 0.02;
        ctx.beginPath();
        ctx.ellipse(0, 0, orbit.radiusX, orbit.radiusY, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Calculate liquid droplet position
        const time = Date.now();
        const currentAngle = time * orbit.speed;
        const wobble = Math.sin(currentAngle * 3) * orbit.viscosity;
        const orbitalX = orbit.radiusX * Math.cos(currentAngle + wobble);
        const orbitalY = orbit.radiusY * Math.sin(currentAngle + wobble);
        
        // Update droplet trail
        orbit.droplets.push({ x: orbitalX, y: orbitalY });
        if (orbit.droplets.length > 30) orbit.droplets.shift();
        
        // Draw liquid trail
        drawLiquidTrail(orbit.droplets, orbit, 15);
        
        // Draw main liquid droplet
        const dropletSize = 18 + Math.sin(time * 0.001) * 3;
        drawLiquidDroplet(orbitalX, orbitalY, dropletSize, orbit, time, orbit.viscosity);
        
        // Liquid connection effects
        if (orbit.droplets.length > 5) {
          const prev = orbit.droplets[orbit.droplets.length - 2];
          const curr = orbit.droplets[orbit.droplets.length - 1];
          
          ctx.strokeStyle = orbit.metallic + '66';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(curr.x, curr.y);
          ctx.stroke();
        }
        
        ctx.restore();
      });
      
      // Liquid bridge connections between droplets
      for (let i = 0; i < liquidOrbits.length; i++) {
        for (let j = i + 1; j < liquidOrbits.length; j++) {
          const orbit1 = liquidOrbits[i];
          const orbit2 = liquidOrbits[j];
          
          if (orbit1.droplets.length > 0 && orbit2.droplets.length > 0) {
            const drop1 = orbit1.droplets[orbit1.droplets.length - 1];
            const drop2 = orbit2.droplets[orbit2.droplets.length - 1];
            
            // Transform coordinates back to canvas space
            const x1 = centerX + (drop1.x * Math.cos(orbit1.rotateAngle) - drop1.y * Math.sin(orbit1.rotateAngle));
            const y1 = centerY + (drop1.x * Math.sin(orbit1.rotateAngle) + drop1.y * Math.cos(orbit1.rotateAngle));
            const x2 = centerX + (drop2.x * Math.cos(orbit2.rotateAngle) - drop2.y * Math.sin(orbit2.rotateAngle));
            const y2 = centerY + (drop2.x * Math.sin(orbit2.rotateAngle) + drop2.y * Math.cos(orbit2.rotateAngle));
            
            const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            
            if (distance < 150) {
              const alpha = (150 - distance) / 150 * 0.4;
              const connectionGradient = ctx.createLinearGradient(x1, y1, x2, y2);
              connectionGradient.addColorStop(0, orbit1.metallic + Math.floor(alpha * 255).toString(16).padStart(2, '0'));
              connectionGradient.addColorStop(0.5, '#ffffff' + Math.floor(alpha * 128).toString(16).padStart(2, '0'));
              connectionGradient.addColorStop(1, orbit2.metallic + Math.floor(alpha * 255).toString(16).padStart(2, '0'));
              
              ctx.strokeStyle = connectionGradient;
              ctx.lineWidth = 6;
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.stroke();
            }
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(draw);
    }
    
    setTimeout(() => {
      setIsLoaded(true);
      draw();
    }, 100);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6">
      <div className="relative">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 bg-clip-text text-transparent mb-3">
              Liquid Metal Dynamics
            </h1>
            <p className="text-gray-500 text-xl font-light">
              Viscous Metallic Orbital Flow System
            </p>
          </div>
          
          <div className="relative">
            <canvas
              ref={canvasRef}
              className="rounded-3xl shadow-2xl border-2 border-gray-700/50"
              style={{ 
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(40, 40, 40, 0.9))',
                filter: 'drop-shadow(0 0 30px rgba(192, 192, 192, 0.2))'
              }}
            />
            
            {/* Metallic corner accents */}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-gray-300 to-gray-600 rounded-full opacity-80"></div>
            <div className="absolute -bottom-3 -right-3 w-5 h-5 bg-gradient-to-br from-gray-400 to-gray-700 rounded-full opacity-80"></div>
            <div className="absolute top-1/3 -left-4 w-3 h-3 bg-gradient-to-br from-gray-200 to-gray-500 rounded-full opacity-70"></div>
            <div className="absolute top-2/3 -right-4 w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-600 rounded-full opacity-70"></div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full"></div>
                <span>Liquid Mercury</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                <span>Molten Gold</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-700 rounded-full"></div>
                <span>Liquid Copper</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-800 rounded-full"></div>
                <span>Molten Steel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}