// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import MacBookComponent from '../components/Laptopanimation';

// export default function LaptopSection({ isOpen }) {
//   return (
//     <div
//       style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '60px 20px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         boxSizing: 'border-box',
//       }}
//     >
//       {/* Main Heading on Top */}
//       <h2
//         style={{
//           fontSize: '3rem',
//           fontWeight: 700,
//           textAlign: 'center',
//           marginBottom: '6rem',
//           color: '#0D1B3F',
//           position: 'relative',
//           display: 'inline-block',
//         }}
//       >
//         Explore Our Technology
//         <span
//           style={{
//             position: 'absolute',
//             bottom: '-12px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             width: '120px',
//             height: '4px',
//             background: 'linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8))',
//             borderRadius: '2px',
//           }}
//         />
//       </h2>

//       {/* Laptop and Text Side by Side */}
//       <AnimatePresence>
//         {isOpen && (
//           <div
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               width: '100%',
//               flexWrap: 'wrap',
//               gap: '40px',
//             }}
//           >
//             <motion.div
//               initial={{ opacity: 0, x: -100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1 }}
//               style={{
//                 flex: 1,
//                 minWidth: '300px',
//                 display: 'flex',
//                 justifyContent: 'center',
//               }}
//             >
//               <MacBookComponent isOpen={isOpen} />
//             </motion.div>

//            <motion.div
//   initial={{ opacity: 0, x: 100 }}
//   animate={{ opacity: 1, x: 0 }}
//   exit={{ opacity: 0, x: 100 }}
//   transition={{ duration: 1 }}
//   style={{
//     flex: 1,
//     minWidth: '300px',
//     maxWidth: '500px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     marginTop: '-13rem',
//   }}
// >
//   <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#111827' }}>
//     Discover Our Technology
//   </h3>
//   <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4B5563', marginBottom: '2rem' }}>
//     This is where you can put descriptive text about your platform,
//     how it transforms workflows, or any sales message you want. It
//     slides in from the right while the MacBook slides in from the
//     left.
//   </p>
  
//   <div style={{
//     display: 'flex',
//     gap: '16px',
//     flexWrap: 'wrap'
//   }}>
//     {/* <button
//       style={{
//         backgroundColor: '#4F1985',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '50px',
//         padding: '12px 28px',
//         fontSize: '1rem',
//         cursor: 'pointer',
//         transition: 'background 0.3s ease',
//       }}
//       onMouseOver={(e) => e.target.style.backgroundColor = '#3c1269'}
//       onMouseOut={(e) => e.target.style.backgroundColor = '#4F1985'}
//     >
//       Learn More
//     </button>
    
//     <button
//       style={{
//         backgroundColor: '#4F1985',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '50px',
//         padding: '12px 28px',
//         fontSize: '1rem',
//         cursor: 'pointer',
//         transition: 'background 0.3s ease',
//       }}
//       onMouseOver={(e) => e.target.style.backgroundColor = '#3c1269'}
//       onMouseOut={(e) => e.target.style.backgroundColor = '#4F1985'}
//     >
//       Request Demo
//     </button> */}
//   </div>
// </motion.div>

//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import MacBookComponent from '../components/Laptopanimation';

// export default function LaptopSection({ isOpen }) {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const isMobile = windowWidth < 768;

//   return (
//     <div
//       style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '60px 20px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         boxSizing: 'border-box',
//       }}
//     >
//       <h2
//         style={{
//             fontFamily: "'Inter', sans-serif",
//             fontSize: "48px",
//             fontWeight: "200",
//           textAlign: 'center',
//           marginBottom: '6rem',
//           color: '#0D1B3F',
//           position: 'relative',
//           display: 'inline-block',
//           marginTop: '-6rem',
//         }}
//       >
//         Explore Our Technology
//         <span
//           style={{
//             position: 'absolute',
//             bottom: '-12px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             width: '120px',
//             height: '4px',
//             background: 'linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8))',
//             borderRadius: '2px',
//           }}
//         />
//       </h2>

//       <AnimatePresence>
//         {isOpen && (
//           <div
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               width: '100%',
//               flexWrap: 'wrap',
//               gap: '40px',
//             }}
//           >
//             {/* Laptop */}
//             <motion.div
//               initial={{ opacity: 0, x: -100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1 }}
//               style={{
//                 flex: 1,
//                 minWidth: '300px',
//                 display: 'flex',
//                 justifyContent: 'center',
//               }}
//             >
//               <MacBookComponent isOpen={isOpen} />
//             </motion.div>

