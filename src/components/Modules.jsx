// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence, useTransform, useScroll, useSpring } from 'framer-motion';
// import styled from 'styled-components';

// const Container = styled.section`
//   width: 100%;
//   padding: 1rem 0.1rem;
//   position: relative;
//   overflow: hidden;
//   isolation: isolate;
 
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100%;
// `;

// const ContentWrapper = styled.div`
//   max-width: 1440px;
//   width: 100%;
//   position: relative;
// `;

// const Header = styled.div`
//   text-align: center;
//   margin-bottom: 4rem;
//   max-width: 800px;
//   margin-left: auto;
//   margin-right: auto;
// `;

// const Title = styled.h2`
//   font-size: clamp(2.5rem, 5vw, 3.5rem);
//   font-weight: 200;
//   fontFamily: "'Inter', sans-serif",
            
//   margin-bottom: 1rem;
//   color: #111;
//   line-height: 1.2;
//   letter-spacing: -0.03em;
// `;

// const Subtitle = styled.p`
//   font-size: 1.25rem;
//   color: #666;
//   line-height: 1.6;
//   font-weight: 400;
// `;

// const Card = styled.div`
//   background: #fff;
//   border-radius: 2rem;
//   overflow: hidden;
  
//   border: 1px solid rgba(0, 0, 0, 0.09);
//   position: relative;
// `;

// const TabBar = styled.div`
//   display: flex;

//   position: relative;
 
// `;

// const TabIndicator = styled(motion.div)`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   height: 3px;
//   background: #000;
//   border-radius: 3px 3px 0 0;
// `;

// const Tab = styled.button`
//   flex: 1;
//   padding: 1.5rem 2rem;
//   font-size: 1.1rem;
//   font-weight: 500;
//   color: ${props => props.$active ? '#111' : '#888'};
//   background: ${props => props.$active ? 'rgba(0, 0, 0, 0.04)' : 'transparent'};
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   position: relative;
//   outline: none;
  
//   &:hover {
//     color: #111;
//     background: rgba(0, 0, 0, 0.02);
//   }
// `;

// const ContentArea = styled.div`
//   display: flex;
//   min-height: 500px;
//   position: relative;
  
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const TextContent = styled.div`
//   flex: 1;
//   padding: 4rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
  
//   @media (max-width: 768px) {
//     padding: 2rem;
//     order: 2;
//   }
// `;

// const Description = styled(motion.p)`
//   font-size: 1.25rem;
//   line-height: 1.8;
//   color: #444;
//   margin-bottom: 2.5rem;
//   font-weight: 400;
// `;

// const Button = styled.button`
//   align-self: flex-start;
//   padding: 1rem 2rem;
//   background: #111;
//   color: white;
//   border: none;
//   border-radius: 50px;
//   font-size: 1rem;
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//   outline: none;
//   position: relative;
//   overflow: hidden;
  
//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
//     background: #222;
//   }
// `;

// const ImageContainer = styled.div`
//   flex: 1;
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem;
  
//   @media (max-width: 768px) {
//     padding: 2rem;
//     order: 1;
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   max-width: 600px;
//   border-radius: 1rem;
//   box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
//   object-fit: cover;
// `;

// const modules = [
//   {
//     name: "Small Molecule Design",
//     description: "Experience breakthrough efficiency with our purpose-built research interface. Advanced AI-driven insights and collaborative tools accelerate discovery while maintaining rigorous scientific standards.",
//     imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//   },
  
//   {
//     name: "Protein Engineering",
//     description: "Precision management for complex in vivo studies. Our platform reduces administrative overhead by 60% while providing unparalleled data integrity and audit capabilities.",
//     imageUrl: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     name: "Synthetic Chemistry",
//     description: "Seamlessly integrate teams and data across your organization. Our secure, scalable infrastructure breaks down silos and enables real-time, data-driven decision making at every level.",
//     imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// const textVariants = {
//   enter: { opacity: 0 },
//   center: { 
//     opacity: 1,
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut"
//     }
//   },
//   exit: { opacity: 0 }
// };

// const imageVariants = {
//   enter: { opacity: 0 },
//   center: { 
//     opacity: 1,
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut"
//     }
//   },
//   exit: { opacity: 0 }
// };

// export default function ExploreModulesSection() {
//   const [selected, setSelected] = useState(0);
//   const tabRefs = useRef([]);
  
//   const handleTabClick = (index) => {
//     setSelected(index);
//   };

