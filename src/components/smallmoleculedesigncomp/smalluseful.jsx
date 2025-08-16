// export default function OverlappingCard() {
//   return (
//     <div style={{ position: "relative", width: "100%" }}>
//       {/* Top teal background */}
//       <div
//         style={{
//           backgroundColor: "#4F1985",
//           height: "500px",
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//           color: "white",
//           padding: "20px",
//           boxSizing: "border-box",
//           textAlign: "center",
//         }}
//       >
//         <div style={{ maxWidth: "900px", margin: "0 auto" }}>
//           <h2 style={{ marginBottom: "10px" }}>Media Intelligence</h2>
//           <p style={{ maxWidth: "700px", margin: "0 auto" }}>
//             Media insights that drive your business forward. Request a demo to learn more.
//           </p>
//         </div>
//       </div>

//       {/* White bottom section with rounded top */}
//       <div
//         style={{
//           backgroundColor: "#ffffff",
//           width: "100%",
//           paddingTop: "200px", // space for the image overlap
//           borderTopLeftRadius: "50px",
//           borderTopRightRadius: "50px",
//           marginTop: "-50px",
//         }}
//       ></div>

//       {/* Overlapping Image */}
//       <div
//         style={{
//           position: "absolute",
//           top: "280px", // moved lower so it doesn’t block the text
//           left: "50%",
//           transform: "translateX(-50%)",
//           zIndex: 10,
//         }}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//           alt="Media Intelligence"
//           style={{
//             width: "1000px",
//             maxWidth: "100%",
//             height: "auto",
//             borderRadius: "12px",
//             boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
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
//           height: "500px",
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
//             backgroundImage: "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
//             backgroundSize: "20px 20px",
//             opacity: 0.5,
//           }}
//         />
        
//         <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 2 }}>
//           <h2 
//             style={{ 
//               marginBottom: "20px", 
//               fontSize: "2.5rem", 
//               fontWeight: 400,
//               letterSpacing: "0.5px",
//               lineHeight: 1.2
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
//               marginBottom: "30px"
//             }}
//           >
//             Media insights that drive your business forward. Request a demo to learn more about our comprehensive analytics platform.
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

//       {/* White bottom section with soft rounded top */}
//       <div
//         style={{
//           backgroundColor: "#ffffff",
//           width: "100%",
//           paddingTop: "220px",
//           borderTopLeftRadius: "60px",
//           borderTopRightRadius: "60px",
//           marginTop: "-80px",
//           position: "relative",
//           zIndex: 2,
         
//         }}
//       >
       
//       </div>

//       {/* Overlapping Image with hover effect */}
//       <div
//         style={{
//           position: "absolute",
//           top: "300px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           zIndex: 3,
//           width: "100%",
//           maxWidth: "1000px",
//           padding: "0 20px",
//           boxSizing: "border-box"
//         }}
//       >
//         <div
//           style={{
//             borderRadius: "16px",
//             overflow: "hidden",
         
//             transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
           
//           }}
//         >
          
//         </div>
//       </div>
//     </div>
//   );
// }

//// // import React from "react";

// // import { Box, styled, useTheme, Typography } from "@mui/material";

// // // Your original unchanged LogoCarousel component
// // const LogoCarousel = () => {
// //   const logos = [
// //     "public/alogo-1.png",
// //     "public/alogo-2.png",
// //     "public/alogo-3.png",
// //     "public/alogo-4.png",
// //     "public/alogo-5.jpeg",
// //     "public/alogo-6.jpeg",
// //   ];

// //   const CarouselContainer = styled(Box)(({ theme }) => ({
// //     width: "100%",
// //     overflow: "hidden",
// //     position: "relative",
// //     padding: theme.spacing(3, 0),
// //     "&::before, &::after": {
// //       content: '""',
// //       position: "absolute",
// //       top: 0,
// //       bottom: 0,
// //       width: "100px",
// //       zIndex: 2,
// //       [theme.breakpoints.down("sm")]: {
// //         width: "50px",
// //       },
// //     },
// //     "&::before": {
// //       left: 0,
// //       background: "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
// //     },
// //     "&::after": {
// //       right: 0,
// //       background: "linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))",
// //     },
// //   }));

// //   const CarouselTrack = styled(Box)({
// //     display: "inline-flex",
// //     animation: "scroll 20s linear infinite",
// //     alignItems: "center",
// //     whiteSpace: "nowrap",
// //   });

// //   const LogoContainer = styled(Box)(({ theme }) => ({
// //     width: "180px",
// //     height: "100px",
// //     margin: theme.spacing(0, 2),
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     padding: theme.spacing(2),
// //     backgroundColor: "white",
// //     borderRadius: "8px",
// //     boxShadow: theme.shadows[2],
// //     transition: "all 0.3s ease",
    
// //     [theme.breakpoints.down("md")]: {
// //       width: "140px",
// //       height: "80px",
// //       margin: theme.spacing(0, 1.5),
// //     },
// //     [theme.breakpoints.down("sm")]: {
// //       width: "120px",
// //       height: "70px",
// //       margin: theme.spacing(0, 1),
// //     },
// //   }));

// //   const LogoImage = styled("img")({
// //     maxWidth: "80%",
// //     maxHeight: "80%",
// //     objectFit: "contain",
// //     filter: "grayscale(30%) contrast(0.9)",
// //     opacity: 0.8,
// //     transition: "all 0.3s ease",
    
// //   });

// //   return (
// //     <CarouselContainer>
// //       <CarouselTrack>
// //         {[...logos, ...logos].map((logo, index) => (
// //           <LogoContainer key={`logo-${index}`}>
// //             <LogoImage src={logo} alt={`partner-logo-${index}`} loading="lazy" />
// //           </LogoContainer>
// //         ))}
// //       </CarouselTrack>

// //       <style>
// //         {`
// //           @keyframes scroll {
// //             0% { transform: translateX(0); }
// //             100% { transform: translateX(-50%); }
// //           }
// //         `}
// //       </style>
// //     </CarouselContainer>
// //   );
// // };

// // const BrandShowcase = () => {
// //   const theme = useTheme();
  
// //   // Placeholder for your image - replace with your actual image path
// //   const contentImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

