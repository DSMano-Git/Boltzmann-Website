// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useMediaQuery } from 'react-responsive';

// const YearlyTimeline = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
//   const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });

//   const years = [
//     {
//       "year": "2019",
//       "title": "Foundation",
//       "subtitle": "Founded as a research group",
//       "description": "Began as a research group focused on scientific innovation in Bangalore, India",
//       "color": "#8B5CF6"
//     },
//     {
//       "year": "2020",
//       "title": "Google Startups",
//       "subtitle": "Accelerated Growth",
//       "description": "Selected for Google Startups program to accelerate our technology development",
//       "color": "#0EA5E9"
//     },
//     {
//       "year": "2021",
//       "title": "Early Growth",
//       "subtitle": "Funding & First Product",
//       "description": "Raised $100k pre-seed funding, launched BoltChem beta, and joined Microsoft Startups",
//       "color": "#10B981"
//     },
//     {
//       "year": "2022",
//       "title": "Expansion",
//       "subtitle": "Strategic Partnerships",
//       "description": "Formed 2 key partnerships (US Biotech firm and top research lab) and 1 joint venture",
//       "color": "#F59E0B"
//     },
//     {
//       "year": "2023",
//       "title": "Product Launches",
//       "subtitle": "SaaS Platform & Collaborations",
//       "description": "Launched ReBolt SaaS and BoltPro beta. Collaborated with Indian pharmaceutical leaders",
//       "color": "#EC4899"
//     },
//     {
//       "year": "2024",
//       "title": "Innovation",
//       "subtitle": "AI Advancements",
//       "description": "Launched Boltbio alpha and Multi Agents beta with NASSCOM AI & SINE incubation",
//       "color": "#6366F1"
//     },
//     {
//       "year": "2025",
//       "title": "AI Discovery",
//       "subtitle": "Breakthrough Technologies",
//       "description": "Launched BZ AI discovery suite, Clinbolt beta, and established first self-driven lab",
//       "color": "#F97316"
//     }
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const pathVariants = {
//     hidden: { pathLength: 0 },
//     visible: {
//       pathLength: 1,
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const circleVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.8
//       }
//     }
//   };

//   const yearTextVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const calculateXPosition = (index, total) => {
//     if (isMobile) return 50;
//     if (isTablet) return 100 + (index * 120);
//     return 150 + (index * 180);
//   };

//   const calculateYPosition = (index, total) => {
//     if (isMobile) return 60 + (index * 160);
//     return 250;
//   };

//   const calculatePath = () => {
//     if (isMobile) {
//       const firstY = calculateYPosition(0, years.length);
//       const lastY = calculateYPosition(years.length - 1, years.length);
//       return `M 50,${firstY} L 50,${lastY}`;
//     } else {
//       const firstX = calculateXPosition(0, years.length);
//       const lastX = calculateXPosition(years.length - 1, years.length);
//       return `M ${firstX},250 L ${lastX},250`;
//     }
//   };

//   const calculateCardOffset = (index) => {
//     if (isMobile) return { x: 120, y: 0 };
//     if (isTablet) return { x: 0, y: index % 2 === 0 ? 120 : -120 };
//     return { x: 0, y: index % 2 === 0 ? 150 : -150 };
//   };

//   const getCardDimensions = () => {
//     if (isMobile) return { width: 180, height: 120 };
//     if (isTablet) return { width: 200, height: 130 };
//     return { width: 220, height: 140 };
//   };

//   const getCircleRadius = () => {
//     if (isMobile) return 20;
//     if (isTablet) return 30;
//     return 40;
//   };

//   return (
//     <div className="bg-white px-4 sm:px-6 lg:px-8" style={{ 
//       paddingTop: '40px',
//       paddingBottom: '40px'
//     }}>
//       <div className="max-w-7xl mx-auto">
//         <h2 style={{textAlign: 'center',marginBottom: '2%',fontWeight: 400,color: '#4F1985',fontSize: '2.5rem',fontFamily: 'timesnew'}}>Our Timeline Journey.
//          <span
//             style={{
//               display: "block",
//               width: "80px",
//               height: "4px",
//               backgroundColor: "#4F1985",
//               margin: "15px auto 0",
//               borderRadius: "2px"
//             }}
//           />
//      </h2>
        
//         <motion.div 
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//           variants={containerVariants}
//           style={{ 
//             position: 'relative',
//             minHeight: isMobile ? `${years.length * 160 + 60}px` : '600px'
//           }}
//         >
//           {/* Desktop/Tablet Timeline */}
//           {!isMobile && (
//             <svg 
//               className="w-full h-[600px] hidden md:block" 
//               viewBox={`0 0 ${isTablet ? '900' : '1400'} 600`} 
//               preserveAspectRatio="xMidYMid meet"
//               style={{ position: 'absolute', top: 0, left: 0 }}
//             >
//               <defs>
//                 <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                 </linearGradient>
                
//                 <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                   <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                   <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                   <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                   <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                   <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                 </linearGradient>

//                 <filter id="dropShadow">
//                   <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                 </filter>
//               </defs>

//               <rect width={isTablet ? '900' : '1400'} height="600" fill="#F8FAFC" />

//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="#E2E8F0"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//               />
              
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="url(#pathGradient)"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 variants={pathVariants}
//               />

//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const offset = calculateCardOffset(index);
//                 return (
//                   <motion.path
//                     key={`line-${index}`}
//                     d={`M ${xPos},${yPos} L ${xPos},${yPos + (offset.y > 0 ? offset.y - 20 : offset.y + 20)}`}
//                     fill="none"
//                     stroke={year.color}
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     strokeOpacity="0.5"
//                     variants={{
//                       hidden: { opacity: 0 },
//                       visible: { opacity: 1 }
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 );
//               })}

//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const radius = getCircleRadius();
//                 const gradientId = `gradient${index + 1}`;
//                 const offset = calculateCardOffset(index);
//                 const boxX = xPos + offset.x;
//                 const boxY = yPos + offset.y;
//                 const { width: boxWidth, height: boxHeight } = getCardDimensions();
                
//                 return (
//                   <g key={index}>
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius + 8}
//                       fill="#F8FAFC"
//                       stroke="#E2E8F0"
//                       strokeWidth="2"
//                       filter="url(#dropShadow)"
//                       variants={circleVariants}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke="#F1F5F9"
//                       strokeWidth="8"
//                       variants={circleVariants}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke={`url(#${gradientId})`}
//                       strokeWidth="8"
//                       strokeLinecap="round"
//                       initial={{ pathLength: 0 }}
//                       animate={{ pathLength: 1 }}
//                       transition={{ duration: 1.5, ease: "easeInOut" }}
//                     />

//                     <motion.text
//                       x={xPos}
//                       y={yPos}
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       fill={year.color}
//                       style={{ 
//                         fontWeight: 'bold', 
//                         fontSize: isTablet ? '14px' : '18px' 
//                       }}
//                       variants={yearTextVariants}
//                     >
//                       {year.year}
//                     </motion.text>

//                     <motion.g variants={cardVariants}>
//                       <rect
//                         x={boxX - boxWidth/2}
//                         y={boxY - boxHeight/2}
//                         width={boxWidth}
//                         height={boxHeight}
//                         rx="12"
//                         fill="white"
//                         stroke="#E2E8F0"
//                         strokeWidth="1"
//                         filter="url(#dropShadow)"
//                       />
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + (isTablet ? 25 : 30)}
//                         textAnchor="middle"
//                         style={{ 
//                           fontSize: isTablet ? '14px' : '16px', 
//                           fontWeight: 'bold' 
//                         }}
//                         fill="#1E293B"
//                       >
//                         {year.title}
//                       </text>
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + (isTablet ? 45 : 55)}
//                         textAnchor="middle"
//                         style={{ 
//                           fontSize: isTablet ? '12px' : '14px', 
//                           fontWeight: '600' 
//                         }}
//                         fill={year.color}
//                       >
//                         {year.subtitle}
//                       </text>
                      
//                       <foreignObject 
//                         x={boxX - boxWidth/2 + 15} 
//                         y={boxY - boxHeight/2 + (isTablet ? 65 : 75)} 
//                         width={boxWidth - 30} 
//                         height={boxHeight - (isTablet ? 75 : 85)}
//                       >
//                         <div 
//                           xmlns="http://www.w3.org/1999/xhtml"
//                           style={{
//                             fontSize: isTablet ? '11px' : '12px',
//                             color: '#64748B',
//                             lineHeight: '1.5',
//                             textAlign: 'center'
//                           }}
//                         >
//                           {year.description}
//                         </div>
//                       </foreignObject>
//                     </motion.g>
//                   </g>
//                 );
//               })}
//             </svg>
//           )}

//           {/* Mobile Timeline */}
//           {isMobile && (
//             <svg 
//               className="w-full h-full" 
//               viewBox={`0 0 300 ${years.length * 160 + 60}`} 
//               preserveAspectRatio="xMidYMid meet"
//               style={{ position: 'absolute', top: 0, left: 0 }}
//             >
//               <defs>
//                 <linearGradient id="mgradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                 </linearGradient>
                
//                 <linearGradient id="mpathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                   <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                   <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                   <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                   <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                   <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                 </linearGradient>

//                 <filter id="mdropShadow">
//                   <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                 </filter>
//               </defs>

//               <rect width="300" height={years.length * 160 + 60} fill="#F8FAFC" />

//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="#E2E8F0"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//               />
              
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="url(#mpathGradient)"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 variants={pathVariants}
//               />

//               {years.map((year, index) => {
//                 if (index === years.length - 1) return null;
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const nextYPos = calculateYPosition(index + 1, years.length);
//                 return (
//                   <motion.path
//                     key={`mline-${index}`}
//                     d={`M ${xPos},${yPos + 20} L ${xPos},${nextYPos - 20}`}
//                     fill="none"
//                     stroke={year.color}
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     strokeOpacity="0.5"
//                     variants={{
//                       hidden: { opacity: 0 },
//                       visible: { opacity: 1 }
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 );
//               })}

//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const radius = getCircleRadius();
//                 const gradientId = `mgradient${index + 1}`;
//                 const offset = calculateCardOffset(index);
//                 const { width: boxWidth, height: boxHeight } = getCardDimensions();
                
