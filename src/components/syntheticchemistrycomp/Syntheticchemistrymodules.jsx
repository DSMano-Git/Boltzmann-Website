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
// Data
const modules = [
  {
    name: "Reaction Discovery",
    description:
      "Impact Statement: Identify viable reactions in minutes, not weeks. AI-driven literature mining and predictive models uncover novel or underused reaction pathways tailored to your target molecule, ensuring your synthesis starts on the most promising foundation.",
    imageUrl:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Retrosynthetic Planning",
    description:
      "Impact Statement: Go from target molecule to workable routes instantly. Our multi-agent AI evaluates millions of possibilities to deliver optimal, cost-effective, and sustainable synthetic pathways—ranked and ready for lab execution.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Route Optimization",
    description:
      "Impact Statement: Maximize yield, minimize waste. AI models refine reaction conditions, reagent selection, and step sequences to improve scalability and environmental impact, all while maintaining product purity.",
    imageUrl:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Agents in Synthetic Chemistry",
    description:
      "Impact Statement: Your autonomous synthetic planning team. Our specialized AI agents for reaction prediction, retrosynthesis, condition optimization, and cost analysis work together to continuously improve your routes—24/7.",
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

export default function SyntheticExploreModulesSection() {
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
          <Title>Explore Small Molecule Design</Title>
          <GradientUnderline />

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
