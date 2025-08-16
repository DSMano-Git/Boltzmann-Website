import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import SmallOverlappingCard from '../components/smallmoleculedesigncomp/header';
import SmallFullWidthContainer from '../components/smallmoleculedesigncomp/Images_description';
import SmallInsightCards from '../components/smallmoleculedesigncomp/Smallmoleculeinsights';
import SmallExploreModulesSection from '../components/smallmoleculedesigncomp/Smallmoleculemodules';
import SmallFeaturesGrid from '../components/smallmoleculedesigncomp/SmallmoleculeFeatureGrid';
import LaptopSection from './LaptopAnimationLandingPage';

export default function SmallmoleculeDesign() {
  // Intersection Observer for Laptop Section
  const { ref: laptopRef, inView: laptopInView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // triggers when 30% of section is visible
  });

  return (
    <>
      <SmallOverlappingCard />
      <SmallFullWidthContainer />
      <SmallInsightCards />
      <SmallExploreModulesSection />
      <SmallFeaturesGrid />

      {/* Laptop Section */}
      <motion.div
        ref={laptopRef}
        initial={{ opacity: 0, y: 60 }}
        animate={laptopInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.2,
        }}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '1400px',
          }}
        >
          <LaptopSection isOpen={laptopInView} />
        </div>
      </motion.div>
    </>
  );
}
