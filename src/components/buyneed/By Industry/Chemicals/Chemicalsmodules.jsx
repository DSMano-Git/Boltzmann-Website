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
    name: "Accelerate Product Development",
    description: `
Traditional formulation and process optimization cycles take months—our platform reduces them to weeks.
- AI-driven simulations replace time-consuming trial-and-error experiments.
- Multi-objective optimization balances performance, cost, and sustainability.
- Digital twins predict outcomes before plant-scale trials.
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    name: "Reduce R&D Cost and Waste",
    description: `
Every failed iteration wastes resources—our suite helps you design right the first time.
- Predict chemical stability, reactivity, and compatibility instantly.
- Screen for environmental and safety compliance early in development.
- Optimize yields with minimal raw material use.
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    name: "Unlock Breakthrough Materials",
    description: `
Stay at the forefront of innovation.
- Explore novel chemistries and composites with generative AI design.
- Simulate extreme-condition performance for aerospace, automotive, and energy sectors.
- Rapidly identify promising candidates for next-gen applications.
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    name: "Seamless Scale-Up and Manufacturing Integration",
    description: `
Move from concept to production without friction.
- Link lab data with manufacturing execution systems (MES).
- Predict scale-up risks and adapt processes in real time.
- Align R&D, production, and quality teams with unified dashboards.
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0",
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
           Explore Chemicals

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