//                 return (
//                   <g key={index}>
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius + 8}
//                       fill="#F8FAFC"
//                       stroke="#E2E8F0"
//                       strokeWidth="2"
//                       filter="url(#mdropShadow)"
//                       variants={circleVariants}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke="#F1F5F9"
//                       strokeWidth="6"
//                       variants={circleVariants}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke={`url(#${gradientId})`}
//                       strokeWidth="6"
//                       strokeLinecap="round"
//                       initial={{ pathLength: 0 }}
//                       animate={{ pathLength: 1 }}
//                       transition={{ duration: 1.5, ease: "easeInOut" }}
//                     />

//                     <motion.text
//                       x={xPos}
//                       y={yPos}
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       fill={year.color}
//                       style={{ fontWeight: 'bold', fontSize: '14px' }}
//                       variants={yearTextVariants}
//                     >
//                       {year.year}
//                     </motion.text>

//                     <motion.g variants={cardVariants}>
//                       <rect
//                         x={xPos + offset.x - boxWidth/2}
//                         y={yPos - boxHeight/2}
//                         width={boxWidth}
//                         height={boxHeight}
//                         rx="12"
//                         fill="white"
//                         stroke="#E2E8F0"
//                         strokeWidth="1"
//                         filter="url(#mdropShadow)"
//                       />
                      
//                       <text
//                         x={xPos + offset.x}
//                         y={yPos - boxHeight/2 + 25}
//                         textAnchor="middle"
//                         style={{ fontSize: '14px', fontWeight: 'bold' }}
//                         fill="#1E293B"
//                       >
//                         {year.title}
//                       </text>
                      
//                       <text
//                         x={xPos + offset.x}
//                         y={yPos - boxHeight/2 + 45}
//                         textAnchor="middle"
//                         style={{ fontSize: '12px', fontWeight: '600' }}
//                         fill={year.color}
//                       >
//                         {year.subtitle}
//                       </text>
                      
//                       <foreignObject 
//                         x={xPos + offset.x - boxWidth/2 + 15} 
//                         y={yPos - boxHeight/2 + 65} 
//                         width={boxWidth - 30} 
//                         height={boxHeight - 75}
//                       >
//                         <div 
//                           xmlns="http://www.w3.org/1999/xhtml"
//                           style={{
//                             fontSize: '11px',
//                             color: '#64748B',
//                             lineHeight: '1.4',
//                             textAlign: 'center'
//                           }}
//                         >
//                           {year.description}
//                         </div>
//                       </foreignObject>
//                     </motion.g>
//                   </g>
//                 );
//               })}
//             </svg>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default YearlyTimeline;

// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { useMediaQuery } from 'react-responsive';

// const YearlyTimeline = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hasTriggered, setHasTriggered] = useState(false);
//   const timelineRef = useRef(null);
//   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
//   const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });

//   const years = [
//     {
//       "year": "2019",
//       "title": "Foundation",
//       "subtitle": "Founded as a research group",
//       "description": "Began as a research group focused on scientific innovation in Bangalore, India",
//       "color": "#8B5CF6"
//     },
//     {
//       "year": "2020",
//       "title": "Google Startups",
//       "subtitle": "Accelerated Growth",
//       "description": "Selected for Google Startups program to accelerate our technology development",
//       "color": "#0EA5E9"
//     },
//     {
//       "year": "2021",
//       "title": "Early Growth",
//       "subtitle": "Funding & First Product",
//       "description": "Raised $100k pre-seed funding, launched BoltChem beta, and joined Microsoft Startups",
//       "color": "#10B981"
//     },
//     {
//       "year": "2022",
//       "title": "Expansion",
//       "subtitle": "Strategic Partnerships",
//       "description": "Formed 2 key partnerships (US Biotech firm and top research lab) and 1 joint venture",
//       "color": "#F59E0B"
//     },
//     {
//       "year": "2023",
//       "title": "Product Launches",
//       "subtitle": "SaaS Platform & Collaborations",
//       "description": "Launched ReBolt SaaS and BoltPro beta. Collaborated with Indian pharmaceutical leaders",
//       "color": "#EC4899"
//     },
//     {
//       "year": "2024",
//       "title": "Innovation",
//       "subtitle": "AI Advancements",
//       "description": "Launched Boltbio alpha and Multi Agents beta with NASSCOM AI & SINE incubation",
//       "color": "#6366F1"
//     },
//     {
//       "year": "2025",
//       "title": "AI Discovery",
//       "subtitle": "Breakthrough Technologies",
//       "description": "Launched BZ AI discovery suite, Clinbolt beta, and established first self-driven lab",
//       "color": "#F97316"
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasTriggered) {
//           setIsVisible(true);
//           setHasTriggered(true);
//         }
//       },
//       {
//         threshold: 0.3, // Trigger when 30% of the component is visible
//         rootMargin: '0px 0px -100px 0px' // Start animation 100px before the element is fully visible
//       }
//     );

//     if (timelineRef.current) {
//       observer.observe(timelineRef.current);
//     }

//     return () => {
//       if (timelineRef.current) {
//         observer.unobserve(timelineRef.current);
//       }
//     };
//   }, [hasTriggered]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.15,
//         delay: 0.2
//       }
//     }
//   };

//   const pathVariants = {
//     hidden: { pathLength: 0, opacity: 0 },
//     visible: {
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         duration: 2,
//         ease: "easeInOut",
//         delay: 0.5
//       }
//     }
//   };

//   const circleVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.8
//       }
//     }
//   };

//   const yearTextVariants = {
//     hidden: { opacity: 0, scale: 0.5 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//         delay: 0.3
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const calculateXPosition = (index, total) => {
//     if (isMobile) return 50;
//     if (isTablet) return 100 + (index * 120);
//     return 150 + (index * 180);
//   };

//   const calculateYPosition = (index, total) => {
//     if (isMobile) return 60 + (index * 160);
//     return 250;
//   };

//   const calculatePath = () => {
//     if (isMobile) {
//       const firstY = calculateYPosition(0, years.length);
//       const lastY = calculateYPosition(years.length - 1, years.length);
//       return `M 50,${firstY} L 50,${lastY}`;
//     } else {
//       const firstX = calculateXPosition(0, years.length);
//       const lastX = calculateXPosition(years.length - 1, years.length);
//       return `M ${firstX},250 L ${lastX},250`;
//     }
//   };

//   const calculateCardOffset = (index) => {
//     if (isMobile) return { x: 120, y: 0 };
//     if (isTablet) return { x: 0, y: index % 2 === 0 ? 120 : -120 };
//     return { x: 0, y: index % 2 === 0 ? 150 : -150 };
//   };

//   const getCardDimensions = () => {
//     if (isMobile) return { width: 180, height: 120 };
//     if (isTablet) return { width: 200, height: 130 };
//     return { width: 220, height: 140 };
//   };

//   const getCircleRadius = () => {
//     if (isMobile) return 20;
//     if (isTablet) return 30;
//     return 40;
//   };

//   return (
//     <div className="bg-white px-4 sm:px-6 lg:px-8" style={{ 
//       paddingTop: '40px',
//       paddingBottom: '40px'
//     }}>
//       <div className="max-w-7xl mx-auto" ref={timelineRef}>
//         <motion.h2 
//           style={{
//             textAlign: 'center',
//             marginBottom: '2%',
//             fontWeight: 400,
//             color: '#4F1985',
//             fontSize: '2.5rem',
//             fontFamily: 'timesnew'
//           }}
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//           variants={titleVariants}
//         >
//           Our Timeline Journey.
//           <motion.span
//             style={{
//               display: "block",
//               width: "80px",
//               height: "4px",
//               backgroundColor: "#4F1985",
//               margin: "15px auto 0",
//               borderRadius: "2px"
//             }}
//             initial={{ scaleX: 0 }}
//             animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//           />
//         </motion.h2>
        
//         <motion.div 
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//           variants={containerVariants}
//           style={{ 
//             position: 'relative',
//             minHeight: isMobile ? `${years.length * 160 + 60}px` : '600px'
//           }}
//         >
//           {/* Desktop/Tablet Timeline */}
//           {!isMobile && (
//             <svg 
//               className="w-full h-[600px] hidden md:block" 
//               viewBox={`0 0 ${isTablet ? '900' : '1400'} 600`} 
//               preserveAspectRatio="xMidYMid meet"
//               style={{ position: 'absolute', top: 0, left: 0 }}
//             >
//               <defs>
//                 <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                 </linearGradient>
                
//                 <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                   <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                   <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                   <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                   <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                   <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                 </linearGradient>

//                 <filter id="dropShadow">
//                   <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                 </filter>
//               </defs>

//               <rect width={isTablet ? '900' : '1400'} height="600" fill="#F8FAFC" />

//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="#E2E8F0"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//                 initial={{ opacity: 0 }}
//                 animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//               />
              
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="url(#pathGradient)"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 variants={pathVariants}
//               />

//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const offset = calculateCardOffset(index);
//                 return (
//                   <motion.path
//                     key={`line-${index}`}
//                     d={`M ${xPos},${yPos} L ${xPos},${yPos + (offset.y > 0 ? offset.y - 20 : offset.y + 20)}`}
//                     fill="none"
//                     stroke={year.color}
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     strokeOpacity="0.5"
//                     variants={{
//                       hidden: { opacity: 0, pathLength: 0 },
//                       visible: { 
//                         opacity: 1, 
//                         pathLength: 1,
//                         transition: { 
//                           duration: 0.8, 
//                           delay: index * 0.1 + 1
//                         }
//                       }
//                     }}
//                   />
//                 );
//               })}

//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const radius = getCircleRadius();
//                 const gradientId = `gradient${index + 1}`;
//                 const offset = calculateCardOffset(index);
//                 const boxX = xPos + offset.x;
//                 const boxY = yPos + offset.y;
//                 const { width: boxWidth, height: boxHeight } = getCardDimensions();
                
//                 return (
//                   <g key={index}>
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius + 8}
//                       fill="#F8FAFC"
//                       stroke="#E2E8F0"
//                       strokeWidth="2"
//                       filter="url(#dropShadow)"
//                       variants={circleVariants}
//                       custom={index}
//                       transition={{ delay: index * 0.1 + 0.8 }}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke="#F1F5F9"
//                       strokeWidth="8"
//                       variants={circleVariants}
//                       custom={index}
//                       transition={{ delay: index * 0.1 + 0.8 }}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke={`url(#${gradientId})`}
//                       strokeWidth="8"
//                       strokeLinecap="round"
//                       initial={{ pathLength: 0, opacity: 0 }}
//                       animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
//                       transition={{ 
//                         duration: 1.2, 
//                         ease: "easeInOut", 
//                         delay: index * 0.1 + 1.2
//                       }}
//                     />

//                     <motion.text
//                       x={xPos}
//                       y={yPos}
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       fill={year.color}
//                       style={{ 
//                         fontWeight: 'bold', 
//                         fontSize: isTablet ? '14px' : '18px' 
//                       }}
//                       variants={yearTextVariants}
//                       custom={index}
//                       transition={{ delay: index * 0.1 + 1.5 }}
//                     >
//                       {year.year}
//                     </motion.text>

//                     <motion.g 
//                       variants={cardVariants}
//                       custom={index}
//                       transition={{ delay: index * 0.1 + 1.8 }}
//                     >
//                       <rect
//                         x={boxX - boxWidth/2}
//                         y={boxY - boxHeight/2}
//                         width={boxWidth}
//                         height={boxHeight}
//                         rx="12"
//                         fill="white"
//                         stroke="#E2E8F0"
//                         strokeWidth="1"
//                         filter="url(#dropShadow)"
//                       />
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + (isTablet ? 25 : 30)}
//                         textAnchor="middle"
//                         style={{ 
//                           fontSize: isTablet ? '14px' : '16px', 
//                           fontWeight: 'bold' 
//                         }}
//                         fill="#1E293B"
//                       >
//                         {year.title}
//                       </text>
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + (isTablet ? 45 : 55)}
//                         textAnchor="middle"
//                         style={{ 
//                           fontSize: isTablet ? '12px' : '14px', 
//                           fontWeight: '600' 
//                         }}
//                         fill={year.color}
//                       >
//                         {year.subtitle}
//                       </text>
                      
