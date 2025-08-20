// // import React from "react";

// // import {
// //   FaVial,
// //   FaShieldAlt,
// //   FaAtom,
// //   FaChartLine,
// //   FaProjectDiagram,
// //   FaDna,
// //   FaMicroscope,
// //   FaUsers,
// // } from "react-icons/fa";

// // const features = [
// //   {
// //     icon: <FaVial />,
// //     title: "AI-Powered Hit Identification",
// //     description:
// //       "Rapidly scan millions of compounds to find promising hits in days, not months.",
// //     bgColor: "#6C63FF",
// //   },
// //   {
// //     icon: <FaShieldAlt />,
// //     title: "Predictive ADMET Screening",
// //     description:
// //       "Spot toxicity and pharmacokinetic risks before entering the lab.",
// //     bgColor: "#FF6B6B",
// //   },
// //   {
// //     icon: <FaAtom />,
// //     title: "Generative Molecule Design",
// //     description:
// //       "Create novel compounds beyond known chemical space with AI creativity.",
// //     bgColor: "#4FC3F7",
// //   },
// //   {
// //     icon: <FaChartLine />,
// //     title: "SAR & Potency Prediction",
// //     description:
// //       "Optimize structure–activity relationships with data-driven precision.",
// //     bgColor: "#FFA500",
// //   },
// //   {
// //     icon: <FaProjectDiagram />,
// //     title: "Retrosynthesis Planning",
// //     description:
// //       "Identify the fastest, most cost-effective, and green synthesis routes.",
// //     bgColor: "#FFB74D",
// //   },
// //   {
// //     icon: <FaDna />,
// //     title: "Multi-Omics Integration",
// //     description:
// //       "Uncover unique biomarkers and targets with cross-domain datasets.",
// //     bgColor: "#8E44AD",
// //   },
// //   {
// //     icon: <FaMicroscope />,
// //     title: "Virtual Screening at Scale",
// //     description:
// //       "Run high-throughput in silico assays with unprecedented speed.",
// //     bgColor: "#2ECC71",
// //   },
// //   {
// //     icon: <FaUsers />,
// //     title: "Collaborative Research Workspaces",
// //     description:
// //       "Share, review, and iterate on designs in secure, real-time environments.",
// //     bgColor: "#E67E22",
// //   },
// // ];

// // export default function FeaturesGrid() {
// //   const containerStyle = {
// //     maxWidth: "1400px",
// //     margin: "0 auto",
// //     padding: "64px 32px",
// //   };

// //   const gridStyle = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
// //     gap: "32px",
// //   };

// //   const cardStyle = {
// //     backgroundColor: "#fff",
// //     borderRadius: "20px",
// //     boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
// //     padding: "32px 24px",
// //     textAlign: "center",
// //     transition: "all 0.3s ease",
// //     cursor: "pointer",
// //   };

// //   const iconWrapper = (bgColor) => ({
// //     width: "64px",
// //     height: "64px",
// //     borderRadius: "50%",
// //     backgroundColor: bgColor,
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     margin: "0 auto 20px",
// //     fontSize: "28px",
// //     color: "#fff",
// //   });

// //   const titleStyle = {
// //     fontSize: "20px",
// //     fontWeight: "700",
// //     marginBottom: "12px",
// //   };

// //   const descStyle = {
// //     fontSize: "15px",
// //     color: "#555",
// //     lineHeight: "1.7",
// //   };

// //   return (
// //     <div style={containerStyle}>
// //       <div style={gridStyle}>
// //         {features.map((feature, idx) => (
// //           <div
// //             key={idx}
// //             style={cardStyle}
// //             onMouseEnter={(e) =>
// //               (e.currentTarget.style.transform = "translateY(-10px)")
// //             }
// //             onMouseLeave={(e) =>
// //               (e.currentTarget.style.transform = "translateY(0)")
// //             }
// //           >
// //             <div style={iconWrapper(feature.bgColor)}>{feature.icon}</div>
// //             <h3 style={titleStyle}>{feature.title}</h3>
// //             <p style={descStyle}>{feature.description}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // import React from "react";

