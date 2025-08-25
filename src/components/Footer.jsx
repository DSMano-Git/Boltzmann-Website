// import React from 'react';
// import { Box, Typography, Link, Grid, Container } from '@mui/material';
// import { LinkedIn, Instagram } from '@mui/icons-material';
// import XIcon from '@mui/icons-material/X';

// export default function Footer() {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         width: '100%',
//         borderTop: '1px solid rgba(0, 0, 0, 0.12)',
//         backgroundColor: '#fff',
//         px: { xs: 2, sm: 4 },
//         py: { xs: 4, sm: 6 },
//         fontFamily: "'Inria Serif', serif",
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Logo Row */}
//         <Box
//           sx={{
//             mb: 4,
//             textAlign: { xs: 'center', md: 'left' },
//             display: 'flex',
//             justifyContent: { xs: 'center', md: 'flex-start' },
//           }}
//         >
//           <Link href="#" underline="none">
//             <img
//               src="/logo.png"
//               alt="Boltzmann Labs Logo"
//               style={{
//                 height: 80,
//                 maxWidth: '100%',
//                 objectFit: 'contain',
//               }}
//             />
//           </Link>
//         </Box>

//         {/* Columns Grid */}
//         <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} justifyContent="space-evenly">
//           {/* Contact Column */}
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography
//               variant="h6"
//               component="h3"
//               sx={{
//                 fontWeight: 700,
//                 fontSize: '1.3rem',
//                 mb: 3,
//                 pb: 1,
//                 borderBottom: '2px solid #4F1985',
//                 display: 'inline-block',
//                 fontFamily: "'Inria Serif', serif",
//               }}
//             >
//               Contact
//             </Typography>
//             <Box component="address" sx={{ fontStyle: 'normal' }}>
//               <Typography component="p" sx={{ mb: 2, fontSize: '1.1rem' }}>
//                 <Link
//                   href="mailto:contact@boltzmann.co"
//                   color="inherit"
//                   underline="hover"
//                   sx={{
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: 0.5,
//                     fontFamily: "times",
//                   }}
//                 >
//                   contact@boltzmann.co
//                 </Link>
//               </Typography>
//               <Typography component="p" sx={{ mb: 2, fontSize: '1.1rem' }}>
//                 <Link
//                   href="tel:+919498866488"
//                   color="inherit"
//                   underline="hover"
//                   sx={{
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: 0.5,
//                     fontFamily: "'Inria Serif', serif",
//                   }}
//                 >
//                   +91 9498866488
//                 </Link>
//               </Typography>
// <p style={{fontFamily: 'times',fontSize: '1.1rem'}}>

//      B Block, Asian Sun City, 309,
//                 <br />
//                 Forest Dept Colony, Kondapur,
//                 <br />
//                 Hyderabad, Telangana 500084
                
              

//               </p>
//             </Box>
//           </Grid>

//           {/* Quick Links Column */}
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography
//               variant="h6"
//               component="h3"
//               sx={{
//                 fontWeight: 700,
//                 fontSize: '1.3rem',
//                 mb: 3,
//                 pb: 1,
//                 borderBottom: '2px solid #4F1985',
//                 display: 'inline-block',
//                 fontFamily: "'Inria Serif', serif",
//               }}
//             >
//               Quick Links
//             </Typography>
//             <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
//               {[
//                 { label: 'Home', href: '/' },
//                 { label: 'About', href: '/about' },
//                 { label: 'Boltzmann AI Suite', href: '/oursuite' },
//                 // { label: 'Careers', href: '#' },
//               ].map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   color="inherit"
//                   underline="hover"
//                   sx={{
//                     fontSize: '1.1rem',
//                     fontFamily: "'Inria Serif', serif",
//                     '&:hover': {
//                       color: '#4F1985',
//                     },
//                   }}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </Box>
//           </Grid>

