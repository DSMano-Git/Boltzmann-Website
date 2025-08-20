// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Plus, Minus } from "lucide-react";

// export default function MarketingDaySection() {
//   const [openIndex, setOpenIndex] = useState(true); // first open by default

//   const items = [
//     {
//       title: "Consumers are ever-changing",
//       desc: "People and markets move fast, fueled by the conversation and culture happening on social. Meltwater gives you a window into the topics and trends influencing your target audience today and tomorrow.",
//     },
//     {
//       title: "Navigating influencer marketing is complex",
//       desc: "Managing multiple influencers, negotiating contracts, and ensuring ROI is challenging. We simplify the process with streamlined workflows and insights.",
//     },
//     {
//       title: "Building loyal fans is a full-time gig",
//       desc: "Creating consistent, authentic engagement requires dedication. Our tools help scale your efforts and turn audiences into loyal communities.",
//     },
//     {
//       title: "Accurate reporting is crucial",
//       desc: "Measure the impact of campaigns with precision and clarity, enabling smarter decisions for future marketing strategies.",
//     },
//   ];

//   const toggleItem = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "white",
//         padding: "80px 24px",
//       }}
//     >
//       <h2
//         style={{
//           textAlign: "center",
//           fontSize: "32px",
//           fontWeight: 700,
//           marginBottom: "60px",
//           color: "#1e293b",
//         }}
//       >
//         A day in the life of a marketing pro.
//       </h2>

//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: "60px",
//           alignItems: "start", // keep right side fixed
//         }}
//       >
//         {/* Left side: Accordion */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "20px",
//           }}
//         >
//           {items.map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 border: "1px solid #e5e7eb",
//                 borderRadius: "14px",
//                 padding: "20px",
//                 backgroundColor: "#fff",
//                 boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
//                 transition: "box-shadow 0.3s ease",
//               }}
//             >
//               <button
//                 onClick={() => toggleItem(index)}
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
//                     fontSize: "18px",
//                     fontWeight: 600,
//                     color: "#1e293b",
//                   }}
//                 >
//                   {item.title}
//                 </h3>
//                 {openIndex === index ? (
//                   <Minus size={24} color="#9333ea" />
//                 ) : (
//                   <Plus size={24} color="#9333ea" />
//                 )}
//               </button>

//               <AnimatePresence>
//                 {openIndex === index && (
//                   <motion.div
//                     key="content"
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.35 }}
//                     style={{ overflow: "hidden" }}
//                   >
//                     <p
//                       style={{
//                         marginTop: "12px",
//                         color: "#475569",
//                         lineHeight: "1.6",
//                         fontSize: "15px",
//                       }}
//                     >
//                       {item.desc}
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>

//         {/* Right side: Splash Image */}
//         <div
//           style={{
//             position: "relative",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             minHeight: "500px", // keeps it from shrinking when accordion changes
//           }}
//         >
//           {/* Decorative shape */}
//           <div
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%) rotate(-12deg)",
//               width: "420px",
//               height: "420px",
//               background: "linear-gradient(135deg, #a855f7, #6366f1)",
//               borderRadius: "36% 64% 57% 43% / 41% 40% 60% 59%", // splashy blob
//               zIndex: -1,
//             }}
//           />

//           {/* Static Image */}
//           <img
//             src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//             alt="Marketing Splash"
//             style={{
//               borderRadius: "20px",
//               boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
//               width: "500px",
//               height: "480px",
//               objectFit: "cover",
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Plus, Minus } from "lucide-react";

// export default function MarketingDaySection() {
//   const [openIndex, setOpenIndex] = useState(0); // first item open by default
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkScreen = () => setIsMobile(window.innerWidth <= 1024);
//     checkScreen();
//     window.addEventListener("resize", checkScreen);
//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   const items = [
//     {
//       title: "Consumers are ever-changing",
//       desc: "People and markets move fast, fueled by the conversation and culture happening on social. Meltwater gives you a window into the topics and trends influencing your target audience today and tomorrow.",
//     },
//     {
//       title: "Navigating influencer marketing is complex",
//       desc: "Managing multiple influencers, negotiating contracts, and ensuring ROI is challenging. We simplify the process with streamlined workflows and insights.",
//     },
//     {
//       title: "Building loyal fans is a full-time gig",
//       desc: "Creating consistent, authentic engagement requires dedication. Our tools help scale your efforts and turn audiences into loyal communities.",
//     },
//     {
//       title: "Accurate reporting is crucial",
//       desc: "Measure the impact of campaigns with precision and clarity, enabling smarter decisions for future marketing strategies.",
//     },
//   ];

