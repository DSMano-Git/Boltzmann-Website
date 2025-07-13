import React from 'react';
import { styled, keyframes } from '@mui/material/styles';

const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const StyledSVG = styled('svg')(({ theme }) => ({
  width: 48,
  height: 48,
  '& path': {
    fill: 'none',
    strokeWidth: 4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeDasharray: 100,
    strokeDashoffset: 100,
    animation: `${draw} 2s forwards`,
  },
  '& path:nth-of-type(1)': { stroke: '#00bcd4', animationDelay: '0s' },
  '& path:nth-of-type(2)': { stroke: '#9c27b0', animationDelay: '0.3s' },
  '& path:nth-of-type(3)': { stroke: '#ff5722', animationDelay: '0.6s' },
  '& path:nth-of-type(4)': { stroke: '#ff9800', animationDelay: '0.9s' },
}));

export default function AnimatedRLogo() {
  return (
    <StyledSVG viewBox="0 0 100 100">
      <path d="M 20 80 L 20 20" />
      <path d="M 20 20 Q 45 20 45 40 Q 45 60 20 60" />
      <path d="M 20 60 L 50 80" />
      <path d="M 50 80 L 50 80" strokeLinecap="round" strokeWidth={10} />
    </StyledSVG>
  );
}
