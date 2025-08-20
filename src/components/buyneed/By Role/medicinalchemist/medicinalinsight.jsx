// import React from "react";

// export default function CheckerboardSection() {
//   return (
//     <div style={{ backgroundColor: "white", padding: "80px 24px" }}>
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr 1fr",
//           gap: "48px",
//           alignItems: "center",
//         }}
//       >
//         {/* Row 1 */}
//         <div style={{ textAlign: "center" }}>
//           <h3
//             style={{
//               fontSize: "22px",
//               fontWeight: 600,
//               color: "#111827",
//               marginBottom: "12px",
//             }}
//           >
//             Capture the Whole Conversation
//           </h3>
//           <p style={{ color: "#4B5563", lineHeight: "1.6" }}>
//             From X to Twitch, Pinterest to podcasts, capture audience insights
//             to strengthen your brand&apos;s positioning and marketing campaigns.
//           </p>
//         </div>

//         <div
//           style={{
//             backgroundColor: "#a21caf",
//             borderRadius: "16px",
//             height: "220px",
//             width: "100%",
//           }}
//         ></div>

//         <div style={{ textAlign: "center" }}>
//           <h3
//             style={{
//               fontSize: "22px",
//               fontWeight: 600,
//               color: "#111827",
//               marginBottom: "12px",
//             }}
//           >
//             Transform Creator Impact
//           </h3>
//           <p style={{ color: "#4B5563", lineHeight: "1.6" }}>
//             Scale your influencer community from passive to passionate,
//             data-deficient to data-driven.
//           </p>
//         </div>

//         {/* Row 2 */}
//         <div
//           style={{
//             backgroundColor: "#c026d3",
//             borderRadius: "16px",
//             height: "220px",
//             width: "100%",
//           }}
//         ></div>

//         <div style={{ textAlign: "center" }}>
//           <h3
//             style={{
//               fontSize: "22px",
//               fontWeight: 600,
//               color: "#111827",
//               marginBottom: "12px",
//             }}
//           >
//             Get Business Value From Social
//           </h3>
//           <p style={{ color: "#4B5563", lineHeight: "1.6" }}>
//             Streamline social media management while tracking and analyzing its
//             impact on brand and business metrics.
//           </p>
//         </div>

//         <div
//           style={{
//             backgroundColor: "#d946ef",
//             borderRadius: "16px",
//             height: "220px",
//             width: "100%",
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }


// import React from "react";

// export default function CheckerboardSection() {
//   return (
//     <div style={{ backgroundColor: "white", padding: "80px 24px" }}>
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr 1fr",
//           gap: "48px",
//           alignItems: "center",
//         }}
//       >
//         {/* Row 1 */}
//         <div style={{ textAlign: "left" }}>
//           <h3
//             style={{
//               fontSize: "24px",
//               fontWeight: 700,
//               color: "#0f172a",
//               marginBottom: "14px",
//             }}
//           >
//             Capture Every Signal
//           </h3>
//           <p style={{ color: "#334155", lineHeight: "1.7", fontSize: "16px" }}>
//             From social platforms to podcasts, tap into real-time conversations
//             and uncover the insights that matter most for your brand&apos;s
//             growth.
//           </p>
//         </div>

//         <div
//           style={{
//             backgroundColor: "#0284c7",
//             borderRadius: "20px",
//             height: "220px",
//             width: "100%",
//             boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
//           }}
//         ></div>

//         <div style={{ textAlign: "left" }}>
//           <h3
//             style={{
//               fontSize: "24px",
//               fontWeight: 700,
//               color: "#0f172a",
//               marginBottom: "14px",
//             }}
//           >
//             Empower Communities
//           </h3>
//           <p style={{ color: "#334155", lineHeight: "1.7", fontSize: "16px" }}>
//             Strengthen your influencer network with data-driven insights,
//             turning engagement into lasting advocacy.
//           </p>
//         </div>

//         {/* Row 2 */}
//         <div
//           style={{
//             backgroundColor: "#06b6d4",
//             borderRadius: "20px",
//             height: "220px",
//             width: "100%",
//             boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
//           }}
//         ></div>

//         <div style={{ textAlign: "left" }}>
//           <h3
//             style={{
//               fontSize: "24px",
//               fontWeight: 700,
//               color: "#0f172a",
//               marginBottom: "14px",
//             }}
//           >
//             Drive Real Business Outcomes
//           </h3>
//           <p style={{ color: "#334155", lineHeight: "1.7", fontSize: "16px" }}>
//             Optimize campaigns with measurable impact. Track ROI, spot
//             opportunities, and align marketing with revenue.
//           </p>
//         </div>

//         <div
//           style={{
//             backgroundColor: "#0ea5e9",
//             borderRadius: "20px",
//             height: "220px",
//             width: "100%",
//             boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }


// import React from "react";

// export default function ZigZagSection() {
//   const features = [
//     {
//       title: "Capture Every Signal",
//       desc: "From social platforms to podcasts, tap into real-time conversations and uncover the insights that matter most for your brand's growth.",
//       color: "#0284c7",
//     },
//     {
//       title: "Empower Communities",
//       desc: "Strengthen your influencer network with data-driven insights, turning engagement into lasting advocacy.",
//       color: "#06b6d4",
//     },
//     {
//       title: "Drive Real Business Outcomes",
//       desc: "Optimize campaigns with measurable impact. Track ROI, spot opportunities, and align marketing with revenue.",
//       color: "#0ea5e9",
//     },
//   ];

//   return (
//     <div style={{ backgroundColor: "white", padding: "80px 24px" }}>
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           display: "flex",
//           flexDirection: "column",
//           gap: "80px",
//         }}
//       >
//         {features.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               alignItems: "center",
//               gap: "28px",
//             }}
//           >
//             {/* Alternate order: if even index → text left, box right; if odd index → box left, text right */}
//             {index % 2 === 0 ? (
//               <>
//                 <div style={{ textAlign: "left" }}>
//                   <h3
//                     style={{
//                       fontSize: "24px",
//                       fontWeight: 700,
//                       color: "#0f172a",
//                       marginBottom: "14px",
//                     }}
//                   >
//                     {item.title}
//                   </h3>
//                   <p
//                     style={{
//                       color: "#334155",
//                       lineHeight: "1.7",
//                       fontSize: "16px",
//                     }}
//                   >
//                     {item.desc}
//                   </p>
//                 </div>
//                 <div
//                   style={{
//                     backgroundColor: item.color,
//                     borderRadius: "20px",
//                     height: "240px",
//                     width: "100%",
//                     boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
//                   }}
//                 ></div>
//               </>
//             ) : (
//               <>
//                 <div
//                   style={{
//                     backgroundColor: item.color,
//                     borderRadius: "20px",
//                     height: "240px",
//                     width: "100%",
//                     boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
//                   }}
//                 ></div>
//                 <div style={{ textAlign: "left" }}>
//                   <h3
//                     style={{
//                       fontSize: "24px",
//                       fontWeight: 700,
//                       color: "#0f172a",
//                       marginBottom: "14px",
//                     }}
//                   >
//                     {item.title}
//                   </h3>
//                   <p
//                     style={{
//                       color: "#334155",
//                       lineHeight: "1.7",
//                       fontSize: "16px",
//                     }}
//                   >
//                     {item.desc}
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//small compact layout
// import React from "react";
// import { Lightbulb, Activity, Target } from "lucide-react"; // icons

// export default function ZigZagCompact() {
//   const features = [
//     {
//       title: "Accelerate Ideation",
//       desc: "Generate novel, target-specific compounds with desired properties faster than ever.",
//       color: "#e0f2fe",
//       icon: <Lightbulb size={48} color="#0284c7" />,
//     },
//     {
//       title: "Optimize SAR",
//       desc: "Leverage AI-driven insights to balance potency, selectivity, and safety effectively.",
//       color: "#ccfbf1",
//       icon: <Activity size={48} color="#06b6d4" />,
//     },
//     {
//       title: "Reduce Wasted Effort",
//       desc: "Prioritize compounds with the highest predicted success rates to save time and resources.",
//       color: "#dbeafe",
//       icon: <Target size={48} color="#0ea5e9" />,
//     },
//   ];

//   return (
//     <div style={{ backgroundColor: "white", padding: "50px 20px" }}>
//       <div
//         style={{
//           maxWidth: "1100px",
//           margin: "0 auto",
//           display: "flex",
//           flexDirection: "column",
//           gap: "35px",
//         }}
//       >
//         {features.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               alignItems: "center",
//               gap: "28px",
//               padding: "20px",
//               borderRadius: "14px",
//               boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
//               backgroundColor: "#f9fafb",
//             }}
//           >
//             {/* Alternate zig-zag */}
//             {index % 2 === 0 ? (
//               <>
//                 {/* Text */}
//                 <div style={{ textAlign: "left" }}>
//                   <h3
//                     style={{
//                       fontSize: "20px",
//                       fontWeight: 700,
//                       color: "#0f172a",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     {item.title}
//                   </h3>
//                   <p
//                     style={{
//                       color: "#475569",
//                       lineHeight: "1.6",
//                       fontSize: "15px",
//                     }}
//                   >
//                     {item.desc}
//                   </p>
//                 </div>
//                 {/* Icon box */}
//                 <div
//                   style={{
//                     backgroundColor: item.color,
//                     borderRadius: "12px",
//                     height: "160px",
//                     width: "100%",
//                     boxShadow: "0 3px 8px rgba(0,0,0,0.07)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {item.icon}
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div
//                   style={{
//                     backgroundColor: item.color,
//                     borderRadius: "12px",
//                     height: "160px",
//                     width: "100%",
//                     boxShadow: "0 3px 8px rgba(0,0,0,0.07)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {item.icon}
//                 </div>
//                 <div style={{ textAlign: "left" }}>
//                   <h3
//                     style={{
//                       fontSize: "20px",
//                       fontWeight: 700,
//                       color: "#0f172a",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     {item.title}
//                   </h3>
//                   <p
//                     style={{
//                       color: "#475569",
//                       lineHeight: "1.6",
//                       fontSize: "15px",
//                     }}
//                   >
//                     {item.desc}
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import { Lightbulb, Activity, Target } from "lucide-react"; // icons

