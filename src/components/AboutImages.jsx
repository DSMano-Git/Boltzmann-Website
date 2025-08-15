import React from "react";
import { Box, styled } from '@mui/material';

export default function LogoCarousel() {
  const logos = [
    "public/alogo-1.png",
    "public/alogo-2.png",
    "public/alogo-3.png",
    "public/alogo-4.png",
    "public/alogo-5.jpeg",
    "public/alogo-6.jpeg",

  ];

  // Styled components for better organization
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
      width: '50px',
      zIndex: 2,
    },
    '&::before': {
      left: 0,
      background: 'linear-gradient(to right, white, transparent)',
    },
    '&::after': {
      right: 0,
      background: 'linear-gradient(to left, white, transparent)',
    }
  });

  const CarouselTrack = styled(Box)({
    display: "inline-flex",
    animation: "scroll 20s linear infinite",
    alignItems: "center",
  });

  const LogoContainer = styled(Box)({
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
  });

  const LogoImage = styled('img')({
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    filter: "grayscale(20%)",
    
    transition: "all 0.3s ease",
    '&:hover': {
      filter: "grayscale(0%)",
      
      transform: "scale(1.05)"
    }
  });

  return (
    <CarouselContainer>
     <h2 style={{textAlign: 'center',marginBottom: '4%',fontWeight: 400,color: '#4F1985',fontSize: '2.5rem',fontFamily: 'timesnew'}}>We are Recognized for.
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
      <CarouselTrack >
        {logos.map((logo, index) => (
          <LogoContainer key={index}>
            <LogoImage src={logo} alt={`logo-${index}`} />
          </LogoContainer>
        ))}
        {/* Duplicate for seamless looping */}
        {logos.map((logo, index) => (
          <LogoContainer key={`dup-${index}`}>
            <LogoImage src={logo} alt={`logo-dup-${index}`} />
          </LogoContainer>
        ))}
      </CarouselTrack>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </CarouselContainer>
  );
}