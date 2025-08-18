

// import React, { useState, useEffect, useRef } from 'react';
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

// const NAV_ITEMS = [
//   { label: 'Home', path: '/' },
//   { label: 'Our Suite', path: '/products' },
//   { label: 'Buy Need', path: '#' },
//   { label: 'Resources', path: '/blogs' },
//   { label: 'About', path: '/about' },
// ];

// const PRODUCT_ITEMS = [
//   { 
//     img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Product One', 
//     path: '/product-one',
//     desc: 'A comprehensive solution designed to streamline your workflow and boost productivity.' 
//   },
//   { 
//     img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Product Two', 
//     path: '/product-two',
//     desc: 'Advanced analytics and reporting tools to help you make data-driven decisions.' 
//   },
//   { 
//     img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Product Three', 
//     path: '/product-three',
//     desc: 'Enterprise-grade security and compliance features for modern businesses.' 
//   },
// ];

// const NavWrapper = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: 24,
//   padding: '4px',
//   width: '100%',
//   justifyContent: 'space-evenly',
// }));

// const NavButton = styled(Button, {
//   shouldForwardProp: (prop) => prop !== 'active',
// })(({ theme, active }) => ({
//   textTransform: 'none',
//   fontWeight: 500,
//   fontSize: 14,
//   padding: '4px 16px',
//   borderRadius: 20,
//   backgroundColor: active ? theme.palette.background.paper : 'transparent',
//   color: active ? '#4f1985' : theme.palette.text.primary,
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
//   const isMobile = useMediaQuery('(max-width: 908px)'); // Fixed breakpoint
//   const isTablet = useMediaQuery('(max-width: 1200px)');
//   const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
//   const location = useLocation();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('');
//   const [showMegaMenu, setShowMegaMenu] = useState(false);
  
//   // Use refs to track mouse state and timers
//   const megaMenuRef = useRef(null);
//   const navItemRef = useRef(null);
//   const hideTimeoutRef = useRef(null);
//   const isMouseInsideRef = useRef(false);

//   useEffect(() => {
//     const currentItem = NAV_ITEMS.find(item => item.path === location.pathname);
//     if (currentItem) {
//       setActiveTab(currentItem.label);
//     } else {
//       setActiveTab('Home');
//     }
//   }, [location.pathname]);

//   const handleNavClick = (label) => {
//     setActiveTab(label);
//     setDrawerOpen(false);
//   };

//   const showMenu = () => {
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
//     setShowMegaMenu(true);
//     isMouseInsideRef.current = true;
//   };

//   const hideMenu = () => {
//     isMouseInsideRef.current = false;
//     hideTimeoutRef.current = setTimeout(() => {
//       if (!isMouseInsideRef.current) {
//         setShowMegaMenu(false);
//       }
//     }, 150);
//   };

//   const handleNavItemMouseEnter = () => {
//     showMenu();
//   };

//   const handleNavItemMouseLeave = () => {
//     hideMenu();
//   };

//   const handleMegaMenuMouseEnter = () => {
//     showMenu();
//   };

//   const handleMegaMenuMouseLeave = () => {
//     hideMenu();
//   };

//   const handleProductClick = (product, event) => {
//     event.preventDefault();
//     event.stopPropagation();
    
//     // Hide the mega menu immediately
//     setShowMegaMenu(false);
//     isMouseInsideRef.current = false;
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
    
//     console.log(`Navigating to ${product.title}`);
//     // Add your navigation logic here
//     // window.location.href = product.path;
//   };

//   const handleLearnMoreClick = (product, event) => {
//     event.preventDefault();
//     event.stopPropagation();
    
//     // Hide the mega menu immediately
//     setShowMegaMenu(false);
//     isMouseInsideRef.current = false;
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
    