//             {/* Text & Buttons */}
//             <motion.div
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 100 }}
//               transition={{ duration: 1 }}
//               style={{
//                 flex: 1,
//                 minWidth: '300px',
//                 maxWidth: '500px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 marginTop: isMobile ? '0.2rem' : '-14rem',
//                 padding: isMobile ? '0 1rem' : '0',
//               }}
//             >
//               <h3
//                 style={{
//                   fontSize: isMobile ? '1.5rem' : '2rem',
//                   marginBottom: '1rem',
//                   color: '#111827',
//                   textAlign: isMobile ? 'center' : 'left',
//                 }}
//               >
//                 Discover Our Technology
//               </h3>
//               <p
//                 style={{
//                   fontSize: '1rem',
//                   lineHeight: 1.6,
//                   color: '#4B5563',
//                   marginBottom: '2rem',
//                   textAlign: isMobile ? 'center' : 'left',
//                 }}
//               >
//                 This is where you can put descriptive text about your platform,
//                 how it transforms workflows, or any sales message you want. It
//                 slides in from the right while the MacBook slides in from the
//                 left.
//               </p>

//               <div
//                 style={{
//                   display: 'flex',
//                   gap: '16px',
//                   flexWrap: 'wrap',
//                   justifyContent: isMobile ? 'center' : 'flex-start',
//                 }}
//               >
//                 {['Learn More', 'Request Demo'].map((text) => (
//                   <button
//                     key={text}
//                     style={{
//                       backgroundColor: '#4F1985',
//                       color: '#fff',
//                       border: 'none',
//                       borderRadius: '50px',
//                       padding: '12px 28px',
//                       fontSize: '1rem',
//                       cursor: 'pointer',
//                       transition: 'background 0.3s ease',
//                       minWidth: isMobile ? '50%' : 'auto',
//                       display: 'block'
//                     }}
//                     onMouseOver={(e) => (e.target.style.backgroundColor = '#3c1269')}
//                     onMouseOut={(e) => (e.target.style.backgroundColor = '#4F1985')}
//                   >
//                     {text}
//                   </button>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import MacBookComponent from '../components/Laptopanimation';

// export default function LaptopSection({ isOpen }) {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const isMobile = windowWidth < 768;

//   return (
//     <div
//       style={{
//         maxWidth: '1200px',
//         position: 'relative',
//         top: '-13%',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         boxSizing: 'border-box',
//       }}
//     >
//       {/* Section Title */}
//       <h2
//         style={{
//           fontFamily: "'Inter', sans-serif",
//           fontSize: isMobile ? '2rem' : '3rem',
//           fontWeight: "200",
//           textAlign: 'center',
//           margin: '0 0 3rem 0', // only bottom margin for spacing
//           color: '#0D1B3F',
//           position: 'relative',
//           display: 'inline-block',
//         }}
//       >
//         Explore Our Technology
//         <span
//           style={{
//             position: 'absolute',
//             bottom: '-12px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             width: '120px',
//             height: '4px',
//             background: 'linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8))',
//             borderRadius: '2px',
//           }}
//         />
//       </h2>

//       <AnimatePresence>
//         {isOpen && (
//           <div
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               width: '100%',
//               flexWrap: 'wrap',
//               gap: isMobile ? '30px' : '60px', // smaller gap on mobile
//             }}
//           >
//             {/* Laptop */}
//             <motion.div
//               initial={{ opacity: 0, x: -100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1 }}
//               style={{
//                 flex: 1,
//                 minWidth: '300px',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 marginTop: '6%'
//               }}
//             >
//               <MacBookComponent isOpen={isOpen} />
//             </motion.div>

//             {/* Text & Buttons */}
//             <motion.div
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 100 }}
//               transition={{ duration: 1 }}
//               style={{
//                 flex: 1,
//                 minWidth: '300px',
//                 maxWidth: '500px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 padding: isMobile ? '0 1rem' : '0',
//               }}
//             >
//               <h3
//                 style={{
//                   fontSize: isMobile ? '1.5rem' : '2rem',
//                   marginBottom: '1rem',
//                   color: '#111827',
//                   textAlign: isMobile ? 'center' : 'left',
//                 }}
//               >
//                 Discover Our Technology
//               </h3>
//               <p
//                 style={{
//                   fontSize: '1rem',
//                   lineHeight: 1.6,
//                   color: '#4B5563',
//                   marginBottom: '2rem',
//                   textAlign: isMobile ? 'center' : 'left',
//                 }}
//               >
//                 This is where you can put descriptive text about your platform,
//                 how it transforms workflows, or any sales message you want. It
//                 slides in from the right while the MacBook slides in from the
//                 left.
//               </p>

