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
// import ScienceIcon from '@mui/icons-material/Science';
// import BiotechIcon from '@mui/icons-material/Biotech';
// import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
// import SchoolIcon from '@mui/icons-material/School';
// import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
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
//     icon: <PrecisionManufacturingIcon sx={{ color: '#4F1985', fontSize: '1.2rem' }} />,
//     items: [
//       { label: 'Medicinal Chemists', path: '/medicinal-chemists', icon: <ScienceIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
//       { label: 'Bioinformatics', path: '/bioinformatics', icon: <BiotechIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
//       { label: 'Synthetic Chemists', path: '/synthetic-chemists', icon: <LocalPharmacyIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
//       { label: 'Pharmacologists', path: '/pharmacologists', icon: <ScienceIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
//       { label: 'Clinical Researchers', path: '/clinical-researchers', icon: <SchoolIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
//     ]
//   },
//   {
//     title: 'By Industry',
//     icon: <SchoolIcon sx={{ color: '#4F1985', fontSize: '1.2rem' }} />,
//     items: [
//       { label: 'Pharmaceuticals & Biotechnology', path: '/pharmaceuticals-biotech', icon: <BiotechIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
//       { label: 'Chemicals', path: '/chemicals', icon: <ScienceIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
//       { label: 'Agrochemicals and Crop Science', path: '/agrochemicals', icon: <ScienceIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
//       { label: 'CROs', path: '/cros', icon: <PrecisionManufacturingIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
//       { label: 'Academic Research', path: '/academic-research', icon: <SchoolIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
//       { label: 'Precision Medicine', path: '/precision-medicine', icon: <PrecisionManufacturingIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
//       { label: 'Material Science', path: '/material-science', icon: <ScienceIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
//       { label: 'Clinical Trials & Healthcare', path: '/clinical-trials', icon: <LocalPharmacyIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
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

// '&::before': {
//   content: '""',
//   position: 'absolute',
//   bottom: 2,
//   left: '50%',
//   height: 2,
//   transform: !active && hovered ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
//   width: '60%',
//   backgroundColor: 'rgba(79, 25, 133, 0.3)',
//   borderRadius: 2,
//   transition: 'transform 0.3s ease',
// },


//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     bottom: 2,
//     left: '50%',
//     height: 2,
//     transform: active ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
//     width: '30%',
//     backgroundColor: '#4f1985',
//     borderRadius: 2,
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

// const BuyNeedTitle = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '8px',
//   fontWeight: 700,
//   fontSize: '1rem',
//   color: '#4F1985',
//   marginBottom: '12px',
//   paddingBottom: '4px',
//   borderBottom: '2px solid rgba(79, 25, 133, 0.2)',
//   whiteSpace: 'nowrap',
// }));

// const BuyNeedItem = styled(Button)(({ theme }) => ({
//   textTransform: 'none',
//   justifyContent: 'flex-start',
//   padding: '8px 12px',
//   borderRadius: '6px',
//   color: theme.palette.text.primary,
//   fontWeight: 500,
//   fontSize: '0.9rem',
//   transition: 'all 0.2s ease',
//   display: 'flex',
//   alignItems: 'center',
//   gap: '8px',
//   whiteSpace: 'nowrap',
//   minWidth: 'max-content',
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
//                       width: isTablet ? '90vw' : '750px', // Increased width
//                       maxWidth: '900px', // Increased max width
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
//                         gap: 6, // Increased gap between columns
//                         padding: 2,
//                       }}
//                     >
//                       {BUY_NEED_ITEMS.map((section, sectionIdx) => (
//                         <BuyNeedColumn key={sectionIdx}>
//                           <BuyNeedTitle>
//                             {section.icon}
//                             {section.title}
//                           </BuyNeedTitle>
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
//                                 {item.icon}
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
import ScienceIcon from '@mui/icons-material/Science';
import BiotechIcon from '@mui/icons-material/Biotech';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import SchoolIcon from '@mui/icons-material/School';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { useTheme, styled, keyframes } from '@mui/material/styles';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Our Suite', path: '/products' },
  { label: 'Buy Need', path: '#' },
  { label: 'Resources', path: '/blogs' },
  { label: 'About', path: '/about' }
];

