

// import React, { useState, useEffect } from "react";

// const ProteinEngineeringShowcase = () => {
//   const [isLaptop, setIsLaptop] = useState(false);
//   const [animatedStats, setAnimatedStats] = useState([
//     { value: 0, target: 97, suffix: '%' },
//     { value: 0, target: 80, suffix: '%' },
//     { value: 0, target: 49, suffix: '%' }
//   ]);

//   useEffect(() => {
//     const checkWidth = () => {
//       setIsLaptop(window.innerWidth >= 1024);
//     };
//     checkWidth();
//     window.addEventListener("resize", checkWidth);
//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   // Animate statistics
//   useEffect(() => {
//     const animateNumbers = () => {
//       const duration = 2000; // 2 seconds
//       const steps = 60; // 60 steps for smooth animation
//       const interval = duration / steps;
      
//       let currentStep = 0;
      
//       const timer = setInterval(() => {
//         currentStep++;
//         const progress = currentStep / steps;
//         const easeOut = 1 - Math.pow(1 - progress, 3); // Ease out function
        
//         setAnimatedStats(prev => prev.map((stat, index) => ({
//           ...stat,
//           value: Math.round(stat.target * easeOut)
//         })));
        
//         if (currentStep >= steps) {
//           clearInterval(timer);
//         }
//       }, interval);
      
//       return () => clearInterval(timer);
//     };

//     // Start animation after component mounts
//     const timeout = setTimeout(animateNumbers, 500);
//     return () => clearTimeout(timeout);
//   }, []);

//   const logos = [
//     "/alogo-1.png",
//     "/alogo-2.png", 
//     "/alogo-3.png",
//     "/alogo-4.png",
//     "/alogo-5.jpeg",
//     "/alogo-6.jpeg",
//   ];

//   const statsData = [
//     {
//       color: "#00BCD4",
//       description: "of protein engineers use AI-driven design tools to accelerate discovery."
//     },
//     {
//       color: "#E91E63", 
//       description: "reduction in protein optimization time using generative models."
//     },
//     {
//       color: "#FF5722",
//       description: "of pharmaceutical companies invest in computational protein design."
//     }
//   ];

//   return (
//     <div style={{ width: "100%", position: "relative" }}>
//       {/* About Section */}
//       <section style={{ position: "relative", marginBottom: "2rem" }}>
//         {/* Purple header */}
//         <div style={{ backgroundColor: "#4F1985", height: "300px" }} />

//         {/* Content card */}
//         <div
//           style={{
//             background: "#fff",
//             borderTopRightRadius: "20px",
//             borderTopLeftRadius: "20px",
//             padding: "60px",
//             maxWidth: "950px",
//             margin: "-100px auto 0",
//             display: "flex",
//             alignItems: "center",
//             gap: "60px",
//             boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//             flexDirection: "row",
//           }}
//         >
//           {/* Image container */}
//           <div
//             style={{
//               flex: "0 0 300px",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" // Replace with your actual logo path
//               alt=""
//               style={{
//                 borderRadius: '20px',
                
//                 width: "420px",
//                 height: "300px",
               
//               }}
//             />
//           </div>

//           {/* Text content */}
//           <div style={{ flex: 1 }}>
//             <p
//               style={{
//                 color: "#4F1985",
//                 fontWeight: "600",
//                 fontSize: "1.1rem",
//                 marginBottom: "12px",
//                 letterSpacing: "1px",
//               }}
//             >
//               PROTEIN ENGINEERING
//             </p>
//             <h2
//               style={{
//                 fontSize: "2rem",
//                 margin: "0 0 20px 0",
//                 fontWeight: "400",
//                 color: "#222",
//                 lineHeight: "1.2",
//               }}
//             >
//               Revolutionizing Biotech with AI-Powered Protein Design
//             </h2>
//             <p
//               style={{
//                 fontSize: "1.1rem",
//                 lineHeight: "1.8",
//                 color: "#555",
//                 maxWidth: "600px",
//                 textAlign: 'justify'
//               }}
//             >
//               Our platform leverages cutting-edge artificial intelligence to accelerate protein engineering, enabling researchers to design novel enzymes, therapeutics, and biomaterials with unprecedented speed and precision. By combining deep learning with biophysical modeling, we're transforming how proteins are designed and optimized.
//             </p>
//           </div>
//         </div>

