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

//   // Improved image extraction function
//   const extractImageFromContent = (content) => {
//     if (!content || typeof content !== 'string') {
//       return 'https://via.placeholder.com/300x180?text=Image';
//     }

//     try {
//       // More robust regex pattern for img tags
//       const imgTagRegex = /<img[^>]+>/gi;
//       const imgMatch = content.match(imgTagRegex);
      
//       if (!imgMatch || imgMatch.length === 0) {
//         return 'https://via.placeholder.com/300x180?text=Image';
//       }

//       // Extract src attribute from the first img tag
//       const firstImgTag = imgMatch[0];
//       const srcRegex = /src\s*=\s*["']([^"']+)["']/i;
//       const srcMatch = firstImgTag.match(srcRegex);
      
//       if (!srcMatch || srcMatch.length < 2) {
//         return 'https://via.placeholder.com/300x180?text=Image';
//       }

//       const imageUrl = srcMatch[1].trim();
      
//       // Validate that the URL is not empty and looks like a valid URL
//       if (!imageUrl || imageUrl.length === 0) {
//         return 'https://via.placeholder.com/300x180?text=Image';
//       }

//       // Basic URL validation
//       if (imageUrl.startsWith('data:image/') || 
//           imageUrl.startsWith('http://') || 
//           imageUrl.startsWith('https://') ||
//           imageUrl.startsWith('/')) {
//         return imageUrl;
//       }

//       return 'https://via.placeholder.com/300x180?text=Image';
//     } catch (error) {
//       console.error('Error extracting image from content:', error);
//       return 'https://via.placeholder.com/300x180?text=Image';
//     }
//   };

//   const FETCHPosts = async () => {
//     const Ref = collection(db, 'boltzmannlabs-posts');
    
//     try {
//       await onSnapshot(Ref, (POSTE) => {
//         if (POSTE.empty) {
//           setPostnotfound(true);
//           setPdata([]);
//           setReference([]);
//           return;
//         }

//         const postarray = [];
//         POSTE.forEach(Posts => {
//           const postData = Posts.data();
          
//           if (postData.published) {
//             const extractedImage = extractImageFromContent(postData.content);
            
//             postarray.push({
//               id: Posts.id,
//               Author: postData.author || 'Admin',
//               category: postData.categories,
//               title: postData.title || 'Untitled',
//               content: postData.content,
//               date: postData.created_date ? postData.created_date.toDate() : new Date(),
//               image: extractedImage
//             });
//           }
//         });

//         if (postarray.length === 0) {
//           setPostnotfound(true);
//           setPdata([]);
//           setReference([]);
//           return;
//         }

//         // Sort by date (newest first)
//         postarray.sort((a, b) => b.date - a.date);
        
//         setPdata(postarray);
//         setReference(postarray);
//         setPostnotfound(false);
//       });
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//       setPostnotfound(true);
//     }
//   };

//   const SearchFun = () => {
//     if (!searchTerm.trim()) {
//       setPdata(Reference);
//       setreslmessage('');
//       setPostnotfound(Reference.length === 0);
//       return;
//     }

//     const filteredArray = Reference.filter((post) => 
//       post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
//     );
    
//     setPdata(filteredArray);
//     setreslmessage(searchTerm.trim());
//     setPostnotfound(filteredArray.length === 0);
//     setCurrentPage(1); // Reset to first page after search
//   };

//   const clearSearch = () => {
//     setSearchTerm('');
//     setPdata(Reference);
//     setreslmessage('');
//     setSelectedCategory('');
//     setCurrentPage(1);
//     setPostnotfound(Reference.length === 0);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       FETCHPosts();
//     }, 200);

//     window.scrollTo(0, 0);

//     return () => clearTimeout(timer);
//   }, []);

//   // Filtering logic with improved error handling
//   const filteredBlogs = Pdata.filter(blog => {
//     const matchesSearch = !searchTerm || 
//       blog.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = !selectedCategory || 
//       blog.category === selectedCategory;
    
//     return matchesSearch && matchesCategory;
//   });

//   const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / blogsPerPage));
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

//   // Image error handler component
//   const BlogImage = ({ src, alt, style }) => {
//     const [imgSrc, setImgSrc] = useState(src);
//     const [hasError, setHasError] = useState(false);

//     const handleError = () => {
//       if (!hasError) {
//         setHasError(true);
//         setImgSrc('https://via.placeholder.com/300x180?text=Image+Not+Found');
//       }
//     };

//     const handleLoad = () => {
//       setHasError(false);
//     };

//     return (
//       <div 
//         style={{
//           ...style,
//           backgroundImage: `url(${imgSrc})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat'
//         }}
//       >
//         <img
//           src={imgSrc}
//           alt={alt}
//           onError={handleError}
//           onLoad={handleLoad}
//           style={{
//             display: 'none' // Hidden img for error handling
//           }}
//         />
//       </div>
//     );
//   };

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
//               to={`/blogs/${blog.id}?page=${currentPage}`}
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
//               <BlogImage
//                 src={blog.image}
//                 alt={blog.title}
//                 style={{
//                   width: '100%',
//                   height: '180px'
//                 }}
//               />

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
//                   <span>👤 {blog.Author}</span>
//                   <span>📅 {blog.date.toString().slice(4, 15)}</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* Pagination Controls */}
//       {filteredBlogs.length > 0 && totalPages > 1 && (
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

