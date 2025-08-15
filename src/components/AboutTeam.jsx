import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

export default function LeadershipSection() {
  const leaders = [
    {
      name: "SARATH KOLLI",
      title: "Chief Executive Officer",
      image: "/sarath-sir.png",
      linkedin: "https://in.linkedin.com/in/kollisarath"
    },
    {
      name: "DR. PARITOSH PRASHAR",
      title: "Chief Technology Officer",
      image: "/paritosh-sir.png",
      linkedin: "https://www.linkedin.com/in/paritosh-prashar-04a366163"
    }
  ];

  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });

  const handleLinkedInClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="leadership-section" style={{
      padding: "2rem 1rem 5rem",
      textAlign: "center",
      fontFamily: "'Inter', sans-serif",
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      justifyContent: "center"
    }}>
      {/* Section Header */}
      <header style={{ 
        marginBottom: "3rem",
        padding: "0 1rem",
        transform: isMobileOrTablet ? "translateX(1px)" : "translateX(20px)" // Slight right shift
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          fontWeight: 400,
          color: '#4F1985',
          fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
          fontFamily: 'timesnew'
        }}>
          Our Leadership
          <span style={{
            display: "block",
            width: "80px",
            height: "4px",
            backgroundColor: "#4F1985",
            margin: "15px auto 0",
            borderRadius: "2px"
          }} />
        </h2>
      </header>

      {/* Leadership Cards Container */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
        flexWrap: "wrap",
        padding: "0 1rem",
        width: "100%",
        transform: isMobileOrTablet ? "translateX(38px)" : "none" // Slight right shift
      }}>
        {leaders.map((leader, idx) => (
          <article 
            key={idx}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "1rem",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              width: "clamp(280px, 90vw, 320px)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              paddingBottom: "1.5rem",
              margin: "1rem 0",
              ":hover": {
                transform: isMobileOrTablet ? "translateY(-8px)" : "translateY(-8px)",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }
            }}
          >
            {/* Profile Image */}
            <div style={{
              width: "100%",
              padding: "2rem 1rem 1rem",
              backgroundColor: "#f1f5f9",
              display: "flex",
              justifyContent: "center"
            }}>
              <div style={{
                //for mobileview change 
                width: isMobileOrTablet ? "clamp(180px, 50vw, 220px)" : "clamp(150px, 40vw, 200px)",
                height: isMobileOrTablet ? "clamp(180px, 50vw, 220px)" : "clamp(150px, 40vw, 200px)",
                borderRadius: "10%",
                overflow: "hidden",
              }}>
                <img
                  src={leader.image}
                  alt={leader.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    transition: "transform 0.3s ease"
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/default-profile.png";
                  }}
                />
              </div>
            </div>

            {/* Leader Info */}
            <div style={{
              padding: "1.5rem 1rem 0",
              textAlign: "center",
              width: "100%"
            }}>
              <h3 style={{
                fontSize: "clamp(1.1rem, 4vw, 1.375rem)",
                fontWeight: 700,
                color: "#1e293b",
                marginBottom: "0.5rem",
                lineHeight: "1.3"
              }}>
                {leader.name}
              </h3>
              
              <p style={{
                color: "#64748b",
                fontSize: "clamp(0.9rem, 3vw, 1rem)",
                fontWeight: 500,
                marginBottom: "1.5rem",
                lineHeight: "1.5"
              }}>
                {leader.title}
              </p>

              {/* LinkedIn Button */}
              <button
                onClick={() => handleLinkedInClick(leader.linkedin)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.5rem",
                  color: "#0a66c2",
                  transition: "all 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  ":hover": {
                    color: "#004182",
                    transform: "scale(1.1)",
                    background: "rgba(10, 102, 194, 0.1)"
                  }
                }}
                aria-label={`Connect with ${leader.name} on LinkedIn`}
              >
                <FaLinkedin style={{ fontSize: "clamp(1.5rem, 5vw, 1.75rem)" }} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}









// import React, { useState, useEffect } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Button,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Divider,
//   useMediaQuery,
//   useScrollTrigger,
//   Typography,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import { useTheme, styled } from '@mui/material/styles';
// import { Link as RouterLink, useLocation } from 'react-router-dom';

// // Define your navigation items and their routes
// const NAV_ITEMS = [
//   { label: 'Home', path: '/' },
//   { label: 'Our Suite', path: '/products' },
//   { label: 'Buy Need', path: '#' },
//   { label: 'Resources', path: '/blogs' },
//   { label: 'About', path: '/about' },
  
  
//   // { label: 'Blogs', path: '/blogs' },
//   // { label: 'Pipeline', path: '/pipeline' },
//   // { label: 'Hackathon', path: '/hackathon' },
  
// ];

// // Styled wrapper for desktop nav
// const NavWrapper = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: 24,
//   padding: '4px',
//   width: '100%',
//   justifyContent: 'space-evenly',
// }));