// //   return (
// //     <Box
// //       sx={{
// //         width: "100%",
// //         maxWidth: "1400px",
// //         mx: "auto",
// //         my: { xs: 4, md: 10 },
// //         px: { xs: 2, md: 4 },
// //       }}
// //     >
// //       {/* Gorgeous Outer Container */}
// //       <Box
// //         sx={{
// //           width: "100%",
// //           backgroundColor: "background.paper",
// //           borderRadius: "32px",
// //           boxShadow: `0 24px 80px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
// //           overflow: "hidden",
// //           border: `1px solid ${theme.palette.divider}`,
// //           position: "relative",
// //           "&::before": {
// //             content: '""',
// //             position: "absolute",
// //             top: 0,
// //             left: 0,
// //             right: 0,
// //             height: "6px",
// //             background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
// //             zIndex: 1,
// //           },
// //         }}
// //       >
// //         {/* Logo Carousel Section (unchanged) */}
// //         <Box
// //           sx={{
// //             borderBottom: `1px solid ${theme.palette.divider}`,
// //             background: theme.palette.mode === 'dark' 
// //               ? 'rgba(255,255,255,0.03)' 
// //               : 'rgba(0,0,0,0.02)',
// //             backdropFilter: "blur(4px)",
// //           }}
// //         >
// //           <LogoCarousel />
// //         </Box>

// //         {/* Gorgeous Content Section with Image */}
// //         <Box
// //           sx={{
// //             display: "flex",
// //             flexDirection: { xs: "column", lg: "row" },
// //             alignItems: "center",
// //             minHeight: "500px",
// //           }}
// //         >
// //           {/* Image Container (Left Side) */}
// //           <Box
// //             sx={{
// //               width: { xs: "100%", lg: "50%" },
// //               height: { xs: "300px", lg: "auto" },
// //               position: "relative",
// //               overflow: "hidden",
// //               "&::after": {
// //                 content: '""',
// //                 position: "absolute",
// //                 bottom: 0,
// //                 left: 0,
// //                 right: 0,
// //                 height: "100%",
// //                 background: `linear-gradient(to top, ${theme.palette.background.paper} 0%, transparent 30%)`,
// //                 zIndex: 1,
// //                 [theme.breakpoints.up("lg")]: {
// //                   display: "none",
// //                 },
// //               },
// //             }}
// //           >
// //             <Box
// //               component="img"
// //               src={contentImage}
// //               alt="Digital media landscape"
// //               sx={{
// //                 width: "100%",
// //                 height: "100%",
// //                 objectFit: "cover",
// //                 objectPosition: "center",
// //                 filter: theme.palette.mode === 'dark' ? "brightness(0.8)" : "none",
// //               }}
// //             />
// //             <Box
// //               sx={{
// //                 position: "absolute",
// //                 top: 0,
// //                 left: 0,
// //                 width: "100%",
// //                 height: "100%",
// //                 background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
// //                 mixBlendMode: "overlay",
// //                 zIndex: 1,
// //               }}
// //             />
// //           </Box>

// //           {/* Content Container (Right Side) */}
// //           <Box
// //             sx={{
// //               width: { xs: "100%", lg: "50%" },
// //               p: { xs: 4, md: 6, lg: 8 },
// //               display: "flex",
// //               flexDirection: "column",
// //               justifyContent: "center",
// //               position: "relative",
             
// //             }}
// //           >
// //             <Typography
// //               variant="h2"
// //               sx={{
// //                 fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
// //                 fontWeight: 700,
// //                 lineHeight: 1.2,
// //                 mb: 3,
// //                 color: "text.primary",
// //                 position: "relative",
// //               }}
// //             >
// //               Everything that happens in the real world leaves a digital trace online.
// //             </Typography>
// //             <Typography
// //               variant="body1"
// //               sx={{
// //                 fontSize: { xs: "1rem", md: "1.1rem" },
// //                 lineHeight: 1.8,
// //                 color: "text.secondary",
// //                 mb: 4,
// //               }}
// //             >
// //               Which means today it's essential for your business to create a holistic
// //               view of the media landscape, not only to get an accurate pulse of your
// //               brand health, but also to seek out growth opportunities. Media
// //               intelligence illuminates hidden insights and can be your guide on
// //               everything from your SEO profile and competitive intel to managing crises
// //               and measuring brand equity.
// //             </Typography>
// //             <Box
// //               sx={{
// //                 display: "inline-flex",
// //                 alignItems: "center",
// //                 gap: 2,
// //                 mt: 2,
// //               }}
// //             >
// //               <Box
// //                 sx={{
// //                   width: "40px",
// //                   height: "2px",
// //                   background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
// //                 }}
// //               />
// //               <Typography
// //                 variant="caption"
// //                 sx={{
// //                   textTransform: "uppercase",
// //                   letterSpacing: "1px",
// //                   fontWeight: 600,
// //                   color: "text.secondary",
// //                 }}
// //               >
// //                 Digital Intelligence
// //               </Typography>
// //             </Box>
// //           </Box>
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default BrandShowcase;

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

//   // Styled components for better organization
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
//     '&:hover': {
//       filter: "grayscale(0%)",
//       transform: "scale(1.05)"
//     }
//   });

//   return (
//     <CarouselContainer>
      
//       <CarouselTrack >
//         {logos.map((logo, index) => (
//           <LogoContainer key={index}>
//             <LogoImage src={logo} alt={`logo-${index}`} />
//           </LogoContainer>
//         ))}
//         {/* Duplicate for seamless looping */}
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
  
//   // Placeholder for your image - replace with your actual image path
//   const contentImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: "1400px",
//         mx: "auto",
//         my: { xs: 4, md: 10 },
//         px: { xs: 2, md: 4 },
//       }}
//     >
//       {/* Gorgeous Outer Container */}
//       <Box
//         sx={{
//           width: "100%",
//           backgroundColor: "background.paper",
//           borderRadius: "32px",
//           boxShadow: `0 24px 80px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
//           overflow: "hidden",
//           border: `1px solid ${theme.palette.divider}`,
//           position: "relative",
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             height: "6px",
//             background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//             zIndex: 1,
//           },
//         }}
//       >
//         {/* Your exact Logo Carousel Section */}
//         <Box
//           sx={{
//             borderBottom: `1px solid ${theme.palette.divider}`,
//             background: theme.palette.mode === 'dark' 
//               ? 'rgba(255,255,255,0.03)' 
//               : 'rgba(0,0,0,0.02)',
//             backdropFilter: "blur(4px)",
//           }}
//         >
//           <LogoCarousel />
//         </Box>