//           <span style={{ color: '#6b7280', fontSize: '14px' }}>
//             Page {currentPage} of {totalPages}
//           </span>

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
//     'Collaboration', // Fixed typo from 'Collabration'
//     'Industrial Insights'
//   ];

//   const blogsPerPage = 15;
//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialPage = parseInt(searchParams.get('page') || '1', 10);
//   const [currentPage, setCurrentPage] = useState(initialPage);

//   useEffect(() => {
//     setSearchParams({ page: currentPage });
//   }, [currentPage, setSearchParams]);

//   // Improved image extraction function
//   const extractImageFromContent = (content) => {
//     if (!content || typeof content !== 'string') {
//       return 'https://via.placeholder.com/300x180?text=Image';
//     }

//     try {
//       // More robust regex pattern for img tags
//       const imgTagRegex = /<img[^>]+>/gi;
//       const imgMatch = content.match(imgTagRegex);
      
//       if (!imgMatch || imgMatch.length === 0) {
//         return 'https://via.placeholder.com/300x180?text=Image';
//       }

//       // Extract src attribute from the first img tag
//       const firstImgTag = imgMatch[0];
//       const srcRegex = /src\s*=\s*["']([^"']+)["']/i;
//       const srcMatch = firstImgTag.match(srcRegex);
      
//       if (!srcMatch || srcMatch.length < 2) {
//         return 'https://via.placeholder.com/300x180?text=Image';
//       }

//       const imageUrl = srcMatch[1].trim();
      
//       // Validate that the URL is not empty and looks like a valid URL
//       if (!imageUrl || imageUrl.length === 0) {
//         return 'https://via.placeholder.com/300x180?text=Image';
//       }

//       // Basic URL validation
//       if (imageUrl.startsWith('data:image/') || 
//           imageUrl.startsWith('http://') || 
//           imageUrl.startsWith('https://') ||
//           imageUrl.startsWith('/')) {
//         return imageUrl;
//       }

//       return 'https://via.placeholder.com/300x180?text=Image';
//     } catch (error) {
//       console.error('Error extracting image from content:', error);
//       return 'https://via.placeholder.com/300x180?text=Image';
//     }
//   };

//   const FETCHPosts = async () => {
//     const Ref = collection(db, 'boltzmannlabs-posts');
    
//     try {
//       await onSnapshot(Ref, (POSTE) => {
//         if (POSTE.empty) {
//           setPostnotfound(true);
//           setPdata([]);
//           setReference([]);
//           return;
//         }

//         const postarray = [];
//         POSTE.forEach(Posts => {
//           const postData = Posts.data();
          
//           if (postData.published) {
//             const extractedImage = extractImageFromContent(postData.content);
            
//             postarray.push({
//               id: Posts.id,
//               Author: postData.author || 'Admin',
//               category: postData.categories, // Make sure this matches your Firestore field
//               title: postData.title || 'Untitled',
//               content: postData.content,
//               date: postData.created_date ? postData.created_date.toDate() : new Date(),
//               image: extractedImage
//             });
//           }
//         });

//         if (postarray.length === 0) {
//           setPostnotfound(true);
//           setPdata([]);
//           setReference([]);
//           return;
//         }

//         // Sort by date (newest first)
//         postarray.sort((a, b) => b.date - a.date);
        
//         setPdata(postarray);
//         setReference(postarray);
//         setPostnotfound(false);
//       });
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//       setPostnotfound(true);
//     }
//   };

//   const SearchFun = () => {
//     if (!searchTerm.trim()) {
//       setPdata(Reference);
//       setreslmessage('');
//       setPostnotfound(Reference.length === 0);
//       return;
//     }

//     const filteredArray = Reference.filter((post) => 
//       post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
//     );
    
//     setPdata(filteredArray);
//     setreslmessage(searchTerm.trim());
//     setPostnotfound(filteredArray.length === 0);
//     setCurrentPage(1); // Reset to first page after search
//   };

//   const clearSearch = () => {
//     setSearchTerm('');
//     setPdata(Reference);
//     setreslmessage('');
//     setSelectedCategory('');
//     setCurrentPage(1);
//     setPostnotfound(Reference.length === 0);
//   };

//   // Fixed category filter function
//   const handleCategoryFilter = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1); // Reset to first page when changing category
    
//     // Filter posts by category - checking if category array contains the selected category
//     let filteredData = Reference;
    
//     if (category) {
//       filteredData = filteredData.filter(post => {
//         // Handle both string and array categories
//         if (Array.isArray(post.category)) {
//           return post.category.includes(category);
//         } else {
//           return post.category === category;
//         }
//       });
//     }
    
//     if (searchTerm.trim()) {
//       filteredData = filteredData.filter(post => 
//         post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
//       );
//     }
    
//     setPdata(filteredData);
//     setPostnotfound(filteredData.length === 0);
//   };