//         {/* Inline responsive styles */}
//         <style>
//           {`
//             @media (max-width: 1024px) {
//               section > div:nth-child(2) {
//                 max-width: 85% !important;
//                 padding: 50px !important;
//                 gap: 40px !important;
//               }
//             }
//             @media (max-width: 768px) {
//               section > div:nth-child(2) {
//                 flex-direction: column !important;
//                 max-width: 80% !important;
//                 padding: 40px 20px !important;
//                 gap: 30px !important;
//               }
//               section > div:nth-child(2) > div:first-child {
//                 flex: 0 0 auto !important;
//                 width: 80% !important;
//                 max-width: 200px !important;
//               }
//               section > div:nth-child(2) img {
//                 max-height: 150px !important;
//               }
//               section > div:nth-child(2) h2 {
//                 font-size: 2rem !important;
//               }
//             }
//             @media (max-width: 480px) {
//               section > div:nth-child(2) {
//                 max-width: 90% !important;
//                 padding: 30px 15px !important;
//                 gap: 20px !important;
//               }
//               section > div:nth-child(2) > div:first-child {
//                 width: 70% !important;
//                 max-width: 180px !important;
//               }
//               section > div:nth-child(2) img {
//                 max-height: 120px !important;
//               }
//               section > div:nth-child(2) h2 {
//                 font-size: 1.8rem !important;
//               }
//               section > div:nth-child(2) p {
//                 font-size: 1rem !important;
//               }
//             }
//           `}
//         </style>
//       </section>

//       {/* Stats Showcase Section - contained within main container */}
//       <div style={{ maxWidth: "1350px", margin: "0 auto", padding: "0 16px" }}>
//         <div
//           style={{
//             marginTop: "120px",
//             position: "relative",
//             borderRadius: "32px",
//             padding: "3px",
//             background: "linear-gradient(135deg, #4F1985, #6A1B9A, #4F1985)",
//           }}
//         >
//           {/* Inner Container */}
//           <div
//             style={{
//               backgroundColor: "#ffffff",
//               borderRadius: "28px",
//               overflow: "hidden",
//             }}
//           >
//             {/* Logo Carousel */}
//             <div
//               style={{
//                 borderBottom: "1px solid #e0e0e0",
//                 backgroundColor: "#ffffff",
//                 backdropFilter: "blur(4px)",
//                 overflow: "hidden",
//                 position: "relative",
//                 margin: "24px 0",
//                 padding: "8px 0",
//               }}
//             >
//               <div
//                 style={{
//                   display: "inline-flex",
//                   animation: "scroll 20s linear infinite",
//                   alignItems: "center",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 {[...logos, ...logos].map((logo, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       width: "160px",
//                       height: "80px",
//                       margin: "0 15px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       padding: "10px",
//                       backgroundColor: "white",
//                       borderRadius: "4px",
//                       boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//                     }}
//                   >
//                     <img
//                       src={logo}
//                       alt={`logo-${index}`}
//                       style={{
//                         maxWidth: "100%",
//                         maxHeight: "100%",
//                         width: "auto",
//                         height: "auto",
//                         objectFit: "contain",
//                         filter: "grayscale(20%)",
//                         transition: "all 0.3s ease",
//                       }}
//                       onMouseEnter={(e) => {
//                         e.target.style.filter = "grayscale(0%)";
//                         e.target.style.transform = "scale(1.05)";
//                       }}
//                       onMouseLeave={(e) => {
//                         e.target.style.filter = "grayscale(20%)";
//                         e.target.style.transform = "scale(1)";
//                       }}
//                     />
//                   </div>
//                 ))}
//               </div>
//               <style>
//                 {`
//                   @keyframes scroll {
//                     0% { transform: translateX(0); }
//                     100% { transform: translateX(-50%); }
//                   }
//                 `}
//               </style>
//             </div>

//             {/* Main Content with Stats */}
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: window.innerWidth < 1024 ? "column" : "row",
//                 gap: window.innerWidth < 768 ? "24px" : "64px",
//                 padding: window.innerWidth < 768 ? "24px" : "80px",
//                 maxWidth: "100%",
//                 overflowX: "hidden",
//                 boxSizing: "border-box",
//               }}
//             >
//               {/* Left Text */}
//               <div
//                 style={{
//                   flex: "1 1 auto",
//                   display: "flex",
//                   flexDirection: "column", 
//                   justifyContent: "center",
//                   padding: window.innerWidth < 768 ? "16px" : "64px",
//                   maxWidth: "100%",
//                 }}
//               >
//                 <h2
//                   style={{
//                     fontSize: window.innerWidth < 768 ? "1.25rem" : "2.6rem",
//                     fontWeight: 500,
//                     lineHeight: 1.25,
//                     marginBottom: window.innerWidth < 768 ? "19.2px" : "35.2px",
//                     color: "#333333",
//                   }}
//                 >
//                   No industry moves as fast as biotech.
//                 </h2>
//                 <p
//                   style={{
//                     fontSize: window.innerWidth < 768 ? "0.85rem" : "1.05rem",
//                     lineHeight: 1.6,
//                     color: "#666666",
//                     marginBottom: window.innerWidth < 768 ? "28.8px" : "48px",
//                   }}
//                 >
//                   The world runs on innovation, and for those who build biotechnology relied on by millions, it's a never-ending challenge to keep ahead of the market. Any industry can be disrupted almost overnight by a new discovery. Isn't it better to know that your research is the one making the breakthrough? Our platform helps you do just that.
//                 </p>
//                 <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                   <div
//                     style={{
//                       width: window.innerWidth < 640 ? "28px" : "36px",
//                       height: "2px",
//                       background: "linear-gradient(90deg, #4F1985, #6A1B9A)",
//                     }}
//                   />
//                   <span
//                     style={{
//                       textTransform: "uppercase",
//                       letterSpacing: "1px",
//                       fontWeight: 400,
//                       color: "#666666",
//                       fontSize: window.innerWidth < 640 ? "0.65rem" : "0.75rem",
//                     }}
//                   >
//                     Protein Design Innovation
//                   </span>
//                 </div>
//               </div>