// export default function ZigZagPurple() {
//   const features = [
//     {
//       title: "Accelerate Ideation",
//       desc: "Generate novel, target-specific compounds with desired properties faster than ever.",
//       color: "#a21caf", // deep purple
//       icon: <Lightbulb size={52} color="white" />,
//     },
//     {
//       title: "Optimize SAR",
//       desc: "Leverage AI-driven insights to balance potency, selectivity, and safety effectively.",
//       color: "#c026d3", // medium purple
//       icon: <Activity size={52} color="white" />,
//     },
//     {
//       title: "Reduce Wasted Effort",
//       desc: "Prioritize compounds with the highest predicted success rates to save time and resources.",
//       color: "#d946ef", // lighter purple
//       icon: <Target size={52} color="white" />,
//     },
//   ];

//   return (
//     <div style={{ backgroundColor: "white", padding: "60px 20px" }}>
//       <div
//         style={{
//           maxWidth: "1100px",
//           margin: "0 auto",
//           display: "flex",
//           flexDirection: "column",
//           gap: "55px", // ⬆️ more spacing between cards (increased from 35px)
//         }}
//       >
//         {features.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               alignItems: "center",
//               gap: "28px",
//               padding: "20px",
//               borderRadius: "16px",
//               boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//               backgroundColor: "#fdfcff",
//             }}
//           >
//             {/* Zig-zag alternating order */}
//             {index % 2 === 0 ? (
//               <>
//                 {/* Text */}
//                 <div style={{ textAlign: "left" }}>
//                   <h3
//                     style={{
//                       fontSize: "22px",
//                       fontWeight: 700,
//                       color: "#0f172a",
//                       marginBottom: "10px",
//                     }}
//                   >
//                     {item.title}
//                   </h3>
//                   <p
//                     style={{
//                       color: "#475569",
//                       lineHeight: "1.6",
//                       fontSize: "16px",
//                     }}
//                   >
//                     {item.desc}
//                   </p>
//                 </div>
//                 {/* Icon Box */}
//                 <div
//                   style={{
//                     backgroundColor: item.color,
//                     borderRadius: "14px",
//                     height: "160px", // ⬅️ card height stays same
//                     width: "100%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
//                   }}
//                 >
//                   {item.icon}
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div
//                   style={{
//                     backgroundColor: item.color,
//                     borderRadius: "14px",
//                     height: "160px",
//                     width: "100%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
//                   }}
//                 >
//                   {item.icon}
//                 </div>
//                 <div style={{ textAlign: "left" }}>
//                   <h3
//                     style={{
//                       fontSize: "22px",
//                       fontWeight: 700,
//                       color: "#0f172a",
//                       marginBottom: "10px",
//                     }}
//                   >
//                     {item.title}
//                   </h3>
//                   <p
//                     style={{
//                       color: "#475569",
//                       lineHeight: "1.6",
//                       fontSize: "16px",
//                     }}
//                   >
//                     {item.desc}
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { Lightbulb, Activity, Target } from "lucide-react";
// import { motion } from "framer-motion";

// export default function ZigZagSection() {
//   const features = [
//     {
//       title: "Accelerate Ideation",
//       desc: "Generate novel, target-specific compounds with desired properties faster than ever.",
//       color: "#a21caf", // deep purple
//       icon: <Lightbulb size={64} color="white" />,
//     },
//     {
//       title: "Optimize SAR",
//       desc: "Leverage AI-driven insights to balance potency, selectivity, and safety effectively.",
//       color: "#c026d3", // medium purple
//       icon: <Activity size={64} color="white" />,
//     },
//     {
//       title: "Reduce Wasted Effort",
//       desc: "Prioritize compounds with the highest predicted success rates to save time and resources.",
//       color: "#d946ef", // lighter purple
//       icon: <Target size={64} color="white" />,
//     },
//   ];

