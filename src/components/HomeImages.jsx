import React from "react";
import { Box, styled } from '@mui/material';

export default function LogoCarousel() {
  const logos = [
    "public/logo-1.png",
    "public/logo-2.png",
    "public/logo-3.png",
    "public/logo-4.png",
    "public/logo-5.png",
    "public/logo-6.png",
    "public/logo-7.png",
    "public/logo-8.png",
    "public/logo-9.png",
    "public/logo-10.png",
    "public/logo-11.png",
    "public/logo-12.png",
    "public/logo-13.png",
    "public/logo-14.png",
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
      <CarouselTrack>
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