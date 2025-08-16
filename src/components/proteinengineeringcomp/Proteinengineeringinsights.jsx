// import React, { useEffect, useRef, useState } from "react";

// export default function InsightCards() {
//   const cards = [
//     {
//       title: "Design Breakthrough Molecules with Confidence",
//       description:
//         "Go beyond conventional screening. Our platform uses cutting-edge generative AI trained on multi-omics, chemical, and structural datasets to propose high-potential small molecules for your specific target or pathway. Every suggestion comes with predicted activity, toxicity, and developability scores — enabling faster decision-making from hit to lead.",
//       gradient:
//         "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(147,197,253,0.1))",
//       accent: "rgba(59,130,246,1)",
//       shadow: "rgba(59,130,246,0.25)",
//       iconType: "monitor",
//     },
//     {
//       title: "Streamline Discovery to Development",
//       description:
//         "From in silico design to pathway planning, the AI Discovery Suite integrates predictive modeling, retrosynthetic analysis, and property optimization in a single workspace. Collaborate across teams, automate routine workflows, and reduce R&D cycles without compromising quality.",
//       gradient:
//         "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(110,231,183,0.1))",
//       accent: "rgba(16,185,129,1)",
//       shadow: "rgba(16,185,129,0.25)",
//       iconType: "network",
//     },
//     {
//       title: "Built for Innovation, Backed by Science",
//       description:
//         "Our technology doesn’t just predict — it explains. With transparent AI reasoning, structure–activity visualizations, and integration with lab data, you get actionable insights grounded in chemistry. The result? More innovative molecules, fewer dead ends, and faster routes to clinical relevance.",
//       gradient:
//         "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(244,114,182,0.1))",
//       accent: "rgba(236,72,153,1)",
//       shadow: "rgba(236,72,153,0.25)",
//       iconType: "integration",
//     },
//     {
//       title: "Your Competitive Edge in Drug Discovery",
//       description:
//         "In a space where speed and precision determine success, our AI Discovery Suite gives you the tools to stay ahead. Reduce costs, explore chemical space like never before, and bring transformative therapies to market faster.",
//       gradient:
//         "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(253,224,71,0.1))",
//       accent: "rgba(245,158,11,1)",
//       shadow: "rgba(245,158,11,0.25)",
//       iconType: "monitor",
//     },
//   ];