//         {/* Gorgeous Content Section with Image */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", lg: "row" },
//             alignItems: "center",
//             minHeight: "500px",
//           }}
//         >
//           {/* Image Container (Left Side) */}
//           <Box
//             sx={{
//               width: { xs: "100%", lg: "50%" },
//               height: { xs: "300px", lg: "auto" },
//               position: "relative",
//               overflow: "hidden",
//               "&::after": {
//                 content: '""',
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 right: 0,
//                 height: "100%",
//                 background: `linear-gradient(to top, ${theme.palette.background.paper} 0%, transparent 30%)`,
//                 zIndex: 1,
//                 [theme.breakpoints.up("lg")]: {
//                   display: "none",
//                 },
//               },
//             }}
//           >
//             <Box
//               component="img"
//               src={contentImage}
//               alt="Digital media landscape"
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 objectPosition: "center",
//                 filter: theme.palette.mode === 'dark' ? "brightness(0.8)" : "none",
//               }}
//             />
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
//                 mixBlendMode: "overlay",
//                 zIndex: 1,
//               }}
//             />
//           </Box>

//           {/* Content Container (Right Side) */}
//           <Box
//             sx={{
//               width: { xs: "100%", lg: "50%" },
//               p: { xs: 4, md: 6, lg: 8 },
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               position: "relative",
//               "&::before": {
//                 content: '""',
//                 position: "absolute",
//                 top: 40,
//                 left: { xs: 40, lg: -30 },
//                 width: "60px",
//                 height: "4px",
//                 background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                 borderRadius: "2px",
//               },
//             }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
//                 fontWeight: 700,
//                 lineHeight: 1.2,
//                 mb: 3,
//                 color: "text.primary",
//                 position: "relative",
//               }}
//             >
//               Everything that happens in the real world leaves a digital trace online.
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 fontSize: { xs: "1rem", md: "1.1rem" },
//                 lineHeight: 1.8,
//                 color: "text.secondary",
//                 mb: 4,
//               }}
//             >
//               Which means today it's essential for your business to create a holistic
//               view of the media landscape, not only to get an accurate pulse of your
//               brand health, but also to seek out growth opportunities. Media
//               intelligence illuminates hidden insights and can be your guide on
//               everything from your SEO profile and competitive intel to managing crises
//               and measuring brand equity.
//             </Typography>
//             <Box
//               sx={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: 2,
//                 mt: 2,
//               }}
//             >
//               <Box
//                 sx={{
//                   width: "40px",
//                   height: "2px",
//                   background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                 }}
//               />
//               <Typography
//                 variant="caption"
//                 sx={{
//                   textTransform: "uppercase",
//                   letterSpacing: "1px",
//                   fontWeight: 600,
//                   color: "text.secondary",
//                 }}
//               >
//                 Digital Intelligence
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default BrandShowcase;

//// // import React from "react";

// // import { Box, styled, useTheme, Typography } from "@mui/material";

// // // Your original unchanged LogoCarousel component
// // const LogoCarousel = () => {
// //   const logos = [
// //     "public/alogo-1.png",
// //     "public/alogo-2.png",
// //     "public/alogo-3.png",
// //     "public/alogo-4.png",
// //     "public/alogo-5.jpeg",
// //     "public/alogo-6.jpeg",
// //   ];

// //   const CarouselContainer = styled(Box)(({ theme }) => ({
// //     width: "100%",
// //     overflow: "hidden",
// //     position: "relative",
// //     padding: theme.spacing(3, 0),
// //     "&::before, &::after": {
// //       content: '""',
// //       position: "absolute",
// //       top: 0,
// //       bottom: 0,
// //       width: "100px",
// //       zIndex: 2,
// //       [theme.breakpoints.down("sm")]: {
// //         width: "50px",
// //       },
// //     },
// //     "&::before": {
// //       left: 0,
// //       background: "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
// //     },
// //     "&::after": {
// //       right: 0,
// //       background: "linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))",
// //     },
// //   }));

// //   const CarouselTrack = styled(Box)({
// //     display: "inline-flex",
// //     animation: "scroll 20s linear infinite",
// //     alignItems: "center",
// //     whiteSpace: "nowrap",
// //   });

// //   const LogoContainer = styled(Box)(({ theme }) => ({
// //     width: "180px",
// //     height: "100px",
// //     margin: theme.spacing(0, 2),
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     padding: theme.spacing(2),
// //     backgroundColor: "white",
// //     borderRadius: "8px",
// //     boxShadow: theme.shadows[2],
// //     transition: "all 0.3s ease",
    
// //     [theme.breakpoints.down("md")]: {
// //       width: "140px",
// //       height: "80px",
// //       margin: theme.spacing(0, 1.5),
// //     },
// //     [theme.breakpoints.down("sm")]: {
// //       width: "120px",
// //       height: "70px",
// //       margin: theme.spacing(0, 1),
// //     },
// //   }));

// //   const LogoImage = styled("img")({
// //     maxWidth: "80%",
// //     maxHeight: "80%",
// //     objectFit: "contain",
// //     filter: "grayscale(30%) contrast(0.9)",
// //     opacity: 0.8,
// //     transition: "all 0.3s ease",
    
// //   });

// //   return (
// //     <CarouselContainer>
// //       <CarouselTrack>
// //         {[...logos, ...logos].map((logo, index) => (
// //           <LogoContainer key={`logo-${index}`}>
// //             <LogoImage src={logo} alt={`partner-logo-${index}`} loading="lazy" />
// //           </LogoContainer>
// //         ))}
// //       </CarouselTrack>

// //       <style>
// //         {`
// //           @keyframes scroll {
// //             0% { transform: translateX(0); }
// //             100% { transform: translateX(-50%); }
// //           }
// //         `}
// //       </style>
// //     </CarouselContainer>
// //   );
// // };

// // const BrandShowcase = () => {
// //   const theme = useTheme();
  
// //   // Placeholder for your image - replace with your actual image path
// //   const contentImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

