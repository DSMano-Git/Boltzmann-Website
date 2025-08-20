
import React, { useState, useEffect, useRef } from "react";

const Chemicals = () => {
  const [animatedStats, setAnimatedStats] = useState([
    { value: 0, target: 75, suffix: '%' },
    { value: 0, target: 80, suffix: '%' },
    { value: 0, target: 90, suffix: '%' }
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const showcaseRef = useRef(null);

  const logos = [
    "/alogo-1.png",
    "/alogo-2.png", 
    "/alogo-3.png",
    "/alogo-4.png",
    "/alogo-5.jpeg",
    "/alogo-6.jpeg",
  ];

  const statsData = [
    {
      color: "#00BCD4",
      description: "faster drug discovery."
    },
    {
      color: "#E91E63", 
      description: "of repetitive screening tasks automated."
    },
    {
      color: "#FF5722",
      description: "parameters optimized in a single iteration."
    }
  ];

  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    if (showcaseRef.current) {
      observer.observe(showcaseRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
      if (showcaseRef.current) observer.unobserve(showcaseRef.current);
    };
  }, []);

  // Animate statistics when component becomes visible
  useEffect(() => {
    if (!isVisible) return;

    const animateNumbers = () => {
      const duration = 1500;
      const steps = 50;
      const interval = duration / steps;
      
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setAnimatedStats(prev => prev.map((stat, index) => ({
          ...stat,
          value: Math.round(stat.target * easeOut)
        })));
        
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
      
      return () => clearInterval(timer);
    };

    animateNumbers();
  }, [isVisible]);

  return (
    <div 
      ref={showcaseRef}
      style={{ 
        maxWidth: "1100px", // Increased from 1000px
        margin: "50px auto", // Increased from 40px
        padding: "0 16px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        transitionDelay: '0.3s'
      }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "22px", // Increased from 20px
          padding: "2px",
          background: "linear-gradient(135deg, #4F1985, #6A1B9A, #4F1985)",
        }}
      >
        {/* Inner Container */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px", // Increased from 18px
            overflow: "hidden",
          }}
        >
          {/* Logo Carousel */}
          <div
            style={{
              borderBottom: "1px solid #e0e0e0",
              backgroundColor: "#ffffff",
              overflow: "hidden",
              position: "relative",
              margin: "18px 0", // Increased from 16px
              padding: "7px 0", // Increased from 6px
            }}
          >
            <div
              style={{
                display: "inline-flex",
                animation: "scroll 20s linear infinite",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  style={{
                    width: "130px", // Increased from 120px
                    height: "55px", // Increased from 50px
                    margin: "0 12px", // Increased from 10px
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "7px", // Increased from 6px
                    backgroundColor: "white",
                    borderRadius: "4px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <img
                    src={logo}
                    alt={`logo-${index}`}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      filter: "grayscale(20%)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = "grayscale(0%)";
                      e.target.style.transform = "scale(1.03)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = "grayscale(20%)";
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                </div>
              ))}
            </div>
            <style>
              {`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}
            </style>
          </div>

          {/* Main Content with Stats */}
          <div
            style={{
              display: "flex",
              flexDirection: window.innerWidth < 1024 ? "column" : "row",
              gap: window.innerWidth < 768 ? "18px" : "36px", // Increased from 32px
              padding: window.innerWidth < 768 ? "18px" : "44px", // Increased from 40px
              maxWidth: "100%",
              overflowX: "hidden",
              boxSizing: "border-box",
            }}
          >
            {/* Left Text */}
            <div
              style={{
                flex: "1 1 auto",
                display: "flex",
                flexDirection: "column", 
                justifyContent: "center",
                padding: window.innerWidth < 768 ? "14px" : "36px", // Increased from 32px
                maxWidth: "100%",
              }}
            >
              <h2
                style={{
                  fontSize: window.innerWidth < 768 ? "1.15rem" : "1.9rem", // Increased from 1.8rem
                  fontWeight: 500,
                  lineHeight: 1.3,
                  marginBottom: window.innerWidth < 768 ? "14px" : "22px", // Increased
                  color: "#333333",
                }}
              >
              Empower Faster, Safer, and Greener Chemical Innovation
              </h2>
              <p
                style={{
                  fontSize: window.innerWidth < 768 ? "0.82rem" : "0.95rem", // Increased
                  lineHeight: 1.5,
                  color: "#666666",
                  marginBottom: window.innerWidth < 768 ? "18px" : "26px", // Increased
                }}
              >
               In today’s competitive chemicals landscape, speed and sustainability go hand in hand. The Boltzmann AI Discovery Suite doesn’t just accelerate R&D; it empowers your teams to design safer, greener, and more cost-effective products from day one.


              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                <div
                  style={{
                    width: window.innerWidth < 640 ? "22px" : "30px", // Increased
                    height: "2px",
                    background: "linear-gradient(90deg, #4F1985, #6A1B9A)",
                  }}
                />
                <span
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    fontWeight: 400,
                    color: "#666666",
                    fontSize: window.innerWidth < 640 ? "0.62rem" : "0.72rem", // Increased
                  }}
                >
                  Chemicals
                </span>
              </div>
            </div>

            {/* Right Stats */}
            <div
              ref={statsRef}
              style={{
                flex: window.innerWidth < 1024 ? "1 1 auto" : "0 0 46%", // Increased from 45%
                display: "flex",
                flexDirection: "column",
                gap: "22px", // Increased from 20px
                maxWidth: "100%",
              }}
            >
              {animatedStats.map((stat, index) => (
                <div
                  key={index}
                  style={{
                    padding: "22px", // Increased from 20px
                    border: "1px solid #e0e0e0",
                    borderRadius: "13px", // Increased from 12px
                    backgroundColor: "#ffffff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.7rem", // Increased from 2.5rem
                      fontWeight: 700,
                      color: statsData[index].color,
                      lineHeight: 1,
                      marginBottom: "10px", // Increased from 8px
                    }}
                  >
                    {stat.value}{stat.suffix}
                  </div>
                  <p
                    style={{
                      fontSize: "0.87rem", // Increased from 0.85rem
                      color: "#666666",
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    {statsData[index].description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chemicals;