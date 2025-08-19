// import React from "react";

// import {
//   Cpu,
//   Zap,
//   Thermometer,
//   MapPin,
//   Box,
//   Dna,
//   Microscope,
//   Users,
// } from "lucide-react";

// const features = [
//   {
//     icon: Cpu,
//     title: "Generative Protein Design",
//     description: "Create novel sequences with targeted functions and high stability.",
//     bgColor: "#6366f1",
//     hoverColor: "#4f46e5"
//   },
//   {
//     icon: Zap,
//     title: "Binding Affinity Prediction",
//     description: "Identify mutations that enhance target interactions without compromising structure.",
//     bgColor: "#f43f5e",
//     hoverColor: "#e11d48"
//   },
//   {
//     icon: Thermometer,
//     title: "Stability & Solubility Scoring",
//     description: "Predict and improve folding efficiency, thermostability, and solubility before synthesis.",
//     bgColor: "#38bdf8",
//     hoverColor: "#0ea5e9"
//   },
//   {
//     icon: MapPin,
//     title: "Epitope Mapping & Immunogenicity Prediction",
//     description: "Design safer therapeutics by minimizing unwanted immune responses.",
//     bgColor: "#f97316",
//     hoverColor: "#ea580c"
//   },
//   {
//     icon: Box,
//     title: "Structure Prediction & Validation",
//     description: "Model accurate 3D structures to guide intelligent engineering decisions.",
//     bgColor: "#f59e0b",
//     hoverColor: "#d97706"
//   },
//   {
//     icon: Dna,
//     title: "Enzyme Engineering",
//     description: "Boost catalytic efficiency, substrate specificity, and process stability for industrial enzymes.",
//     bgColor: "#9333ea",
//     hoverColor: "#7c3aed"
//   },
//   {
//     icon: Microscope,
//     title: "Antibody Optimization",
//     description: "Refine affinity, specificity, and manufacturability for therapeutic antibodies.",
//     bgColor: "#10b981",
//     hoverColor: "#059669"
//   },
//   {
//     icon: Users,
//     title: "Collaborative Protein Workspaces",
//     description: "Secure, real-time environments for design, review, and iteration.",
//     bgColor: "#ea580c",
//     hoverColor: "#c2410c"
//   },
// ];

// const FeatureCard = ({ feature }) => {
//   const [isHovered, setIsHovered] = React.useState(false);
//   const IconComponent = feature.icon;

//   const cardStyle = {
//     backgroundColor: "#ffffff",
//     borderRadius: "24px",
//     boxShadow: isHovered 
//       ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
//       : "0 10px 25px -3px rgba(0, 0, 0, 0.1)",
//     padding: "32px",
//     textAlign: "center",
//     cursor: "pointer",
//     transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
//     transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//     border: isHovered ? "1px solid rgba(99, 102, 241, 0.2)" : "1px solid transparent",
//     height: "100%",
//     boxSizing: "border-box",
//     display: "flex",
//     flexDirection: "column",
//   };

//   const iconWrapperStyle = {
//     width: "64px",
//     height: "64px",
//     borderRadius: "50%",
//     backgroundColor: isHovered ? feature.hoverColor : feature.bgColor,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     margin: "0 auto 24px",
//     color: "#ffffff",
//     transition: "all 0.3s ease",
//     boxShadow: isHovered 
//       ? `0 8px 25px ${feature.bgColor}40` 
//       : `0 4px 15px ${feature.bgColor}30`,
//   };

//   const titleStyle = {
//     fontSize: "20px",
//     fontWeight: "700",
//     marginBottom: "16px",
//     color: isHovered ? "#4f46e5" : "#111827",
//     transition: "color 0.3s ease",
//     lineHeight: "1.3",
//   };

//   const descriptionStyle = {
//     fontSize: "15px",
//     color: isHovered ? "#4b5563" : "#6b7280",
//     lineHeight: "1.6",
//     transition: "color 0.3s ease",
//     flexGrow: 1,
//   };

//   return (
//     <div 
//       style={cardStyle}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div style={iconWrapperStyle}>
//         <IconComponent size={24} strokeWidth={2} />
//       </div>
//       <h3 style={titleStyle}>{feature.title}</h3>
//       <p style={descriptionStyle}>{feature.description}</p>
//     </div>
//   );
// };

// export default function PharmaFeaturesGrid() {
//   const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

//   React.useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const containerStyle = {
//     maxWidth: "1280px",
//     margin: "0 auto",
//     padding: isMobile ? "48px 16px" : "64px 32px",
//   };

//   const headerStyle = { textAlign: "center", marginBottom: "64px" };

//   const gridStyle = {
//     display: "grid",
//     gridTemplateColumns: isMobile
//       ? "1fr"
//       : window.innerWidth <= 1024
//       ? "repeat(2, 1fr)"
//       : "repeat(4, 1fr)",
//     gap: isMobile ? "24px" : "32px",
//     alignItems: "stretch",
//     gridAutoRows: "1fr",
//   };

