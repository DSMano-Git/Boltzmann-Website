// import React from 'react';

// export default function InsightCards() {
//   const cards = [
//     {
//       title: "Activating the power of data",
//       description:
//         "Designed to become a nexus for Drug Discovery by creating potential tools and ecosystems.",
//       gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(34, 211, 238, 0.1) 100%)",
//       accent: "rgba(34, 211, 238, 1)",
//       shadow: "rgba(34, 211, 238, 0.3)",
//       icon: "📊"
//     },
//     {
//       title: "Making insights accessible",
//       description:
//         "Research accelerated in all stages of Drug Discovery using the latest technology and data-driven approaches.",
//       gradient: "linear-gradient(135deg, rgba(192, 132, 252, 0.15) 0%, rgba(216, 180, 254, 0.1) 100%)",
//       accent: "rgba(192, 132, 252, 1)",
//       shadow: "rgba(192, 132, 252, 0.3)",
//       icon: "🔍"
//     },
//     {
//       title: "Drug Discovery",
//       description:
//         "Be it small molecules, peptides, or proteins Boltzmann has solutions for all kinds of drug discovery problems.",
//       gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(253, 186, 116, 0.1) 100%)",
//       accent: "rgba(251, 146, 60, 1)",
//       shadow: "rgba(251, 146, 60, 0.3)",
//       icon: "🚀"
//     }
//   ];

//   return (
//     <div
//       style={{
//         padding: "120px 40px",
//         background: "radial-gradient(circle at 10% 20%, rgba(248, 250, 252, 0.9) 0%, rgba(249, 250, 251, 0.9) 90%)",
//         color: "#111827",
//         fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//         position: "relative",
//         overflow: "hidden"
//       }}
//     >
//       {/* Decorative elements */}
//       {/* <div style={{
//         position: "absolute",
//         top: 0,
//         right: 0,
//         width: "300px",
//         height: "300px",
//         background: "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)",
//         transform: "translate(50%, -50%)"
//       }} /> */}
      
//       <div style={{
//         position: "absolute",
//         bottom: 0,
//         left: 0,
//         width: "400px",
//         height: "400px",
//         background: "radial-gradient(circle, rgba(192, 132, 252, 0.06) 0%, transparent 70%)",
//         transform: "translate(-50%, 50%)"
//       }} />

//       <div className="container" style={{
//         maxWidth: "1280px",
//         margin: "0 auto",
//         position: "relative",
//         zIndex: 2
//       }}>
//         <h2
//           style={{
//             fontFamily: "'Inter', sans-serif",
//             fontSize: "48px",
//             fontWeight: "800",
//             textAlign: "center",
//             marginBottom: "80px",
//             lineHeight: "1.2",
//             color: "#111827",
//             letterSpacing: "-1px",
//             position: "relative",
//             display: "inline-block",
//             left: "50%",
//             transform: "translateX(-50%)"
//           }}
//         >
//           We empower businesses to be insight-driven
//           <span style={{
//             position: "absolute",
//             bottom: "-12px",
//             left: "0",
//             width: "100%",
//             height: "4px",
//             background: "linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8))",
//             borderRadius: "2px"
//           }} />
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(3, 1fr)",
//             gap: "32px",
//             alignItems: "stretch"
//           }}
//         >
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: "#fff",
//                 padding: "40px 32px",
//                 borderRadius: "16px",
//                 boxShadow: `0px 0px 15px  ${card.shadow}, 0px 0px 15px  ${card.shadow}`,
//                 border: "1px solid rgba(229, 231, 235, 0.5)",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "flex-start",
//                 textAlign: "left",
//                 // transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                 position: "relative",
//                 overflow: "hidden",
//                 zIndex: 1,
//                 background: card.gradient
//               }}
              
//             >
//               <div style={{
//                 fontSize: "42px",
//                 marginBottom: "24px",
//                 opacity: 0.9
//               }}>
//                 {card.icon}
//               </div>
              