//   useEffect(() => {
//     tabRefs.current = tabRefs.current.slice(0, modules.length);
//   }, []);

//   return (
//     <Container>
//       <ContentWrapper>
//         <Header>
//           <div style={{ 
//   position: "relative", 
//   display: "inline-block", 
//   marginBottom: "40px",



//   textAlign: "center",
// }}>
//   <h2 style={{
//     fontSize: "42px",
//     fontWeight: "700",
//     color: "#111827",
//     margin: 0,
//   }}>
//     Explore Our Solutions
//   </h2>
//   <span style={{
//     position: "absolute",
//     bottom: "-12px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     width: "120px",
//     height: "4px",
//     background: "linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8))",
//     borderRadius: "2px"
//   }} />
// </div>

//           <Subtitle>
//             Comprehensive tools designed for modern scientific teams, from discovery to development
//           </Subtitle>
//         </Header>
        
//         <Card>
//           <TabBar>
//             {modules.map((module, index) => (
//               <Tab
//                 key={index}
//                 ref={el => tabRefs.current[index] = el}
//                 $active={selected === index}
//                 onClick={() => handleTabClick(index)}
//               >
//                 {module.name}
//               </Tab>
//             ))}
//             <TabIndicator
//               layoutId="tabIndicator"
//               initial={false}
//               transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//               style={{
//                 width: tabRefs.current[selected]?.offsetWidth || 0,
//                 left: tabRefs.current[selected]?.offsetLeft || 0
//               }}
//             />
//           </TabBar>
          
//           <ContentArea>
//             <TextContent>
//               <AnimatePresence mode="wait">
//                 <Description
//                   key={selected}
//                   variants={textVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                 >
//                   {modules[selected].description}
//                 </Description>
//               </AnimatePresence>
              
//               <Button>
//                 Learn more
//               </Button>
//             </TextContent>
            
//             <ImageContainer>
//               <AnimatePresence mode="wait">
//                 <Image
//                   key={selected}
//                   variants={imageVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   src={modules[selected].imageUrl}
//                   alt={modules[selected].name}
//                 />
//               </AnimatePresence>
//             </ImageContainer>
//           </ContentArea>
//         </Card>
//       </ContentWrapper>
//     </Container>
//   );
// }

// import React, { useState, useRef, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import styled from "styled-components";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const Container = styled.section`
//   width: 100%;
//   padding: 2rem 1rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: #f8faff;
// `;

// const ContentWrapper = styled.div`
//   max-width: 1440px;
//   width: 100%;
// `;

// const Header = styled.div`
//   text-align: center;
//   margin-bottom: 2.5rem;
//   max-width: 800px;
//   margin-left: auto;
//   margin-right: auto;
// `;

// const Title = styled.h2`
//   font-size: clamp(1.8rem, 3vw, 2.5rem);
//   font-weight: 700;
//   color: #111;
//   margin-bottom: 1rem;
// `;

// const Subtitle = styled.p`
//   font-size: 1.1rem;
//   color: #666;
//   line-height: 1.6;
// `;

// const Card = styled.div`
//   background: #fff;
//   border-radius: 2rem;
//   border: 1px solid rgba(0, 0, 0, 0.09);
//   overflow: hidden;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
// `;

// const TabBar = styled.div`
//   display: flex;
//   position: relative;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const TabIndicator = styled(motion.div)`
//   position: absolute;
//   bottom: 0;
//   height: 3px;
//   background: #000;
//   border-radius: 3px 3px 0 0;
// `;

// const Tab = styled.button`
//   flex: 1;
//   padding: 1.2rem;
//   font-size: 1rem;
//   font-weight: 500;
//   color: ${(props) => (props.$active ? "#111" : "#888")};
//   background: ${(props) =>
//     props.$active ? "rgba(0, 0, 0, 0.04)" : "transparent"};
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s ease;
// `;

// const ContentArea = styled.div`
//   display: flex;
//   min-height: 500px;
//   position: relative;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     min-height: auto;
//   }
// `;

// const TextContent = styled.div`
//   flex: 1;
//   padding: clamp(1.5rem, 3vw, 2.5rem);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const Description = styled(motion.p)`
//   font-size: 1.1rem;
//   line-height: 1.7;
//   color: #444;
//   margin-bottom: 1.8rem;
// `;

// const Button = styled.button`
//   align-self: flex-start;
//   padding: 0.8rem 1.5rem;
//   background: #111;
//   color: white;
//   border: none;
//   border-radius: 50px;
//   font-size: 0.95rem;
//   font-weight: 500;
//   cursor: pointer;
//   transition: background 0.3s ease;