//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setIsVisible(true),
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => sectionRef.current && observer.unobserve(sectionRef.current);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const getGridColumns = () => {
//     if (windowWidth < 640) return "1fr"; // mobile
//     if (windowWidth < 1024) return "1fr 1fr"; // tablet & small laptops
//     if (windowWidth < 1440) return "1fr 1fr"; // medium laptops
//     return "1fr 1fr"; // large desktops
//   };

//   const renderIcon = (type, color) => {
//     switch (type) {
//       case "monitor":
//         return (
//           <svg
//             width="42"
//             height="42"
//             fill="none"
//             stroke={color}
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             viewBox="0 0 24 24"
//           >
//             <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
//             <line x1="8" y1="21" x2="16" y2="21"></line>
//             <line x1="12" y1="17" x2="12" y2="21"></line>
//             <path d="M7 11h10"></path>
//           </svg>
//         );
//       case "network":
//         return (
//           <svg
//             width="42"
//             height="42"
//             fill="none"
//             stroke={color}
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
//             <path d="M17.8 19.2a9 9 0 0 0 1.6-4.7 1 1 0 0 0-1-1h-3.2a4 4 0 0 1-.8-2.3V8.3a1 1 0 0 0-1-1H9.2a1 1 0 0 0-1 1v2.5a4 4 0 0 1-.8 2.3H4.2a1 1 0 0 0-1 1 9 9 0 0 0 1.6 4.7"></path>
//             <path d="M7.5 14.6a5 5 0 0 1 9 0"></path>
//           </svg>
//         );
//       case "integration":
//         return (
//           <svg
//             width="42"
//             height="42"
//             fill="none"
//             stroke={color}
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2v4"></path>
//             <path d="m16.24 7.76 2.83-2.83"></path>
//             <path d="M18 12h4"></path>
//             <path d="m16.24 16.24 2.83 2.83"></path>
//             <path d="M12 18v4"></path>
//             <path d="m7.76 16.24-2.83 2.83"></path>
//             <path d="M6 12H2"></path>
//             <path d="m7.76 7.76-2.83-2.83"></path>
//             <circle cx="12" cy="12" r="3"></circle>
//           </svg>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         position: "relative",
//         overflow: "hidden",
//         padding: "0px 20px 60px",

//         maxWidth: "1280px",
//         margin: "0 auto",
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(20px)",
//         transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
//       }}
//     >
//       <h2
//         style={{
//           fontSize: windowWidth < 640 ? "28px" : "40px",
//           fontWeight: 300,
//           textAlign: "center",
//           marginBottom: "50px",
//           lineHeight: 1.3,
//           color: "#111827",
//           position: "relative",
//           opacity: isVisible ? 1 : 0,
//           transition: "opacity 0.6s ease-out 0.2s",
//         }}
//       >
//         We empower businesses to be insight-driven
//         <span
//           style={{
//             position: "absolute",
//             bottom: "-10px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "100px",
//             height: "4px",
//             background:
//               "linear-gradient(90deg, rgba(59,130,246,0.8), rgba(16,185,129,0.8), rgba(236,72,153,0.8), rgba(245,158,11,0.8))",
//             borderRadius: "2px",
//           }}
//         />
//       </h2>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: getGridColumns(),
//           gap: windowWidth < 640 ? "20px" : "32px",
//         }}
//       >
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             style={{
//               background: card.gradient,
//               padding: windowWidth < 640 ? "28px 20px" : "40px 28px",
//               borderRadius: "20px",
//               boxShadow: `0 6px 18px ${card.shadow}`,
//               display: "flex",
//               flexDirection: "column",
//               position: "relative",
//               overflow: "hidden",
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? "translateY(0)" : "translateY(20px)",
//               transition: `opacity 0.6s ease-out ${0.3 + index * 0.1}s, transform 0.6s ease-out ${0.3 + index * 0.1}s`,
//             }}
//           >
//             <div style={{ marginBottom: "20px", opacity: 0.9 }}>
//               {renderIcon(card.iconType, card.accent)}
//             </div>
//             <h3
//               style={{
//                 fontSize: windowWidth < 640 ? "18px" : "22px",
//                 fontWeight: 600,
//                 marginBottom: "16px",
//                 lineHeight: 1.4,
//                 color: "#111827",
//                 position: "relative",
//                 paddingBottom: "12px",
//               }}
//             >
//               {card.title}
//               <span
//                 style={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "50px",
//                   height: "3px",
//                   background: card.accent,
//                   borderRadius: "2px",
//                 }}
//               />
//             </h3>
//             <p
//               style={{
//                 fontSize: windowWidth < 640 ? "14px" : "15px",
//                 color: "#374151",
//                 lineHeight: 1.6,
//                 flexGrow: 1,
//               }}
//             >
//               {card.description}
//             </p>

//             <div
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 right: 0,
//                 width: 0,
//                 height: 0,
//                 borderTop: `60px solid ${card.accent}20`,
//                 borderLeft: "60px solid transparent",
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


//horizontal stack

// import React, { useEffect, useRef, useState } from "react";

// export default function InsightCards() {
//   const cards = [
//     {
//       title: "Design Breakthrough Molecules with Confidence",
//       description:
//         "Go beyond conventional screening. Our platform uses cutting-edge generative AI trained on multi-omics, chemical, and structural datasets to propose high-potential small molecules for your specific target or pathway. Every suggestion comes with predicted activity, toxicity, and developability scores — enabling faster decision-making from hit to lead.",
//       gradient: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(147,197,253,0.1))",
//       accent: "rgba(59,130,246,1)",
//       shadow: "rgba(59,130,246,0.3)",
//       iconType: "monitor",
//     },
//     {
//       title: "Streamline Discovery to Development",
//       description:
//         "From in silico design to pathway planning, the AI Discovery Suite integrates predictive modeling, retrosynthetic analysis, and property optimization in a single workspace. Collaborate across teams, automate routine workflows, and reduce R&D cycles without compromising quality.",
//       gradient: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(110,231,183,0.1))",
//       accent: "rgba(16,185,129,1)",
//       shadow: "rgba(16,185,129,0.3)",
//       iconType: "network",
//     },
//     {
//       title: "Built for Innovation, Backed by Science",
//       description:
//         "Our technology doesn't just predict — it explains. With transparent AI reasoning, structure–activity visualizations, and integration with lab data, you get actionable insights grounded in chemistry. The result? More innovative molecules, fewer dead ends, and faster routes to clinical relevance.",
//       gradient: "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(244,114,182,0.1))",
//       accent: "rgba(236,72,153,1)",
//       shadow: "rgba(236,72,153,0.3)",
//       iconType: "integration",
//     },
//     {
//       title: "Your Competitive Edge in Drug Discovery",
//       description:
//         "In a space where speed and precision determine success, our AI Discovery Suite gives you the tools to stay ahead. Reduce costs, explore chemical space like never before, and bring transformative therapies to market faster.",
//       gradient: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(253,224,71,0.1))",
//       accent: "rgba(245,158,11,1)",
//       shadow: "rgba(245,158,11,0.3)",
//       iconType: "monitor",
//     },
//   ];

//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setIsVisible(true),
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => sectionRef.current && observer.unobserve(sectionRef.current);
//   }, []);

//   const renderIcon = (type, color) => {
//     const iconStyle = {
//       width: "42px",
//       height: "42px",
//       stroke: color,
//       strokeWidth: "2",
//       strokeLinecap: "round",
//       strokeLinejoin: "round",
//     };

//     switch (type) {
//       case "monitor":
//         return (
//           <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
//             <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
//             <line x1="8" y1="21" x2="16" y2="21"></line>
//             <line x1="12" y1="17" x2="12" y2="21"></line>
//             <path d="M7 11h10"></path>
//           </svg>
//         );
//       case "network":
//         return (
//           <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
//             <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
//             <path d="M17.8 19.2a9 9 0 0 0 1.6-4.7 1 1 0 0 0-1-1h-3.2a4 4 0 0 1-.8-2.3V8.3a1 1 0 0 0-1-1H9.2a1 1 0 0 0-1 1v2.5a4 4 0 0 1-.8 2.3H4.2a1 1 0 0 0-1 1 9 9 0 0 0 1.6 4.7"></path>
//             <path d="M7.5 14.6a5 5 0 0 1 9 0"></path>
//           </svg>
//         );
//       case "integration":
//         return (
//           <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
//             <path d="M12 2v4"></path>
//             <path d="m16.24 7.76 2.83-2.83"></path>
//             <path d="M18 12h4"></path>
//             <path d="m16.24 16.24 2.83 2.83"></path>
//             <path d="M12 18v4"></path>
//             <path d="m7.76 16.24-2.83 2.83"></path>
//             <path d="M6 12H2"></path>
//             <path d="m7.76 7.76-2.83-2.83"></path>
//             <circle cx="12" cy="12" r="3"></circle>
//           </svg>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         position: "relative",
//         overflow: "hidden",
//         padding: "80px 20px",
//         width: "100%",
//         maxWidth: "1400px",
//         margin: "0 auto",
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(20px)",
//         transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
//       }}
//     >
//       <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//         <h2
//           style={{
//             fontSize: "clamp(32px, 5vw, 42px)",
//             fontWeight: 600,
//             textAlign: "center",
//             marginBottom: "60px",
//             lineHeight: 1.2,
//             color: "#111827",
//             position: "relative",
//             opacity: isVisible ? 1 : 0,
//             transition: "opacity 0.6s ease-out 0.2s",
//           }}
//         >
//           We empower businesses to be insight-driven
//           <span
//             style={{
//               position: "absolute",
//               bottom: "-10px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               width: "100px",
//               height: "4px",
//               background:
//                 "linear-gradient(90deg, rgba(59,130,246,0.8), rgba(16,185,129,0.8), rgba(236,72,153,0.8), rgba(245,158,11,0.8))",
//               borderRadius: "2px",
//             }}
//           />
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//             gap: "32px",
//           }}
//         >
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               style={{
//                 background: card.gradient,
//                 padding: "40px 32px",
//                 borderRadius: "20px",
//                 boxShadow: `0 8px 30px ${card.shadow}`,
//                 display: "flex",
//                 flexDirection: "column",
//                 position: "relative",
//                 overflow: "hidden",
//                 border: "1px solid rgba(255, 255, 255, 0.3)",
//                 backdropFilter: "blur(8px)",
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? "translateY(0)" : "translateY(20px)",
//                 transition: `all 0.6s ease-out ${0.3 + index * 0.1}s`,
//               }}
//             >
//               <div 
//                 style={{ 
//                   marginBottom: "24px", 
//                   opacity: 0.9,
//                   transition: "transform 0.3s ease",
//                 }}
//               >
//                 {renderIcon(card.iconType, card.accent)}
//               </div>
//               <h3
//                 style={{
//                   fontSize: "clamp(20px, 2vw, 22px)",
//                   fontWeight: 600,
//                   marginBottom: "16px",
//                   lineHeight: 1.4,
//                   color: "#111827",
//                   position: "relative",
//                   paddingBottom: "16px",
//                 }}
//               >
//                 {card.title}
//                 <span
//                   style={{
//                     position: "absolute",
//                     bottom: 0,
//                     left: 0,
//                     width: "50px",
//                     height: "3px",
//                     background: card.accent,
//                     borderRadius: "2px",
//                     transition: "width 0.3s ease",
//                   }}
//                 />
//               </h3>
//               <p
//                 style={{
//                   fontSize: "clamp(14px, 1.5vw, 16px)",
//                   color: "#374151",
//                   lineHeight: 1.7,
//                   flexGrow: 1,
//                   marginBottom: "16px",
//                 }}
//               >
//                 {card.description}
//               </p>

//               <div
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   right: 0,
//                   width: 0,
//                   height: 0,
//                   borderTop: `60px solid ${card.accent}20`,
//                   borderLeft: "60px solid transparent",
//                   transition: "all 0.3s ease",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { Dna, Settings, Microscope, Rocket } from "lucide-react";
export default function ProteinInsightCards() {
const cards = [
  {
    title: "From Data to Function—Faster Than Ever",
    description:
      "Engineer high-performance proteins with confidence. Our generative AI models are trained on vast structural, sequence, and functional datasets to propose novel or enhanced proteins tailored to your specific application. Every design comes with predicted stability, activity, immunogenicity, and manufacturability scores—empowering smarter decisions from the very start.",
    gradient:
      "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(165,180,252,0.1))",
    accent: "rgba(99,102,241,1)",
    shadow: "rgba(99,102,241,0.25)",
    iconType: "dna", // changed icon to represent proteins
  },
  {
    title: "Streamline Design to Deployment",
    description:
      "From sequence design to in silico validation, our AI Protein Suite integrates structure prediction, mutational scanning, and developability assessments into a single platform. Collaborate seamlessly, automate labor-intensive workflows, and accelerate your engineering cycles without sacrificing quality.",
    gradient:
      "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(110,231,183,0.1))",
    accent: "rgba(34,197,94,1)",
    shadow: "rgba(34,197,94,0.25)",
    iconType: "cog", // engineering/process icon
  },
  {
    title: "Built for Innovation, Backed by Science",
    description:
      "Our AI doesn’t just design — it explains. With transparent predictions, interactive structure visualizations, and direct integration with experimental datasets, you gain actionable insights grounded in protein science. The result? More innovative designs, fewer failed constructs, and faster translation to functional reality.",
    gradient:
      "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(251,207,232,0.1))",
    accent: "rgba(236,72,153,1)",
    shadow: "rgba(236,72,153,0.25)",
    iconType: "microscope", // research/science icon
  },
  {
    title: "Your Competitive Edge in Protein Science",
    description:
      "In a field where precision and speed define leadership, our AI Protein Suite helps you stay ahead. Reduce development costs, explore protein sequence space like never before, and bring transformative solutions to market faster.",
    gradient:
      "linear-gradient(135deg, rgba(250,204,21,0.15), rgba(253,230,138,0.1))",
    accent: "rgba(250,204,21,1)",
    shadow: "rgba(250,204,21,0.25)",
    iconType: "rocket", // speed/performance icon
  },
];


  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getGridColumns = () => {
    if (windowWidth < 640) return "1fr"; // mobile
    if (windowWidth < 1024) return "1fr 1fr"; // tablet & small laptops
    return "1fr 1fr"; // desktops
  };

const renderIcon = (type, color) => {
  const size = 48; // icon size
  switch (type) {
    case "dna":
      return <Dna color={color} size={size} />;
    case "cog":
      return <Settings color={color} size={size} />;
    case "microscope":
      return <Microscope color={color} size={size} />;
    case "rocket":
      return <Rocket color={color} size={size} />;
    default:
      return null;
  }
};


  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "0px 20px 80px", // more balanced top/bottom padding
        maxWidth: "1280px",
        margin: "0 auto",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <h2
        style={{
          fontSize: windowWidth < 640 ? "32px" : "40px", // bigger heading
          marginTop: windowWidth < 640 ? "60px" : "0px", // bigger heading
          marginBottom: windowWidth < 640 ? "60px" : "70px", // bigger heading
          fontWeight: 500,
          textAlign: "center",
          margin: "0 0 40px", // remove default top margin
          lineHeight: 1.3,
          color: "#111827", 
          position: "relative",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.6s ease-out 0.2s",
          fontWeight: 400,color: '#4F1985',fontSize: '2.5rem',fontFamily: 'timesnew'
        }}
      >
        We empower businesses to be insight-driven.
         
         <span
            style={{
              display: "block",
              width: "80px",
              height: "4px",
              backgroundColor: "#4F1985",
              margin: "15px auto 0",
              borderRadius: "2px"
            }}
          />
     </h2>
      

      <div
        style={{
          display: "grid",
          gridTemplateColumns: getGridColumns(),
          gap: windowWidth < 640 ? "24px" : "36px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: card.gradient,
              padding: windowWidth < 640 ? "32px 24px" : "35px 25px", // more space inside cards //cardspadding
              borderRadius: "24px",
              boxShadow: `0 8px 20px ${card.shadow}`,
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.6s ease-out ${0.3 + index * 0.1}s, transform 0.6s ease-out ${0.3 + index * 0.1}s`,
            }}
          >
            <div style={{ marginBottom: "24px", opacity: 0.9 }}>
              {renderIcon(card.iconType, card.accent)}
            </div>
            <h3
              style={{
                fontSize: windowWidth < 640 ? "20px" : "26px", // bigger titles
                fontWeight: 600,
                marginBottom: "18px",
                lineHeight: 1.5,
                color: "#111827",
                position: "relative",
                paddingBottom: "12px",
              }}
            >
              {card.title}
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "60px",
                  height: "3px",
                  background: card.accent,
                  borderRadius: "2px",
                }}
              />
            </h3>
            <p
              style={{
                fontSize: windowWidth < 640 ? "16px" : "18px", // readable text
                color: "#374151",
                lineHeight: 1.75,
                flexGrow: 1,
              }}
            >
              {card.description}
            </p>

            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 0,
                height: 0,
                borderTop: `70px solid ${card.accent}20`,
                borderLeft: "70px solid transparent",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