//               <h3
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                   fontSize: "24px",
//                   fontWeight: "700",
//                   marginBottom: "20px",
//                   lineHeight: "1.4",
//                   color: "#111827",
//                   position: "relative",
//                   paddingBottom: "16px"
//                 }}
//               >
//                 {card.title}
//                 <span style={{
//                   position: "absolute",
//                   bottom: "0",
//                   left: "0",
//                   width: "48px",
//                   height: "3px",
//                   background: card.accent,
//                   borderRadius: "2px"
//                 }} />
//               </h3>
              
//               <p
//                 style={{
//                   fontSize: "16px",
//                   color: "#4b5563",
//                   lineHeight: "1.7",
//                   flexGrow: 1,
//                   marginBottom: "24px"
//                 }}
//               >
//                 {card.description}
//               </p>
              
//               <div style={{
//                 position: "absolute",
//                 top: "0",
//                 right: "0",
//                 width: "0",
//                 height: "0",
//                 borderTop: "60px solid " + card.accent + "20",
//                 borderLeft: "60px solid transparent",
//                 // transition: "all 0.3s ease"
//               }} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useRef } from 'react';

// export default function InsightCards() {
//  const cards = [
//     {
//       title: "Unified Platform",
//       description:
//         "All your workflows. Fully automated. Move faster and smarter—from target hypothesis to synthesis-ready candidates.",
//       gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(34, 211, 238, 0.1) 100%)",
//       accent: "rgba(34, 211, 238, 1)",
//       shadow: "rgba(34, 211, 238, 0.3)",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
//           <line x1="8" y1="21" x2="16" y2="21"></line>
//           <line x1="12" y1="17" x2="12" y2="21"></line>
//           <path d="M7 11h10"></path>
//         </svg>
//       )
//     },
//     {
//       title: "AI-Driven Automation",
//       description:
//         "Automate molecular design, property prediction, retrosynthesis, and lab execution",
//       gradient: "linear-gradient(135deg, rgba(192, 132, 252, 0.15) 0%, rgba(216, 180, 254, 0.1) 100%)",
//       accent: "rgba(192, 132, 252, 1)",
//       shadow: "rgba(192, 132, 252, 0.3)",
//      icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
//           <path d="M17.8 19.2a9 9 0 0 0 1.6-4.7 1 1 0 0 0-1-1h-3.2a4 4 0 0 1-.8-2.3V8.3a1 1 0 0 0-1-1H9.2a1 1 0 0 0-1 1v2.5a4 4 0 0 1-.8 2.3H4.2a1 1 0 0 0-1 1 9 9 0 0 0 1.6 4.7"></path>
//           <path d="M7.5 14.6a5 5 0 0 1 9 0"></path>
//         </svg>
//       )
//     },
//     {
//       title: "Seamless Integration",
//       description:
//         "LIMS-compatible, CLI/API customizable. Designed for speed, scale, and scientific impact.",
//       gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(253, 186, 116, 0.1) 100%)",
//       accent: "rgba(251, 146, 60, 1)",
//       shadow: "rgba(251, 146, 60, 0.3)",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M12 2v4"></path>
//           <path d="m16.24 7.76 2.83-2.83"></path>
//           <path d="M18 12h4"></path>
//           <path d="m16.24 16.24 2.83 2.83"></path>
//           <path d="M12 18v4"></path>
//           <path d="m7.76 16.24-2.83 2.83"></path>
//           <path d="M6 12H2"></path>
//           <path d="m7.76 7.76-2.83-2.83"></path>
//           <circle cx="12" cy="12" r="3"></circle>
//         </svg>
//       )
//     }
//   ];
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = React.useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.1
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

//   return (
//     <div
//       ref={sectionRef}
//       style={{
//         padding: "120px 40px",
//         color: "#111827",
//         fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//         position: "relative",
//         overflow: "hidden",
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
//       }}
//     >
//       {/* ... (keep your existing decorative elements) */}