//   &:hover {
//     background: #333;
//   }
// `;

// const ImageContainer = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem;
// `;

// const Image = styled(motion.img)`
//   width: 100%;
//   max-width: 600px;
//   border-radius: 1rem;
//   object-fit: cover;
// `;

// const ArrowControls = styled.div`
//   display: none;

//   @media (max-width: 768px) {
//     display: flex;
//     justify-content: space-between;
//     padding: 0.5rem 1rem;
//     align-items: center;
//     margin-bottom: 1rem;
//   }
// `;

// const ArrowButton = styled.button`
//   background: rgba(0, 0, 0, 0.05);
//   border: none;
//   padding: 0.5rem;
//   border-radius: 50%;
//   cursor: pointer;
// `;

// const modules = [
//   {
//     name: "Small Molecule Design",
//     description:
//       "Experience breakthrough efficiency with our purpose-built research interface. Advanced AI-driven insights and collaborative tools accelerate discovery while maintaining rigorous scientific standards.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     name: "Protein Engineering",
//     description:
//       "Precision management for complex in vivo studies. Our platform reduces administrative overhead by 60% while providing unparalleled data integrity and audit capabilities.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     name: "Synthetic Chemistry",
//     description:
//       "Seamlessly integrate teams and data across your organization. Our secure, scalable infrastructure breaks down silos and enables real-time, data-driven decision making at every level.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// const textVariants = {
//   enter: { opacity: 0 },
//   center: { opacity: 1, transition: { duration: 0.3 } },
//   exit: { opacity: 0 },
// };

// const imageVariants = {
//   enter: { opacity: 0 },
//   center: { opacity: 1, transition: { duration: 0.3 } },
//   exit: { opacity: 0 },
// };

// export default function ExploreModulesSection() {
//   const [selected, setSelected] = useState(0);
//   const [indicator, setIndicator] = useState({ width: 0, left: 0 });
//   const tabRefs = useRef([]);

//   const updateIndicator = useCallback(() => {
//     if (tabRefs.current[selected]) {
//       setIndicator({
//         width: tabRefs.current[selected].offsetWidth,
//         left: tabRefs.current[selected].offsetLeft,
//       });
//     }
//   }, [selected]);

//   useEffect(() => {
//     updateIndicator();
//     window.addEventListener("resize", updateIndicator);
//     return () => window.removeEventListener("resize", updateIndicator);
//   }, [updateIndicator]);

//   const handlePrev = () => {
//     setSelected((prev) => (prev === 0 ? modules.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setSelected((prev) => (prev === modules.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <Container>
//       <ContentWrapper>
//         <Header>
//           <Title>Explore Our Solutions</Title>
//           <Subtitle>
//             Comprehensive tools designed for modern scientific teams, from
//             discovery to development
//           </Subtitle>
//         </Header>

//         {/* Mobile Controls */}
//         <ArrowControls>
//           <ArrowButton onClick={handlePrev}>
//             <FiChevronLeft size={24} />
//           </ArrowButton>
//           <div style={{ fontWeight: "500" }}>{modules[selected].name}</div>
//           <ArrowButton onClick={handleNext}>
//             <FiChevronRight size={24} />
//           </ArrowButton>
//         </ArrowControls>

//         <Card>
//           {/* Desktop Tabs */}
//           <TabBar>
//             {modules.map((module, index) => (
//               <Tab
//                 key={index}
//                 ref={(el) => (tabRefs.current[index] = el)}
//                 $active={selected === index}
//                 onClick={() => setSelected(index)}
//               >
//                 {module.name}
//               </Tab>
//             ))}
//             <TabIndicator
//               layoutId="tabIndicator"
//               initial={false}
//               animate={{
//                 width: indicator.width,
//                 left: indicator.left,
//               }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             />
//           </TabBar>

//           <ContentArea>
//             <TextContent>
//               <AnimatePresence mode="wait">
//                 <Description
//                   key={selected}
//                   variants={textVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                 >
//                   {modules[selected].description}
//                 </Description>
//               </AnimatePresence>
//               <Button>Learn more</Button>
//             </TextContent>

//             <ImageContainer>
//               <AnimatePresence mode="wait">
//                 <Image
//                   key={selected}
//                   variants={imageVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   src={modules[selected].imageUrl}
//                   alt={modules[selected].name}
//                 />
//               </AnimatePresence>
//             </ImageContainer>
//           </ContentArea>
//         </Card>
//       </ContentWrapper>
//     </Container>
//   );
// }


// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import styled from "styled-components";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const Container = styled.section`
//   width: 100%;
//   padding: 2rem 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 3rem 0;
// `;

// const ContentWrapper = styled.div`
//   max-width: 1440px;
//   width: 100%;
//   padding: 0 1.5rem;
// `;
// const Header = styled.div`
//   text-align: center;
//   margin-bottom: 3rem;
//   max-width: 800px;
//   margin-left: auto;
//   margin-right: auto;
//   position: relative; // Add this to contain the absolute positioned underline
// `;

// const Title = styled.h2`
//   font-size: 2.75rem;
//   font-weight: 700;
//   color: #111;
//   margin-bottom: 1.25rem;
//   line-height: 1.2;
//   background: linear-gradient(90deg, #22d3ee, #c084fc, #fb923c);
//   -webkit-background-clip: text;
//   background-clip: text;
//   color: transparent;
//   position: relative; // Add this for better positioning context

//   @media (max-width: 768px) {
//     font-size: 2.25rem;
//   }
// `;

// const GradientUnderline = styled.span`
//   position: absolute;
//   bottom: -12px;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 120px;
//   height: 4px;
//   background: linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8));
//   border-radius: 2px;
// `;


// const Subtitle = styled.p`
//   font-size: 1.35rem;
//   color: #666;
//   line-height: 1.6;
//   margin: 0;

//   @media (max-width: 768px) {
//     font-size: 1.15rem;
//   }
// `;

// const Card = styled.div`
//   background: #fff;
//   border-radius: 2rem;
//   // border: 1px solid rgba(0, 0, 0, 0.09);
//   overflow: hidden;
//   // box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
//   transition: all 0.3s ease;

//   @media (max-width: 768px) {
//     border-radius: 1.5rem;
//   }
// `;

// const TabBar = styled.div`
//   display: flex;
//   position: relative;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.08);

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const TabIndicator = styled(motion.div)`
//   position: absolute;
//   bottom: 0;
//   height: 3px;
//   background: linear-gradient(90deg, #22d3ee, #c084fc, #fb923c);
//   border-radius: 3px 3px 0 0;
//   will-change: width, left;
// `;

// const Tab = styled.button`
//   flex: 1;
//   padding: 1.75rem 1.5rem;
//   font-size: 1.1rem;
//   font-weight: 500;
//   color: ${(props) => (props.$active ? "#111" : "#888")};
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   position: relative;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;

//   &:hover {
//     color: #111;
//   }
// `;

// const ContentArea = styled.div`
//   display: flex;
//   min-height: 550px;
//   position: relative;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     min-height: auto;
//   }
// `;

// const TextContent = styled.div`
//   flex: 1;
//   padding: 3.5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media (max-width: 768px) {
//     padding: 2rem 1.75rem;
//     order: 2;
//   }
// `;

// const Description = styled(motion.p)`
//   font-size: 1.25rem;
//   line-height: 1.8;
//   color: #444;
//   margin-bottom: 2.5rem;

//   @media (max-width: 768px) {
//     font-size: 1.1rem;
//     margin-bottom: 2rem;
//   }
// `;

// const Button = styled.button`
//   align-self: flex-start;
//   padding: 1rem 2.25rem;
//   background: linear-gradient(90deg, #22d3ee, #c084fc, #fb923c);
//   color: white;
//   border: none;
//   border-radius: 50px;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   margin-top: 1rem;
//   box-shadow: 0 4px 15px rgba(34, 211, 238, 0.3);

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 20px rgba(34, 211, 238, 0.4);
//   }

//   @media (max-width: 768px) {
//     align-self: center;
//     width: 100%;
//     max-width: 220px;
//   }
// `;

// const ImageContainer = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 3rem;
//   background: linear-gradient(
//     135deg,
//     rgba(34, 211, 238, 0.03) 0%,
//     rgba(192, 132, 252, 0.03) 50%,
//     rgba(251, 146, 60, 0.03) 100%
//   );

//   @media (max-width: 768px) {
//     padding: 2rem 1.5rem;
//     order: 1;
//   }
// `;

// const Image = styled(motion.img)`
//   width: 100%;
//   max-width: 650px;
//   border-radius: 1rem;
//   object-fit: cover;
//   box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

//   @media (max-width: 768px) {
//     max-height: 350px;
//   }
// `;

// const MobileControls = styled.div`
//   display: none;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.08);

