import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export default function LeadershipSection() {
  const navigate = useNavigate();

  const leaders = [
    {
      name: "SARATH KOLLI",
      title: "Chief Executive Officer",
      image: "/sarath-sir.png",
      linkedin: "https://in.linkedin.com/in/kollisarath",
      route: "sarath-kolli"
    },
    {
      name: "DR. PARITOSH PRASHAR",
      title: "Chief Technology Officer",
      image: "/paritosh-sir.png",
      linkedin: "https://www.linkedin.com/in/paritosh-prashar-04a366163",
      route: "paritosh-prashar"
    }
  ];

  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });

  return (
    <section style={{ padding: "2rem 1rem 5rem", textAlign: "center" }}>
      <header style={{ marginBottom: "3rem" }}>
        <h2 style={{ color: "#4F1985", fontSize: "clamp(1.8rem, 5vw, 2.5rem)" }}>
          Our Leadership
        </h2>
      </header>

      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        {leaders.map((leader, idx) => (
          <article 
            key={idx}
            onClick={() => navigate(`/leadership/${leader.route}`)}
            style={{
              cursor: "pointer",
              backgroundColor: "#fff",
              boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
              width: "300px",
              textAlign: "center",
              padding: "1rem",
              borderRadius: "12px",
              transition: "transform 0.3s ease",
            }}
          >
            <img src={leader.image} alt={leader.name} style={{ width: "100%", height: "auto" }} />
            <h3 style={{ margin: "1rem 0 0.5rem" }}>{leader.name}</h3>
            <p style={{ color: "#64748b" }}>{leader.title}</p>
            <button
              onClick={(e) => { 
                e.stopPropagation(); // prevent triggering card navigation
                window.open(leader.linkedin, "_blank", "noopener,noreferrer");
              }}
              style={{ marginTop: "1rem", color: "#0a66c2", border: "none", background: "none" }}
            >
              <FaLinkedin size={24} />
            </button>
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