// // import {
// //   FaVial,
// //   FaShieldAlt,
// //   FaAtom,
// //   FaChartLine,
// //   FaProjectDiagram,
// //   FaDna,
// //   FaMicroscope,
// //   FaUsers,
// // } from "react-icons/fa";

// // const features = [
// //   {
// //     icon: FaVial,
// //     title: "AI-Powered Hit Identification",
// //     description:
// //       "Rapidly scan millions of compounds to find promising hits in days, not months.",
// //     bgColor: "#6366f1",
// //     hoverColor: "#4f46e5",
// //   },
// //   {
// //     icon: FaShieldAlt,
// //     title: "Predictive ADMET Screening",
// //     description:
// //       "Spot toxicity and pharmacokinetic risks before entering the lab.",
// //     bgColor: "#f43f5e",
// //     hoverColor: "#e11d48",
// //   },
// //   {
// //     icon: FaAtom,
// //     title: "Generative Molecule Design",
// //     description:
// //       "Create novel compounds beyond known chemical space with AI creativity.",
// //     bgColor: "#38bdf8",
// //     hoverColor: "#0ea5e9",
// //   },
// //   {
// //     icon: FaChartLine,
// //     title: "SAR & Potency Prediction",
// //     description:
// //       "Optimize structure–activity relationships with data-driven precision.",
// //     bgColor: "#f97316",
// //     hoverColor: "#ea580c",
// //   },
// //   {
// //     icon: FaProjectDiagram,
// //     title: "Retrosynthesis Planning",
// //     description:
// //       "Identify the fastest, most cost-effective, and green synthesis routes.",
// //     bgColor: "#f59e0b",
// //     hoverColor: "#d97706",
// //   },
// //   {
// //     icon: FaDna,
// //     title: "Multi-Omics Integration",
// //     description:
// //       "Uncover unique biomarkers and targets with cross-domain datasets.",
// //     bgColor: "#9333ea",
// //     hoverColor: "#7c3aed",
// //   },
// //   {
// //     icon: FaMicroscope,
// //     title: "Virtual Screening at Scale",
// //     description:
// //       "Run high-throughput in silico assays with unprecedented speed.",
// //     bgColor: "#10b981",
// //     hoverColor: "#059669",
// //   },
// //   {
// //     icon: FaUsers,
// //     title: "Collaborative Research Workspaces",
// //     description:
// //       "Share, review, and iterate on designs in secure, real-time environments.",
// //     bgColor: "#ea580c",
// //     hoverColor: "#c2410c",
// //   },
// // ];

// // const FeatureCard = ({ feature }) => {
// //   const [isHovered, setIsHovered] = React.useState(false);
// //   const IconComponent = feature.icon;
  
// //   const cardStyle = {
// //     backgroundColor: "#ffffff",
// //     borderRadius: "24px",
// //     boxShadow: isHovered 
// //       ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
// //       : "0 10px 25px -3px rgba(0, 0, 0, 0.1)",
// //     padding: "32px",
// //     textAlign: "center",
// //     cursor: "pointer",
// //     transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
// //     transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
// //     border: isHovered ? "1px solid rgba(99, 102, 241, 0.2)" : "1px solid transparent",
// //   };

// //   const iconWrapperStyle = {
// //     width: "64px",
// //     height: "64px",
// //     borderRadius: "50%",
// //     backgroundColor: isHovered ? feature.hoverColor : feature.bgColor,
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     margin: "0 auto 24px",
// //     fontSize: "24px",
// //     color: "#ffffff",
// //     transition: "all 0.3s ease",
// //     boxShadow: isHovered 
// //       ? `0 8px 25px ${feature.bgColor}40` 
// //       : `0 4px 15px ${feature.bgColor}30`,
// //   };

// //   const titleStyle = {
// //     fontSize: "20px",
// //     fontWeight: "700",
// //     marginBottom: "16px",
// //     color: isHovered ? "#4F1985" : "#111827",
// //     transition: "color 0.3s ease",
// //     lineHeight: "1.3",
// //   };

