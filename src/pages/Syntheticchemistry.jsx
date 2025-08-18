import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import SyntheticOverlappingCard from '../components/syntheticchemistrycomp/Syntheticchemistryheader';
import SyntheticFullWidthContainer from '../components/syntheticchemistrycomp/SyntheticchemistryImages_description'
import SyntheticInsightCards from '../components/syntheticchemistrycomp/Syntheticchemistryinsights';
import SyntheticExploreModulesSection from '../components/syntheticchemistrycomp/Syntheticchemistrymodules';
import SyntheticFeaturesGrid from '../components/syntheticchemistrycomp/SyntheticchemistryFeatureGrid';
import LaptopSection from './LaptopAnimationLandingPage';
import Footer from '../components/Footer';
export default function Synthetic() {
  // Intersection Observer for Laptop Section
  const { ref: laptopRef, inView: laptopInView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // triggers when 30% of section is visible
  });

  return (
    <>
      <SyntheticOverlappingCard />
      <SyntheticFullWidthContainer />
      <SyntheticInsightCards />
      <SyntheticExploreModulesSection />
      <SyntheticFeaturesGrid />

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
      <Footer />
    </>
  );
}
