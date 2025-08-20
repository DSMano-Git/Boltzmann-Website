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

// import React, { useEffect, useRef, useState } from "react";
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

// const FeatureCard = ({ feature, isVisible }) => {
//   const [isHovered, setIsHovered] = useState(false);
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
//     transform: isVisible 
//       ? (isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)") 
//       : "translateY(20px) scale(0.98)",
//     opacity: isVisible ? 1 : 0,
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
//     transform: isVisible ? "scale(1)" : "scale(0.8)",
//     opacity: isVisible ? 1 : 0,
//     transitionDelay: isVisible ? "0.1s" : "0s",
//   };

//   const titleStyle = {
//     fontSize: "20px",
//     fontWeight: "700",
//     marginBottom: "16px",
//     color: isHovered ? "#4f46e5" : "#111827",
//     transition: "color 0.3s ease",
//     lineHeight: "1.3",
//     transform: isVisible ? "translateY(0)" : "translateY(10px)",
//     opacity: isVisible ? 1 : 0,
//     transition: "all 0.3s ease",
//     transitionDelay: isVisible ? "0.2s" : "0s",
//   };

//   const descriptionStyle = {
//     fontSize: "15px",
//     color: isHovered ? "#4b5563" : "#6b7280",
//     lineHeight: "1.6",
//     transition: "color 0.3s ease",
//     flexGrow: 1,
//     transform: isVisible ? "translateY(0)" : "translateY(10px)",
//     opacity: isVisible ? 1 : 0,
//     transition: "all 0.3s ease",
//     transitionDelay: isVisible ? "0.3s" : "0s",
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
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       {
//         threshold: 0.1,
//         rootMargin: "0px 0px -50px 0px"
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const containerStyle = {
//     maxWidth: "1280px",
//     margin: "0 auto",
//     padding: isMobile ? "48px 16px" : "64px 32px",
//     opacity: isVisible ? 1 : 0,
//     transform: isVisible ? "translateY(0)" : "translateY(20px)",
//     transition: "all 0.6s ease-out",
//   };

//   const headerStyle = { 
//     textAlign: "center", 
//     marginBottom: "64px",
//     opacity: isVisible ? 1 : 0,
//     transform: isVisible ? "translateY(0)" : "translateY(20px)",
//     transition: "all 0.6s ease-out",
//     transitionDelay: isVisible ? "0.1s" : "0s"
//   };

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
//     <section style={containerStyle} ref={sectionRef}>
//       <div style={headerStyle}>
//         <h2 style={{
//           textAlign: 'center', 
//           marginBottom: '4%', 
//           fontWeight: 400, 
//           color: '#4F1985', 
//           fontSize: '2.5rem', 
//           fontFamily: 'timesnew'
//         }}>
//           Generative Protein Design AI-Driven Features
//           <span
//             style={{
//               display: "block",
//               width: "80px",
//               height: "4px",
//               backgroundColor: "#4F1985",
//               margin: "15px auto 0",
//               borderRadius: "2px",
//               transform: isVisible ? "scaleX(1)" : "scaleX(0)",
//               transformOrigin: "center",
//               transition: "transform 0.6s ease-out",
//               transitionDelay: isVisible ? "0.3s" : "0s"
//             }}
//           />
//         </h2>
//       </div>
//       <div style={gridStyle}>
//         {features.map((feature, index) => (
//           <FeatureCard 
//             key={index} 
//             feature={feature} 
//             isVisible={isVisible}
//             style={{ transitionDelay: isVisible ? `${0.1 + index * 0.05}s` : "0s" }}
//           />
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
    title: "Screen Millions of Compounds",
    description: "Accelerate discovery by evaluating vast chemical libraries in minutes, not months.",
    bgColor: "#3b82f6", // Blue
    hoverColor: "#1d4ed8"
  },
  {
    icon: Zap,
    title: "Predict ADMET Profiles",
    description: "Assess absorption, distribution, metabolism, excretion, and toxicity before lab experiments.",
    bgColor: "#f97316", // Orange
    hoverColor: "#ea580c"
  },
  {
    icon: Thermometer,
    title: "AI-Driven Molecule Design",
    description: "Design and optimize compounds with AI precision for targeted outcomes.",
    bgColor: "#10b981", // Green
    hoverColor: "#059669"
  },
  {
    icon: MapPin,
    title: "Synthetic Route Planning",
    description: "Identify cost-effective, safe, and sustainable synthetic pathways.",
    bgColor: "#f43f5e", // Red/Pink
    hoverColor: "#e11d48"
  },
  {
    icon: Box,
    title: "Omics Data Integration",
    description: "Combine multi-dimensional datasets to gain deeper target insights.",
    bgColor: "#8b5cf6", // Purple
    hoverColor: "#7c3aed"
  },
  {
    icon: Dna,
    title: "Off-Target Risk Assessment",
    description: "Detect potential toxicity and off-target effects early in the development pipeline.",
    bgColor: "#facc15", // Yellow
    hoverColor: "#eab308"
  },
  {
    icon: Microscope,
    title: "Collaborative Research Workspaces",
    description: "Enable secure, real-time collaboration for design, review, and iteration.",
    bgColor: "#06b6d4", // Teal
    hoverColor: "#0891b2"
  },
  {
    icon: Users,
    title: "Ready-to-Share Reports",
    description: "Generate and distribute comprehensive reports for R&D teams and stakeholders.",
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

export default function PharmaFeaturesGrid() {
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
          Accelerate your drug discovery pipeline.

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