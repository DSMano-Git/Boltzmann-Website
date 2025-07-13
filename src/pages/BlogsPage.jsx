// import React, { useState, useEffect } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import Footer from '../components/Footer';
// import boltzBuzzLogo from '../assets/boltz_buzz_logo.png';

// export default function BlogsPage() {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Simulated blog data
//   const blogs = Array.from({ length: 45 }, (_, i) => ({
//     id: i + 1,
//     title: `Proteins are essential for life #${i + 1}`,
//     author: 'Surya',
//     date: '30-6-2025',
//     image: 'https://via.placeholder.com/300x180?text=Image'
//   }));

//   const blogsPerPage = 15;

//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialPage = parseInt(searchParams.get('page') || '1', 10);
//   const [currentPage, setCurrentPage] = useState(initialPage);

//   useEffect(() => {
//     setSearchParams({ page: currentPage });
//   }, [currentPage, setSearchParams]);

//   const filteredBlogs = blogs.filter(blog =>
//     blog.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / blogsPerPage));
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

//   return (
//     <div style={{ fontFamily: "'Inter', sans-serif", }}>
//       <header style={{ textAlign: 'center', marginBottom: '40px', position: 'relative' }}>
//         <h1 style={{ fontSize: '32px', color: '#3b82f6', fontWeight: '800' }}>
//           Insights & Discoveries from AI Research
//         </h1>
//         <p style={{ fontSize: '18px', color: '#374151' }}>
//           Stay updated with the latest breakthroughs
//         </p>
//       </header>

//       <section style={{ textAlign: 'center', marginBottom: '32px' }}>
//         <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#3b82f6' }}>
//           Blogs
//         </h2>
//       </section>

