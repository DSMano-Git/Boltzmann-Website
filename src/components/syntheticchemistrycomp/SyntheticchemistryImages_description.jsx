// import React from "react";

// import { Box, styled, useTheme, Typography } from "@mui/material";

// const LogoCarousel = () => {
//   const theme = useTheme();
//   const logos = [
//     "/alogo-1.png",
//     "/alogo-2.png",
//     "/alogo-3.png",
//     "/alogo-4.png",
//     "/alogo-5.jpeg",
//     "/alogo-6.jpeg",
//   ];

//   const CarouselContainer = styled(Box)(({ theme }) => ({
//     width: "100%",
//     overflow: "hidden",
//     position: "relative",
//     margin: theme.spacing(3, 0),
//     padding: theme.spacing(1, 0),
//     maxWidth: "100%",
//     boxSizing: "border-box",
//     "&::before, &::after": {
//       content: '""',
//       position: "absolute",
//       top: 0,
//       bottom: 0,
//       width: "40px",
//       zIndex: 2,
//       pointerEvents: "none",
//     },
   
//   }));

//   const CarouselTrack = styled(Box)({
//     display: "inline-flex",
//     animation: "scroll 20s linear infinite",
//     alignItems: "center",
//     whiteSpace: "nowrap",
//   });
//   const LogoContainer = styled(Box)({
//     width: "160px",
//     height: "80px",
//     margin: "0 15px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "10px",
//     backgroundColor: "white",
//     borderRadius: "4px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//   });

//   const LogoImage = styled('img')({
//     maxWidth: "100%",
//     maxHeight: "100%",
//     width: "auto",
//     height: "auto",
//     objectFit: "contain",
//     filter: "grayscale(20%)",
    
//     transition: "all 0.3s ease",
//     '&:hover': {
//       filter: "grayscale(0%)",
      
//       transform: "scale(1.05)"
//     }
//   });
//   return (
//     <CarouselContainer>
//       <CarouselTrack>
//         {[...logos, ...logos].map((logo, index) => (
//           <LogoContainer key={index}>
//             <LogoImage src={logo} alt={`logo-${index}`} />
//           </LogoContainer>
//         ))}
//       </CarouselTrack>
//       <style>
//         {`
//           @keyframes scroll {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//         `}
//       </style>
//     </CarouselContainer>
//   );
// };

