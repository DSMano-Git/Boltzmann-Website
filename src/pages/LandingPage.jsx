import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MacBookComponent from '../components/Laptopanimation';

export default function LaptopSection({ isOpen }) {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      {/* Main Heading on Top */}
      <h2
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '6rem',
          color: '#0D1B3F',
          position: 'relative',
          display: 'inline-block',
        }}
      >
        Explore Our Technology
        <span
          style={{
            position: 'absolute',
            bottom: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '4px',
            background: 'linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8))',
            borderRadius: '2px',
          }}
        />
      </h2>

      {/* Laptop and Text Side by Side */}
      <AnimatePresence>
        {isOpen && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              flexWrap: 'wrap',
              gap: '40px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              style={{
                flex: 1,
                minWidth: '300px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <MacBookComponent isOpen={isOpen} />
            </motion.div>

           <motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: 100 }}
  transition={{ duration: 1 }}
  style={{
    flex: 1,
    minWidth: '300px',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '-13rem',
  }}
>
  <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#111827' }}>
    Discover Our Technology
  </h3>
  <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4B5563', marginBottom: '2rem' }}>
    This is where you can put descriptive text about your platform,
    how it transforms workflows, or any sales message you want. It
    slides in from the right while the MacBook slides in from the
    left.
  </p>
  
  <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
    {/* <button
      style={{
        backgroundColor: '#4F1985',
        color: '#fff',
        border: 'none',
        borderRadius: '50px',
        padding: '12px 28px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#3c1269'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#4F1985'}
    >
      Learn More
    </button>
    
    <button
      style={{
        backgroundColor: '#4F1985',
        color: '#fff',
        border: 'none',
        borderRadius: '50px',
        padding: '12px 28px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#3c1269'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#4F1985'}
    >
      Request Demo
    </button> */}
  </div>
</motion.div>

          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