//       <div style={{
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'flex-end',
//   maxWidth: '1200px',
//   margin: '0 auto 32px',
//   padding: '0 16px'
// }}>
//   {/* Search Bar */}
//   <div style={{
//     display: 'flex',
//     alignItems: 'center',
//     borderRadius: '999px',
//     border: '1px solid #d1d5db',
//     backgroundColor: '#f9fafb',
//     padding: '8px 20px',
//     width: '320px',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
//     transition: 'box-shadow 0.2s ease'
//   }}>
//     <span style={{ marginRight: '10px', color: '#9ca3af', fontSize: '16px' }}>🔍</span>
//     <input
//       type="text"
//       placeholder="Search blogs..."
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       style={{
//         border: 'none',
//         outline: 'none',
//         flex: 1,
//         fontSize: '14px',
//         backgroundColor: 'transparent'
//       }}
//     />
//   </div>

//   {/* No Results Section */}
//   {filteredBlogs.length === 0 && (
//     <section
//       style={{
//         marginTop: '24px',
//         width: '100%',
//         maxWidth: '700px',
//         background: 'linear-gradient(135deg, #f9f5ff, #f3e8ff)',
//         padding: '40px 24px',
//         textAlign: 'center',
//         borderRadius: '20px',
//         boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         marginInline: 'auto'
//       }}
//     >
//       <div style={{
//         fontSize: '48px',
//         color: '#a855f7',
//         marginBottom: '16px'
//       }}>😕</div>
//       <h3 style={{
//         fontSize: '24px',
//         fontWeight: '700',
//         color: '#4c1d95',
//         marginBottom: '12px'
//       }}>
//         No Results Found
//       </h3>
//       <p style={{
//         fontSize: '16px',
//         color: '#4b5563',
//         maxWidth: '500px',
//         lineHeight: '1.6'
//       }}>
//         We couldn't find any blogs matching <strong>"{searchTerm}"</strong>. 
//         Try refining your search or exploring other topics.
//       </p>
//     </section>
//   )}
// </div>


//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
//         gap: '24px',
//         maxWidth: '1200px',
//         margin: '0 auto'
//       }}>
//         {currentBlogs.map(blog => (
//           <Link
//             key={blog.id}
//             to={`/blogs/${blog.id}?page=${currentPage}`}
//             style={{
//               textDecoration: 'none',
//               color: 'inherit',
//               background: '#f9fafb',
//               borderRadius: '16px',
//               overflow: 'hidden',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between',
//               paddingBottom: '16px'
//             }}
//           >
//             <div style={{
//               width: '100%',
//               height: '180px',
//               backgroundImage: `url(${blog.image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}></div>

//             <div style={{ padding: '16px' }}>
//               <p style={{ fontSize: '14px', marginBottom: '12px' }}>
//                 {blog.title}
//               </p>
//               <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 fontSize: '12px',
//                 color: '#6b7280'
//               }}>
//                 <span>👤 {blog.author}</span>
//                 <span>📅 {blog.date}</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div style={{
//         marginTop: '40px',
//         maxWidth: '1200px',
//         marginInline: 'auto',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexWrap: 'wrap'
//       }}>
//         {/* Previous Button on left (only if not on first page) */}
//         {currentPage > 1 ? (
//           <button
//             onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//             style={{
//                   padding: '10px 20px',
//               borderRadius: '999px',
//               border: 'none',
//               background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
//               color: '#fff',
//               fontSize: '14px',
//               cursor: 'pointer',
//               boxShadow: '0 4px 8px rgba(99,102,241,0.2)',
//               transition: 'background 0.3s ease'
//             }}
//           >
//             Previous
//           </button>
//         ) : <div></div>}

//         {/* Next Button on right (only if not on last page) */}
//         {currentPage < totalPages ? (
//           <button
//             onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//             style={{
//                   padding: '10px 20px',
//               borderRadius: '999px',
//               border: 'none',
//               background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
//               color: '#fff',
//               fontSize: '14px',
//               cursor: 'pointer',
//               boxShadow: '0 4px 8px rgba(99,102,241,0.2)',
//               transition: 'background 0.3s ease'
//             }}
//           >
//             Next
//           </button>
//         ) : <div></div>}
//       </div>

//       {/* CTA Banner */}
//      <section
//   style={{
//     margin: '80px auto',
//     background: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
//     padding: '0',
//     borderRadius: '24px',
//     maxWidth: '740px',
//     boxShadow: '0 12px 24px rgba(0, 0, 0, 0.05)',
//     overflow: 'hidden',
//     position: 'relative',
//     border: '2px dotted rgba(167, 139, 250, 0.3)',
//   }}
// >
//   {/* Flex Container */}
//   <div
//     style={{
//       display: 'flex',
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       position: 'relative',
//       zIndex: 1,
//       minHeight: '300px',
//     }}
//   >
//     {/* Image Side */}
//     <div
//       style={{
//         flex: '1 1 300px',
//         minWidth: '280px',
//         position: 'relative',
//         overflow: 'hidden',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '20px',
//       }}
//     >
//       <div
//         style={{
//           width: '100%',
//           height: '100%',
//           background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)',
//           borderRadius: '16px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           border: '3px solid white',
//           boxShadow: 'inset 0 0 20px rgba(255,255,255,0.5)',
//         }}
//       >
//         <img
//           src={boltzBuzzLogo}
//           alt="Boltz Buzz Logo"
//           style={{
//             width: '80%',
//             height: 'auto',
//             objectFit: 'contain',
//             display: 'block',
//             filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
//           }}
//         />
//       </div>
//     </div>

//     {/* Text Side */}
//     <div
//       style={{
//         flex: '1 1 300px',
//         minWidth: '280px',
//         padding: '40px 40px 40px 50px', // Increased left padding to move text right
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         background: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
//         textAlign: 'left',
//         position: 'relative',
//       }}
//     >
//       <h3
//         style={{
//           fontSize: '28px',
//           fontWeight: '800',
//           color: '#6d28d9',
//           marginBottom: '16px',
//           lineHeight: '1.2',
//           letterSpacing: '-0.5px',
//           fontFamily: "'Comic Sans MS', cursive, sans-serif",
//           textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
//           position: 'relative',
//           display: 'inline-block',
//         }}
//       >
//         Want More Insights?
//       </h3>
//       <p
//         style={{
//           fontSize: '17px',
//           color: '#5b21b6',
//           marginBottom: '28px',
//           lineHeight: '1.6',
//           fontFamily: "'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
//         }}
//       >
//         Join our buzzing community on LinkedIn
//       </p>
//       <button
//         style={{
//           padding: '12px 24px',
//           background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '999px',
//           cursor: 'pointer',
//           fontSize: '16px',
//           fontWeight: '600',
//           boxShadow: '0 4px 12px rgba(167, 139, 250, 0.4)',
//           transition: 'all 0.3s ease',
//           alignSelf: 'flex-start',
//           fontFamily: "'Comic Sans MS', cursive, sans-serif",
//           position: 'relative',
//           overflow: 'hidden',
//         }}
//         onMouseOver={(e) => {
//           e.target.style.background = 'linear-gradient(90deg, #a78bfa, #8b5cf6)';
//           e.target.style.transform = 'translateY(-2px)';
//         }}
//         onMouseOut={(e) => {
//           e.target.style.background = 'linear-gradient(90deg, #8b5cf6, #a78bfa)';
//           e.target.style.transform = 'translateY(0)';
//         }}
//       >
//         Buzz With Us on LinkedIn
//       </button>
//     </div>
//   </div>
// </section>
//       <Footer />
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import Footer from '../components/Footer';
// import boltzBuzzLogo from '../assets/boltz_buzz_logo.png';

// export default function BlogsPage() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const categories = [
//     'Technology',
//     'Case Studies',
//     'Education',
//     'Collaboration',
//     'Industrial Insights'
//   ];

//   // Simulated blog data with categories
//   const blogs = Array.from({ length: 45 }, (_, i) => ({
//     id: i + 1,
//     title: `Proteins are essential for life #${i + 1}`,
//     author: 'Surya',
//     date: '30-6-2025',
//     image: 'https://via.placeholder.com/300x180?text=Image',
//     category: categories[i % categories.length]
//   }));

//   const blogsPerPage = 15;

//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialPage = parseInt(searchParams.get('page') || '1', 10);
//   const [currentPage, setCurrentPage] = useState(initialPage);

//   useEffect(() => {
//     setSearchParams({ page: currentPage });
//   }, [currentPage, setSearchParams]);

//   const filteredBlogs = blogs.filter(blog =>
//     blog.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / blogsPerPage));
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

//   return (
//     <div style={{ fontFamily: "'Inter', sans-serif" }}>
//       <header style={{ textAlign: 'center', marginBottom: '40px', position: 'relative' }}>
//         <h1 style={{ fontSize: '32px', color: '#3b82f6', fontWeight: '800' }}>
//           Insights & Discoveries from AI Research
//         </h1>
//         <p style={{ fontSize: '18px', color: '#374151' }}>
//           Stay updated with the latest breakthroughs
//         </p>
//       </header>

//       <section style={{ textAlign: 'center', marginBottom: '32px' }}>
//         <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#3b82f6' }}>
//           Blogs
//         </h2>
//       </section>

//       <div style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-end',
//         maxWidth: '1200px',
//         margin: '0 auto 32px',
//         padding: '0 16px'
//       }}>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           borderRadius: '999px',
//           border: '1px solid #d1d5db',
//           backgroundColor: '#f9fafb',
//           padding: '8px 20px',
//           width: '320px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
//           transition: 'box-shadow 0.2s ease'
//         }}>
//           <span style={{ marginRight: '10px', color: '#9ca3af', fontSize: '16px' }}>🔍</span>
//           <input
//             type="text"
//             placeholder="Search blogs..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{
//               border: 'none',
//               outline: 'none',
//               flex: 1,
//               fontSize: '14px',
//               backgroundColor: 'transparent'
//             }}
//           />
//         </div>

//         {filteredBlogs.length === 0 && (
//           <section
//             style={{
//               marginTop: '24px',
//               width: '100%',
//               maxWidth: '700px',
//               background: 'linear-gradient(135deg, #f9f5ff, #f3e8ff)',
//               padding: '40px 24px',
//               textAlign: 'center',
//               borderRadius: '20px',
//               boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               marginInline: 'auto'
//             }}
//           >
//             <div style={{
//               fontSize: '48px',
//               color: '#a855f7',
//               marginBottom: '16px'
//             }}>😕</div>
//             <h3 style={{
//               fontSize: '24px',
//               fontWeight: '700',
//               color: '#4c1d95',
//               marginBottom: '12px'
//             }}>
//               No Results Found
//             </h3>
//             <p style={{
//               fontSize: '16px',
//               color: '#4b5563',
//               maxWidth: '500px',
//               lineHeight: '1.6'
//             }}>
//               We couldn't find any blogs matching <strong>"{searchTerm}"</strong>. 
//               Try refining your search or exploring other topics.
//             </p>
//           </section>
//         )}
//       </div>

//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
//         gap: '24px',
//         maxWidth: '1200px',
//         margin: '0 auto'
//       }}>
//         {currentBlogs.map(blog => (
//           <Link
//             key={blog.id}
//             to={`/blogs/${blog.id}?page=${currentPage}`}
//             style={{
//               textDecoration: 'none',
//               color: 'inherit',
//               background: '#f9fafb',
//               borderRadius: '16px',
//               overflow: 'hidden',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between',
//               paddingBottom: '16px'
//             }}
//           >
//             <div style={{
//               width: '100%',
//               height: '180px',
//               backgroundImage: `url(${blog.image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}></div>

//             <div style={{ padding: '16px' }}>
//               <span style={{
//                 display: 'inline-block',
//                 padding: '4px 12px',
//                 borderRadius: '999px',
//                 background: '#e0e7ff',
//                 color: '#4338ca',
//                 fontSize: '12px',
//                 fontWeight: '600',
//                 marginBottom: '8px'
//               }}>
//                 {blog.category}
//               </span>
//               <p style={{ fontSize: '14px', marginBottom: '12px' }}>
//                 {blog.title}
//               </p>
//               <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 fontSize: '12px',
//                 color: '#6b7280'
//               }}>
//                 <span>👤 {blog.author}</span>
//                 <span>📅 {blog.date}</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       <div style={{
//         marginTop: '40px',
//         maxWidth: '1200px',
//         marginInline: 'auto',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexWrap: 'wrap'
//       }}>
//         {currentPage > 1 ? (
//           <button
//             onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//             style={{
//               padding: '10px 20px',
//               borderRadius: '999px',
//               border: 'none',
//               background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
//               color: '#fff',
//               fontSize: '14px',
//               cursor: 'pointer',
//               boxShadow: '0 4px 8px rgba(99,102,241,0.2)',
//               transition: 'background 0.3s ease'
//             }}
//           >
//             Previous
//           </button>
//         ) : <div></div>}

//         {currentPage < totalPages ? (
//           <button
//             onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//             style={{
//               padding: '10px 20px',
//               borderRadius: '999px',
//               border: 'none',
//               background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
//               color: '#fff',
//               fontSize: '14px',
//               cursor: 'pointer',
//               boxShadow: '0 4px 8px rgba(99,102,241,0.2)',
//               transition: 'background 0.3s ease'
//             }}
//           >
//             Next
//           </button>
//         ) : <div></div>}
//       </div>

//       <section
//         style={{
//           margin: '80px auto',
//           background: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
//           padding: '0',
//           borderRadius: '24px',
//           maxWidth: '740px',
//           boxShadow: '0 12px 24px rgba(0, 0, 0, 0.05)',
//           overflow: 'hidden',
//           position: 'relative',
//           border: '2px dotted rgba(167, 139, 250, 0.3)',
//         }}
//       >
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             flexWrap: 'wrap',
//             position: 'relative',
//             zIndex: 1,
//             minHeight: '300px',
//           }}
//         >
//           <div
//             style={{
//               flex: '1 1 300px',
//               minWidth: '280px',
//               position: 'relative',
//               overflow: 'hidden',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               padding: '20px',
//             }}
//           >
//             <div
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)',
//                 borderRadius: '16px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 border: '3px solid white',
//                 boxShadow: 'inset 0 0 20px rgba(255,255,255,0.5)',
//               }}
//             >
//               <img
//                 src={boltzBuzzLogo}
//                 alt="Boltz Buzz Logo"
//                 style={{
//                   width: '80%',
//                   height: 'auto',
//                   objectFit: 'contain',
//                   display: 'block',
//                   filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
//                 }}
//               />
//             </div>
//           </div>

//           <div
//             style={{
//               flex: '1 1 300px',
//               minWidth: '280px',
//               padding: '40px 40px 40px 50px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               background: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
//               textAlign: 'left',
//               position: 'relative',
//             }}
//           >
//             <h3
//               style={{
//                 fontSize: '28px',
//                 fontWeight: '800',
//                 color: '#6d28d9',
//                 marginBottom: '16px',
//                 lineHeight: '1.2',
//                 letterSpacing: '-0.5px',
//                 fontFamily: "'Comic Sans MS', cursive, sans-serif",
//                 textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
//               }}
//             >
//               Want More Insights?
//             </h3>
//             <p
//               style={{
//                 fontSize: '17px',
//                 color: '#5b21b6',
//                 marginBottom: '28px',
//                 lineHeight: '1.6',
//                 fontFamily: "'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
//               }}
//             >
//               Join our buzzing community on LinkedIn
//             </p>
//             <button
//               style={{
//                 padding: '12px 24px',
//                 background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: '999px',
//                 cursor: 'pointer',
//                 fontSize: '16px',
//                 fontWeight: '600',
//                 boxShadow: '0 4px 12px rgba(167, 139, 250, 0.4)',
//                 transition: 'all 0.3s ease',
//                 alignSelf: 'flex-start',
//                 fontFamily: "'Comic Sans MS', cursive, sans-serif",
//               }}
//               onMouseOver={(e) => {
//                 e.target.style.background = 'linear-gradient(90deg, #a78bfa, #8b5cf6)';
//                 e.target.style.transform = 'translateY(-2px)';
//               }}
//               onMouseOut={(e) => {
//                 e.target.style.background = 'linear-gradient(90deg, #8b5cf6, #a78bfa)';
//                 e.target.style.transform = 'translateY(0)';
//               }}
//             >
//               Buzz With Us on LinkedIn
//             </button>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';
import boltzBuzzLogo from '../assets/boltz_buzz_logo.png';

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = [
    'Technology',
    'Case Studies',
    'Education',
    'Collaboration',
    'Industrial Insights'
  ];

  // Simulated blog data with categories
  const blogs = Array.from({ length: 45 }, (_, i) => ({
    id: i + 1,
    title: `Proteins are essential for life #${i + 1}`,
    author: 'Surya',
    date: '30-6-2025',
    image: 'https://via.placeholder.com/300x180?text=Image',
    category: categories[i % categories.length]
  }));

  const blogsPerPage = 15;
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get('page') || '1', 10);
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    setSearchParams({ page: currentPage });
  }, [currentPage, setSearchParams]);

  // Filtering logic
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory ? blog.category === selectedCategory : true)
  );

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / blogsPerPage));
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '32px', color: '#3b82f6', fontWeight: '800' }}>
          Insights & Discoveries from AI Research
        </h1>
        <p style={{ fontSize: '18px', color: '#374151' }}>
          Stay updated with the latest breakthroughs
        </p>
      </header>
         {/* Blogs Heading */}
      <section style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#3b82f6' }}>
          Blogs
        </h2>
      </section>

      {/* Categories Section */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto 32px',
          padding: '0 16px'
        }}
      >
        <h3 style={{
          fontSize: '20px',
          fontWeight: '700',
          marginBottom: '12px',
          color: '#1f2937'
        }}>
          Categories
        </h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          {categories.map((cat, index) => {
            const isSelected = selectedCategory === cat;
            return (
              <div
                key={index}
                onClick={() => isSelected ? null : setSelectedCategory(cat)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '6px 12px',
                  borderRadius: '999px',
                  border: `1px solid ${isSelected ? '#6366f1' : '#d1d5db'}`,
                  backgroundColor: isSelected ? '#eef2ff' : '#f9fafb',
                  color: isSelected ? '#4338ca' : '#374151',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                }}
              >
                <span>{cat}</span>
                {isSelected && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCategory('');
                    }}
                    style={{
                      marginLeft: '8px',
                      fontSize: '14px',
                      cursor: 'pointer',
                      color: '#6366f1',
                      fontWeight: '600'
                    }}
                  >
                    ✖
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </section>

   

      {/* Search Bar */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        maxWidth: '1200px',
        margin: '0 auto 32px',
        padding: '0 16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '999px',
          border: '1px solid #d1d5db',
          backgroundColor: '#f9fafb',
          padding: '8px 20px',
          width: '320px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          transition: 'box-shadow 0.2s ease'
        }}>
          <span style={{ marginRight: '10px', color: '#9ca3af', fontSize: '16px' }}>🔍</span>
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              flex: 1,
              fontSize: '14px',
              backgroundColor: 'transparent'
            }}
          />
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <section
            style={{
              marginTop: '24px',
              width: '100%',
              maxWidth: '700px',
              background: 'linear-gradient(135deg, #f9f5ff, #f3e8ff)',
              padding: '40px 24px',
              textAlign: 'center',
              borderRadius: '20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginInline: 'auto'
            }}
          >
            <div style={{
              fontSize: '48px',
              color: '#a855f7',
              marginBottom: '16px'
            }}>😕</div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#4c1d95',
              marginBottom: '12px'
            }}>
              No Results Found
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#4b5563',
              maxWidth: '500px',
              lineHeight: '1.6'
            }}>
              We couldn't find any blogs matching <strong>"{searchTerm}"</strong>
              {selectedCategory && <> in <strong>{selectedCategory}</strong></>}. 
              Try refining your search or exploring other topics.
            </p>
          </section>
        )}
      </div>

      {/* Blog Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
        gap: '24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {currentBlogs.map(blog => (
          <Link
            key={blog.id}
            to={`/blogs/${blog.id}?page=${currentPage}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              background: '#f9fafb',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingBottom: '16px'
            }}
          >
            <div style={{
              width: '100%',
              height: '180px',
              backgroundImage: `url(${blog.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>

            <div style={{ padding: '16px' }}>
              <p style={{ fontSize: '14px', marginBottom: '12px' }}>
                {blog.title}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px',
                color: '#6b7280'
              }}>
                <span>👤 {blog.author}</span>
                <span>📅 {blog.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div style={{
        marginTop: '40px',
        maxWidth: '1200px',
        marginInline: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        {currentPage > 1 ? (
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            style={{
              padding: '10px 20px',
              borderRadius: '999px',
              border: 'none',
              background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
              color: '#fff',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(99,102,241,0.2)',
              transition: 'background 0.3s ease'
            }}
          >
            Previous
          </button>
        ) : <div></div>}

        {currentPage < totalPages ? (
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            style={{
              padding: '10px 20px',
              borderRadius: '999px',
              border: 'none',
              background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
              color: '#fff',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(99,102,241,0.2)',
              transition: 'background 0.3s ease'
            }}
          >
            Next
          </button>
        ) : <div></div>}
      </div>

      {/* CTA Banner */}
      <section
        style={{
          margin: '80px auto',
          background: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
          padding: '0',
          borderRadius: '24px',
          maxWidth: '740px',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          position: 'relative',
          border: '2px dotted rgba(167, 139, 250, 0.3)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 1,
            minHeight: '300px',
          }}
        >
          <div
            style={{
              flex: '1 1 300px',
              minWidth: '280px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid white',
                boxShadow: 'inset 0 0 20px rgba(255,255,255,0.5)',
              }}
            >
              <img
                src={boltzBuzzLogo}
                alt="Boltz Buzz Logo"
                style={{
                  width: '80%',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                }}
              />
            </div>
          </div>

          <div
            style={{
              flex: '1 1 300px',
              minWidth: '280px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
              textAlign: 'left',
            }}
          >
            <h3
              style={{
                fontSize: '28px',
                fontWeight: '800',
                color: '#6d28d9',
                marginBottom: '16px',
                lineHeight: '1.2',
                letterSpacing: '-0.5px',
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
                textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
              }}
            >
              Want More Insights?
            </h3>
            <p
              style={{
                fontSize: '17px',
                color: '#5b21b6',
                marginBottom: '28px',
                lineHeight: '1.6',
                fontFamily: "'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
              }}
            >
              Join our buzzing community on LinkedIn
            </p>
            <button
              style={{
                padding: '12px 24px',
                background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
                color: '#fff',
                border: 'none',
                borderRadius: '999px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(167, 139, 250, 0.4)',
                transition: 'all 0.3s ease',
                alignSelf: 'flex-start',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(90deg, #a78bfa, #8b5cf6)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(90deg, #8b5cf6, #a78bfa)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Buzz With Us on LinkedIn
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
