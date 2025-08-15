

import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import InsightCards from '../components/InsightsSection';
import MainPageherocontent from '../pages/Mainpageherocontent';
import LaptopSection from '../pages/LandingPage';
import { motion } from 'framer-motion';
import ExploreModulesSection from '../components/Modules';
import LabAutomationSection from '../components/LabAutomationSection';
import Images from '../components/HomeImages';

export default function HomePage() {
  // Refs for each section
  const heroRef = useRef(null);
  const imagesRef = useRef(null);
  const insightsRef = useRef(null);
  const labAutomationRef = useRef(null);
  const modulesRef = useRef(null);
  const laptopRef = useRef(null);
  
  // Track which sections are in view
  const [inView, setInView] = useState({
    hero: true,
    images: false,
    insights: false,
    labAutomation: false,
    modules: false,
    laptop: false
  });

  // Underline animation progress
  const [underlineProgress, setUnderlineProgress] = useState(0);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => (document.documentElement.style.scrollBehavior = 'auto');
  }, []);

  // Scroll to insights section
  const scrollToInsights = () => insightsRef.current?.scrollIntoView();

  // Handle underline animation
  useEffect(() => {
    const handleScroll = () => {
      if (modulesRef.current) {
        const rect = modulesRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visibleRatio = Math.min(1, Math.max(0, (viewportHeight - rect.top) / viewportHeight));
        setUnderlineProgress(visibleRatio);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observers for scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observers = [];

    const createObserver = (ref, key) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(prev => ({ ...prev, [key]: true }));
          }
        },
        observerOptions
      );
      if (ref.current) {
        observer.observe(ref.current);
        observers.push(observer);
      }
    };

    createObserver(imagesRef, 'images');
    createObserver(insightsRef, 'insights');
    createObserver(labAutomationRef, 'labAutomation');
    createObserver(modulesRef, 'modules');
    createObserver(laptopRef, 'laptop');

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  // Animation variants
  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      overflowX: 'hidden', 
      width: '100%',
      margin: 0,
      padding: 0 
    }}>
      <main style={{ 
        flex: 1, 
        width: '100%',
        margin: 0,
        padding: 0 
      }}>
        {/* Hero Section */}
        <div ref={heroRef}>
          <MainPageherocontent />
        </div>

        {/* Images Section */}
       
          <Images />
      
        {/* Insights Section */}
     
          {/* Insight Cards */}
        
            <InsightCards />
        

          {/* Section Header */}
         
            <h2 style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: '42px', 
              fontWeight: '200', 
              color: '#111827', 
              margin: 0,
              padding: 0,
            }}>
              Why teams choose Boltzmann Suite
            </h2>
            

          {/* Lab Automation Sections */}
          <div ref={labAutomationRef}>
           
              <LabAutomationSection
                icon="⚛️"
                heading="Gen AI for Scientific Precision"
                paragraphs={[
                  'Unifies all stages of the discovery lifecycle.',
                  'Connects molecular generation to synthesis and execution.',
                  'Automates workflows with real-time data exchange.',
                ]}
              />
           

           
              <LabAutomationSection
                icon="🧬"
                heading="Integrated LIMS with customizable APIs and CLI-first workflows for seamless operations."
                paragraphs={[
                  'Unifies all stages of the discovery lifecycle.',
                  'Connects molecular generation to synthesis and execution.',
                  'Automates workflows with real-time data exchange.',
                ]}
              />
       
          </div>

          {/* Modules Section */}
          
            <div style={{ 
              position: 'absolute', 
              bottom: -8, 
              left: 0, 
              width: '100%', 
              height: 2, 
              overflow: 'hidden' 
            }}>
              
            </div>
            <div style={{ 
              maxWidth: '1400px', 
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <ExploreModulesSection isVisible={inView.modules} />
            </div>
         

        {/* Laptop Section */}
        <motion.div
          ref={laptopRef}
          initial={{ opacity: 0, y: 60 }}
          animate={inView.laptop ? { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2
            }
          } : {}}
          style={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            padding: '100px 0',
            boxSizing: 'border-box'
          }}
        >
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'center', 
            width: '100%', 
            maxWidth: '1400px',
          }}>
            <LaptopSection isOpen={inView.laptop} />
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}