//   @media (max-width: 768px) {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1.25rem;
//   }
// `;

// const MobileTabTitle = styled.div`
//   font-weight: 600;
//   font-size: 1.1rem;
//   padding: 0 1.5rem;
//   text-align: center;
//   flex: 1;
//   color: #111;
// `;

// const ArrowButton = styled.button`
//   background: transparent;
//   border: none;
//   padding: 0.75rem;
//   border-radius: 50%;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.2s ease;
//   color: #666;

//   &:hover {
//     color: #111;
//     background: rgba(0, 0, 0, 0.05);
//   }

//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
    
// `;

// const modules = [
//   {
//     name: "Small Molecule Design",
//     description:
//       "Experience breakthrough efficiency with our purpose-built research interface. Advanced AI-driven insights and collaborative tools accelerate discovery while maintaining rigorous scientific standards.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     name: "Protein Engineering",
//     description:
//       "Precision management for complex in vivo studies. Our platform reduces administrative overhead by 60% while providing unparalleled data integrity and audit capabilities.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     name: "Synthetic Chemistry",
//     description:
//       "Seamlessly integrate teams and data across your organization. Our secure, scalable infrastructure breaks down silos and enables real-time, data-driven decision making at every level.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// const textVariants = {
//   enter: { opacity: 0, y: 20 },
//   center: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
//   },
//   exit: { opacity: 0, y: -20 },
// };

// const imageVariants = {
//   enter: { opacity: 0, x: 30 },
//   center: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
//   },
//   exit: { opacity: 0, x: -30 },
// };

// export default function ExploreModulesSection() {
//   const [selected, setSelected] = useState(0);
//   const tabRefs = useRef([]);
//   const [isMobile, setIsMobile] = useState(false);

//   const handlePrev = () => {
//     setSelected((prev) => (prev === 0 ? modules.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setSelected((prev) => (prev === modules.length - 1 ? 0 : prev + 1));
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     // Set initial state
//     handleResize();
    
//     // Add event listener
//     window.addEventListener("resize", handleResize);
    
//     // Clean up
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     tabRefs.current = tabRefs.current.slice(0, modules.length);
//   }, []);

//   return (
//     <Container>
//       <ContentWrapper>
//         <Header>
//           <Title>Explore Our Solutions</Title>
//           <GradientUnderline />
//           <Subtitle>
//             Comprehensive tools designed for modern scientific teams, from
//             discovery to development
//           </Subtitle>
//         </Header>