// //   const descriptionStyle = {
// //     fontSize: "15px",
// //     color: isHovered ? "#4b5563" : "#6b7280",
// //     lineHeight: "1.6",
// //     transition: "color 0.3s ease",
// //   };
  
// //   return (
// //     <div 
// //       style={cardStyle}
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //     >
// //       <div style={iconWrapperStyle}>
// //         <IconComponent />
// //       </div>
      
// //       <h3 style={titleStyle}>
// //         {feature.title}
// //       </h3>
      
// //       <p style={descriptionStyle}>
// //         {feature.description}
// //       </p>
// //     </div>
// //   );
// // };

// // export default function FeaturesGrid() {
// //   const containerStyle = {
// //     maxWidth: "1280px",
// //     margin: "0 auto",
// //     padding: "64px 32px",
// //     background: "linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)",
// //   };

// //   const headerStyle = {
// //     textAlign: "center",
// //     marginBottom: "64px",
// //   };

// //   const mainTitleStyle = {
// //     fontSize: "42px",
// //     fontWeight: "800",
// //     color: "#111827",
// //     marginBottom: "16px",
// //     lineHeight: "1.2",
// //     background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
// //     WebkitBackgroundClip: "text",
// //     WebkitTextFillColor: "transparent",
// //     backgroundClip: "text",
// //   };

// //   const subtitleStyle = {
// //     fontSize: "20px",
// //     color: "#6b7280",
// //     maxWidth: "800px",
// //     margin: "0 auto",
// //     lineHeight: "1.6",
// //     fontWeight: "400",
// //   };

// //   const gridStyle = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
// //     gap: "32px",
// //   };

// //   // Responsive styles
// //   const mediaQuery = window.matchMedia("(max-width: 768px)");
// //   const isMobile = mediaQuery.matches;

// //   const responsiveContainerStyle = {
// //     ...containerStyle,
// //     padding: isMobile ? "48px 16px" : "64px 32px",
// //   };

// //   const responsiveMainTitleStyle = {
// //     ...mainTitleStyle,
// //     fontSize: isMobile ? "32px" : "42px",
// //   };

// //   const responsiveSubtitleStyle = {
// //     ...subtitleStyle,
// //     fontSize: isMobile ? "18px" : "20px",
// //   };

// //   const responsiveGridStyle = {
// //     ...gridStyle,
// //     gridTemplateColumns: isMobile 
// //       ? "1fr" 
// //       : window.matchMedia("(max-width: 1024px)").matches 
// //         ? "repeat(2, 1fr)" 
// //         : "repeat(4, 1fr)",
// //     gap: isMobile ? "24px" : "32px",
// //   };

// //   return (
// //     <section style={responsiveContainerStyle}>
// //       <div style={headerStyle}>
// //         <h2 style={responsiveMainTitleStyle}>
// //           Powerful AI-Driven Features
// //         </h2>
// //         <p style={responsiveSubtitleStyle}>
// //           Accelerate your drug discovery pipeline with cutting-edge artificial intelligence tools designed for pharmaceutical research
// //         </p>
// //       </div>
      
// //       <div style={responsiveGridStyle}>
// //         {features.map((feature, index) => (
// //           <FeatureCard key={index} feature={feature} />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // import React from "react";

// // import {
// //   Bot,
// //   Shield,
// //   Atom,
// //   TrendingUp,
// //   GitBranch,
// //   Dna,
// //   Microscope,
// //   Users,
// // } from "lucide-react";