//   // Clear category filter
//   const clearCategoryFilter = () => {
//     setSelectedCategory('');
//     setCurrentPage(1);
    
//     // Apply search filter if exists
//     let filteredData = Reference;
//     if (searchTerm.trim()) {
//       filteredData = filteredData.filter(post => 
//         post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
//       );
//     }
    
//     setPdata(filteredData);
//     setPostnotfound(filteredData.length === 0);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       FETCHPosts();
//     }, 200);

//     window.scrollTo(0, 0);

//     return () => clearTimeout(timer);
//   }, []);

//   // Updated filtering logic - this now correctly applies both filters
//   const filteredBlogs = Pdata.filter(blog => {
//     const matchesSearch = !searchTerm || 
//       blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    
//     // Handle both string and array categories
//     let matchesCategory = !selectedCategory;
//     if (selectedCategory) {
//       if (Array.isArray(blog.category)) {
//         matchesCategory = blog.category.includes(selectedCategory);
//       } else {
//         matchesCategory = blog.category === selectedCategory;
//       }
//     }
    
//     return matchesSearch && matchesCategory;
//   });

//   const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / blogsPerPage));
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

//   // Image error handler component
//   const BlogImage = ({ src, alt, style }) => {
//     const [imgSrc, setImgSrc] = useState(src);
//     const [hasError, setHasError] = useState(false);

//     const handleError = () => {
//       if (!hasError) {
//         setHasError(true);
//         setImgSrc('https://via.placeholder.com/300x180?text=Image+Not+Found');
//       }
//     };

//     const handleLoad = () => {
//       setHasError(false);
//     };

//     return (
//       <div 
//         style={{
//           ...style,
//           backgroundImage: `url(${imgSrc})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat'
//         }}
//       >
//         <img
//           src={imgSrc}
//           alt={alt}
//           onError={handleError}
//           onLoad={handleLoad}
//           style={{
//             display: 'none' // Hidden img for error handling
//           }}
//         />
//       </div>
//     );
//   };

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
//                 onClick={() => isSelected ? clearCategoryFilter() : handleCategoryFilter(cat)}
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
//                       clearCategoryFilter();
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
//               We couldn't find any blogs matching 
//               {searchTerm && <> <strong>"{searchTerm}"</strong></>}
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
//         <section
//           style={{
//             marginTop: '24px',
//             width: '100%',
//             maxWidth: '700px',
//             background: 'linear-gradient(135deg, #f9f5ff, #f3e8ff)',
//             padding: '40px 24px',
//             textAlign: 'center',
//             borderRadius: '20px',
//             boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             marginInline: 'auto'
//           }}
//         >
//           <div style={{
//             fontSize: '48px',
//             color: '#a855f7',
//             marginBottom: '16px'
//           }}>🙂</div>
//           <h3 style={{
//             fontSize: '24px',
//             fontWeight: '700',
//             color: '#4c1d95',
//             marginBottom: '12px'
//           }}>
//             No Posts Found
//           </h3>
//           <p style={{
//             fontSize: '16px',
//             color: '#4b5563',
//             maxWidth: '500px',
//             lineHeight: '1.6'
//           }}>
//             It looks like there are no blog posts available at the moment. 
//             Please check back later for fresh insights and discoveries!
//           </p>
//         </section>
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
//               to={`/blogs/${blog.id}?page=${currentPage}`}
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
//               <BlogImage
//                 src={blog.image}
//                 alt={blog.title}
//                 style={{
//                   width: '100%',
//                   height: '180px'
//                 }}
//               />

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
//                   <span>👤 {blog.Author}</span>
//                   <span>📅 {blog.date.toString().slice(4, 15)}</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* Pagination Controls */}
//       {filteredBlogs.length > 0 && totalPages > 1 && (
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

//           <span style={{ color: '#6b7280', fontSize: '14px' }}>
//             Page {currentPage} of {totalPages}
//           </span>

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
//     'Collaboration', // Fixed typo from 'Collabration'
//     'Industrial Insights'
//   ];

//   const blogsPerPage = 15;
//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialPage = parseInt(searchParams.get('page') || '1', 10);
//   const [currentPage, setCurrentPage] = useState(initialPage);

//   useEffect(() => {
//     setSearchParams({ page: currentPage });
//     // Scroll to top when page changes
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [currentPage, setSearchParams]);

//   // Improved image extraction function
//   const extractImageFromContent = (content) => {
//     if (!content || typeof content !== 'string') {
//       return 'https://via.placeholder.com/300x180?text=Image';
//     }

//     try {
//       // More robust regex pattern for img tags
//       const imgTagRegex = /<img[^>]+>/gi;
//       const imgMatch = content.match(imgTagRegex);
      
//       if (!imgMatch || imgMatch.length === 0) {
//         return 'https://via.placeholder.com/300x180?text=Image';
//       }

//       // Extract src attribute from the first img tag
//       const firstImgTag = imgMatch[0];
//       const srcRegex = /src\s*=\s*["']([^"']+)["']/i;
//       const srcMatch = firstImgTag.match(srcRegex);
      
//       if (!srcMatch || srcMatch.length < 2) {
//         return 'https://via.placeholder.com/300x180?text=Image';
//       }