//       <div className="container" style={{
//         maxWidth: "1280px",
//         margin: "0 auto",
//         position: "relative",
//         zIndex: 2
//       }}>
//         <h2
//           style={{
//             fontFamily: "'Inter', sans-serif",
//             fontSize: "48px",
//             fontWeight: "200",
//             textAlign: "center",
//             marginBottom: "80px",
//             lineHeight: "1.2",
//             color: "#111827",
//             letterSpacing: "-1px",
//             position: "relative",
//             display: "inline-block",
//             left: "50%",
//             transform: "translateX(-50%)",
//             opacity: isVisible ? 1 : 0,
//             transition: 'opacity 0.6s ease-out 0.2s'
//           }}
//         >
//           We empower businesses to be insight-driven
//           <span style={{
//             position: "absolute",
//             bottom: "-12px",
//             left: "0",
//             width: "100%",
//             height: "4px",
//             background: "linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8))",
//             borderRadius: "2px"
//           }} />
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(3, 1fr)",
//             gap: "32px",
//             alignItems: "stretch"
//           }}
//         >
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: "#fff",
//                 padding: "40px 32px",
//                 borderRadius: "16px",
//                 boxShadow: `0px 0px 15px  ${card.shadow}, 0px 0px 15px  ${card.shadow}`,
//                 border: "1px solid rgba(229, 231, 235, 0.5)",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "flex-start",
//                 textAlign: "left",
//                 position: "relative",
//                 overflow: "hidden",
//                 zIndex: 1,
//                 background: card.gradient,
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                 transition: `opacity 0.6s ease-out ${0.3 + index * 0.1}s, transform 0.6s ease-out ${0.3 + index * 0.1}s`
//               }}
//             >
//                    <div style={{
//                 fontSize: "42px",
//                 marginBottom: "24px",
//                 opacity: 0.9
//               }}>
//                 {card.icon}
//               </div>
              
//               <h3
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                   fontSize: "24px",
//                   fontWeight: "500",
//                   marginBottom: "20px",
//                   lineHeight: "1.4",
//                   color: "#111827",
//                   position: "relative",
//                   paddingBottom: "16px"
//                 }}
//               >
//                 {card.title}
//                 <span style={{
//                   position: "absolute",
//                   bottom: "0",
//                   left: "0",
//                   width: "48px",
//                   height: "3px",
//                   background: card.accent,
//                   borderRadius: "2px"
//                 }} />
//               </h3>
              
//               <p
//                 style={{
//                   fontSize: "16px",
//                   color: "#4b5563",
//                   lineHeight: "1.7",
//                   flexGrow: 1,
//                   marginBottom: "24px"
//                 }}
//               >
//                 {card.description}
//               </p>
              
//               <div style={{
//                 position: "absolute",
//                 top: "0",
//                 right: "0",
//                 width: "0",
//                 height: "0",
//                 borderTop: "60px solid " + card.accent + "20",
//                 borderLeft: "60px solid transparent",
//                 // transition: "all 0.3s ease"
//               }} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useRef } from 'react';

// export default function InsightCards() {
//   const cards = [
//     {
//       title: "Unified Platform",
//       description:
//         "All your workflows. Fully automated. Move faster and smarter—from target hypothesis to synthesis-ready candidates.",
//       gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(34, 211, 238, 0.1) 100%)",
//       accent: "rgba(34, 211, 238, 1)",
//       shadow: "rgba(34, 211, 238, 0.3)",
//       iconType: "monitor"
//     },
//     {
//       title: "AI-Driven Automation",
//       description:
//         "Automate molecular design, property prediction, retrosynthesis, and lab execution",
//       gradient: "linear-gradient(135deg, rgba(192, 132, 252, 0.15) 0%, rgba(216, 180, 254, 0.1) 100%)",
//       accent: "rgba(192, 132, 252, 1)",
//       shadow: "rgba(192, 132, 252, 0.3)",
//       iconType: "network"
//     },
//     {
//       title: "Seamless Integration",
//       description:
//         "LIMS-compatible, CLI/API customizable. Designed for speed, scale, and scientific impact.",
//       gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(253, 186, 116, 0.1) 100%)",
//       accent: "rgba(251, 146, 60, 1)",
//       shadow: "rgba(251, 146, 60, 0.3)",
//       iconType: "integration"
//     }
//   ];

