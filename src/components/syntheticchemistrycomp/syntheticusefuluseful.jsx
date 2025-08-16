

// import React from "react";


// export default function OverlappingCard() {
//   return (
//     <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
//       {/* Top purple background with gradient */}
//       <div
//         style={{
//           background: "linear-gradient(135deg, #4F1985 0%, #6A1B9A 100%)",
//           height: "790px",
//           width: "100%",
//           color: "white",
//           padding: "20px",
//           boxSizing: "border-box",
//           textAlign: "center",
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         {/* Decorative elements */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
          
//             backgroundSize: "20px 20px",
//             opacity: 0.5,
//           }}
//         />

//         <div
//           style={{
//             maxWidth: "900px",
//             margin: "0 auto",
//             position: "relative",
//             zIndex: 2,
//           }}
//         >
//           <h2
//             style={{
//               marginBottom: "20px",
//               fontSize: "2.5rem",
//               fontWeight: 400,
//               letterSpacing: "0.5px",
//               lineHeight: 1.2,
//             }}
//           >
//             Small Molecule Design
//           </h2>
//           <p
//             style={{
//               maxWidth: "700px",
//               margin: "0 auto",
//               fontSize: "1.2rem",
//               lineHeight: 1.6,
//               opacity: 0.9,
//               marginBottom: "30px",
//             }}
//           >
//             Media insights that drive your business forward. Request a demo to
//             learn more about our comprehensive analytics platform.
//           </p>
//           <button
//             style={{
//               backgroundColor: "white",
//               color: "#4F1985",
//               border: "none",
//               padding: "12px 30px",
//               borderRadius: "30px",
//               fontSize: "1rem",
//               fontWeight: 500,
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//             }}
//           >
//             Request Demo
//           </button>
//         </div>
//       </div>

//       {/* White bottom section */}
//       <div
//         style={{
//           backgroundColor: "#ffffff",
//           width: "100%",
//           paddingTop: "300px",
//           borderTopLeftRadius: "60px",
//           borderTopRightRadius: "60px",
//           marginTop: "-150px", // ensures overlap
//           position: "relative",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Centered splash image */}
//       <div
//         style={{
//           position: "absolute",
//           top: "350px", // controls where the image sits across purple & white
//           left: "50%",
//           transform: "translateX(-50%)",
//           zIndex: 2,
//           width: "100%",
//           maxWidth: "900px",
//           padding: "0 20px",
//           boxSizing: "border-box",
//         }}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//           alt="Splash"
//           style={{
//             width: "100%",
//             borderRadius: "16px",
        
//             transition:
//               "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// import React from "react";


// export default function OverlappingCard() {
//   return (
//     <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
//       {/* Top purple background with gradient */}
//       <div
//         style={{
//           background: "linear-gradient(135deg, #4F1985 0%, #6A1B9A 100%)",
//           height: "calc(100vh - 180px)",
//           minHeight: "600px",
//           maxHeight: "790px",
//           width: "100%",
//           color: "white",
//           padding: "20px",
//           boxSizing: "border-box",
//           textAlign: "center",
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         {/* Decorative elements */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundSize: "20px 20px",
//             opacity: 0.5,
//           }}
//         />

//         <div
//           style={{
//             maxWidth: "900px",
//             margin: "0 auto",
//             position: "relative",
//             zIndex: 2,
//             padding: "0 20px",
//           }}
//         >
//           <h2
//             style={{
//               marginBottom: "20px",
//               fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
//               fontWeight: 400,
//               letterSpacing: "0.5px",
//               lineHeight: 1.2,
//               paddingTop: "40px",
//             }}
//           >
//             Small Molecule Design
//           </h2>
//           <p
//             style={{
//               maxWidth: "700px",
//               margin: "0 auto",
//               fontSize: "clamp(1rem, 2vw, 1.2rem)",
//               lineHeight: 1.6,
//               opacity: 0.9,
//               marginBottom: "30px",
//             }}
//           >
//             Media insights that drive your business forward. Request a demo to
//             learn more about our comprehensive analytics platform.
//           </p>
//           <button
//             style={{
//               backgroundColor: "white",
//               color: "#4F1985",
//               border: "none",
//               padding: "12px 30px",
//               borderRadius: "30px",
//               fontSize: "1rem",
//               fontWeight: 500,
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               marginBottom: "20px",
//             }}
//           >
//             Request Demo
//           </button>
//         </div>
//       </div>

//       {/* White bottom section */}
//       <div
//         style={{
//           backgroundColor: "#ffffff",
//           width: "100%",
//           paddingTop: "min(300px, 30vw)",
//           borderTopLeftRadius: "60px",
//           borderTopRightRadius: "60px",
//           marginTop: "min(-150px, -15vw)",
//           position: "relative",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Centered splash image with responsive positioning */}
//       <div
//         style={{
//           position: "absolute",
//           top: "min(400px, 50vw)", // Increased from 350px to 400px and 40vw to 50vw
//           left: "50%",
//           transform: "translateX(-50%)",
//           zIndex: 2,
//           width: "90%",
//           maxWidth: "900px",
//           padding: "0 20px",
//           boxSizing: "border-box",
//           '@media (min-width: 1024px)': {
//             top: "350px" // Maintain original position on desktop
//           }
//         }}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//           alt="Splash"
//           style={{
//             width: "100%",
//             borderRadius: "16px",
//             boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
//             transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//           }}
//         />
//       </div>
//     </div>
//   );
// }


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