// //   return (
// //     <Box
// //       sx={{
// //         width: "100%",
// //         maxWidth: "1400px",
// //         mx: "auto",
// //         my: { xs: 4, md: 10 },
// //         px: { xs: 2, md: 4 },
// //       }}
// //     >
// //       {/* Gorgeous Outer Container */}
// //       <Box
// //         sx={{
// //           width: "100%",
// //           backgroundColor: "background.paper",
// //           borderRadius: "32px",
// //           boxShadow: `0 24px 80px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
// //           overflow: "hidden",
// //           border: `1px solid ${theme.palette.divider}`,
// //           position: "relative",
// //           "&::before": {
// //             content: '""',
// //             position: "absolute",
// //             top: 0,
// //             left: 0,
// //             right: 0,
// //             height: "6px",
// //             background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
// //             zIndex: 1,
// //           },
// //         }}
// //       >
// //         {/* Logo Carousel Section (unchanged) */}
// //         <Box
// //           sx={{
// //             borderBottom: `1px solid ${theme.palette.divider}`,
// //             background: theme.palette.mode === 'dark' 
// //               ? 'rgba(255,255,255,0.03)' 
// //               : 'rgba(0,0,0,0.02)',
// //             backdropFilter: "blur(4px)",
// //           }}
// //         >
// //           <LogoCarousel />
// //         </Box>

// //         {/* Gorgeous Content Section with Image */}
// //         <Box
// //           sx={{
// //             display: "flex",
// //             flexDirection: { xs: "column", lg: "row" },
// //             alignItems: "center",
// //             minHeight: "500px",
// //           }}
// //         >
// //           {/* Image Container (Left Side) */}
// //           <Box
// //             sx={{
// //               width: { xs: "100%", lg: "50%" },
// //               height: { xs: "300px", lg: "auto" },
// //               position: "relative",
// //               overflow: "hidden",
// //               "&::after": {
// //                 content: '""',
// //                 position: "absolute",
// //                 bottom: 0,
// //                 left: 0,
// //                 right: 0,
// //                 height: "100%",
// //                 background: `linear-gradient(to top, ${theme.palette.background.paper} 0%, transparent 30%)`,
// //                 zIndex: 1,
// //                 [theme.breakpoints.up("lg")]: {
// //                   display: "none",
// //                 },
// //               },
// //             }}
// //           >
// //             <Box
// //               component="img"
// //               src={contentImage}
// //               alt="Digital media landscape"
// //               sx={{
// //                 width: "100%",
// //                 height: "100%",
// //                 objectFit: "cover",
// //                 objectPosition: "center",
// //                 filter: theme.palette.mode === 'dark' ? "brightness(0.8)" : "none",
// //               }}
// //             />
// //             <Box
// //               sx={{
// //                 position: "absolute",
// //                 top: 0,
// //                 left: 0,
// //                 width: "100%",
// //                 height: "100%",
// //                 background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
// //                 mixBlendMode: "overlay",
// //                 zIndex: 1,
// //               }}
// //             />
// //           </Box>

// //           {/* Content Container (Right Side) */}
// //           <Box
// //             sx={{
// //               width: { xs: "100%", lg: "50%" },
// //               p: { xs: 4, md: 6, lg: 8 },
// //               display: "flex",
// //               flexDirection: "column",
// //               justifyContent: "center",
// //               position: "relative",
             
// //             }}
// //           >
// //             <Typography
// //               variant="h2"
// //               sx={{
// //                 fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
// //                 fontWeight: 700,
// //                 lineHeight: 1.2,
// //                 mb: 3,
// //                 color: "text.primary",
// //                 position: "relative",
// //               }}
// //             >
// //               Everything that happens in the real world leaves a digital trace online.
// //             </Typography>
// //             <Typography
// //               variant="body1"
// //               sx={{
// //                 fontSize: { xs: "1rem", md: "1.1rem" },
// //                 lineHeight: 1.8,
// //                 color: "text.secondary",
// //                 mb: 4,
// //               }}
// //             >
// //               Which means today it's essential for your business to create a holistic
// //               view of the media landscape, not only to get an accurate pulse of your
// //               brand health, but also to seek out growth opportunities. Media
// //               intelligence illuminates hidden insights and can be your guide on
// //               everything from your SEO profile and competitive intel to managing crises
// //               and measuring brand equity.
// //             </Typography>
// //             <Box
// //               sx={{
// //                 display: "inline-flex",
// //                 alignItems: "center",
// //                 gap: 2,
// //                 mt: 2,
// //               }}
// //             >
// //               <Box
// //                 sx={{
// //                   width: "40px",
// //                   height: "2px",
// //                   background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
// //                 }}
// //               />
// //               <Typography
// //                 variant="caption"
// //                 sx={{
// //                   textTransform: "uppercase",
// //                   letterSpacing: "1px",
// //                   fontWeight: 600,
// //                   color: "text.secondary",
// //                 }}
// //               >
// //                 Digital Intelligence
// //               </Typography>
// //             </Box>
// //           </Box>
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default BrandShowcase;

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

//   // Styled components for better organization
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
//     '&:hover': {
//       filter: "grayscale(0%)",
//       transform: "scale(1.05)"
//     }
//   });

//   return (
//     <CarouselContainer>
      
//       <CarouselTrack >
//         {logos.map((logo, index) => (
//           <LogoContainer key={index}>
//             <LogoImage src={logo} alt={`logo-${index}`} />
//           </LogoContainer>
//         ))}
//         {/* Duplicate for seamless looping */}
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
  
//   // Placeholder for your image - replace with your actual image path
//   const contentImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: "1400px",
//         mx: "auto",
//         my: { xs: 4, md: 10 },
//         px: { xs: 2, md: 4 },
//       }}
//     >
//       {/* Gorgeous Outer Container */}
//       <Box
//         sx={{
//           width: "100%",
//           backgroundColor: "background.paper",
//           borderRadius: "32px",
//           boxShadow: `0 24px 80px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
//           overflow: "hidden",
//           border: `1px solid ${theme.palette.divider}`,
//           position: "relative",
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             height: "6px",
//             background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//             zIndex: 1,
//           },
//         }}
//       >
//         {/* Your exact Logo Carousel Section */}
//         <Box
//           sx={{
//             borderBottom: `1px solid ${theme.palette.divider}`,
//             background: theme.palette.mode === 'dark' 
//               ? 'rgba(255,255,255,0.03)' 
//               : 'rgba(0,0,0,0.02)',
//             backdropFilter: "blur(4px)",
//           }}
//         >
//           <LogoCarousel />
//         </Box>