//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = React.useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.1
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

//   const renderIcon = (type, color) => {
//     switch (type) {
//       case "monitor":
//         return (
//           <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
//             <line x1="8" y1="21" x2="16" y2="21"></line>
//             <line x1="12" y1="17" x2="12" y2="21"></line>
//             <path d="M7 11h10"></path>
//           </svg>
//         );
//       case "network":
//         return (
//           <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
//             <path d="M17.8 19.2a9 9 0 0 0 1.6-4.7 1 1 0 0 0-1-1h-3.2a4 4 0 0 1-.8-2.3V8.3a1 1 0 0 0-1-1H9.2a1 1 0 0 0-1 1v2.5a4 4 0 0 1-.8 2.3H4.2a1 1 0 0 0-1 1 9 9 0 0 0 1.6 4.7"></path>
//             <path d="M7.5 14.6a5 5 0 0 1 9 0"></path>
//           </svg>
//         );
//       case "integration":
//         return (
//           <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
//     <div
//       ref={sectionRef}
//       style={{
//         padding: "120px 40px",
//         color: "#111827",
//         fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//         position: "relative",
//         overflow: "hidden",
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
//       }}
//     >
//       <div className="container" style={{
//         maxWidth: "1280px",
//         margin: "0 auto",
//         position: "relative",
//         zIndex: 2
//       }}>
//         <h2
//           style={{
//             fontFamily: "'Inter', sans-serif",
//             fontSize: "48px",
//             fontWeight: "200",
//             textAlign: "center",
//             marginBottom: "80px",
//             lineHeight: "1.2",
//             color: "#111827",
//             letterSpacing: "-1px",
//             position: "relative",
//             opacity: isVisible ? 1 : 0,
//             transition: 'opacity 0.6s ease-out 0.2s'
//           }}
//         >
//           We empower businesses to be insight-driven
//           <span style={{
//             position: "absolute",
//             bottom: "-12px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "120px",
//             height: "4px",
//             background: "linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8))",
//             borderRadius: "2px"
//           }} />
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "32px",
//             alignItems: "stretch"
//           }}
//         >
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: "#fff",
//                 padding: "40px 32px",
//                 borderRadius: "16px",
//                 boxShadow: `0px 0px 15px  ${card.shadow}, 0px 0px 15px  ${card.shadow}`,
//                 border: "1px solid rgba(229, 231, 235, 0.5)",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "flex-start",
//                 textAlign: "left",
//                 position: "relative",
//                 overflow: "hidden",
//                 zIndex: 1,
//                 background: card.gradient,
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                 transition: `opacity 0.6s ease-out ${0.3 + index * 0.1}s, transform 0.6s ease-out ${0.3 + index * 0.1}s`
//               }}
//             >
//               <div style={{
//                 fontSize: "42px",
//                 marginBottom: "24px",
//                 opacity: 0.9
//               }}>
//                 {renderIcon(card.iconType, card.accent)}
//               </div>

//               <h3
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                   fontSize: "24px",
//                   fontWeight: "500",
//                   marginBottom: "20px",
//                   lineHeight: "1.4",
//                   color: "#111827",
//                   position: "relative",
//                   paddingBottom: "16px"
//                 }}
//               >
//                 {card.title}
//                 <span style={{
//                   position: "absolute",
//                   bottom: "0",
//                   left: "0",
//                   width: "48px",
//                   height: "3px",
//                   background: card.accent,
//                   borderRadius: "2px"
//                 }} />
//               </h3>

//               <p
//                 style={{
//                   fontSize: "16px",
//                   color: "#4b5563",
//                   lineHeight: "1.7",
//                   flexGrow: 1,
//                   marginBottom: "24px"
//                 }}
//               >
//                 {card.description}
//               </p>

//               <div style={{
//                 position: "absolute",
//                 top: "0",
//                 right: "0",
//                 width: "0",
//                 height: "0",
//                 borderTop: "60px solid " + card.accent + "20",
//                 borderLeft: "60px solid transparent"
//               }} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useRef } from 'react';

