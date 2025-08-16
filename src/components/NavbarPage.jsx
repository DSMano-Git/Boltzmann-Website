
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
//   flex: 1,
//   minWidth: 0,
//   whiteSpace: 'nowrap',
//   position: 'relative',
//   '&:hover': {
//     backgroundColor: active
//       ? theme.palette.background.paper
//       : theme.palette.action.selected,
//   },
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     bottom: '-8px',
//     left: '50%',
//     transform: active ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
//     width: '60%',
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
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('');
//   const [showMegaMenu, setShowMegaMenu] = useState(false);
  
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
//     setShowMegaMenu(false);
//     isMouseInsideRef.current = false;
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//       hideTimeoutRef.current = null;
//     }
//     console.log(`Navigating to ${product.title}`);
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
//     console.log(`Learn more about ${product.title}`);
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
//       {/* This Box acts as a spacer to prevent content from being hidden behind the fixed navbar */}
//       <Box sx={{ height: { xs: '70px', sm: '80px' } }} />
      
//       <AppBar
//         position="fixed"  // Changed from relative to fixed
//         elevation={trigger ? 4 : 0}
//         sx={{
//           backgroundColor: theme.palette.background.paper,
//           color: "#4F1985",
//           transition: 'all 0.3s ease',
//           boxShadow: trigger ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
//           height: { xs: '70px', sm: '80px' }, // Increased navbar height
//           justifyContent: 'center',
//           zIndex: theme.zIndex.drawer + 1,
//         }}
//       >
//         <Toolbar sx={{ 
//           minHeight: { xs: '70px', sm: '80px' }, // Match AppBar height
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
//              <img src="/logo.png" alt="Logo" height={50} style={{ marginRight: 8 }} />
//              </RouterLink>

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
//                           sx={{ width: '100%' }}
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
//                       position: 'fixed',
//                       top: { xs: '70px', sm: '80px' }, // Adjusted to match navbar height
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
//     title: 'Small Molecule Design', 
//     path: 'about',
//     desc: 'Transform the way you discover, design, and optimize small molecules faster, smarter.' 
//   },
//   { 
//     img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Protein Engineering', 
//     path: '/product-two',
//     desc: 'Reimagine how proteins are designed, optimized, and brought to life faster, smarter, more precise.' 
//   },
//   { 
//     img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80', 
//     title: 'Synthetic Chemistry', 
//     path: '/product-three',
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
//     height: '2px',
//     backgroundColor: 'rgba(79, 25, 133, 0.3)',
//     transition: 'transform 0.3s ease',
//   },

//   //underline
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
//     console.log(`Navigating to ${product.title}`);
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
//     console.log(`Learn more about ${product.title}`);
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
//       {/* This Box acts as a spacer to prevent content from being hidden behind the fixed navbar */}
      
      
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
//              <img src="/logo.png" alt="Logo" height={50} style={{ marginRight: 8 }} />
//              </RouterLink>

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

import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useScrollTrigger,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme, styled } from '@mui/material/styles';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Our Suite', path: '/products' },
  { label: 'Buy Need', path: '#' },
  { label: 'Resources', path: '/blogs' },
  { label: 'About', path: '/about' },
];

const PRODUCT_ITEMS = [
  { 
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80', 
    title: 'Small Molecule Design', 
    path: '/smallmoleculedesign', // Changed to navigate to About page
    desc: 'Transform the way you discover, design, and optimize small molecules faster, smarter.' 
  },
  { 
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', 
    title: 'Protein Engineering', 
    path: '/proteinengineering',
    desc: 'Reimagine how proteins are designed, optimized, and brought to life faster, smarter, more precise.' 
  },
  { 
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80', 
    title: 'Synthetic Chemistry', 
    path: '/syntheticchemistry',
    desc: 'Reimagine how you design, plan, and execute synthesis—faster, greener, smarter.' 
  },
];

const NavWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.action.hover,
  borderRadius: 24,
  padding: '4px',
  width: '100%',
  alignItems: 'center',
}));

const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'hovered',
})(({ theme, active, hovered }) => ({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: 14,
  padding: '4px 16px',
  borderRadius: 20,
  backgroundColor: active ? theme.palette.background.paper : 'transparent',
  color: active ? '#4f1985' : theme.palette.text.primary,
  boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
  transition: 'all 0.3s ease',
  flex: 1,
  minWidth: 0,
  whiteSpace: 'nowrap',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    backgroundColor: hovered ? theme.palette.action.selected : 'transparent',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: hovered ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
    width: '60%',
    height: '2px',
    backgroundColor: 'rgba(79, 25, 133, 0.3)',
    transition: 'transform 0.3s ease',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: active ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
    width: '20%',
    height: '2px',
    backgroundColor: '#4f1985',
    transition: 'transform 0.3s ease',
  }
}));