//         {/* Gorgeous Content Section with Image */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", lg: "row" },
//             alignItems: "center",
//             minHeight: "500px",
//           }}
//         >
//           {/* Image Container (Left Side) */}
//           <Box
//             sx={{
//               width: { xs: "100%", lg: "50%" },
//               height: { xs: "300px", lg: "auto" },
//               position: "relative",
//               overflow: "hidden",
//               "&::after": {
//                 content: '""',
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 right: 0,
//                 height: "100%",
//                 background: `linear-gradient(to top, ${theme.palette.background.paper} 0%, transparent 30%)`,
//                 zIndex: 1,
//                 [theme.breakpoints.up("lg")]: {
//                   display: "none",
//                 },
//               },
//             }}
//           >
//             <Box
//               component="img"
//               src={contentImage}
//               alt="Digital media landscape"
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 objectPosition: "center",
//                 filter: theme.palette.mode === 'dark' ? "brightness(0.8)" : "none",
//               }}
//             />
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
//                 mixBlendMode: "overlay",
//                 zIndex: 1,
//               }}
//             />
//           </Box>

//           {/* Content Container (Right Side) */}
//           <Box
//             sx={{
//               width: { xs: "100%", lg: "50%" },
//               p: { xs: 4, md: 6, lg: 8 },
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               position: "relative",
//               "&::before": {
//                 content: '""',
//                 position: "absolute",
//                 top: 40,
//                 left: { xs: 40, lg: -30 },
//                 width: "60px",
//                 height: "4px",
//                 background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                 borderRadius: "2px",
//               },
//             }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
//                 fontWeight: 700,
//                 lineHeight: 1.2,
//                 mb: 3,
//                 color: "text.primary",
//                 position: "relative",
//               }}
//             >
//               Everything that happens in the real world leaves a digital trace online.
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 fontSize: { xs: "1rem", md: "1.1rem" },
//                 lineHeight: 1.8,
//                 color: "text.secondary",
//                 mb: 4,
//               }}
//             >
//               Which means today it's essential for your business to create a holistic
//               view of the media landscape, not only to get an accurate pulse of your
//               brand health, but also to seek out growth opportunities. Media
//               intelligence illuminates hidden insights and can be your guide on
//               everything from your SEO profile and competitive intel to managing crises
//               and measuring brand equity.
//             </Typography>
//             <Box
//               sx={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: 2,
//                 mt: 2,
//               }}
//             >
//               <Box
//                 sx={{
//                   width: "40px",
//                   height: "2px",
//                   background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                 }}
//               />
//               <Typography
//                 variant="caption"
//                 sx={{
//                   textTransform: "uppercase",
//                   letterSpacing: "1px",
//                   fontWeight: 600,
//                   color: "text.secondary",
//                 }}
//               >
//                 Digital Intelligence
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default BrandShowcase;

//// import React from 'react';

// export default function InsightCards() {
//   const cards = [
//     {
//       title: "Activating the power of data",
//       description:
//         "Designed to become a nexus for Drug Discovery by creating potential tools and ecosystems.",
//       gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(34, 211, 238, 0.1) 100%)",
//       accent: "rgba(34, 211, 238, 1)",
//       shadow: "rgba(34, 211, 238, 0.3)",
//       icon: "📊"
//     },
//     {
//       title: "Making insights accessible",
//       description:
//         "Research accelerated in all stages of Drug Discovery using the latest technology and data-driven approaches.",
//       gradient: "linear-gradient(135deg, rgba(192, 132, 252, 0.15) 0%, rgba(216, 180, 254, 0.1) 100%)",
//       accent: "rgba(192, 132, 252, 1)",
//       shadow: "rgba(192, 132, 252, 0.3)",
//       icon: "🔍"
//     },
//     {
//       title: "Drug Discovery",
//       description:
//         "Be it small molecules, peptides, or proteins Boltzmann has solutions for all kinds of drug discovery problems.",
//       gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(253, 186, 116, 0.1) 100%)",
//       accent: "rgba(251, 146, 60, 1)",
//       shadow: "rgba(251, 146, 60, 0.3)",
//       icon: "🚀"
//     }
//   ];

//   return (
//     <div
//       style={{
//         padding: "120px 40px",
//         background: "radial-gradient(circle at 10% 20%, rgba(248, 250, 252, 0.9) 0%, rgba(249, 250, 251, 0.9) 90%)",
//         color: "#111827",
//         fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//         position: "relative",
//         overflow: "hidden"
//       }}
//     >
//       {/* Decorative elements */}
//       {/* <div style={{
//         position: "absolute",
//         top: 0,
//         right: 0,
//         width: "300px",
//         height: "300px",
//         background: "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)",
//         transform: "translate(50%, -50%)"
//       }} /> */}
      
//       <div style={{
//         position: "absolute",
//         bottom: 0,
//         left: 0,
//         width: "400px",
//         height: "400px",
//         background: "radial-gradient(circle, rgba(192, 132, 252, 0.06) 0%, transparent 70%)",
//         transform: "translate(-50%, 50%)"
//       }} />

//       <div className="container" style={{
//         maxWidth: "1280px",
//         margin: "0 auto",
//         position: "relative",
//         zIndex: 2
//       }}>
//         <h2
//           style={{
//             fontFamily: "'Inter', sans-serif",
//             fontSize: "48px",
//             fontWeight: "800",
//             textAlign: "center",
//             marginBottom: "80px",
//             lineHeight: "1.2",
//             color: "#111827",
//             letterSpacing: "-1px",
//             position: "relative",
//             display: "inline-block",
//             left: "50%",
//             transform: "translateX(-50%)"
//           }}
//         >
//           We empower businesses to be insight-driven
//           <span style={{
//             position: "absolute",
//             bottom: "-12px",
//             left: "0",
//             width: "100%",
//             height: "4px",
//             background: "linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8))",
//             borderRadius: "2px"
//           }} />
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(3, 1fr)",
//             gap: "32px",
//             alignItems: "stretch"
//           }}
//         >
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: "#fff",
//                 padding: "40px 32px",
//                 borderRadius: "16px",
//                 boxShadow: `0px 0px 15px  ${card.shadow}, 0px 0px 15px  ${card.shadow}`,
//                 border: "1px solid rgba(229, 231, 235, 0.5)",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "flex-start",
//                 textAlign: "left",
//                 // transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                 position: "relative",
//                 overflow: "hidden",
//                 zIndex: 1,
//                 background: card.gradient
//               }}
              
//             >
//               <div style={{
//                 fontSize: "42px",
//                 marginBottom: "24px",
//                 opacity: 0.9
//               }}>
//                 {card.icon}
//               </div>
              
