// import React from "react";

// const LabAutomationSection = ({
//   icon = "[]",
//   heading = "[]",
//   paragraphs = [],
//   onButtonClick = () => {},
//   rightContent = null,
// }) => {
//   const containerStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "4vw",
//     backgroundColor: "#fff",
//     fontFamily: "Arial, sans-serif",
//     borderRadius: "30px",
//     gap: "2rem",
//     flexWrap: "wrap", // ✅ Wrap on smaller screens
//   };

//   const leftColumnStyle = {
//     flex: "1 1 300px", // ✅ Flexible width
//     minWidth: "280px",
//   };

//   const iconStyle = {
//     fontSize: "1.5rem",
//     color: "#1621D6",
//     marginBottom: "1rem",
//   };

//   const headingStyle = {
//     fontSize: "2rem",
//     lineHeight: "1.2",
//     color: "#0A0A2C",
//     marginBottom: "1rem",
//   };

//   const paragraphStyle = {
//     fontSize: "1rem",
//     color: "#333",
//     marginBottom: "0.9rem",
//     lineHeight: "1.6",
//   };

//   const rightWrapperStyle = {
//     backgroundColor: "#F5F8FF",
//     padding: "1.5rem",
//     borderRadius: "20px",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//     flex: "1 1 300px", // ✅ Flexible width
//     minWidth: "280px",
//     display: "flex",
//     justifyContent: "center",
//   };

//   const cardStyle = {
//     borderRadius: "14px",
//     padding: "1rem",
//     width: "100%",
//     maxWidth: "400px",
//     minHeight: "200px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   // ✅ Responsive media queries
//   const responsiveContainer = {
//     ...containerStyle,
//     ...(window.innerWidth <= 768
//       ? {
//           padding: "20px",
//           borderRadius: "20px",
//           flexDirection: "column", // Stack on mobile
//           alignItems: "flex-start",
//         }
//       : {}),
//   };

//   return (
//     <div style={responsiveContainer}>
//       {/* Left column */}
//       <div style={leftColumnStyle}>
//         <div style={iconStyle}>{icon}</div>
//         <h2 style={headingStyle}>{heading}</h2>
//         {paragraphs.map((para, index) => (
//           <p
//             key={index}
//             style={{
//               ...paragraphStyle,
//               marginBottom: index === paragraphs.length - 1 ? "1.8rem" : "0.9rem",
//             }}
//           >
//             {para}
//           </p>
//         ))}
//       </div>

//       {/* Right column */}
//       <div style={rightWrapperStyle}>
//         <div style={cardStyle}>
//           {rightContent || (
//             <img
//               src="https://via.placeholder.com/300x200"
//               alt="Placeholder"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 borderRadius: "10px",
//               }}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LabAutomationSection;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const LabAutomationSection = ({
  icon = "🧪",
  heading = "Lab Automation Solutions",
  paragraphs = [
    "Our cutting-edge automation technology streamlines laboratory workflows, increasing efficiency and reducing human error.",
    "Customizable solutions tailored to your specific research needs."
  ],
  onButtonClick = () => {},
  rightContent = null,
  backgroundColor = "#fff",
  textColor = "#0A0A2C",
  accentColor = "#1621D6",
  cardBackground = "#F5F8FF"
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Styles
  const styles = {
    container: {
      display: "flex",
      alignItems: isMobile ? "flex-start" : "center",
      justifyContent: "space-between",
      padding: isMobile ? "2rem 1.5rem" : "4rem 6vw",
      backgroundColor: backgroundColor,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      borderRadius: isMobile ? "16px" : "24px",
      gap: isMobile ? "1.5rem" : "3rem",
      flexDirection: isMobile ? "column" : "row",
      maxWidth: "1400px",
      margin: "0 auto",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
      transition: "all 0.3s ease-out"
    },
    leftColumn: {
      flex: isMobile ? "1 1 100%" : "1 1 50%",
      minWidth: isMobile ? "100%" : "50%",
      padding: isMobile ? "0" : "0 1rem 0 0",
    },
    icon: {
      fontSize: isMobile ? "1.8rem" : "2.2rem",
      color: accentColor,
      marginBottom: "1rem",
      display: "inline-block",
      transition: "transform 0.2s ease"
    },
    heading: {
      fontSize: isMobile ? "1.8rem" : "2.4rem",
      lineHeight: "1.25",
      color: textColor,
      marginBottom: "1.2rem",
      fontWeight: "700",
      letterSpacing: "-0.5px"
    },
    paragraph: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      color: textColor === "#0A0A2C" ? "#333" : "rgba(255,255,255,0.9)",
      marginBottom: "1rem",
      lineHeight: "1.7",
      fontWeight: "400"
    },
    rightWrapper: {
      backgroundColor: cardBackground,
      padding: isMobile ? "1.2rem" : "2rem",
      borderRadius: isMobile ? "16px" : "20px",
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.05)",
      flex: isMobile ? "1 1 100%" : "1 1 45%",
      minWidth: isMobile ? "100%" : "45%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "all 0.3s ease"
    },
    card: {
      borderRadius: "12px",
      padding: "1rem",
      width: "100%",
      maxWidth: "500px",
      minHeight: isMobile ? "220px" : "280px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative",
      transition: "all 0.3s ease"
    },
    defaultImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "8px",
      transition: "transform 0.3s ease"
    },
    button: {
      backgroundColor: accentColor,
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      padding: "0.8rem 1.8rem",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "1rem",
      transition: "all 0.2s ease",
      boxShadow: `0 4px 12px ${accentColor}40`
    }
  };

  return (
    <div style={styles.container}>
      {/* Left column - Content */}
      <div style={styles.leftColumn}>
        <div 
          style={styles.icon}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          {icon}
        </div>
        <h2 style={styles.heading}>{heading}</h2>
        {paragraphs.map((para, index) => (
          <p
            key={index}
            style={{
              ...styles.paragraph,
              marginBottom: index === paragraphs.length - 1 ? "1.8rem" : "1rem",
            }}
          >
            {para}
          </p>
        ))}
       
      </div>

      {/* Right column - Visual content */}
      <div 
        style={styles.rightWrapper}
        onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
      >
        <div 
          style={styles.card}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.12)"}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)"}
        >
          {rightContent || (
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80"
              alt="Lab Automation"
              style={styles.defaultImage}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

LabAutomationSection.propTypes = {
  icon: PropTypes.string,
  heading: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  onButtonClick: PropTypes.func,
  rightContent: PropTypes.node,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  accentColor: PropTypes.string,
  cardBackground: PropTypes.string
};

export default LabAutomationSection;