//               <div
//                 style={{
//                   display: 'flex',
//                   gap: '16px',
//                   flexWrap: 'wrap',
//                   justifyContent: isMobile ? 'center' : 'flex-start',
//                 }}
//               >
//                 {['Learn More', 'Request Demo'].map((text) => (
//                   <button
//                     key={text}
//                     style={{
//                       backgroundColor: '#4F1985',
//                       color: '#fff',
//                       border: 'none',
//                       borderRadius: '50px',
//                       padding: '12px 28px',
//                       fontSize: '1rem',
//                       cursor: 'pointer',
//                       transition: 'background 0.3s ease',
//                       minWidth: isMobile ? '50%' : 'auto',
//                       display: 'block',
//                     }}
//                     onMouseOver={(e) => (e.target.style.backgroundColor = '#3c1269')}
//                     onMouseOut={(e) => (e.target.style.backgroundColor = '#4F1985')}
//                   >
//                     {text}
//                   </button>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MacBookComponent from '../components/Laptopanimation';

export default function LaptopSection({ isOpen }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive breakpoints
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const isLaptop = windowWidth >= 1024 && windowWidth < 1440;
  const isDesktop = windowWidth >= 1440;

  // Dynamic styles
  const containerStyle = {
    maxWidth: '1200px',
    width: '90%',
   
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    margin: '70px auto',
 
  };

  const sectionTitleStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: isMobile ? '1.8rem' : isTablet ? '2.5rem' : '3rem',
    
    textAlign: 'center',
    margin: '0 0 3rem 0',
    color: '#0D1B3F',
    position: 'relative',
    display: 'inline-block',
  };

  const underlineStyle = {
    position: 'absolute',
    bottom: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: isMobile ? '80px' : '120px',
    height: '4px',
    background:
      'linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8))',
    borderRadius: '2px',
  };

  const flexContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    gap: isMobile ? '20px' : isTablet ? '40px' : '60px',
  };

  const laptopStyle = {
    flex: '1 1 300px',
    minWidth: '280px',
    maxWidth: '600px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: isMobile ? '3%' : '6%',
  };

  const textStyle = {
    flex: '1 1 300px',
    minWidth: '280px',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: isMobile ? '0 1rem' : '0',
  };

  const headingStyle = {
    fontSize: isMobile ? '1.4rem' : isTablet ? '1.8rem' : '2rem',
    marginBottom: '1rem',
    color: '#111827',
    textAlign: isMobile ? 'center' : 'left',
  };

  const paragraphStyle = {
    fontSize: isMobile ? '0.95rem' : '1rem',
    lineHeight: 1.6,
    color: '#4B5563',
    marginBottom: '2rem',
    textAlign: isMobile ? 'center' : 'left',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    justifyContent: isMobile ? 'center' : 'flex-start',
  };

  const buttonStyle = {
    backgroundColor: '#4F1985',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    padding: '12px 28px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    minWidth: isMobile ? '45%' : 'auto',
    display: 'block',
  };

  return (
    <div style={containerStyle}>
      {/* Section Title */}
      <h2 style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontSize: '42px', 
            fontWeight: '200', 
            color: '#111827',
            margin: 0,
            padding: '20px',
            textAlign: 'center',
            fontWeight: 400,
            color: '#4F1985',
            fontSize: '2.5rem',
            fontFamily: 'timesnew'
          }}>
           Explore Our Technology

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

      <AnimatePresence>
        {isOpen && (
          <div style={flexContainerStyle}>
            {/* Laptop */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              style={laptopStyle}
            >
              <MacBookComponent isOpen={isOpen} />
            </motion.div>

            {/* Text & Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              style={textStyle}
            >
              <h3 style={headingStyle}>Discover Our Technology</h3>
              <p style={paragraphStyle}>
               We’d love to hear from you at Boltzmann Labs. Whether you have questions, partnership ideas, or need support, our team is here to help.
              </p>

              <div style={buttonContainerStyle}>
                {['Request Demo'].map((text) => (
                  <button
                    key={text}
                    style={buttonStyle}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = '#3c1269')
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = '#4F1985')
                    }
                    onClick={()=> window.location.href= '/contact'}
                  >
                    {text}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