//       const imageUrl = srcMatch[1].trim();
      
//       // Validate that the URL is not empty and looks like a valid URL
//       if (!imageUrl || imageUrl.length === 0) {
//         return 'https://via.placeholder.com/300x180?text=Image';
//       }

//       // Basic URL validation
//       if (imageUrl.startsWith('data:image/') || 
//           imageUrl.startsWith('http://') || 
//           imageUrl.startsWith('https://') ||
//           imageUrl.startsWith('/')) {
//         return imageUrl;
//       }

//       return 'https://via.placeholder.com/300x180?text=Image';
//     } catch (error) {
//       console.error('Error extracting image from content:', error);
//       return 'https://via.placeholder.com/300x180?text=Image';
//     }
//   };

//   const FETCHPosts = async () => {
//     const Ref = collection(db, 'boltzmannlabs-posts');
    
//     try {
//       await onSnapshot(Ref, (POSTE) => {
//         if (POSTE.empty) {
//           setPostnotfound(true);
//           setPdata([]);
//           setReference([]);
//           return;
//         }

//         const postarray = [];
//         POSTE.forEach(Posts => {
//           const postData = Posts.data();
          
//           if (postData.published) {
//             const extractedImage = extractImageFromContent(postData.content);
            
//             postarray.push({
//               id: Posts.id,
//               Author: postData.author || 'Admin',
//               category: postData.categories, // Make sure this matches your Firestore field
//               title: postData.title || 'Untitled',
//               content: postData.content,
//               date: postData.created_date ? postData.created_date.toDate() : new Date(),
//               image: extractedImage
//             });
//           }
//         });

//         if (postarray.length === 0) {
//           setPostnotfound(true);
//           setPdata([]);
//           setReference([]);
//           return;
//         }

//         // Sort by date (newest first)
//         postarray.sort((a, b) => b.date - a.date);
        
//         setPdata(postarray);
//         setReference(postarray);
//         setPostnotfound(false);
//       });
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//       setPostnotfound(true);
//     }
//   };

//   const SearchFun = () => {
//     if (!searchTerm.trim()) {
//       setPdata(Reference);
//       setreslmessage('');
//       setPostnotfound(Reference.length === 0);
//       return;
//     }

//     const filteredArray = Reference.filter((post) => 
//       post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
//     );
    
//     setPdata(filteredArray);
//     setreslmessage(searchTerm.trim());
//     setPostnotfound(filteredArray.length === 0);
//     setCurrentPage(1); // Reset to first page after search
//   };

//   const clearSearch = () => {
//     setSearchTerm('');
//     setPdata(Reference);
//     setreslmessage('');
//     setSelectedCategory('');
//     setCurrentPage(1);
//     setPostnotfound(Reference.length === 0);
//   };

//   // Fixed category filter function
//   const handleCategoryFilter = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1); // Reset to first page when changing category
    
//     // Filter posts by category - checking if category array contains the selected category
//     let filteredData = Reference;
    
//     if (category) {
//       filteredData = filteredData.filter(post => {
//         // Handle both string and array categories
//         if (Array.isArray(post.category)) {
//           return post.category.includes(category);
//         } else {
//           return post.category === category;
//         }
//       });
//     }
    
//     if (searchTerm.trim()) {
//       filteredData = filteredData.filter(post => 
//         post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
//       );
//     }
    
//     setPdata(filteredData);
//     setPostnotfound(filteredData.length === 0);
//   };

//   // Clear category filter
//   const clearCategoryFilter = () => {
//     setSelectedCategory('');
//     setCurrentPage(1);
    
//     // Apply search filter if exists
//     let filteredData = Reference;
//     if (searchTerm.trim()) {
//       filteredData = filteredData.filter(post => 
//         post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
//       );
//     }
    
//     setPdata(filteredData);
//     setPostnotfound(filteredData.length === 0);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       FETCHPosts();
//     }, 200);

//     window.scrollTo(0, 0);

//     return () => clearTimeout(timer);
//   }, []);

//   // Updated filtering logic - this now correctly applies both filters
//   const filteredBlogs = Pdata.filter(blog => {
//     const matchesSearch = !searchTerm || 
//       blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    
//     // Handle both string and array categories
//     let matchesCategory = !selectedCategory;
//     if (selectedCategory) {
//       if (Array.isArray(blog.category)) {
//         matchesCategory = blog.category.includes(selectedCategory);
//       } else {
//         matchesCategory = blog.category === selectedCategory;
//       }
//     }
    
//     return matchesSearch && matchesCategory;
//   });

//   const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / blogsPerPage));
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

//   // Image error handler component
//   const BlogImage = ({ src, alt, style }) => {
//     const [imgSrc, setImgSrc] = useState(src);
//     const [hasError, setHasError] = useState(false);

//     const handleError = () => {
//       if (!hasError) {
//         setHasError(true);
//         setImgSrc('https://via.placeholder.com/300x180?text=Image+Not+Found');
//       }
//     };

//     const handleLoad = () => {
//       setHasError(false);
//     };

