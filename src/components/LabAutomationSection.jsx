


// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// const LabAutomationSection = ({
//   heading = "Lab Automation Solutions",
//   paragraphs = [
//     "Our cutting-edge automation technology streamlines laboratory workflows, increasing efficiency and reducing human error.",
//     "Customizable solutions tailored to your specific research needs."
//   ],
//   onButtonClick = () => {},
//   rightContent = null,
//   backgroundColor = "#fff",
//   textColor = "#0A0A2C",
//   accentColor = "#1621D6",
//   cardBackground = "#F5F8FF"
// }) => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
    
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Styles
//   const styles = {
//     container: {
//       display: "flex",
//       alignItems: isMobile ? "flex-start" : "center",
//       justifyContent: "space-between",
//       padding: isMobile ? "2rem 1.5rem" : "3rem 5vw", // Reduced padding
//       backgroundColor: backgroundColor,
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//       borderRadius: isMobile ? "16px" : "20px", // Reduced border radius
//       gap: isMobile ? "1.5rem" : "2.5rem", // Reduced gap
//       flexDirection: isMobile ? "column" : "row",
//       maxWidth: "1200px", // Reduced from 1400px
//       margin: "0 auto",
//       boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)", // Reduced shadow
//       transition: "all 0.3s ease-out"
//     },
//     leftColumn: {
//       flex: isMobile ? "1 1 100%" : "1 1 50%",
//       minWidth: isMobile ? "100%" : "50%",
//       padding: isMobile ? "0" : "0 1rem 0 0",
//     },
//     heading: {
//       fontSize: isMobile ? "1.6rem" : "2rem", // Reduced font size
//       lineHeight: "1.25",
//       color: textColor,
//       marginBottom: "1rem", // Reduced margin
//       fontWeight: "700",
//       letterSpacing: "-0.5px"
//     },
//     paragraph: {
//       fontSize: isMobile ? "0.95rem" : "1rem", // Reduced font size
//       color: textColor === "#0A0A2C" ? "#333" : "rgba(255,255,255,0.9)",
//       marginBottom: "0.9rem", // Reduced margin
//       lineHeight: "1.6", // Reduced line height
//       fontWeight: "400"
//     },
//     rightWrapper: {
//       backgroundColor: cardBackground,
//       padding: isMobile ? "1rem" : "1.5rem", // Reduced padding
//       borderRadius: isMobile ? "14px" : "18px", // Reduced border radius
//       boxShadow: "0 5px 12px rgba(0, 0, 0, 0.04)", // Reduced shadow
//       flex: isMobile ? "1 1 100%" : "1 1 45%",
//       minWidth: isMobile ? "100%" : "45%",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       transition: "all 0.3s ease"
//     },
//     card: {
//       borderRadius: "10px", // Reduced border radius
//       padding: "0.8rem", // Reduced padding
//       width: "100%",
//       maxWidth: "450px", // Reduced max width
//       minHeight: isMobile ? "200px" : "250px", // Reduced height
//       boxShadow: "0 3px 10px rgba(0, 0, 0, 0.06)", // Reduced shadow
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       overflow: "hidden",
//       position: "relative",
//       transition: "all 0.3s ease"
//     },
//     defaultImage: {
//       width: "100%",
//       height: "100%",
//       objectFit: "cover",
//       borderRadius: "6px", // Reduced border radius
//       transition: "transform 0.3s ease"
//     },
//     button: {
//       backgroundColor: accentColor,
//       color: "#fff",
//       border: "none",
//       borderRadius: "6px", // Reduced border radius
//       padding: "0.7rem 1.5rem", // Reduced padding
//       fontSize: "0.95rem", // Reduced font size
//       fontWeight: "600",
//       cursor: "pointer",
//       marginTop: "0.8rem", // Reduced margin
//       transition: "all 0.2s ease",
//       boxShadow: `0 3px 10px ${accentColor}40` // Reduced shadow
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {/* Left column - Content */}
//       <div style={styles.leftColumn}>
//         <h2 style={styles.heading}>{heading}</h2>
//         {paragraphs.map((para, index) => (
//           <p
//             key={index}
//             style={{
//               ...styles.paragraph,
//               marginBottom: index === paragraphs.length - 1 ? "1.5rem" : "0.9rem", // Adjusted margin
//             }}
//           >
//             {para}
//           </p>
//         ))}
       
