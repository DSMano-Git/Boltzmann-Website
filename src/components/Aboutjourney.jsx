import React, { useRef, useEffect, useState, useCallback } from 'react';

const UltraSmoothTimeline = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const timelineRef = useRef(null);
  const logoRef = useRef(null);
  const progressPathRef = useRef(null);
  const yearRef = useRef(null);
  const eventRef = useRef(null);
  const markersRef = useRef([]);
  const timelineProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const animationFrameRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const lastScrollTimeRef = useRef(0);
  const scrollVelocityRef = useRef(0);
  
  const [isTimelineActive, setIsTimelineActive] = useState(false);
  const [isTimelineComplete, setIsTimelineComplete] = useState(false);
  const [showCompletionSection, setShowCompletionSection] = useState(false);
  const [canExitTimeline, setCanExitTimeline] = useState(false);

  // Timeline configuration
  const config = {
    waypoints: [
      { x: 80, y: 80, year: "2019", event: "Company Founded" },
      { x: 320, y: 80, year: "2020", event: "First Product Launch" },
      { x: 320, y: 180, year: "2021", event: "Series A Funding" },
      { x: 80, y: 180, year: "2022", event: "Global Expansion" },
      { x: 80, y: 280, year: "2023", event: "Product V2 Released" },
      { x: 320, y: 280, year: "2024", event: "IPO" }
    ],
    colors: {
      primary: "#5b46e5",
      secondary: "#8b74f3",
      background: "#f9fafb",
      text: "#1f2937",
      inactive: "#e5e7eb",
      activeMarker: "#ffffff"
    },
    sizes: {
      pathWidth: 2,
      markerActive: 16,
      markerInactive: 8,
      logo: 40
    },
    // Improved scroll settings
    scrollSensitivity: 0.008, // Much slower base speed
    maxScrollSpeed: 0.003,    // Cap the maximum speed
    smoothingFactor: 0.15,    // Slightly more responsive
    velocityDecay: 0.92       // How quickly scroll momentum decays
  };

  // SVG path definition
  const pathData = `
    M${config.waypoints[0].x} ${config.waypoints[0].y}
    H${config.waypoints[1].x}
    C ${config.waypoints[1].x + 50} ${config.waypoints[1].y}, 
      ${config.waypoints[1].x + 50} ${config.waypoints[2].y}, 
      ${config.waypoints[2].x} ${config.waypoints[2].y}
    H${config.waypoints[3].x}
    C ${config.waypoints[3].x - 50} ${config.waypoints[3].y}, 
      ${config.waypoints[3].x - 50} ${config.waypoints[4].y}, 
      ${config.waypoints[4].x} ${config.waypoints[4].y}
    H${config.waypoints[5].x}
  `;

  // Smooth animation with easing
  const lerp = (start, end, factor) => start + (end - start) * factor;

  // Smooth animation loop
  const animate = useCallback(() => {
    if (!isAnimatingRef.current) return;

    const targetProgress = timelineProgressRef.current;
    const currentProgress = smoothProgressRef.current;
    
    // Use exponential easing for smooth animation
    const newProgress = lerp(currentProgress, targetProgress, config.smoothingFactor);
    
    // Update only if there's a significant difference
    if (Math.abs(newProgress - currentProgress) > 0.001) {
      smoothProgressRef.current = newProgress;
      updateVisuals(newProgress);
      updateAnimations(newProgress);
    }
    
    // Apply velocity decay
    scrollVelocityRef.current *= config.velocityDecay;
    
    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  // Start/stop animation
  const startAnimation = useCallback(() => {
    if (!isAnimatingRef.current) {
      isAnimatingRef.current = true;
      animate();
    }
  }, [animate]);

  const stopAnimation = useCallback(() => {
    isAnimatingRef.current = false;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  // Lock/unlock scroll functions
  const lockScroll = useCallback(() => {
    const scrollY = window.scrollY;
    // document.body.style.overflow = 'hidden';
    document.body.style.position = 'relative';
    document.body.style.width = '100%';
    document.body.style.bottom = `-${scrollY}px`;

  }, []);

  const unlockScroll = useCallback(() => {
    const scrollY = parseInt(document.body.dataset.scrollY || '0');
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '20px';
    delete document.body.dataset.scrollY;
    window.scrollTo(0, scrollY);
  }, []);

  // Animation functions
  const updateAnimations = useCallback((progress) => {
    if (progressPathRef.current) {
      const pathLength = progressPathRef.current.getTotalLength();
      progressPathRef.current.style.strokeDashoffset = pathLength * (1 - progress);
    }
  }, []);

  const updateVisuals = useCallback((progress) => {
    const totalSegments = config.waypoints.length - 1;
    const segmentProgress = progress * totalSegments;
    const segmentIndex = Math.min(Math.floor(segmentProgress), totalSegments - 1);
    const segmentOffset = segmentProgress - segmentIndex;

    // Update logo position with smooth interpolation
    if (segmentIndex < totalSegments && logoRef.current) {
      const start = config.waypoints[segmentIndex];
      const end = config.waypoints[segmentIndex + 1];
      
      // Smooth interpolation between waypoints
      const x = start.x + (end.x - start.x) * segmentOffset;
      const y = start.y + (end.y - start.y) * segmentOffset;

      logoRef.current.style.transform = `translate(${x - config.sizes.logo/2}px, ${y - config.sizes.logo/2}px)`;
    }

    // Update text content with smooth transitions
    const currentWaypointIndex = Math.min(Math.floor(progress * config.waypoints.length), config.waypoints.length - 1);
    const currentWaypoint = config.waypoints[currentWaypointIndex];
    
    if (yearRef.current && eventRef.current) {
      // Only update if the content actually changed to avoid unnecessary DOM updates
      if (yearRef.current.textContent !== currentWaypoint.year) {
        yearRef.current.textContent = currentWaypoint.year;
      }
      if (eventRef.current.textContent !== currentWaypoint.event) {
        eventRef.current.textContent = currentWaypoint.event;
      }
    }

    // Update markers with smooth transitions
    config.waypoints.forEach((pt, idx) => {
      const markerThreshold = idx / totalSegments;
      const active = progress >= markerThreshold;
      const marker = markersRef.current[idx];
      
      if (marker) {
        const currentActive = marker.getAttribute('data-active') === 'true';
        
        // Only update if state changed
        if (currentActive !== active) {
          marker.setAttribute('data-active', active.toString());
          marker.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
          marker.setAttribute('r', active ? config.sizes.markerActive : config.sizes.markerInactive);
          marker.setAttribute('fill', active ? config.colors.activeMarker : config.colors.inactive);
          marker.setAttribute('stroke', active ? config.colors.primary : "none");
          marker.setAttribute('stroke-width', active ? 3 : 0);
        }
      }
    });
  }, []);

  // Reset timeline to beginning
  const resetTimeline = useCallback(() => {
    timelineProgressRef.current = 0;
    smoothProgressRef.current = 0;
    scrollVelocityRef.current = 0;
    setIsTimelineComplete(false);
    setShowCompletionSection(false);
    setCanExitTimeline(false);
    updateVisuals(0);
    updateAnimations(0);
  }, [updateVisuals, updateAnimations]);

  // Exit timeline and go to next section
  const exitTimelineForward = useCallback(() => {
    stopAnimation();
    unlockScroll();
    setIsTimelineActive(false);
    
    // Smoothly scroll to next section
    const nextSection = containerRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [stopAnimation, unlockScroll]);

  // Exit timeline and go to previous section
  const exitTimelineBackward = useCallback(() => {
    stopAnimation();
    unlockScroll();
    setIsTimelineActive(false);
    resetTimeline();
    
    // Smoothly scroll to previous section
    const prevSection = containerRef.current?.previousElementSibling;
    if (prevSection) {
      prevSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [stopAnimation, unlockScroll, resetTimeline]);

  useEffect(() => {
    // Initialize timeline
    if (progressPathRef.current) {
      const pathLength = progressPathRef.current.getTotalLength();
      progressPathRef.current.style.strokeDasharray = pathLength;
      progressPathRef.current.style.strokeDashoffset = pathLength;
    }

    // Set initial positions
    if (logoRef.current) {
      logoRef.current.style.transform = `translate(${config.waypoints[0].x - config.sizes.logo/2}px, ${config.waypoints[0].y - config.sizes.logo/2}px)`;
    }

    if (yearRef.current) yearRef.current.textContent = config.waypoints[0].year;
    if (eventRef.current) eventRef.current.textContent = config.waypoints[0].event;

    // Initialize markers
    markersRef.current.forEach(marker => {
      if (marker) {
        marker.setAttribute('data-active', 'false');
      }
    });

    // Intersection observer for timeline activation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTimelineActive(true);
            lockScroll();
            startAnimation();
          } else if (!entry.isIntersecting && isTimelineActive) {
            // Only deactivate if we're not in completion mode
            if (!showCompletionSection) {
              setIsTimelineActive(false);
              stopAnimation();
              unlockScroll();
            }
          }
        });
      },
      { threshold: 0.7 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Improved wheel event handler with better scroll control
    const handleWheel = (e) => {
      if (!isTimelineActive) return;
      
      e.preventDefault();
      e.stopPropagation();
      
      const currentTime = Date.now();
      const deltaTime = currentTime - lastScrollTimeRef.current;
      lastScrollTimeRef.current = currentTime;
      
      // Normalize scroll delta and apply sensitivity
      const normalizedDelta = Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), 100);
      let scrollSpeed = normalizedDelta * config.scrollSensitivity;
      
      // Apply time-based smoothing for consistent speed across different frame rates
      if (deltaTime > 0) {
        scrollSpeed = Math.min(Math.abs(scrollSpeed), config.maxScrollSpeed) * Math.sign(scrollSpeed);
      }
      
      // Update velocity for momentum-based scrolling
      scrollVelocityRef.current = scrollSpeed;
      
      if (!showCompletionSection) {
        // Timeline navigation
        if (scrollSpeed > 0) {
          // Scrolling down
          timelineProgressRef.current = Math.min(1, timelineProgressRef.current + Math.abs(scrollSpeed));
        } else {
          // Scrolling up
          if (timelineProgressRef.current <= 0.05) {
            // Exit to previous section
            exitTimelineBackward();
            return;
          }
          timelineProgressRef.current = Math.max(0, timelineProgressRef.current - Math.abs(scrollSpeed));
        }
        
        // Check for completion
        if (timelineProgressRef.current >= 0.95 && !isTimelineComplete) {
          setIsTimelineComplete(true);
          setTimeout(() => {
            setShowCompletionSection(true);
            setTimeout(() => {
              setCanExitTimeline(true);
            }, 500);
          }, 800);
        }
        
        // Reset completion if scrolling back significantly
        if (timelineProgressRef.current < 0.85 && isTimelineComplete) {
          setIsTimelineComplete(false);
          setShowCompletionSection(false);
          setCanExitTimeline(false);
        }
      } else {
        // Completion section is visible
        if (scrollSpeed < 0) {
          // Scrolling up - go back to timeline
          setShowCompletionSection(false);
          setIsTimelineComplete(false);
          setCanExitTimeline(false);
          timelineProgressRef.current = 0.8;
        } else if (canExitTimeline) {
          // Scrolling down - exit to next section
          exitTimelineForward();
        }
      }
    };

    // Add event listeners
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      observer.disconnect();
      document.removeEventListener('wheel', handleWheel);
      stopAnimation();
      unlockScroll();
    };
  }, [isTimelineActive, showCompletionSection, canExitTimeline, isTimelineComplete, lockScroll, unlockScroll, startAnimation, stopAnimation, exitTimelineForward, exitTimelineBackward]);

  return (
    <>
      {/* Content before timeline */}
      <div style={{ 
        height: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
      }}>
        <h1 style={{ color: "white", fontSize: "3rem", textAlign: "center" }}>
          Scroll down to see our journey
        </h1>
      </div>

      <div 
        ref={containerRef}
        style={{
          minHeight: "100vh",
          width: "100%",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          ref={contentRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            boxSizing: "border-box"
          }}
        >
          <div
            ref={timelineRef}
            style={{
              width: "100%",
              maxWidth: "1200px",
              height: "80vh",
              background: "white",
              borderRadius: "24px",
              boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              transform: showCompletionSection ? "translateY(100%)" : "translateY(0)",
              transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              opacity: showCompletionSection ? 0 : 1
            }}
          >
            <div style={{
              padding: "3rem 3rem 2rem",
              borderBottom: `1px solid ${config.colors.inactive}`
            }}>
              <h2 style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: config.colors.primary,
                margin: "0",
                letterSpacing: "-0.5px"
              }}>Our Journey Timeline</h2>
              <p style={{
                margin: "1rem 0 0",
                color: config.colors.text,
                opacity: 0.7
              }}>
                {showCompletionSection ? "Timeline completed! Scroll down to continue." : 
                 isTimelineComplete ? "Timeline Complete! Revealing summary..." : 
                 "Scroll slowly to navigate through our timeline"}
              </p>
            </div>

            <div style={{
              display: "flex",
              flex: "1",
              height: "calc(100% - 140px)"
            }}>
              <div style={{
                flex: "0 0 380px",
                padding: "3rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRight: `1px solid ${config.colors.inactive}`
              }}>
                <div ref={yearRef} style={{
                  fontSize: "3.5rem",
                  fontWeight: "800",
                  color: config.colors.primary,
                  marginBottom: "1.5rem",
                  lineHeight: "1",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                }}>
                  {config.waypoints[0].year}
                </div>
                <div ref={eventRef} style={{
                  fontSize: "1.5rem",
                  color: config.colors.text,
                  lineHeight: "1.5",
                  fontWeight: "500",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                }}>
                  {config.waypoints[0].event}
                </div>
              </div>

              <div style={{
                flex: "1",
                position: "relative",
                padding: "3rem"
              }}>
                <svg 
                  viewBox="0 0 400 300" 
                  style={{
                    width: "100%",
                    height: "100%"
                  }}
                >
                  <path
                    d={pathData}
                    fill="none"
                    stroke={config.colors.inactive}
                    strokeWidth={config.sizes.pathWidth}
                    strokeLinecap="round"
                  />

                  <path
                    ref={progressPathRef}
                    d={pathData}
                    fill="none"
                    stroke={config.colors.primary}
                    strokeWidth={config.sizes.pathWidth}
                    strokeLinecap="round"
                    style={{
                      transition: "stroke-dashoffset 0.1s ease-out"
                    }}
                  />

                  {config.waypoints.map((pt, idx) => (
                    <circle
                      key={`marker-${idx}`}
                      ref={el => markersRef.current[idx] = el}
                      cx={pt.x}
                      cy={pt.y}
                      r={config.sizes.markerInactive}
                      fill={config.colors.inactive}
                      stroke="none"
                      strokeWidth="0"
                      data-active="false"
                    />
                  ))}
                </svg>

                <div
                  ref={logoRef}
                  style={{
                    position: "absolute",
                    width: `${config.sizes.logo}px`,
                    height: `${config.sizes.logo}px`,
                    zIndex: "10",
                    pointerEvents: "none",
                    filter: "drop-shadow(0 8px 16px rgba(91, 70, 229, 0.3))",
                    willChange: "transform"
                  }}
                >
                  <div style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: config.colors.primary,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "3px solid white",
                    transform: "scale(1)",
                    transition: "transform 0.2s ease"
                  }}>
                    <div style={{
                      width: "50%",
                      height: "50%",
                      borderRadius: "50%",
                      background: "white"
                    }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Completion Section */}
          {showCompletionSection && (
            <div style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              height: "100vh",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              padding: "2rem",
              boxSizing: "border-box",
              animation: "slideUpSmooth 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards"
            }}>
              <div style={{
                textAlign: "center",
                maxWidth: "800px",
                animation: "fadeInUp 1s ease-out 0.3s both"
              }}>
                <h2 style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  marginBottom: "2rem",
                  lineHeight: "1.2"
                }}>
                  Journey Complete!
                </h2>
                <p style={{
                  fontSize: "1.25rem",
                  lineHeight: "1.8",
                  marginBottom: "3rem",
                  opacity: 0.9
                }}>
                  From our humble beginnings in 2019 to our successful IPO in 2024, 
                  we've built something extraordinary together. This timeline represents 
                  not just milestones, but the passion and dedication of our entire team.
                </p>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "2rem",
                  marginTop: "3rem"
                }}>
                  {[
                    { number: "6", label: "Major Milestones" },
                    { number: "5", label: "Years of Growth" },
                    { number: "∞", label: "Future Possibilities" }
                  ].map((stat, idx) => (
                    <div key={idx} style={{
                      background: "rgba(255,255,255,0.1)",
                      padding: "1.5rem",
                      borderRadius: "12px",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      animation: `fadeInUp 0.6s ease-out ${0.5 + idx * 0.1}s both`
                    }}>
                      <h3 style={{ fontSize: "2rem", marginBottom: "0.5rem", fontWeight: "700" }}>
                        {stat.number}
                      </h3>
                      <p style={{ margin: 0, opacity: 0.8 }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
                <p style={{
                  fontSize: "1rem",
                  opacity: 0.7,
                  marginTop: "3rem",
                  animation: "fadeInUp 0.6s ease-out 0.8s both"
                }}>
                  {canExitTimeline ? "Scroll down to continue" : "Loading next section..."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes slideUpSmooth {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        /* Smooth scrollbar hide */
        ::-webkit-scrollbar {
          display: none;
        }
        
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Content after timeline */}
      <div style={{ 
        height: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" 
      }}>
        <h1 style={{ color: "#333", fontSize: "3rem", textAlign: "center" }}>
          Thank you for following our journey!
        </h1>
      </div>
    </>
  );
};

export default UltraSmoothTimeline;

// import React, { useRef, useEffect, useState, useCallback } from 'react';

// const UltraSmoothTimeline = () => {
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);
//   const timelineRef = useRef(null);
//   const logoRef = useRef(null);
//   const progressPathRef = useRef(null);
//   const yearRef = useRef(null);
//   const eventRef = useRef(null);
//   const markersRef = useRef([]);
//   const timelineProgressRef = useRef(0);
//   const smoothProgressRef = useRef(0);
//   const animationFrameRef = useRef(null);
//   const isAnimatingRef = useRef(false);
//   const lastScrollTimeRef = useRef(0);
//   const scrollVelocityRef = useRef(0);
  
//   const [isTimelineActive, setIsTimelineActive] = useState(false);
//   const [isTimelineComplete, setIsTimelineComplete] = useState(false);
//   const [showCompletionSection, setShowCompletionSection] = useState(false);
//   const [canExitTimeline, setCanExitTimeline] = useState(false);

//   // Timeline configuration
//   const config = {
//     waypoints: [
//       { x: 80, y: 80, year: "2019", event: "Company Founded" },
//       { x: 320, y: 80, year: "2020", event: "First Product Launch" },
//       { x: 320, y: 180, year: "2021", event: "Series A Funding" },
//       { x: 80, y: 180, year: "2022", event: "Global Expansion" },
//       { x: 80, y: 280, year: "2023", event: "Product V2 Released" },
//       { x: 320, y: 280, year: "2024", event: "IPO" }
//     ],
//     colors: {
//       primary: "#5b46e5",
//       secondary: "#8b74f3",
//       background: "#f9fafb",
//       text: "#1f2937",
//       inactive: "#e5e7eb",
//       activeMarker: "#ffffff"
//     },
//     sizes: {
//       pathWidth: 10,
//       markerActive: 16,
//       markerInactive: 8,
//       logo: 40
//     },
//     // Improved scroll settings
//     scrollSensitivity: 0.003, // Much slower base speed
//     maxScrollSpeed: 0.008,    // Cap the maximum speed
//     smoothingFactor: 0.15,    // Slightly more responsive
//     velocityDecay: 0.92       // How quickly scroll momentum decays
//   };

//   // SVG path definition
//   const pathData = `
//     M${config.waypoints[0].x} ${config.waypoints[0].y}
//     H${config.waypoints[1].x}
//     C ${config.waypoints[1].x + 50} ${config.waypoints[1].y}, 
//       ${config.waypoints[1].x + 50} ${config.waypoints[2].y}, 
//       ${config.waypoints[2].x} ${config.waypoints[2].y}
//     H${config.waypoints[3].x}
//     C ${config.waypoints[3].x - 50} ${config.waypoints[3].y}, 
//       ${config.waypoints[3].x - 50} ${config.waypoints[4].y}, 
//       ${config.waypoints[4].x} ${config.waypoints[4].y}
//     H${config.waypoints[5].x}
//   `;

//   // Smooth animation with easing
//   const lerp = (start, end, factor) => start + (end - start) * factor;

//   // Smooth animation loop
//   const animate = useCallback(() => {
//     if (!isAnimatingRef.current) return;

//     const targetProgress = timelineProgressRef.current;
//     const currentProgress = smoothProgressRef.current;
    
//     // Use exponential easing for smooth animation
//     const newProgress = lerp(currentProgress, targetProgress, config.smoothingFactor);
    
//     // Update only if there's a significant difference
//     if (Math.abs(newProgress - currentProgress) > 0.001) {
//       smoothProgressRef.current = newProgress;
//       updateVisuals(newProgress);
//       updateAnimations(newProgress);
//     }
    
//     // Apply velocity decay
//     scrollVelocityRef.current *= config.velocityDecay;
    
//     animationFrameRef.current = requestAnimationFrame(animate);
//   }, []);

//   // Start/stop animation
//   const startAnimation = useCallback(() => {
//     if (!isAnimatingRef.current) {
//       isAnimatingRef.current = true;
//       animate();
//     }
//   }, [animate]);

//   const stopAnimation = useCallback(() => {
//     isAnimatingRef.current = false;
//     if (animationFrameRef.current) {
//       cancelAnimationFrame(animationFrameRef.current);
//     }
//   }, []);

//   // Lock/unlock scroll functions
//   const lockScroll = useCallback(() => {
//     const scrollY = window.scrollY;
//     // document.body.style.overflow = 'hidden';
//     document.body.style.position = 'fixed';
//     document.body.style.width = '100%';
//     document.body.style.top = `-${scrollY}px`;
//     document.body.dataset.scrollY = scrollY.toString();
//   }, []);

//   const unlockScroll = useCallback(() => {
//     const scrollY = parseInt(document.body.dataset.scrollY || '0');
//     document.body.style.overflow = '';
//     document.body.style.position = '';
//     document.body.style.width = '';
//     document.body.style.top = '';
//     delete document.body.dataset.scrollY;
//     window.scrollTo(0, scrollY);
//   }, []);

//   // Animation functions
//   const updateAnimations = useCallback((progress) => {
//     if (progressPathRef.current) {
//       const pathLength = progressPathRef.current.getTotalLength();
//       progressPathRef.current.style.strokeDashoffset = pathLength * (1 - progress);
//     }
//   }, []);

//   const updateVisuals = useCallback((progress) => {
//     const totalSegments = config.waypoints.length - 1;
//     const segmentProgress = progress * totalSegments;
//     const segmentIndex = Math.min(Math.floor(segmentProgress), totalSegments - 1);
//     const segmentOffset = segmentProgress - segmentIndex;

//     // Update logo position with smooth interpolation
//     if (segmentIndex < totalSegments && logoRef.current) {
//       const start = config.waypoints[segmentIndex];
//       const end = config.waypoints[segmentIndex + 1];
      
//       // Smooth interpolation between waypoints
//       const x = start.x + (end.x - start.x) * segmentOffset;
//       const y = start.y + (end.y - start.y) * segmentOffset;

//       logoRef.current.style.transform = `translate(${x - config.sizes.logo/2}px, ${y - config.sizes.logo/2}px)`;
//     }

//     // Update text content with smooth transitions
//     const currentWaypointIndex = Math.min(Math.floor(progress * config.waypoints.length), config.waypoints.length - 1);
//     const currentWaypoint = config.waypoints[currentWaypointIndex];
    
//     if (yearRef.current && eventRef.current) {
//       // Only update if the content actually changed to avoid unnecessary DOM updates
//       if (yearRef.current.textContent !== currentWaypoint.year) {
//         yearRef.current.textContent = currentWaypoint.year;
//       }
//       if (eventRef.current.textContent !== currentWaypoint.event) {
//         eventRef.current.textContent = currentWaypoint.event;
//       }
//     }

//     // Update markers with smooth transitions
//     config.waypoints.forEach((pt, idx) => {
//       const markerThreshold = idx / totalSegments;
//       const active = progress >= markerThreshold;
//       const marker = markersRef.current[idx];
      
//       if (marker) {
//         const currentActive = marker.getAttribute('data-active') === 'true';
        
//         // Only update if state changed
//         if (currentActive !== active) {
//           marker.setAttribute('data-active', active.toString());
//           marker.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
//           marker.setAttribute('r', active ? config.sizes.markerActive : config.sizes.markerInactive);
//           marker.setAttribute('fill', active ? config.colors.activeMarker : config.colors.inactive);
//           marker.setAttribute('stroke', active ? config.colors.primary : "none");
//           marker.setAttribute('stroke-width', active ? 3 : 0);
//         }
//       }
//     });
//   }, []);

//   // Reset timeline to beginning
//   const resetTimeline = useCallback(() => {
//     timelineProgressRef.current = 0;
//     smoothProgressRef.current = 0;
//     scrollVelocityRef.current = 0;
//     setIsTimelineComplete(false);
//     setShowCompletionSection(false);
//     setCanExitTimeline(false);
//     updateVisuals(0);
//     updateAnimations(0);
//   }, [updateVisuals, updateAnimations]);

//   // Exit timeline and go to next section
//   const exitTimelineForward = useCallback(() => {
//     stopAnimation();
//     unlockScroll();
//     setIsTimelineActive(false);
    
//     // Smoothly scroll to next section
//     const nextSection = containerRef.current?.nextElementSibling;
//     if (nextSection) {
//       nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   }, [stopAnimation, unlockScroll]);

//   // Exit timeline and go to previous section
//   const exitTimelineBackward = useCallback(() => {
//     stopAnimation();
//     unlockScroll();
//     setIsTimelineActive(false);
//     resetTimeline();
    
//     // Smoothly scroll to previous section
//     const prevSection = containerRef.current?.previousElementSibling;
//     if (prevSection) {
//       prevSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   }, [stopAnimation, unlockScroll, resetTimeline]);

//   useEffect(() => {
//     // Initialize timeline
//     if (progressPathRef.current) {
//       const pathLength = progressPathRef.current.getTotalLength();
//       progressPathRef.current.style.strokeDasharray = pathLength;
//       progressPathRef.current.style.strokeDashoffset = pathLength;
//     }

//     // Set initial positions
//     if (logoRef.current) {
//       logoRef.current.style.transform = `translate(${config.waypoints[0].x - config.sizes.logo/2}px, ${config.waypoints[0].y - config.sizes.logo/2}px)`;
//     }

//     if (yearRef.current) yearRef.current.textContent = config.waypoints[0].year;
//     if (eventRef.current) eventRef.current.textContent = config.waypoints[0].event;

//     // Initialize markers
//     markersRef.current.forEach(marker => {
//       if (marker) {
//         marker.setAttribute('data-active', 'false');
//       }
//     });

//     // Intersection observer for timeline activation
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsTimelineActive(true);
//             lockScroll();
//             startAnimation();
//           } else if (!entry.isIntersecting && isTimelineActive) {
//             // Only deactivate if we're not in completion mode
//             if (!showCompletionSection) {
//               setIsTimelineActive(false);
//               stopAnimation();
//               unlockScroll();
//             }
//           }
//         });
//       },
//       { threshold: 0.7 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     // Improved wheel event handler with better scroll control
//     const handleWheel = (e) => {
//       if (!isTimelineActive) return;
      
//       e.preventDefault();
//       e.stopPropagation();
      
//       const currentTime = Date.now();
//       const deltaTime = currentTime - lastScrollTimeRef.current;
//       lastScrollTimeRef.current = currentTime;
      
//       // Normalize scroll delta and apply sensitivity
//       const normalizedDelta = Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), 100);
//       let scrollSpeed = normalizedDelta * config.scrollSensitivity;
      
//       // Apply time-based smoothing for consistent speed across different frame rates
//       if (deltaTime > 0) {
//         scrollSpeed = Math.min(Math.abs(scrollSpeed), config.maxScrollSpeed) * Math.sign(scrollSpeed);
//       }
      
//       // Update velocity for momentum-based scrolling
//       scrollVelocityRef.current = scrollSpeed;
      
//       if (!showCompletionSection) {
//         // Timeline navigation
//         if (scrollSpeed > 0) {
//           // Scrolling down
//           timelineProgressRef.current = Math.min(1, timelineProgressRef.current + Math.abs(scrollSpeed));
//         } else {
//           // Scrolling up
//           if (timelineProgressRef.current <= 0.05) {
//             // Exit to previous section
//             exitTimelineBackward();
//             return;
//           }
//           timelineProgressRef.current = Math.max(0, timelineProgressRef.current - Math.abs(scrollSpeed));
//         }
        
//         // Check for completion
//         if (timelineProgressRef.current >= 0.95 && !isTimelineComplete) {
//           setIsTimelineComplete(true);
//           setTimeout(() => {
//             setShowCompletionSection(true);
//             setTimeout(() => {
//               setCanExitTimeline(true);
//             }, 500);
//           }, 800);
//         }
        
//         // Reset completion if scrolling back significantly
//         if (timelineProgressRef.current < 0.85 && isTimelineComplete) {
//           setIsTimelineComplete(false);
//           setShowCompletionSection(false);
//           setCanExitTimeline(false);
//         }
//       } else {
//         // Completion section is visible
//         if (scrollSpeed < 0) {
//           // Scrolling up - go back to timeline
//           setShowCompletionSection(false);
//           setIsTimelineComplete(false);
//           setCanExitTimeline(false);
//           timelineProgressRef.current = 0.8;
//         } else if (canExitTimeline) {
//           // Scrolling down - exit to next section
//           exitTimelineForward();
//         }
//       }
//     };

//     // Add event listeners
//     document.addEventListener('wheel', handleWheel, { passive: false });

//     return () => {
//       observer.disconnect();
//       document.removeEventListener('wheel', handleWheel);
//       stopAnimation();
//       unlockScroll();
//     };
//   }, [isTimelineActive, showCompletionSection, canExitTimeline, isTimelineComplete, lockScroll, unlockScroll, startAnimation, stopAnimation, exitTimelineForward, exitTimelineBackward]);

//   return (
//     <>
//       {/* Content before timeline */}
//       <div style={{ 
//         height: "100vh", 
//         display: "flex", 
//         alignItems: "center", 
//         justifyContent: "center", 
//         background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
//       }}>
//         <h1 style={{ color: "white", fontSize: "3rem", textAlign: "center" }}>
//           Scroll down to see our journey
//         </h1>
//       </div>

//       <div 
//         ref={containerRef}
//         style={{
//           minHeight: "100vh",
//           width: "100%",
//           position: "relative",
//           overflow: "hidden"
//         }}
//       >
//         <div
//           ref={contentRef}
//           style={{
//             position: "relative",
            
//             width: "100%",
//             height: "100vh",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             padding: "2rem",
//             boxSizing: "border-box"
//           }}
//         >
//           <div
//             ref={timelineRef}
//             style={{
//               width: "100%",
//               maxWidth: "1200px",
//               minHeight: "100vh",
//               height: 'auto',
//               background: "white",
//               borderRadius: "24px",
//               boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
//               // overflow: "hidden",
//               transform: showCompletionSection ? "translateY(-100%)" : "translateY(0)",
//               transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
//               opacity: showCompletionSection ? 0 : 1
//             }}
//           >
//             <div style={{
//               padding: "3rem 3rem 2rem",
//               borderBottom: `1px solid ${config.colors.inactive}`
//             }}>
//               <h2 style={{
//                 fontSize: "2rem",
//                 fontWeight: "700",
//                 color: config.colors.primary,
//                 margin: "0",
//                 letterSpacing: "-0.5px"
//               }}>Our Journey Timeline</h2>
//               <p style={{
//                 margin: "1rem 0 0",
//                 color: config.colors.text,
//                 opacity: 0.7
//               }}>
//                 {showCompletionSection ? "Timeline completed! Scroll down to continue." : 
//                  isTimelineComplete ? "Timeline Complete! Revealing summary..." : 
//                  "Scroll slowly to navigate through our timeline"}
//               </p>
//             </div>

//             <div style={{
//               display: "flex",
//               flex: "1",
//               height: "calc(100% - 140px)"
//             }}>
//               <div style={{
//                 flex: "0 0 380px",
//                 padding: "3rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 borderRight: `1px solid ${config.colors.inactive}`
//               }}>
//                 <div ref={yearRef} style={{
//                   fontSize: "3.5rem",
//                   fontWeight: "800",
//                   color: config.colors.primary,
//                   marginBottom: "1.5rem",
//                   lineHeight: "1",
//                   transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
//                 }}>
//                   {config.waypoints[0].year}
//                 </div>
//                 <div ref={eventRef} style={{
//                   fontSize: "1.5rem",
//                   color: config.colors.text,
//                   lineHeight: "1.5",
//                   fontWeight: "500",
//                   transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
//                 }}>
//                   {config.waypoints[0].event}
//                 </div>
//               </div>

//               <div style={{
//                 flex: "1",
//                 position: "relative",
//                 padding: "3rem"
//               }}>
//                 <svg 
//                   viewBox="0 0 400 300" 
//                   style={{
//                     width: "100%",
//                     height: "100%"
//                   }}
//                 >
//                   <path
//                     d={pathData}
//                     fill="none"
//                     stroke={config.colors.inactive}
//                     strokeWidth={config.sizes.pathWidth}
//                     strokeLinecap="round"
//                   />

//                   <path
//                     ref={progressPathRef}
//                     d={pathData}
//                     fill="none"
//                     stroke={config.colors.primary}
//                     strokeWidth={config.sizes.pathWidth}
//                     strokeLinecap="round"
//                     style={{
//                       transition: "stroke-dashoffset 0.1s ease-out"
//                     }}
//                   />

//                   {config.waypoints.map((pt, idx) => (
//                     <circle
//                       key={`marker-${idx}`}
//                       ref={el => markersRef.current[idx] = el}
//                       cx={pt.x}
//                       cy={pt.y}
//                       r={config.sizes.markerInactive}
//                       fill={config.colors.inactive}
//                       stroke="none"
//                       strokeWidth="0"
//                       data-active="false"
//                     />
//                   ))}
//                 </svg>

//                 <div
//                   ref={logoRef}
//                   style={{
//                     position: "absolute",
//                     width: `${config.sizes.logo}px`,
//                     height: `${config.sizes.logo}px`,
//                     zIndex: "10",
//                     pointerEvents: "none",
//                     filter: "drop-shadow(0 8px 16px rgba(91, 70, 229, 0.3))",
//                     willChange: "transform"
//                   }}
//                 >
//                   <div style={{
//                     width: "100%",
//                     height: "100%",
//                     borderRadius: "50%",
//                     background: config.colors.primary,
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     border: "3px solid white",
//                     transform: "scale(1)",
//                     transition: "transform 0.2s ease"
//                   }}>
//                     <div style={{
//                       width: "50%",
//                       height: "50%",
//                       borderRadius: "50%",
//                       background: "white"
//                     }} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Completion Section */}
//           {showCompletionSection && (
//             <div style={{
//               position: "absolute",
//               top: "0",
//               left: "0",
//               right: "0",
//               height: "100vh",
//               background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               color: "white",
//               padding: "2rem",
//               boxSizing: "border-box",
//               animation: "slideUpSmooth 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards"
//             }}>
//               <div style={{
//                 textAlign: "center",
//                 maxWidth: "800px",
//                 animation: "fadeInUp 1s ease-out 0.3s both"
//               }}>
//                 <h2 style={{
//                   fontSize: "3rem",
//                   fontWeight: "800",
//                   marginBottom: "2rem",
//                   lineHeight: "1.2"
//                 }}>
//                   Journey Complete!
//                 </h2>
//                 <p style={{
//                   fontSize: "1.25rem",
//                   lineHeight: "1.8",
//                   marginBottom: "3rem",
//                   opacity: 0.9
//                 }}>
//                   From our humble beginnings in 2019 to our successful IPO in 2024, 
//                   we've built something extraordinary together. This timeline represents 
//                   not just milestones, but the passion and dedication of our entire team.
//                 </p>
//                 <div style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//                   gap: "2rem",
//                   marginTop: "3rem"
//                 }}>
//                   {[
//                     { number: "6", label: "Major Milestones" },
//                     { number: "5", label: "Years of Growth" },
//                     { number: "∞", label: "Future Possibilities" }
//                   ].map((stat, idx) => (
//                     <div key={idx} style={{
//                       background: "rgba(255,255,255,0.1)",
//                       padding: "1.5rem",
//                       borderRadius: "12px",
//                       backdropFilter: "blur(10px)",
//                       border: "1px solid rgba(255,255,255,0.1)",
//                       animation: `fadeInUp 0.6s ease-out ${0.5 + idx * 0.1}s both`
//                     }}>
//                       <h3 style={{ fontSize: "2rem", marginBottom: "0.5rem", fontWeight: "700" }}>
//                         {stat.number}
//                       </h3>
//                       <p style={{ margin: 0, opacity: 0.8 }}>{stat.label}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <p style={{
//                   fontSize: "1rem",
//                   opacity: 0.7,
//                   marginTop: "3rem",
//                   animation: "fadeInUp 0.6s ease-out 0.8s both"
//                 }}>
//                   {canExitTimeline ? "Scroll down to continue" : "Loading next section..."}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Enhanced CSS animations */}
//       <style jsx>{`
//         @keyframes slideUpSmooth {
//           from {
//             transform: translateY(100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
        
//         @keyframes fadeInUp {
//           from {
//             transform: translateY(30px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
        
//         /* Smooth scrollbar hide */
//         ::-webkit-scrollbar {
//           display: none;
//         }
        
//         * {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>

//       {/* Content after timeline */}
//       <div style={{ 
//         height: "100vh", 
//         display: "flex", 
//         alignItems: "center", 
//         justifyContent: "center", 
//         background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" 
//       }}>
//         <h1 style={{ color: "#333", fontSize: "3rem", textAlign: "center" }}>
//           Thank you for following our journey!
//         </h1>
//       </div>
//     </>
//   );
// };

// export default UltraSmoothTimeline;



// import React, { useRef, useEffect, useState, useCallback } from 'react';

// const UltraSmoothTimeline = () => {
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);
//   const timelineRef = useRef(null);
//   const logoRef = useRef(null);
//   const progressPathRef = useRef(null);
//   const yearRef = useRef(null);
//   const eventRef = useRef(null);
//   const markersRef = useRef([]);
//   const timelineProgressRef = useRef(0);
//   const smoothProgressRef = useRef(0);
//   const animationFrameRef = useRef(null);
//   const isAnimatingRef = useRef(false);
//   const lastScrollTimeRef = useRef(0);
//   const scrollVelocityRef = useRef(0);
  
//   const [isTimelineActive, setIsTimelineActive] = useState(false);
//   const [isTimelineComplete, setIsTimelineComplete] = useState(false);
//   const [showCompletionSection, setShowCompletionSection] = useState(false);
//   const [canExitTimeline, setCanExitTimeline] = useState(false);

//   // Timeline configuration
//   const config = {
//     waypoints: [
//       { x: 80, y: 80, year: "2019", event: "Company Founded" },
//       { x: 320, y: 80, year: "2020", event: "First Product Launch" },
//       { x: 320, y: 180, year: "2021", event: "Series A Funding" },
//       { x: 80, y: 180, year: "2022", event: "Global Expansion" },
//       { x: 80, y: 280, year: "2023", event: "Product V2 Released" },
//       { x: 320, y: 280, year: "2024", event: "IPO" }
//     ],
//     colors: {
//       primary: "#5b46e5",
//       secondary: "#8b74f3",
//       background: "#f9fafb",
//       text: "#1f2937",
//       inactive: "#e5e7eb",
//       activeMarker: "#ffffff"
//     },
//     sizes: {
//       pathWidth: 10,
//       markerActive: 16,
//       markerInactive: 8,
//       logo: 40
//     },
//     scrollSensitivity: 0.003,
//     maxScrollSpeed: 0.008,
//     smoothingFactor: 0.15,
//     velocityDecay: 0.92
//   };

//   const pathData = `
//     M${config.waypoints[0].x} ${config.waypoints[0].y}
//     H${config.waypoints[1].x}
//     C ${config.waypoints[1].x + 50} ${config.waypoints[1].y}, 
//       ${config.waypoints[1].x + 50} ${config.waypoints[2].y}, 
//       ${config.waypoints[2].x} ${config.waypoints[2].y}
//     H${config.waypoints[3].x}
//     C ${config.waypoints[3].x - 50} ${config.waypoints[3].y}, 
//       ${config.waypoints[3].x - 50} ${config.waypoints[4].y}, 
//       ${config.waypoints[4].x} ${config.waypoints[4].y}
//     H${config.waypoints[5].x}
//   `;

//   const lerp = (start, end, factor) => start + (end - start) * factor;

//   const animate = useCallback(() => {
//     if (!isAnimatingRef.current) return;

//     const targetProgress = timelineProgressRef.current;
//     const currentProgress = smoothProgressRef.current;
    
//     const newProgress = lerp(currentProgress, targetProgress, config.smoothingFactor);
    
//     if (Math.abs(newProgress - currentProgress) > 0.001) {
//       smoothProgressRef.current = newProgress;
//       updateVisuals(newProgress);
//       updateAnimations(newProgress);
//     }
    
//     scrollVelocityRef.current *= config.velocityDecay;
    
//     animationFrameRef.current = requestAnimationFrame(animate);
//   }, []);

//   const startAnimation = useCallback(() => {
//     if (!isAnimatingRef.current) {
//       isAnimatingRef.current = true;
//       animate();
//     }
//   }, [animate]);

//   const stopAnimation = useCallback(() => {
//     isAnimatingRef.current = false;
//     if (animationFrameRef.current) {
//       cancelAnimationFrame(animationFrameRef.current);
//     }
//   }, []);

//   const lockScroll = useCallback(() => {
//     const scrollY = window.scrollY;
//     // document.body.style.overflow = 'hidden';
//     document.body.style.position = 'fixed';
//     document.body.style.width = '100%';
//     document.body.style.top = `-${scrollY}px`;
//     document.body.dataset.scrollY = scrollY.toString();
//   }, []);

//   const unlockScroll = useCallback(() => {
//     const scrollY = parseInt(document.body.dataset.scrollY || '0');
//     document.body.style.overflow = '';
//     document.body.style.position = '';
//     document.body.style.width = '';
//     document.body.style.top = '';
//     delete document.body.dataset.scrollY;
//     window.scrollTo(0, scrollY);
//   }, []);

//   const updateAnimations = useCallback((progress) => {
//     if (progressPathRef.current) {
//       const pathLength = progressPathRef.current.getTotalLength();
//       progressPathRef.current.style.strokeDashoffset = pathLength * (1 - progress);
//     }
//   }, []);

//   const updateVisuals = useCallback((progress) => {
//     const totalSegments = config.waypoints.length - 1;
//     const segmentProgress = progress * totalSegments;
//     const segmentIndex = Math.min(Math.floor(segmentProgress), totalSegments - 1);
//     const segmentOffset = segmentProgress - segmentIndex;

//     if (segmentIndex < totalSegments && logoRef.current) {
//       const start = config.waypoints[segmentIndex];
//       const end = config.waypoints[segmentIndex + 1];
      
//       const x = start.x + (end.x - start.x) * segmentOffset;
//       const y = start.y + (end.y - start.y) * segmentOffset;

//       logoRef.current.style.transform = `translate(${x - config.sizes.logo/2}px, ${y - config.sizes.logo/2}px)`;
//     }

//     const currentWaypointIndex = Math.min(Math.floor(progress * config.waypoints.length), config.waypoints.length - 1);
//     const currentWaypoint = config.waypoints[currentWaypointIndex];
    
//     if (yearRef.current && eventRef.current) {
//       if (yearRef.current.textContent !== currentWaypoint.year) {
//         yearRef.current.textContent = currentWaypoint.year;
//       }
//       if (eventRef.current.textContent !== currentWaypoint.event) {
//         eventRef.current.textContent = currentWaypoint.event;
//       }
//     }

//     config.waypoints.forEach((pt, idx) => {
//       const markerThreshold = idx / totalSegments;
//       const active = progress >= markerThreshold;
//       const marker = markersRef.current[idx];
      
//       if (marker) {
//         const currentActive = marker.getAttribute('data-active') === 'true';
        
//         if (currentActive !== active) {
//           marker.setAttribute('data-active', active.toString());
//           marker.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
//           marker.setAttribute('r', active ? config.sizes.markerActive : config.sizes.markerInactive);
//           marker.setAttribute('fill', active ? config.colors.activeMarker : config.colors.inactive);
//           marker.setAttribute('stroke', active ? config.colors.primary : "none");
//           marker.setAttribute('stroke-width', active ? 3 : 0);
//         }
//       }
//     });
//   }, []);

//   const resetTimeline = useCallback(() => {
//     timelineProgressRef.current = 0;
//     smoothProgressRef.current = 0;
//     scrollVelocityRef.current = 0;
//     setIsTimelineComplete(false);
//     setShowCompletionSection(false);
//     setCanExitTimeline(false);
//     updateVisuals(0);
//     updateAnimations(0);
//   }, [updateVisuals, updateAnimations]);

//   const exitTimelineForward = useCallback(() => {
//     stopAnimation();
//     unlockScroll();
//     setIsTimelineActive(false);
    
//     const nextSection = containerRef.current?.nextElementSibling;
//     if (nextSection) {
//       nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   }, [stopAnimation, unlockScroll]);

//   const exitTimelineBackward = useCallback(() => {
//     stopAnimation();
//     unlockScroll();
//     setIsTimelineActive(false);
//     resetTimeline();
    
//     const prevSection = containerRef.current?.previousElementSibling;
//     if (prevSection) {
//       prevSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   }, [stopAnimation, unlockScroll, resetTimeline]);

//   useEffect(() => {
//     if (progressPathRef.current) {
//       const pathLength = progressPathRef.current.getTotalLength();
//       progressPathRef.current.style.strokeDasharray = pathLength;
//       progressPathRef.current.style.strokeDashoffset = pathLength;
//     }

//     if (logoRef.current) {
//       logoRef.current.style.transform = `translate(${config.waypoints[0].x - config.sizes.logo/2}px, ${config.waypoints[0].y - config.sizes.logo/2}px)`;
//     }

//     if (yearRef.current) yearRef.current.textContent = config.waypoints[0].year;
//     if (eventRef.current) eventRef.current.textContent = config.waypoints[0].event;

//     markersRef.current.forEach(marker => {
//       if (marker) {
//         marker.setAttribute('data-active', 'false');
//       }
//     });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsTimelineActive(true);
//             lockScroll();
//             startAnimation();
//           } else if (!entry.isIntersecting && isTimelineActive) {
//             if (!showCompletionSection) {
//               setIsTimelineActive(false);
//               stopAnimation();
//               unlockScroll();
//             }
//           }
//         });
//       },
//       { threshold: 0.7 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     const handleWheel = (e) => {
//       if (!isTimelineActive) return;
      
//       e.preventDefault();
//       e.stopPropagation();
      
//       const currentTime = Date.now();
//       const deltaTime = currentTime - lastScrollTimeRef.current;
//       lastScrollTimeRef.current = currentTime;
      
//       const normalizedDelta = Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), 100);
//       let scrollSpeed = normalizedDelta * config.scrollSensitivity;
      
//       if (deltaTime > 0) {
//         scrollSpeed = Math.min(Math.abs(scrollSpeed), config.maxScrollSpeed) * Math.sign(scrollSpeed);
//       }
      
//       scrollVelocityRef.current = scrollSpeed;
      
//       if (!showCompletionSection) {
//         if (scrollSpeed > 0) {
//           timelineProgressRef.current = Math.min(1, timelineProgressRef.current + Math.abs(scrollSpeed));
//         } else {
//           if (timelineProgressRef.current <= 0.05) {
//             exitTimelineBackward();
//             return;
//           }
//           timelineProgressRef.current = Math.max(0, timelineProgressRef.current - Math.abs(scrollSpeed));
//         }
        
//         if (timelineProgressRef.current >= 0.95 && !isTimelineComplete) {
//           setIsTimelineComplete(true);
//           setTimeout(() => {
//             setShowCompletionSection(true);
//             setTimeout(() => {
//               setCanExitTimeline(true);
//             }, 500);
//           }, 800);
//         }
        
//         if (timelineProgressRef.current < 0.85 && isTimelineComplete) {
//           setIsTimelineComplete(false);
//           setShowCompletionSection(false);
//           setCanExitTimeline(false);
//         }
//       } else {
//         if (scrollSpeed < 0) {
//           setShowCompletionSection(false);
//           setIsTimelineComplete(false);
//           setCanExitTimeline(false);
//           timelineProgressRef.current = 0.8;
//         } else if (canExitTimeline) {
//           exitTimelineForward();
//         }
//       }
//     };

//     document.addEventListener('wheel', handleWheel, { passive: false });

//     return () => {
//       observer.disconnect();
//       document.removeEventListener('wheel', handleWheel);
//       stopAnimation();
//       unlockScroll();
//     };
//   }, [isTimelineActive, showCompletionSection, canExitTimeline, isTimelineComplete, lockScroll, unlockScroll, startAnimation, stopAnimation, exitTimelineForward, exitTimelineBackward]);

//   return (
//     <>
//       {/* Content before timeline */}
//       <div style={{ 
//         height: "100vh", 
//         display: "flex", 
//         alignItems: "center", 
//         justifyContent: "center", 
//         background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
//       }}>
//         <h1 style={{ color: "white", fontSize: "3rem", textAlign: "center" }}>
//           Scroll down to see our journey
//         </h1>
//       </div>

//       <div 
//         ref={containerRef}
//         style={{
//           height: "100vh",
//           width: "100%",
//           position: "relative",
//           // overflow: "hidden"
//         }}
//       >
//         <div
//           ref={contentRef}
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             padding: "2rem",
//             boxSizing: "border-box"
//           }}
//         >
//           <div
//             ref={timelineRef}
//             style={{
//               width: "100%",
//               maxWidth: "1200px",
//               height: "100%",
//               background: "white",
//               borderRadius: "24px",
//               boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
//               // overflow: "hidden",
//               transform: showCompletionSection ? "translateY(-100%)" : "translateY(0)",
//               transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
//               opacity: showCompletionSection ? 0 : 1
//             }}
//           >
//             <div style={{
//               padding: "3rem 3rem 2rem",
//               borderBottom: `1px solid ${config.colors.inactive}`
//             }}>
//               <h2 style={{
//                 fontSize: "2rem",
//                 fontWeight: "700",
//                 color: config.colors.primary,
//                 margin: "0",
//                 letterSpacing: "-0.5px"
//               }}>Our Journey Timeline</h2>
//               <p style={{
//                 margin: "1rem 0 0",
//                 color: config.colors.text,
//                 opacity: 0.7
//               }}>
//                 {showCompletionSection ? "Timeline completed! Scroll down to continue." : 
//                  isTimelineComplete ? "Timeline Complete! Revealing summary..." : 
//                  "Scroll slowly to navigate through our timeline"}
//               </p>
//             </div>

//             <div style={{
//               display: "flex",
//               flex: "1",
//               height: "calc(100% - 140px)"
//             }}>
//               <div style={{
//                 flex: "0 0 380px",
//                 padding: "3rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 borderRight: `1px solid ${config.colors.inactive}`
//               }}>
//                 <div ref={yearRef} style={{
//                   fontSize: "3.5rem",
//                   fontWeight: "800",
//                   color: config.colors.primary,
//                   marginBottom: "1.5rem",
//                   lineHeight: "1",
//                   transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
//                 }}>
//                   {config.waypoints[0].year}
//                 </div>
//                 <div ref={eventRef} style={{
//                   fontSize: "1.5rem",
//                   color: config.colors.text,
//                   lineHeight: "1.5",
//                   fontWeight: "500",
//                   transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
//                 }}>
//                   {config.waypoints[0].event}
//                 </div>
//               </div>

//               <div style={{
//                 flex: "1",
//                 position: "relative",
//                 padding: "3rem"
//               }}>
//                 <svg 
//                   viewBox="0 0 400 300" 
//                   style={{
//                     width: "100%",
//                     height: "100%"
//                   }}
//                 >
//                   <path
//                     d={pathData}
//                     fill="none"
//                     stroke={config.colors.inactive}
//                     strokeWidth={config.sizes.pathWidth}
//                     strokeLinecap="round"
//                   />

//                   <path
//                     ref={progressPathRef}
//                     d={pathData}
//                     fill="none"
//                     stroke={config.colors.primary}
//                     strokeWidth={config.sizes.pathWidth}
//                     strokeLinecap="round"
//                     style={{
//                       transition: "stroke-dashoffset 0.1s ease-out"
//                     }}
//                   />

//                   {config.waypoints.map((pt, idx) => (
//                     <circle
//                       key={`marker-${idx}`}
//                       ref={el => markersRef.current[idx] = el}
//                       cx={pt.x}
//                       cy={pt.y}
//                       r={config.sizes.markerInactive}
//                       fill={config.colors.inactive}
//                       stroke="none"
//                       strokeWidth="0"
//                       data-active="false"
//                     />
//                   ))}
//                 </svg>

//                 <div
//                   ref={logoRef}
//                   style={{
//                     position: "absolute",
//                     width: `${config.sizes.logo}px`,
//                     height: `${config.sizes.logo}px`,
//                     zIndex: "10",
//                     pointerEvents: "none",
//                     filter: "drop-shadow(0 8px 16px rgba(91, 70, 229, 0.3))",
//                     willChange: "transform"
//                   }}
//                 >
//                   <div style={{
//                     width: "100%",
//                     height: "100%",
//                     borderRadius: "50%",
//                     background: config.colors.primary,
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     border: "3px solid white",
//                     transform: "scale(1)",
//                     transition: "transform 0.2s ease"
//                   }}>
//                     <div style={{
//                       width: "50%",
//                       height: "50%",
//                       borderRadius: "50%",
//                       background: "white"
//                     }} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Completion Section */}
//           {showCompletionSection && (
//             <div style={{
//               position: "absolute",
//               top: "0",
//               left: "0",
//               right: "0",
//               height: "100%",
//               background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               color: "white",
//               padding: "2rem",
//               boxSizing: "border-box",
//               animation: "slideUpSmooth 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards"
//             }}>
//               <div style={{
//                 textAlign: "center",
//                 maxWidth: "800px",
//                 animation: "fadeInUp 1s ease-out 0.3s both"
//               }}>
//                 <h2 style={{
//                   fontSize: "3rem",
//                   fontWeight: "800",
//                   marginBottom: "2rem",
//                   lineHeight: "1.2"
//                 }}>
//                   Journey Complete!
//                 </h2>
//                 <p style={{
//                   fontSize: "1.25rem",
//                   lineHeight: "1.8",
//                   marginBottom: "3rem",
//                   opacity: 0.9
//                 }}>
//                   From our humble beginnings in 2019 to our successful IPO in 2024, 
//                   we've built something extraordinary together. This timeline represents 
//                   not just milestones, but the passion and dedication of our entire team.
//                 </p>
//                 <div style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//                   gap: "2rem",
//                   marginTop: "3rem"
//                 }}>
//                   {[
//                     { number: "6", label: "Major Milestones" },
//                     { number: "5", label: "Years of Growth" },
//                     { number: "∞", label: "Future Possibilities" }
//                   ].map((stat, idx) => (
//                     <div key={idx} style={{
//                       background: "rgba(255,255,255,0.1)",
//                       padding: "1.5rem",
//                       borderRadius: "12px",
//                       backdropFilter: "blur(10px)",
//                       border: "1px solid rgba(255,255,255,0.1)",
//                       animation: `fadeInUp 0.6s ease-out ${0.5 + idx * 0.1}s both`
//                     }}>
//                       <h3 style={{ fontSize: "2rem", marginBottom: "0.5rem", fontWeight: "700" }}>
//                         {stat.number}
//                       </h3>
//                       <p style={{ margin: 0, opacity: 0.8 }}>{stat.label}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <p style={{
//                   fontSize: "1rem",
//                   opacity: 0.7,
//                   marginTop: "3rem",
//                   animation: "fadeInUp 0.6s ease-out 0.8s both"
//                 }}>
//                   {canExitTimeline ? "Scroll down to continue" : "Loading next section..."}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Enhanced CSS animations */}
//       <style jsx>{`
//         @keyframes slideUpSmooth {
//           from {
//             transform: translateY(100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
        
//         @keyframes fadeInUp {
//           from {
//             transform: translateY(30px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
        
//         ::-webkit-scrollbar {
//           display: none;
//         }
        
//         * {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>

//       {/* Content after timeline */}
//       <div style={{ 
//         height: "100vh", 
//         display: "flex", 
//         alignItems: "center", 
//         justifyContent: "center", 
//         background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" 
//       }}>
//         <h1 style={{ color: "#333", fontSize: "3rem", textAlign: "center" }}>
//           Thank you for following our journey!
//         </h1>
//       </div>
//     </>
//   );
// };

// export default UltraSmoothTimeline;

{/* for this code the scroll to to watch the journey i will change with another section like if the user scrolls one time it has to go to timeline section and after going to there if he scrolls how hard one time it has to fill only one bubble and after that another and all after completion it has to go to another section and if he comes back it has to comeback make it professional and advanced engineer timeline journey*/}