//     return (
//       <div 
//         style={{
//           ...style,
//           backgroundImage: `url(${imgSrc})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat'
//         }}
//       >
//         <img
//           src={imgSrc}
//           alt={alt}
//           onError={handleError}
//           onLoad={handleLoad}
//           style={{
//             display: 'none' // Hidden img for error handling
//           }}
//         />
//       </div>
//     );
//   };

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
//                 onClick={() => isSelected ? clearCategoryFilter() : handleCategoryFilter(cat)}
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
//                       clearCategoryFilter();
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
//               We couldn't find any blogs matching 
//               {searchTerm && <> <strong>"{searchTerm}"</strong></>}
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
//         <section
//           style={{
//             marginTop: '24px',
//             width: '100%',
//             maxWidth: '700px',
//             background: 'linear-gradient(135deg, #f9f5ff, #f3e8ff)',
//             padding: '40px 24px',
//             textAlign: 'center',
//             borderRadius: '20px',
//             boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             marginInline: 'auto'
//           }}
//         >
//           <div style={{
//             fontSize: '48px',
//             color: '#a855f7',
//             marginBottom: '16px'
//           }}>🙂</div>
//           <h3 style={{
//             fontSize: '24px',
//             fontWeight: '700',
//             color: '#4c1d95',
//             marginBottom: '12px'
//           }}>
//             No Posts Found
//           </h3>
//           <p style={{
//             fontSize: '16px',
//             color: '#4b5563',
//             maxWidth: '500px',
//             lineHeight: '1.6'
//           }}>
//             It looks like there are no blog posts available at the moment. 
//             Please check back later for fresh insights and discoveries!
//           </p>
//         </section>
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
//               to={`/blogs/${blog.id}?page=${currentPage}`}
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
//               <BlogImage
//                 src={blog.image}
//                 alt={blog.title}
//                 style={{
//                   width: '100%',
//                   height: '180px'
//                 }}
//               />

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
//                   <span>👤 {blog.Author}</span>
//                   <span>📅 {blog.date.toString().slice(4, 15)}</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* Pagination Controls */}
//       {filteredBlogs.length > 0 && totalPages > 1 && (
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

//           <span style={{ color: '#6b7280', fontSize: '14px' }}>
//             Page {currentPage} of {totalPages}
//           </span>

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
//     'Collaboration', // Fixed typo from 'Collabration'
//     'Industrial Insights'
//   ];

//   const blogsPerPage = 15;
//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialPage = parseInt(searchParams.get('page') || '1', 10);
//   const [currentPage, setCurrentPage] = useState(initialPage);

//   useEffect(() => {
//     setSearchParams({ page: currentPage });
//   }, [currentPage, setSearchParams]);

//   // Separate useEffect for scrolling to top when page changes
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [currentPage]);

//   // Improved image extraction function
//   const extractImageFromContent = (content) => {
//     if (!content || typeof content !== 'string') {
//       return 'https://via.placeholder.com/300x180?text=Image';
//     }

//     try {
//       // More robust regex pattern for img tags
//       const imgTagRegex = /<img[^>]+>/gi;
//       const imgMatch = content.match(imgTagRegex);
      
//       if (!imgMatch || imgMatch.length === 0) {
//         return 'https://via.placeholder.com/300x180?text=Image';
//       }

//       // Extract src attribute from the first img tag
//       const firstImgTag = imgMatch[0];
//       const srcRegex = /src\s*=\s*["']([^"']+)["']/i;
//       const srcMatch = firstImgTag.match(srcRegex);
      
//       if (!srcMatch || srcMatch.length < 2) {
//         return 'https://via.placeholder.com/300x180?text=Image';
//       }

//       const imageUrl = srcMatch[1].trim();
      
//       // Validate that the URL is not empty and looks like a valid URL
//       if (!imageUrl || imageUrl.length === 0) {
//         return 'https://via.placeholder.com/300x180?text=Image';
//       }

//       // Basic URL validation
//       if (imageUrl.startsWith('data:image/') || 
//           imageUrl.startsWith('http://') || 
//           imageUrl.startsWith('https://') ||
//           imageUrl.startsWith('/')) {
//         return imageUrl;
//       }

//       return 'https://via.placeholder.com/300x180?text=Image';
//     } catch (error) {
//       console.error('Error extracting image from content:', error);
//       return 'https://via.placeholder.com/300x180?text=Image';
//     }
//   };

//   const FETCHPosts = async () => {
//     const Ref = collection(db, 'boltzmannlabs-posts');
    
//     try {
//       await onSnapshot(Ref, (POSTE) => {
//         if (POSTE.empty) {
//           setPostnotfound(true);
//           setPdata([]);
//           setReference([]);
//           return;
//         }

//         const postarray = [];
//         POSTE.forEach(Posts => {
//           const postData = Posts.data();
          
//           if (postData.published) {
//             const extractedImage = extractImageFromContent(postData.content);
            
//             postarray.push({
//               id: Posts.id,
//               Author: postData.author || 'Admin',
//               category: postData.categories, // Make sure this matches your Firestore field
//               title: postData.title || 'Untitled',
//               content: postData.content,
//               date: postData.created_date ? postData.created_date.toDate() : new Date(),
//               image: extractedImage
//             });
//           }
//         });