// // const features = [
// //   {
// //     icon: Bot,
// //     title: "AI-Powered Hit Identification",
// //     description:
// //       "Rapidly scan millions of compounds to find promising hits in days, not months.",
// //     bgColor: "#6366f1",
// //     hoverColor: "#4f46e5",
// //   },
// //   {
// //     icon: Shield,
// //     title: "Predictive ADMET Screening",
// //     description:
// //       "Spot toxicity and pharmacokinetic risks before entering the lab.",
// //     bgColor: "#f43f5e",
// //     hoverColor: "#e11d48",
// //   },
// //   {
// //     icon: Atom,
// //     title: "Generative Molecule Design",
// //     description:
// //       "Create novel compounds beyond known chemical space with AI creativity.",
// //     bgColor: "#38bdf8",
// //     hoverColor: "#0ea5e9",
// //   },
// //   {
// //     icon: TrendingUp,
// //     title: "SAR & Potency Prediction",
// //     description:
// //       "Optimize structure–activity relationships with data-driven precision.",
// //     bgColor: "#f97316",
// //     hoverColor: "#ea580c",
// //   },
// //   {
// //     icon: GitBranch,
// //     title: "Retrosynthesis Planning",
// //     description:
// //       "Identify the fastest, most cost-effective, and green synthesis routes.",
// //     bgColor: "#f59e0b",
// //     hoverColor: "#d97706",
// //   },
// //   {
// //     icon: Dna,
// //     title: "Multi-Omics Integration",
// //     description:
// //       "Uncover unique biomarkers and targets with cross-domain datasets.",
// //     bgColor: "#9333ea",
// //     hoverColor: "#7c3aed",
// //   },
// //   {
// //     icon: Microscope,
// //     title: "Virtual Screening at Scale",
// //     description:
// //       "Run high-throughput in silico assays with unprecedented speed.",
// //     bgColor: "#10b981",
// //     hoverColor: "#059669",
// //   },
// //   {
// //     icon: Users,
// //     title: "Collaborative Research Workspaces",
// //     description:
// //       "Share, review, and iterate on designs in secure, real-time environments.",
// //     bgColor: "#ea580c",
// //     hoverColor: "#c2410c",
// //   },
// // ];

// // const FeatureCard = ({ feature }) => {
// //   const [isHovered, setIsHovered] = React.useState(false);
// //   const IconComponent = feature.icon;
  
// //   const cardStyle = {
// //     backgroundColor: "#ffffff",
// //     borderRadius: "24px",
// //     boxShadow: isHovered 
// //       ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
// //       : "0 10px 25px -3px rgba(0, 0, 0, 0.1)",
// //     padding: "32px",
// //     textAlign: "center",
// //     cursor: "pointer",
// //     transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
// //     transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
// //     border: isHovered ? "1px solid rgba(99, 102, 241, 0.2)" : "1px solid transparent",
// //   };

// //   const iconWrapperStyle = {
// //     width: "64px",
// //     height: "64px",
// //     borderRadius: "50%",
// //     backgroundColor: isHovered ? feature.hoverColor : feature.bgColor,
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     margin: "0 auto 24px",
// //     color: "#ffffff",
// //     transition: "all 0.3s ease",
// //     boxShadow: isHovered 
// //       ? `0 8px 25px ${feature.bgColor}40` 
// //       : `0 4px 15px ${feature.bgColor}30`,
// //   };

// //   const titleStyle = {
// //     fontSize: "20px",
// //     fontWeight: "700",
// //     marginBottom: "16px",
// //     color: isHovered ? "#4f46e5" : "#111827",
// //     transition: "color 0.3s ease",
// //     lineHeight: "1.3",
// //   };

// //   const descriptionStyle = {
// //     fontSize: "15px",
// //     color: isHovered ? "#4b5563" : "#6b7280",
// //     lineHeight: "1.6",
// //     transition: "color 0.3s ease",
// //   };
  
// //   return (
// //     <div 
// //       style={cardStyle}
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //     >
// //       <div style={iconWrapperStyle}>
// //         <IconComponent size={24} strokeWidth={2} />
// //       </div>
      
// //       <h3 style={titleStyle}>
// //         {feature.title}
// //       </h3>
      
// //       <p style={descriptionStyle}>
// //         {feature.description}
// //       </p>
// //     </div>
// //   );
// // };

// // export default function FeaturesGrid() {
// //   const containerStyle = {
// //     maxWidth: "1280px",
// //     margin: "0 auto",
// //     padding: "64px 32px",
   
// //   };

// //   const headerStyle = {
// //     textAlign: "center",
// //     marginBottom: "64px",
// //   };