//               {/* Right Stats */}
//               <div
//                 style={{
//                   flex: window.innerWidth < 1024 ? "1 1 auto" : "0 0 50%",
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "32px",
//                   maxWidth: "100%",
//                 }}
//               >
//                 {animatedStats.map((stat, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       padding: "32px",
//                       border: "1px solid #e0e0e0",
//                       borderRadius: "16px",
//                       backgroundColor: "#ffffff",
//                       boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
//                       transition: "transform 0.2s ease, box-shadow 0.2s ease"
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.transform = "translateY(-4px)";
//                       e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.transform = "translateY(0)";
//                       e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
//                     }}
//                   >
//                     <div
//                       style={{
//                         fontSize: "4rem",
//                         fontWeight: 700,
//                         color: statsData[index].color,
//                         lineHeight: 1,
//                         marginBottom: "16px",
//                       }}
//                     >
//                       {stat.value}{stat.suffix}
//                     </div>
//                     <p
//                       style={{
//                         fontSize: "1rem",
//                         color: "#666666",
//                         lineHeight: 1.5,
//                         margin: 0,
//                       }}
//                     >
//                       {statsData[index].description}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animation Styles */}
//       <style>
//         {`
//           @keyframes fadeInUp {
//             from {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
          
//           @keyframes scroll {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ProteinEngineeringShowcase;

import React, { useState, useEffect, useRef } from "react";

const PMShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section 
      ref={contentRef}
      style={{ 
        position: "relative", 
        marginBottom: "2rem",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transitionDelay: '0.2s'
      }}
    >
      {/* Purple header */}
      <div style={{ backgroundColor: "#4F1985", height: "300px" }} />

      {/* Content card */}
      <div
        style={{
          background: "#fff",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          padding: "60px",
          maxWidth: "950px",
          margin: "-100px auto 0",
          display: "flex",
          alignItems: "center",
          gap: "60px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          flexDirection: "row",
        }}
      >
        {/* Image container */}
        <div
          style={{
            flex: "0 0 300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Protein Engineering"
            style={{
              borderRadius: '20px',
              width: "420px",
              height: "300px",
            }}
          />
        </div>

        {/* Text content */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              color: "#4F1985",
              fontWeight: "600",
              fontSize: "1.1rem",
              marginBottom: "12px",
              letterSpacing: "1px",
            }}
          >
            PROTEIN ENGINEERING
          </p>
          <h2
            style={{
              fontSize: "2rem",
              margin: "0 0 20px 0",
              fontWeight: "400",
              color: "#222",
              lineHeight: "1.2",
            }}
          >
            Revolutionizing Biotech with AI-Powered Protein Design
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#555",
              maxWidth: "600px",
              textAlign: 'justify'
            }}
          >
            Our platform leverages cutting-edge artificial intelligence to accelerate protein engineering, enabling researchers to design novel enzymes, therapeutics, and biomaterials with unprecedented speed and precision. By combining deep learning with biophysical modeling, we're transforming how proteins are designed and optimized.
          </p>
        </div>
      </div>

      {/* Inline responsive styles */}
      <style>
        {`
          @media (max-width: 1024px) {
            section > div:nth-child(2) {
              max-width: 85% !important;
              padding: 50px !important;
              gap: 40px !important;
            }
          }
          @media (max-width: 768px) {
            section > div:nth-child(2) {
              flex-direction: column !important;
              max-width: 80% !important;
              padding: 40px 20px !important;
              gap: 30px !important;
            }
            section > div:nth-child(2) > div:first-child {
              flex: 0 0 auto !important;
              width: 80% !important;
              max-width: 200px !important;
            }
            section > div:nth-child(2) img {
              max-height: 150px !important;
            }
            section > div:nth-child(2) h2 {
              font-size: 2rem !important;
            }
          }
          @media (max-width: 480px) {
            section > div:nth-child(2) {
              max-width: 90% !important;
              padding: 30px 15px !important;
              gap: 20px !important;
            }
            section > div:nth-child(2) > div:first-child {
              width: 70% !important;
              max-width: 180px !important;
            }
            section > div:nth-child(2) img {
              max-height: 120px !important;
            }
            section > div:nth-child(2) h2 {
              font-size: 1.8rem !important;
            }
            section > div:nth-child(2) p {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default PMShowcase;