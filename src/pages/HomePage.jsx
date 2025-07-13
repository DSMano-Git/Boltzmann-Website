// import React, { useEffect, useRef, useState } from 'react';
// import Footer from '../components/Footer';
// import InsightCards from '../components/InsightsSection';
// import MainPageherocontent from '../pages/Mainpageherocontent';
// import LaptopSection from '../pages/LandingPage';
// import { motion } from 'framer-motion';
// import ExploreModulesSection from '../components/Modules';

// export default function HomePage() {
//   const insightSectionRef = useRef(null);
//   const laptopSectionRef = useRef(null);
//   const [isLaptopVisible, setIsLaptopVisible] = useState(false);

//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = 'smooth';
//     return () => {
//       document.documentElement.style.scrollBehavior = 'auto';
//     };
//   }, []);

//   const scrollToInsights = () => {
//     insightSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsLaptopVisible(true);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     if (laptopSectionRef.current) {
//       observer.observe(laptopSectionRef.current);
//     }

//     return () => {
//       if (laptopSectionRef.current) {
//         observer.unobserve(laptopSectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div style={{ 
//       display: 'flex', 
//       flexDirection: 'column', 
//       minHeight: '100vh',
//       overflowX: 'hidden',
//       width: '100%'
//     }}>
//       <main style={{ 
//         flex: 1, 
//         width: '100%',
//         maxWidth: '100vw',
//       }}>
//         {/* HERO */}
//         <MainPageherocontent onScrollDown={scrollToInsights} />

//         {/* INSIGHTS & MODULES */}
//         <div 
//           ref={insightSectionRef} 
//           style={{ 
//             margin: '0 auto', 
//             width: '100%',
//             maxWidth: '100vw',
//             padding: '0 5%',
//             boxSizing: 'border-box'
//           }}
//         >
//           <InsightCards />
//           <div style={{ 
//             margin: '80px 0',
//             display: 'flex',
//             justifyContent: 'center',
//             width: '100%'
//           }}>
//             <div style={{ maxWidth: '1440px', width: '100%' }}>
//               <ExploreModulesSection />
//             </div>
//           </div>
//         </div>

//         {/* LAPTOP SECTION - SLIDE IN */}
//         <motion.div
//           ref={laptopSectionRef}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isLaptopVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1 }}
//           style={{
//             width: '100%',
//             boxSizing: 'border-box',
//             display: 'flex',
//             justifyContent: 'center',
//           }}
//         >
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'flex-start',
//               width: '100%',
//               maxWidth: '1400px',
//               gap: '60px',
//             }}
//           >
//             <LaptopSection isOpen={isLaptopVisible} />
//           </div>
//         </motion.div>
//       </main>

//       <Footer />
//     </div>
//   );
// // }
// import React, { useEffect, useRef, useState } from 'react';
// import Footer from '../components/Footer';
// import InsightCards from '../components/InsightsSection';
// import MainPageherocontent from '../pages/Mainpageherocontent';
// import LaptopSection from '../pages/LandingPage';
// import { motion, useAnimation } from 'framer-motion';
// import ExploreModulesSection from '../components/Modules';

// export default function HomePage() {
//   const insightSectionRef = useRef(null);
//   const laptopSectionRef = useRef(null);
//   const modulesSectionRef = useRef(null);
//   const [isLaptopVisible, setIsLaptopVisible] = useState(false);
//   const [isModulesVisible, setIsModulesVisible] = useState(false);
//   const controls = useAnimation();

//   // State for underline animation
//   const [underlineProgress, setUnderlineProgress] = useState(0);

//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = 'smooth';
//     return () => {
//       document.documentElement.style.scrollBehavior = 'auto';
//     };
//   }, []);

//   const scrollToInsights = () => {
//     insightSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (modulesSectionRef.current) {
//         const rect = modulesSectionRef.current.getBoundingClientRect();
//         const viewportHeight = window.innerHeight;
        
//         // Calculate how much of the section is visible (0 to 1)
//         const visibleRatio = Math.min(
//           1,
//           Math.max(0, (viewportHeight - rect.top) / viewportHeight)
//         );
        
//         setUnderlineProgress(visibleRatio);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const observers = [];
    
//     const laptopObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsLaptopVisible(true);
//             controls.start("visible");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const modulesObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsModulesVisible(true);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (laptopSectionRef.current) {
//       laptopObserver.observe(laptopSectionRef.current);
//       observers.push(laptopObserver);
//     }

//     if (modulesSectionRef.current) {
//       modulesObserver.observe(modulesSectionRef.current);
//       observers.push(modulesObserver);
//     }

//     return () => {
//       observers.forEach(observer => {
//         observer.disconnect();
//       });
//     };
//   }, [controls]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <div style={{ 
//       display: 'flex', 
//       flexDirection: 'column', 
//       minHeight: '100vh',
//       overflowX: 'hidden',
//       width: '100%'
//     }}>
//       <main style={{ 
//         flex: 1, 
//         width: '100%',
//         maxWidth: '100vw',
//       }}>
//         {/* HERO */}
//         <MainPageherocontent onScrollDown={scrollToInsights} />