// // Styled nav button
// const NavButton = styled(Button, {
//   shouldForwardProp: (prop) => prop !== 'active',
// })(({ theme, active }) => ({
//   textTransform: 'none',
//   fontWeight: 500,
//   fontSize: 14,
//   padding: '4px 16px',
//   borderRadius: 20,
//   backgroundColor: active ? theme.palette.background.paper : 'transparent',
//   color: active ? '#4f1985' : theme.palette.text.primary, // Changed to #4f1985 for active state
//   boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     backgroundColor: active
//       ? theme.palette.background.paper
//       : theme.palette.action.selected,
//   },
// }));

// export default function NavbarPage() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
//   const location = useLocation(); // Get current route location

//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('');

//   // Set active tab based on current route when component mounts or location changes
//   useEffect(() => {
//     const currentItem = NAV_ITEMS.find(item => item.path === location.pathname);
//     if (currentItem) {
//       setActiveTab(currentItem.label);
//     } else {
//       setActiveTab('Home'); // Default to Home if no match
//     }
//   }, [location.pathname]);

//   const handleNavClick = (label) => {
//     setActiveTab(label);
//     setDrawerOpen(false);
//   };

//   return (
//     <>
//       {/* App Bar - Updated with solid background */}
//       <AppBar
//         position="relative"
//         elevation={trigger ? 4 : 0}
//         sx={{
//           backgroundColor: theme.palette.background.paper,
//           color: "#4F1985",
//           transition: 'all 0.3s ease',
//           boxShadow: trigger ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
//         }}
//       >
//         <Toolbar
//           sx={{
//             minHeight: 64,
            
//             display: 'flex',
//             justifyContent: 'center',
//             px: 2,
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               maxWidth: '1440px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'space-evenly',
//             }}
//           >
//             {/* Logo */}
//             <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
//               <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//                 <img
//                   src="/logo.png"
//                   alt="Boltzmann Logo"
//                   height={50}
//                   style={{ marginRight: 8 }}
//                 />
//               </RouterLink>
//             </Box>

//             {/* Desktop Navigation */}
//             {!isMobile && (
//               <Box sx={{ flex: 1, mx: 4 }}>
//                 <NavWrapper>
//                   {NAV_ITEMS.map((item) => (
//                     <NavButton
//                       key={item.label}
//                       active={activeTab === item.label}
//                       component={RouterLink}
//                       to={item.path}
//                       onClick={() => setActiveTab(item.label)}
//                     >
//                       {item.label}
//                     </NavButton>
//                   ))}
//                 </NavWrapper>
//               </Box>
//             )}

//             {/* Desktop Contact Us Button */}
//             {!isMobile && (
//               <Button
//                 variant="contained"
//                 component={RouterLink}
//                 to="/contact"
//                 sx={{
//                   textTransform: 'none',
//                   fontSize: 13,
//                   borderRadius: 2,
//                   px: 2,
//                   py: 0.5,
//                   height: 35,
//                   backgroundColor: '#4F1985',
//                   '&:hover': {
//                     backgroundColor: '#3a1259',
//                   }
//                 }}
//               >
//                 Request Demo
//               </Button>
//             )}

//             {/* Mobile Menu Icon */}
//             {isMobile && (
//               <IconButton edge="end" onClick={() => setDrawerOpen(true)}>
//                 <MenuIcon />
//               </IconButton>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//       >
//         <Box sx={{ width: 280 }}>
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             p={2}
//           >
//             <Typography variant="h6">Menu</Typography>
//             <IconButton onClick={() => setDrawerOpen(false)}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Divider />

//           <List>
//             {NAV_ITEMS.map((item) => (
//               <ListItem disablePadding key={item.label}>
//                 <ListItemButton
//                   component={RouterLink}
//                   to={item.path}
//                   onClick={() => handleNavClick(item.label)}
//                   selected={activeTab === item.label}
//                   sx={{
//                     '&.Mui-selected': {
//                       color: '#4f1985',
//                       backgroundColor: 'transparent',
//                     },
//                     '&.Mui-selected:hover': {
//                       backgroundColor: theme.palette.action.selected,
//                     }
//                   }}
//                 >
//                   <ListItemText 
//                     primary={item.label} 
//                     primaryTypographyProps={{
//                       fontWeight: activeTab === item.label ? 600 : 'normal',
//                     }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}

//             <Divider sx={{ my: 1 }} />

//             <Box p={2}>
//               <Button
//                 variant="contained"
//                 fullWidth
//                 component={RouterLink}
//                 to="/contact"
//                 sx={{ 
//                   borderRadius: 5,
//                   backgroundColor: '#4F1985',
//                   '&:hover': {
//                     backgroundColor: '#3a1259',
//                   }
//                 }}
//                 onClick={() => setDrawerOpen(false)}
//               >
//                 Contact Us
//               </Button>
//             </Box>
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// }

