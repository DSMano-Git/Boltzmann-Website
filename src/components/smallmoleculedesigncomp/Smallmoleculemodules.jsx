// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import styled from "styled-components";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// // Styled components
// const Container = styled.section`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;


//   @media (max-width: 768px) {
//     padding: 40px 0;
//   }
// `;

// const ContentWrapper = styled.div`
//   max-width: 1440px;
//   width: 100%;
//   padding: 0 1.5rem;
// `;

// const Header = styled.div`
//   text-align: center;
//   margin-bottom: 50px;  // unified spacing
//   max-width: 800px;
//   margin-left: auto;
//   margin-right: auto;
//   position: relative;
// `;


// const Title = styled.h2`
//   font-size: 2.75rem;
//   font-weight: 700;
//   background: linear-gradient(90deg, #22d3ee, #c084fc, #fb923c);
//   -webkit-background-clip: text;
//   background-clip: text;
//   color: transparent;
//   margin-bottom: 1.25rem;
//   line-height: 1.2;
//   position: relative;

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
//   background: linear-gradient(
//     90deg,
//     rgba(34, 211, 238, 0.8),
//     rgba(192, 132, 252, 0.8),
//     rgba(251, 146, 60, 0.8)
//   );
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
//   overflow: hidden;
//   transition: all 0.3s ease;
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

//   &:hover {
//     color: #111;
//   }
// `;

// const ContentArea = styled.div`
//   display: flex;
//   min-height: auto;  // let content determine height
//   gap: 2.5rem;       // spacing between text and image
//   position: relative;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 1.5rem;
//   }
// `;

