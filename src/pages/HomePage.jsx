


// import React, { useEffect, useRef, useState } from 'react';
// import Footer from '../components/Footer';
// import InsightCards from '../components/InsightsSection';
// import MainPageherocontent from '../pages/Mainpageherocontent';
// import LaptopSection from '../pages/LandingPage';
// import { motion } from 'framer-motion';
// import ExploreModulesSection from '../components/Modules';
// import LabAutomationSection from '../components/LabAutomationSection';
// import Images from '../components/HomeImages';

// export default function HomePage() {
//   // Refs for each section
//   const heroRef = useRef(null);
//   const insightsRef = useRef(null);
//   const labAutomationRef = useRef(null);
//   const modulesRef = useRef(null);
//   const laptopRef = useRef(null);
  
//   // Track which sections are in view
//   const [inView, setInView] = useState({
//     hero: true,
//     insights: false,
//     labAutomation: false,
//     modules: false,
//     laptop: false
//   });

//   // Underline animation progress
//   const [underlineProgress, setUnderlineProgress] = useState(0);

//   // Smooth scroll behavior
//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = 'smooth';
//     return () => (document.documentElement.style.scrollBehavior = 'auto');
//   }, []);

//   // Handle underline animation
//   useEffect(() => {
//     const handleScroll = () => {
//       if (modulesRef.current) {
//         const rect = modulesRef.current.getBoundingClientRect();
//         const viewportHeight = window.innerHeight;
//         const visibleRatio = Math.min(1, Math.max(0, (viewportHeight - rect.top) / viewportHeight));
//         setUnderlineProgress(visibleRatio);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Intersection observers for scroll-triggered animations
//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.15,
//       rootMargin: '0px 0px -50px 0px'
//     };

//     const observers = [];

//     const createObserver = (ref, key) => {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setInView(prev => ({ ...prev, [key]: true }));
//           }
//         },
//         observerOptions
//       );
//       if (ref.current) {
//         observer.observe(ref.current);
//         observers.push(observer);
//       }
//     };

//     createObserver(insightsRef, 'insights');
//     createObserver(labAutomationRef, 'labAutomation');
//     createObserver(modulesRef, 'modules');
//     createObserver(laptopRef, 'laptop');

//     return () => observers.forEach(observer => observer.disconnect());
//   }, []);

//   // Animation variants
//   const fadeUp = {
//     hidden: { y: 40, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.25, 0.1, 0.25, 1]
//       }
//     }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: 'beforeChildren',
//         staggerChildren: 0.15,
//         delayChildren: 0.2
//       }
//     }
//   };

//   return (
//     <div style={{ 
//       minHeight: '100vh', 
//       overflowX: 'hidden',
//       display: 'flex',
//       flexDirection: 'column'
//     }}>
//       <main style={{ flex: 1 }}>
//         {/* Hero Section */}
//         <div ref={heroRef}>
//           <MainPageherocontent />
//         </div>

//         {/* Images Section */}
//         <Images />

//         {/* Insights Section */}
//         <div ref={insightsRef}>
//           <InsightCards />
          
//           <h2 style={{ 
//             fontFamily: "'Inter', sans-serif", 
//             fontSize: '42px', 
//             fontWeight: '200', 
//             color: '#111827',
//             margin: 0,
//             padding: 0
//           }}>
//             Why teams choose Boltzmann Suite
//           </h2>
//         </div>

//         {/* Lab Automation Sections */}
//         <div ref={labAutomationRef}>
//           <LabAutomationSection
//             icon="⚛️"
//             heading="Gen AI for Scientific Precision"
//             paragraphs={[
//               'Unifies all stages of the discovery lifecycle.',
//               'Connects molecular generation to synthesis and execution.',
//               'Automates workflows with real-time data exchange.',
//             ]}
//           />
          
//           <LabAutomationSection
//             icon="🧬"
//             heading="Integrated LIMS with customizable APIs and CLI-first workflows for seamless operations."
//             paragraphs={[
//               'Unifies all stages of the discovery lifecycle.',
//               'Connects molecular generation to synthesis and execution.',
//               'Automates workflows with real-time data exchange.',
//             ]}
//           />
//         </div>

//         {/* Modules Section */}
//         <div ref={modulesRef} style={{ position: 'relative' }}>
//           <div style={{ 
//             maxWidth: '1400px', 
//             width: '100%',
//             margin: '0 auto',
//             boxSizing: 'border-box'
//           }}>
//             <ExploreModulesSection isVisible={inView.modules} />
//           </div>
//         </div>

//         {/* Laptop Section */}
//         <motion.div
//           ref={laptopRef}
//           initial={{ opacity: 0, y: 60 }}
//           animate={inView.laptop ? { 
//             opacity: 1, 
//             y: 0,
//             transition: {
//               duration: 0.8,
//               ease: [0.25, 0.1, 0.25, 1],
//               delay: 0.2
//             }
//           } : {}}
//           style={{ 
//             width: '100%', 
//             padding: '100px 0',
//             boxSizing: 'border-box'
//           }}
//         >
//           <div style={{ 
//             maxWidth: '1400px',
//             margin: '0 auto'
//           }}>
//             <LaptopSection isOpen={inView.laptop} />
//           </div>
//         </motion.div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }


import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import InsightCards from '../components/InsightsSection';
import MainPageherocontent from '../pages/Mainpageherocontent';
import LaptopSection from '../pages/LandingPage';
import { motion } from 'framer-motion';
import ExploreModulesSection from '../components/Modules';
import LabAutomationSection from '../components/LabAutomationSection';
import Images from '../components/HomeImages';

export default function HomePage() {
  // Refs for each section
  const heroRef = useRef(null);
  const imagesRef = useRef(null);
  const insightsRef = useRef(null);
  const whyTeamsRef = useRef(null);
  const labAutomation1Ref = useRef(null);
  const labAutomation2Ref = useRef(null);
  const modulesRef = useRef(null);
  const laptopRef = useRef(null);
  const footerRef = useRef(null);
  
  // Track which sections are visible
  const [visibleSections, setVisibleSections] = useState({
    hero: true, // Always visible initially
    images: true,
    insights: true,
    whyTeams: false,
    labAutomation1: false,
    labAutomation2: false,
    modules: false,
    laptop: false,
    footer: false
  });

  // Setup intersection observers
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Only trigger when 30% of section is visible
      rootMargin: '0px 0px -20px 0px' // Small margin to ensure section is clearly visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const sectionName = entry.target.getAttribute('data-section');
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setVisibleSections(prev => ({
            ...prev,
            [sectionName]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections except hero
    const sections = [
      { ref: imagesRef, name: 'images' },
      { ref: insightsRef, name: 'insights' },
      { ref: whyTeamsRef, name: 'whyTeams' },
      { ref: labAutomation1Ref, name: 'labAutomation1' },
      { ref: labAutomation2Ref, name: 'labAutomation2' },
      { ref: modulesRef, name: 'modules' },
      { ref: laptopRef, name: 'laptop' },
      { ref: footerRef, name: 'footer' }
    ];

    sections.forEach(({ ref, name }) => {
      if (ref.current) {
        ref.current.setAttribute('data-section', name);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Simple animation variants
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInLeft = {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight = {
    hidden: { 
      opacity: 0, 
      x: 30 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <main style={{ flex: 1 }}>
        {/* Hero Section - Always visible, no animation wrapper */}
        <div ref={heroRef}>
          <MainPageherocontent />
        </div>

        {/* Images Section */}
       
          <Images />
       

        {/* Insights Section */}
       
          <InsightCards />
      

        {/* Why Teams Choose Section */}
        
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
            Why teams choose Boltzmann AI Discovery Suite

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
     

        {/* Lab Automation Section 1 */}
        <motion.div
          ref={labAutomation1Ref}
          initial="hidden"
          animate={visibleSections.labAutomation1 ? "visible" : "hidden"}
          variants={fadeInLeft}
          style={{ marginBottom: '80px' }}
        >
          <LabAutomationSection
            
            heading="Gen AI for Scientific Precision"
            paragraphs={[
              'Unifies all stages of the discovery lifecycle.',
              'Connects molecular generation to synthesis and execution.',
              'Automates workflows with real-time data exchange.',
            ]}
          />
        </motion.div>
        
        {/* Lab Automation Section 2 */}
        <motion.div
          ref={labAutomation2Ref}
          initial="hidden"
          animate={visibleSections.labAutomation2 ? "visible" : "hidden"}
          variants={fadeInRight}
      
        >
          <LabAutomationSection
            
            heading="Integrated LIMS with customizable APIs and CLI-first workflows for seamless operations."
            paragraphs={[
              'Unifies all stages of the discovery lifecycle.',
              'Connects molecular generation to synthesis and execution.',
              'Automates workflows with real-time data exchange.',
            ]}
          />
        </motion.div>

        {/* Modules Section */}
        <motion.div 
          ref={modulesRef} 
          initial="hidden"
          animate={visibleSections.modules ? "visible" : "hidden"}
          variants={fadeInUp}
          style={{ 
            position: 'relative',
            
          }}
        >
          <div style={{ 
            maxWidth: '1400px', 
            width: '100%',
            margin: '0 auto',
            boxSizing: 'border-box'
          }}>
            <ExploreModulesSection isVisible={visibleSections.modules} />
          </div>
        </motion.div>

        {/* Laptop Section */}
        <motion.div
          ref={laptopRef}
          initial="hidden"
          animate={visibleSections.laptop ? "visible" : "hidden"}
          variants={fadeInUp}
          style={{ 
            width: '100%', 
            padding: '100px 0',
            boxSizing: 'border-box'
          }}
        >
          <div style={{ 
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <LaptopSection isOpen={visibleSections.laptop} />
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.div
        ref={footerRef}
        initial="hidden"
        animate={visibleSections.footer ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <Footer />
      </motion.div>
    </div>
  );
}