// //   const mainTitleStyle = {
// //     fontSize: "42px",
// //     fontWeight: "800",
// //     color: "#111827",
// //     marginBottom: "16px",
// //     lineHeight: "1.2",
// //     background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
// //     WebkitBackgroundClip: "text",
// //     WebkitTextFillColor: "transparent",
// //     backgroundClip: "text",
// //   };

// //   const subtitleStyle = {
// //     fontSize: "20px",
// //     color: "#6b7280",
// //     maxWidth: "800px",
// //     margin: "0 auto",
// //     lineHeight: "1.6",
// //     fontWeight: "400",
// //   };

// //   const gridStyle = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
// //     gap: "32px",
// //   };

// //   // Responsive styles
// //   const mediaQuery = window.matchMedia("(max-width: 768px)");
// //   const isMobile = mediaQuery.matches;

// //   const responsiveContainerStyle = {
// //     ...containerStyle,
// //     padding: isMobile ? "48px 16px" : "64px 32px",
// //   };

// //   const responsiveMainTitleStyle = {
// //     ...mainTitleStyle,
// //     fontSize: isMobile ? "32px" : "42px",
// //   };

// //   const responsiveSubtitleStyle = {
// //     ...subtitleStyle,
// //     fontSize: isMobile ? "18px" : "20px",
// //   };

// //   const responsiveGridStyle = {
// //     ...gridStyle,
// //     gridTemplateColumns: isMobile 
// //       ? "1fr" 
// //       : window.matchMedia("(max-width: 1024px)").matches 
// //         ? "repeat(2, 1fr)" 
// //         : "repeat(4, 1fr)",
// //     gap: isMobile ? "24px" : "32px",
// //   };

// //   return (
// //     <section style={responsiveContainerStyle}>
// //       <div style={headerStyle}>
// //         <h2 style={responsiveMainTitleStyle}>
// //           Powerful AI-Driven Features
// //         </h2>
// //         <p style={responsiveSubtitleStyle}>
// //           Accelerate your drug discovery pipeline with cutting-edge artificial intelligence tools designed for pharmaceutical research
// //         </p>
// //       </div>
      
// //       <div style={responsiveGridStyle}>
// //         {features.map((feature, index) => (
// //           <FeatureCard key={index} feature={feature} />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }


// import React from "react";

// import { TestTube, Zap, Leaf, GitBranch, DollarSign, Eye, Database, Users } from "lucide-react";




// const features = [
//   {
//     icon: TestTube,
//     title: "AI-Powered Reaction Discovery",
//     description: "Mine literature and data to uncover innovative reaction opportunities.",
//     bgColor: "#6366f1",
//     hoverColor: "#4f46e5",
//   },
//   {
//     icon: Zap,
//     title: "Predictive Yield & Condition Modeling",
//     description: "Anticipate reaction performance before running the first experiment.",
//     bgColor: "#f43f5e",
//     hoverColor: "#e11d48",
//   },
//   {
//     icon: Leaf,
//     title: "Sustainable Chemistry Insights",
//     description: "Design greener, less wasteful routes without compromising yield.",
//     bgColor: "#10b981",
//     hoverColor: "#059669",
//   },
//   {
//     icon: GitBranch,
//     title: "Automated Retrosynthesis",
//     description: "Generate ranked synthetic routes instantly for any target molecule.",
//     bgColor: "#f97316",
//     hoverColor: "#ea580c",
//   },
//   {
//     icon: DollarSign,
//     title: "Reagent & Cost Optimization",
//     description: "Select the most cost-effective, readily available reagents.",
//     bgColor: "#f59e0b",
//     hoverColor: "#d97706",
//   },
//   {
//     icon: Eye,
//     title: "Mechanistic Visualizations",
//     description: "Understand the step-by-step process behind every reaction.",
//     bgColor: "#9333ea",
//     hoverColor: "#7c3aed",
//   },
//   {
//     icon: Database,
//     title: "Integration with ELNs & LIMS",
//     description: "Sync AI-generated routes directly into your lab systems.",
//     bgColor: "#38bdf8",
//     hoverColor: "#0ea5e9",
//   },
//   {
//     icon: Users,
//     title: "Collaborative Research Workspaces",
//     description: "Share, review, and iterate on synthesis plans in real time.",
//     bgColor: "#ea580c",
//     hoverColor: "#c2410c",
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
//     border: isHovered ? `1px solid ${feature.bgColor}33` : "1px solid transparent",
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

