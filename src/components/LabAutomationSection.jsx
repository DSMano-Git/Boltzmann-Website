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

const LabAutomationSection = ({
  icon = "[]",
  heading = "[]",
  paragraphs = [],
  onButtonClick = () => {},
  rightContent = null,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
  display: "flex",
  alignItems: isMobile ? "flex-start" : "center", // align top on mobile, center on desktop
  justifyContent: "space-between",
  padding: isMobile ? "20px" : "4vw",
  backgroundColor: "#fff",
  fontFamily: "Inter, sans-serif",
  borderRadius: isMobile ? "20px" : "30px",
  gap: isMobile ? "1rem" : "2rem",
  flexWrap: isMobile ? "wrap" : "nowrap", // only wrap on mobile
  flexDirection: isMobile ? "column" : "row",
  maxWidth: "1400px",
  margin: "0 auto",
};

  const leftColumnStyle = {
    flex: isMobile ? "1 1 100%" : "1 1 300px",
    minWidth: isMobile ? "100%" : "280px",
    padding: isMobile ? "0" : "0 1rem 0 0",
  };

  const iconStyle = {
    fontSize: isMobile ? "1.2rem" : "1.5rem",
    color: "#1621D6",
    marginBottom: "0.8rem",
  };

  const headingStyle = {
     fontFamily: "Inter, sans-serif",
    fontSize: isMobile ? "1.5rem" : "2rem",
    lineHeight: "1.3",
    color: "#0A0A2C",
    marginBottom: "0.8rem",
    fontWeight: "600",
  };

  const paragraphStyle = {
     fontFamily: "Inter, sans-serif",
    fontSize: isMobile ? "0.9rem" : "1rem",
    color: "#333",
    marginBottom: isMobile ? "0.7rem" : "0.9rem",
    lineHeight: "1.6",
  };

  const rightWrapperStyle = {
    backgroundColor: "#F5F8FF",
    padding: isMobile ? "1rem" : "1.5rem",
    borderRadius: isMobile ? "15px" : "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    flex: isMobile ? "1 1 100%" : "1 1 300px",
    minWidth: isMobile ? "100%" : "20px",
    display: "flex",
    justifyContent: "center",
  };

  const cardStyle = {
    borderRadius: isMobile ? "12px" : "14px",
    padding: isMobile ? "0.8rem" : "1rem",
    width: "100%",
    maxWidth: "400px",
    minHeight: isMobile ? "180px" : "200px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    
    <div style={containerStyle}>
      {/* Left column */}
      <div style={leftColumnStyle}>
        <div style={iconStyle}>{icon}</div>
        <h2 style={headingStyle}>{heading}</h2>
        {paragraphs.map((para, index) => (
          <p
            key={index}
            style={{
              ...paragraphStyle,
              marginBottom: index === paragraphs.length - 1 ? (isMobile ? "1.2rem" : "1.8rem") : paragraphStyle.marginBottom,
            }}
          >
            {para}
          </p>
        ))}
      </div>

      {/* Right column */}
      <div style={rightWrapperStyle}>
        <div style={cardStyle}>
          {rightContent || (
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80"
              alt="Lab Automation"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LabAutomationSection;