// const TextContent = styled.div`
//   flex: 1;
//   padding: 3rem; // slightly reduced from 3.5rem
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media (max-width: 768px) {
//     padding: 2rem 1.5rem;
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

//   &:hover {
//     transform: translateY(-2px);
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
//   text-align: center;
//   flex: 1;
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

//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// // Data
// const modules = [
//   {
//     name: "Hit Identification",
//     description:
//       " Impact Statement: Discover hits in days, not months.AI-powered screening agents rapidly mine vast chemical spaces, integrating structure-based and ligand-based approaches to uncover promising hit candidates with exceptional precision. Our platform accele.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     name: " Hit-to-Lead Optimization",
//     description:
//       " Impact Statement: Turn early hits into high-potential leads—faster than ever.From ADMET profiling to predictive SAR, our AI agents refine and prioritize molecules that balance potency, selectivity, and developability. The result? Streamlined decision-making and reduced attrition in the costly mid-stage pipeline.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     name: "  Lead Optimization",
//     description:
//       " Impact Statement: Your autonomous discovery team, always at work.Our multi-agent architecture combines specialized AI agents for molecular generation, virtual screening, property prediction, and synthesis feasibility. Working in concert, they orchestrate an end-to-end design cycle that transforms ideas into validated candidates—24/7, with zero downtime.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
//   },
//     {
//     name: " Agents in Small Molecule Design",
//     description:
//       "  Impact Statement: Your autonomous protein design team, on call 24/7.Specialized AI agents work in parallel for sequence generation, structure prediction, stability scoring, and developability assessment—coordinating an end-to-end protein engineering cycle with unmatched speed and reliability.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// const textVariants = {
//   enter: { opacity: 0, y: 20 },
//   center: { opacity: 1, y: 0, transition: { duration: 0.4 } },
//   exit: { opacity: 0, y: -20 },
// };

// const imageVariants = {
//   enter: { opacity: 0, x: 30 },
//   center: { opacity: 1, x: 0, transition: { duration: 0.4 } },
//   exit: { opacity: 0, x: -30 },
// };

// export default function SmallExploreModulesSection() {
//   const [selected, setSelected] = useState(0);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const tabRefs = useRef([]);
//   const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

//   // Update indicator position
//   const updateIndicator = () => {
//     if (!isMobile && tabRefs.current[selected]) {
//       const tab = tabRefs.current[selected];
//       setIndicatorStyle({
//         width: tab.offsetWidth,
//         left: tab.offsetLeft,
//       });
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     requestAnimationFrame(updateIndicator);
//   }, [selected, isMobile]);

//   return (
//     <Container>
//       <ContentWrapper>
//         <Header>
//           <Title>Explore Small Molecule Design</Title>
//           <GradientUnderline />

//         </Header>

//         <Card>
//           {!isMobile && (
//             <TabBar>
//               {modules.map((module, index) => (
//                 <Tab
//                   key={index}
//                   ref={(el) => (tabRefs.current[index] = el)}
//                   $active={selected === index}
//                   onClick={() => setSelected(index)}
//                 >
//                   {module.name}
//                 </Tab>
//               ))}
//               <TabIndicator
//                 layoutId="tabIndicator"
//                 style={indicatorStyle}
//                 transition={{
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 30,
//                 }}
//               />
//             </TabBar>
//           )}

//           {isMobile && (
//             <MobileControls>
//               <ArrowButton onClick={() => setSelected((p) => (p === 0 ? modules.length - 1 : p - 1))}>
//                 <FiChevronLeft size={26} />
//               </ArrowButton>
//               <MobileTabTitle>{modules[selected].name}</MobileTabTitle>
//               <ArrowButton onClick={() => setSelected((p) => (p === modules.length - 1 ? 0 : p + 1))}>
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
  padding: 40px 0; // Reduced padding

  @media (max-width: 768px) {
    padding: 30px 0; // Reduced padding
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px; // Reduced from 1440px
  width: 100%;
  padding: 0 1.25rem; // Reduced padding
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;  // Reduced from 50px
  max-width: 700px; // Reduced from 800px
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const Title = styled.h2`
  font-size: 2.25rem; // Reduced from 2.75rem
  font-weight: 700;
  background: linear-gradient(90deg, #22d3ee, #c084fc, #fb923c);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem; // Reduced from 1.25rem
  line-height: 1.2;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.8rem; // Reduced from 2.25rem
  }
`;

const GradientUnderline = styled.span`
  position: absolute;
  bottom: -10px; // Reduced from -12px
  left: 50%;
  transform: translateX(-50%);
  width: 100px; // Reduced from 120px
  height: 3px; // Reduced from 4px
  background: linear-gradient(
    90deg,
    rgba(34, 211, 238, 0.8),
    rgba(192, 132, 252, 0.8),
    rgba(251, 146, 60, 0.8)
  );
  border-radius: 2px;
`;

const Subtitle = styled.p`
  font-size: 1.15rem; // Reduced from 1.35rem
  color: #666;
  line-height: 1.5; // Reduced from 1.6
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem; // Reduced from 1.15rem
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 1.5rem; // Reduced from 2rem
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
  background: linear-gradient(90deg, #4F1985, #4F1985, #4F1985);
  border-radius: 3px 3px 0 0;
`;

const Tab = styled.button`
  flex: 1;
  padding: 1.5rem 1.25rem; // Reduced from 1.75rem 1.5rem
  font-size: 1rem; // Reduced from 1.1rem
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
  min-height: auto;
  gap: 2rem;       // Reduced from 2.5rem
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.25rem; // Reduced from 1.5rem
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding: 2.5rem; // Reduced from 3rem
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem; // Reduced
    order: 2;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem; // Reduced from 1.25rem
  line-height: 1.6; // Reduced from 1.8
  color: #444;
  margin-bottom: 2rem; // Reduced from 2.5rem

  @media (max-width: 768px) {
    font-size: 1rem; // Reduced from 1.1rem
    margin-bottom: 1.5rem; // Reduced from 2rem
  }
`;

const Button = styled.button`
  align-self: flex-start;
  padding: 0.85rem 2rem; // Reduced from 1rem 2.25rem
  background: linear-gradient(90deg, #4F1985, #4F1985, #4F1985);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 0.95rem; // Reduced from 1rem
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.75rem; // Reduced from 1rem

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    align-self: center;
    width: 100%;
    max-width: 200px; // Reduced from 220px
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem; // Reduced from 3rem

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem; // Reduced
    order: 1;
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  max-width: 550px; // Reduced from 650px
  border-radius: 0.8rem; // Reduced from 1rem
  object-fit: cover;
`;

const MobileControls = styled.div`
  display: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem; // Reduced from 1.25rem
  }
`;

const MobileTabTitle = styled.div`
  font-weight: 600;
  font-size: 1rem; // Reduced from 1.1rem
  text-align: center;
  flex: 1;
`;

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.6rem; // Reduced from 0.75rem
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
    name: "Agents in Small Molecule Design",
    description:
      "Impact Statement: Your autonomous discovery team, always at work. Our multi-agent architecture combines specialized AI agents for molecular generation, virtual screening, property prediction, and synthesis feasibility. Working in concert, they orchestrate an end-to-end design cycle that transforms ideas into validated candidates—24/7, with zero downtime.",
    imageUrl:
      "https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    name: "Hit Identification",
    description:
      "Impact Statement: Discover hits in days, not months. AI-powered screening agents rapidly mine vast chemical spaces, integrating structure-based and ligand-based approaches to uncover promising hit candidates with exceptional precision. Our platform accelerates the earliest stage of discovery, ensuring you start with the most viable chemical matter.",
     imageUrl:
      "https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    name: "Hit-to-Lead Optimization",
    description:
      "Impact Statement: Turn early hits into high-potential leads—faster than ever. From ADMET profiling to predictive SAR, our AI agents refine and prioritize molecules that balance potency, selectivity, and developability. The result? Streamlined decision-making and reduced attrition in the costly mid-stage pipeline.",
     imageUrl:
      "https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    name: "Lead Optimization",
    description:
      "Impact Statement: Design your best drug candidate with confidence. Our AI-driven optimization agents fine-tune molecular properties to maximize efficacy, safety, and manufacturability. By simulating and evaluating thousands of design variations, we help you land on the optimal candidate ready for preclinical success.",
      imageUrl:
      "https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  
];

const textVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Faster animation
  exit: { opacity: 0, y: -20 },
};

const imageVariants = {
  enter: { opacity: 0, x: 30 },
  center: { opacity: 1, x: 0, transition: { duration: 0.3 } }, // Faster animation
  exit: { opacity: 0, x: -30 },
};

export default function SmallExploreModulesSection() {
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
           Explore Small Molecule Design

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
                <FiChevronLeft size={22} /> {/* Reduced from 26 */}
              </ArrowButton>
              <MobileTabTitle>{modules[selected].name}</MobileTabTitle>
              <ArrowButton onClick={() => setSelected((p) => (p === modules.length - 1 ? 0 : p + 1))}>
                <FiChevronRight size={22} /> {/* Reduced from 26 */}
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