const NAV_ITEMS_WITH_CONTACT = [
  { label: 'Home', path: '/' },
  { label: 'Our Suite', path: '/products' },
  { label: 'Buy Need', path: '#' },
  { label: 'Resources', path: '/blogs' },
  { label: 'About', path: '/about' },
  { label: 'Contact Us', path: '/contact' }
];

const PRODUCT_ITEMS = [
  { 
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80', 
    title: 'Small Molecule Design', 
    path: '/smallmoleculedesign',
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

const BUY_NEED_ITEMS = [
  {
    title: 'By Role',
    icon: <PrecisionManufacturingIcon sx={{ color: '#4F1985', fontSize: '1.2rem' }} />,
    items: [
      { label: 'Medicinal Chemists', path: '/medicinal-chemists', icon: <ScienceIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
      { label: 'Bioinformatics', path: '/bioinformatics', icon: <BiotechIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
      { label: 'Synthetic Chemists', path: '/synthetic-chemists', icon: <LocalPharmacyIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
      { label: 'Pharmacologists', path: '/pharmacologists', icon: <ScienceIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
      { label: 'Clinical Researchers', path: '/clinical-researchers', icon: <SchoolIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
    ]
  },
  {
    title: 'By Industry',
    icon: <SchoolIcon sx={{ color: '#4F1985', fontSize: '1.2rem' }} />,
    items: [
      { label: 'Pharmaceuticals & Biotechnology', path: '/pharmaceuticals-biotech', icon: <BiotechIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
      { label: 'Chemicals', path: '/chemicals', icon: <ScienceIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
      { label: 'Agrochemicals and Crop Science', path: '/agrochemicals', icon: <ScienceIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
      { label: 'CROs', path: '/cros', icon: <PrecisionManufacturingIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
      { label: 'Academic Research', path: '/academic-research', icon: <SchoolIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
      { label: 'Precision Medicine', path: '/precision-medicine', icon: <PrecisionManufacturingIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
      { label: 'Material Science', path: '/material-science', icon: <ScienceIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
      { label: 'Clinical Trials & Healthcare', path: '/clinical-trials', icon: <LocalPharmacyIcon fontSize="small" sx={{ color: '#4F1985' }} /> },
    ]
  }
];

// Enhanced smooth animations
const megaMenuSlideIn = keyframes`
  0% { 
    opacity: 0; 
    transform: translateX(-50%) translateY(-15px) scale(0.96);
    filter: blur(3px);
  }
  100% { 
    opacity: 1; 
    transform: translateX(-50%) translateY(0) scale(1);
    filter: blur(0px);
  }
`;

const productFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px) scale(0.96);
  }
  to { 
    opacity: 1; 
    transform: translateY(0) scale(1);
  }
`;

const itemSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(25px);
  }
  to { 
    opacity: 1; 
    transform: translateX(0);
  }
`;

const NavWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.action.hover,
  borderRadius: 24,
  padding: '4px',
  width: '100%',
  alignItems: 'center',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
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
  boxShadow: active ? '0 2px 8px rgba(79, 25, 133, 0.12)' : 'none',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  flex: 1,
  minWidth: 0,
  whiteSpace: 'nowrap',
  position: 'relative',
  overflow: 'hidden',

  '&:hover': {
    backgroundColor: hovered ? theme.palette.action.selected : 'transparent',
    transform: active ? 'none' : 'translateY(-1px)',
    boxShadow: hovered && !active ? '0 4px 12px rgba(79, 25, 133, 0.08)' : active ? '0 2px 8px rgba(79, 25, 133, 0.12)' : 'none',
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 2,
    left: '50%',
    height: 2,
    transform: !active && hovered ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
    width: '60%',
    backgroundColor: 'rgba(79, 25, 133, 0.3)',
    borderRadius: 2,
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 2,
    left: '50%',
    height: 2,
    transform: active ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
    width: '30%',
    backgroundColor: '#4f1985',
    borderRadius: 2,
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  }
}));

const BuyNeedColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  flex: 1,
  minWidth: 0,
}));

const BuyNeedSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}));

const BuyNeedTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: 700,
  fontSize: '1rem',
  color: '#4F1985',
  marginBottom: '12px',
  paddingBottom: '4px',
  borderBottom: '2px solid rgba(79, 25, 133, 0.2)',
  whiteSpace: 'nowrap',
}));