export default function NavbarPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 908px)');
  const isTablet = useMediaQuery('(max-width: 1200px)');
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
  const location = useLocation();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const megaMenuRef = useRef(null);
  const navItemRef = useRef(null);
  const hideTimeoutRef = useRef(null);
  const isMouseInsideRef = useRef(false);

  useEffect(() => {
    const currentItem = NAV_ITEMS.find(item => item.path === location.pathname);
    if (currentItem) {
      setActiveTab(currentItem.label);
    } else {
      setActiveTab('Home');
    }
  }, [location.pathname]);

  const handleNavClick = (label) => {
    setActiveTab(label);
    setDrawerOpen(false);
  };

  const handleItemHover = (label) => {
    setHoveredItem(label);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  const showMenu = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setShowMegaMenu(true);
    isMouseInsideRef.current = true;
  };

  const hideMenu = () => {
    isMouseInsideRef.current = false;
    hideTimeoutRef.current = setTimeout(() => {
      if (!isMouseInsideRef.current) {
        setShowMegaMenu(false);
      }
    }, 150);
  };

  const handleNavItemMouseEnter = () => {
    showMenu();
    handleItemHover('Our Suite');
  };

  const handleNavItemMouseLeave = () => {
    hideMenu();
    handleItemLeave();
  };

  const handleMegaMenuMouseEnter = () => {
    showMenu();
    handleItemHover('Our Suite');
  };

  const handleMegaMenuMouseLeave = () => {
    hideMenu();
    handleItemLeave();
  };

  const handleProductClick = (product, event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowMegaMenu(false);
    isMouseInsideRef.current = false;
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    if (product.path) {
      navigate(product.path);
    }
  };

  const handleLearnMoreClick = (product, event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowMegaMenu(false);
    isMouseInsideRef.current = false;
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    if (product.path) {
      navigate(product.path);
    }
  };

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: "#4F1985",
          transition: 'all 0.3s ease',
          boxShadow: trigger ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
          height: { xs: '70px', sm: '80px' },
          justifyContent: 'center',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ 
          minHeight: { xs: '70px', sm: '80px' },
          display: 'flex', 
          justifyContent: 'center', 
          px: { xs: 1, sm: 2 } 
        }}>
          <Box sx={{ 
            width: '100%', 
            maxWidth: '1440px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: isMobile ? 'space-between' : 'space-evenly',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Logo */}
            <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src="/logo.png" alt="Logo" height={50} style={{ marginRight: 8 }} />
            </RouterLink>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ 
                flex: 1, 
                mx: 2,
                minWidth: 0,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <NavWrapper sx={{
                  maxWidth: '600px',
                  minWidth: '400px',
                }}>
                  {NAV_ITEMS.map((item) =>
                    item.label === 'Our Suite' ? (
                      <Box
                        key={item.label}
                        ref={navItemRef}
                        onMouseEnter={handleNavItemMouseEnter}
                        onMouseLeave={handleNavItemMouseLeave}
                        sx={{ 
                          position: 'relative', 
                          display: 'flex',
                          flex: 1,
                        }}
                      >
                        <NavButton 
                          active={activeTab === item.label}
                          hovered={hoveredItem === item.label}
                          sx={{ width: '100%' }}
                        >
                          {item.label}
                        </NavButton>
                      </Box>
                    ) : (
                      <Box
                        key={item.label}
                        onMouseEnter={() => handleItemHover(item.label)}
                        onMouseLeave={handleItemLeave}
                        sx={{ 
                          position: 'relative', 
                          display: 'flex',
                          flex: 1,
                        }}
                      >
                        <NavButton
                          active={activeTab === item.label}
                          hovered={hoveredItem === item.label}
                          component={RouterLink}
                          to={item.path}
                          onClick={() => setActiveTab(item.label)}
                        >
                          {item.label}
                        </NavButton>
                      </Box>
                    )
                  )}
                </NavWrapper>

                {/* Mega Menu */}
                {showMegaMenu && (
                  <Box
                    ref={megaMenuRef}
                    onMouseEnter={handleMegaMenuMouseEnter}
                    onMouseLeave={handleMegaMenuMouseLeave}
                    sx={{
                      position: 'fixed',
                      top: { xs: '70px', sm: '80px' },
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: isTablet ? '90vw' : '900px',
                      maxWidth: '1100px',
                      backgroundColor: '#fff',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                      borderRadius: '24px',
                      zIndex: 1300,
                      padding: 4,
                      opacity: 0,
                      transform: 'translateX(-50%) translateY(-10px)',
                      animation: 'megaMenuSlideIn 0.3s ease forwards',
                      '@keyframes megaMenuSlideIn': {
                        '0%': { 
                          opacity: 0, 
                          transform: 'translateX(-50%) translateY(-10px) scale(0.95)' 
                        },
                        '100%': { 
                          opacity: 1, 
                          transform: 'translateX(-50%) translateY(0) scale(1)' 
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                        gap: 3,
                        padding: 2,
                      }}
                    >
                      {PRODUCT_ITEMS.map((product, idx) => (
                        <Box
                          key={idx}
                          onClick={(event) => handleProductClick(product, event)}
                          sx={{
                            bgcolor: '#fafafa',
                            p: 3,
                            borderRadius: 3,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 2,
                            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                            border: '1px solid transparent',
                            userSelect: 'none',
                            position: 'relative',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: '0 16px 40px rgba(79, 25, 133, 0.2)',
                              bgcolor: '#fff',
                              borderColor: 'rgba(79, 25, 133, 0.1)',
                            },
                            '&:active': {
                              transform: 'translateY(-2px)',
                            },
                            opacity: 0,
                            transform: 'translateY(20px)',
                            animation: `productFadeIn 0.4s ease forwards`,
                            animationDelay: `${idx * 0.1}s`,
                            '@keyframes productFadeIn': {
                              to: { 
                                opacity: 1, 
                                transform: 'translateY(0)' 
                              },
                            },
                          }}
                        >
                          <Box
                            component="img"
                            src={product.img}
                            alt={product.title}
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/300x140?text=Product+Image';
                            }}
                            sx={{
                              width: '100%',
                              height: 140,
                              borderRadius: 2,
                              objectFit: 'cover',
                              mb: 1,
                            }}
                          />
                          <Box sx={{ width: '100%' }}>
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                fontWeight: 700, 
                                color: '#4F1985', 
                                mb: 1,
                                fontSize: '1.1rem',
                                lineHeight: 1.3,
                              }}
                            >
                              {product.title}
                            </Typography>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: 'text.secondary', 
                                lineHeight: 1.5,
                                fontSize: '0.875rem',
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                mb: 2,
                              }}
                            >
                              {product.desc}
                            </Typography>
                            <Button
                              size="small"
                              onClick={(event) => handleLearnMoreClick(product, event)}
                              sx={{
                                color: '#4F1985',
                                fontWeight: 600,
                                textTransform: 'none',
                                fontSize: '0.8rem',
                                padding: '6px 12px',
                                minWidth: 'auto',
                                borderRadius: 2,
                                backgroundColor: 'rgba(79, 25, 133, 0.08)',
                                '&:hover': {
                                  backgroundColor: 'rgba(79, 25, 133, 0.15)',
                                  transform: 'scale(1.02)',
                                },
                                '&:active': {
                                  transform: 'scale(0.98)',
                                },
                                transition: 'all 0.2s ease',
                              }}
                            >
                              Learn more →
                            </Button>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
            )}

            {/* Desktop Contact Button */}
            {!isMobile && (
              <Button
                variant="contained"
                component={RouterLink}
                to="/contact"
                sx={{
                  textTransform: 'none',
                  fontSize: 13,
                  borderRadius: 2,
                  px: 2,
                  py: 0.5,
                  height: 35,
                  backgroundColor: '#4F1985',
                  flexShrink: 0,
                  '&:hover': { 
                    backgroundColor: '#3a1259',
                    transform: 'scale(1.02)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                Request Demo
              </Button>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton 
                edge="end" 
                onClick={() => setDrawerOpen(true)}
                sx={{ flexShrink: 0 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer 
        anchor="right" 
        open={drawerOpen} 
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            maxWidth: '80vw',
          },
        }}
      >
        <Box sx={{ width: '100%', height: '100%' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
            <Typography variant="h6" sx={{ color: '#4F1985', fontWeight: 600 }}>
              Menu
            </Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List sx={{ flex: 1 }}>
            {NAV_ITEMS.map((item) => (
              <ListItem disablePadding key={item.label}>
                <ListItemButton
                  component={item.path !== '#' ? RouterLink : 'div'}
                  to={item.path !== '#' ? item.path : undefined}
                  onClick={() => handleNavClick(item.label)}
                  selected={activeTab === item.label}
                  sx={{
                    py: 1.5,
                    '&.Mui-selected': {
                      color: '#4f1985',
                      backgroundColor: 'rgba(79, 25, 133, 0.08)',
                      '& .MuiListItemText-primary': {
                        fontWeight: 600,
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '8px',
                        left: '16px',
                        width: 'calc(100% - 32px)',
                        height: '2px',
                        backgroundColor: '#4f1985',
                      }
                    },
                    '&.Mui-selected:hover': {
                      backgroundColor: 'rgba(79, 25, 133, 0.12)',
                    },
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                    position: 'relative',
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: activeTab === item.label ? 600 : 400,
                      fontSize: '1rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box p={2}>
            <Button
              variant="contained"
              fullWidth
              component={RouterLink}
              to="/contact"
              sx={{
                borderRadius: 3,
                backgroundColor: '#4F1985',
                fontWeight: 600,
                py: 1.5,
                '&:hover': { 
                  backgroundColor: '#3a1259',
                  transform: 'scale(1.02)',
                },
                transition: 'all 0.2s ease',
              }}
              onClick={() => setDrawerOpen(false)}
            >
              Request Demo
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}