//   return (
//     <div style={{ backgroundColor: "white", padding: "80px 24px" }}>
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           display: "flex",
//           flexDirection: "column",
//           gap: "10px", // more breathing space
//         }}
//       >
//         {features.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.85, y: 60 }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{
//               duration: 0.8,
//               delay: index * 0.4,
//               type: "spring",
//               stiffness: 80,
//             }}
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               alignItems: "center",
//               gap: "40px",
//             }}
//           >
//             {index % 2 === 0 ? (
//               <>
//                 {/* Text block */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.7, delay: index * 0.4 }}
//                   style={{ textAlign: "left" }}
//                 >
//                   <h3
//                     style={{
//                       fontSize: "26px",
//                       fontWeight: 700,
//                       color: "#0f172a",
//                       marginBottom: "14px",
//                     }}
//                   >
//                     {item.title}
//                   </h3>
//                   <p
//                     style={{
//                       color: "#334155",
//                       lineHeight: "1.7",
//                       fontSize: "17px",
//                     }}
//                   >
//                     {item.desc}
//                   </p>
//                 </motion.div>

//                 {/* Icon block */}
//                 <motion.div
//                   whileHover={{
//                     scale: 1.08,
//                     boxShadow: "0 12px 30px rgba(162, 28, 175, 0.4)",
//                   }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                   style={{
//                     backgroundColor: item.color,
//                     borderRadius: "20px",
//                     height: "240px",
//                     width: "100%",
//                     boxShadow: "0 8px 22px rgba(0,0,0,0.15)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <motion.div
//                     initial={{ scale: 0, rotate: -45 }}
//                     whileInView={{ scale: 1, rotate: 0 }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 150,
//                       delay: index * 0.4 + 0.2,
//                     }}
//                   >
//                     {item.icon}
//                   </motion.div>
//                 </motion.div>
//               </>
//             ) : (
//               <>
//                 {/* Icon block */}
//                 <motion.div
//                   whileHover={{
//                     scale: 1.08,
//                     boxShadow: "0 12px 30px rgba(192, 38, 211, 0.4)",
//                   }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                   style={{
//                     backgroundColor: item.color,
//                     borderRadius: "20px",
//                     height: "240px",
//                     width: "100%",
//                     boxShadow: "0 8px 22px rgba(0,0,0,0.15)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <motion.div
//                     initial={{ scale: 0, rotate: 45 }}
//                     whileInView={{ scale: 1, rotate: 0 }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 150,
//                       delay: index * 0.4 + 0.2,
//                     }}
//                   >
//                     {item.icon}
//                   </motion.div>
//                 </motion.div>

//                 {/* Text block */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.7, delay: index * 0.4 }}
//                   style={{ textAlign: "left" }}
//                 >
//                   <h3
//                     style={{
//                       fontSize: "26px",
//                       fontWeight: 700,
//                       color: "#0f172a",
//                       marginBottom: "14px",
//                     }}
//                   >
//                     {item.title}
//                   </h3>
//                   <p
//                     style={{
//                       color: "#334155",
//                       lineHeight: "1.7",
//                       fontSize: "17px",
//                     }}
//                   >
//                     {item.desc}
//                   </p>
//                 </motion.div>
//               </>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useRef, useEffect, useState } from "react";
import { Lightbulb, Activity, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function ZigZagSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const features = [
    {
      title: "Accelerate Ideation",
      desc: "Generate novel, target-specific compounds with desired properties faster than ever.",
      color: "#a21caf",
      icon: <Lightbulb size={64} color="white" />,
    },
    {
      title: "Optimize SAR",
      desc: "Leverage AI-driven insights to balance potency, selectivity, and safety effectively.",
      color: "#c026d3",
      icon: <Activity size={64} color="white" />,
    },
    {
      title: "Reduce Wasted Effort",
      desc: "Prioritize compounds with the highest predicted success rates to save time and resources.",
      color: "#d946ef",
      icon: <Target size={64} color="white" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      style={{ backgroundColor: "white", padding: "80px 24px" }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "80px",
        }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              gap: "40px",
            }}
          >
            {/* Text block */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ 
                flex: 1, 
                textAlign: "left",
                willChange: "transform, opacity"
              }}
            >
              <h3
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#0f172a",
                  marginBottom: "14px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "#334155",
                  lineHeight: "1.7",
                  fontSize: "17px",
                }}
              >
                {item.desc}
              </p>
            </motion.div>

            {/* Icon block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 12px 30px ${item.color}40`,
              }}
              style={{
                backgroundColor: item.color,
                borderRadius: "20px",
                height: "240px",
                width: "100%",
                maxWidth: "500px",
                boxShadow: "0 8px 22px rgba(0,0,0,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                willChange: "transform, opacity"
              }}
            >
              <motion.div
                initial={{ scale: 0.7 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ 
                  type: "spring", 
                  stiffness: 150, 
                  delay: index * 0.2 + 0.2 
                }}
              >
                {item.icon}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}