// import React, { useState, useEffect, useRef } from "react";
// import { Plus, Minus } from "lucide-react";

// export default function Oursuitetables() {
//   const [openIndex, setOpenIndex] = useState({});
//   const [isMobile, setIsMobile] = useState(false);
//   const [visibleSections, setVisibleSections] = useState({});
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     const checkScreen = () => setIsMobile(window.innerWidth <= 1024);
//     checkScreen();
//     window.addEventListener("resize", checkScreen);
//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const sectionIndex = parseInt(entry.target.dataset.section);
//             setVisibleSections(prev => ({
//               ...prev,
//               [sectionIndex]: true
//             }));
//           }
//         });
//       },
//       { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
//     );

//     sectionRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const toggleItem = (sectionIndex, itemIndex) => {
//     const key = `${sectionIndex}-${itemIndex}`;
//     setOpenIndex(prev => ({
//       ...prev,
//       [key]: prev[key] === itemIndex ? null : itemIndex
//     }));
//   };

//   const sections = [
//     {
//       title: "Biological Discovery & Target Identification",
//       image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//       items: [
//         {
//           title: "Multi-Omics Integration",
//           desc: "Integrate multi-omics data to uncover novel biological insights and mechanisms through comprehensive data fusion."
//         },
//         {
//           title: "LLM-Powered Knowledge Mining",
//           desc: "Use large language models to mine literature and map gene-disease relationships with unprecedented accuracy."
//         },
//         {
//           title: "Target & Biomarker Prioritization",
//           desc: "Identify high-confidence targets and biomarkers for experimental follow-up using advanced AI algorithms."
//         }
//       ]
//     },
//     {
//       title: "Molecular Design & Optimization",
//       image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//       items: [
//         {
//           title: "Generative Molecule Creation",
//           desc: "Design novel small molecules and biologics using cutting-edge generative AI models."
//         },
//         {
//           title: "Property Prediction",
//           desc: "Predict and optimize ADMET, binding affinity, and drug-like properties with machine learning."
//         },
//         {
//           title: "Active Learning Loops",
//           desc: "Continuously improve molecule design through experiment-informed feedback mechanisms."
//         }
//       ]
//     },
//     {
//       title: "Synthetic Route Planning & Feasibility",
//       image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//       items: [
//         {
//           title: "Green Retrosynthesis",
//           desc: "Generate sustainable synthetic routes using green chemistry constraints and environmental considerations."
//         },
//         {
//           title: "Experimental Feasibility Check",
//           desc: "Assess route feasibility with access to real-world reaction data and laboratory constraints."
//         },
//         {
//           title: "Route Scoring & Ranking",
//           desc: "Prioritize pathways by complexity, cost, and regulatory readiness for optimal selection."
//         }
//       ]
//     },
//     {
//       title: "Agrochemical & Environmental Research",
//       image: "https://images.unsplash.com/photo-1574263867128-a3b1c9f8d5a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//       items: [
//         {
//           title: "Safe Compound Discovery",
//           desc: "Identify effective, low-toxicity crop protection agents using advanced predictive modeling."
//         },
//         {
//           title: "Environmental Impact Prediction",
//           desc: "Simulate bioaccumulation, ecotoxicity, and persistence profiles for environmental safety."
//         },
//         {
//           title: "Regulatory Alignment",
//           desc: "Optimize for regulatory compliance and field-use safety standards across global markets."
//         }
//       ]
//     },
//     {
//       title: "Materials & Formulation Innovation",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//       items: [
//         {
//           title: "Material Design",
//           desc: "Generate and simulate novel materials, polymers, and composites with desired properties."
//         },
//         {
//           title: "Property Modeling",
//           desc: "Predict thermal stability, conductivity, solubility, and other critical material properties."
//         },
//         {
//           title: "Formulation Optimization",
//           desc: "Accelerate formulation workflows with AI-based compatibility and performance models."
//         }
//       ]
//     },
//     {
//       title: "Precision Medicine & Clinical Research",
//       image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//       items: [
//         {
//           title: "Data-Driven Personalization",
//           desc: "Connect molecular findings with patient-specific omics and clinical data for personalized treatments."
//         },
//         {
//           title: "Cohort Stratification",
//           desc: "Use AI to segment patient populations and model treatment outcomes with precision."
//         },
//         {
//           title: "Predictive Clinical Support",
//           desc: "Support clinical trial planning and early intervention strategies with intelligent insights."
//         }
//       ]
//     },
//     {
//       title: "Academic & Translational Science",
//       image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//       items: [
//         {
//           title: "Accessible AI for Research",
//           desc: "Enable academic labs to use industry-grade AI for data analysis and advanced modeling."
//         },
//         {
//           title: "Accelerated Discovery Cycles",
//           desc: "Generate hypotheses, validate results, and publish faster with comprehensive AI assistance."
//         },
//         {
//           title: "Collaborative Research Tools",
//           desc: "Work across labs using shareable, reproducible research workflows and platforms."
//         }
//       ]
//     }
//   ];