// export default function SyntheticFeaturesGrid() {
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
//           AI-Driven Synthetic Chemistry Features
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


import React from "react";
import { 
  Database, 
  Search, 
  Link, 
  Share2, 
  Users, 
  Activity, 
  BarChart3, 
  MessageSquare 
} from "lucide-react";


const features = [
  {
    icon: Database,
    title: "AI-Powered Data Harmonization",
    description: "Integrate and normalize datasets from diverse omics platforms with ease.",
    bgColor: "#6366f1",
    hoverColor: "#4f46e5"
  },
  {
    icon: Search,
    title: "Predictive Biomarker Identification",
    description: "Detect high-impact biomarkers linked to disease states or therapeutic response.",
    bgColor: "#f43f5e",
    hoverColor: "#e11d48"
  },
  {
    icon: Link,
    title: "Cross-Omics Correlation Analysis",
    description: "Reveal hidden relationships between genetic, transcriptomic, proteomic, and metabolomic layers.",
    bgColor: "#38bdf8",
    hoverColor: "#0ea5e9"
  },
  {
    icon: Share2,
    title: "Pathway & Network Mapping",
    description: "Visualize biological pathways and molecular interaction networks.",
    bgColor: "#f59e0b",
    hoverColor: "#d97706"
  },
  {
    icon: Users,
    title: "Cohort-Based Comparative Analytics",
    description: "Identify differences and commonalities across populations or conditions.",
    bgColor: "#9333ea",
    hoverColor: "#7c3aed"
  },
  {
    icon: Activity,
    title: "Disease Mechanism Modeling",
    description: "Predict causal relationships and key drivers of disease progression.",
    bgColor: "#10b981",
    hoverColor: "#059669"
  },
  {
    icon: BarChart3,
    title: "Integrative Visualization Dashboards",
    description: "Explore results through interactive, publication-ready visualizations.",
    bgColor: "#f97316",
    hoverColor: "#ea580c"
  },
  {
    icon: MessageSquare,
    title: "Collaborative Analysis Workspaces",
    description: "Share findings, annotate datasets, and iterate in real time.",
    bgColor: "#ea580c",
    hoverColor: "#c2410c"
  },
];


const FeatureCard = ({ feature }) => {
  const [isHovered, setIsHovered] = React.useState(false);
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
    transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
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
  };

  const titleStyle = {
    fontSize: "18px", // Reduced from 20px
    fontWeight: "700",
    marginBottom: "14px", // Reduced from 16px
    color: isHovered ? "#4f46e5" : "#111827",
    transition: "color 0.3s ease",
    lineHeight: "1.3",
  };

  const descriptionStyle = {
    fontSize: "14px", // Reduced from 15px
    color: isHovered ? "#4b5563" : "#6b7280",
    lineHeight: "1.5", // Reduced from 1.6
    transition: "color 0.3s ease",
    flexGrow: 1,
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

export default function MultiomicsFeaturesGrid() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    maxWidth: "1100px", // Reduced from 1280px
    margin: "0 auto",
    padding: isMobile ? "40px 16px" : "56px 24px", // Reduced padding
  };

  const headerStyle = { 
    textAlign: "center", 
    marginBottom: "48px" // Reduced from 64px
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
    <section style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={{
          textAlign: 'center', 
          marginBottom: '4%', 
          fontWeight: 400, 
          color: '#4F1985', 
          fontSize: '2.2rem', // Reduced from 2.5rem
          fontFamily: 'timesnew'
        }}>
          Generative Protein Design AI-Driven Features
          <span
            style={{
              display: "block",
              width: "70px", // Reduced from 80px
              height: "3px", // Reduced from 4px
              backgroundColor: "#4F1985",
              margin: "12px auto 0", // Reduced from 15px
              borderRadius: "2px"
            }}
          />
        </h2>
      </div>
      <div style={gridStyle}>
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
}