//           {/* Resources Column */}
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography
//               variant="h6"
//               component="h3"
//               sx={{
//                 fontWeight: 700,
//                 fontSize: '1.3rem',
//                 mb: 3,
//                 pb: 1,
//                 borderBottom: '2px solid #4F1985',
//                 display: 'inline-block',
//                 fontFamily: "'Inria Serif', serif",
//               }}
//             >
//               Resources
//             </Typography>
//             <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
//               {[
//                 { label: 'Blogs', href: '/blogs' },
//                 // { label: 'Pipeline', href: '#' },
//                 // { label: 'Hackathon', href: '/hackathon' },
//                 // { label: 'Research Papers', href: '#' },
//               ].map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   color="inherit"
//                   underline="hover"
//                   sx={{
//                     fontSize: '1.1rem',
//                     fontFamily: "'Inria Serif', serif",
//                     '&:hover': {
//                       color: '#4F1985',
//                     },
//                   }}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </Box>
//           </Grid>

//           {/* Connect Column */}
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography
//               variant="h6"
//               component="h3"
//               sx={{
//                 fontWeight: 700,
//                 fontSize: '1.3rem',
//                 mb: 3,
//                 pb: 1,
//                 borderBottom: '2px solid #4F1985',
//                 display: 'inline-block',
//                 fontFamily: "'Inria Serif', serif",
//               }}
//             >
//               Connect
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
//               {[
//                 {
//                   label: 'LinkedIn',
//                   icon: <LinkedIn fontSize="small" />,
//                   href: 'https://in.linkedin.com/company/boltzmannlabs' ,target:"_blank",
//                 },
//                 {
//                   label: 'Instagram',
//                   icon: <Instagram fontSize="small" />,
//                   href: 'https://www.instagram.com/boltzmannlabs1/',target:"_blank"
//                 },
//                 {
//                   label: 'Twitter',
//                   icon: <XIcon fontSize="small" />,
//                   href: 'https://twitter.com/LabsBoltzmann',target:"_blank",
//                 },
//               ].map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   underline="none"
//                   color="inherit"
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 1,
//                     fontSize: '1.1rem',
//                     fontFamily: "'Inria Serif', serif",
//                     '&:hover': {
//                       color: '#4F1985',
//                       '& .MuiSvgIcon-root': {
//                         color: '#4F1985',
//                       },
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       width: 24,
//                       height: 24,
//                     }}
//                   >
//                     {item.icon}
//                   </Box>
//                   {item.label}
//                 </Link>
//               ))}
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Copyright */}
//         <Box
//           sx={{
//             mt: 6,
//             pt: 3,
//             borderTop: '1px solid rgba(0, 0, 0, 0.12)',
//             textAlign: 'center',
//           }}
//         >
//           <Typography 
//             variant="body2" 
//             color="text.secondary"
//             sx={{ fontFamily: "'Inria Serif', serif" }}
//           >
//             © {new Date().getFullYear()} Boltzmann Labs. All rights reserved.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// }