//                       <foreignObject 
//                         x={boxX - boxWidth/2 + 15} 
//                         y={boxY - boxHeight/2 + (isTablet ? 65 : 75)} 
//                         width={boxWidth - 30} 
//                         height={boxHeight - (isTablet ? 75 : 85)}
//                       >
//                         <div 
//                           xmlns="http://www.w3.org/1999/xhtml"
//                           style={{
//                             fontSize: isTablet ? '11px' : '12px',
//                             color: '#64748B',
//                             lineHeight: '1.5',
//                             textAlign: 'center'
//                           }}
//                         >
//                           {year.description}
//                         </div>
//                       </foreignObject>
//                     </motion.g>
//                   </g>
//                 );
//               })}
//             </svg>
//           )}

//           {/* Mobile Timeline */}
//           {isMobile && (
//             <svg 
//               className="w-full h-full" 
//               viewBox={`0 0 300 ${years.length * 160 + 60}`} 
//               preserveAspectRatio="xMidYMid meet"
//               style={{ position: 'absolute', top: 0, left: 0 }}
//             >
//               <defs>
//                 <linearGradient id="mgradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                 </linearGradient>
                
//                 <linearGradient id="mpathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                   <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                   <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                   <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                   <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                   <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                 </linearGradient>

//                 <filter id="mdropShadow">
//                   <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                 </filter>
//               </defs>

//               <rect width="300" height={years.length * 160 + 60} fill="#F8FAFC" />

//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="#E2E8F0"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//                 initial={{ opacity: 0 }}
//                 animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//               />
              
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="url(#mpathGradient)"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 variants={pathVariants}
//               />

//               {years.map((year, index) => {
//                 if (index === years.length - 1) return null;
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const nextYPos = calculateYPosition(index + 1, years.length);
//                 return (
//                   <motion.path
//                     key={`mline-${index}`}
//                     d={`M ${xPos},${yPos + 20} L ${xPos},${nextYPos - 20}`}
//                     fill="none"
//                     stroke={year.color}
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     strokeOpacity="0.5"
//                     variants={{
//                       hidden: { opacity: 0, pathLength: 0 },
//                       visible: { 
//                         opacity: 1, 
//                         pathLength: 1,
//                         transition: { 
//                           duration: 0.8, 
//                           delay: index * 0.1 + 1
//                         }
//                       }
//                     }}
//                   />
//                 );
//               })}

//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const radius = getCircleRadius();
//                 const gradientId = `mgradient${index + 1}`;
//                 const offset = calculateCardOffset(index);
//                 const { width: boxWidth, height: boxHeight } = getCardDimensions();
                
//                 return (
//                   <g key={index}>
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius + 8}
//                       fill="#F8FAFC"
//                       stroke="#E2E8F0"
//                       strokeWidth="2"
//                       filter="url(#mdropShadow)"
//                       variants={circleVariants}
//                       custom={index}
//                       transition={{ delay: index * 0.1 + 0.8 }}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke="#F1F5F9"
//                       strokeWidth="6"
//                       variants={circleVariants}
//                       custom={index}
//                       transition={{ delay: index * 0.1 + 0.8 }}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke={`url(#${gradientId})`}
//                       strokeWidth="6"
//                       strokeLinecap="round"
//                       initial={{ pathLength: 0, opacity: 0 }}
//                       animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
//                       transition={{ 
//                         duration: 1.2, 
//                         ease: "easeInOut", 
//                         delay: index * 0.1 + 1.2
//                       }}
//                     />

//                     <motion.text
//                       x={xPos}
//                       y={yPos}
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       fill={year.color}
//                       style={{ fontWeight: 'bold', fontSize: '14px' }}
//                       variants={yearTextVariants}
//                       custom={index}
//                       transition={{ delay: index * 0.1 + 1.5 }}
//                     >
//                       {year.year}
//                     </motion.text>

//                     <motion.g 
//                       variants={cardVariants}
//                       custom={index}
//                       transition={{ delay: index * 0.1 + 1.8 }}
//                     >
//                       <rect
//                         x={xPos + offset.x - boxWidth/2}
//                         y={yPos - boxHeight/2}
//                         width={boxWidth}
//                         height={boxHeight}
//                         rx="12"
//                         fill="white"
//                         stroke="#E2E8F0"
//                         strokeWidth="1"
//                         filter="url(#mdropShadow)"
//                       />
                      
//                       <text
//                         x={xPos + offset.x}
//                         y={yPos - boxHeight/2 + 25}
//                         textAnchor="middle"
//                         style={{ fontSize: '14px', fontWeight: 'bold' }}
//                         fill="#1E293B"
//                       >
//                         {year.title}
//                       </text>
                      
//                       <text
//                         x={xPos + offset.x}
//                         y={yPos - boxHeight/2 + 45}
//                         textAnchor="middle"
//                         style={{ fontSize: '12px', fontWeight: '600' }}
//                         fill={year.color}
//                       >
//                         {year.subtitle}
//                       </text>
                      
//                       <foreignObject 
//                         x={xPos + offset.x - boxWidth/2 + 15} 
//                         y={yPos - boxHeight/2 + 65} 
//                         width={boxWidth - 30} 
//                         height={boxHeight - 75}
//                       >
//                         <div 
//                           xmlns="http://www.w3.org/1999/xhtml"
//                           style={{
//                             fontSize: '11px',
//                             color: '#64748B',
//                             lineHeight: '1.4',
//                             textAlign: 'center'
//                           }}
//                         >
//                           {year.description}
//                         </div>
//                       </foreignObject>
//                     </motion.g>
//                   </g>
//                 );
//               })}
//             </svg>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default YearlyTimeline;




// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { useMediaQuery } from 'react-responsive';

// const YearlyTimeline = () => {
//   const [isInView, setIsInView] = useState(false);
//   const timelineRef = useRef(null);
//   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
//   const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });

//   const years = [
//     {
//       "year": "2019",
//       "title": "Foundation",
//       "subtitle": "Founded as a research group",
//       "description": "Began as a research group focused on scientific innovation in Bangalore, India",
//       "color": "#8B5CF6"
//     },
//     {
//       "year": "2020",
//       "title": "Google Startups",
//       "subtitle": "Accelerated Growth",
//       "description": "Selected for Google Startups program to accelerate our technology development",
//       "color": "#0EA5E9"
//     },
//     {
//       "year": "2021",
//       "title": "Early Growth",
//       "subtitle": "Funding & First Product",
//       "description": "Raised $100k pre-seed funding, launched BoltChem beta, and joined Microsoft Startups",
//       "color": "#10B981"
//     },
//     {
//       "year": "2022",
//       "title": "Expansion",
//       "subtitle": "Strategic Partnerships",
//       "description": "Formed 2 key partnerships (US Biotech firm and top research lab) and 1 joint venture",
//       "color": "#F59E0B"
//     },
//     {
//       "year": "2023",
//       "title": "Product Launches",
//       "subtitle": "SaaS Platform & Collaborations",
//       "description": "Launched ReBolt SaaS and BoltPro beta. Collaborated with Indian pharmaceutical leaders",
//       "color": "#EC4899"
//     },
//     {
//       "year": "2024",
//       "title": "Innovation",
//       "subtitle": "AI Advancements",
//       "description": "Launched Boltbio alpha and Multi Agents beta with NASSCOM AI & SINE incubation",
//       "color": "#6366F1"
//     },
//     {
//       "year": "2025",
//       "title": "AI Discovery",
//       "subtitle": "Breakthrough Technologies",
//       "description": "Launched BZ AI discovery suite, Clinbolt beta, and established first self-driven lab",
//       "color": "#F97316"
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         }
//       },
//       {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.3
//       }
//     );

//     if (timelineRef.current) {
//       observer.observe(timelineRef.current);
//     }