//         {/* INSIGHTS & MODULES */}
//         <motion.div 
//           ref={insightSectionRef}
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           style={{ 
//             margin: '0 auto', 
//             width: '100%',
//             maxWidth: '100vw',
//             padding: '80px 5%',
//             boxSizing: 'border-box'
//           }}
//         >
//           <motion.div variants={itemVariants}>
//             <InsightCards />
//           </motion.div>
          
//           <motion.div 
//             ref={modulesSectionRef}
//             variants={itemVariants}
//             style={{ 
//               margin: '-30px 0 0',
//               display: 'flex',
//               justifyContent: 'center',
//               width: '100%',
//               position: 'relative'
//             }}
//           >
//             {/* Underline animation container */}
//             <div style={{
//               position: 'absolute',
//               bottom: -10,
//               left: 0,
//               width: '100%',
//               height: 2,
            
//               overflow: 'hidden'
//             }}>
//               <motion.div 
//                 style={{
//                   height: '100%',
                  
//                   width: '100%',
//                   transformOrigin: 'left center'
//                 }}
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: underlineProgress }}
//                 transition={{ duration: 0.3, ease: 'easeOut' }}
//               />
//             </div>
            
//             <div style={{ maxWidth: '1440px', width: '100%' }}>
//               <ExploreModulesSection isVisible={isModulesVisible} />
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* LAPTOP SECTION */}
//         <motion.div
//           ref={laptopSectionRef}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isLaptopVisible ? { 
//             opacity: 1, 
//             y: 0,
//             transition: { 
//               type: "spring", 
//               damping: 20, 
//               stiffness: 100,
//               delay: 0.2
//             } 
//           } : {}}
//           style={{
//             width: '100%',
//             boxSizing: 'border-box',
//             display: 'flex',
//             justifyContent: 'center',
//             padding: '80px 5%',
//           }}
//         >
//           <div style={{
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'center',
//             alignItems: 'flex-start',
//             width: '100%',
//             maxWidth: '1400px',
//           }}>
//             <LaptopSection isOpen={isLaptopVisible} />
//           </div>
//         </motion.div>
//       </main>

//       <Footer />
//     </div>
//   );
// }
// }
import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import InsightCards from '../components/InsightsSection';
import MainPageherocontent from '../pages/Mainpageherocontent';
import LaptopSection from '../pages/LandingPage';
import { motion, useAnimation } from 'framer-motion';
import ExploreModulesSection from '../components/Modules';

export default function HomePage() {
  const insightSectionRef = useRef(null);
  const laptopSectionRef = useRef(null);
  const modulesSectionRef = useRef(null);
  const [isLaptopVisible, setIsLaptopVisible] = useState(false);
  const [isModulesVisible, setIsModulesVisible] = useState(false);
  const controls = useAnimation();

  // State for underline animation
  const [underlineProgress, setUnderlineProgress] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollToInsights = () => {
    insightSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (modulesSectionRef.current) {
        const rect = modulesSectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate how much of the section is visible (0 to 1)
        const visibleRatio = Math.min(
          1,
          Math.max(0, (viewportHeight - rect.top) / viewportHeight)
        );
        
        setUnderlineProgress(visibleRatio);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    
    const laptopObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLaptopVisible(true);
            controls.start("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const modulesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsModulesVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (laptopSectionRef.current) {
      laptopObserver.observe(laptopSectionRef.current);
      observers.push(laptopObserver);
    }

    if (modulesSectionRef.current) {
      modulesObserver.observe(modulesSectionRef.current);
      observers.push(modulesObserver);
    }

    return () => {
      observers.forEach(observer => {
        observer.disconnect();
      });
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      overflowX: 'hidden',
      width: '100%'
    }}>
      <main style={{ 
        flex: 1, 
        width: '100%',
        maxWidth: '100vw',
      }}>
        {/* HERO */}
        <MainPageherocontent onScrollDown={scrollToInsights} />

        {/* INSIGHTS & MODULES */}
        <motion.div 
          ref={insightSectionRef}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ 
            margin: '-50px auto', 
            width: '100%',
            maxWidth: '100vw',
            padding: '10px 5%',
            boxSizing: 'border-box'
          }}
        >
          <motion.div variants={itemVariants}>
            <InsightCards />
          </motion.div>
          
          <motion.div 
            ref={modulesSectionRef}
            variants={itemVariants}
            style={{ 
              margin: '-30px 0 0',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              position: 'relative'
            }}
          >
            {/* Underline animation container */}
            <div style={{
              position: 'absolute',
              bottom: -10,
              left: 0,
              width: '100%',
              height: 2,
            
              overflow: 'hidden'
            }}>
              <motion.div 
                style={{
                  height: '100%',
                  
                  width: '100%',
                  transformOrigin: 'left center'
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: underlineProgress }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
            
            <div style={{ maxWidth: '1440px', width: '100%' }}>
              <ExploreModulesSection isVisible={isModulesVisible} />
            </div>
          </motion.div>
        </motion.div>

        {/* LAPTOP SECTION */}
        <motion.div
          ref={laptopSectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isLaptopVisible ? { 
            opacity: 1, 
            y: 0,
            transition: { 
              type: "spring", 
              damping: 20, 
              stiffness: 100,
              delay: 0.2
            } 
          } : {}}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            padding: '80px 5%',
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '100%',
            maxWidth: '1400px',
          }}>
            <LaptopSection isOpen={isLaptopVisible} />
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}