// import { useState, useEffect } from 'react';
// import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
// import { db } from '../firebase';
// import { doc, getDoc } from 'firebase/firestore';
// import Footer from '../components/Footer';
// import boltzBuzzLogo from '../assets/boltz_buzz_logo.png';
// import { Helmet } from 'react-helmet-async'

// export default function BlogDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const page = parseInt(searchParams.get('page') || '1', 10);
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogPost = async () => {
//       try {
//         const docRef = doc(db, 'boltzmannlabs-posts', id);
//         const docSnap = await getDoc(docRef);
        
//         if (docSnap.exists()) {
//           const data = docSnap.data();
//           setBlog({
//             id: docSnap.id,
//             title: data.title,
//             author: data.author || 'Admin',
//             date: data.created_date?.toDate() || new Date(),
//             content: data.content,
//             categories: data.categories || [],
//             image: data.content?.match(/<img[^>]*>/) ? 
//               data.content.match(/<img[^>]*>/)[0].match(/src=["']([^"']*)["']/)[1] : 
//               'https://via.placeholder.com/800x400?text=No+Image'
//           });
//         } else {
//           setError('Blog post not found');
//         }
//       } catch (err) {
//         setError('Failed to load blog post');
//         console.error('Error fetching blog post:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogPost();
//     window.scrollTo(0, 0);
//   }, [id]);

//   if (loading) {
//     return (
//       <div style={{ 
//         display: 'flex', 
//         justifyContent: 'center', 
//         alignItems: 'center', 
//         height: '50vh' 
//       }}>
//         <div className="loader" style={{ 
//           width: '50px',
//           height: '50px',
//           border: '5px solid #f3f3f3',
//           borderTop: '5px solid #3b82f6',
//           borderRadius: '50%',
//           animation: 'spin 1s linear infinite'
//         }}></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{ 
//         padding: '40px', 
//         textAlign: 'center',
//         fontFamily: "'Inter', sans-serif" 
//       }}>
//         <h2 style={{ color: '#ef4444' }}>{error}</h2>
//         <button
//           onClick={() => navigate(`/blogs?page=${page}`)}
//           style={{
//             padding: '10px 20px',
//             marginTop: '20px',
//             borderRadius: '999px',
//             border: 'none',
//             background: '#3b82f6',
//             color: '#fff',
//             cursor: 'pointer'
//           }}
//         >
//           Back to Blogs
//         </button>
//       </div>
//     );
//   }

//   if (!blog) return null;

//   // Extract the first paragraph for meta description
//   const firstParagraph = blog.content?.match(/<p[^>]*>(.*?)<\/p>/)?.[1] || 
//                         blog.content?.match(/<span[^>]*>(.*?)<\/span>/)?.[1] || 
//                         'Read this blog post on Boltzmann Labs';

//   return (
//     <div style={{ 
//       fontFamily: "'Inter', sans-serif",
//       maxWidth: '800px',
//       margin: '0 auto',
//       padding: '20px'
//     }}>
//       {/* <Helmet>
//         <title>{`${blog.title} | Boltzmann Blog`}</title>
//         <meta name="description" content={firstParagraph.replace(/<[^>]*>/g, '')} />
//         {blog.image && <meta property="og:image" content={blog.image} />}
//         {blog.image && <meta property="twitter:image" content={blog.image} />}
//         <meta property="og:title" content={blog.title} />
//         <meta property="og:description" content={firstParagraph.replace(/<[^>]*>/g, '')} />
//         <meta property="og:url" content={`https://boltzmann.co/blogs/${id}`} />
//         <meta property="twitter:title" content={blog.title} />
//         <meta property="twitter:description" content={firstParagraph.replace(/<[^>]*>/g, '')} />
//         <meta property="twitter:url" content={`https://boltzmann.co/blogs/${id}`} />
//         <meta name="twitter:card" content="summary_large_image"/>
//       </Helmet> */}

//       {/* Blog Header */}
//       <header style={{ marginBottom: '40px' }}>
//         <h1 style={{ 
//           fontSize: '2.5rem',
//           fontWeight: '800',
//           color: '#1f2937',
//           marginBottom: '1rem',
//           lineHeight: '1.2'
//         }}>
//           {blog.title}
//         </h1>
        
//         <div style={{ 
//           display: 'flex',
//           alignItems: 'center',
//           gap: '1rem',
//           marginBottom: '1rem',
//           color: '#6b7280',
//           fontSize: '0.875rem'
//         }}>
//           <span>👤 {blog.author}</span>
//           <span>📅 {blog.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
//         </div>

//         <div style={{ 
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: '0.5rem',
//           marginBottom: '2rem'
//         }}>
//           {/* {blog.categories.map((category, index) => (
//             <span 
//               key={index}
//               style={{
//                 padding: '0.25rem 0.75rem',
//                 borderRadius: '999px',
//                 background: '#eef2ff',
//                 color: '#4338ca',
//                 fontSize: '0.75rem',
//                 fontWeight: '500',
//                 cursor: 'pointer'
//               }}
//               onClick={() => navigate(`/blog/${category}`)}
//             >
//               {category}
//             </span>
//           ))} */}
//         </div>

//         {blog.image && (
//           <div style={{ 
//             width: '100%',
//             height: '400px',
//             borderRadius: '0.5rem',
//             overflow: 'hidden',
//             marginBottom: '2rem'
//           }}>
//             <img 
//               src={blog.image} 
//               alt={blog.title}
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover'
//               }}
//             />
//           </div>
//         )}
//       </header>

//       {/* Blog Content */}
//       <article 
//         dangerouslySetInnerHTML={{ __html: blog.content }} 
//         style={{
//           lineHeight: '1.6',
//           fontSize: '1.125rem',
//           color: '#374151',
//           marginBottom: '3rem'
//         }}
//       />

//       {/* Navigation */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         marginTop: '3rem',
//         paddingTop: '2rem',
//         borderTop: '1px solid #e5e7eb'
//       }}>
//         <button
//           onClick={() => navigate(`/blogs?page=${page}`)}
//           style={{
//             padding: '0.75rem 1.5rem',
//             borderRadius: '999px',
//             border: '1px solid #e5e7eb',
//             background: '#f9fafb',
//             color: '#374151',
//             fontSize: '1rem',
//             cursor: 'pointer',
//             transition: 'all 0.2s ease'
//           }}
//           onMouseOver={(e) => {
//             e.target.background = '#f3f4f6';
//           }}
//           onMouseOut={(e) => {
//             e.target.background = '#f9fafb';
//           }}
//         >
//           ← Back to Blogs
//         </button>
//       </div>

//       {/* CTA Banner */}
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
//               padding: '40px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               background: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
//               textAlign: 'left',
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
//               Enjoyed this article?
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
//               Join our community for more insights on AI and drug discovery
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
//                 position: 'relative',
//                 overflow: 'hidden',
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
//               Subscribe to Our Newsletter
//             </button>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }


// import  { useState, useEffect } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import Footer from '../components/Footer';
// import boltzBuzzLogo from '../assets/boltz_buzz_logo.png';

// export default function BlogsPage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
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

//   // Filtering logic
//   const filteredBlogs = blogs.filter(blog =>
//     blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//     (selectedCategory ? blog.category === selectedCategory : true)
//   );

//   const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / blogsPerPage));
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

//   return (
//     <div style={{ fontFamily: "'Inter', sans-serif" }}>
//       {/* Header */}
//       <header style={{ textAlign: 'center', marginBottom: '24px' }}>
//         <h1 style={{ fontSize: '32px', color: '#3b82f6', fontWeight: '800' }}>
//           Insights & Discoveries from AI Research
//         </h1>
//         <p style={{ fontSize: '18px', color: '#374151' }}>
//           Stay updated with the latest breakthroughs
//         </p>
//       </header>
//          {/* Blogs Heading */}
//       <section style={{ textAlign: 'center', marginBottom: '32px' }}>
//         <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#3b82f6' }}>
//           Blogs
//         </h2>
//       </section>

//       {/* Categories Section */}
//       <section
//         style={{
//           maxWidth: '1200px',
//           margin: '0 auto 32px',
//           padding: '0 16px'
//         }}
//       >
//         <h3 style={{
//           fontSize: '20px',
//           fontWeight: '700',
//           marginBottom: '12px',
//           color: '#1f2937'
//         }}>
//           Categories
//         </h3>
//         <div style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: '12px'
//         }}>
//           {categories.map((cat, index) => {
//             const isSelected = selectedCategory === cat;
//             return (
//               <div
//                 key={index}
//                 onClick={() => isSelected ? null : setSelectedCategory(cat)}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   padding: '6px 12px',
//                   borderRadius: '999px',
//                   border: `1px solid ${isSelected ? '#6366f1' : '#d1d5db'}`,
//                   backgroundColor: isSelected ? '#eef2ff' : '#f9fafb',
//                   color: isSelected ? '#4338ca' : '#374151',
//                   fontSize: '14px',
//                   cursor: 'pointer',
//                   transition: 'all 0.2s ease',
//                   boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
//                 }}
//               >
//                 <span>{cat}</span>
//                 {isSelected && (
//                   <span
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setSelectedCategory('');
//                     }}
//                     style={{
//                       marginLeft: '8px',
//                       fontSize: '14px',
//                       cursor: 'pointer',
//                       color: '#6366f1',
//                       fontWeight: '600'
//                     }}
//                   >
//                     ✖
//                   </span>
//                 )}
//               </div>
//             )
//           })}
//         </div>
//       </section>

   

//       {/* Search Bar */}
//       <div style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-end',
//         maxWidth: '1200px',
//         margin: '0 auto 32px',
//         marginTop: '-4rem',
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

//         {/* No Results */}
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
//               We couldn't find any blogs matching <strong>"{searchTerm}"</strong>
//               {selectedCategory && <> in <strong>{selectedCategory}</strong></>}. 
//               Try refining your search or exploring other topics.
//             </p>
//           </section>
//         )}
//       </div>

//       {/* Blog Cards Grid */}
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

//       {/* CTA Banner */}
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
//               padding: '40px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               background: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
//               textAlign: 'left',
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
//                 position: 'relative',
//                 overflow: 'hidden',
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

// import { useState, useEffect } from 'react';
// import { Link, useNavigate, useSearchParams } from 'react-router-dom';
// import { db } from "../firebase";
// import { collection, onSnapshot } from "firebase/firestore";
// import boltzBuzzLogo from '../assets/boltz_buzz_logo.png';
// import Footer from '../components/Footer';

// const BlogsPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [Pdata, setPdata] = useState([]);
//   const [Reference, setReference] = useState([]);
//   const [reslmessage, setreslmessage] = useState('');
//   const [Postnotfound, setPostnotfound] = useState(false);
//   const navigate = useNavigate();
  
//   const categories = [
//     'Technology',
//     'Case Studies',
//     'Education',
//     'Collaboration',
//     'Industrial Insights'
//   ];

//   const blogsPerPage = 15;
//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialPage = parseInt(searchParams.get('page') || '1', 10);
//   const [currentPage, setCurrentPage] = useState(initialPage);

//   useEffect(() => {
//     setSearchParams({ page: currentPage });
//   }, [currentPage, setSearchParams]);

//   const FETCHPosts = async () => {
//     const Ref = collection(db, 'boltzmannlabs-posts');
//     await onSnapshot(Ref, (POSTE) => {
//       if (POSTE.empty) {
//         setPostnotfound(true);
//       } else {
//         const postarray = [];
//         POSTE.forEach(Posts => {
//           if (Posts.data().published) {
//             postarray.push({
//               id: Posts.id,
//               Author: Posts.data().author,
//               category: Posts.data().categories,
//               title: Posts.data().title,
//               content: Posts.data().content.match(/<img[^>]*>/),
//               date: Posts.data().created_date.toDate(),
//               image: Posts.data().content ? 
//                 (Posts.data().content.match(/<img[^>]*>/) ? 
//                   Posts.data().content.match(/<img[^>]*>/)[0].match(/src=["']([^"']*)["']/)[1] : 
//                   'https://via.placeholder.com/300x180?text=Image') : 
//                 'https://via.placeholder.com/300x180?text=Image'
//             });
//           }
//         });
//         if (postarray.length === 0) { setPostnotfound(true); }

//         postarray.sort(function (a, b) {
//           return b.date - a.date;
//         });
//         setPdata(postarray);
//         setReference(postarray);
//       }
//     });
//   };

//   const SearchFun = () => {
//     const data = Reference;
//     const Farray = data.filter((data) => {
//       return data.title.toLowerCase().includes(searchTerm.toLowerCase());
//     });
//     if (Farray.length === 0) {
//       setPostnotfound(true);
//     }
//     setPdata(Farray);
//     setreslmessage(searchTerm);
//   };

//   const clearSearch = () => {
//     setSearchTerm('');
//     setPdata(Reference);
//     setreslmessage('');
//     setSelectedCategory('');
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       FETCHPosts();
//     }, 200);
//     window.scrollTo(0, 0);
//   }, []);

//   // Filtering logic
//   const filteredBlogs = Pdata.filter(blog =>
//     blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//     (selectedCategory ? blog.category === selectedCategory : true)
//   );

//   const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / blogsPerPage));
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

//   return (
//     <div style={{ fontFamily: "'Inter', sans-serif" }}>
     
//       {/* Header */}
//       <header style={{ textAlign: 'center', marginBottom: '24px', marginTop: '20px' }}>
//         <h1 style={{ fontSize: '32px', color: '#3b82f6', fontWeight: '800' }}>
//           Insights & Discoveries from AI Research
//         </h1>
//         <p style={{ fontSize: '18px', color: '#374151' }}>
//           Stay updated with the latest breakthroughs
//         </p>
//       </header>

//       {/* Blogs Heading */}
//       <section style={{ textAlign: 'center', marginBottom: '32px' }}>
//         <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#3b82f6' }}>
//           Blogs
//         </h2>
//       </section>

//       {/* Categories Section */}
//       <section
//         style={{
//           maxWidth: '1200px',
//           margin: '0 auto 32px',
//           padding: '0 16px'
//         }}
//       >
//         <h3 style={{
//           fontSize: '20px',
//           fontWeight: '700',
//           marginBottom: '12px',
//           color: '#1f2937'
//         }}>
//           Categories
//         </h3>
//         <div style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: '12px'
//         }}>
//           {categories.map((cat, index) => {
//             const isSelected = selectedCategory === cat;
//             return (
//               <div
//                 key={index}
//                 onClick={() => isSelected ? null : setSelectedCategory(cat)}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   padding: '6px 12px',
//                   borderRadius: '999px',
//                   border: `1px solid ${isSelected ? '#6366f1' : '#d1d5db'}`,
//                   backgroundColor: isSelected ? '#eef2ff' : '#f9fafb',
//                   color: isSelected ? '#4338ca' : '#374151',
//                   fontSize: '14px',
//                   cursor: 'pointer',
//                   transition: 'all 0.2s ease',
//                   boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
//                 }}
//               >
//                 <span>{cat}</span>
//                 {isSelected && (
//                   <span
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setSelectedCategory('');
//                     }}
//                     style={{
//                       marginLeft: '8px',
//                       fontSize: '14px',
//                       cursor: 'pointer',
//                       color: '#6366f1',
//                       fontWeight: '600'
//                     }}
//                   >
//                     ✖
//                   </span>
//                 )}
//               </div>
//             )
//           })}
//         </div>
//       </section>

//       {/* Search Bar */}
//       <div style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-end',
//         maxWidth: '1200px',
//         margin: '0 auto 32px',
//         marginTop: '-4rem',
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
//             onKeyDown={(e) => {
//               if (e.key === 'Enter') {
//                 SearchFun();
//               }
//             }}
//             style={{
//               border: 'none',
//               outline: 'none',
//               flex: 1,
//               fontSize: '14px',
//               backgroundColor: 'transparent'
//             }}
//           />
//           <button 
//             style={searchTerm === '' ? { display: 'none' } : { border: 'none', background: 'none', cursor: 'pointer' }}
//             onClick={clearSearch}
//           >
//             <span style={{ color: '#9ca3af', fontSize: '16px' }}>✖</span>
//           </button>
//           <button 
//             style={{ border: 'none', background: 'none', cursor: 'pointer' }}
//             onClick={SearchFun}
//           >
//             <span style={{ color: '#9ca3af', fontSize: '16px' }}>↵</span>
//           </button>
//         </div>

//         {/* Search results message */}
//         {(reslmessage !== '' || selectedCategory) && (
//           <div style={{ marginTop: '10px', width: '100%', textAlign: 'center' }}>
//             <span style={{ color: '#501f84', fontWeight: 600 }}>
//               Showing results {reslmessage && `for "${reslmessage}"`} 
//               {reslmessage && selectedCategory && ' in'} 
//               {selectedCategory && ` category "${selectedCategory}"`}
//             </span>
//             <button 
//               onClick={clearSearch} 
//               style={{ 
//                 background: 'none', 
//                 border: 'none', 
//                 cursor: 'pointer',
//                 marginLeft: '10px'
//               }}
//             >
//               <span style={{ color: '#6366f1' }}>Clear all</span>
//             </button>
//           </div>
//         )}

//         {/* No Results */}
//         {filteredBlogs.length === 0 && Pdata.length > 0 && (
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
//               We couldn't find any blogs matching <strong>"{searchTerm}"</strong>
//               {selectedCategory && <> in <strong>{selectedCategory}</strong></>}. 
//               Try refining your search or exploring other topics.
//             </p>
//           </section>
//         )}
//       </div>

//       {/* Loading state */}
//       {Pdata.length === 0 && !Postnotfound && (
//         <div style={{ width: '100%', height: '100%', minHeight: '50vh', textAlign: 'center' }}>
//           <div className="loader" style={{ 
//             display: 'inline-block',
//             width: '80px',
//             height: '80px',
//             border: '8px solid #f3f3f3',
//             borderTop: '8px solid #3b82f6',
//             borderRadius: '50%',
//             animation: 'spin 1s linear infinite',
//             marginTop: '100px'
//           }}></div>
//         </div>
//       )}

//       {/* No posts found */}
//       {Postnotfound && Pdata.length === 0 && (
//         <p style={{ fontSize: '20px', color: 'red', padding: '10px', textAlign: 'center' }}> No posts Found</p>
//       )}

//       {/* Blog Cards Grid */}
//       {filteredBlogs.length > 0 && (
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
//           gap: '24px',
//           maxWidth: '1200px',
//           margin: '0 auto',
//           padding: '0 16px'
//         }}>
//           {currentBlogs.map(blog => (
//             <Link
//               key={blog.id}
//   to={`/blogs/${blog.id}?page=${currentPage}`}
//               style={{
//                 textDecoration: 'none',
//                 color: 'inherit',
//                 background: '#f9fafb',
//                 borderRadius: '16px',
//                 overflow: 'hidden',
//                 boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 paddingBottom: '16px'
//               }}
//             >
//               <div style={{
//                 width: '100%',
//                 height: '180px',
//                 backgroundImage: `url(${blog.image})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//               }}></div>

//               <div style={{ padding: '16px' }}>
//                 <p style={{ 
//                   fontSize: '14px', 
//                   marginBottom: '12px',
//                   fontWeight: '600',
//                   height: '4.6rem',
//                   overflow: 'hidden',
//                   textOverflow: 'ellipsis',
//                   display: '-webkit-box',
//                   WebkitLineClamp: 3,
//                   WebkitBoxOrient: 'vertical'
//                 }}>
//                   {blog.title}
//                 </p>
//                 <div style={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   fontSize: '12px',
//                   color: '#6b7280'
//                 }}>
//                   <span>👤 {blog.Author || 'Admin'}</span>
//                   <span>📅 {blog.date.toString().slice(4, 15)}</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* Pagination Controls */}
//       {filteredBlogs.length > 0 && (
//         <div style={{
//           marginTop: '40px',
//           maxWidth: '1200px',
//           marginInline: 'auto',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           padding: '0 16px'
//         }}>
//           {currentPage > 1 ? (
//             <button
//               onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//               style={{
//                 padding: '10px 20px',
//                 borderRadius: '999px',
//                 border: 'none',
//                 background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
//                 color: '#fff',
//                 fontSize: '14px',
//                 cursor: 'pointer',
//                 boxShadow: '0 4px 8px rgba(99,102,241,0.2)',
//                 transition: 'background 0.3s ease'
//               }}
//             >
//               Previous
//             </button>
//           ) : <div></div>}

//           {currentPage < totalPages ? (
//             <button
//               onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//               style={{
//                 padding: '10px 20px',
//                 borderRadius: '999px',
//                 border: 'none',
//                 background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
//                 color: '#fff',
//                 fontSize: '14px',
//                 cursor: 'pointer',
//                 boxShadow: '0 4px 8px rgba(99,102,241,0.2)',
//                 transition: 'background 0.3s ease'
//               }}
//             >
//               Next
//             </button>
//           ) : <div></div>}
//         </div>
//       )}

//       {/* CTA Banner */}
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
//               padding: '40px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               background: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
//               textAlign: 'left',
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
//                 position: 'relative',
//                 overflow: 'hidden',
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
// };

// export default BlogsPage;