//         if (postarray.length === 0) {
//           setPostnotfound(true);
//           setPdata([]);
//           setReference([]);
//           return;
//         }

//         // Sort by date (newest first)
//         postarray.sort((a, b) => b.date - a.date);
        
//         setPdata(postarray);
//         setReference(postarray);
//         setPostnotfound(false);
//       });
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//       setPostnotfound(true);
//     }
//   };

//   const SearchFun = () => {
//     if (!searchTerm.trim()) {
//       setPdata(Reference);
//       setreslmessage('');
//       setPostnotfound(Reference.length === 0);
//       return;
//     }

//     const filteredArray = Reference.filter((post) => 
//       post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
//     );
    
//     setPdata(filteredArray);
//     setreslmessage(searchTerm.trim());
//     setPostnotfound(filteredArray.length === 0);
//     setCurrentPage(1); // Reset to first page after search
//   };

//   const clearSearch = () => {
//     setSearchTerm('');
//     setPdata(Reference);
//     setreslmessage('');
//     setSelectedCategory('');
//     setCurrentPage(1);
//     setPostnotfound(Reference.length === 0);
//   };

//   // Fixed category filter function
//   const handleCategoryFilter = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1); // Reset to first page when changing category
    
//     // Filter posts by category - checking if category array contains the selected category
//     let filteredData = Reference;
    
//     if (category) {
//       filteredData = filteredData.filter(post => {
//         // Handle both string and array categories
//         if (Array.isArray(post.category)) {
//           return post.category.includes(category);
//         } else {
//           return post.category === category;
//         }
//       });
//     }
    
//     if (searchTerm.trim()) {
//       filteredData = filteredData.filter(post => 
//         post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
//       );
//     }
    
//     setPdata(filteredData);
//     setPostnotfound(filteredData.length === 0);
//   };

//   // Clear category filter
//   const clearCategoryFilter = () => {
//     setSelectedCategory('');
//     setCurrentPage(1);
    
//     // Apply search filter if exists
//     let filteredData = Reference;
//     if (searchTerm.trim()) {
//       filteredData = filteredData.filter(post => 
//         post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
//       );
//     }
    
//     setPdata(filteredData);
//     setPostnotfound(filteredData.length === 0);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       FETCHPosts();
//     }, 200);

//     window.scrollTo(0, 0);

//     return () => clearTimeout(timer);
//   }, []);

//   // Updated filtering logic - this now correctly applies both filters
//   const filteredBlogs = Pdata.filter(blog => {
//     const matchesSearch = !searchTerm || 
//       blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    
//     // Handle both string and array categories
//     let matchesCategory = !selectedCategory;
//     if (selectedCategory) {
//       if (Array.isArray(blog.category)) {
//         matchesCategory = blog.category.includes(selectedCategory);
//       } else {
//         matchesCategory = blog.category === selectedCategory;
//       }
//     }
    
//     return matchesSearch && matchesCategory;
//   });

//   const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / blogsPerPage));
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

//   // Pagination handlers with scroll to top
//   const handlePreviousPage = () => {
//     setCurrentPage(prev => Math.max(prev - 1, 1));
//   };

//   const handleNextPage = () => {
//     setCurrentPage(prev => Math.min(prev + 1, totalPages));
//   };

//   // Image error handler component
//   const BlogImage = ({ src, alt, style }) => {
//     const [imgSrc, setImgSrc] = useState(src);
//     const [hasError, setHasError] = useState(false);

//     const handleError = () => {
//       if (!hasError) {
//         setHasError(true);
//         setImgSrc('https://via.placeholder.com/300x180?text=Image+Not+Found');
//       }
//     };

//     const handleLoad = () => {
//       setHasError(false);
//     };

//     return (
//       <div 
//         style={{
//           ...style,
//           backgroundImage: `url(${imgSrc})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat'
//         }}
//       >
//         <img
//           src={imgSrc}
//           alt={alt}
//           onError={handleError}
//           onLoad={handleLoad}
//           style={{
//             display: 'none' // Hidden img for error handling
//           }}
//         />
//       </div>
//     );
//   };

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
//                 onClick={() => isSelected ? clearCategoryFilter() : handleCategoryFilter(cat)}
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
//                       clearCategoryFilter();
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
//               We couldn't find any blogs matching 
//               {searchTerm && <> <strong>"{searchTerm}"</strong></>}
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
//         <section
//           style={{
//             marginTop: '24px',
//             width: '100%',
//             maxWidth: '700px',
//             background: 'linear-gradient(135deg, #f9f5ff, #f3e8ff)',
//             padding: '40px 24px',
//             textAlign: 'center',
//             borderRadius: '20px',
//             boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             marginInline: 'auto'
//           }}
//         >
//           <div style={{
//             fontSize: '48px',
//             color: '#a855f7',
//             marginBottom: '16px'
//           }}>🙂</div>
//           <h3 style={{
//             fontSize: '24px',
//             fontWeight: '700',
//             color: '#4c1d95',
//             marginBottom: '12px'
//           }}>
//             No Posts Found
//           </h3>
//           <p style={{
//             fontSize: '16px',
//             color: '#4b5563',
//             maxWidth: '500px',
//             lineHeight: '1.6'
//           }}>
//             It looks like there are no blog posts available at the moment. 
//             Please check back later for fresh insights and discoveries!
//           </p>
//         </section>
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
//               to={`/blogs/${blog.id}?page=${currentPage}`}
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
//               <BlogImage
//                 src={blog.image}
//                 alt={blog.title}
//                 style={{
//                   width: '100%',
//                   height: '180px'
//                 }}
//               />

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
//                   <span>👤 {blog.Author}</span>
//                   <span>📅 {blog.date.toString().slice(4, 15)}</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* Pagination Controls */}
//       {filteredBlogs.length > 0 && totalPages > 1 && (
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
//               onClick={handlePreviousPage}
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