//       </div>

//       {/* Right column - Visual content */}
//       <div 
//         style={styles.rightWrapper}
//         onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"} // Reduced effect
//         onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
//       >
//         <div 
//           style={styles.card}
//           onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.1)"} // Reduced shadow
//           onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.06)"}
//         >
//           {rightContent || (
//             <img
//               src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80"
//               alt="Lab Automation"
//               style={styles.defaultImage}
//               onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"} // Reduced scale
//               onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// LabAutomationSection.propTypes = {
//   heading: PropTypes.string,
//   paragraphs: PropTypes.arrayOf(PropTypes.string),
//   onButtonClick: PropTypes.func,
//   rightContent: PropTypes.node,
//   backgroundColor: PropTypes.string,
//   textColor: PropTypes.string,
//   accentColor: PropTypes.string,
//   cardBackground: PropTypes.string
// };

// export default LabAutomationSection;



import React, { useState, useEffect, useRef } from "react";
import { Beaker, Microscope, ChevronLeft, ChevronRight } from "lucide-react";

const LabAutomationSection = ({
  backgroundColor = "#fff",
  textColor = "#0A0A2C",
  accentColor = "#1621D6",
  cardBackground = "#ffffff"
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const cardData = [
  {
    id: 1,
    heading: "Where Gen AI meets scientific precision.",
    description: `Our multi-agent system acts like a virtual R&D team—designing molecules, predicting properties, planning synthesis routes, and optimizing workflows in real-time. Each agent is trained to think like a domain expert, ensuring scientifically grounded outputs at every step.

With automation handling the heavy lifting, your team can focus on the insights that matter—innovation, validation, and breakthrough science.`,
    icon: <Beaker style={{ width: '24px', height: '24px' }} />,
    image: "./1_multiagentsystem.png"
  },
  {
    id: 2,
    heading: "Integrated LIMS. Customizable APIs. CLI-first workflows.",
    description: `Our platform unifies every stage of the discovery lifecycle—eliminating disconnected tools and fragmented data. From molecular generation to synthesis planning and execution, each step is seamlessly linked through automated workflows and real-time data exchange.    
`,
    icon: <Microscope style={{ width: '24px', height: '24px' }} />,
    image: "./2_endtoendlims.png"
  }
];



  const nextCard = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentCard((prev) => (prev + 1) % cardData.length);
        setTimeout(() => setIsAnimating(false), 400);
      }, 300);
    }
  };

  const prevCard = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentCard((prev) => (prev - 1 + cardData.length) % cardData.length);
        setTimeout(() => setIsAnimating(false), 400);
      }, 300);
    }
  };

  const goToCard = (index) => {
    if (!isAnimating && index !== currentCard) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentCard(index);
        setTimeout(() => setIsAnimating(false), 400);
      }, 300);
    }
  };

  // Intersection Observer Effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={sectionRef}
      style={{
        backgroundColor: backgroundColor,
        fontFamily: "times",
        padding: isMobile ? "1rem 0.5rem" : "1rem 1rem",
        minHeight: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
      
      

      {/* Cards Container */}
      <div style={{
        width: "100%",
        maxWidth: "1100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        position: "relative",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "all 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.4s"
      }}>
        
        {/* Single Card Display - Image Left, Content Right */}
        <div
          key={cardData[currentCard].id}
          style={{
            backgroundColor: cardBackground,
            borderRadius: "32px",
            padding: isMobile ? "1rem" : "2rem",
            width: "100%",
            maxWidth: isMobile ? "400px" : "1200px",
            height: isMobile ? "500px" : "450px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: isMobile ? "2rem" : "4rem",
            border: "1px solid #E5E7EB",
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
            cursor: "pointer",
            position: "relative",
            transform: isAnimating ? "scale(0.95) rotateX(5deg)" : "scale(1) rotateX(0deg)",
            opacity: isAnimating ? "0.3" : "1",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
            background: `linear-gradient(135deg, ${cardBackground} 0%, #ffffff 100%)`,
            backdropFilter: "blur(10px)",
            overflow: "hidden"
          }}
         
        >
          
          {/* Animated Background Pattern */}
          <div style={{
            position: "absolute",
            top: "-100%",
            right: "-100%",
            width: "300%",
            height: "300%",
            background: `conic-gradient(from 0deg, ${accentColor}08 0deg, transparent 90deg, ${accentColor}05 180deg, transparent 270deg)`,
            transform: isAnimating ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
            pointerEvents: "none",
            opacity: isAnimating ? "0.8" : "0.3"
          }} />
          
          {/* Left Image Section */}
          <div style={{
            width: isMobile ? "100%" : "500px",
            height: isMobile ? "250px" : "350px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transform: isAnimating ? "translateX(-50px) scale(0.9)" : "translateX(0) scale(1)",
            opacity: isAnimating ? "0.4" : "1",
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}>
            <div style={{
              width: "100%",
              height: "100%",
              
              margin: 'auto',
              display: "block",
              
              
              transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
         
            >
              <img
                src={cardData[currentCard].image}
                alt={cardData[currentCard].heading}
                style={{
                  width: "80%",
                  height: "100%",
              borderRadius: "20px",
              display: "block",
              margin: "auto",

                  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                  filter: isAnimating ? "blur(4px) brightness(0.7)" : "brightness(1.02) contrast(1.1) blur(0px)"
                }}
              />
              {/* Dynamic Image Overlay */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${accentColor}20 0%, transparent 60%, ${accentColor}10 100%)`,
                opacity: isAnimating ? "0.8" : "0",
                transition: "opacity 1s cubic-bezier(0.4, 0, 0.2, 1)",
                pointerEvents: "none"
              }} />
            </div>
          </div>

          {/* Right Content Section */}
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            padding: isMobile ? "0" : "2rem 0",
            transform: isAnimating ? "translateX(50px)" : "translateX(0)",
            opacity: isAnimating ? "0.2" : "1",
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s"
          }}>
            
            {/* Card Header */}
            <div style={{
              marginBottom: "2.5rem",
              position: "relative",
              zIndex: 2
            }}>
              <h3 style={{
                fontSize: isMobile ? "1.6rem" : "2.4rem",
                fontWeight: "600",
                color: textColor,
                lineHeight: "1.2",
                margin: "0",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isAnimating ? "translateY(20px)" : "translateY(0)",
                opacity: isAnimating ? "0" : "1"
              }}>
                {cardData[currentCard].heading}
              </h3>
            </div>

            {/* Card Description */}
            <p style={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              color: "#6B7280",
              lineHeight: "1.8",
              margin: "0",
              fontWeight: "400",
              position: "relative",
              zIndex: 2,
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
              transform: isAnimating ? "translateY(30px)" : "translateY(0)",
              opacity: isAnimating ? "0" : "1"
            }}>
              {cardData[currentCard].description}
            </p>
          </div>
        </div>
        
      </div>

      {/* Navigation Arrows */}
      <div style={{
        display: "flex",
        gap: "1.5rem",
        marginTop: "1.2rem",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s"
      }}>
        <button
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "#fff",
            border: "2px solid #E5E7EB",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: currentCard === 0 ? "not-allowed" : "pointer",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            opacity: currentCard === 0 ? "0.4" : "1",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
            transform: "translateX(0) scale(1)"
          }}
          onMouseEnter={(e) => {
            if (currentCard !== 0 && !isAnimating) {
              e.currentTarget.style.backgroundColor = textColor;
              e.currentTarget.style.borderColor = textColor;
              e.currentTarget.style.transform = "translateX(-8px) scale(1.1) rotate(-5deg)";
              e.currentTarget.style.boxShadow = "0 12px 35px rgba(0, 0, 0, 0.2)";
              const icon = e.currentTarget.querySelector('svg');
              if (icon) icon.style.color = "#fff";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#fff";
            e.currentTarget.style.borderColor = "#E5E7EB";
            e.currentTarget.style.transform = "translateX(0) scale(1) rotate(0deg)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)";
            const icon = e.currentTarget.querySelector('svg');
            if (icon) icon.style.color = textColor;
          }}
          onClick={prevCard}
          disabled={currentCard === 0 || isAnimating}
        >
          <ChevronLeft 
            style={{ 
              width: '28px', 
              height: '28px', 
              color: textColor,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            }} 
          />
        </button>
        
        <button
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "#fff",
            border: "2px solid #E5E7EB",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: currentCard === cardData.length - 1 ? "not-allowed" : "pointer",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            opacity: currentCard === cardData.length - 1 ? "0.4" : "1",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
            transform: "translateX(0) scale(1)"
          }}
          onMouseEnter={(e) => {
            if (currentCard !== cardData.length - 1 && !isAnimating) {
              e.currentTarget.style.backgroundColor = textColor;
              e.currentTarget.style.borderColor = textColor;
              e.currentTarget.style.transform = "translateX(8px) scale(1.1) rotate(5deg)";
              e.currentTarget.style.boxShadow = "0 12px 35px rgba(0, 0, 0, 0.2)";
              const icon = e.currentTarget.querySelector('svg');
              if (icon) icon.style.color = "#fff";
            }
          }}  
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#fff";
            e.currentTarget.style.borderColor = "#E5E7EB";
            e.currentTarget.style.transform = "translateX(0) scale(1) rotate(0deg)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)";
            const icon = e.currentTarget.querySelector('svg');
            if (icon) icon.style.color = textColor;
          }}
          onClick={nextCard}
          disabled={currentCard === cardData.length - 1 || isAnimating}
        >
          <ChevronRight 
            style={{ 
              width: '28px', 
              height: '28px', 
              color: textColor,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            }} 
          />
        </button>
      </div>

      {/* Enhanced Card Indicator Dots */}
      <div style={{
        display: "flex",
        gap: "1rem",
        marginTop: "1.2rem",
        alignItems: "center",
        justifyContent: "center",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 1.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s"
      }}>
        {cardData.map((_, index) => (
          <button
            key={index}
            style={{
              width: currentCard === index ? "40px" : "16px",
              height: "16px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: currentCard === index ? textColor : "#D1D5DB",
              cursor: "pointer",
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: currentCard === index ? "scale(1)" : "scale(0.7)",
              
              position: "relative",
              overflow: "hidden"
            }}
            onClick={() => goToCard(index)}
            onMouseEnter={(e) => {
              if (currentCard !== index && !isAnimating) {
                e.currentTarget.style.backgroundColor = "#9CA3AF";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (currentCard !== index) {
                e.currentTarget.style.backgroundColor = "#D1D5DB";
                e.currentTarget.style.transform = "scale(0.7)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
              }
            }}
          >
            {/* Active indicator glow */}
            {currentCard === index && (
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100%",
                height: "100%",
                background: `radial-gradient(circle, #4F1985 30 0%, transparent 70%)`,
                transform: "translate(-50%, -50%)",
                animation: "pulse 2s infinite ease-in-out",
                pointerEvents: "none"
              }} />
            )}
          </button>
        ))}
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        div::-webkit-scrollbar {
          height: 8px;
          width: 8px;
        }
        div::-webkit-scrollbar-track {
          background: transparent;
        }
        div::-webkit-scrollbar-thumb {
          background: #D1D5DB;
          border-radius: 4px;
          transition: background 0.3s ease;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: #9CA3AF;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes morphCard {
          0% {
            transform: scale(1) rotateX(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(0.95) rotateX(5deg);
            opacity: 0.3;
          }
          100% {
            transform: scale(1) rotateX(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default LabAutomationSection;