import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useTransform, useScroll, useSpring } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  padding: 1rem 0.1rem;
  position: relative;
  overflow: hidden;
  isolation: isolate;
 
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  position: relative;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 200;
  fontFamily: "'Inter', sans-serif",
            
  margin-bottom: 1rem;
  color: #111;
  line-height: 1.2;
  letter-spacing: -0.03em;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  line-height: 1.6;
  font-weight: 400;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 2rem;
  overflow: hidden;
  
  border: 1px solid rgba(0, 0, 0, 0.09);
  position: relative;
`;

const TabBar = styled.div`
  display: flex;

  position: relative;
 
`;

const TabIndicator = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: #000;
  border-radius: 3px 3px 0 0;
`;

const Tab = styled.button`
  flex: 1;
  padding: 1.5rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${props => props.$active ? '#111' : '#888'};
  background: ${props => props.$active ? 'rgba(0, 0, 0, 0.04)' : 'transparent'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  outline: none;
  
  &:hover {
    color: #111;
    background: rgba(0, 0, 0, 0.02);
  }
`;

const ContentArea = styled.div`
  display: flex;
  min-height: 500px;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 2rem;
    order: 2;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 2.5rem;
  font-weight: 400;
`;

const Button = styled.button`
  align-self: flex-start;
  padding: 1rem 2rem;
  background: #111;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  outline: none;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    background: #222;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
    order: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 1rem;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  object-fit: cover;
`;

const modules = [
  {
    name: "Small Molecule Design",
    description: "Experience breakthrough efficiency with our purpose-built research interface. Advanced AI-driven insights and collaborative tools accelerate discovery while maintaining rigorous scientific standards.",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
  
  {
    name: "Protein Engineering",
    description: "Precision management for complex in vivo studies. Our platform reduces administrative overhead by 60% while providing unparalleled data integrity and audit capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Synthetic Chemistry",
    description: "Seamlessly integrate teams and data across your organization. Our secure, scalable infrastructure breaks down silos and enables real-time, data-driven decision making at every level.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
];

const textVariants = {
  enter: { opacity: 0 },
  center: { 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  exit: { opacity: 0 }
};

const imageVariants = {
  enter: { opacity: 0 },
  center: { 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  exit: { opacity: 0 }
};

export default function PremiumModuleExplorer() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef([]);
  
  const handleTabClick = (index) => {
    setSelected(index);
  };

  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, modules.length);
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <Header>
          <div style={{ 
  position: "relative", 
  display: "inline-block", 
  marginBottom: "40px",
  textAlign: "center",
}}>
  <h2 style={{
    fontSize: "42px",
    fontWeight: "700",
    color: "#111827",
    margin: 0,
  }}>
    Explore Our Solutions
  </h2>
  <span style={{
    position: "absolute",
    bottom: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "120px",
    height: "4px",
    background: "linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8))",
    borderRadius: "2px"
  }} />
</div>

          <Subtitle>
            Comprehensive tools designed for modern scientific teams, from discovery to development
          </Subtitle>
        </Header>
        
        <Card>
          <TabBar>
            {modules.map((module, index) => (
              <Tab
                key={index}
                ref={el => tabRefs.current[index] = el}
                $active={selected === index}
                onClick={() => handleTabClick(index)}
              >
                {module.name}
              </Tab>
            ))}
            <TabIndicator
              layoutId="tabIndicator"
              initial={false}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                width: tabRefs.current[selected]?.offsetWidth || 0,
                left: tabRefs.current[selected]?.offsetLeft || 0
              }}
            />
          </TabBar>
          
          <ContentArea>
            <TextContent>
              <AnimatePresence mode="wait">
                <Description
                  key={selected}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {modules[selected].description}
                </Description>
              </AnimatePresence>
              
              <Button>
                Learn more
              </Button>
            </TextContent>
            
            <ImageContainer>
              <AnimatePresence mode="wait">
                <Image
                  key={selected}
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