//     return () => {
//       if (timelineRef.current) {
//         observer.unobserve(timelineRef.current);
//       }
//     };
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const pathVariants = {
//     hidden: { pathLength: 0 },
//     visible: {
//       pathLength: 1,
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const circleVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.8
//       }
//     }
//   };

//   const yearTextVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const calculateXPosition = (index, total) => {
//     if (isMobile) return 50;
//     if (isTablet) return 100 + (index * 120);
//     return 150 + (index * 180);
//   };

//   const calculateYPosition = (index, total) => {
//     if (isMobile) return 60 + (index * 160);
//     return 250;
//   };

//   const calculatePath = () => {
//     if (isMobile) {
//       const firstY = calculateYPosition(0, years.length);
//       const lastY = calculateYPosition(years.length - 1, years.length);
//       return `M 50,${firstY} L 50,${lastY}`;
//     } else {
//       const firstX = calculateXPosition(0, years.length);
//       const lastX = calculateXPosition(years.length - 1, years.length);
//       return `M ${firstX},250 L ${lastX},250`;
//     }
//   };

//   const calculateCardOffset = (index) => {
//     if (isMobile) return { x: 120, y: 0 };
//     if (isTablet) return { x: 0, y: index % 2 === 0 ? 120 : -120 };
//     return { x: 0, y: index % 2 === 0 ? 150 : -150 };
//   };

//   const getCardDimensions = () => {
//     if (isMobile) return { width: 180, height: 120 };
//     if (isTablet) return { width: 200, height: 130 };
//     return { width: 220, height: 140 };
//   };

//   const getCircleRadius = () => {
//     if (isMobile) return 20;
//     if (isTablet) return 30;
//     return 40;
//   };

//   return (
//     <div 
//       className="bg-white px-4 sm:px-6 lg:px-8" 
//       style={{ 
//         paddingTop: '40px',
//         paddingBottom: '40px'
//       }}
//       ref={timelineRef}
//     >
//       <div className="max-w-7xl mx-auto">
//         <h2 style={{textAlign: 'center',marginBottom: '2%',fontWeight: 400,color: '#4F1985',fontSize: '2.5rem',fontFamily: 'timesnew'}}>Our Timeline Journey.
//          <span
//             style={{
//               display: "block",
//               width: "80px",
//               height: "4px",
//               backgroundColor: "#4F1985",
//               margin: "15px auto 0",
//               borderRadius: "2px"
//             }}
//           />
//      </h2>
        
//         <motion.div 
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={containerVariants}
//           style={{ 
//             position: 'relative',
//             minHeight: isMobile ? `${years.length * 160 + 60}px` : '600px'
//           }}
//         >
//           {/* Desktop/Tablet Timeline */}
//           {!isMobile && (
//             <svg 
//               className="w-full h-[600px] hidden md:block" 
//               viewBox={`0 0 ${isTablet ? '900' : '1400'} 600`} 
//               preserveAspectRatio="xMidYMid meet"
//               style={{ position: 'absolute', top: 0, left: 0 }}
//             >
//               <defs>
//                 <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                 </linearGradient>
                
//                 <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                   <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                   <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                   <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                   <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                   <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                 </linearGradient>

//                 <filter id="dropShadow">
//                   <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                 </filter>
//               </defs>

//               <rect width={isTablet ? '900' : '1400'} height="600" fill="#F8FAFC" />

//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="#E2E8F0"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//               />
              
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="url(#pathGradient)"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 variants={pathVariants}
//               />

//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const offset = calculateCardOffset(index);
//                 return (
//                   <motion.path
//                     key={`line-${index}`}
//                     d={`M ${xPos},${yPos} L ${xPos},${yPos + (offset.y > 0 ? offset.y - 20 : offset.y + 20)}`}
//                     fill="none"
//                     stroke={year.color}
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     strokeOpacity="0.5"
//                     variants={{
//                       hidden: { opacity: 0 },
//                       visible: { opacity: 1 }
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 );
//               })}

//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const radius = getCircleRadius();
//                 const gradientId = `gradient${index + 1}`;
//                 const offset = calculateCardOffset(index);
//                 const boxX = xPos + offset.x;
//                 const boxY = yPos + offset.y;
//                 const { width: boxWidth, height: boxHeight } = getCardDimensions();
                
//                 return (
//                   <g key={index}>
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius + 8}
//                       fill="#F8FAFC"
//                       stroke="#E2E8F0"
//                       strokeWidth="2"
//                       filter="url(#dropShadow)"
//                       variants={circleVariants}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke="#F1F5F9"
//                       strokeWidth="8"
//                       variants={circleVariants}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke={`url(#${gradientId})`}
//                       strokeWidth="8"
//                       strokeLinecap="round"
//                       initial={{ pathLength: 0 }}
//                       animate={{ pathLength: 1 }}
//                       transition={{ duration: 1.5, ease: "easeInOut" }}
//                     />

//                     <motion.text
//                       x={xPos}
//                       y={yPos}
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       fill={year.color}
//                       style={{ 
//                         fontWeight: 'bold', 
//                         fontSize: isTablet ? '14px' : '18px' 
//                       }}
//                       variants={yearTextVariants}
//                     >
//                       {year.year}
//                     </motion.text>

//                     <motion.g variants={cardVariants}>
//                       <rect
//                         x={boxX - boxWidth/2}
//                         y={boxY - boxHeight/2}
//                         width={boxWidth}
//                         height={boxHeight}
//                         rx="12"
//                         fill="white"
//                         stroke="#E2E8F0"
//                         strokeWidth="1"
//                         filter="url(#dropShadow)"
//                       />
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + (isTablet ? 25 : 30)}
//                         textAnchor="middle"
//                         style={{ 
//                           fontSize: isTablet ? '14px' : '16px', 
//                           fontWeight: 'bold' 
//                         }}
//                         fill="#1E293B"
//                       >
//                         {year.title}
//                       </text>
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + (isTablet ? 45 : 55)}
//                         textAnchor="middle"
//                         style={{ 
//                           fontSize: isTablet ? '12px' : '14px', 
//                           fontWeight: '600' 
//                         }}
//                         fill={year.color}
//                       >
//                         {year.subtitle}
//                       </text>
                      
//                       <foreignObject 
//                         x={boxX - boxWidth/2 + 15} 
//                         y={boxY - boxHeight/2 + (isTablet ? 65 : 75)} 
//                         width={boxWidth - 30} 
//                         height={boxHeight - (isTablet ? 75 : 85)}
//                       >
//                         <div 
//                           xmlns="http://www.w3.org/1999/xhtml"
//                           style={{
//                             fontSize: isTablet ? '11px' : '12px',
//                             color: '#64748B',
//                             lineHeight: '1.5',
//                             textAlign: 'center'
//                           }}
//                         >
//                           {year.description}
//                         </div>
//                       </foreignObject>
//                     </motion.g>
//                   </g>
//                 );
//               })}
//             </svg>
//           )}

//           {/* Mobile Timeline */}
//           {isMobile && (
//             <svg 
//               className="w-full h-full" 
//               viewBox={`0 0 300 ${years.length * 160 + 60}`} 
//               preserveAspectRatio="xMidYMid meet"
//               style={{ position: 'absolute', top: 0, left: 0 }}
//             >
//               <defs>
//                 <linearGradient id="mgradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="mgradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                 </linearGradient>
                
//                 <linearGradient id="mpathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                   <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                   <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                   <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                   <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                   <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                 </linearGradient>

//                 <filter id="mdropShadow">
//                   <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                 </filter>
//               </defs>

//               <rect width="300" height={years.length * 160 + 60} fill="#F8FAFC" />

//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="#E2E8F0"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//               />
              
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="url(#mpathGradient)"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 variants={pathVariants}
//               />

//               {years.map((year, index) => {
//                 if (index === years.length - 1) return null;
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const nextYPos = calculateYPosition(index + 1, years.length);
//                 return (
//                   <motion.path
//                     key={`mline-${index}`}
//                     d={`M ${xPos},${yPos + 20} L ${xPos},${nextYPos - 20}`}
//                     fill="none"
//                     stroke={year.color}
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     strokeOpacity="0.5"
//                     variants={{
//                       hidden: { opacity: 0 },
//                       visible: { opacity: 1 }
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 );
//               })}

//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const radius = getCircleRadius();
//                 const gradientId = `mgradient${index + 1}`;
//                 const offset = calculateCardOffset(index);
//                 const { width: boxWidth, height: boxHeight } = getCardDimensions();
                
//                 return (
//                   <g key={index}>
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius + 8}
//                       fill="#F8FAFC"
//                       stroke="#E2E8F0"
//                       strokeWidth="2"
//                       filter="url(#mdropShadow)"
//                       variants={circleVariants}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke="#F1F5F9"
//                       strokeWidth="6"
//                       variants={circleVariants}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke={`url(#${gradientId})`}
//                       strokeWidth="6"
//                       strokeLinecap="round"
//                       initial={{ pathLength: 0 }}
//                       animate={{ pathLength: 1 }}
//                       transition={{ duration: 1.5, ease: "easeInOut" }}
//                     />

//                     <motion.text
//                       x={xPos}
//                       y={yPos}
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       fill={year.color}
//                       style={{ fontWeight: 'bold', fontSize: '14px' }}
//                       variants={yearTextVariants}
//                     >
//                       {year.year}
//                     </motion.text>

//                     <motion.g variants={cardVariants}>
//                       <rect
//                         x={xPos + offset.x - boxWidth/2}
//                         y={yPos - boxHeight/2}
//                         width={boxWidth}
//                         height={boxHeight}
//                         rx="12"
//                         fill="white"
//                         stroke="#E2E8F0"
//                         strokeWidth="1"
//                         filter="url(#mdropShadow)"
//                       />
                      
//                       <text
//                         x={xPos + offset.x}
//                         y={yPos - boxHeight/2 + 25}
//                         textAnchor="middle"
//                         style={{ fontSize: '14px', fontWeight: 'bold' }}
//                         fill="#1E293B"
//                       >
//                         {year.title}
//                       </text>
                      
//                       <text
//                         x={xPos + offset.x}
//                         y={yPos - boxHeight/2 + 45}
//                         textAnchor="middle"
//                         style={{ fontSize: '12px', fontWeight: '600' }}
//                         fill={year.color}
//                       >
//                         {year.subtitle}
//                       </text>
                      