export default function InsightCards() {
  const cards = [
    {
      title: "Unified Platform",
      description:
        "All your workflows. Fully automated. Move faster and smarter—from target hypothesis to synthesis-ready candidates.",
      gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(34, 211, 238, 0.1) 100%)",
      accent: "rgba(34, 211, 238, 1)",
      shadow: "rgba(34, 211, 238, 0.3)",
      iconType: "monitor"
    },
    {
      title: "AI-Driven Automation",
      description:
        "Automate molecular design, property prediction, retrosynthesis, and lab execution",
      gradient: "linear-gradient(135deg, rgba(192, 132, 252, 0.15) 0%, rgba(216, 180, 254, 0.1) 100%)",
      accent: "rgba(192, 132, 252, 1)",
      shadow: "rgba(192, 132, 252, 0.3)",
      iconType: "network"
    },
    {
      title: "Seamless Integration",
      description:
        "LIMS-compatible, CLI/API customizable. Designed for speed, scale, and scientific impact.",
      gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(253, 186, 116, 0.1) 100%)",
      accent: "rgba(251, 146, 60, 1)",
      shadow: "rgba(251, 146, 60, 0.3)",
      iconType: "integration"
    }
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const renderIcon = (type, color) => {
    switch (type) {
      case "monitor":
        return (
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
            <path d="M7 11h10"></path>
          </svg>
        );
      case "network":
        return (
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
            <path d="M17.8 19.2a9 9 0 0 0 1.6-4.7 1 1 0 0 0-1-1h-3.2a4 4 0 0 1-.8-2.3V8.3a1 1 0 0 0-1-1H9.2a1 1 0 0 0-1 1v2.5a4 4 0 0 1-.8 2.3H4.2a1 1 0 0 0-1 1 9 9 0 0 0 1.6 4.7"></path>
            <path d="M7.5 14.6a5 5 0 0 1 9 0"></path>
          </svg>
        );
      case "integration":
        return (
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4"></path>
            <path d="m16.24 7.76 2.83-2.83"></path>
            <path d="M18 12h4"></path>
            <path d="m16.24 16.24 2.83 2.83"></path>
            <path d="M12 18v4"></path>
            <path d="m7.76 16.24-2.83 2.83"></path>
            <path d="M6 12H2"></path>
            <path d="m7.76 7.76-2.83-2.83"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        );
      default: return null;
    }
  };

  return (
    <div
      ref={sectionRef}
      style={{
        marginTop: '-25px',
        paddingBottom: '40px',
        color: "#111827",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "500",
            textAlign: "center",
            marginBottom: "60px",
            lineHeight: "1.2",
            color: "#111827",
            letterSpacing: "-0.5px",
            position: "relative",
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.2s',
            fontWeight: 400,color: '#4F1985',fontSize: '2.5rem',fontFamily: 'timesnew'
          }}
        >
          We empower businesses to be insight-driven
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px"
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                padding: "32px 24px",
                borderRadius: "16px",
                boxShadow: `0 8px 20px ${card.shadow}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                position: "relative",
                overflow: "hidden",
                background: card.gradient,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease-out ${0.3 + index * 0.1}s, transform 0.6s ease-out ${0.3 + index * 0.1}s`
              }}
            >
              <div style={{ fontSize: "42px", marginBottom: "20px", opacity: 0.9 }}>
                {renderIcon(card.iconType, card.accent)}
              </div>
              <h3 style={{
                fontSize: "22px",
                fontWeight: "500",
                marginBottom: "16px",
                lineHeight: "1.4",
                color: "#111827",
                position: "relative",
                paddingBottom: "12px"
              }}>
                {card.title}
                <span style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "40px",
                  height: "3px",
                  background: card.accent,
                  borderRadius: "2px"
                }} />
              </h3>
              <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6", flexGrow: 1 }}>
                {card.description}
              </p>
              <div style={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "0",
                height: "0",
                borderTop: "50px solid " + card.accent + "20",
                borderLeft: "50px solid transparent"
              }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
