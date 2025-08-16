import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ProteinOverlappingCard from '../components/proteinengineeringcomp/Proteinengineeringheader';
import ProteinFullWidthContainer from '../components/proteinengineeringcomp/ProteinengineeringImages_description';
import ProteinInsightCards from '../components/proteinengineeringcomp/Proteinengineeringinsights';
import ProteinExploreModulesSection from '../components/proteinengineeringcomp/Proteinengineeringmodules';
import ProteinFeaturesGrid from '../components/proteinengineeringcomp/ProteinengineeringFeatureGrid';
import LaptopSection from './LaptopAnimationLandingPage';

export default function Proteinengineering() {
  // Intersection Observer for Laptop Section
  const { ref: laptopRef, inView: laptopInView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // triggers when 30% of section is visible
  });

  return (
    <>
      <ProteinOverlappingCard />
      <ProteinFullWidthContainer />
      <ProteinInsightCards />
      <ProteinExploreModulesSection />
      <ProteinFeaturesGrid />

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