//   const renderSection = (section, sectionIndex) => {
//     const isVisible = visibleSections[sectionIndex];
//     const isReversed = sectionIndex % 2 === 1;
//     const sectionKey = sectionIndex;

//     const imageContent = (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "flex-start",
//           height: isMobile ? "260px" : "400px",
//           transform: isVisible ? "translateX(0)" : `translateX(${isReversed ? "50px" : "-50px"})`,
//           opacity: isVisible ? 1 : 0,
//           transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
//           transitionDelay: "0.2s"
//         }}
//       >
//         <img
//           src={section.image}
//           alt={section.title}
//           style={{
//             borderRadius: "20px",
//             boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//           }}
//         />
//       </div>
//     );

//     const accordionContent = (
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           gap: "20px",
//           transform: isVisible ? "translateY(0)" : "translateY(30px)",
//           opacity: isVisible ? 1 : 0,
//           transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
//           transitionDelay: "0.4s",
//           height: "100%"
//         }}
//       >
//         {section.items.map((item, itemIndex) => {
//           const itemKey = `${sectionKey}-${itemIndex}`;
//           const isOpen = openIndex[itemKey] === itemIndex;
          
//           return (
//             <div
//               key={itemIndex}
//               style={{
//                 border: "1px solid #e5e7eb",
//                 borderRadius: "14px",
//                 padding: isMobile ? "16px" : "20px",
//                 backgroundColor: "#fff",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//                 transform: isVisible ? "translateY(0)" : "translateY(20px)",
//                 opacity: isVisible ? 1 : 0,
//                 transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
//                 transitionDelay: `${0.6 + (itemIndex * 0.1)}s`
//               }}
//             >
//               <button
//                 onClick={() => toggleItem(sectionKey, itemIndex)}
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   textAlign: "left",
//                   background: "none",
//                   border: "none",
//                   padding: 0,
//                   cursor: "pointer",
//                 }}
//               >
//                 <h3
//                   style={{
//                     fontSize: isMobile ? "16px" : "18px",
//                     fontWeight: 600,
//                     color: "#1e293b",
//                     margin: 0
//                   }}
//                 >
//                   {item.title}
//                 </h3>
//                 <div style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   width: "30px",
//                   height: "30px",
//                   borderRadius: "50%",
//                   backgroundColor: "#fffff",
//                   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
//                 }}>
//                   <div style={{
//                     transform: isOpen ? "rotate(0deg)" : "rotate(0deg)",
//                     transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
//                   }}>
//                     {isOpen ? (
//                       <Minus size={18} color="#4F1985" style={{
//                         transform: "scale(1)",
//                         transition: "transform 0.2s ease"
//                       }} />
//                     ) : (
//                       <Plus size={18} color="#4F1985" style={{
//                         transform: "scale(1)",
//                         transition: "transform 0.2s ease"
//                       }} />
//                     )}
//                   </div>
//                 </div>
//               </button>

//               <div
//                 style={{
//                   maxHeight: isOpen ? "200px" : "0",
//                   opacity: isOpen ? 1 : 0,
//                   overflow: "hidden",
//                   transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
//                 }}
//               >
//                 <p
//                   style={{
//                     marginTop: "12px",
//                     color: "#475569",
//                     lineHeight: "1.6",
//                     fontSize: isMobile ? "14px" : "15px",
//                     margin: "12px 0 0 0"
//                   }}
//                 >
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );

//     return (
//       <div
//         key={sectionIndex}
//         ref={el => sectionRefs.current[sectionIndex] = el}
//         data-section={sectionIndex}
//         style={{
//           backgroundColor: sectionIndex % 2 === 0 ? "#ffffff" : "#f8fafc",
//           padding: isMobile ? "40px 16px" : "80px 24px",
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             fontSize: isMobile ? "28px" : "38px",
//             fontWeight: 700,
//             marginBottom: isMobile ? "40px" : "60px",
//             color: "#1e293b",
//             lineHeight: 1.2,
//             transform: isVisible ? "translateY(0)" : "translateY(-20px)",
//             opacity: isVisible ? 1 : 0,
//             transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
//           }}
//         >
//           {section.title}
//         </h2>

//         <div
//           style={{
//             maxWidth: "1200px",
//             margin: "0 auto",
//             display: "grid",
//             gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//             gap: isMobile ? "40px" : "60px",
//             alignItems: "center",
//           }}
//         >
//           {isMobile ? (
//             <>
//               {imageContent}
//               {accordionContent}
//             </>
//           ) : isReversed ? (
//             <>
//               {accordionContent}
//               {imageContent}
//             </>
//           ) : (
//             <>
//               {imageContent}
//               {accordionContent}
//             </>
//           )}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div style={{ backgroundColor: "#ffffff" }}>
//       {sections.map((section, index) => renderSection(section, index))}
//     </div>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