//                       <foreignObject 
//                         x={xPos + offset.x - boxWidth/2 + 15} 
//                         y={yPos - boxHeight/2 + 65} 
//                         width={boxWidth - 30} 
//                         height={boxHeight - 75}
//                       >
//                         <div 
//                           xmlns="http://www.w3.org/1999/xhtml"
//                           style={{
//                             fontSize: '11px',
//                             color: '#64748B',
//                             lineHeight: '1.4',
//                             textAlign: 'center'
//                           }}
//                         >
//                           {year.description}
//                         </div>
//                       </foreignObject>
//                     </motion.g>
//                   </g>
//                 );
//               })}
//             </svg>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default YearlyTimeline;

// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { useMediaQuery } from 'react-responsive';

// const YearlyTimeline = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isInView, setIsInView] = useState(false);
//   const timelineRef = useRef(null);
//   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
//   const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });

//   const years = [
//     {
//       "year": "2019",
//       "title": "Foundation",
//       "subtitle": "Founded as a research group",
//       "description": "Began as a research group focused on scientific innovation in Bangalore, India",
//       "color": "#8B5CF6"
//     },
//     {
//       "year": "2020",
//       "title": "Google Startups",
//       "subtitle": "Accelerated Growth",
//       "description": "Selected for Google Startups program to accelerate our technology development",
//       "color": "#0EA5E9"
//     },
//     {
//       "year": "2021",
//       "title": "Early Growth",
//       "subtitle": "Funding & First Product",
//       "description": "Raised $100k pre-seed funding, launched BoltChem beta, and joined Microsoft Startups",
//       "color": "#10B981"
//     },
//     {
//       "year": "2022",
//       "title": "Expansion",
//       "subtitle": "Strategic Partnerships",
//       "description": "Formed 2 key partnerships (US Biotech firm and top research lab) and 1 joint venture",
//       "color": "#F59E0B"
//     },
//     {
//       "year": "2023",
//       "title": "Product Launches",
//       "subtitle": "SaaS Platform & Collaborations",
//       "description": "Launched ReBolt SaaS and BoltPro beta. Collaborated with Indian pharmaceutical leaders",
//       "color": "#EC4899"
//     },
//     {
//       "year": "2024",
//       "title": "Innovation",
//       "subtitle": "AI Advancements",
//       "description": "Launched Boltbio alpha and Multi Agents beta with NASSCOM AI & SINE incubation",
//       "color": "#6366F1"
//     },
//     {
//       "year": "2025",
//       "title": "AI Discovery",
//       "subtitle": "Breakthrough Technologies",
//       "description": "Launched BZ AI discovery suite, Clinbolt beta, and established first self-driven lab",
//       "color": "#F97316"
//     }
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.1
//       }
//     );

//     if (timelineRef.current) {
//       observer.observe(timelineRef.current);
//     }

//     return () => {
//       if (timelineRef.current) {
//         observer.unobserve(timelineRef.current);
//       }
//     };
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const pathVariants = {
//     hidden: { pathLength: 0 },
//     visible: {
//       pathLength: 1,
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const circleVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.8
//       }
//     }
//   };

//   const yearTextVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const calculateXPosition = (index, total) => {
//     if (isMobile) return 50;
//     if (isTablet) return 100 + (index * 120);
//     return 150 + (index * 180);
//   };

//   const calculateYPosition = (index, total) => {
//     if (isMobile) return 60 + (index * 160);
//     return 250;
//   };

//   const calculatePath = () => {
//     if (isMobile) {
//       const firstY = calculateYPosition(0, years.length);
//       const lastY = calculateYPosition(years.length - 1, years.length);
//       return `M 50,${firstY} L 50,${lastY}`;
//     } else {
//       const firstX = calculateXPosition(0, years.length);
//       const lastX = calculateXPosition(years.length - 1, years.length);
//       return `M ${firstX},250 L ${lastX},250`;
//     }
//   };

//   const calculateCardOffset = (index) => {
//     if (isMobile) return { x: 120, y: 0 };
//     if (isTablet) return { x: 0, y: index % 2 === 0 ? 120 : -120 };
//     return { x: 0, y: index % 2 === 0 ? 150 : -150 };
//   };

//   const getCardDimensions = () => {
//     if (isMobile) return { width: 180, height: 120 };
//     if (isTablet) return { width: 200, height: 130 };
//     return { width: 220, height: 140 };
//   };

//   const getCircleRadius = () => {
//     if (isMobile) return 20;
//     if (isTablet) return 30;
//     return 40;
//   };

//   return (
//     <div className="bg-white px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ 
//       paddingTop: '40px',
//       paddingBottom: '40px',
//       marginBottom: '0'
//     }} ref={timelineRef}>
//       <div className="max-w-7xl mx-auto">
//         <h2 style={{textAlign: 'center',marginBottom: '2%',fontWeight: 400,color: '#4F1985',fontSize: '2.5rem',fontFamily: 'timesnew'}}>Our Timeline Journey.
//          <span
//             style={{
//               display: "block",
//               width: "80px",
//               height: "4px",
//               backgroundColor: "#4F1985",
//               margin: "15px auto 0",
//               borderRadius: "2px"
//             }}
//           />
//      </h2>
        
//         <motion.div 
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={containerVariants}
//         >
//           {/* Desktop/Tablet Timeline */}
//           {!isMobile && (
//             <svg 
//               className="w-full h-[600px] hidden md:block" 
//               viewBox={`0 0 ${isTablet ? '900' : '1400'} 600`} 
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <defs>
//                 <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                 </linearGradient>
                
//                 <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                   <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                   <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                   <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                   <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                   <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                 </linearGradient>

//                 <filter id="dropShadow">
//                   <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                 </filter>
//               </defs>

//               <rect width={isTablet ? '900' : '1400'} height="600" fill="#F8FAFC" />

//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="#E2E8F0"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//               />
              
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="url(#pathGradient)"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 variants={pathVariants}
//               />

//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const offset = calculateCardOffset(index);
//                 return (
//                   <motion.path
//                     key={`line-${index}`}
//                     d={`M ${xPos},${yPos} L ${xPos},${yPos + (offset.y > 0 ? offset.y - 20 : offset.y + 20)}`}
//                     fill="none"
//                     stroke={year.color}
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     strokeOpacity="0.5"
//                     variants={{
//                       hidden: { opacity: 0 },
//                       visible: { opacity: 1 }
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 );
//               })}

//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const radius = getCircleRadius();
//                 const gradientId = `gradient${index + 1}`;
//                 const offset = calculateCardOffset(index);
//                 const boxX = xPos + offset.x;
//                 const boxY = yPos + offset.y;
//                 const { width: boxWidth, height: boxHeight } = getCardDimensions();
                
//                 return (
//                   <g key={index}>
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius + 8}
//                       fill="#F8FAFC"
//                       stroke="#E2E8F0"
//                       strokeWidth="2"
//                       filter="url(#dropShadow)"
//                       variants={circleVariants}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke="#F1F5F9"
//                       strokeWidth="8"
//                       variants={circleVariants}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke={`url(#${gradientId})`}
//                       strokeWidth="8"
//                       strokeLinecap="round"
//                       initial={{ pathLength: 0 }}
//                       animate={{ pathLength: 1 }}
//                       transition={{ duration: 1.5, ease: "easeInOut" }}
//                     />

//                     <motion.text
//                       x={xPos}
//                       y={yPos}
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       fill={year.color}
//                       style={{ 
//                         fontWeight: 'bold', 
//                         fontSize: isTablet ? '14px' : '18px' 
//                       }}
//                       variants={yearTextVariants}
//                     >
//                       {year.year}
//                     </motion.text>

//                     <motion.g variants={cardVariants}>
//                       <rect
//                         x={boxX - boxWidth/2}
//                         y={boxY - boxHeight/2}
//                         width={boxWidth}
//                         height={boxHeight}
//                         rx="12"
//                         fill="white"
//                         stroke="#E2E8F0"
//                         strokeWidth="1"
//                         filter="url(#dropShadow)"
//                       />
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + (isTablet ? 25 : 30)}
//                         textAnchor="middle"
//                         style={{ 
//                           fontSize: isTablet ? '14px' : '16px', 
//                           fontWeight: 'bold' 
//                         }}
//                         fill="#1E293B"
//                       >
//                         {year.title}
//                       </text>
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + (isTablet ? 45 : 55)}
//                         textAnchor="middle"
//                         style={{ 
//                           fontSize: isTablet ? '12px' : '14px', 
//                           fontWeight: '600' 
//                         }}
//                         fill={year.color}
//                       >
//                         {year.subtitle}
//                       </text>
                      
//                       <foreignObject 
//                         x={boxX - boxWidth/2 + 15} 
//                         y={boxY - boxHeight/2 + (isTablet ? 65 : 75)} 
//                         width={boxWidth - 30} 
//                         height={boxHeight - (isTablet ? 75 : 85)}
//                       >
//                         <div 
//                           xmlns="http://www.w3.org/1999/xhtml"
//                           style={{
//                             fontSize: isTablet ? '11px' : '12px',
//                             color: '#64748B',
//                             lineHeight: '1.5',
//                             textAlign: 'center'
//                           }}
//                         >
//                           {year.description}
//                         </div>
//                       </foreignObject>
//                     </motion.g>
//                   </g>
//                 );
//               })}
//             </svg>
//           )}

//           {/* Mobile Timeline */}
//           {isMobile && (
//             <div className=" relative w-full md:hidden" style={{ paddingBottom: "80px",  height: `${years.length * 160 + 60}px` }}>
//               <svg 
//                 className="w-full h-full" 
//                 viewBox={`0 0 300 ${years.length * 160 + 60}`} 
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <defs>
//                   <linearGradient id="mgradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                   </linearGradient>
                  
//                   <linearGradient id="mpathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                     <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                     <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                     <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                     <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                     <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                     <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                   </linearGradient>

//                   <filter id="mdropShadow">
//                     <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                   </filter>
//                 </defs>

//                 <rect width="300" height={years.length * 160 + 60} fill="#F8FAFC" />

//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="#E2E8F0"
//                   strokeWidth="3"
//                   strokeDasharray="8,4"
//                 />
                