//   const toggleItem = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "white",
//         padding: isMobile ? "40px 16px" : "80px 24px",
//       }}
//     >
//       <h2
//         style={{
//           textAlign: "center",
//           fontSize: isMobile ? "24px" : "32px",
//           fontWeight: 700,
//           marginBottom: isMobile ? "40px" : "60px",
//           color: "#1e293b",
//           lineHeight: 1.3,
//         }}
//       >
//         A day in the life of a marketing pro.
//       </h2>

//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//           gap: isMobile ? "40px" : "60px",
//           alignItems: "start",
//         }}
//       >
//         {/* Image & Blob first on mobile */}
//         <div
//           style={{
//             order: isMobile ? -1 : 0,
//             position: "relative",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             minHeight: isMobile ? "300px" : "500px",
//             width: "100%",
//           }}
//         >
//           {/* Animated Blob */}
//           <motion.div
//             animate={{
//               scale: [1, 1.05, 1],
//               borderRadius: [
//                 "36% 64% 57% 43% / 41% 40% 60% 59%",
//                 "50% 50% 40% 60% / 50% 60% 40% 50%",
//                 "36% 64% 57% 43% / 41% 40% 60% 59%",
//               ],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: isMobile ? "90%" : "80%",
//               maxWidth: isMobile ? "320px" : "420px",
//               height: isMobile ? "90%" : "80%",
//               maxHeight: isMobile ? "320px" : "420px",
              
//               zIndex: -1,
//             }}
//           />

//           {/* Static Image */}
//           <img
//             src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//             alt="Marketing Splash"
//             style={{
//               borderRadius: "20px",
//               boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
//               width: "100%",
//               maxWidth: isMobile ? "360px" : "500px",
//               height: "auto",
//               objectFit: "cover",
//             }}
//           />
//         </div>

//         {/* Accordion */}
//         <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//           {items.map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 border: "1px solid #e5e7eb",
//                 borderRadius: "14px",
//                 padding: isMobile ? "16px" : "20px",
//                 backgroundColor: "#fff",
//                 boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
//                 transition: "box-shadow 0.3s ease",
//               }}
//             >
//               <button
//                 onClick={() => toggleItem(index)}
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
//                   }}
//                 >
//                   {item.title}
//                 </h3>
//                 {openIndex === index ? (
//                   <Minus size={22} color="#9333ea" />
//                 ) : (
//                   <Plus size={22} color="#9333ea" />
//                 )}
//               </button>

//               <AnimatePresence>
//                 {openIndex === index && (
//                   <motion.div
//                     key="content"
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.35 }}
//                     style={{ overflow: "hidden" }}
//                   >
//                     <p
//                       style={{
//                         marginTop: "12px",
//                         color: "#475569",
//                         lineHeight: "1.6",
//                         fontSize: isMobile ? "14px" : "15px",
//                       }}
//                     >
//                       {item.desc}
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function CRMarketingDaySection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

 const items = [
  {
    title: "Cohort Stratification",
    desc: "Identify and group patient subpopulations for targeted trials.",
  },
  {
    title: "Predictive Trial Design",
    desc: "Model trial outcomes and optimize inclusion/exclusion criteria.",
  },
  {
    title: "Biomarker-Driven Insights",
    desc: "Link preclinical biomarkers with real-world patient data for precision medicine strategies.",
  },
];


  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: isMobile ? "40px 16px" : "80px 24px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: isMobile ? "24px" : "32px",
          fontWeight: 700,
          marginBottom: isMobile ? "40px" : "60px",
          color: "#1e293b",
          lineHeight: 1.3,
        }}
      >
        Bridge discovery with clinical translation.
      </h2>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "40px" : "60px",
          alignItems: "start", // ✅ fixes image moving
        }}
      >
        {/* Image side */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            height: isMobile ? "260px" : "400px", // ✅ fixed container height
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Marketing Splash"
            style={{
              borderRadius: "20px",
              boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
              width: "100%",
              height: "100%", // ✅ fill container
              objectFit: "cover",
            }}
          />
        </div>

        {/* Accordion side */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 80,
              }}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: isMobile ? "16px" : "20px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <button
                onClick={() => toggleItem(index)}
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
                  }}
                >
                  {item.title}
                </h3>
                {openIndex === index ? (
                  <Minus size={22} color="#9333ea" />
                ) : (
                  <Plus size={22} color="#9333ea" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      style={{
                        marginTop: "12px",
                        color: "#475569",
                        lineHeight: "1.6",
                        fontSize: isMobile ? "14px" : "15px",
                      }}
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