//   return (
//     <section style={containerStyle}>
//       <div style={headerStyle}>
//         <h2 style={{textAlign: 'center', marginBottom: '4%', fontWeight: 400, color: '#4F1985', fontSize: '2.5rem', fontFamily: 'timesnew'}}>
//           Generative Protein Design AI-Driven Features
//           <span
//             style={{
//               display: "block",
//               width: "80px",
//               height: "4px",
//               backgroundColor: "#4F1985",
//               margin: "15px auto 0",
//               borderRadius: "2px"
//             }}
//           />
//         </h2>
//       </div>
//       <div style={gridStyle}>
//         {features.map((feature, index) => (
//           <FeatureCard key={index} feature={feature} />
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import {
  Cpu,
  Zap,
  Thermometer,
  MapPin,
  Box,
  Dna,
  Microscope,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Generative Protein Design",
    description: "Create novel sequences with targeted functions and high stability.",
    bgColor: "#6366f1",
    hoverColor: "#4f46e5"
  },
  {
    icon: Zap,
    title: "Binding Affinity Prediction",
    description: "Identify mutations that enhance target interactions without compromising structure.",
    bgColor: "#f43f5e",
    hoverColor: "#e11d48"
  },
  {
    icon: Thermometer,
    title: "Stability & Solubility Scoring",
    description: "Predict and improve folding efficiency, thermostability, and solubility before synthesis.",
    bgColor: "#38bdf8",
    hoverColor: "#0ea5e9"
  },
  {
    icon: MapPin,
    title: "Epitope Mapping & Immunogenicity Prediction",
    description: "Design safer therapeutics by minimizing unwanted immune responses.",
    bgColor: "#f97316",
    hoverColor: "#ea580c"
  },
  {
    icon: Box,
    title: "Structure Prediction & Validation",
    description: "Model accurate 3D structures to guide intelligent engineering decisions.",
    bgColor: "#f59e0b",
    hoverColor: "#d97706"
  },
  {
    icon: Dna,
    title: "Enzyme Engineering",
    description: "Boost catalytic efficiency, substrate specificity, and process stability for industrial enzymes.",
    bgColor: "#9333ea",
    hoverColor: "#7c3aed"
  },
  {
    icon: Microscope,
    title: "Antibody Optimization",
    description: "Refine affinity, specificity, and manufacturability for therapeutic antibodies.",
    bgColor: "#10b981",
    hoverColor: "#059669"
  },
  {
    icon: Users,
    title: "Collaborative Protein Workspaces",
    description: "Secure, real-time environments for design, review, and iteration.",
    bgColor: "#ea580c",
    hoverColor: "#c2410c"
  },
];

const FeatureCard = ({ feature, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = feature.icon;

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "24px",
    boxShadow: isHovered 
      ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
      : "0 10px 25px -3px rgba(0, 0, 0, 0.1)",
    padding: "32px",
    textAlign: "center",
    cursor: "pointer",
    transform: isVisible 
      ? (isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)") 
      : "translateY(20px) scale(0.98)",
    opacity: isVisible ? 1 : 0,
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    border: isHovered ? "1px solid rgba(99, 102, 241, 0.2)" : "1px solid transparent",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  };

  const iconWrapperStyle = {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    backgroundColor: isHovered ? feature.hoverColor : feature.bgColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 24px",
    color: "#ffffff",
    transition: "all 0.3s ease",
    boxShadow: isHovered 
      ? `0 8px 25px ${feature.bgColor}40` 
      : `0 4px 15px ${feature.bgColor}30`,
    transform: isVisible ? "scale(1)" : "scale(0.8)",
    opacity: isVisible ? 1 : 0,
    transitionDelay: isVisible ? "0.1s" : "0s",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "16px",
    color: isHovered ? "#4f46e5" : "#111827",
    transition: "color 0.3s ease",
    lineHeight: "1.3",
    transform: isVisible ? "translateY(0)" : "translateY(10px)",
    opacity: isVisible ? 1 : 0,
    transition: "all 0.3s ease",
    transitionDelay: isVisible ? "0.2s" : "0s",
  };

  const descriptionStyle = {
    fontSize: "15px",
    color: isHovered ? "#4b5563" : "#6b7280",
    lineHeight: "1.6",
    transition: "color 0.3s ease",
    flexGrow: 1,
    transform: isVisible ? "translateY(0)" : "translateY(10px)",
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
        <IconComponent size={24} strokeWidth={2} />
      </div>
      <h3 style={titleStyle}>{feature.title}</h3>
      <p style={descriptionStyle}>{feature.description}</p>
    </div>
  );
};

export default function PMFeaturesGrid() {
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
    maxWidth: "1280px",
    margin: "0 auto",
    padding: isMobile ? "48px 16px" : "64px 32px",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: "all 0.6s ease-out",
  };

  const headerStyle = { 
    textAlign: "center", 
    marginBottom: "64px",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: "all 0.6s ease-out",
    transitionDelay: isVisible ? "0.1s" : "0s"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : window.innerWidth <= 1024
      ? "repeat(2, 1fr)"
      : "repeat(4, 1fr)",
    gap: isMobile ? "24px" : "32px",
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
          fontSize: '2.5rem', 
          fontFamily: 'timesnew'
        }}>
          Generative Protein Design AI-Driven Features
          <span
            style={{
              display: "block",
              width: "80px",
              height: "4px",
              backgroundColor: "#4F1985",
              margin: "15px auto 0",
              borderRadius: "2px",
              transform: isVisible ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "center",
              transition: "transform 0.6s ease-out",
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
            style={{ transitionDelay: isVisible ? `${0.1 + index * 0.05}s` : "0s" }}
          />
        ))}
      </div>
    </section>
  );
} 