//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="url(#mpathGradient)"
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                   variants={pathVariants}
//                 />

//                 {years.map((year, index) => {
//                   if (index === years.length - 1) return null;
//                   const xPos = calculateXPosition(index, years.length);
//                   const yPos = calculateYPosition(index, years.length);
//                   const nextYPos = calculateYPosition(index + 1, years.length);
//                   return (
//                     <motion.path
//                       key={`mline-${index}`}
//                       d={`M ${xPos},${yPos + 20} L ${xPos},${nextYPos - 20}`}
//                       fill="none"
//                       stroke={year.color}
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       strokeOpacity="0.5"
//                       variants={{
//                         hidden: { opacity: 0 },
//                         visible: { opacity: 1 }
//                       }}
//                       transition={{ duration: 0.5 }}
//                     />
//                   );
//                 })}

//                 {years.map((year, index) => {
//                   const xPos = calculateXPosition(index, years.length);
//                   const yPos = calculateYPosition(index, years.length);
//                   const radius = getCircleRadius();
//                   const gradientId = `mgradient${index + 1}`;
//                   const offset = calculateCardOffset(index);
//                   const { width: boxWidth, height: boxHeight } = getCardDimensions();
                  
//                   return (
//                     <g key={index}>
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius + 8}
//                         fill="#F8FAFC"
//                         stroke="#E2E8F0"
//                         strokeWidth="2"
//                         filter="url(#mdropShadow)"
//                         variants={circleVariants}
//                       />
                      
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke="#F1F5F9"
//                         strokeWidth="6"
//                         variants={circleVariants}
//                       />
                      
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke={`url(#${gradientId})`}
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         initial={{ pathLength: 0 }}
//                         animate={{ pathLength: 1 }}
//                         transition={{ duration: 1.5, ease: "easeInOut" }}
//                       />

//                       <motion.text
//                         x={xPos}
//                         y={yPos}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                         fill={year.color}
//                         style={{ fontWeight: 'bold', fontSize: '14px' }}
//                         variants={yearTextVariants}
//                       >
//                         {year.year}
//                       </motion.text>

//                       <motion.g variants={cardVariants}>
//                         <rect
//                           x={xPos + offset.x - boxWidth/2}
//                           y={yPos - boxHeight/2}
//                           width={boxWidth}
//                           height={boxHeight}
//                           rx="12"
//                           fill="white"
//                           stroke="#E2E8F0"
//                           strokeWidth="1"
//                           filter="url(#mdropShadow)"
//                         />
                        
//                         <text
//                           x={xPos + offset.x}
//                           y={yPos - boxHeight/2 + 25}
//                           textAnchor="middle"
//                           style={{ fontSize: '14px', fontWeight: 'bold' }}
//                           fill="#1E293B"
//                         >
//                           {year.title}
//                         </text>
                        
//                         <text
//                           x={xPos + offset.x}
//                           y={yPos - boxHeight/2 + 45}
//                           textAnchor="middle"
//                           style={{ fontSize: '12px', fontWeight: '600' }}
//                           fill={year.color}
//                         >
//                           {year.subtitle}
//                         </text>
                        
//                         <foreignObject 
//                           x={xPos + offset.x - boxWidth/2 + 15} 
//                           y={yPos - boxHeight/2 + 65} 
//                           width={boxWidth - 30} 
//                           height={boxHeight - 75}
//                         >
//                           <div 
//                             xmlns="http://www.w3.org/1999/xhtml"
//                             style={{
//                               fontSize: '11px',
//                               color: '#64748B',
//                               lineHeight: '1.4',
//                               textAlign: 'center'
//                             }}
//                           >
//                             {year.description}
//                           </div>
//                         </foreignObject>
//                       </motion.g>
//                     </g>
//                   );
//                 })}
//               </svg>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default YearlyTimeline;

//round

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useMediaQuery } from 'react-responsive';

// const YearlyTimeline = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
//   const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });

//   const years = [
//     {
//       "year": "2019",
//       "title": "Foundation",
//       "subtitle": "Founded as a research group",
//       "description": "Began as a research group focused on scientific innovation in Bangalore, India",
//       "color": "#8B5CF6"
//     },
//     {
//       "year": "2020",
//       "title": "Google Startups",
//       "subtitle": "Accelerated Growth",
//       "description": "Selected for Google Startups program to accelerate our technology development",
//       "color": "#0EA5E9"
//     },
//     {
//       "year": "2021",
//       "title": "Early Growth",
//       "subtitle": "Funding & First Product",
//       "description": "Raised $100k pre-seed funding, launched BoltChem beta, and joined Microsoft Startups",
//       "color": "#10B981"
//     },
//     {
//       "year": "2022",
//       "title": "Expansion",
//       "subtitle": "Strategic Partnerships",
//       "description": "Formed 2 key partnerships (US Biotech firm and top research lab) and 1 joint venture",
//       "color": "#F59E0B"
//     },
//     {
//       "year": "2023",
//       "title": "Product Launches",
//       "subtitle": "SaaS Platform & Collaborations",
//       "description": "Launched ReBolt SaaS and BoltPro beta. Collaborated with Indian pharmaceutical leaders",
//       "color": "#EC4899"
//     },
//     {
//       "year": "2024",
//       "title": "Innovation",
//       "subtitle": "AI Advancements",
//       "description": "Launched Boltbio alpha and Multi Agents beta with NASSCOM AI & SINE incubation",
//       "color": "#6366F1"
//     },
//     {
//       "year": "2025",
//       "title": "AI Discovery",
//       "subtitle": "Breakthrough Technologies",
//       "description": "Launched BZ AI discovery suite, Clinbolt beta, and established first self-driven lab",
//       "color": "#F97316"
//     }
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const pathVariants = {
//     hidden: { pathLength: 0 },
//     visible: {
//       pathLength: 1,
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const circleVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.8
//       }
//     }
//   };

//   const yearTextVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const calculateXPosition = (index, total) => {
//     if (isMobile) return 50;
//     if (isTablet) return 100 + (index * 120);
//     return 150 + (index * 180);
//   };

//   const calculateYPosition = (index, total) => {
//     if (isMobile) return 60 + (index * 160);
//     return 250;
//   };

//   const calculatePath = () => {
//     if (isMobile) {
//       const firstY = calculateYPosition(0, years.length);
//       const lastY = calculateYPosition(years.length - 1, years.length);
//       return `M 50,${firstY} L 50,${lastY}`;
//     } else {
//       const firstX = calculateXPosition(0, years.length);
//       const lastX = calculateXPosition(years.length - 1, years.length);
//       return `M ${firstX},250 L ${lastX},250`;
//     }
//   };

//   const calculateCardOffset = (index) => {
//     if (isMobile) return { x: 120, y: 0 };
//     if (isTablet) return { x: 0, y: index % 2 === 0 ? 120 : -120 };
//     return { x: 0, y: index % 2 === 0 ? 150 : -150 };
//   };

//   const getCardDimensions = () => {
//     if (isMobile) return { width: 180, height: 120 };
//     if (isTablet) return { width: 200, height: 130 };
//     return { width: 220, height: 140 };
//   };

//   const getCircleRadius = () => {
//     if (isMobile) return 20;
//     if (isTablet) return 30;
//     return 40;
//   };

//   return (
//     <div className=" px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ 
//       paddingTop: '20px',
//       paddingBottom: '20px',
//       marginBottom: '0',
//       backgroundColor: '#ffffff'
//     }}>
//       <div className="max-w-7xl mx-auto">
//         <h2 style={{textAlign: 'center',marginBottom: '3%',fontWeight: 400,color: '#4F1985',fontSize: '2.5rem',fontFamily: 'timesnew'}}>Our Timeline Journey.
//          <span
//             style={{
//               display: "block",
//               width: "80px",
//               height: "4px",
//               backgroundColor: "#4F1985",
//               margin: "15px auto 0",
//               borderRadius: "2px"
//             }}
//           />
//      </h2>
        
//         <motion.div 
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//           variants={containerVariants}
//         >
//           {/* Desktop/Tablet Timeline */}
//           {!isMobile && (
//             <svg 
//               className="w-full h-[600px] hidden md:block" 
//               viewBox={`0 0 ${isTablet ? '900' : '1400'} 600`} 
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <defs>
//                 <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                 </linearGradient>
//                 <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                 </linearGradient>
                
//                 <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                   <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                   <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                   <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                   <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                   <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                 </linearGradient>

//                 <filter id="dropShadow">
//                   <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                 </filter>
//               </defs>

//               <rect width={isTablet ? '900' : '1400'} height="600" fill="#F8FAFC" />

//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="#E2E8F0"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//               />
              
//               <motion.path
//                 d={calculatePath()}
//                 fill="none"
//                 stroke="url(#pathGradient)"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 variants={pathVariants}
//               />

//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const offset = calculateCardOffset(index);
//                 return (
//                   <motion.path
//                     key={`line-${index}`}
//                     d={`M ${xPos},${yPos} L ${xPos},${yPos + (offset.y > 0 ? offset.y - 20 : offset.y + 20)}`}
//                     fill="none"
//                     stroke={year.color}
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     strokeOpacity="0.5"
//                     variants={{
//                       hidden: { opacity: 0 },
//                       visible: { opacity: 1 }
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 );
//               })}

//               {years.map((year, index) => {
//                 const xPos = calculateXPosition(index, years.length);
//                 const yPos = calculateYPosition(index, years.length);
//                 const radius = getCircleRadius();
//                 const gradientId = `gradient${index + 1}`;
//                 const offset = calculateCardOffset(index);
//                 const boxX = xPos + offset.x;
//                 const boxY = yPos + offset.y;
//                 const { width: boxWidth, height: boxHeight } = getCardDimensions();
                
//                 return (
//                   <g key={index}>
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius + 8}
//                       fill="#F8FAFC"
//                       stroke="#E2E8F0"
//                       strokeWidth="2"
//                       filter="url(#dropShadow)"
//                       variants={circleVariants}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke="#F1F5F9"
//                       strokeWidth="8"
//                       variants={circleVariants}
//                     />
                    