//               <h3
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                   fontSize: "24px",
//                   fontWeight: "700",
//                   marginBottom: "20px",
//                   lineHeight: "1.4",
//                   color: "#111827",
//                   position: "relative",
//                   paddingBottom: "16px"
//                 }}
//               >
//                 {card.title}
//                 <span style={{
//                   position: "absolute",
//                   bottom: "0",
//                   left: "0",
//                   width: "48px",
//                   height: "3px",
//                   background: card.accent,
//                   borderRadius: "2px"
//                 }} />
//               </h3>
              
//               <p
//                 style={{
//                   fontSize: "16px",
//                   color: "#4b5563",
//                   lineHeight: "1.7",
//                   flexGrow: 1,
//                   marginBottom: "24px"
//                 }}
//               >
//                 {card.description}
//               </p>
              
//               <div style={{
//                 position: "absolute",
//                 top: "0",
//                 right: "0",
//                 width: "0",
//                 height: "0",
//                 borderTop: "60px solid " + card.accent + "20",
//                 borderLeft: "60px solid transparent",
//                 // transition: "all 0.3s ease"
//               }} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useRef } from 'react';

// export default function InsightCards() {
//  const cards = [
//     {
//       title: "Unified Platform",
//       description:
//         "All your workflows. Fully automated. Move faster and smarter—from target hypothesis to synthesis-ready candidates.",
//       gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(34, 211, 238, 0.1) 100%)",
//       accent: "rgba(34, 211, 238, 1)",
//       shadow: "rgba(34, 211, 238, 0.3)",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
//           <line x1="8" y1="21" x2="16" y2="21"></line>
//           <line x1="12" y1="17" x2="12" y2="21"></line>
//           <path d="M7 11h10"></path>
//         </svg>
//       )
//     },
//     {
//       title: "AI-Driven Automation",
//       description:
//         "Automate molecular design, property prediction, retrosynthesis, and lab execution",
//       gradient: "linear-gradient(135deg, rgba(192, 132, 252, 0.15) 0%, rgba(216, 180, 254, 0.1) 100%)",
//       accent: "rgba(192, 132, 252, 1)",
//       shadow: "rgba(192, 132, 252, 0.3)",
//      icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
//           <path d="M17.8 19.2a9 9 0 0 0 1.6-4.7 1 1 0 0 0-1-1h-3.2a4 4 0 0 1-.8-2.3V8.3a1 1 0 0 0-1-1H9.2a1 1 0 0 0-1 1v2.5a4 4 0 0 1-.8 2.3H4.2a1 1 0 0 0-1 1 9 9 0 0 0 1.6 4.7"></path>
//           <path d="M7.5 14.6a5 5 0 0 1 9 0"></path>
//         </svg>
//       )
//     },
//     {
//       title: "Seamless Integration",
//       description:
//         "LIMS-compatible, CLI/API customizable. Designed for speed, scale, and scientific impact.",
//       gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(253, 186, 116, 0.1) 100%)",
//       accent: "rgba(251, 146, 60, 1)",
//       shadow: "rgba(251, 146, 60, 0.3)",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M12 2v4"></path>
//           <path d="m16.24 7.76 2.83-2.83"></path>
//           <path d="M18 12h4"></path>
//           <path d="m16.24 16.24 2.83 2.83"></path>
//           <path d="M12 18v4"></path>
//           <path d="m7.76 16.24-2.83 2.83"></path>
//           <path d="M6 12H2"></path>
//           <path d="m7.76 7.76-2.83-2.83"></path>
//           <circle cx="12" cy="12" r="3"></circle>
//         </svg>
//       )
//     }
//   ];
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = React.useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.1
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       style={{
//         padding: "120px 40px",
//         color: "#111827",
//         fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//         position: "relative",
//         overflow: "hidden",
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
//       }}
//     >
//       {/* ... (keep your existing decorative elements) */}

//       <div className="container" style={{
//         maxWidth: "1280px",
//         margin: "0 auto",
//         position: "relative",
//         zIndex: 2
//       }}>
//         <h2
//           style={{
//             fontFamily: "'Inter', sans-serif",
//             fontSize: "48px",
//             fontWeight: "200",
//             textAlign: "center",
//             marginBottom: "80px",
//             lineHeight: "1.2",
//             color: "#111827",
//             letterSpacing: "-1px",
//             position: "relative",
//             display: "inline-block",
//             left: "50%",
//             transform: "translateX(-50%)",
//             opacity: isVisible ? 1 : 0,
//             transition: 'opacity 0.6s ease-out 0.2s'
//           }}
//         >
//           We empower businesses to be insight-driven
//           <span style={{
//             position: "absolute",
//             bottom: "-12px",
//             left: "0",
//             width: "100%",
//             height: "4px",
//             background: "linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8))",
//             borderRadius: "2px"
//           }} />
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(3, 1fr)",
//             gap: "32px",
//             alignItems: "stretch"
//           }}
//         >
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: "#fff",
//                 padding: "40px 32px",
//                 borderRadius: "16px",
//                 boxShadow: `0px 0px 15px  ${card.shadow}, 0px 0px 15px  ${card.shadow}`,
//                 border: "1px solid rgba(229, 231, 235, 0.5)",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "flex-start",
//                 textAlign: "left",
//                 position: "relative",
//                 overflow: "hidden",
//                 zIndex: 1,
//                 background: card.gradient,
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                 transition: `opacity 0.6s ease-out ${0.3 + index * 0.1}s, transform 0.6s ease-out ${0.3 + index * 0.1}s`
//               }}
//             >
//                    <div style={{
//                 fontSize: "42px",
//                 marginBottom: "24px",
//                 opacity: 0.9
//               }}>
//                 {card.icon}
//               </div>
              
//               <h3
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                   fontSize: "24px",
//                   fontWeight: "500",
//                   marginBottom: "20px",
//                   lineHeight: "1.4",
//                   color: "#111827",
//                   position: "relative",
//                   paddingBottom: "16px"
//                 }}
//               >
//                 {card.title}
//                 <span style={{
//                   position: "absolute",
//                   bottom: "0",
//                   left: "0",
//                   width: "48px",
//                   height: "3px",
//                   background: card.accent,
//                   borderRadius: "2px"
//                 }} />
//               </h3>
              
//               <p
//                 style={{
//                   fontSize: "16px",
//                   color: "#4b5563",
//                   lineHeight: "1.7",
//                   flexGrow: 1,
//                   marginBottom: "24px"
//                 }}
//               >
//                 {card.description}
//               </p>
              
//               <div style={{
//                 position: "absolute",
//                 top: "0",
//                 right: "0",
//                 width: "0",
//                 height: "0",
//                 borderTop: "60px solid " + card.accent + "20",
//                 borderLeft: "60px solid transparent",
//                 // transition: "all 0.3s ease"
//               }} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useRef } from 'react';

// export default function InsightCards() {
//   const cards = [
//     {
//       title: "Unified Platform",
//       description:
//         "All your workflows. Fully automated. Move faster and smarter—from target hypothesis to synthesis-ready candidates.",
//       gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(34, 211, 238, 0.1) 100%)",
//       accent: "rgba(34, 211, 238, 1)",
//       shadow: "rgba(34, 211, 238, 0.3)",
//       iconType: "monitor"
//     },
//     {
//       title: "AI-Driven Automation",
//       description:
//         "Automate molecular design, property prediction, retrosynthesis, and lab execution",
//       gradient: "linear-gradient(135deg, rgba(192, 132, 252, 0.15) 0%, rgba(216, 180, 254, 0.1) 100%)",
//       accent: "rgba(192, 132, 252, 1)",
//       shadow: "rgba(192, 132, 252, 0.3)",
//       iconType: "network"
//     },
//     {
//       title: "Seamless Integration",
//       description:
//         "LIMS-compatible, CLI/API customizable. Designed for speed, scale, and scientific impact.",
//       gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(253, 186, 116, 0.1) 100%)",
//       accent: "rgba(251, 146, 60, 1)",
//       shadow: "rgba(251, 146, 60, 0.3)",
//       iconType: "integration"
//     }
//   ];

//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = React.useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.1
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const renderIcon = (type, color) => {
//     switch (type) {
//       case "monitor":
//         return (
//           <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
//             <line x1="8" y1="21" x2="16" y2="21"></line>
//             <line x1="12" y1="17" x2="12" y2="21"></line>
//             <path d="M7 11h10"></path>
//           </svg>
//         );
//       case "network":
//         return (
//           <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
//             <path d="M17.8 19.2a9 9 0 0 0 1.6-4.7 1 1 0 0 0-1-1h-3.2a4 4 0 0 1-.8-2.3V8.3a1 1 0 0 0-1-1H9.2a1 1 0 0 0-1 1v2.5a4 4 0 0 1-.8 2.3H4.2a1 1 0 0 0-1 1 9 9 0 0 0 1.6 4.7"></path>
//             <path d="M7.5 14.6a5 5 0 0 1 9 0"></path>
//           </svg>
//         );
//       case "integration":
//         return (
//           <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M12 2v4"></path>
//             <path d="m16.24 7.76 2.83-2.83"></path>
//             <path d="M18 12h4"></path>
//             <path d="m16.24 16.24 2.83 2.83"></path>
//             <path d="M12 18v4"></path>
//             <path d="m7.76 16.24-2.83 2.83"></path>
//             <path d="M6 12H2"></path>
//             <path d="m7.76 7.76-2.83-2.83"></path>
//             <circle cx="12" cy="12" r="3"></circle>
//           </svg>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div
//       ref={sectionRef}
//       style={{
//         padding: "120px 40px",
//         color: "#111827",
//         fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//         position: "relative",
//         overflow: "hidden",
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
//       }}
//     >
//       <div className="container" style={{
//         maxWidth: "1280px",
//         margin: "0 auto",
//         position: "relative",
//         zIndex: 2
//       }}>
//         <h2
//           style={{
//             fontFamily: "'Inter', sans-serif",
//             fontSize: "48px",
//             fontWeight: "200",
//             textAlign: "center",
//             marginBottom: "80px",
//             lineHeight: "1.2",
//             color: "#111827",
//             letterSpacing: "-1px",
//             position: "relative",
//             opacity: isVisible ? 1 : 0,
//             transition: 'opacity 0.6s ease-out 0.2s'
//           }}
//         >
//           We empower businesses to be insight-driven
//           <span style={{
//             position: "absolute",
//             bottom: "-12px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "120px",
//             height: "4px",
//             background: "linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8))",
//             borderRadius: "2px"
//           }} />
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "32px",
//             alignItems: "stretch"
//           }}
//         >
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: "#fff",
//                 padding: "40px 32px",
//                 borderRadius: "16px",
//                 boxShadow: `0px 0px 15px  ${card.shadow}, 0px 0px 15px  ${card.shadow}`,
//                 border: "1px solid rgba(229, 231, 235, 0.5)",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "flex-start",
//                 textAlign: "left",
//                 position: "relative",
//                 overflow: "hidden",
//                 zIndex: 1,
//                 background: card.gradient,
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                 transition: `opacity 0.6s ease-out ${0.3 + index * 0.1}s, transform 0.6s ease-out ${0.3 + index * 0.1}s`
//               }}
//             >
//               <div style={{
//                 fontSize: "42px",
//                 marginBottom: "24px",
//                 opacity: 0.9
//               }}>
//                 {renderIcon(card.iconType, card.accent)}
//               </div>

//               <h3
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                   fontSize: "24px",
//                   fontWeight: "500",
//                   marginBottom: "20px",
//                   lineHeight: "1.4",
//                   color: "#111827",
//                   position: "relative",
//                   paddingBottom: "16px"
//                 }}
//               >
//                 {card.title}
//                 <span style={{
//                   position: "absolute",
//                   bottom: "0",
//                   left: "0",
//                   width: "48px",
//                   height: "3px",
//                   background: card.accent,
//                   borderRadius: "2px"
//                 }} />
//               </h3>

//               <p
//                 style={{
//                   fontSize: "16px",
//                   color: "#4b5563",
//                   lineHeight: "1.7",
//                   flexGrow: 1,
//                   marginBottom: "24px"
//                 }}
//               >
//                 {card.description}
//               </p>

//               <div style={{
//                 position: "absolute",
//                 top: "0",
//                 right: "0",
//                 width: "0",
//                 height: "0",
//                 borderTop: "60px solid " + card.accent + "20",
//                 borderLeft: "60px solid transparent"
//               }} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
//// import React, { useEffect, useRef } from 'react';

// export default function InsightCards() {
//   const cards = [
//     {
//       title: "Design Breakthrough Molecules with Confidence",
//       description:
//         "Go beyond conventional screening. Our platform uses cutting-edge generative AI trained on multi-omics, chemical, and structural datasets to propose high-potential small molecules for your specific target or pathway. Every suggestion comes with predicted activity, toxicity, and developability scores — enabling faster decision-making from hit to lead.",
//       gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(34, 211, 238, 0.1) 100%)",
//       accent: "rgba(34, 211, 238, 1)",
//       shadow: "rgba(34, 211, 238, 0.3)",
    
//     },
//     {
//       title: "Streamline Discovery to Development",
//       description:
//         "From in silico design to pathway planning, the AI Discovery Suite integrates predictive modeling, retrosynthetic analysis, and property optimization in a single workspace. Collaborate across teams, automate routine workflows, and reduce R&D cycles without compromising quality.",
//       gradient: "linear-gradient(135deg, rgba(192, 132, 252, 0.15) 0%, rgba(216, 180, 254, 0.1) 100%)",
//       accent: "rgba(192, 132, 252, 1)",
//       shadow: "rgba(192, 132, 252, 0.3)",
  
//     },
//     {
//       title: "Built for Innovation, Backed by Science",
//       description:
//         "Our technology doesn’t just predict — it explains. With transparent AI reasoning, structure–activity visualizations, and integration with lab data, you get actionable insights grounded in chemistry. The result? More innovative molecules, fewer dead ends, and faster routes to clinical relevance.",
//       gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(253, 186, 116, 0.1) 100%)",
//       accent: "rgba(251, 146, 60, 1)",
//       shadow: "rgba(251, 146, 60, 0.3)",
     
//     },
//     {
//       title: "Your Competitive Edge in Drug Discovery",
//       description:
//         "In a space where speed and precision determine success, our AI Discovery Suite gives you the tools to stay ahead. Reduce costs, explore chemical space like never before, and bring transformative therapies to market faster.",
//       gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(253, 186, 116, 0.1) 100%)",
//       accent: "rgba(251, 146, 60, 1)",
//       shadow: "rgba(251, 146, 60, 0.3)",
     
//     }
//   ];

//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = React.useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setIsVisible(true),
//       { root: null, rootMargin: '0px', threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => sectionRef.current && observer.unobserve(sectionRef.current);
//   }, []);

//   const renderIcon = (type, color) => {
//     switch (type) {
//       case "monitor":
//         return (
//           <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
//             <line x1="8" y1="21" x2="16" y2="21"></line>
//             <line x1="12" y1="17" x2="12" y2="21"></line>
//             <path d="M7 11h10"></path>
//           </svg>
//         );
//       case "network":
//         return (
//           <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
//             <path d="M17.8 19.2a9 9 0 0 0 1.6-4.7 1 1 0 0 0-1-1h-3.2a4 4 0 0 1-.8-2.3V8.3a1 1 0 0 0-1-1H9.2a1 1 0 0 0-1 1v2.5a4 4 0 0 1-.8 2.3H4.2a1 1 0 0 0-1 1 9 9 0 0 0 1.6 4.7"></path>
//             <path d="M7.5 14.6a5 5 0 0 1 9 0"></path>
//           </svg>
//         );
//       case "integration":
//         return (
//           <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M12 2v4"></path>
//             <path d="m16.24 7.76 2.83-2.83"></path>
//             <path d="M18 12h4"></path>
//             <path d="m16.24 16.24 2.83 2.83"></path>
//             <path d="M12 18v4"></path>
//             <path d="m7.76 16.24-2.83 2.83"></path>
//             <path d="M6 12H2"></path>
//             <path d="m7.76 7.76-2.83-2.83"></path>
//             <circle cx="12" cy="12" r="3"></circle>
//           </svg>
//         );
//       default: return null;
//     }
//   };

//   return (
//     <div
//       ref={sectionRef}
//       style={{
//         marginTop: '-25px',
//         paddingBottom: '40px',
//         color: "#111827",
//         fontFamily: "'Inter', sans-serif",
//         position: "relative",
//         overflow: "hidden",
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
//       }}
//     >
//       <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
//         <h2
//           style={{
//             fontSize: "42px",
//             fontWeight: "200",
//             textAlign: "center",
//             marginBottom: "60px",
//             lineHeight: "1.2",
//             color: "#111827",
//             letterSpacing: "-0.5px",
//             position: "relative",
//             opacity: isVisible ? 1 : 0,
//             transition: 'opacity 0.6s ease-out 0.2s'
//           }}
//         >
//           We empower businesses to be insight-driven
//           <span style={{
//             position: "absolute",
//             bottom: "-10px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "100px",
//             height: "4px",
//             background: "linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(192, 132, 252, 0.8), rgba(251, 146, 60, 0.8))",
//             borderRadius: "2px"
//           }} />
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "24px"
//           }}
//         >
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: "#fff",
//                 padding: "32px 24px",
//                 borderRadius: "16px",
//                 boxShadow: `0 8px 20px ${card.shadow}`,
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "flex-start",
//                 position: "relative",
//                 overflow: "hidden",
//                 background: card.gradient,
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                 transition: `opacity 0.6s ease-out ${0.3 + index * 0.1}s, transform 0.6s ease-out ${0.3 + index * 0.1}s`
//               }}
//             >
//               <div style={{ fontSize: "42px", marginBottom: "20px", opacity: 0.9 }}>
//                 {renderIcon(card.iconType, card.accent)}
//               </div>
//               <h3 style={{
//                 fontSize: "22px",
//                 fontWeight: "500",
//                 marginBottom: "16px",
//                 lineHeight: "1.4",
//                 color: "#111827",
//                 position: "relative",
//                 paddingBottom: "12px"
//               }}>
//                 {card.title}
//                 <span style={{
//                   position: "absolute",
//                   bottom: "0",
//                   left: "0",
//                   width: "40px",
//                   height: "3px",
//                   background: card.accent,
//                   borderRadius: "2px"
//                 }} />
//               </h3>
//               <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6", flexGrow: 1 }}>
//                 {card.description}
//               </p>
//               <div style={{
//                 position: "absolute",
//                 top: "0",
//                 right: "0",
//                 width: "0",
//                 height: "0",
//                 borderTop: "50px solid " + card.accent + "20",
//                 borderLeft: "50px solid transparent"
//               }} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

