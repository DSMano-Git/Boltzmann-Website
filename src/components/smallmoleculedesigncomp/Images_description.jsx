
// import React from "react";

// import { Box, styled, useTheme, Typography } from "@mui/material";

// // Your exact unchanged LogoCarousel component
// const LogoCarousel = () => {
//   const logos = [
//     "public/alogo-1.png",
//     "public/alogo-2.png",
//     "public/alogo-3.png",
//     "public/alogo-4.png",
//     "public/alogo-5.jpeg",
//     "public/alogo-6.jpeg",
//   ];

//   const CarouselContainer = styled(Box)({
//     width: "100%",
//     overflow: "hidden",
//     position: "relative",
//     margin: "40px 0",
//     padding: "20px 0",
//     '&::before, &::after': {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       bottom: 0,
//       width: '50px',
//       zIndex: 2,
//     },
//     '&::before': {
//       left: 0,
//       background: 'linear-gradient(to right, white, transparent)',
//     },
//     '&::after': {
//       right: 0,
//       background: 'linear-gradient(to left, white, transparent)',
//     }
//   });

//   const CarouselTrack = styled(Box)({
//     display: "inline-flex",
//     animation: "scroll 20s linear infinite",
//     alignItems: "center",
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
    
//   });

//   return (
//     <CarouselContainer>
     
//       <CarouselTrack >
//         {logos.map((logo, index) => (
//           <LogoContainer key={index}>
//             <LogoImage src={logo} alt={`logo-${index}`} />
//           </LogoContainer>
//         ))}
//         {logos.map((logo, index) => (
//           <LogoContainer key={`dup-${index}`}>
//             <LogoImage src={logo} alt={`logo-dup-${index}`} />
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
// }

// const BrandShowcase = () => {
//   const theme = useTheme();
  
//   const contentImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: "1400px",
//         mx: "auto",
//         my: '0px',
//         my: { xs: 4, md: 10 },
//         px: { xs: 2, md: 4 },
//       }}
//     >
//       {/* Outer Container with Full Gradient Border */}
//       <Box
//         sx={{
//           width: "100%",
//           position: "relative",
//           borderRadius: "32px",
//           padding: "4px", // Border thickness
//           background: `linear-gradient(135deg, 
//             ${theme.palette.primary.main}, 
//             ${theme.palette.secondary.main}, 
//             ${theme.palette.primary.main}, 
//             ${theme.palette.secondary.main})`,
//           boxShadow: `0 24px 80px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
//         }}
//       >
//         {/* Inner Container */}
//         <Box
//           sx={{
//             width: "100%",
//             height: "100%",
//             backgroundColor: "background.paper",
//             borderRadius: "28px", // 32px - 4px to account for border
//             overflow: "hidden",
//           }}
//         >
//           {/* Your exact Logo Carousel Section */}
//           <Box
//             sx={{
//               borderBottom: `1px solid ${theme.palette.divider}`,
//               background: theme.palette.mode === 'dark' 
//                 ? 'rgba(255,255,255,0.03)' 
//                 : 'rgba(0,0,0,0.02)',
//               backdropFilter: "blur(4px)",
//             }}
//           >
//             <LogoCarousel />
//           </Box>

//           {/* Content Section with Image */}
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", lg: "row" },
//               alignItems: "center",
//               minHeight: "500px",
//             }}
//           >
//             {/* Image Container (Left Side) */}
//             <Box
//               sx={{
//                 width: { xs: "100%", lg: "50%" },
//                 height: { xs: "300px", lg: "auto" },
//                 position: "relative",
//                 overflow: "hidden",
//                 "&::after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   height: "100%",
//                   background: `linear-gradient(to top, ${theme.palette.background.paper} 0%, transparent 30%)`,
//                   zIndex: 1,
//                   [theme.breakpoints.up("lg")]: {
//                     display: "none",
//                   },
//                 },
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
//                   objectPosition: "center",
//                   filter: theme.palette.mode === 'dark' ? "brightness(0.8)" : "none",
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
//                   zIndex: 1,
//                 }}
//               />
//             </Box>

//             {/* Content Container (Right Side) */}
//             <Box
//               sx={{
//                 width: { xs: "100%", lg: "50%" },
//                 p: { xs: 4, md: 6, lg: 8 },
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 position: "relative",
//                 // "&::before": {
//                 //   content: '""',
//                 //   position: "absolute",
//                 //   top: 40,
//                 //   left: { xs: 40, lg: -30 },
//                 //   width: "60px",
//                 //   height: "4px",
//                 //   background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                 //   borderRadius: "2px",
//                 // },
//               }}
//             >
//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
//                   fontWeight: 400,
//                   lineHeight: 1.2,
//                   mb: 3,
//                   color: "text.primary",
//                   position: "relative",
//                 }}
//               >
//                 Transform the way you discover, design, and optimize small molecules faster, smarter.
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   fontSize: { xs: "1rem", md: "1.1rem" },
//                   lineHeight: 1.8,
//                   color: "text.secondary",
//                   mb: 4,
//                 }}
//               >
//                 Our technology integrates generative AI, multi-agent systems, and domain-specific knowledge into one seamless workspace—so scientists can focus on groundbreaking science while we handle the complexity. Whether you’re a biotech innovator, a pharma leader, or an academic researcher, our platform equips you to turn bold ideas into viable therapeutics with speed and precision.
//               </Typography>
//               <Box
//                 sx={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: 2,
//                   mt: 2,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     width: "40px",
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
//                   }}
//                 >
//                  Small Molecule Design
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default BrandShowcase;

// import React from "react";

// import { Box, styled, useTheme, Typography } from "@mui/material";

// const SmallLogoCarousel = () => {
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

// const BrandShowcase = () => {
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
//                 Transform the way you discover, design, and optimize small
//                 molecules faster, smarter.
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
//                 Our technology integrates generative AI, multi-agent systems,
//                 and domain-specific knowledge into one seamless workspace—so
//                 scientists can focus on groundbreaking science while we handle
//                 the complexity. Whether you’re a biotech innovator, a pharma
//                 leader, or an academic researcher, our platform equips you to
//                 turn bold ideas into viable therapeutics with speed and
//                 precision.
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

// export default SmallLogoCarousel;


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

const SmallLogoCarousel = () => {
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
               Harnessing AI to Empower the Next Generation of Drug Discovery
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
               Our technology integrates generative AI, multi-agent systems, and domain-specific knowledge into one seamless workspace—so scientists can focus on groundbreaking science while we handle the complexity. Whether you’re a biotech innovator, a pharma leader, or an academic researcher, our platform equips you to turn bold ideas into viable therapeutics with speed and precision.

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
                  Small Molecule Design
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SmallLogoCarousel;