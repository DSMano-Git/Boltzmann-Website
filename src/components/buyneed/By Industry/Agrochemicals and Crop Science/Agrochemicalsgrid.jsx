import React, { useEffect, useRef, useState } from "react";
  import {
  Beaker,
  Sun,
  Leaf,
  MapPin,
  Database,
  AlertTriangle,
  Users,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: Beaker,
    title: "Screen Chemical Candidates",
    description: "Screen thousands of chemical candidates for efficacy and environmental safety in hours.",
    bgColor: "#1e3a8a", // Dark Blue
    hoverColor: "#2563eb"
  },
  {
    icon: Sun,
    title: "Predict Field Performance",
    description: "Predict field performance under diverse climate and soil conditions.",
    bgColor: "#f59e0b", // Amber
    hoverColor: "#d97706"
  },
  {
    icon: Leaf,
    title: "AI-Driven Formulation Design",
    description: "Design formulations with AI-driven precision to balance potency and sustainability.",
    bgColor: "#059669", // Green
    hoverColor: "#047857"
  },
  {
    icon: MapPin,
    title: "Identify Synthesis Routes",
    description: "Identify synthesis routes with cost, safety, and regulatory compliance in mind.",
    bgColor: "#b91c1c", // Red
    hoverColor: "#991b1b"
  },
  {
    icon: Database,
    title: "Integrate Crop & Soil Data",
    description: "Integrate crop genomics and soil microbiome datasets for targeted solutions.",
    bgColor: "#7c3aed", // Purple
    hoverColor: "#6d28d9"
  },
  {
    icon: AlertTriangle,
    title: "Environmental Risk Assessment",
    description: "Spot off-target environmental impacts early in the pipeline.",
    bgColor: "#fbbf24", // Yellow
    hoverColor: "#f59e0b"
  },
  {
    icon: Users,
    title: "Collaborative Workspaces",
    description: "Build and share collaborative workspaces for R&D teams and regulatory partners.",
    bgColor: "#06b6d4", // Teal
    hoverColor: "#0891b2"
  },
  {
    icon: FileText,
    title: "Compliance-Ready Reports",
    description: "Generate compliance-ready reports automatically.",
    bgColor: "#ec4899", // Magenta
    hoverColor: "#db2777"
  },
];





const FeatureCard = ({ feature, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = feature.icon;

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "20px", // Reduced from 24px
    boxShadow: isHovered 
      ? "0 20px 40px -10px rgba(0, 0, 0, 0.2)" 
      : "0 8px 20px -3px rgba(0, 0, 0, 0.08)",
    padding: "24px", // Reduced from 32px
    textAlign: "center",
    cursor: "pointer",
    transform: isVisible 
      ? (isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)") 
      : "translateY(15px) scale(0.98)",
    opacity: isVisible ? 1 : 0,
    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    border: isHovered ? "1px solid rgba(99, 102, 241, 0.2)" : "1px solid transparent",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  };

  const iconWrapperStyle = {
    width: "56px", // Reduced from 64px
    height: "56px", // Reduced from 64px
    borderRadius: "50%",
    backgroundColor: isHovered ? feature.hoverColor : feature.bgColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px", // Reduced from 24px
    color: "#ffffff",
    transition: "all 0.3s ease",
    boxShadow: isHovered 
      ? `0 6px 20px ${feature.bgColor}40` 
      : `0 3px 12px ${feature.bgColor}30`,
    transform: isVisible ? "scale(1)" : "scale(0.8)",
    opacity: isVisible ? 1 : 0,
    transitionDelay: isVisible ? "0.1s" : "0s",
  };

  const titleStyle = {
    fontSize: "18px", // Reduced from 20px
    fontWeight: "700",
    marginBottom: "14px", // Reduced from 16px
    color: isHovered ? "#4f46e5" : "#111827",
    transition: "color 0.3s ease",
    lineHeight: "1.3",
    transform: isVisible ? "translateY(0)" : "translateY(8px)",
    opacity: isVisible ? 1 : 0,
    transition: "all 0.3s ease",
    transitionDelay: isVisible ? "0.2s" : "0s",
  };

  const descriptionStyle = {
    fontSize: "14px", // Reduced from 15px
    color: isHovered ? "#4b5563" : "#6b7280",
    lineHeight: "1.5", // Reduced from 1.6
    transition: "color 0.3s ease",
    flexGrow: 1,
    transform: isVisible ? "translateY(0)" : "translateY(8px)",
    opacity: isVisible ? 1 : 0,
    transition: "all 0.3s ease",
    transitionDelay: isVisible ? "0.3s" : "0s",
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={iconWrapperStyle}>
        <IconComponent size={22} strokeWidth={2} /> {/* Reduced from 24px */}
      </div>
      <h3 style={titleStyle}>{feature.title}</h3>
      <p style={descriptionStyle}>{feature.description}</p>
    </div>
  );
};

export default function ChemicalFeaturesGrid() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerStyle = {
    maxWidth: "1100px", // Reduced from 1280px
    margin: "0 auto",
    padding: isMobile ? "40px 16px" : "56px 24px", // Reduced padding
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(15px)",
    transition: "all 0.5s ease-out", // Faster transition
  };

  const headerStyle = { 
    textAlign: "center", 
    marginBottom: "48px", // Reduced from 64px
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(15px)",
    transition: "all 0.5s ease-out", // Faster transition
    transitionDelay: isVisible ? "0.1s" : "0s"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : window.innerWidth <= 1024
      ? "repeat(2, 1fr)"
      : "repeat(4, 1fr)",
    gap: isMobile ? "20px" : "28px", // Reduced gap
    alignItems: "stretch",
    gridAutoRows: "1fr",
  };

  return (
    <section style={containerStyle} ref={sectionRef}>
      <div style={headerStyle}>
        <h2 style={{
          textAlign: 'center', 
          marginBottom: '4%', 
          fontWeight: 400, 
          color: '#4F1985', 
          fontSize: '2.2rem', // Reduced from 2.5rem
          fontFamily: 'timesnew'
        }}>
         Accelerate Your Agroscience Pipeline

          <span
            style={{
              display: "block",
              width: "70px", // Reduced from 80px
              height: "3px", // Reduced from 4px
              backgroundColor: "#4F1985",
              margin: "12px auto 0", // Reduced from 15px
              borderRadius: "2px",
              transform: isVisible ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "center",
              transition: "transform 0.5s ease-out", // Faster transition
              transitionDelay: isVisible ? "0.3s" : "0s"
            }}
          />
        </h2>
      </div>
      <div style={gridStyle}>
        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            feature={feature} 
            isVisible={isVisible}
            style={{ transitionDelay: isVisible ? `${0.1 + index * 0.04}s` : "0s" }} // Faster delays
          />
        ))}
      </div>
    </section>
  );
}