//     console.log(`Learn more about ${product.title}`);
//     // Add your learn more logic here
//   };

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (hideTimeoutRef.current) {
//         clearTimeout(hideTimeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <>
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
//         <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'center', px: { xs: 1, sm: 2 } }}>
//           <Box sx={{ 
//             width: '100%', 
//             maxWidth: '1440px', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: isMobile ? 'space-between' : 'space-evenly',
//             position: 'relative',
//             overflow: 'hidden', // Prevent overflow
//           }}>
//             {/* Logo */}
//             <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//               <img src="/logo.png" alt="Logo" height={50} style={{ marginRight: 8 }} />
//             </RouterLink>

//             {/* Desktop Navigation */}
//             {!isMobile && (
//               <Box sx={{ 
//                 flex: 1, 
//                 mx: 2,
//                 minWidth: 0, // Allow shrinking
//                 position: 'relative',
//                 display: 'flex',
//                 justifyContent: 'center'
//               }}>
//                 <NavWrapper sx={{
//                   maxWidth: '600px', // Prevent excessive width
//                   minWidth: '400px',  // Maintain minimum width
//                 }}>
//                   {NAV_ITEMS.map((item) =>
//                     item.label === 'Our Suite' ? (
//                       <Box
//                         key={item.label}
//                         ref={navItemRef}
//                         onMouseEnter={handleNavItemMouseEnter}
//                         onMouseLeave={handleNavItemMouseLeave}
//                         sx={{ position: 'relative', display: 'flex' }}
//                       >
//                         <NavButton active={activeTab === item.label}>
//                           {item.label}
//                         </NavButton>
//                       </Box>
//                     ) : (
//                       <NavButton
//                         key={item.label}
//                         active={activeTab === item.label}
//                         component={RouterLink}
//                         to={item.path}
//                         onClick={() => setActiveTab(item.label)}
//                         sx={{ flex: '1 1 auto', minWidth: 0 }} // Allow flexible sizing
//                       >
//                         {item.label}
//                       </NavButton>
//                     )
//                   )}
//                 </NavWrapper>

//                 {/* Mega Menu */}
//                 {showMegaMenu && (
//                   <Box
//                     ref={megaMenuRef}
//                     onMouseEnter={handleMegaMenuMouseEnter}
//                     onMouseLeave={handleMegaMenuMouseLeave}
//                     sx={{
//                       position: 'fixed', // Changed to fixed to prevent overflow issues
//                       top: '80px', // Position below navbar
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                       width: isTablet ? '90vw' : '900px',
//                       maxWidth: '1100px',
//                       backgroundColor: '#fff',
//                       boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
//                       borderRadius: '24px',
//                       zIndex: 1300, // Higher z-index
//                       padding: 4,
//                       // Smooth animation
//                       opacity: 0,
//                       transform: 'translateX(-50%) translateY(-10px)',
//                       animation: 'megaMenuSlideIn 0.3s ease forwards',
//                       '@keyframes megaMenuSlideIn': {
//                         '0%': { 
//                           opacity: 0, 
//                           transform: 'translateX(-50%) translateY(-10px) scale(0.95)' 
//                         },
//                         '100%': { 
//                           opacity: 1, 
//                           transform: 'translateX(-50%) translateY(0) scale(1)' 
//                         },
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: 'grid',
//                         gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
//                         gap: 3,
//                         padding: 2,
//                       }}
//                     >
//                       {PRODUCT_ITEMS.map((product, idx) => (
//                         <Box
//                           key={idx}
//                           onClick={(event) => handleProductClick(product, event)}
//                           sx={{
//                             bgcolor: '#fafafa',
//                             p: 3,
//                             borderRadius: 3,
//                             boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//                             cursor: 'pointer',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'flex-start',
//                             gap: 2,
//                             transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
//                             border: '1px solid transparent',
//                             userSelect: 'none',
//                             position: 'relative',
//                             '&:hover': {
//                               transform: 'translateY(-4px)',
//                               boxShadow: '0 16px 40px rgba(79, 25, 133, 0.2)',
//                               bgcolor: '#fff',
//                               borderColor: 'rgba(79, 25, 133, 0.1)',
//                             },
//                             '&:active': {
//                               transform: 'translateY(-2px)',
//                             },
//                             // Staggered animation
//                             opacity: 0,
//                             transform: 'translateY(20px)',
//                             animation: `productFadeIn 0.4s ease forwards`,
//                             animationDelay: `${idx * 0.1}s`,
//                             '@keyframes productFadeIn': {
//                               to: { 
//                                 opacity: 1, 
//                                 transform: 'translateY(0)' 
//                               },
//                             },
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={product.img}
//                             alt={product.title}
//                             onError={(e) => {
//                               e.target.src = 'https://via.placeholder.com/300x140?text=Product+Image';
//                             }}
//                             sx={{
//                               width: '100%',
//                               height: 140,
//                               borderRadius: 2,
//                               objectFit: 'cover',
//                               mb: 1,
//                             }}
//                           />
//                           <Box sx={{ width: '100%' }}>
//                             <Typography 
//                               variant="h6" 
//                               sx={{ 
//                                 fontWeight: 700, 
//                                 color: '#4F1985', 
//                                 mb: 1,
//                                 fontSize: '1.1rem',
//                                 lineHeight: 1.3,
//                               }}
//                             >
//                               {product.title}
//                             </Typography>
//                             <Typography 
//                               variant="body2" 
//                               sx={{ 
//                                 color: 'text.secondary', 
//                                 lineHeight: 1.5,
//                                 fontSize: '0.875rem',
//                                 display: '-webkit-box',
//                                 WebkitLineClamp: 3,
//                                 WebkitBoxOrient: 'vertical',
//                                 overflow: 'hidden',
//                                 mb: 2,
//                               }}
//                             >
//                               {product.desc}
//                             </Typography>
//                             <Button
//                               size="small"
//                               onClick={(event) => handleLearnMoreClick(product, event)}
//                               sx={{
//                                 color: '#4F1985',
//                                 fontWeight: 600,
//                                 textTransform: 'none',
//                                 fontSize: '0.8rem',
//                                 padding: '6px 12px',
//                                 minWidth: 'auto',
//                                 borderRadius: 2,
//                                 backgroundColor: 'rgba(79, 25, 133, 0.08)',
//                                 '&:hover': {
//                                   backgroundColor: 'rgba(79, 25, 133, 0.15)',
//                                   transform: 'scale(1.02)',
//                                 },
//                                 '&:active': {
//                                   transform: 'scale(0.98)',
//                                 },
//                                 transition: 'all 0.2s ease',
//                               }}
//                             >
//                               Learn more →
//                             </Button>
//                           </Box>
//                         </Box>
//                       ))}
//                     </Box>
//                   </Box>
//                 )}
//               </Box>
//             )}

//             {/* Desktop Contact Button */}
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
//                   flexShrink: 0, // Prevent shrinking
//                   '&:hover': { 
//                     backgroundColor: '#3a1259',
//                     transform: 'scale(1.02)',
//                   },
//                   transition: 'all 0.2s ease',
//                 }}
//               >
//                 Request Demo
//               </Button>
//             )}

//             {/* Mobile Menu Icon */}
//             {isMobile && (
//               <IconButton 
//                 edge="end" 
//                 onClick={() => setDrawerOpen(true)}
//                 sx={{ flexShrink: 0 }}
//               >
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
//         sx={{
//           '& .MuiDrawer-paper': {
//             width: 280,
//             maxWidth: '80vw',
//           },
//         }}
//       >
//         <Box sx={{ width: '100%', height: '100%' }}>
//           <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
//             <Typography variant="h6" sx={{ color: '#4F1985', fontWeight: 600 }}>
//               Menu
//             </Typography>
//             <IconButton onClick={() => setDrawerOpen(false)}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Divider />
//           <List sx={{ flex: 1 }}>
//             {NAV_ITEMS.map((item) => (
//               <ListItem disablePadding key={item.label}>
//                 <ListItemButton
//                   component={item.path !== '#' ? RouterLink : 'div'}
//                   to={item.path !== '#' ? item.path : undefined}
//                   onClick={() => handleNavClick(item.label)}
//                   selected={activeTab === item.label}
//                   sx={{
//                     py: 1.5,
//                     '&.Mui-selected': {
//                       color: '#4f1985',
//                       backgroundColor: 'rgba(79, 25, 133, 0.08)',
//                       '& .MuiListItemText-primary': {
//                         fontWeight: 600,
//                       },
//                     },
//                     '&.Mui-selected:hover': {
//                       backgroundColor: 'rgba(79, 25, 133, 0.12)',
//                     },
//                     '&:hover': {
//                       backgroundColor: theme.palette.action.hover,
//                     },
//                   }}
//                 >
//                   <ListItemText
//                     primary={item.label}
//                     primaryTypographyProps={{
//                       fontWeight: activeTab === item.label ? 600 : 400,
//                       fontSize: '1rem',
//                     }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <Box p={2}>
//             <Button
//               variant="contained"
//               fullWidth
//               component={RouterLink}
//               to="/contact"
//               sx={{
//                 borderRadius: 3,
//                 backgroundColor: '#4F1985',
//                 fontWeight: 600,
//                 py: 1.5,
//                 '&:hover': { 
//                   backgroundColor: '#3a1259',
//                   transform: 'scale(1.02)',
//                 },
//                 transition: 'all 0.2s ease',
//               }}
//               onClick={() => setDrawerOpen(false)}
//             >
//               Request Demo
//             </Button>
//           </Box>
//         </Box>
//       </Drawer>
//     </>
//   );
// }

// import React, { useState, useEffect, useRef } from 'react';
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

// const NAV_ITEMS = [
//   { label: 'Home', path: '/' },
//   { label: 'Our Suite', path: '/products' },
//   { label: 'Buy Need', path: '#' },
//   { label: 'Resources', path: '/blogs' },
//   { label: 'About', path: '/about' },
// ];

// const PRODUCT_ITEMS = [
//   { 
//     img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Product One', 
//     path: '/product-one',
//     desc: 'A comprehensive solution designed to streamline your workflow and boost productivity.' 
//   },
//   { 
//     img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Product Two', 
//     path: '/product-two',
//     desc: 'Advanced analytics and reporting tools to help you make data-driven decisions.' 
//   },
//   { 
//     img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Product Three', 
//     path: '/product-three',
//     desc: 'Enterprise-grade security and compliance features for modern businesses.' 
//   },
// ];

// const NavWrapper = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: 24,
//   padding: '4px',
//   width: '100%',
//   alignItems: 'center',
// }));

// const NavButton = styled(Button, {
//   shouldForwardProp: (prop) => prop !== 'active',
// })(({ theme, active }) => ({
//   textTransform: 'none',
//   fontWeight: 500,
//   fontSize: 14,
//   padding: '4px 16px',
//   borderRadius: 20,
//   backgroundColor: active ? theme.palette.background.paper : 'transparent',
//   color: active ? '#4f1985' : theme.palette.text.primary,
//   boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
//   transition: 'all 0.3s ease',
//   flex: 1, // This makes each button take equal space
//   minWidth: 0, // Allows buttons to shrink if needed
//   whiteSpace: 'nowrap',
//   '&:hover': {
//     backgroundColor: active
//       ? theme.palette.background.paper
//       : theme.palette.action.selected,
//   },
// }));

// export default function NavbarPage() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery('(max-width: 908px)'); // Fixed breakpoint
//   const isTablet = useMediaQuery('(max-width: 1200px)');
//   const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
//   const location = useLocation();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('');
//   const [showMegaMenu, setShowMegaMenu] = useState(false);
  
//   // Use refs to track mouse state and timers
//   const megaMenuRef = useRef(null);
//   const navItemRef = useRef(null);
//   const hideTimeoutRef = useRef(null);
//   const isMouseInsideRef = useRef(false);

//   useEffect(() => {
//     const currentItem = NAV_ITEMS.find(item => item.path === location.pathname);
//     if (currentItem) {
//       setActiveTab(currentItem.label);
//     } else {
//       setActiveTab('Home');
//     }
//   }, [location.pathname]);

//   const handleNavClick = (label) => {
//     setActiveTab(label);
//     setDrawerOpen(false);
//   };

//   const showMenu = () => {
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
//     setShowMegaMenu(true);
//     isMouseInsideRef.current = true;
//   };

//   const hideMenu = () => {
//     isMouseInsideRef.current = false;
//     hideTimeoutRef.current = setTimeout(() => {
//       if (!isMouseInsideRef.current) {
//         setShowMegaMenu(false);
//       }
//     }, 150);
//   };

//   const handleNavItemMouseEnter = () => {
//     showMenu();
//   };

//   const handleNavItemMouseLeave = () => {
//     hideMenu();
//   };

//   const handleMegaMenuMouseEnter = () => {
//     showMenu();
//   };

//   const handleMegaMenuMouseLeave = () => {
//     hideMenu();
//   };

//   const handleProductClick = (product, event) => {
//     event.preventDefault();
//     event.stopPropagation();
    
//     // Hide the mega menu immediately
//     setShowMegaMenu(false);
//     isMouseInsideRef.current = false;
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
    
//     console.log(`Navigating to ${product.title}`);
//     // Add your navigation logic here
//     // window.location.href = product.path;
//   };

//   const handleLearnMoreClick = (product, event) => {
//     event.preventDefault();
//     event.stopPropagation();
    
//     // Hide the mega menu immediately
//     setShowMegaMenu(false);
//     isMouseInsideRef.current = false;
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
    
//     console.log(`Learn more about ${product.title}`);
//     // Add your learn more logic here
//   };

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (hideTimeoutRef.current) {
//         clearTimeout(hideTimeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <AppBar
//         position="sticky"
//         elevation={trigger ? 4 : 0}
//         sx={{
//           backgroundColor: theme.palette.background.paper,
//           color: "#4F1985",
//           transition: 'all 0.3s ease',
//           boxShadow: trigger ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
//         }}
//       >
//         <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'center', px: { xs: 1, sm: 2 } }}>
//           <Box sx={{ 
//             width: '100%', 
//             maxWidth: '1440px', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: isMobile ? 'space-between' : 'space-evenly',
//             position: 'relative',
//             overflow: 'hidden', // Prevent overflow
//           }}>
//             {/* Logo */}
//             <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//               <img src="/logo.png" alt="Logo" height={50} style={{ marginRight: 8 }} />
//             </RouterLink>

//             {/* Desktop Navigation */}
//             {!isMobile && (
//               <Box sx={{ 
//                 flex: 1, 
//                 mx: 2,
//                 minWidth: 0, // Allow shrinking
//                 position: 'relative',
//                 display: 'flex',
//                 justifyContent: 'center'
//               }}>
//                 <NavWrapper sx={{
//                   maxWidth: '600px', // Prevent excessive width
//                   minWidth: '400px',  // Maintain minimum width
//                 }}>
//                   {NAV_ITEMS.map((item) =>
//                     item.label === 'Our Suite' ? (
//                       <Box
//                         key={item.label}
//                         ref={navItemRef}
//                         onMouseEnter={handleNavItemMouseEnter}
//                         onMouseLeave={handleNavItemMouseLeave}
//                         sx={{ 
//                           position: 'relative', 
//                           display: 'flex',
//                           flex: 1, // Equal space for the container
//                         }}
//                       >
//                         <NavButton 
//                           active={activeTab === item.label}
//                           sx={{ width: '100%' }} // Take full width of its container
//                         >
//                           {item.label}
//                         </NavButton>
//                       </Box>
//                     ) : (
//                       <NavButton
//                         key={item.label}
//                         active={activeTab === item.label}
//                         component={RouterLink}
//                         to={item.path}
//                         onClick={() => setActiveTab(item.label)}
//                       >
//                         {item.label}
//                       </NavButton>
//                     )
//                   )}
//                 </NavWrapper>

//                 {/* Mega Menu */}
//                 {showMegaMenu && (
//                   <Box
//                     ref={megaMenuRef}
//                     onMouseEnter={handleMegaMenuMouseEnter}
//                     onMouseLeave={handleMegaMenuMouseLeave}
//                     sx={{
//                       position: 'fixed', // Changed to fixed to prevent overflow issues
//                       top: '80px', // Position below navbar
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                       width: isTablet ? '90vw' : '900px',
//                       maxWidth: '1100px',
//                       backgroundColor: '#fff',
//                       boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
//                       borderRadius: '24px',
//                       zIndex: 1300, // Higher z-index
//                       padding: 4,
//                       // Smooth animation
//                       opacity: 0,
//                       transform: 'translateX(-50%) translateY(-10px)',
//                       animation: 'megaMenuSlideIn 0.3s ease forwards',
//                       '@keyframes megaMenuSlideIn': {
//                         '0%': { 
//                           opacity: 0, 
//                           transform: 'translateX(-50%) translateY(-10px) scale(0.95)' 
//                         },
//                         '100%': { 
//                           opacity: 1, 
//                           transform: 'translateX(-50%) translateY(0) scale(1)' 
//                         },
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: 'grid',
//                         gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
//                         gap: 3,
//                         padding: 2,
//                       }}
//                     >
//                       {PRODUCT_ITEMS.map((product, idx) => (
//                         <Box
//                           key={idx}
//                           onClick={(event) => handleProductClick(product, event)}
//                           sx={{
//                             bgcolor: '#fafafa',
//                             p: 3,
//                             borderRadius: 3,
//                             boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//                             cursor: 'pointer',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'flex-start',
//                             gap: 2,
//                             transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
//                             border: '1px solid transparent',
//                             userSelect: 'none',
//                             position: 'relative',
//                             '&:hover': {
//                               transform: 'translateY(-4px)',
//                               boxShadow: '0 16px 40px rgba(79, 25, 133, 0.2)',
//                               bgcolor: '#fff',
//                               borderColor: 'rgba(79, 25, 133, 0.1)',
//                             },
//                             '&:active': {
//                               transform: 'translateY(-2px)',
//                             },
//                             // Staggered animation
//                             opacity: 0,
//                             transform: 'translateY(20px)',
//                             animation: `productFadeIn 0.4s ease forwards`,
//                             animationDelay: `${idx * 0.1}s`,
//                             '@keyframes productFadeIn': {
//                               to: { 
//                                 opacity: 1, 
//                                 transform: 'translateY(0)' 
//                               },
//                             },
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={product.img}
//                             alt={product.title}
//                             onError={(e) => {
//                               e.target.src = 'https://via.placeholder.com/300x140?text=Product+Image';
//                             }}
//                             sx={{
//                               width: '100%',
//                               height: 140,
//                               borderRadius: 2,
//                               objectFit: 'cover',
//                               mb: 1,
//                             }}
//                           />
//                           <Box sx={{ width: '100%' }}>
//                             <Typography 
//                               variant="h6" 
//                               sx={{ 
//                                 fontWeight: 700, 
//                                 color: '#4F1985', 
//                                 mb: 1,
//                                 fontSize: '1.1rem',
//                                 lineHeight: 1.3,
//                               }}
//                             >
//                               {product.title}
//                             </Typography>
//                             <Typography 
//                               variant="body2" 
//                               sx={{ 
//                                 color: 'text.secondary', 
//                                 lineHeight: 1.5,
//                                 fontSize: '0.875rem',
//                                 display: '-webkit-box',
//                                 WebkitLineClamp: 3,
//                                 WebkitBoxOrient: 'vertical',
//                                 overflow: 'hidden',
//                                 mb: 2,
//                               }}
//                             >
//                               {product.desc}
//                             </Typography>
//                             <Button
//                               size="small"
//                               onClick={(event) => handleLearnMoreClick(product, event)}
//                               sx={{
//                                 color: '#4F1985',
//                                 fontWeight: 600,
//                                 textTransform: 'none',
//                                 fontSize: '0.8rem',
//                                 padding: '6px 12px',
//                                 minWidth: 'auto',
//                                 borderRadius: 2,
//                                 backgroundColor: 'rgba(79, 25, 133, 0.08)',
//                                 '&:hover': {
//                                   backgroundColor: 'rgba(79, 25, 133, 0.15)',
//                                   transform: 'scale(1.02)',
//                                 },
//                                 '&:active': {
//                                   transform: 'scale(0.98)',
//                                 },
//                                 transition: 'all 0.2s ease',
//                               }}
//                             >
//                               Learn more →
//                             </Button>
//                           </Box>
//                         </Box>
//                       ))}
//                     </Box>
//                   </Box>
//                 )}
//               </Box>
//             )}

//             {/* Desktop Contact Button */}
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
//                   flexShrink: 0, // Prevent shrinking
//                   '&:hover': { 
//                     backgroundColor: '#3a1259',
//                     transform: 'scale(1.02)',
//                   },
//                   transition: 'all 0.2s ease',
//                 }}
//               >
//                 Request Demo
//               </Button>
//             )}

//             {/* Mobile Menu Icon */}
//             {isMobile && (
//               <IconButton 
//                 edge="end" 
//                 onClick={() => setDrawerOpen(true)}
//                 sx={{ flexShrink: 0 }}
//               >
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
//         sx={{
//           '& .MuiDrawer-paper': {
//             width: 280,
//             maxWidth: '80vw',
//           },
//         }}
//       >
//         <Box sx={{ width: '100%', height: '100%' }}>
//           <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
//             <Typography variant="h6" sx={{ color: '#4F1985', fontWeight: 600 }}>
//               Menu
//             </Typography>
//             <IconButton onClick={() => setDrawerOpen(false)}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Divider />
//           <List sx={{ flex: 1 }}>
//             {NAV_ITEMS.map((item) => (
//               <ListItem disablePadding key={item.label}>
//                 <ListItemButton
//                   component={item.path !== '#' ? RouterLink : 'div'}
//                   to={item.path !== '#' ? item.path : undefined}
//                   onClick={() => handleNavClick(item.label)}
//                   selected={activeTab === item.label}
//                   sx={{
//                     py: 1.5,
//                     '&.Mui-selected': {
//                       color: '#4f1985',
//                       backgroundColor: 'rgba(79, 25, 133, 0.08)',
//                       '& .MuiListItemText-primary': {
//                         fontWeight: 600,
//                       },
//                     },
//                     '&.Mui-selected:hover': {
//                       backgroundColor: 'rgba(79, 25, 133, 0.12)',
//                     },
//                     '&:hover': {
//                       backgroundColor: theme.palette.action.hover,
//                     },
//                   }}
//                 >
//                   <ListItemText
//                     primary={item.label}
//                     primaryTypographyProps={{
//                       fontWeight: activeTab === item.label ? 600 : 400,
//                       fontSize: '1rem',
//                     }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <Box p={2}>
//             <Button
//               variant="contained"
//               fullWidth
//               component={RouterLink}
//               to="/contact"
//               sx={{
//                 borderRadius: 3,
//                 backgroundColor: '#4F1985',
//                 fontWeight: 600,
//                 py: 1.5,
//                 '&:hover': { 
//                   backgroundColor: '#3a1259',
//                   transform: 'scale(1.02)',
//                 },
//                 transition: 'all 0.2s ease',
//               }}
//               onClick={() => setDrawerOpen(false)}
//             >
//               Request Demo
//             </Button>
//           </Box>
//         </Box>
//       </Drawer>
//     </>
//   );
// }


//useful
// import React, { useState, useEffect, useRef } from 'react';
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
// import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

// const NAV_ITEMS = [
//   { label: 'Home', path: '/' },
//   { label: 'Our Suite', path: '/products' },
//   { label: 'Buy Need', path: '#' },
//   { label: 'Resources', path: '/blogs' },
//   { label: 'About', path: '/about' },
// ];

// const PRODUCT_ITEMS = [
//   { 
//     img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Small Molecule Design', 
//     path: '/smallmoleculedesign', // Changed to navigate to About page
//     desc: 'Transform the way you discover, design, and optimize small molecules faster, smarter.' 
//   },
//   { 
//     img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Protein Engineering', 
//     path: '/proteinengineering',
//     desc: 'Reimagine how proteins are designed, optimized, and brought to life faster, smarter, more precise.' 
//   },
//   { 
//     img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Synthetic Chemistry', 
//     path: '/syntheticchemistry',
//     desc: 'Reimagine how you design, plan, and execute synthesis—faster, greener, smarter.' 
//   },
// ];

// const NavWrapper = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: 24,
//   padding: '4px',
//   width: '100%',
//   alignItems: 'center',
// }));

// const NavButton = styled(Button, {
//   shouldForwardProp: (prop) => prop !== 'active' && prop !== 'hovered',
// })(({ theme, active, hovered }) => ({
//   textTransform: 'none',
//   fontWeight: 500,
//   fontSize: 14,
//   padding: '4px 16px',
//   borderRadius: 20,
//   backgroundColor: active ? theme.palette.background.paper : 'transparent',
//   color: active ? '#4f1985' : theme.palette.text.primary,
//   boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
//   transition: 'all 0.3s ease',
//   flex: 1,
//   minWidth: 0,
//   whiteSpace: 'nowrap',
//   position: 'relative',
//   overflow: 'hidden',
//   '&:hover': {
//     backgroundColor: hovered ? theme.palette.action.selected : 'transparent',
//   },
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     bottom: 0,
//     left: '50%',
//     transform: hovered ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
//     width: '60%',
    
//     backgroundColor: 'rgba(79, 25, 133, 0.3)',
//     transition: 'transform 0.3s ease',
//   },
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     bottom: 0,
//     left: '50%',
//     transform: active ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
//     width: '20%',
    
//     backgroundColor: '#4f1985',
//     transition: 'transform 0.3s ease',
//   }
// }));

// export default function NavbarPage() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery('(max-width: 908px)');
//   const isTablet = useMediaQuery('(max-width: 1200px)');
//   const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('');
//   const [showMegaMenu, setShowMegaMenu] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);
  
//   const megaMenuRef = useRef(null);
//   const navItemRef = useRef(null);
//   const hideTimeoutRef = useRef(null);
//   const isMouseInsideRef = useRef(false);

//   useEffect(() => {
//     const currentItem = NAV_ITEMS.find(item => item.path === location.pathname);
//     if (currentItem) {
//       setActiveTab(currentItem.label);
//     } else {
//       setActiveTab('Home');
//     }
//   }, [location.pathname]);

//   const handleNavClick = (label) => {
//     setActiveTab(label);
//     setDrawerOpen(false);
//   };

//   const handleItemHover = (label) => {
//     setHoveredItem(label);
//   };

//   const handleItemLeave = () => {
//     setHoveredItem(null);
//   };

//   const showMenu = () => {
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
//     setShowMegaMenu(true);
//     isMouseInsideRef.current = true;
//   };

//   const hideMenu = () => {
//     isMouseInsideRef.current = false;
//     hideTimeoutRef.current = setTimeout(() => {
//       if (!isMouseInsideRef.current) {
//         setShowMegaMenu(false);
//       }
//     }, 150);
//   };

//   const handleNavItemMouseEnter = () => {
//     showMenu();
//     handleItemHover('Our Suite');
//   };

//   const handleNavItemMouseLeave = () => {
//     hideMenu();
//     handleItemLeave();
//   };

//   const handleMegaMenuMouseEnter = () => {
//     showMenu();
//     handleItemHover('Our Suite');
//   };

//   const handleMegaMenuMouseLeave = () => {
//     hideMenu();
//     handleItemLeave();
//   };

//   const handleProductClick = (product, event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setShowMegaMenu(false);
//     isMouseInsideRef.current = false;
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
//     if (product.path) {
//       navigate(product.path);
//     }
//   };

//   const handleLearnMoreClick = (product, event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setShowMegaMenu(false);
//     isMouseInsideRef.current = false;
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
//     if (product.path) {
//       navigate(product.path);
//     }
//   };

//   useEffect(() => {
//     return () => {
//       if (hideTimeoutRef.current) {
//         clearTimeout(hideTimeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <AppBar
//         position="sticky"
//         elevation={trigger ? 4 : 0}
//         sx={{
//           backgroundColor: theme.palette.background.paper,
//           color: "#4F1985",
//           transition: 'all 0.3s ease',
//           boxShadow: trigger ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
//           height: { xs: '70px', sm: '80px' },
//           justifyContent: 'center',
//           zIndex: theme.zIndex.drawer + 1,
//         }}
//       >
//         <Toolbar sx={{ 
//           minHeight: { xs: '70px', sm: '80px' },
//           display: 'flex', 
//           justifyContent: 'center', 
//           px: { xs: 1, sm: 2 } 
//         }}>
//           <Box sx={{ 
//             width: '100%', 
//             maxWidth: '1440px', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: isMobile ? 'space-between' : 'space-evenly',
//             position: 'relative',
//             overflow: 'hidden',
//           }}>
//             {/* Logo */}
//             <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//               <img src="/logo.png" alt="Logo" height={50} style={{ marginRight: 8 }} />
//             </RouterLink>

//             {/* Desktop Navigation */}
//             {!isMobile && (
//               <Box sx={{ 
//                 flex: 1, 
//                 mx: 2,
//                 minWidth: 0,
//                 position: 'relative',
//                 display: 'flex',
//                 justifyContent: 'center'
//               }}>
//                 <NavWrapper sx={{
//                   maxWidth: '600px',
//                   minWidth: '400px',
//                 }}>
//                   {NAV_ITEMS.map((item) =>
//                     item.label === 'Our Suite' ? (
//                       <Box
//                         key={item.label}
//                         ref={navItemRef}
//                         onMouseEnter={handleNavItemMouseEnter}
//                         onMouseLeave={handleNavItemMouseLeave}
//                         sx={{ 
//                           position: 'relative', 
//                           display: 'flex',
//                           flex: 1,
//                         }}
//                       >
//                         <NavButton 
//                           active={activeTab === item.label}
//                           hovered={hoveredItem === item.label}
//                           sx={{ width: '100%' }}
//                         >
//                           {item.label}
//                         </NavButton>
//                       </Box>
//                     ) : (
//                       <Box
//                         key={item.label}
//                         onMouseEnter={() => handleItemHover(item.label)}
//                         onMouseLeave={handleItemLeave}
//                         sx={{ 
//                           position: 'relative', 
//                           display: 'flex',
//                           flex: 1,
//                         }}
//                       >
//                         <NavButton
//                           active={activeTab === item.label}
//                           hovered={hoveredItem === item.label}
//                           component={RouterLink}
//                           to={item.path}
//                           onClick={() => setActiveTab(item.label)}
//                         >
//                           {item.label}
//                         </NavButton>
//                       </Box>
//                     )
//                   )}
//                 </NavWrapper>

//                 {/* Mega Menu */}
//                 {showMegaMenu && (
//                   <Box
//                     ref={megaMenuRef}
//                     onMouseEnter={handleMegaMenuMouseEnter}
//                     onMouseLeave={handleMegaMenuMouseLeave}
//                     sx={{
//                       position: 'fixed',
//                       top: { xs: '70px', sm: '80px' },
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                       width: isTablet ? '90vw' : '900px',
//                       maxWidth: '1100px',
//                       backgroundColor: '#fff',
//                       boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
//                       borderRadius: '24px',
//                       zIndex: 1300,
//                       padding: 4,
//                       opacity: 0,
//                       transform: 'translateX(-50%) translateY(-10px)',
//                       animation: 'megaMenuSlideIn 0.3s ease forwards',
//                       '@keyframes megaMenuSlideIn': {
//                         '0%': { 
//                           opacity: 0, 
//                           transform: 'translateX(-50%) translateY(-10px) scale(0.95)' 
//                         },
//                         '100%': { 
//                           opacity: 1, 
//                           transform: 'translateX(-50%) translateY(0) scale(1)' 
//                         },
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: 'grid',
//                         gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
//                         gap: 3,
//                         padding: 2,
//                       }}
//                     >
//                       {PRODUCT_ITEMS.map((product, idx) => (
//                         <Box
//                           key={idx}
//                           onClick={(event) => handleProductClick(product, event)}
//                           sx={{
//                             bgcolor: '#fafafa',
//                             p: 3,
//                             borderRadius: 3,
//                             boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//                             cursor: 'pointer',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'flex-start',
//                             gap: 2,
//                             transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
//                             border: '1px solid transparent',
//                             userSelect: 'none',
//                             position: 'relative',
//                             '&:hover': {
//                               transform: 'translateY(-4px)',
//                               boxShadow: '0 16px 40px rgba(79, 25, 133, 0.2)',
//                               bgcolor: '#fff',
//                               borderColor: 'rgba(79, 25, 133, 0.1)',
//                             },
//                             '&:active': {
//                               transform: 'translateY(-2px)',
//                             },
//                             opacity: 0,
//                             transform: 'translateY(20px)',
//                             animation: `productFadeIn 0.4s ease forwards`,
//                             animationDelay: `${idx * 0.1}s`,
//                             '@keyframes productFadeIn': {
//                               to: { 
//                                 opacity: 1, 
//                                 transform: 'translateY(0)' 
//                               },
//                             },
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={product.img}
//                             alt={product.title}
//                             onError={(e) => {
//                               e.target.src = 'https://via.placeholder.com/300x140?text=Product+Image';
//                             }}
//                             sx={{
//                               width: '100%',
//                               height: 140,
//                               borderRadius: 2,
//                               objectFit: 'cover',
//                               mb: 1,
//                             }}
//                           />
//                           <Box sx={{ width: '100%' }}>
//                             <Typography 
//                               variant="h6" 
//                               sx={{ 
//                                 fontWeight: 700, 
//                                 color: '#4F1985', 
//                                 mb: 1,
//                                 fontSize: '1.1rem',
//                                 lineHeight: 1.3,
//                               }}
//                             >
//                               {product.title}
//                             </Typography>
//                             <Typography 
//                               variant="body2" 
//                               sx={{ 
//                                 color: 'text.secondary', 
//                                 lineHeight: 1.5,
//                                 fontSize: '0.875rem',
//                                 display: '-webkit-box',
//                                 WebkitLineClamp: 3,
//                                 WebkitBoxOrient: 'vertical',
//                                 overflow: 'hidden',
//                                 mb: 2,
//                               }}
//                             >
//                               {product.desc}
//                             </Typography>
//                             <Button
//                               size="small"
//                               onClick={(event) => handleLearnMoreClick(product, event)}
//                               sx={{
//                                 color: '#4F1985',
//                                 fontWeight: 600,
//                                 textTransform: 'none',
//                                 fontSize: '0.8rem',
//                                 padding: '6px 12px',
//                                 minWidth: 'auto',
//                                 borderRadius: 2,
//                                 backgroundColor: 'rgba(79, 25, 133, 0.08)',
//                                 '&:hover': {
//                                   backgroundColor: 'rgba(79, 25, 133, 0.15)',
//                                   transform: 'scale(1.02)',
//                                 },
//                                 '&:active': {
//                                   transform: 'scale(0.98)',
//                                 },
//                                 transition: 'all 0.2s ease',
//                               }}
//                             >
//                               Learn more →
//                             </Button>
//                           </Box>
//                         </Box>
//                       ))}
//                     </Box>
//                   </Box>
//                 )}
//               </Box>
//             )}

//             {/* Desktop Contact Button */}
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
//                   flexShrink: 0,
//                   '&:hover': { 
//                     backgroundColor: '#3a1259',
//                     transform: 'scale(1.02)',
//                   },
//                   transition: 'all 0.2s ease',
//                 }}
//               >
//                 Request Demo
//               </Button>
//             )}

//             {/* Mobile Menu Icon */}
//             {isMobile && (
//               <IconButton 
//                 edge="end" 
//                 onClick={() => setDrawerOpen(true)}
//                 sx={{ flexShrink: 0 }}
//               >
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
//         sx={{
//           '& .MuiDrawer-paper': {
//             width: 280,
//             maxWidth: '80vw',
//           },
//         }}
//       >
//         <Box sx={{ width: '100%', height: '100%' }}>
//           <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
//             <Typography variant="h6" sx={{ color: '#4F1985', fontWeight: 600 }}>
//               Menu
//             </Typography>
//             <IconButton onClick={() => setDrawerOpen(false)}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Divider />
//           <List sx={{ flex: 1 }}>
//             {NAV_ITEMS.map((item) => (
//               <ListItem disablePadding key={item.label}>
//                 <ListItemButton
//                   component={item.path !== '#' ? RouterLink : 'div'}
//                   to={item.path !== '#' ? item.path : undefined}
//                   onClick={() => handleNavClick(item.label)}
//                   selected={activeTab === item.label}
//                   sx={{
//                     py: 1.5,
//                     '&.Mui-selected': {
//                       color: '#4f1985',
//                       backgroundColor: 'rgba(79, 25, 133, 0.08)',
//                       '& .MuiListItemText-primary': {
//                         fontWeight: 600,
//                       },
//                       '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         bottom: '8px',
//                         left: '16px',
//                         width: 'calc(100% - 32px)',
//                         height: '2px',
//                         backgroundColor: '#4f1985',
//                       }
//                     },
//                     '&.Mui-selected:hover': {
//                       backgroundColor: 'rgba(79, 25, 133, 0.12)',
//                     },
//                     '&:hover': {
//                       backgroundColor: theme.palette.action.hover,
//                     },
//                     position: 'relative',
//                   }}
//                 >
//                   <ListItemText
//                     primary={item.label}
//                     primaryTypographyProps={{
//                       fontWeight: activeTab === item.label ? 600 : 400,
//                       fontSize: '1rem',
//                     }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <Box p={2}>
//             <Button
//               variant="contained"
//               fullWidth
//               component={RouterLink}
//               to="/contact"
//               sx={{
//                 borderRadius: 3,
//                 backgroundColor: '#4F1985',
//                 fontWeight: 600,
//                 py: 1.5,
//                 '&:hover': { 
//                   backgroundColor: '#3a1259',
//                   transform: 'scale(1.02)',
//                 },
//                 transition: 'all 0.2s ease',
//               }}
//               onClick={() => setDrawerOpen(false)}
//             >
//               Request Demo
//             </Button>
//           </Box>
//         </Box>
//       </Drawer>
//     </>
//   );
// }


// import React, { useState, useEffect, useRef } from 'react';
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
// import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

// const NAV_ITEMS = [
//   { label: 'Home', path: '/' },
//   { label: 'Our Suite', path: '/products' },
//   { label: 'By Need', path: '#' },
//   { label: 'Resources', path: '/blogs' },
//   { label: 'About', path: '/about' },
// ];

// const PRODUCT_ITEMS = [
//   { 
//     img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Small Molecule Design', 
//     path: '/smallmoleculedesign',
//     desc: 'Transform the way you discover, design, and optimize small molecules faster, smarter.' 
//   },
//   { 
//     img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Protein Engineering', 
//     path: '/proteinengineering',
//     desc: 'Reimagine how proteins are designed, optimized, and brought to life faster, smarter, more precise.' 
//   },
//   { 
//     img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Synthetic Chemistry', 
//     path: '/syntheticchemistry',
//     desc: 'Reimagine how you design, plan, and execute synthesis—faster, greener, smarter.' 
//   },
// ];

// const BY_NEED_ITEMS = {
//   byRole: [
//     { title: 'Medicinal Chemists', path: '/medicinal-chemists' },
//     { title: 'Bioinformatics', path: '/bioinformatics' },
//     { title: 'Synthetic Chemists', path: '/synthetic-chemists' },
//     { title: 'Pharmacologists', path: '/pharmacologists' },
//     { title: 'Clinical Researchers', path: '/clinical-researchers' },
//   ],
//   byIndustry: [
//     { title: 'Pharmaceuticals & Biotechnology', path: '/pharmaceuticals-biotechnology' },
//     { title: 'Chemicals', path: '/chemicals' },
//     { title: 'Agrochemicals and Crop Science', path: '/agrochemicals' },
//     { title: 'CROs', path: '/cros' },
//     { title: 'Academic Research', path: '/academic-research' },
//     { title: 'Precision Medicine', path: '/precision-medicine' },
//     { title: 'Material Science', path: '/material-science' },
//     { title: 'Clinical Trials & Healthcare', path: '/clinical-trials' },
//   ],
// };

// const NavWrapper = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: 24,
//   padding: '4px',
//   width: '100%',
//   alignItems: 'center',
// }));

// const NavButton = styled(Button, {
//   shouldForwardProp: (prop) => prop !== 'active' && prop !== 'hovered',
// })(({ theme, active, hovered }) => ({
//   textTransform: 'none',
//   fontWeight: 500,
//   fontSize: 14,
//   padding: '4px 16px',
//   borderRadius: 20,
//   backgroundColor: active ? theme.palette.background.paper : 'transparent',
//   color: active ? '#4f1985' : theme.palette.text.primary,
//   boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
//   transition: 'all 0.3s ease',
//   flex: 1,
//   minWidth: 0,
//   whiteSpace: 'nowrap',
//   position: 'relative',
//   overflow: 'hidden',
//   '&:hover': {
//     backgroundColor: hovered ? theme.palette.action.selected : 'transparent',
//   },
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     bottom: 0,
//     left: '50%',
//     transform: hovered ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
//     width: '60%',
//     height: '2px',
//     backgroundColor: 'rgba(79, 25, 133, 0.3)',
//     transition: 'transform 0.3s ease',
//   },
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     bottom: 0,
//     left: '50%',
//     transform: active ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
//     width: '20%',
//     height: '2px',
//     backgroundColor: '#4f1985',
//     transition: 'transform 0.3s ease',
//   }
// }));

// export default function NavbarPage() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery('(max-width: 908px)');
//   const isTablet = useMediaQuery('(max-width: 1200px)');
//   const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('');
//   const [showMegaMenu, setShowMegaMenu] = useState(false);
//   const [showByNeedMenu, setShowByNeedMenu] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);
  
//   const megaMenuRef = useRef(null);
//   const byNeedMenuRef = useRef(null);
//   const navItemRef = useRef(null);
//   const byNeedItemRef = useRef(null);
//   const hideTimeoutRef = useRef(null);
//   const hideByNeedTimeoutRef = useRef(null);
//   const isMouseInsideRef = useRef(false);
//   const isByNeedMouseInsideRef = useRef(false);

//   useEffect(() => {
//     const currentItem = NAV_ITEMS.find(item => item.path === location.pathname);
//     if (currentItem) {
//       setActiveTab(currentItem.label);
//     } else {
//       setActiveTab('Home');
//     }
//   }, [location.pathname]);

//   const handleNavClick = (label) => {
//     setActiveTab(label);
//     setDrawerOpen(false);
//   };

//   const handleItemHover = (label) => {
//     setHoveredItem(label);
//   };

//   const handleItemLeave = () => {
//     setHoveredItem(null);
//   };

//   // Our Suite Menu Functions
//   const showMenu = () => {
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
//     setShowMegaMenu(true);
//     isMouseInsideRef.current = true;
//   };

//   const hideMenu = () => {
//     isMouseInsideRef.current = false;
//     hideTimeoutRef.current = setTimeout(() => {
//       if (!isMouseInsideRef.current) {
//         setShowMegaMenu(false);
//       }
//     }, 150);
//   };

//   const handleNavItemMouseEnter = () => {
//     showMenu();
//     handleItemHover('Our Suite');
//   };

//   const handleNavItemMouseLeave = () => {
//     hideMenu();
//     handleItemLeave();
//   };

//   const handleMegaMenuMouseEnter = () => {
//     showMenu();
//     handleItemHover('Our Suite');
//   };

//   const handleMegaMenuMouseLeave = () => {
//     hideMenu();
//     handleItemLeave();
//   };

//   // By Need Menu Functions
//   const openByNeedMenu = () => {
//     if (hideByNeedTimeoutRef.current) {
//       clearTimeout(hideByNeedTimeoutRef.current);
//       hideByNeedTimeoutRef.current = null;
//     }
//     setShowByNeedMenu(true);
//     isByNeedMouseInsideRef.current = true;
//   };

//   const closeByNeedMenu = () => {
//     isByNeedMouseInsideRef.current = false;
//     hideByNeedTimeoutRef.current = setTimeout(() => {
//       if (!isByNeedMouseInsideRef.current) {
//         setShowByNeedMenu(false);
//       }
//     }, 150);
//   };

//   const handleByNeedItemMouseEnter = () => {
//     openByNeedMenu();
//     handleItemHover('By Need');
//   };

//   const handleByNeedItemMouseLeave = () => {
//     closeByNeedMenu();
//     handleItemLeave();
//   };

//   const handleByNeedMenuMouseEnter = () => {
//     openByNeedMenu();
//     handleItemHover('By Need');
//   };

//   const handleByNeedMenuMouseLeave = () => {
//     closeByNeedMenu();
//     handleItemLeave();
//   };

//   const handleProductClick = (product, event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setShowMegaMenu(false);
//     isMouseInsideRef.current = false;
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
//     if (product.path) {
//       navigate(product.path);
//     }
//   };

//   const handleLearnMoreClick = (product, event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setShowMegaMenu(false);
//     isMouseInsideRef.current = false;
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
//     if (product.path) {
//       navigate(product.path);
//     }
//   };

//   const handleByNeedItemClick = (item, event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setShowByNeedMenu(false);
//     isByNeedMouseInsideRef.current = false;
//     if (hideByNeedTimeoutRef.current) {
//       clearTimeout(hideByNeedTimeoutRef.current);
//       hideByNeedTimeoutRef.current = null;
//     }
//     if (item.path) {
//       navigate(item.path);
//     }
//   };

//   useEffect(() => {
//     return () => {
//       if (hideTimeoutRef.current) {
//         clearTimeout(hideTimeoutRef.current);
//       }
//       if (hideByNeedTimeoutRef.current) {
//         clearTimeout(hideByNeedTimeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <AppBar
//         position="sticky"
//         elevation={trigger ? 4 : 0}
//         sx={{
//           backgroundColor: theme.palette.background.paper,
//           color: "#4F1985",
//           transition: 'all 0.3s ease',
//           boxShadow: trigger ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
//           height: { xs: '70px', sm: '80px' },
//           justifyContent: 'center',
//           zIndex: theme.zIndex.drawer + 1,
//         }}
//       >
//         <Toolbar sx={{ 
//           minHeight: { xs: '70px', sm: '80px' },
//           display: 'flex', 
//           justifyContent: 'center', 
//           px: { xs: 1, sm: 2 } 
//         }}>
//           <Box sx={{ 
//             width: '100%', 
//             maxWidth: '1440px', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: isMobile ? 'space-between' : 'space-evenly',
//             position: 'relative',
//             overflow: 'hidden',
//           }}>
//             {/* Logo */}
//             <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//               <img src="/logo.png" alt="Logo" height={50} style={{ marginRight: 8 }} />
//             </RouterLink>

//             {/* Desktop Navigation */}
//             {!isMobile && (
//               <Box sx={{ 
//                 flex: 1, 
//                 mx: 2,
//                 minWidth: 0,
//                 position: 'relative',
//                 display: 'flex',
//                 justifyContent: 'center'
//               }}>
//                 <NavWrapper sx={{
//                   maxWidth: '600px',
//                   minWidth: '400px',
//                 }}>
//                   {NAV_ITEMS.map((item) => {
//                     if (item.label === 'Our Suite') {
//                       return (
//                         <Box
//                           key={item.label}
//                           ref={navItemRef}
//                           onMouseEnter={handleNavItemMouseEnter}
//                           onMouseLeave={handleNavItemMouseLeave}
//                           sx={{ 
//                             position: 'relative', 
//                             display: 'flex',
//                             flex: 1,
//                           }}
//                         >
//                           <NavButton 
//                             active={activeTab === item.label}
//                             hovered={hoveredItem === item.label}
//                             sx={{ width: '100%' }}
//                           >
//                             {item.label}
//                           </NavButton>
//                         </Box>
//                       );
//                     } else if (item.label === 'By Need') {
//                       return (
//                         <Box
//                           key={item.label}
//                           ref={byNeedItemRef}
//                           onMouseEnter={handleByNeedItemMouseEnter}
//                           onMouseLeave={handleByNeedItemMouseLeave}
//                           sx={{ 
//                             position: 'relative', 
//                             display: 'flex',
//                             flex: 1,
//                           }}
//                         >
//                           <NavButton 
//                             active={activeTab === item.label}
//                             hovered={hoveredItem === item.label}
//                             sx={{ width: '100%' }}
//                           >
//                             {item.label}
//                           </NavButton>
//                         </Box>
//                       );
//                     } else {
//                       return (
//                         <Box
//                           key={item.label}
//                           onMouseEnter={() => handleItemHover(item.label)}
//                           onMouseLeave={handleItemLeave}
//                           sx={{ 
//                             position: 'relative', 
//                             display: 'flex',
//                             flex: 1,
//                           }}
//                         >
//                           <NavButton
//                             active={activeTab === item.label}
//                             hovered={hoveredItem === item.label}
//                             component={RouterLink}
//                             to={item.path}
//                             onClick={() => setActiveTab(item.label)}
//                           >
//                             {item.label}
//                           </NavButton>
//                         </Box>
//                       );
//                     }
//                   })}
//                 </NavWrapper>

//                 {/* Our Suite Mega Menu */}
//                 {showMegaMenu && (
//                   <Box
//                     ref={megaMenuRef}
//                     onMouseEnter={handleMegaMenuMouseEnter}
//                     onMouseLeave={handleMegaMenuMouseLeave}
//                     sx={{
//                       position: 'fixed',
//                       top: { xs: '70px', sm: '80px' },
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                       width: isTablet ? '90vw' : '900px',
//                       maxWidth: '1100px',
//                       backgroundColor: '#fff',
//                       boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
//                       borderRadius: '24px',
//                       zIndex: 1300,
//                       padding: 4,
//                       opacity: 0,
//                       transform: 'translateX(-50%) translateY(-10px)',
//                       animation: 'megaMenuSlideIn 0.3s ease forwards',
//                       '@keyframes megaMenuSlideIn': {
//                         '0%': { 
//                           opacity: 0, 
//                           transform: 'translateX(-50%) translateY(-10px) scale(0.95)' 
//                         },
//                         '100%': { 
//                           opacity: 1, 
//                           transform: 'translateX(-50%) translateY(0) scale(1)' 
//                         },
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: 'grid',
//                         gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
//                         gap: 3,
//                         padding: 2,
//                       }}
//                     >
//                       {PRODUCT_ITEMS.map((product, idx) => (
//                         <Box
//                           key={idx}
//                           onClick={(event) => handleProductClick(product, event)}
//                           sx={{
//                             bgcolor: '#fafafa',
//                             p: 3,
//                             borderRadius: 3,
//                             boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//                             cursor: 'pointer',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'flex-start',
//                             gap: 2,
//                             transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
//                             border: '1px solid transparent',
//                             userSelect: 'none',
//                             position: 'relative',
//                             '&:hover': {
//                               transform: 'translateY(-4px)',
//                               boxShadow: '0 16px 40px rgba(79, 25, 133, 0.2)',
//                               bgcolor: '#fff',
//                               borderColor: 'rgba(79, 25, 133, 0.1)',
//                             },
//                             '&:active': {
//                               transform: 'translateY(-2px)',
//                             },
//                             opacity: 0,
//                             transform: 'translateY(20px)',
//                             animation: `productFadeIn 0.4s ease forwards`,
//                             animationDelay: `${idx * 0.1}s`,
//                             '@keyframes productFadeIn': {
//                               to: { 
//                                 opacity: 1, 
//                                 transform: 'translateY(0)' 
//                               },
//                             },
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={product.img}
//                             alt={product.title}
//                             onError={(e) => {
//                               e.target.src = 'https://via.placeholder.com/300x140?text=Product+Image';
//                             }}
//                             sx={{
//                               width: '100%',
//                               height: 140,
//                               borderRadius: 2,
//                               objectFit: 'cover',
//                               mb: 1,
//                             }}
//                           />
//                           <Box sx={{ width: '100%' }}>
//                             <Typography 
//                               variant="h6" 
//                               sx={{ 
//                                 fontWeight: 700, 
//                                 color: '#4F1985', 
//                                 mb: 1,
//                                 fontSize: '1.1rem',
//                                 lineHeight: 1.3,
//                               }}
//                             >
//                               {product.title}
//                             </Typography>
//                             <Typography 
//                               variant="body2" 
//                               sx={{ 
//                                 color: 'text.secondary', 
//                                 lineHeight: 1.5,
//                                 fontSize: '0.875rem',
//                                 display: '-webkit-box',
//                                 WebkitLineClamp: 3,
//                                 WebkitBoxOrient: 'vertical',
//                                 overflow: 'hidden',
//                                 mb: 2,
//                               }}
//                             >
//                               {product.desc}
//                             </Typography>
//                             <Button
//                               size="small"
//                               onClick={(event) => handleLearnMoreClick(product, event)}
//                               sx={{
//                                 color: '#4F1985',
//                                 fontWeight: 600,
//                                 textTransform: 'none',
//                                 fontSize: '0.8rem',
//                                 padding: '6px 12px',
//                                 minWidth: 'auto',
//                                 borderRadius: 2,
//                                 backgroundColor: 'rgba(79, 25, 133, 0.08)',
//                                 '&:hover': {
//                                   backgroundColor: 'rgba(79, 25, 133, 0.15)',
//                                   transform: 'scale(1.02)',
//                                 },
//                                 '&:active': {
//                                   transform: 'scale(0.98)',
//                                 },
//                                 transition: 'all 0.2s ease',
//                               }}
//                             >
//                               Learn more →
//                             </Button>
//                           </Box>
//                         </Box>
//                       ))}
//                     </Box>
//                   </Box>
//                 )}

//                 {/* By Need Mega Menu */}
//                 {showByNeedMenu && (
//                   <Box
//                     ref={byNeedMenuRef}
//                     onMouseEnter={handleByNeedMenuMouseEnter}
//                     onMouseLeave={handleByNeedMenuMouseLeave}
//                     sx={{
//                       position: 'fixed',
//                       top: { xs: '70px', sm: '80px' },
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                       width: isTablet ? '90vw' : '900px',
//                       maxWidth: '1100px',
//                       backgroundColor: '#fff',
//                       boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
//                       borderRadius: '24px',
//                       zIndex: 1300,
//                       padding: 4,
//                       opacity: 0,
//                       transform: 'translateX(-50%) translateY(-10px)',
//                       animation: 'megaMenuSlideIn 0.3s ease forwards',
//                       '@keyframes megaMenuSlideIn': {
//                         '0%': { 
//                           opacity: 0, 
//                           transform: 'translateX(-50%) translateY(-10px) scale(0.95)' 
//                         },
//                         '100%': { 
//                           opacity: 1, 
//                           transform: 'translateX(-50%) translateY(0) scale(1)' 
//                         },
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: 'grid',
//                         gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
//                         gap: 4,
//                         padding: 2,
//                       }}
//                     >
//                       {/* By Role Column */}
//                       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                         <Typography 
//                           variant="h6" 
//                           sx={{ 
//                             fontWeight: 700, 
//                             color: '#4F1985', 
//                             mb: 2,
//                             fontSize: '1.2rem',
//                           }}
//                         >
//                           By Role
//                         </Typography>
//                         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                           {BY_NEED_ITEMS.byRole.map((item, idx) => (
//                             <Box
//                               key={idx}
//                               onClick={(event) => handleByNeedItemClick(item, event)}
//                               sx={{
//                                 p: 2,
//                                 borderRadius: 2,
//                                 cursor: 'pointer',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
//                                 userSelect: 'none',
//                                 '&:hover': {
//                                   backgroundColor: 'rgba(79, 25, 133, 0.08)',
//                                   transform: 'translateX(4px)',
//                                 },
//                                 '&:active': {
//                                   transform: 'translateX(2px)',
//                                 },
//                                 opacity: 0,
//                                 transform: 'translateY(20px)',
//                                 animation: `itemFadeIn 0.3s ease forwards`,
//                                 animationDelay: `${idx * 0.05}s`,
//                                 '@keyframes itemFadeIn': {
//                                   to: { 
//                                     opacity: 1, 
//                                     transform: 'translateY(0)' 
//                                   },
//                                 },
//                               }}
//                             >
//                               <Typography 
//                                 variant="body1" 
//                                 sx={{ 
//                                   color: '#333', 
//                                   fontWeight: 500,
//                                   fontSize: '0.95rem',
//                                 }}
//                               >
//                                 {item.title}
//                               </Typography>
//                             </Box>
//                           ))}
//                         </Box>
//                       </Box>

//                       {/* By Industry Column */}
//                       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                         <Typography 
//                           variant="h6" 
//                           sx={{ 
//                             fontWeight: 700, 
//                             color: '#4F1985', 
//                             mb: 2,
//                             fontSize: '1.2rem',
//                           }}
//                         >
//                           By Industry
//                         </Typography>
//                         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                           {BY_NEED_ITEMS.byIndustry.map((item, idx) => (
//                             <Box
//                               key={idx}
//                               onClick={(event) => handleByNeedItemClick(item, event)}
//                               sx={{
//                                 p: 2,
//                                 borderRadius: 2,
//                                 cursor: 'pointer',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
//                                 userSelect: 'none',
//                                 '&:hover': {
//                                   backgroundColor: 'rgba(79, 25, 133, 0.08)',
//                                   transform: 'translateX(4px)',
//                                 },
//                                 '&:active': {
//                                   transform: 'translateX(2px)',
//                                 },
//                                 opacity: 0,
//                                 transform: 'translateY(20px)',
//                                 animation: `itemFadeIn 0.3s ease forwards`,
//                                 animationDelay: `${(idx + 5) * 0.05}s`,
//                                 '@keyframes itemFadeIn': {
//                                   to: { 
//                                     opacity: 1, 
//                                     transform: 'translateY(0)' 
//                                   },
//                                 },
//                               }}
//                             >
//                               <Typography 
//                                 variant="body1" 
//                                 sx={{ 
//                                   color: '#333', 
//                                   fontWeight: 500,
//                                   fontSize: '0.95rem',
//                                 }}
//                               >
//                                 {item.title}
//                               </Typography>
//                             </Box>
//                           ))}
//                         </Box>
//                       </Box>
//                     </Box>
//                   </Box>
//                 )}
//               </Box>
//             )}

//             {/* Desktop Contact Button */}
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
//                   flexShrink: 0,
//                   '&:hover': { 
//                     backgroundColor: '#3a1259',
//                     transform: 'scale(1.02)',
//                   },
//                   transition: 'all 0.2s ease',
//                 }}
//               >
//                 Request Demo
//               </Button>
//             )}

//             {/* Mobile Menu Icon */}
//             {isMobile && (
//               <IconButton 
//                 edge="end" 
//                 onClick={() => setDrawerOpen(true)}
//                 sx={{ flexShrink: 0 }}
//               >
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
//         sx={{
//           '& .MuiDrawer-paper': {
//             width: 280,
//             maxWidth: '80vw',
//           },
//         }}
//       >
//         <Box sx={{ width: '100%', height: '100%' }}>
//           <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
//             <Typography variant="h6" sx={{ color: '#4F1985', fontWeight: 600 }}>
//               Menu
//             </Typography>
//             <IconButton onClick={() => setDrawerOpen(false)}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Divider />
//           <List sx={{ flex: 1 }}>
//             {NAV_ITEMS.map((item) => (
//               <ListItem disablePadding key={item.label}>
//                 <ListItemButton
//                   component={item.path !== '#' ? RouterLink : 'div'}
//                   to={item.path !== '#' ? item.path : undefined}
//                   onClick={() => handleNavClick(item.label)}
//                   selected={activeTab === item.label}
//                   sx={{
//                     py: 1.5,
//                     '&.Mui-selected': {
//                       color: '#4f1985',
//                       backgroundColor: 'rgba(79, 25, 133, 0.08)',
//                       '& .MuiListItemText-primary': {
//                         fontWeight: 600,
//                       },
//                       '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         bottom: '8px',
//                         left: '16px',
//                         width: 'calc(100% - 32px)',
//                         height: '2px',
//                         backgroundColor: '#4f1985',
//                       }
//                     },
//                     '&.Mui-selected:hover': {
//                       backgroundColor: 'rgba(79, 25, 133, 0.12)',
//                     },
//                     '&:hover': {
//                       backgroundColor: theme.palette.action.hover,
//                     },
//                     position: 'relative',
//                   }}
//                 >
//                   <ListItemText
//                     primary={item.label}
//                     primaryTypographyProps={{
//                       fontWeight: activeTab === item.label ? 600 : 400,
//                       fontSize: '1rem',
//                     }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <Box p={2}>
//             <Button
//               variant="contained"
//               fullWidth
//               component={RouterLink}
//               to="/contact"
//               sx={{
//                 borderRadius: 3,
//                 backgroundColor: '#4F1985',
//                 fontWeight: 600,
//                 py: 1.5,
//                 '&:hover': { 
//                   backgroundColor: '#3a1259',
//                   transform: 'scale(1.02)',
//                 },
//                 transition: 'all 0.2s ease',
//               }}
//               onClick={() => setDrawerOpen(false)}
//             >
//               Request Demo
//             </Button>
//           </Box>
//         </Box>
//       </Drawer>
//     </>
//   );
// }



// import React, { useState, useEffect, useRef } from 'react';
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
// import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

// const NAV_ITEMS = [
//   { label: 'Home', path: '/' },
//   { label: 'Our Suite', path: '/products' },
//   { label: 'Buy Need', path: '#' },
//   { label: 'Resources', path: '/blogs' },
//   { label: 'About', path: '/about' },
// ];

// const PRODUCT_ITEMS = [
//   { 
//     img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Small Molecule Design', 
//     path: '/smallmoleculedesign',
//     desc: 'Transform the way you discover, design, and optimize small molecules faster, smarter.' 
//   },
//   { 
//     img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Protein Engineering', 
//     path: '/proteinengineering',
//     desc: 'Reimagine how proteins are designed, optimized, and brought to life faster, smarter, more precise.' 
//   },
//   { 
//     img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Synthetic Chemistry', 
//     path: '/syntheticchemistry',
//     desc: 'Reimagine how you design, plan, and execute synthesis—faster, greener, smarter.' 
//   },
// ];

// const BUY_NEED_ITEMS = [
//   {
//     title: 'By Role',
//     items: [
//       { label: 'Medicinal Chemists', path: '/medicinal-chemists' },
//       { label: 'Bioinformatics', path: '/bioinformatics' },
//       { label: 'Synthetic Chemists', path: '/synthetic-chemists' },
//       { label: 'Pharmacologists', path: '/pharmacologists' },
//       { label: 'Clinical Researchers', path: '/clinical-researchers' },
//     ]
//   },
//   {
//     title: 'By Industry',
//     items: [
//       { label: 'Pharmaceuticals & Biotechnology', path: '/pharmaceuticals-biotech' },
//       { label: 'Chemicals', path: '/chemicals' },
//       { label: 'Agrochemicals and Crop Science', path: '/agrochemicals' },
//       { label: 'CROs', path: '/cros' },
//       { label: 'Academic Research', path: '/academic-research' },
//       { label: 'Precision Medicine', path: '/precision-medicine' },
//       { label: 'Material Science', path: '/material-science' },
//       { label: 'Clinical Trials & Healthcare', path: '/clinical-trials' },
//     ]
//   }
// ];

// const NavWrapper = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: 24,
//   padding: '4px',
//   width: '100%',
//   alignItems: 'center',
// }));

// const NavButton = styled(Button, {
//   shouldForwardProp: (prop) => prop !== 'active' && prop !== 'hovered',
// })(({ theme, active, hovered }) => ({
//   textTransform: 'none',
//   fontWeight: 500,
//   fontSize: 14,
//   padding: '4px 16px',
//   borderRadius: 20,
//   backgroundColor: active ? theme.palette.background.paper : 'transparent',
//   color: active ? '#4f1985' : theme.palette.text.primary,
//   boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
//   transition: 'all 0.3s ease',
//   flex: 1,
//   minWidth: 0,
//   whiteSpace: 'nowrap',
//   position: 'relative',
//   overflow: 'hidden',
//   '&:hover': {
//     backgroundColor: hovered ? theme.palette.action.selected : 'transparent',
//   },
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     bottom: 0,
//     left: '50%',
//     transform: hovered ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
//     width: '60%',
//     backgroundColor: 'rgba(79, 25, 133, 0.3)',
//     transition: 'transform 0.3s ease',
//   },
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     bottom: 0,
//     left: '50%',
//     transform: active ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
//     width: '20%',
//     backgroundColor: '#4f1985',
//     transition: 'transform 0.3s ease',
//   }
// }));

// const BuyNeedColumn = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '16px',
//   flex: 1,
//   minWidth: 0,
// }));

// const BuyNeedSection = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '8px',
// }));

// const BuyNeedTitle = styled(Typography)(({ theme }) => ({
//   fontWeight: 700,
//   fontSize: '1rem',
//   color: '#4F1985',
//   marginBottom: '4px',
// }));

// const BuyNeedItem = styled(Button)(({ theme }) => ({
//   textTransform: 'none',
//   justifyContent: 'flex-start',
//   padding: '12px 12px',
//   borderRadius: '6px',
//   color: theme.palette.text.primary,
//   fontWeight: 500,
//   fontSize: '0.9rem',
//   transition: 'all 0.2s ease',
//   '&:hover': {
//     backgroundColor: 'rgba(79, 25, 133, 0.08)',
//     color: '#4F1985',
//     transform: 'translateX(4px)',
//   },
// }));

// export default function NavbarPage() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery('(max-width: 908px)');
//   const isTablet = useMediaQuery('(max-width: 1200px)');
//   const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('');
//   const [showMegaMenu, setShowMegaMenu] = useState(false);
//   const [showBuyNeedMenu, setShowBuyNeedMenu] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);
  
//   const megaMenuRef = useRef(null);
//   const buyNeedMenuRef = useRef(null);
//   const navItemRef = useRef(null);
//   const buyNeedItemRef = useRef(null);
//   const hideTimeoutRef = useRef(null);
//   const isMouseInsideRef = useRef(false);

//   useEffect(() => {
//     const currentItem = NAV_ITEMS.find(item => item.path === location.pathname);
//     if (currentItem) {
//       setActiveTab(currentItem.label);
//     } else {
//       setActiveTab('Home');
//     }
//   }, [location.pathname]);

//   const handleNavClick = (label) => {
//     setActiveTab(label);
//     setDrawerOpen(false);
//   };

//   const handleItemHover = (label) => {
//     setHoveredItem(label);
//   };

//   const handleItemLeave = () => {
//     setHoveredItem(null);
//   };

//   const showMenu = (menuType) => {
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
//     if (menuType === 'products') {
//       setShowMegaMenu(true);
//       setShowBuyNeedMenu(false);
//     } else if (menuType === 'buyNeed') {
//       setShowBuyNeedMenu(true);
//       setShowMegaMenu(false);
//     }
//     isMouseInsideRef.current = true;
//   };

//   const hideMenu = () => {
//     isMouseInsideRef.current = false;
//     hideTimeoutRef.current = setTimeout(() => {
//       if (!isMouseInsideRef.current) {
//         setShowMegaMenu(false);
//         setShowBuyNeedMenu(false);
//       }
//     }, 150);
//   };

//   const handleNavItemMouseEnter = () => {
//     showMenu('products');
//     handleItemHover('Our Suite');
//   };

//   const handleNavItemMouseLeave = () => {
//     hideMenu();
//     handleItemLeave();
//   };

//   const handleBuyNeedMouseEnter = () => {
//     showMenu('buyNeed');
//     handleItemHover('Buy Need');
//   };

//   const handleBuyNeedMouseLeave = () => {
//     hideMenu();
//     handleItemLeave();
//   };

//   const handleMegaMenuMouseEnter = () => {
//     showMenu('products');
//     handleItemHover('Our Suite');
//   };

//   const handleMegaMenuMouseLeave = () => {
//     hideMenu();
//     handleItemLeave();
//   };

//   const handleBuyNeedMenuMouseEnter = () => {
//     showMenu('buyNeed');
//     handleItemHover('Buy Need');
//   };

//   const handleBuyNeedMenuMouseLeave = () => {
//     hideMenu();
//     handleItemLeave();
//   };

//   const handleProductClick = (product, event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setShowMegaMenu(false);
//     isMouseInsideRef.current = false;
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
//     if (product.path) {
//       navigate(product.path);
//     }
//   };

//   const handleLearnMoreClick = (product, event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setShowMegaMenu(false);
//     isMouseInsideRef.current = false;
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
//     if (product.path) {
//       navigate(product.path);
//     }
//   };

//   const handleBuyNeedItemClick = (path, event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setShowBuyNeedMenu(false);
//     isMouseInsideRef.current = false;
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
//     if (path) {
//       navigate(path);
//     }
//   };

//   useEffect(() => {
//     return () => {
//       if (hideTimeoutRef.current) {
//         clearTimeout(hideTimeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <AppBar
//         position="sticky"
//         elevation={trigger ? 4 : 0}
//         sx={{
//           backgroundColor: theme.palette.background.paper,
//           color: "#4F1985",
//           transition: 'all 0.3s ease',
//           boxShadow: trigger ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
//           height: { xs: '70px', sm: '80px' },
//           justifyContent: 'center',
//           zIndex: theme.zIndex.drawer + 1,
//         }}
//       >
//         <Toolbar sx={{ 
//           minHeight: { xs: '70px', sm: '80px' },
//           display: 'flex', 
//           justifyContent: 'center', 
//           px: { xs: 1, sm: 2 } 
//         }}>
//           <Box sx={{ 
//             width: '100%', 
//             maxWidth: '1440px', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: isMobile ? 'space-between' : 'space-evenly',
//             position: 'relative',
//             overflow: 'hidden',
//           }}>
//             {/* Logo */}
//             <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//               <img src="/logo.png" alt="Logo" height={50} style={{ marginRight: 8 }} />
//             </RouterLink>

//             {/* Desktop Navigation */}
//             {!isMobile && (
//               <Box sx={{ 
//                 flex: 1, 
//                 mx: 2,
//                 minWidth: 0,
//                 position: 'relative',
//                 display: 'flex',
//                 justifyContent: 'center'
//               }}>
//                 <NavWrapper sx={{
//                   maxWidth: '600px',
//                   minWidth: '400px',
//                 }}>
//                   {NAV_ITEMS.map((item) =>
//                     item.label === 'Our Suite' ? (
//                       <Box
//                         key={item.label}
//                         ref={navItemRef}
//                         onMouseEnter={handleNavItemMouseEnter}
//                         onMouseLeave={handleNavItemMouseLeave}
//                         sx={{ 
//                           position: 'relative', 
//                           display: 'flex',
//                           flex: 1,
//                         }}
//                       >
//                         <NavButton 
//                           active={activeTab === item.label}
//                           hovered={hoveredItem === item.label}
//                           sx={{ width: '100%' }}
//                         >
//                           {item.label}
//                         </NavButton>
//                       </Box>
//                     ) : item.label === 'Buy Need' ? (
//                       <Box
//                         key={item.label}
//                         ref={buyNeedItemRef}
//                         onMouseEnter={handleBuyNeedMouseEnter}
//                         onMouseLeave={handleBuyNeedMouseLeave}
//                         sx={{ 
//                           position: 'relative', 
//                           display: 'flex',
//                           flex: 1,
//                         }}
//                       >
//                         <NavButton 
//                           active={activeTab === item.label}
//                           hovered={hoveredItem === item.label}
//                           sx={{ width: '100%' }}
//                         >
//                           {item.label}
//                         </NavButton>
//                       </Box>
//                     ) : (
//                       <Box
//                         key={item.label}
//                         onMouseEnter={() => handleItemHover(item.label)}
//                         onMouseLeave={handleItemLeave}
//                         sx={{ 
//                           position: 'relative', 
//                           display: 'flex',
//                           flex: 1,
//                         }}
//                       >
//                         <NavButton
//                           active={activeTab === item.label}
//                           hovered={hoveredItem === item.label}
//                           component={RouterLink}
//                           to={item.path}
//                           onClick={() => setActiveTab(item.label)}
//                         >
//                           {item.label}
//                         </NavButton>
//                       </Box>
//                     )
//                   )}
//                 </NavWrapper>

//                 {/* Mega Menu for Our Suite */}
//                 {showMegaMenu && (
//                   <Box
//                     ref={megaMenuRef}
//                     onMouseEnter={handleMegaMenuMouseEnter}
//                     onMouseLeave={handleMegaMenuMouseLeave}
//                     sx={{
//                       position: 'fixed',
//                       top: { xs: '70px', sm: '80px' },
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                       width: isTablet ? '90vw' : '900px',
//                       maxWidth: '1100px',
//                       backgroundColor: '#fff',
//                       boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
//                       borderRadius: '24px',
//                       zIndex: 1300,
//                       padding: 4,
//                       opacity: 0,
//                       transform: 'translateX(-50%) translateY(-10px)',
//                       animation: 'megaMenuSlideIn 0.3s ease forwards',
//                       '@keyframes megaMenuSlideIn': {
//                         '0%': { 
//                           opacity: 0, 
//                           transform: 'translateX(-50%) translateY(-10px) scale(0.95)' 
//                         },
//                         '100%': { 
//                           opacity: 1, 
//                           transform: 'translateX(-50%) translateY(0) scale(1)' 
//                         },
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: 'grid',
//                         gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
//                         gap: 3,
//                         padding: 2,
//                       }}
//                     >
//                       {PRODUCT_ITEMS.map((product, idx) => (
//                         <Box
//                           key={idx}
//                           onClick={(event) => handleProductClick(product, event)}
//                           sx={{
//                             bgcolor: '#fafafa',
//                             p: 3,
//                             borderRadius: 3,
//                             boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//                             cursor: 'pointer',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'flex-start',
//                             gap: 2,
//                             transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
//                             border: '1px solid transparent',
//                             userSelect: 'none',
//                             position: 'relative',
//                             '&:hover': {
//                               transform: 'translateY(-4px)',
//                               boxShadow: '0 16px 40px rgba(79, 25, 133, 0.2)',
//                               bgcolor: '#fff',
//                               borderColor: 'rgba(79, 25, 133, 0.1)',
//                             },
//                             '&:active': {
//                               transform: 'translateY(-2px)',
//                             },
//                             opacity: 0,
//                             transform: 'translateY(20px)',
//                             animation: `productFadeIn 0.4s ease forwards`,
//                             animationDelay: `${idx * 0.1}s`,
//                             '@keyframes productFadeIn': {
//                               to: { 
//                                 opacity: 1, 
//                                 transform: 'translateY(0)' 
//                               },
//                             },
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={product.img}
//                             alt={product.title}
//                             onError={(e) => {
//                               e.target.src = 'https://via.placeholder.com/300x140?text=Product+Image';
//                             }}
//                             sx={{
//                               width: '100%',
//                               height: 140,
//                               borderRadius: 2,
//                               objectFit: 'cover',
//                               mb: 1,
//                             }}
//                           />
//                           <Box sx={{ width: '100%' }}>
//                             <Typography 
//                               variant="h6" 
//                               sx={{ 
//                                 fontWeight: 700, 
//                                 color: '#4F1985', 
//                                 mb: 1,
//                                 fontSize: '1.1rem',
//                                 lineHeight: 1.3,
//                               }}
//                             >
//                               {product.title}
//                             </Typography>
//                             <Typography 
//                               variant="body2" 
//                               sx={{ 
//                                 color: 'text.secondary', 
//                                 lineHeight: 1.5,
//                                 fontSize: '0.875rem',
//                                 display: '-webkit-box',
//                                 WebkitLineClamp: 3,
//                                 WebkitBoxOrient: 'vertical',
//                                 overflow: 'hidden',
//                                 mb: 2,
//                               }}
//                             >
//                               {product.desc}
//                             </Typography>
//                             <Button
//                               size="small"
//                               onClick={(event) => handleLearnMoreClick(product, event)}
//                               sx={{
//                                 color: '#4F1985',
//                                 fontWeight: 600,
//                                 textTransform: 'none',
//                                 fontSize: '0.8rem',
//                                 padding: '6px 12px',
//                                 minWidth: 'auto',
//                                 borderRadius: 2,
//                                 backgroundColor: 'rgba(79, 25, 133, 0.08)',
//                                 '&:hover': {
//                                   backgroundColor: 'rgba(79, 25, 133, 0.15)',
//                                   transform: 'scale(1.02)',
//                                 },
//                                 '&:active': {
//                                   transform: 'scale(0.98)',
//                                 },
//                                 transition: 'all 0.2s ease',
//                               }}
//                             >
//                               Learn more →
//                             </Button>
//                           </Box>
//                         </Box>
//                       ))}
//                     </Box>
//                   </Box>
//                 )}

//                 {/* Mega Menu for Buy Need */}
//                 {showBuyNeedMenu && (
//                   <Box
//                     ref={buyNeedMenuRef}
//                     onMouseEnter={handleBuyNeedMenuMouseEnter}
//                     onMouseLeave={handleBuyNeedMenuMouseLeave}
//                     sx={{
//                       position: 'fixed',
//                       top: { xs: '70px', sm: '80px' },
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                       width: isTablet ? '90vw' : '600px',
//                       maxWidth: '800px',
//                       backgroundColor: '#fff',
//                       boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
//                       borderRadius: '24px',
//                       zIndex: 1300,
//                       padding: 3,
//                       opacity: 0,
//                       transform: 'translateX(-50%) translateY(-10px)',
//                       animation: 'megaMenuSlideIn 0.3s ease forwards',
//                       '@keyframes megaMenuSlideIn': {
//                         '0%': { 
//                           opacity: 0, 
//                           transform: 'translateX(-50%) translateY(-10px) scale(0.95)' 
//                         },
//                         '100%': { 
//                           opacity: 1, 
//                           transform: 'translateX(-50%) translateY(0) scale(1)' 
//                         },
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         gap: 4,
//                         padding: 2,
//                       }}
//                     >
//                       {BUY_NEED_ITEMS.map((section, sectionIdx) => (
//                         <BuyNeedColumn key={sectionIdx}>
//                           <BuyNeedTitle>{section.title}</BuyNeedTitle>
//                           <BuyNeedSection>
//                             {section.items.map((item, itemIdx) => (
//                               <BuyNeedItem
//                                 key={itemIdx}
//                                 onClick={(event) => handleBuyNeedItemClick(item.path, event)}
//                                 sx={{
//                                   opacity: 0,
//                                   transform: 'translateX(20px)',
//                                   animation: `itemSlideIn 0.3s ease forwards`,
//                                   animationDelay: `${sectionIdx * 0.1 + itemIdx * 0.05}s`,
//                                   '@keyframes itemSlideIn': {
//                                     to: { 
//                                       opacity: 1, 
//                                       transform: 'translateX(0)' 
//                                     },
//                                   },
//                                 }}
//                               >
//                                 {item.label}
//                               </BuyNeedItem>
//                             ))}
//                           </BuyNeedSection>
//                         </BuyNeedColumn>
//                       ))}
//                     </Box>
//                   </Box>
//                 )}
//               </Box>
//             )}

//             {/* Desktop Contact Button */}
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
//                   flexShrink: 0,
//                   '&:hover': { 
//                     backgroundColor: '#3a1259',
//                     transform: 'scale(1.02)',
//                   },
//                   transition: 'all 0.2s ease',
//                 }}
//               >
//                 Request Demo
//               </Button>
//             )}

//             {/* Mobile Menu Icon */}
//             {isMobile && (
//               <IconButton 
//                 edge="end" 
//                 onClick={() => setDrawerOpen(true)}
//                 sx={{ flexShrink: 0 }}
//               >
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
//         sx={{
//           '& .MuiDrawer-paper': {
//             width: 280,
//             maxWidth: '80vw',
//           },
//         }}
//       >
//         <Box sx={{ width: '100%', height: '100%' }}>
//           <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
//             <Typography variant="h6" sx={{ color: '#4F1985', fontWeight: 600 }}>
//               Menu
//             </Typography>
//             <IconButton onClick={() => setDrawerOpen(false)}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Divider />
//           <List sx={{ flex: 1 }}>
//             {NAV_ITEMS.map((item) => (
//               <ListItem disablePadding key={item.label}>
//                 <ListItemButton
//                   component={item.path !== '#' ? RouterLink : 'div'}
//                   to={item.path !== '#' ? item.path : undefined}
//                   onClick={() => handleNavClick(item.label)}
//                   selected={activeTab === item.label}
//                   sx={{
//                     py: 1.5,
//                     '&.Mui-selected': {
//                       color: '#4f1985',
//                       backgroundColor: 'rgba(79, 25, 133, 0.08)',
//                       '& .MuiListItemText-primary': {
//                         fontWeight: 600,
//                       },
//                       '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         bottom: '8px',
//                         left: '16px',
//                         width: 'calc(100% - 32px)',
//                         height: '2px',
//                         backgroundColor: '#4f1985',
//                       }
//                     },
//                     '&.Mui-selected:hover': {
//                       backgroundColor: 'rgba(79, 25, 133, 0.12)',
//                     },
//                     '&:hover': {
//                       backgroundColor: theme.palette.action.hover,
//                     },
//                     position: 'relative',
//                   }}
//                 >
//                   <ListItemText
//                     primary={item.label}
//                     primaryTypographyProps={{
//                       fontWeight: activeTab === item.label ? 600 : 400,
//                       fontSize: '1rem',
//                     }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <Box p={2}>
//             <Button
//               variant="contained"
//               fullWidth
//               component={RouterLink}
//               to="/contact"
//               sx={{
//                 borderRadius: 3,
//                 backgroundColor: '#4F1985',
//                 fontWeight: 600,
//                 py: 1.5,
//                 '&:hover': { 
//                   backgroundColor: '#3a1259',
//                   transform: 'scale(1.02)',
//                 },
//                 transition: 'all 0.2s ease',
//               }}
//               onClick={() => setDrawerOpen(false)}
//             >
//               Request Demo
//             </Button>
//           </Box>
//         </Box>
//       </Drawer>
//     </>
//   );
// }