import React from 'react';
import { Box, Typography, Link, Grid, Container } from '@mui/material';
import { LinkedIn, Instagram } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        backgroundColor: '#fff',
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        fontFamily: "'Inria Serif', serif",
      }}
    >
      <Container maxWidth="lg">
        {/* Logo Row */}
        <Box
          sx={{
            mb: 4,
            textAlign: { xs: 'center', md: 'left' },
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Link href="#" underline="none">
            <img
              src="/logo.png"
              alt="Boltzmann Labs Logo"
              style={{
                height: 80,
                maxWidth: '100%',
                objectFit: 'contain',
              }}
            />
          </Link>
        </Box>

        {/* Columns Grid */}
        <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} justifyContent="space-evenly">
          {/* Contact Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 700,
                fontSize: '1.3rem',
                mb: 3,
                pb: 1,
                borderBottom: '2px solid #4F1985',
                display: 'inline-block',
                fontFamily: "'Inria Serif', serif",
              }}
            >
              Contact
            </Typography>
            <Box component="address" sx={{ fontStyle: 'normal' }}>
              <Typography component="p" sx={{ mb: 2, fontSize: '1.1rem' }}>
                <Link
                  href="mailto:contact@boltzmann.co"
                  color="inherit"
                  underline="hover"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontFamily: "times",
                  }}
                >
                  contact@boltzmann.co
                </Link>
              </Typography>
              <Typography component="p" sx={{ mb: 2, fontSize: '1.1rem' }}>
                <Link
                  href="tel:+919498866488"
                  color="inherit"
                  underline="hover"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontFamily: "'Inria Serif', serif",
                  }}
                >
                  +91 9498866488
                </Link>
              </Typography>
              <p style={{fontFamily: 'times',fontSize: '1.1rem'}}>
                B Block, Asian Sun City, 309,
                <br />
                Forest Dept Colony, Kondapur,
                <br />
                Hyderabad, Telangana 500084
              </p>
            </Box>
          </Grid>

          {/* Quick Links Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 700,
                fontSize: '1.3rem',
                mb: 3,
                pb: 1,
                borderBottom: '2px solid #4F1985',
                display: 'inline-block',
                fontFamily: "'Inria Serif', serif",
              }}
            >
              Quick Links
            </Typography>
            <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Boltzmann AI Suite', href: '/oursuite' },
                { label: 'Blogs', href: '/blogs' },
                // { label: 'Careers', href: '#' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  color="inherit"
                  underline="hover"
                  sx={{
                    fontSize: '1.1rem',
                    fontFamily: "'Inria Serif', serif",
                    '&:hover': {
                      color: '#4F1985',
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Resources Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 700,
                fontSize: '1.3rem',
                mb: 3,
                pb: 1,
                borderBottom: '2px solid #4F1985',
                display: 'inline-block',
                fontFamily: "'Inria Serif', serif",
              }}
            >
              Resources
            </Typography>
            <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                
                // { label: 'Privacy Policy', href: '/privacy-policy' },
                // { label: 'Terms of Usage', href: '/terms-of-usage' },
                // { label: 'Pipeline', href: '#' },
                // { label: 'Hackathon', href: '/hackathon' },
                // { label: 'Research Papers', href: '#' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  color="inherit"
                  underline="hover"
                  sx={{
                    fontSize: '1.1rem',
                    fontFamily: "'Inria Serif', serif",
                    '&:hover': {
                      color: '#4F1985',
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Connect Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 700,
                fontSize: '1.3rem',
                mb: 3,
                pb: 1,
                borderBottom: '2px solid #4F1985',
                display: 'inline-block',
                fontFamily: "'Inria Serif', serif",
              }}
            >
              Connect
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                {
                  label: 'LinkedIn',
                  icon: <LinkedIn fontSize="small" />,
                  href: 'https://in.linkedin.com/company/boltzmannlabs',
                  target: "_blank",
                },
                {
                  label: 'Instagram',
                  icon: <Instagram fontSize="small" />,
                  href: 'https://www.instagram.com/boltzmannlabs1/',
                  target: "_blank"
                },
                {
                  label: 'Twitter',
                  icon: <XIcon fontSize="small" />,
                  href: 'https://twitter.com/LabsBoltzmann',
                  target: "_blank",
                },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.target}
                  rel="noopener noreferrer"
                  underline="none"
                  color="inherit"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: '1.1rem',
                    fontFamily: "'Inria Serif', serif",
                    '&:hover': {
                      color: '#4F1985',
                      '& .MuiSvgIcon-root': {
                        color: '#4F1985',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 24,
                      height: 24,
                    }}
                  >
                    {item.icon}
                  </Box>
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
     {/* Copyright + Legal Links */}
<Box
  sx={{
    mt: 6,
    pt: 3,
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    textAlign: 'center',
  }}
>
  {/* Privacy + Terms row */}
  <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center', gap: 3 }}>
    <Link
      href="/privacy-policy"
      color="inherit"
      underline="hover"
      onClick={() => window.scrollTo(0, 0)}
      sx={{
        fontSize: '0.95rem',
        fontFamily: "'Inria Serif', serif",
        '&:hover': { color: '#4F1985' },
      }}
    >
      Privacy Policy
    </Link>
    <Link
      href="/terms"
      color="inherit"
      underline="hover"
      sx={{
        fontSize: '0.95rem',
        fontFamily: "'Inria Serif', serif",
        '&:hover': { color: '#4F1985' },
      }}
    >
      Terms of Usage
    </Link>
  </Box>

  {/* Copyright */}
  <Typography
    variant="body2"
    color="text.secondary"
    sx={{ fontFamily: "'Inria Serif', serif" }}
  >
    © {new Date().getFullYear()} Boltzmann Labs. All rights reserved.
  </Typography>
</Box>

      </Container>
    </Box>
  );
}