// const SyntheticBrandShowcase = () => {
//   const theme = useTheme();
//   const contentImage =
//     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80";

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: {
//           xs: "100%", // mobile full width
//           sm: "100%", // tablet full width
//           md: "1100px", // mid screens
//           lg: "1350px", // desktop cap
//         },
//         overflowX: "hidden",
//         mx: "auto",
//         px: { xs: 1.5, sm: 2, md: 4 },
//         my: { xs: 2, md: 8 },
//         boxSizing: "border-box",
//          backgroundColor: "none",
//       }}
//     >
//       {/* Gradient Border Wrapper */}
//       <Box
//         sx={{
//           position: "relative",
//           borderRadius: "32px",
//           p: "3px",
//           background: `linear-gradient(135deg, 
//             ${theme.palette.primary.main}, 
//             ${theme.palette.secondary.main}, 
//             ${theme.palette.primary.main})`,
        
//         }}
//       >
//         {/* Inner Container */}
//         <Box
//           sx={{
//             backgroundColor: "#ffffff",
//             borderRadius: "28px",
//             overflow: "hidden",
//           }}
//         >
//           {/* Logo Carousel */}
//           <Box
//             sx={{
//               borderBottom: `1px solid ${theme.palette.divider}`,
//               backgroundColor: "#ffffff",
//               backdropFilter: "blur(4px)",
//             }}
//           >
//             <LogoCarousel />
//           </Box>

//           {/* Main Content */}
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", lg: "row" },
//               gap: { xs: 1.5, md: 4 },
//               p: { xs: 1.5, sm: 2.5, md: 4, lg: 5 },
//               maxWidth: "100%",
//               overflowX: "hidden",
//               boxSizing: "border-box",
//             }}
//           >
//             {/* Left Image */}
//             <Box
//               sx={{
//                 flex: { xs: "1 1 auto", lg: "0 0 50%" },
//                 minHeight: { xs: "200px", sm: "280px", md: "auto" },
//                 borderRadius: "20px",
//                 overflow: "hidden",
//                 position: "relative",
//                 maxWidth: "100%",
//               }}
//             >
//               <Box
//                 component="img"
//                 src={contentImage}
//                 alt="Digital media landscape"
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   filter:
//                     theme.palette.mode === "dark" ? "brightness(0.85)" : "none",
//                 }}
//               />
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
//                   mixBlendMode: "overlay",
//                 }}
//               />
//             </Box>

//             {/* Right Text */}
//             <Box
//               sx={{
//                 flex: "1 1 auto",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 p: { xs: 1, sm: 2, md: 3, lg: 4 },
//                 maxWidth: "100%",
//               }}
//             >
//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontSize: {
//                     xs: "1.25rem",
//                     sm: "1.6rem",
//                     md: "2rem",
//                     lg: "2.6rem",
//                   },
//                   fontWeight: 500,
//                   lineHeight: 1.25,
//                   mb: { xs: 1.2, md: 2.2 },
//                   color: "text.primary",
//                 }}
//               >
//               Reimagine how you design, plan, and execute synthesis—faster, greener, smarter.
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
//                   lineHeight: 1.6,
//                   color: "text.secondary",
//                   mb: { xs: 1.8, md: 3 },
//                 }}
//               >
//               Our platform combines generative AI, retrosynthetic planning engines, and domain-specific chemistry knowledge into a single, collaborative workspace—so chemists can focus on solving the toughest synthetic challenges while our AI handles the complexity. Whether you’re in pharmaceuticals, materials science, or agrochemicals, our technology empowers you to create, optimize, and validate synthetic routes with speed, precision, and sustainability in mind.
//               </Typography>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
//                 <Box
//                   sx={{
//                     width: { xs: "28px", sm: "36px" },
//                     height: "2px",
//                     background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                   }}
//                 />
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     textTransform: "uppercase",
//                     letterSpacing: "1px",
//                     fontWeight: 400,
//                     color: "text.secondary",
//                     fontSize: { xs: "0.65rem", sm: "0.75rem" },
//                   }}
//                 >
//                   Small Molecule Design
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default SyntheticBrandShowcase;




import React from "react";
import { Box, styled, useTheme, Typography } from "@mui/material";

const LogoCarousel = () => {
  const theme = useTheme();
  const logos = [
    "/alogo-1.png",
    "/alogo-2.png",
    "/alogo-3.png",
    "/alogo-4.png",
    "/alogo-5.jpeg",
    "/alogo-6.jpeg",
  ];

  const CarouselContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    overflow: "hidden",
    position: "relative",
    margin: theme.spacing(2, 0),
    padding: theme.spacing(0.5, 0),
    maxWidth: "100%",
    boxSizing: "border-box",
  }));

  const CarouselTrack = styled(Box)({
    display: "inline-flex",
    animation: "scroll 20s linear infinite",
    alignItems: "center",
    whiteSpace: "nowrap",
  });
  
  const LogoContainer = styled(Box)({
    width: "130px", // Reduced from 160px
    height: "60px", // Reduced from 80px
    margin: "0 12px", // Reduced from 15px
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px", // Reduced from 10px
    backgroundColor: "white",
    borderRadius: "4px",
    boxShadow: "0 1px 6px rgba(0,0,0,0.04)", // Reduced shadow
  });

  const LogoImage = styled('img')({
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    filter: "grayscale(20%)",
    transition: "all 0.2s ease", // Faster transition
    '&:hover': {
      filter: "grayscale(0%)",
      transform: "scale(1.03)" // Reduced scale
    }
  });
  
  return (
    <CarouselContainer>
      <CarouselTrack>
        {[...logos, ...logos].map((logo, index) => (
          <LogoContainer key={index}>
            <LogoImage src={logo} alt={`logo-${index}`} />
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
};

const SyntheticBrandShowcase = () => {
  const theme = useTheme();
  const contentImage =
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80";

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: {
          xs: "100%",
          sm: "100%",
          md: "1000px", // Reduced from 1100px
          lg: "1200px", // Reduced from 1350px
        },
        overflowX: "hidden",
        mx: "auto",
        px: { xs: 1.5, sm: 2, md: 3 }, // Reduced padding
        my: { xs: 2, md: 6 }, // Reduced margin
        boxSizing: "border-box",
        backgroundColor: "none",
      }}
    >
      {/* Gradient Border Wrapper */}
      <Box
        sx={{
          position: "relative",
          borderRadius: "26px", // Reduced from 32px
          p: "2px", // Reduced from 3px
          background: `linear-gradient(135deg, 
            ${theme.palette.primary.main}, 
            ${theme.palette.secondary.main}, 
            ${theme.palette.primary.main})`,
        }}
      >
        {/* Inner Container */}
        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "24px", // Reduced from 28px
            overflow: "hidden",
          }}
        >
          {/* Logo Carousel */}
          <Box
            sx={{
              borderBottom: `1px solid ${theme.palette.divider}`,
              backgroundColor: "#ffffff",
              backdropFilter: "blur(4px)",
            }}
          >
            <LogoCarousel />
          </Box>

          {/* Main Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: 1.5, md: 3 }, // Reduced gap
              p: { xs: 1.5, sm: 2, md: 3, lg: 4 }, // Reduced padding
              maxWidth: "100%",
              overflowX: "hidden",
              boxSizing: "border-box",
            }}
          >
            {/* Left Image */}
            <Box
              sx={{
                flex: { xs: "1 1 auto", lg: "0 0 48%" }, // Slightly reduced
                minHeight: { xs: "180px", sm: "240px", md: "auto" }, // Reduced height
                borderRadius: "16px", // Reduced from 20px
                overflow: "hidden",
                position: "relative",
                maxWidth: "100%",
              }}
            >
              <Box
                component="img"
                src={contentImage}
                alt="Digital media landscape"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter:
                    theme.palette.mode === "dark" ? "brightness(0.85)" : "none",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                  mixBlendMode: "overlay",
                }}
              />
            </Box>

            {/* Right Text */}
            <Box
              sx={{
                flex: "1 1 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: { xs: 1, sm: 1.5, md: 2, lg: 3 }, // Reduced padding
                maxWidth: "100%",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1.5rem",
                    md: "1.8rem",
                    lg: "2.2rem", // Reduced from 2.6rem
                  },
                  fontWeight: 500,
                  lineHeight: 1.25,
                  mb: { xs: 1, md: 1.8 }, // Reduced margin
                  color: "text.primary",
                }}
              >
               Accelerating Discovery in Chemistry
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.82rem", sm: "0.9rem", md: "0.95rem" }, // Reduced
                  lineHeight: 1.5, // Reduced from 1.6
                  color: "text.secondary",
                  mb: { xs: 1.5, md: 2.5 }, // Reduced margin
                }}
              >
               Our platform combines generative AI, retrosynthetic planning engines, and domain-specific chemistry knowledge into a single, collaborative workspace—so chemists can focus on solving the toughest synthetic challenges while our AI handles the complexity. Whether you’re in pharmaceuticals, materials science, or agrochemicals, our technology empowers you to create, optimize, and validate synthetic routes with speed, precision, and sustainability in mind.

              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: { xs: "24px", sm: "30px" }, // Reduced
                    height: "2px",
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: "0.5px", // Reduced
                    fontWeight: 400,
                    color: "text.secondary",
                    fontSize: { xs: "0.6rem", sm: "0.7rem" }, // Reduced
                  }}
                >
                  Synthetic Chemistry 
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SyntheticBrandShowcase;