const BuyNeedItem = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  justifyContent: 'flex-start',
  padding: '8px 12px',
  borderRadius: '6px',
  color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: '0.9rem',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  whiteSpace: 'nowrap',
  minWidth: 'max-content',
  '&:hover': {
    backgroundColor: 'rgba(79, 25, 133, 0.08)',
    color: '#4F1985',
    transform: 'translateX(6px) scale(1.01)',
  },
}));

export default function NavbarPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const isTablet = useMediaQuery('(max-width: 1200px)');
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
  const location = useLocation();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showBuyNeedMenu, setShowBuyNeedMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  // Determine if we're on the contact page
  const isContactPage = location.pathname === '/contact';
  
  // Choose which nav items to show based on current page
  const currentNavItems = isContactPage ? NAV_ITEMS_WITH_CONTACT : NAV_ITEMS;
  
  const megaMenuRef = useRef(null);
  const buyNeedMenuRef = useRef(null);
  const navItemRef = useRef(null);
  const buyNeedItemRef = useRef(null);
  const hideTimeoutRef = useRef(null);
  const isMouseInsideRef = useRef(false);

  useEffect(() => {
    const currentItem = currentNavItems.find(item => item.path === location.pathname);
    if (currentItem) {
      setActiveTab(currentItem.label);
    } else {
      setActiveTab('Home');
    }
  }, [location.pathname, currentNavItems]);

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

  const showMenu = (menuType) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    if (menuType === 'products') {
      setShowMegaMenu(true);
      setShowBuyNeedMenu(false);
    } else if (menuType === 'buyNeed') {
      setShowBuyNeedMenu(true);
      setShowMegaMenu(false);
    }
    isMouseInsideRef.current = true;
  };

  const hideMenu = () => {
    isMouseInsideRef.current = false;
    hideTimeoutRef.current = setTimeout(() => {
      if (!isMouseInsideRef.current) {
        setShowMegaMenu(false);
        setShowBuyNeedMenu(false);
      }
    }, 150);
  };

  const handleNavItemMouseEnter = () => {
    showMenu('products');
    handleItemHover('Our Suite');
  };

  const handleNavItemMouseLeave = () => {
    hideMenu();
    handleItemLeave();
  };

  const handleBuyNeedMouseEnter = () => {
    showMenu('buyNeed');
    handleItemHover('Buy Need');
  };

  const handleBuyNeedMouseLeave = () => {
    hideMenu();
    handleItemLeave();
  };

  const handleMegaMenuMouseEnter = () => {
    showMenu('products');
    handleItemHover('Our Suite');
  };

  const handleMegaMenuMouseLeave = () => {
    hideMenu();
    handleItemLeave();
  };

  const handleBuyNeedMenuMouseEnter = () => {
    showMenu('buyNeed');
    handleItemHover('Buy Need');
  };

  const handleBuyNeedMenuMouseLeave = () => {
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

  const handleBuyNeedItemClick = (path, event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowBuyNeedMenu(false);
    isMouseInsideRef.current = false;
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    if (path) {
      navigate(path);
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
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: trigger ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
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
              <img 
                src="/logo.png" 
                alt="Logo" 
                height={50} 
                style={{ 
                  marginRight: 8,
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }} 
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
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
                  maxWidth: isContactPage ? '700px' : '600px',
                  minWidth: isContactPage ? '500px' : '400px',
                }}>
                  {currentNavItems.map((item) =>
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
                    ) : item.label === 'Buy Need' ? (
                      <Box
                        key={item.label}
                        ref={buyNeedItemRef}
                        onMouseEnter={handleBuyNeedMouseEnter}
                        onMouseLeave={handleBuyNeedMouseLeave}
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

                {/* Mega Menu for Our Suite */}
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
                      boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                      borderRadius: '24px',
                      zIndex: 1300,
                      padding: 4,
                      animation: `${megaMenuSlideIn} 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
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
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            border: '1px solid transparent',
                            userSelect: 'none',
                            position: 'relative',
                            '&:hover': {
                              transform: 'translateY(-6px) scale(1.01)',
                              boxShadow: '0 20px 40px rgba(79, 25, 133, 0.15)',
                              bgcolor: '#fff',
                              borderColor: 'rgba(79, 25, 133, 0.1)',
                            },
                            '&:active': {
                              transform: 'translateY(-3px) scale(1.005)',
                            },
                            opacity: 0,
                            transform: 'translateY(20px)',
                            animation: `${productFadeIn} 0.4s ease forwards`,
                            animationDelay: `${idx * 0.1}s`,
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
                              transition: 'transform 0.3s ease',
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

                {/* Mega Menu for Buy Need */}
                {showBuyNeedMenu && (
                  <Box
                    ref={buyNeedMenuRef}
                    onMouseEnter={handleBuyNeedMenuMouseEnter}
                    onMouseLeave={handleBuyNeedMenuMouseLeave}
                    sx={{
                      position: 'fixed',
                      top: { xs: '70px', sm: '80px' },
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: isTablet ? '90vw' : '750px',
                      maxWidth: '900px',
                      backgroundColor: '#fff',
                      boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                      borderRadius: '24px',
                      zIndex: 1300,
                      padding: 3,
                      animation: `${megaMenuSlideIn} 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 6,
                        padding: 2,
                      }}
                    >
                      {BUY_NEED_ITEMS.map((section, sectionIdx) => (
                        <BuyNeedColumn key={sectionIdx}>
                          <BuyNeedTitle>
                            {section.icon}
                            {section.title}
                          </BuyNeedTitle>
                          <BuyNeedSection>
                            {section.items.map((item, itemIdx) => (
                              <BuyNeedItem
                                key={itemIdx}
                                onClick={(event) => handleBuyNeedItemClick(item.path, event)}
                                sx={{
                                  opacity: 0,
                                  transform: 'translateX(20px)',
                                  animation: `${itemSlideIn} 0.3s ease forwards`,
                                  animationDelay: `${sectionIdx * 0.1 + itemIdx * 0.05}s`,
                                }}
                              >
                                {item.icon}
                                {item.label}
                              </BuyNeedItem>
                            ))}
                          </BuyNeedSection>
                        </BuyNeedColumn>
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
            )}

            {/* Desktop Contact Button - Only show if NOT on contact page */}
            {!isMobile && !isContactPage && (
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
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': { 
                    backgroundColor: '#3a1259',
                    transform: 'translateY(-2px) scale(1.02)',
                    
                  },
                  '&:active': {
                    transform: 'translateY(0) scale(0.98)',
                  }
                }}
                onClick={() => setActiveTab('Contact Us')}
              >
                Request Demo
              </Button>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton 
                edge="end" 
                onClick={() => setDrawerOpen(true)}
                sx={{ 
                  flexShrink: 0,
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'scale(1.1) rotate(90deg)',
                  }
                }}
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
            backgroundColor: '#fff',
          },
          '& .MuiBackdrop-root': {
            backdropFilter: 'blur(4px)',
            backgroundColor: 'rgba(0,0,0,0.3)',
          },
        }}
      >
        <Box sx={{ width: '100%', height: '100%' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
            <Typography variant="h6" sx={{ color: '#4F1985', fontWeight: 600 }}>
              Menu
            </Typography>
            <IconButton 
              onClick={() => setDrawerOpen(false)}
              sx={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'rotate(90deg) scale(1.1)',
                  backgroundColor: 'rgba(79, 25, 133, 0.1)',
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List sx={{ flex: 1 }}>
            {currentNavItems.map((item) => (
              <ListItem disablePadding key={item.label}>
                <ListItemButton
                  component={item.path !== '#' ? RouterLink : 'div'}
                  to={item.path !== '#' ? item.path : undefined}
                  onClick={() => handleNavClick(item.label)}
                  selected={activeTab === item.label}
                  sx={{
                    py: 1.5,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&.Mui-selected': {
                      color: '#4f1985',
                      backgroundColor: 'rgba(79, 25, 133, 0.08)',
                      transform: 'translateX(8px)',
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
                        borderRadius: '1px',
                      }
                    },
                    '&.Mui-selected:hover': {
                      backgroundColor: 'rgba(79, 25, 133, 0.12)',
                      transform: 'translateX(12px) scale(1.01)',
                    },
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                      transform: 'translateX(4px)',
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
          {/* Mobile Contact Button - Only show if NOT on contact page */}
          {!isContactPage && (
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
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': { 
                    backgroundColor: '#3a1259',
                    transform: 'translateY(-2px) scale(1.02)',
                   
                  },
                  '&:active': {
                    transform: 'translateY(0) scale(0.98)',
                  }
                }}
                onClick={() => {
                  setDrawerOpen(false);
                  setActiveTab('Contact Us');
                }}
              >
                Request Demo
              </Button>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
}