//         <Card>
//           {/* Desktop Tabs */}
//           {!isMobile && (
//             <TabBar>
//               {modules.map((module, index) => (
//                 <Tab
//                   key={`tab-${index}`}
//                   ref={(el) => (tabRefs.current[index] = el)}
//                   $active={selected === index}
//                   onClick={() => setSelected(index)}
//                 >
//                   {module.name}
//                 </Tab>
//               ))}
//               <TabIndicator
//                 layoutId="tabIndicator"
//                 initial={false}
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 style={{
//                   width: tabRefs.current[selected]?.offsetWidth || 0,
//                   left: tabRefs.current[selected]?.offsetLeft || 0,
//                 }}
//               />
//             </TabBar>
//           )}

//           {/* Mobile Controls */}
//           {isMobile && (
//             <MobileControls>
//               <ArrowButton onClick={handlePrev}>
//                 <FiChevronLeft size={26} />
//               </ArrowButton>
//               <MobileTabTitle>{modules[selected].name}</MobileTabTitle>
//               <ArrowButton onClick={handleNext}>
//                 <FiChevronRight size={26} />
//               </ArrowButton>
//             </MobileControls>
//           )}

//           <ContentArea>
//             <TextContent>
//               <AnimatePresence mode="wait">
//                 <Description
//                   key={`text-${selected}`}
//                   variants={textVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                 >
//                   {modules[selected].description}
//                 </Description>
//               </AnimatePresence>
//               <Button>Learn more</Button>
//             </TextContent>

//             <ImageContainer>
//               <AnimatePresence mode="wait">
//                 <Image
//                   key={`image-${selected}`}
//                   variants={imageVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   src={modules[selected].imageUrl}
//                   alt={modules[selected].name}
//                 />
//               </AnimatePresence>
//             </ImageContainer>
//           </ContentArea>
//         </Card>
//       </ContentWrapper>
//     </Container>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Styled components
const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 1.5rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;  // unified spacing
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;


const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: 700;
  background: linear-gradient(90deg, #22d3ee, #c084fc, #fb923c);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.25rem;
  line-height: 1.2;
  position: relative;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const GradientUnderline = styled.span`
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background: linear-gradient(
    90deg,
    rgba(34, 211, 238, 0.8),
    rgba(192, 132, 252, 0.8),
    rgba(251, 146, 60, 0.8)
  );
  border-radius: 2px;
`;

const Subtitle = styled.p`
  font-size: 1.35rem;
  color: #666;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 2rem;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const TabBar = styled.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    display: none;
  }
`;

const TabIndicator = styled(motion.div)`
  position: absolute;
  bottom: 0;
  height: 3px;
  background: linear-gradient(90deg, #22d3ee, #c084fc, #fb923c);
  border-radius: 3px 3px 0 0;
`;

const Tab = styled.button`
  flex: 1;
  padding: 1.75rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${(props) => (props.$active ? "#111" : "#888")};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #111;
  }
`;

const ContentArea = styled.div`
  display: flex;
  min-height: auto;  // let content determine height
  gap: 2.5rem;       // spacing between text and image
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding: 3rem; // slightly reduced from 3.5rem
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    order: 2;
  }
`;
const Description = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  align-self: flex-start;
  padding: 1rem 2.25rem;
  background: linear-gradient(90deg, #22d3ee, #c084fc, #fb923c);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    align-self: center;
    width: 100%;
    max-width: 220px;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    order: 1;
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  max-width: 650px;
  border-radius: 1rem;
  object-fit: cover;
`;

const MobileControls = styled.div`
  display: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem;
  }
`;

const MobileTabTitle = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  flex: 1;
`;

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Data
const modules = [
  {
    name: "Small Molecule Design",
    description:
      "Transform the way you discover, design, and optimize small molecules — faster, smarter.",
    imageUrl:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Protein Engineering",
    description:
      "Reimagine how proteins are designed, optimized, and brought to life — faster, smarter, more precise.",
    imageUrl:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Multi Omics Analysis",
    description:
      "Reimagine how you design, plan, and execute synthesis—faster, greener, smarter.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Clinical Trials",
    description:
      "Reimagine how you design, plan, and execute synthesis—faster, greener, smarter.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
];

const textVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20 },
};

const imageVariants = {
  enter: { opacity: 0, x: 30 },
  center: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: -30 },
};

export default function ExploreModulesSection() {
  const [selected, setSelected] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const tabRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

  // Update indicator position
  const updateIndicator = () => {
    if (!isMobile && tabRefs.current[selected]) {
      const tab = tabRefs.current[selected];
      setIndicatorStyle({
        width: tab.offsetWidth,
        left: tab.offsetLeft,
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    requestAnimationFrame(updateIndicator);
  }, [selected, isMobile]);

  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>Explore Our Solutions</Title>
          <GradientUnderline />
          <Subtitle>Comprehensive tools for scientific teams</Subtitle>
        </Header>

        <Card>
          {!isMobile && (
            <TabBar>
              {modules.map((module, index) => (
                <Tab
                  key={index}
                  ref={(el) => (tabRefs.current[index] = el)}
                  $active={selected === index}
                  onClick={() => setSelected(index)}
                >
                  {module.name}
                </Tab>
              ))}
              <TabIndicator
                layoutId="tabIndicator"
                style={indicatorStyle}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            </TabBar>
          )}

          {isMobile && (
            <MobileControls>
              <ArrowButton onClick={() => setSelected((p) => (p === 0 ? modules.length - 1 : p - 1))}>
                <FiChevronLeft size={26} />
              </ArrowButton>
              <MobileTabTitle>{modules[selected].name}</MobileTabTitle>
              <ArrowButton onClick={() => setSelected((p) => (p === modules.length - 1 ? 0 : p + 1))}>
                <FiChevronRight size={26} />
              </ArrowButton>
            </MobileControls>
          )}

          <ContentArea>
            <TextContent>
              <AnimatePresence mode="wait">
                <Description
                  key={`text-${selected}`}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {modules[selected].description}
                </Description>
              </AnimatePresence>
              <Button>Learn more</Button>
            </TextContent>

            <ImageContainer>
              <AnimatePresence mode="wait">
                <Image
                  key={`image-${selected}`}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  src={modules[selected].imageUrl}
                  alt={modules[selected].name}
                />
              </AnimatePresence>
            </ImageContainer>
          </ContentArea>
        </Card>
      </ContentWrapper>
    </Container>
  );
}