//                     <motion.circle
//                       cx={xPos}
//                       cy={yPos}
//                       r={radius}
//                       fill="none"
//                       stroke={`url(#${gradientId})`}
//                       strokeWidth="8"
//                       strokeLinecap="round"
//                       initial={{ pathLength: 0 }}
//                       animate={{ pathLength: 1 }}
//                       transition={{ duration: 1.5, ease: "easeInOut" }}
//                     />

//                     <motion.text
//                       x={xPos}
//                       y={yPos}
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       fill={year.color}
//                       style={{ 
//                         fontWeight: 'bold', 
//                         fontSize: isTablet ? '14px' : '18px' 
//                       }}
//                       variants={yearTextVariants}
//                     >
//                       {year.year}
//                     </motion.text>

//                     <motion.g variants={cardVariants}>
//                       <rect
//                         x={boxX - boxWidth/2}
//                         y={boxY - boxHeight/2}
//                         width={boxWidth}
//                         height={boxHeight}
//                         rx="12"
//                         fill="white"
//                         stroke="#E2E8F0"
//                         strokeWidth="1"
//                         filter="url(#dropShadow)"
//                       />
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + (isTablet ? 25 : 30)}
//                         textAnchor="middle"
//                         style={{ 
//                           fontSize: isTablet ? '14px' : '16px', 
//                           fontWeight: 'bold' 
//                         }}
//                         fill="#1E293B"
//                       >
//                         {year.title}
//                       </text>
                      
//                       <text
//                         x={boxX}
//                         y={boxY - boxHeight/2 + (isTablet ? 45 : 55)}
//                         textAnchor="middle"
//                         style={{ 
//                           fontSize: isTablet ? '12px' : '14px', 
//                           fontWeight: '600' 
//                         }}
//                         fill={year.color}
//                       >
//                         {year.subtitle}
//                       </text>
                      
//                       <foreignObject 
//                         x={boxX - boxWidth/2 + 15} 
//                         y={boxY - boxHeight/2 + (isTablet ? 65 : 75)} 
//                         width={boxWidth - 30} 
//                         height={boxHeight - (isTablet ? 75 : 85)}
//                       >
//                         <div 
//                           xmlns="http://www.w3.org/1999/xhtml"
//                           style={{
//                             fontSize: isTablet ? '11px' : '12px',
//                             color: '#64748B',
//                             lineHeight: '1.5',
//                             textAlign: 'center'
//                           }}
//                         >
//                           {year.description}
//                         </div>
//                       </foreignObject>
//                     </motion.g>
//                   </g>
//                 );
//               })}
//             </svg>
//           )}

//           {/* Mobile Timeline */}
//           {isMobile && (
//             <div className=" relative w-full md:hidden" style={{ paddingBottom: "80px",  height: `${years.length * 160 + 60}px` }}>
//               <svg 
//                 className="w-full h-full" 
//                 viewBox={`0 0 300 ${years.length * 160 + 60}`} 
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <defs>
//                   <linearGradient id="mgradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient4" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient5" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient6" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
//                   </linearGradient>
//                   <linearGradient id="mgradient7" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
//                   </linearGradient>
                  
//                   <linearGradient id="mpathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                     <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                     <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
//                     <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
//                     <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
//                     <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
//                     <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
//                   </linearGradient>

//                   <filter id="mdropShadow">
//                     <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
//                   </filter>
//                 </defs>

//                 <rect width="300" height={years.length * 160 + 60} fill="#F8FAFC" />

//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="#E2E8F0"
//                   strokeWidth="3"
//                   strokeDasharray="8,4"
//                 />
                
//                 <motion.path
//                   d={calculatePath()}
//                   fill="none"
//                   stroke="url(#mpathGradient)"
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                   variants={pathVariants}
//                 />

//                 {years.map((year, index) => {
//                   if (index === years.length - 1) return null;
//                   const xPos = calculateXPosition(index, years.length);
//                   const yPos = calculateYPosition(index, years.length);
//                   const nextYPos = calculateYPosition(index + 1, years.length);
//                   return (
//                     <motion.path
//                       key={`mline-${index}`}
//                       d={`M ${xPos},${yPos + 20} L ${xPos},${nextYPos - 20}`}
//                       fill="none"
//                       stroke={year.color}
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       strokeOpacity="0.5"
//                       variants={{
//                         hidden: { opacity: 0 },
//                         visible: { opacity: 1 }
//                       }}
//                       transition={{ duration: 0.5 }}
//                     />
//                   );
//                 })}

//                 {years.map((year, index) => {
//                   const xPos = calculateXPosition(index, years.length);
//                   const yPos = calculateYPosition(index, years.length);
//                   const radius = getCircleRadius();
//                   const gradientId = `mgradient${index + 1}`;
//                   const offset = calculateCardOffset(index);
//                   const { width: boxWidth, height: boxHeight } = getCardDimensions();
                  
//                   return (
//                     <g key={index}>
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius + 8}
//                         fill="#F8FAFC"
//                         stroke="#E2E8F0"
//                         strokeWidth="2"
//                         filter="url(#mdropShadow)"
//                         variants={circleVariants}
//                       />
                      
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke="#F1F5F9"
//                         strokeWidth="6"
//                         variants={circleVariants}
//                       />
                      
//                       <motion.circle
//                         cx={xPos}
//                         cy={yPos}
//                         r={radius}
//                         fill="none"
//                         stroke={`url(#${gradientId})`}
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         initial={{ pathLength: 0 }}
//                         animate={{ pathLength: 1 }}
//                         transition={{ duration: 1.5, ease: "easeInOut" }}
//                       />

//                       <motion.text
//                         x={xPos}
//                         y={yPos}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                         fill={year.color}
//                         style={{ fontWeight: 'bold', fontSize: '14px' }}
//                         variants={yearTextVariants}
//                       >
//                         {year.year}
//                       </motion.text>

//                       <motion.g variants={cardVariants}>
//                         <rect
//                           x={xPos + offset.x - boxWidth/2}
//                           y={yPos - boxHeight/2}
//                           width={boxWidth}
//                           height={boxHeight}
//                           rx="12"
//                           fill="white"
//                           stroke="#E2E8F0"
//                           strokeWidth="1"
//                           filter="url(#mdropShadow)"
//                         />
                        
//                         <text
//                           x={xPos + offset.x}
//                           y={yPos - boxHeight/2 + 25}
//                           textAnchor="middle"
//                           style={{ fontSize: '14px', fontWeight: 'bold' }}
//                           fill="#1E293B"
//                         >
//                           {year.title}
//                         </text>
                        
//                         <text
//                           x={xPos + offset.x}
//                           y={yPos - boxHeight/2 + 45}
//                           textAnchor="middle"
//                           style={{ fontSize: '12px', fontWeight: '600' }}
//                           fill={year.color}
//                         >
//                           {year.subtitle}
//                         </text>
                        
//                         <foreignObject 
//                           x={xPos + offset.x - boxWidth/2 + 15} 
//                           y={yPos - boxHeight/2 + 65} 
//                           width={boxWidth - 30} 
//                           height={boxHeight - 75}
//                         >
//                           <div 
//                             xmlns="http://www.w3.org/1999/xhtml"
//                             style={{
//                               fontSize: '11px',
//                               color: '#64748B',
//                               lineHeight: '1.4',
//                               textAlign: 'center'
//                             }}
//                           >
//                             {year.description}
//                           </div>
//                         </foreignObject>
//                       </motion.g>
//                     </g>
//                   );
//                 })}
//               </svg>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default YearlyTimeline;




