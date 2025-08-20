import React from "react";
import { Box, styled } from '@mui/material';

export default function LogoCarousel() {
  const logos = [
    "/logo-1.png",
    "/logo-2.png",
    
    "/logo-4.png",
    "/logo-5.png",
    "/logo-6.png",
    "/logo-7.png",
    "/logo-8.png",
    "/logo-9.png",
    "/logo-10.png",
    "/logo-11.png",
    "/logo-12.png",
    "/logo-13.png",
    "/logo-14.png",
  ];

  // Styled components moved outside the component to prevent recreation on every render
  const CarouselContainer = styled(Box)({
    width: "100%",
    overflow: "hidden",
    position: "relative",
    margin: "40px 0",
    padding: "20px 0",
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100px', // Increased width for better fade effect
      zIndex: 2,
      pointerEvents: 'none' // Prevent interaction with the fade elements
    },
    '&::before': {
      left: 0,
      background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
    },
    '&::after': {
      right: 0,
      background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
    }
  });

  const CarouselTrack = styled(Box)(({ theme }) => ({
    display: "inline-flex",
    animation: "scroll 30s linear infinite", // Slower animation
    alignItems: "center",
    whiteSpace: "nowrap",
    [theme.breakpoints.down('md')]: {
      animation: "scroll 20s linear infinite", // Faster on mobile
    }
  }));

  const LogoContainer = styled(Box)({
    flexShrink: 0, // Prevent logos from shrinking
    width: "160px",
    height: "80px",
    margin: "0 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "4px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease",
    '&:hover': {
      transform: "scale(1.05)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }
  });

  const LogoImage = styled('img')({
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    filter: "grayscale(20%)",
    transition: "filter 0.3s ease",
    '&:hover': {
      filter: "grayscale(0%)",
    }
  });

  return (
    <CarouselContainer>
      <CarouselTrack>
        {logos.map((logo, index) => (
          <LogoContainer key={`original-${index}`}>
            <LogoImage 
              src={logo} 
              alt={`logo-${index}`}
              loading="lazy" // Add lazy loading
            />
          </LogoContainer>
        ))}
        {/* Duplicate for seamless looping */}
        {logos.map((logo, index) => (
          <LogoContainer key={`duplicate-${index}`}>
            <LogoImage 
              src={logo} 
              alt={`logo-${index}`}
              loading="lazy"
            />
          </LogoContainer>
        ))}
      </CarouselTrack>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </CarouselContainer>
  );
}