export default function Oursuitetables() {
  const [openIndex, setOpenIndex] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.dataset.section);
            setVisibleSections(prev => ({
              ...prev,
              [sectionIndex]: true
            }));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const toggleItem = (sectionIndex, itemIndex) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setOpenIndex(prev => {
      // Close all items in the current section
      const newState = { ...prev };
      
      // Find all keys that belong to this section and close them
      Object.keys(newState).forEach(existingKey => {
        if (existingKey.startsWith(`${sectionIndex}-`)) {
          newState[existingKey] = null;
        }
      });
      
      // If the clicked item wasn't open, open it
      if (prev[key] !== itemIndex) {
        newState[key] = itemIndex;
      }
      
      return newState;
    });
  };

  const sections = [
    {
      title: "Biological Discovery & Target Identification",
      image: "https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0",
      items: [
        {
          title: "Multi-Omics Integration",
          desc: "Integrate multi-omics data to uncover novel biological insights and mechanisms through comprehensive data fusion."
        },
        {
          title: "LLM-Powered Knowledge Mining",
          desc: "Use large language models to mine literature and map gene-disease relationships with unprecedented accuracy."
        },
        {
          title: "Target & Biomarker Prioritization",
          desc: "Identify high-confidence targets and biomarkers for experimental follow-up using advanced AI algorithms."
        }
      ]
    },
    {
      title: "Molecular Design & Optimization",
      image: "https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0",
      items: [
        {
          title: "Generative Molecule Creation",
          desc: "Design novel small molecules and biologics using cutting-edge generative AI models."
        },
        {
          title: "Property Prediction",
          desc: "Predict and optimize ADMET, binding affinity, and drug-like properties with machine learning."
        },
        {
          title: "Active Learning Loops",
          desc: "Continuously improve molecule design through experiment-informed feedback mechanisms."
        }
      ]
    },
    {
      title: "Synthetic Route Planning & Feasibility",
      image: "https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0",
      items: [
        {
          title: "Green Retrosynthesis",
          desc: "Generate sustainable synthetic routes using green chemistry constraints and environmental considerations."
        },
        {
          title: "Experimental Feasibility Check",
          desc: "Assess route feasibility with access to real-world reaction data and laboratory constraints."
        },
        {
          title: "Route Scoring & Ranking",
          desc: "Prioritize pathways by complexity, cost, and regulatory readiness for optimal selection."
        }
      ]
    },
    {
      title: "Agrochemical & Environmental Research",
      image: "https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0",
      items: [
        {
          title: "Safe Compound Discovery",
          desc: "Identify effective, low-toxicity crop protection agents using advanced predictive modeling."
        },
        {
          title: "Environmental Impact Prediction",
          desc: "Simulate bioaccumulation, ecotoxicity, and persistence profiles for environmental safety."
        },
        {
          title: "Regulatory Alignment",
          desc: "Optimize for regulatory compliance and field-use safety standards across global markets."
        }
      ]
    },
    {
      title: "Materials & Formulation Innovation",
      image: "https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0",
      items: [
        {
          title: "Material Design",
          desc: "Generate and simulate novel materials, polymers, and composites with desired properties."
        },
        {
          title: "Property Modeling",
          desc: "Predict thermal stability, conductivity, solubility, and other critical material properties."
        },
        {
          title: "Formulation Optimization",
          desc: "Accelerate formulation workflows with AI-based compatibility and performance models."
        }
      ]
    },
    {
      title: "Precision Medicine & Clinical Research",
      image: "https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0",
      items: [
        {
          title: "Data-Driven Personalization",
          desc: "Connect molecular findings with patient-specific omics and clinical data for personalized treatments."
        },
        {
          title: "Cohort Stratification",
          desc: "Use AI to segment patient populations and model treatment outcomes with precision."
        },
        {
          title: "Predictive Clinical Support",
          desc: "Support clinical trial planning and early intervention strategies with intelligent insights."
        }
      ]
    },
    {
      title: "Academic & Translational Science",
      image: "https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0",
      items: [
        {
          title: "Accessible AI for Research",
          desc: "Enable academic labs to use industry-grade AI for data analysis and advanced modeling."
        },
        {
          title: "Accelerated Discovery Cycles",
          desc: "Generate hypotheses, validate results, and publish faster with comprehensive AI assistance."
        },
        {
          title: "Collaborative Research Tools",
          desc: "Work across labs using shareable, reproducible research workflows and platforms."
        }
      ]
    }
  ];

  const renderSection = (section, sectionIndex) => {
    const isVisible = visibleSections[sectionIndex];
    const isReversed = sectionIndex % 2 === 1;
    const sectionKey = sectionIndex;

    const imageContent = (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: isMobile ? "260px" : "400px",
          transform: isVisible ? "translateX(0)" : `translateX(${isReversed ? "50px" : "-50px"})`,
          opacity: isVisible ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDelay: "0.2s"
        }}
      >
        <img
          src={section.image}
          alt={section.title}
          style={{
            borderRadius: "20px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    );

    const accordionContent = (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          opacity: isVisible ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDelay: "0.4s",
          height: "100%"
        }}
      >
        {section.items.map((item, itemIndex) => {
          const itemKey = `${sectionKey}-${itemIndex}`;
          const isOpen = openIndex[itemKey] === itemIndex;
          
          return (
            <div
              key={itemIndex}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: isMobile ? "16px" : "20px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
                transitionDelay: `${0.6 + (itemIndex * 0.1)}s`
              }}
            >
              <button
                onClick={() => toggleItem(sectionKey, itemIndex)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <h3
                  style={{
                    fontSize: isMobile ? "16px" : "18px",
                    fontWeight: 600,
                    color: "#1e293b",
                    margin: 0
                  }}
                >
                  {item.title}
                </h3>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "30px",
                  height: "30px",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                }}>
                  {isOpen ? (
                    <Minus size={18} color="#9333ea" style={{
                      transition: "all 0.3s ease"
                    }} />
                  ) : (
                    <Plus size={18} color="#9333ea" style={{
                      transition: "all 0.3s ease"
                    }} />
                  )}
                </div>
              </button>

              <div
                style={{
                  maxHeight: isOpen ? "200px" : "0",
                  opacity: isOpen ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isOpen ? "translateY(0)" : "translateY(-10px)"
                }}
              >
                <p
                  style={{
                    marginTop: "12px",
                    color: "#475569",
                    lineHeight: "1.6",
                    fontSize: isMobile ? "14px" : "15px",
                    margin: "12px 0 0 0"
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );

    return (
      <div
        key={sectionIndex}
        ref={el => sectionRefs.current[sectionIndex] = el}
        data-section={sectionIndex}
        style={{
          backgroundColor: '#fffff',
          padding: isMobile ? "40px 16px" : "80px 24px",
        }}
      >
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? "32px" : "42px",
            fontWeight: 400,
            color: "#4F1985",
            margin: 0,
            padding: "20px",
            textAlign: "center",
            marginBottom: isMobile ? "40px" : "60px",
            lineHeight: 1.2,
            transform: isVisible ? "translateY(0)" : "translateY(-20px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          {section.title}
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
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "40px" : "60px",
            alignItems: "center",
          }}
        >
          {isMobile ? (
            <>
              {imageContent}
              {accordionContent}
            </>
          ) : isReversed ? (
            <>
              {accordionContent}
              {imageContent}
            </>
          ) : (
            <>
              {imageContent}
              {accordionContent}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {sections.map((section, index) => renderSection(section, index))}
    </div>
  );
}