import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const YearlyTimeline = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const timelineRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });

  const years = [
    {
      "year": "2019",
      "title": "Foundation",
      "subtitle": "Founded as a research group",
      "description": "Began as a research group focused on scientific innovation in Bangalore, India",
      "color": "#8B5CF6"
    },
    {
      "year": "2020",
      "title": "Google Startups",
      "subtitle": "Accelerated Growth",
      "description": "Selected for Google Startups program to accelerate our technology development",
      "color": "#0EA5E9"
    },
    {
      "year": "2021",
      "title": "Early Growth",
      "subtitle": "Funding & First Product",
      "description": "Raised $100k pre-seed funding, launched BoltChem beta, and joined Microsoft Startups",
      "color": "#10B981"
    },
    {
      "year": "2022",
      "title": "Expansion",
      "subtitle": "Strategic Partnerships",
      "description": "Formed 2 key partnerships (US Biotech firm and top research lab) and 1 joint venture",
      "color": "#F59E0B"
    },
    {
      "year": "2023",
      "title": "Product Launches",
      "subtitle": "SaaS Platform & Collaborations",
      "description": "Launched ReBolt SaaS and BoltPro beta. Collaborated with Indian pharmaceutical leaders",
      "color": "#EC4899"
    },
    {
      "year": "2024",
      "title": "Innovation",
      "subtitle": "AI Advancements",
      "description": "Launched Boltbio alpha and Multi Agents beta with NASSCOM AI & SINE incubation",
      "color": "#6366F1"
    },
    {
      "year": "2025",
      "title": "AI Discovery",
      "subtitle": "Breakthrough Technologies",
      "description": "Launched BZ AI discovery suite, Clinbolt beta, and established first self-driven lab",
      "color": "#F97316"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check if at least 70% of the component is visible
            if (entry.intersectionRatio >= 0.7) {
              setIsInView(true);
              setTimeout(() => {
                setIsLoaded(true);
              }, 300);
            }
          } else {
            // Reset animation when component goes out of view
            setIsInView(false);
            setIsLoaded(false);
          }
        });
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9], // Multiple thresholds for better detection
        rootMargin: '0px'
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const yearTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const calculateXPosition = (index, total) => {
    if (isMobile) return 50;
    if (isTablet) return 100 + (index * 120);
    return 150 + (index * 180);
  };

  const calculateYPosition = (index, total) => {
    if (isMobile) return 60 + (index * 160);
    return 250;
  };

  const calculatePath = () => {
    if (isMobile) {
      const firstY = calculateYPosition(0, years.length);
      const lastY = calculateYPosition(years.length - 1, years.length);
      return `M 50,${firstY} L 50,${lastY}`;
    } else {
      const firstX = calculateXPosition(0, years.length);
      const lastX = calculateXPosition(years.length - 1, years.length);
      return `M ${firstX},250 L ${lastX},250`;
    }
  };

  const calculateCardOffset = (index) => {
    if (isMobile) return { x: 120, y: 0 };
    if (isTablet) return { x: 0, y: index % 2 === 0 ? 120 : -120 };
    return { x: 0, y: index % 2 === 0 ? 150 : -150 };
  };

  const getCardDimensions = () => {
    if (isMobile) return { width: 180, height: 120 };
    if (isTablet) return { width: 200, height: 130 };
    return { width: 220, height: 140 };
  };

  const getCircleRadius = () => {
    if (isMobile) return 20;
    if (isTablet) return 30;
    return 40;
  };

  return (
    <div 
      ref={timelineRef}
      className=" px-4 sm:px-6 lg:px-8 overflow-hidden" 
      style={{ 
        paddingTop: '20px',
        paddingBottom: '20px',
        marginBottom: '0',
        backgroundColor: '#ffffff'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 style={{textAlign: 'center',marginBottom: '3%',fontWeight: 400,color: '#4F1985',fontSize: '2.5rem',fontFamily: 'timesnew'}}>Our Timeline Journey.
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
        
        <motion.div 
          initial="hidden"
          animate={isLoaded && isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Desktop/Tablet Timeline */}
          {!isMobile && (
            <svg 
              className="w-full h-[600px] hidden md:block" 
              viewBox={`0 0 ${isTablet ? '900' : '1400'} 600`} 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
                  <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
                  <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
                </linearGradient>
                
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                  <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
                  <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
                  <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
                  <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
                  <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
                </linearGradient>

                <filter id="dropShadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
                </filter>
              </defs>

              <rect width={isTablet ? '900' : '1400'} height="600" fill="#F8FAFC" />

              <motion.path
                d={calculatePath()}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="3"
                strokeDasharray="8,4"
              />
              
              <motion.path
                d={calculatePath()}
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                variants={pathVariants}
              />

              {years.map((year, index) => {
                const xPos = calculateXPosition(index, years.length);
                const yPos = calculateYPosition(index, years.length);
                const offset = calculateCardOffset(index);
                return (
                  <motion.path
                    key={`line-${index}`}
                    d={`M ${xPos},${yPos} L ${xPos},${yPos + (offset.y > 0 ? offset.y - 20 : offset.y + 20)}`}
                    fill="none"
                    stroke={year.color}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    strokeOpacity="0.5"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 }
                    }}
                    transition={{ duration: 0.5 }}
                  />
                );
              })}

              {years.map((year, index) => {
                const xPos = calculateXPosition(index, years.length);
                const yPos = calculateYPosition(index, years.length);
                const radius = getCircleRadius();
                const gradientId = `gradient${index + 1}`;
                const offset = calculateCardOffset(index);
                const boxX = xPos + offset.x;
                const boxY = yPos + offset.y;
                const { width: boxWidth, height: boxHeight } = getCardDimensions();
                
                return (
                  <g key={index}>
                    <motion.circle
                      cx={xPos}
                      cy={yPos}
                      r={radius + 8}
                      fill="#F8FAFC"
                      stroke="#E2E8F0"
                      strokeWidth="2"
                      filter="url(#dropShadow)"
                      variants={circleVariants}
                    />
                    
                    <motion.circle
                      cx={xPos}
                      cy={yPos}
                      r={radius}
                      fill="none"
                      stroke="#F1F5F9"
                      strokeWidth="8"
                      variants={circleVariants}
                    />
                    
                    <motion.circle
                      cx={xPos}
                      cy={yPos}
                      r={radius}
                      fill="none"
                      stroke={`url(#${gradientId})`}
                      strokeWidth="8"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={isLoaded && isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />

                    <motion.text
                      x={xPos}
                      y={yPos}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={year.color}
                      style={{ 
                        fontWeight: 'bold', 
                        fontSize: isTablet ? '14px' : '18px' 
                      }}
                      variants={yearTextVariants}
                    >
                      {year.year}
                    </motion.text>

                    <motion.g variants={cardVariants}>
                      <rect
                        x={boxX - boxWidth/2}
                        y={boxY - boxHeight/2}
                        width={boxWidth}
                        height={boxHeight}
                        rx="12"
                        fill="white"
                        stroke="#E2E8F0"
                        strokeWidth="1"
                        filter="url(#dropShadow)"
                      />
                      
                      <text
                        x={boxX}
                        y={boxY - boxHeight/2 + (isTablet ? 25 : 30)}
                        textAnchor="middle"
                        style={{ 
                          fontSize: isTablet ? '14px' : '16px', 
                          fontWeight: 'bold' 
                        }}
                        fill="#1E293B"
                      >
                        {year.title}
                      </text>
                      
                      <text
                        x={boxX}
                        y={boxY - boxHeight/2 + (isTablet ? 45 : 55)}
                        textAnchor="middle"
                        style={{ 
                          fontSize: isTablet ? '12px' : '14px', 
                          fontWeight: '600' 
                        }}
                        fill={year.color}
                      >
                        {year.subtitle}
                      </text>
                      
                      <foreignObject 
                        x={boxX - boxWidth/2 + 15} 
                        y={boxY - boxHeight/2 + (isTablet ? 65 : 75)} 
                        width={boxWidth - 30} 
                        height={boxHeight - (isTablet ? 75 : 85)}
                      >
                        <div 
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            fontSize: isTablet ? '11px' : '12px',
                            color: '#64748B',
                            lineHeight: '1.5',
                            textAlign: 'center'
                          }}
                        >
                          {year.description}
                        </div>
                      </foreignObject>
                    </motion.g>
                  </g>
                );
              })}
            </svg>
          )}

          {/* Mobile Timeline */}
          {isMobile && (
            <div className=" relative w-full md:hidden" style={{ paddingBottom: "80px",  height: `${years.length * 160 + 60}px` }}>
              <svg 
                className="w-full h-full" 
                viewBox={`0 0 300 ${years.length * 160 + 60}`} 
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="mgradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="mgradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="mgradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="mgradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="mgradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="mgradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="mgradient7" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
                    <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
                  </linearGradient>
                  
                  <linearGradient id="mpathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                    <stop offset="16%" stopColor="#0EA5E9" stopOpacity="0.6" />
                    <stop offset="32%" stopColor="#10B981" stopOpacity="0.6" />
                    <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.6" />
                    <stop offset="64%" stopColor="#EC4899" stopOpacity="0.6" />
                    <stop offset="80%" stopColor="#6366F1" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
                  </linearGradient>

                  <filter id="mdropShadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
                  </filter>
                </defs>

                <rect width="300" height={years.length * 160 + 60} fill="#F8FAFC" />

                <motion.path
                  d={calculatePath()}
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                />
                
                <motion.path
                  d={calculatePath()}
                  fill="none"
                  stroke="url(#mpathGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  variants={pathVariants}
                />

                {years.map((year, index) => {
                  if (index === years.length - 1) return null;
                  const xPos = calculateXPosition(index, years.length);
                  const yPos = calculateYPosition(index, years.length);
                  const nextYPos = calculateYPosition(index + 1, years.length);
                  return (
                    <motion.path
                      key={`mline-${index}`}
                      d={`M ${xPos},${yPos + 20} L ${xPos},${nextYPos - 20}`}
                      fill="none"
                      stroke={year.color}
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      strokeOpacity="0.5"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  );
                })}

                {years.map((year, index) => {
                  const xPos = calculateXPosition(index, years.length);
                  const yPos = calculateYPosition(index, years.length);
                  const radius = getCircleRadius();
                  const gradientId = `mgradient${index + 1}`;
                  const offset = calculateCardOffset(index);
                  const { width: boxWidth, height: boxHeight } = getCardDimensions();
                  
                  return (
                    <g key={index}>
                      <motion.circle
                        cx={xPos}
                        cy={yPos}
                        r={radius + 8}
                        fill="#F8FAFC"
                        stroke="#E2E8F0"
                        strokeWidth="2"
                        filter="url(#mdropShadow)"
                        variants={circleVariants}
                      />
                      
                      <motion.circle
                        cx={xPos}
                        cy={yPos}
                        r={radius}
                        fill="none"
                        stroke="#F1F5F9"
                        strokeWidth="6"
                        variants={circleVariants}
                      />
                      
                      <motion.circle
                        cx={xPos}
                        cy={yPos}
                        r={radius}
                        fill="none"
                        stroke={`url(#${gradientId})`}
                        strokeWidth="6"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={isLoaded && isInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />

                      <motion.text
                        x={xPos}
                        y={yPos}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={year.color}
                        style={{ fontWeight: 'bold', fontSize: '14px' }}
                        variants={yearTextVariants}
                      >
                        {year.year}
                      </motion.text>

                      <motion.g variants={cardVariants}>
                        <rect
                          x={xPos + offset.x - boxWidth/2}
                          y={yPos - boxHeight/2}
                          width={boxWidth}
                          height={boxHeight}
                          rx="12"
                          fill="white"
                          stroke="#E2E8F0"
                          strokeWidth="1"
                          filter="url(#mdropShadow)"
                        />
                        
                        <text
                          x={xPos + offset.x}
                          y={yPos - boxHeight/2 + 25}
                          textAnchor="middle"
                          style={{ fontSize: '14px', fontWeight: 'bold' }}
                          fill="#1E293B"
                        >
                          {year.title}
                        </text>
                        
                        <text
                          x={xPos + offset.x}
                          y={yPos - boxHeight/2 + 45}
                          textAnchor="middle"
                          style={{ fontSize: '12px', fontWeight: '600' }}
                          fill={year.color}
                        >
                          {year.subtitle}
                        </text>
                        
                        <foreignObject 
                          x={xPos + offset.x - boxWidth/2 + 15} 
                          y={yPos - boxHeight/2 + 65} 
                          width={boxWidth - 30} 
                          height={boxHeight - 75}
                        >
                          <div 
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                              fontSize: '11px',
                              color: '#64748B',
                              lineHeight: '1.4',
                              textAlign: 'center'
                            }}
                          >
                            {year.description}
                          </div>
                        </foreignObject>
                      </motion.g>
                    </g>
                  );
                })}
              </svg>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default YearlyTimeline;