//           <span style={{ color: '#6b7280', fontSize: '14px' }}>
//             Page {currentPage} of {totalPages}
//           </span>

//           {currentPage < totalPages ? (
//             <button
//               onClick={handleNextPage}
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


import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import boltzBuzzLogo from '../assets/boltz_buzz_logo.png';
import Footer from '../components/Footer';

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [Pdata, setPdata] = useState([]);
  const [Reference, setReference] = useState([]);
  const [reslmessage, setreslmessage] = useState('');
  const [Postnotfound, setPostnotfound] = useState(false);
  const navigate = useNavigate();
  
  const categories = [
    'Technology',
    'Case Studies',
    'Education',
    'Collaboration',
    'Industrial Insights'
  ];

  // Improved image extraction function
  const extractImageFromContent = (content) => {
    if (!content || typeof content !== 'string') {
      return 'https://via.placeholder.com/300x180?text=Image';
    }

    try {
      // More robust regex pattern for img tags
      const imgTagRegex = /<img[^>]+>/gi;
      const imgMatch = content.match(imgTagRegex);
      
      if (!imgMatch || imgMatch.length === 0) {
        return 'https://via.placeholder.com/300x180?text=Image';
      }

      // Extract src attribute from the first img tag
      const firstImgTag = imgMatch[0];
      const srcRegex = /src\s*=\s*["']([^"']+)["']/i;
      const srcMatch = firstImgTag.match(srcRegex);
      
      if (!srcMatch || srcMatch.length < 2) {
        return 'https://via.placeholder.com/300x180?text=Image';
      }

      const imageUrl = srcMatch[1].trim();
      
      // Validate that the URL is not empty and looks like a valid URL
      if (!imageUrl || imageUrl.length === 0) {
        return 'https://via.placeholder.com/300x180?text=Image';
      }

      // Basic URL validation
      if (imageUrl.startsWith('data:image/') || 
          imageUrl.startsWith('http://') || 
          imageUrl.startsWith('https://') ||
          imageUrl.startsWith('/')) {
        return imageUrl;
      }

      return 'https://via.placeholder.com/300x180?text=Image';
    } catch (error) {
      console.error('Error extracting image from content:', error);
      return 'https://via.placeholder.com/300x180?text=Image';
    }
  };

  const FETCHPosts = async () => {
    const Ref = collection(db, 'boltzmannlabs-posts');
    
    try {
      await onSnapshot(Ref, (POSTE) => {
        if (POSTE.empty) {
          setPostnotfound(true);
          setPdata([]);
          setReference([]);
          return;
        }

        const postarray = [];
        POSTE.forEach(Posts => {
          const postData = Posts.data();
          
          if (postData.published) {
            const extractedImage = extractImageFromContent(postData.content);
            
            postarray.push({
              id: Posts.id,
              Author: postData.author || 'Admin',
              category: postData.categories,
              title: postData.title || 'Untitled',
              content: postData.content,
              date: postData.created_date ? postData.created_date.toDate() : new Date(),
              image: extractedImage
            });
          }
        });

        if (postarray.length === 0) {
          setPostnotfound(true);
          setPdata([]);
          setReference([]);
          return;
        }

        // Sort by date (newest first)
        postarray.sort((a, b) => b.date - a.date);
        
        setPdata(postarray);
        setReference(postarray);
        setPostnotfound(false);
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
      setPostnotfound(true);
    }
  };

  const SearchFun = () => {
    if (!searchTerm.trim()) {
      setPdata(Reference);
      setreslmessage('');
      setPostnotfound(Reference.length === 0);
      return;
    }

    const filteredArray = Reference.filter((post) => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
    
    setPdata(filteredArray);
    setreslmessage(searchTerm.trim());
    setPostnotfound(filteredArray.length === 0);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setPdata(Reference);
    setreslmessage('');
    setSelectedCategory('');
    setPostnotfound(Reference.length === 0);
  };

  // Fixed category filter function
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    
    // Filter posts by category - checking if category array contains the selected category
    let filteredData = Reference;
    
    if (category) {
      filteredData = filteredData.filter(post => {
        // Handle both string and array categories
        if (Array.isArray(post.category)) {
          return post.category.includes(category);
        } else {
          return post.category === category;
        }
      });
    }
    
    if (searchTerm.trim()) {
      filteredData = filteredData.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );
    }
    
    setPdata(filteredData);
    setPostnotfound(filteredData.length === 0);
  };

  // Clear category filter
  const clearCategoryFilter = () => {
    setSelectedCategory('');
    
    // Apply search filter if exists
    let filteredData = Reference;
    if (searchTerm.trim()) {
      filteredData = filteredData.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );
    }
    
    setPdata(filteredData);
    setPostnotfound(filteredData.length === 0);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      FETCHPosts();
    }, 200);

    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, []);

  // Updated filtering logic
  const filteredBlogs = Pdata.filter(blog => {
    const matchesSearch = !searchTerm || 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Handle both string and array categories
    let matchesCategory = !selectedCategory;
    if (selectedCategory) {
      if (Array.isArray(blog.category)) {
        matchesCategory = blog.category.includes(selectedCategory);
      } else {
        matchesCategory = blog.category === selectedCategory;
      }
    }
    
    return matchesSearch && matchesCategory;
  });

  // Image error handler component
  const BlogImage = ({ src, alt, style }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
      if (!hasError) {
        setHasError(true);
        setImgSrc('https://via.placeholder.com/300x180?text=Image+Not+Found');
      }
    };

    const handleLoad = () => {
      setHasError(false);
    };

    return (
      <div 
        style={{
          ...style,
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <img
          src={imgSrc}
          alt={alt}
          onError={handleError}
          onLoad={handleLoad}
          style={{
            display: 'none'
          }}
        />
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Add CSS for spinner animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
     
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '24px', marginTop: '20px' }}>
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
                onClick={() => isSelected ? clearCategoryFilter() : handleCategoryFilter(cat)}
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
                      clearCategoryFilter();
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
        marginTop: '-4rem',
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
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                SearchFun();
              }
            }}
            style={{
              border: 'none',
              outline: 'none',
              flex: 1,
              fontSize: '14px',
              backgroundColor: 'transparent'
            }}
          />
          <button 
            style={searchTerm === '' ? { display: 'none' } : { border: 'none', background: 'none', cursor: 'pointer' }}
            onClick={clearSearch}
          >
            <span style={{ color: '#9ca3af', fontSize: '16px' }}>✖</span>
          </button>
          <button 
            style={{ border: 'none', background: 'none', cursor: 'pointer' }}
            onClick={SearchFun}
          >
            <span style={{ color: '#9ca3af', fontSize: '16px' }}>↵</span>
          </button>
        </div>

        {/* Search results message */}
        {(reslmessage !== '' || selectedCategory) && (
          <div style={{ marginTop: '10px', width: '100%', textAlign: 'center' }}>
            <span style={{ color: '#501f84', fontWeight: 600 }}>
              Showing results {reslmessage && `for "${reslmessage}"`} 
              {reslmessage && selectedCategory && ' in'} 
              {selectedCategory && ` category "${selectedCategory}"`}
            </span>
            <button 
              onClick={clearSearch} 
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                marginLeft: '10px'
              }}
            >
              <span style={{ color: '#6366f1' }}>Clear all</span>
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredBlogs.length === 0 && Pdata.length > 0 && (
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
              We couldn't find any blogs matching 
              {searchTerm && <> <strong>"{searchTerm}"</strong></>}
              {selectedCategory && <> in <strong>{selectedCategory}</strong></>}. 
              Try refining your search or exploring other topics.
            </p>
          </section>
        )}
      </div>

      {/* Loading state */}
      {Pdata.length === 0 && !Postnotfound && (
        <div style={{ width: '100%', height: '100%', minHeight: '50vh', textAlign: 'center' }}>
          <div className="loader" style={{ 
            display: 'inline-block',
            width: '80px',
            height: '80px',
            border: '8px solid #f3f3f3',
            borderTop: '8px solid #3b82f6',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginTop: '100px'
          }}></div>
        </div>
      )}

      {/* No posts found */}
      {Postnotfound && Pdata.length === 0 && (
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
          }}>🙂</div>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#4c1d95',
            marginBottom: '12px'
          }}>
            No Posts Found
          </h3>
          <p style={{
            fontSize: '16px',
            color: '#4b5563',
            maxWidth: '500px',
            lineHeight: '1.6'
          }}>
            It looks like there are no blog posts available at the moment. 
            Please check back later for fresh insights and discoveries!
          </p>
        </section>
      )}

      {/* Blog Cards Grid - Now shows all blogs */}
      {filteredBlogs.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px'
        }}>
          {filteredBlogs.map(blog => (
            <Link
              key={blog.id}
              to={`/blogs/${blog.id}`}
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
              <BlogImage
                src={blog.image}
                alt={blog.title}
                style={{
                  width: '100%',
                  height: '180px'
                }}
              />

              <div style={{ padding: '16px' }}>
                <p style={{ 
                  fontSize: '14px', 
                  marginBottom: '12px',
                  fontWeight: '600',
                  height: '4.6rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {blog.title}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '12px',
                  color: '#6b7280'
                }}>
                  <span>👤 {blog.Author}</span>
                  <span>📅 {blog.date.toString().slice(4, 15)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

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
};

export default BlogsPage;