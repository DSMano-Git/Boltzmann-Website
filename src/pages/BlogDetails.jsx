// import { useState, useEffect } from 'react';
// import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
// import { db } from '../firebase';
// import { doc, getDoc, collection, query, orderBy, getDocs } from 'firebase/firestore';
// import Footer from '../components/Footer';
// import boltzBuzzLogo from '../assets/boltz_buzz_logo.png'

// export default function BlogDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const page = parseInt(searchParams.get('page') || '1', 10);
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [adjacentPosts, setAdjacentPosts] = useState({ prev: null, next: null });
//   const [scrollProgress, setScrollProgress] = useState(0);

//   // Scroll progress handler
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       const windowHeight = window.innerHeight;
//       const docHeight = document.documentElement.scrollHeight;
//       const progress = (scrollTop / (docHeight - windowHeight)) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const fetchBlogPost = async () => {
//       try {
//         const docRef = doc(db, 'boltzmannlabs-posts', id);
//         const docSnap = await getDoc(docRef);
        
//         if (docSnap.exists()) {
//           const data = docSnap.data();
//           // Extract first image for the title image
//           const firstImageMatch = data.content?.match(/<img[^>]*>/);
//           const titleImage = firstImageMatch 
//             ? firstImageMatch[0].match(/src=["']([^"']*)["']/)[1] 
//             : 'https://via.placeholder.com/800x450?text=No+Image';
          
//           // Remove the first image from content if it exists
//           const contentWithoutFirstImage = firstImageMatch 
//             ? data.content.replace(firstImageMatch[0], '') 
//             : data.content;

//           const currentPost = {
//             id: docSnap.id,
//             title: data.title,
//             author: data.author || 'Admin',
//             date: data.created_date?.toDate() || new Date(),
//             content: contentWithoutFirstImage,
//             categories: data.categories || [],
//             image: titleImage
//           };
//           setBlog(currentPost);

//           // Fetch adjacent posts
//           const postsRef = collection(db, 'boltzmannlabs-posts');
//           const q = query(postsRef, orderBy('created_date', 'desc'));
//           const querySnapshot = await getDocs(q);
          
//           const allPosts = [];
//           querySnapshot.forEach((doc) => {
//             allPosts.push({
//               id: doc.id,
//               ...doc.data(),
//               created_date: doc.data().created_date?.toDate() || new Date()
//             });
//           });

//           const currentIndex = allPosts.findIndex(post => post.id === id);
//           setAdjacentPosts({
//             prev: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
//             next: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
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

//   // Function to process content images - show full images without cutting
//   const processContentImages = (html) => {
//     if (!html) return html;
    
//     // Make all content images show fully without cutting
//     const processedHtml = html.replace(/<img[^>]*>/g, (imgTag) => {
//       // Extract src from the original img tag
//       const srcMatch = imgTag.match(/src=["']([^"']*)["']/);
//       const src = srcMatch ? srcMatch[1] : '';
      
//       return `<div style="width:100%; border-radius:12px; overflow:hidden; margin:24px auto; box-shadow:0 8px 24px rgba(0,0,0,0.1); display:block; background-color:#f8f9fa;">
//         <img src="${src}" alt="" style="width:100%; height:auto; object-fit:contain; object-position:center; display:block; max-height:600px;" />
//       </div>`;
//     });
    
//     return processedHtml;
//   };

//   if (loading) {
//     return (
//       <div style={{ 
//         display: 'flex', 
//         justifyContent: 'center', 
//         alignItems: 'center', 
//         height: '50vh' 
//       }}>
//         <div style={{ 
//           width: '50px',
//           height: '50px',
//           border: '5px solid #f3f3f3',
//           borderTop: '5px solid #4F1985',
//           borderRadius: '50%',
//           animation: 'spin 1s linear infinite'
//         }}></div>
//         <style>{`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}</style>
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
//             background: '#4F1985',
//             color: '#fff',
//             cursor: 'pointer',
//             transition: 'background-color 0.2s ease'
//           }}
//           onMouseOver={(e) => e.target.style.backgroundColor = '#3a1263'}
//           onMouseOut={(e) => e.target.style.backgroundColor = '#4F1985'}
//         >
//           Back to Blogs
//         </button>
//       </div>
//     );
//   }

//   if (!blog) return null;

//   return (
//     <div style={{ 
//       fontFamily: "'Inter', sans-serif",
//       position: 'relative'
//     }}>
//       {/* Progress Bar - positioned below navbar */}
    

//       {/* Main Content Container */}
//       <div style={{
//         width: '100%',
//         maxWidth: '1100px',
//         margin: '0 auto',
//         padding: '90px 20px 20px 20px', // Increased top padding for navbar + progress bar
//       }}>
//         {/* Blog Header */}
//         <header style={{ marginBottom: '40px' }}>
//           <h1 style={{ 
//             fontSize: '2.5rem',
//             fontWeight: '800',
//             color: '#1f2937',
//             marginBottom: '1.5rem',
//             lineHeight: '1.2',
//             letterSpacing: '-0.5px'
//           }}>
//             {blog.title}
//           </h1>
          
//           <div style={{ 
//             display: 'flex',
//             alignItems: 'center',
//             gap: '1rem',
//             marginBottom: '1.5rem',
//             color: '#6b7280',
//             fontSize: '0.875rem'
//           }}>
//             <span>👤 {blog.author}</span>
//             <span>📅 {blog.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
//           </div>

//           {/* Title Image - Full image visible without cutting */}
//           {blog.image && (
//          <div 
//   style={{ 
//     width: '70%',
//     maxWidth: '890px',
//     margin: '0 auto 2.5rem auto', // center horizontally
//     borderRadius: '20px',
//     boxShadow: '0 8px 24px rgba(0,0,0,0.08)', // soft cute shadow
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     background: '#fff' // fallback background
//   }}
//   onMouseEnter={(e) => {
//     e.currentTarget.style.transform = 'scale(1.02)';
//     e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
//   }}
//   onMouseLeave={(e) => {
//     e.currentTarget.style.transform = 'scale(1)';
//     e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
//   }}
// >
//   <img 
//     src={blog.image} 
//     alt={blog.title}
//     style={{
//       width: '100%',
//       height: 'auto',
//       borderRadius: '20px',
//       display: 'block',
      
//       maxHeight: '520px'
//     }}
//   />
// </div>

//           )}
//         </header>

//         {/* Blog Content */}
//         <article 
//           dangerouslySetInnerHTML={{ __html: processContentImages(blog.content) }} 
//           style={{
//             lineHeight: '1.8',
//             fontSize: '1.125rem',
//             color: '#374151',
//             marginBottom: '3rem',
//             fontFamily: "'Inter', sans-serif"
//           }}
//         />

//         {/* Navigation */}
//         <div style={{
//   display: 'flex',
//   justifyContent: 'space-between',
//   marginTop: '3rem',
//   paddingTop: '2rem',
//   borderTop: '1px solid #e5e7eb'
// }}>
//   {adjacentPosts.prev ? (
//     <button
//       onClick={() => navigate(`/blogs/${adjacentPosts.prev.id}?page=${page}`)}
//       style={{
//         padding: '12px 28px',
//         borderRadius: '999px',
//         border: 'none',
//         background: 'linear-gradient(135deg, #4F1985)',
//         color: '#ffffff',
//         fontSize: '1rem',
//         fontWeight: '500',
//         cursor: 'pointer',
//         display: 'flex',
//         alignItems: 'center',
//         gap: '10px',
//         minWidth: '160px',
//         justifyContent: 'center',
//         boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
//         transition: 'all 0.3s ease'
//       }}
//       onMouseOver={(e) => {
//         e.currentTarget.style.transform = 'translateY(-2px)';
//         e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)';
       
//       }}
//       onMouseOut={(e) => {
//         e.currentTarget.style.transform = 'translateY(0)';
//         e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
       
//       }}
//     >
//       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
//         <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//       </svg>
//       Previous
//     </button>
//   ) : <div style={{ width: '160px' }}></div>}

//   <button
//     onClick={() => navigate(`/blogs?page=${page}`)}
//     style={{
//       padding: '12px 28px',
//       borderRadius: '999px',
//       border: 'none',
//        background: 'linear-gradient(135deg, #4F1985)',
//         color: '#ffffff',
//       fontSize: '1rem',
//       fontWeight: '500',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
//     }}
//     onMouseOver={(e) => {
//       e.currentTarget.style.transform = 'translateY(-2px)';
//       e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)';
      
//     }}
//     onMouseOut={(e) => {
//       e.currentTarget.style.transform = 'translateY(0)';
//       e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
     
//     }}
//   >
//     All Posts
//   </button>

//   {adjacentPosts.next ? (
//     <button
//       onClick={() => navigate(`/blogs/${adjacentPosts.next.id}?page=${page}`)}
//       style={{
//         padding: '12px 28px',
//         borderRadius: '999px',
//         border: 'none',
//         background: 'linear-gradient(135deg, #4F1985)',
//         color: '#ffffff',
//         fontSize: '1rem',
//         fontWeight: '500',
//         cursor: 'pointer',
//         display: 'flex',
//         alignItems: 'center',
//         gap: '10px',
//         minWidth: '160px',
//         justifyContent: 'center',
//         boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
//         transition: 'all 0.3s ease'
//       }}
//       onMouseOver={(e) => {
//         e.currentTarget.style.transform = 'translateY(-2px)';
//         e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)';
       
//       }}
//       onMouseOut={(e) => {
//         e.currentTarget.style.transform = 'translateY(0)';
//         e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
        
//       }}
//     >
//       Next
//       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
//         <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//       </svg>
//     </button>
//   ) : <div style={{ width: '160px' }}></div>}
// </div>

//         {/* CTA Banner */}
//     {/* CTA Banner */}
//           <section
//             style={{
//               margin: '80px auto',
//               background: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
//               padding: '0',
//               borderRadius: '24px',
//               maxWidth: '740px',
//               boxShadow: '0 12px 24px rgba(0, 0, 0, 0.05)',
//               overflow: 'hidden',
//               position: 'relative',
//               border: '2px dotted rgba(167, 139, 250, 0.3)',
//             }}
//           >
//             <div
//               style={{
//                 display: 'flex',
//                 flexDirection: 'row',
//                 flexWrap: 'wrap',
//                 position: 'relative',
//                 zIndex: 1,
//                 minHeight: '300px',
//               }}
//             >
//               <div
//                 style={{
//                   flex: '1 1 300px',
//                   minWidth: '280px',
//                   position: 'relative',
//                   overflow: 'hidden',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   padding: '20px',
//                 }}
//               >
//                 <div
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)',
//                     borderRadius: '16px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     border: '3px solid white',
//                     boxShadow: 'inset 0 0 20px rgba(255,255,255,0.5)',
//                   }}
//                 >
//                   <img
//                     src={boltzBuzzLogo}
//                     alt="Boltz Buzz Logo"
//                     style={{
//                       width: '80%',
//                       height: 'auto',
//                       objectFit: 'contain',
//                       display: 'block',
//                       filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
//                     }}
//                   />
//                 </div>
//               </div>
    
//               <div
//                 style={{
//                   flex: '1 1 300px',
//                   minWidth: '280px',
//                   padding: '40px',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   background: 'linear-gradient(135deg, #faf5ff, #f5f3ff)',
//                   textAlign: 'left',
//                 }}
//               >
//                 <h3
//                   style={{
//                     fontSize: '28px',
//                     fontWeight: '800',
//                     color: '#6d28d9',
//                     marginBottom: '16px',
//                     lineHeight: '1.2',
//                     letterSpacing: '-0.5px',
//                     fontFamily: "'Comic Sans MS', cursive, sans-serif",
//                     textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
//                   }}
//                 >
//                   Want More Insights?
//                 </h3>
//                 <p
//                   style={{
//                     fontSize: '17px',
//                     color: '#5b21b6',
//                     marginBottom: '28px',
//                     lineHeight: '1.6',
//                     fontFamily: "'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
//                   }}
//                 >
//                   Join our buzzing community on LinkedIn
//                 </p>
//                 <button
//                   style={{
//                     padding: '12px 24px',
//                     background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '999px',
//                     cursor: 'pointer',
//                     fontSize: '16px',
//                     fontWeight: '600',
//                     boxShadow: '0 4px 12px rgba(167, 139, 250, 0.4)',
//                     transition: 'all 0.3s ease',
//                     alignSelf: 'flex-start',
//                     position: 'relative',
//                     overflow: 'hidden',
//                   }}
//                   onMouseOver={(e) => {
//                     e.target.style.background = 'linear-gradient(90deg, #a78bfa, #8b5cf6)';
//                     e.target.style.transform = 'translateY(-2px)';
//                   }}
//                   onMouseOut={(e) => {
//                     e.target.style.background = 'linear-gradient(90deg, #8b5cf6, #a78bfa)';
//                     e.target.style.transform = 'translateY(0)';
//                   }}
//                 >
//                   Buzz With Us on LinkedIn
//                 </button>
//               </div>
//             </div>
//           </section>

        
//       </div>
//       <Footer />
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc, collection, query, orderBy, getDocs } from 'firebase/firestore';
import Footer from '../components/Footer';
import boltzBuzzLogo from '../assets/boltz_buzz_logo.png'

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adjacentPosts, setAdjacentPosts] = useState({ prev: null, next: null });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const progress = (scrollTop / (docHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const docRef = doc(db, 'boltzmannlabs-posts', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          // Extract first image for the title image
          const firstImageMatch = data.content?.match(/<img[^>]*>/);
          const titleImage = firstImageMatch 
            ? firstImageMatch[0].match(/src=["']([^"']*)["']/)[1] 
            : 'https://via.placeholder.com/800x450?text=No+Image';
          
          // Remove the first image from content if it exists
          const contentWithoutFirstImage = firstImageMatch 
            ? data.content.replace(firstImageMatch[0], '') 
            : data.content;

          const currentPost = {
            id: docSnap.id,
            title: data.title,
            author: data.author || 'Admin',
            date: data.created_date?.toDate() || new Date(),
            content: contentWithoutFirstImage,
            categories: data.categories || [],
            image: titleImage
          };
          setBlog(currentPost);

          // Fetch adjacent posts
          const postsRef = collection(db, 'boltzmannlabs-posts');
          const q = query(postsRef, orderBy('created_date', 'desc'));
          const querySnapshot = await getDocs(q);
          
          const allPosts = [];
          querySnapshot.forEach((doc) => {
            allPosts.push({
              id: doc.id,
              ...doc.data(),
              created_date: doc.data().created_date?.toDate() || new Date()
            });
          });

          const currentIndex = allPosts.findIndex(post => post.id === id);
          setAdjacentPosts({
            prev: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
            next: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
          });
        } else {
          setError('Blog post not found');
        }
      } catch (err) {
        setError('Failed to load blog post');
        console.error('Error fetching blog post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
    window.scrollTo(0, 0);
  }, [id]);

  // Function to process content images - show full images without cutting
  const processContentImages = (html) => {
    if (!html) return html;
    
    // Make all content images show fully without cutting
    const processedHtml = html.replace(/<img[^>]*>/g, (imgTag) => {
      // Extract src from the original img tag
      const srcMatch = imgTag.match(/src=["']([^"']*)["']/);
      const src = srcMatch ? srcMatch[1] : '';
      
      return `<div style="
        width:100%; 
        border-radius:16px; 
        overflow:hidden; 
        margin:32px auto; 
        box-shadow:0 8px 32px rgba(0,0,0,0.08); 
        display:block; 
        background-color:#f8f9fa;
        transition: transform 0.3s ease;
      ">
  
        <img 
          src="${src}" 
          alt="" 
          style="
            width:100%; 
            height:auto; 
            object-fit:scale-down; 
            object-position:center; 
            display:block; 
            max-height:none;
            border-radius:16px;
            padding: 10px;
          " 
        />
      </div>`;
    });
    
    return processedHtml;
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '60vh',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div style={{ 
          width: '60px',
          height: '60px',
          border: '6px solid #f3f4f6',
          borderTop: '6px solid #4F1985',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <p style={{
          color: '#6b7280',
          fontSize: '16px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: '500'
        }}>Loading amazing content...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        padding: '60px 20px', 
        textAlign: 'center',
        fontFamily: "'Inter', sans-serif",
        maxWidth: '600px',
        margin: '0 auto',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '8px'
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
        </div>
        <h2 style={{ 
          color: '#dc2626',
          fontSize: '24px',
          fontWeight: '700',
          margin: '0'
        }}>{error}</h2>
        <p style={{
          color: '#6b7280',
          fontSize: '16px',
          lineHeight: '1.5',
          margin: '0'
        }}>Sorry, we couldn't find the content you're looking for.</p>
        <button
          onClick={() => navigate(`/blogs?page=${page}`)}
          style={{
            padding: '14px 28px',
            borderRadius: '12px',
            border: 'none',
            background: 'linear-gradient(135deg, #4F1985, #6b46c1)',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(79, 25, 133, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(79, 25, 133, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(79, 25, 133, 0.3)';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5"/>
            <path d="M12 19l-7-7 7-7"/>
          </svg>
          Back to Blogs
        </button>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        .blog-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          position: relative;
          background: #fafafa;
          min-height: 100vh;
        }
        
        .main-content {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 90px 20px 40px 20px;
          background: #ffffff;
          border-radius: 0;
          position: relative;
        }
        
        .blog-header {
          margin-bottom: 48px;
          text-align: center;
        }
        
        .blog-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #111827;
          margin-bottom: 24px;
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-align: center;
        }
        
        .blog-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-bottom: 32px;
          color: #6b7280;
          font-size: 15px;
          font-weight: 500;
          flex-wrap: wrap;
        }
        
        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #f9fafb;
          border-radius: 24px;
          border: 1px solid #e5e7eb;
        }
        
        .meta-icon {
          width: 18px;
          height: 18px;
          opacity: 0.8;
        }
        
        .title-image-container {
          width: 100%;
          max-width: 900px;
          margin: 0 auto 48px auto;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          transition: all 0.4s ease;
          position: relative;
         
        }
        
        .title-image-container:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        
        .title-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: fill;
          object-position: center;
          max-height: 600px;
          border-radius: 24px;
        }
        
        .blog-content {
          line-height: 1.8;
          font-size: 18px;
          color: #374151;
          margin-bottom: 48px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .blog-content p {
          margin-bottom: 24px;
        }
        
        .blog-content h2 {
          font-size: 28px;
          font-weight: 700;
          color: #111827;
          margin: 40px 0 20px 0;
          line-height: 1.3;
        }
        
        .blog-content h3 {
          font-size: 22px;
          font-weight: 600;
          color: #111827;
          margin: 32px 0 16px 0;
          line-height: 1.4;
        }
        
        .blog-content ul, .blog-content ol {
          margin: 24px 0;
          padding-left: 24px;
        }
        
        .blog-content li {
          margin-bottom: 8px;
        }
        
        .blog-content blockquote {
          border-left: 4px solid #4F1985;
          padding-left: 24px;
          margin: 32px 0;
          font-style: italic;
          color: #6b7280;
          background: #f9fafb;
          padding: 24px;
          border-radius: 0 12px 12px 0;
        }
        
        .blog-content code {
          background: #f3f4f6;
          padding: 4px 8px;
          border-radius: 6px;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 14px;
        }
        
        .navigation-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 64px;
          padding-top: 32px;
          border-top: 2px solid #f3f4f6;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .nav-button {
          padding: 16px 32px;
          border-radius: 12px;
          border: none;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 140px;
          justify-content: center;
          transition: all 0.3s ease;
          text-decoration: none;
          white-space: nowrap;
        }
        
        .nav-button-primary {
          background: linear-gradient(135deg, #4F1985, #6b46c1);
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(79, 25, 133, 0.3);
        }
        
        .nav-button-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(79, 25, 133, 0.4);
        }
        
        .nav-button-secondary {
          background: #ffffff;
          color: #4F1985;
          border: 2px solid #4F1985;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .nav-button-secondary:hover {
          background: #4F1985;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(79, 25, 133, 0.3);
        }
        
        .nav-spacer {
          width: 140px;
          height: 1px;
        }
        
        .cta-section {
          margin: 80px auto;
          background: linear-gradient(135deg, #faf5ff, #f5f3ff);
          padding: 0;
          border-radius: 24px;
          max-width: 900px;
          box-shadow: 0 16px 40px rgba(79, 25, 133, 0.1);
          overflow: hidden;
          position: relative;
          border: 3px dotted rgba(167, 139, 250, 0.3);
          transition: transform 0.3s ease;
        }
        
       
        
        .cta-content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
          min-height: 320px;
        }
        
        .cta-image-container {
          flex: 1 1 300px;
          min-width: 280px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
        }
        
        .cta-image-wrapper {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ddd6fe, #c4b5fd);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid white;
          box-shadow: inset 0 0 30px rgba(255,255,255,0.6);
          transition: transform 0.3s ease;
        }
        
   
        
        .cta-logo {
          width: 85%;
          height: auto;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 6px 12px rgba(0,0,0,0.15));
        }
        
        .cta-text-container {
          flex: 1 1 300px;
          min-width: 280px;
          padding: 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(135deg, #faf5ff, #f5f3ff);
          text-align: left;
        }
        
        .cta-title {
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 600;
          color: #6d28d9;
          margin-bottom: 20px;
          line-height: 1.2;
          letter-spacing: -0.02em;
          font-family: 'Comic Sans MS', cursive, sans-serif;
        }
        
        .cta-description {
          font-size: 18px;
          color: #5b21b6;
          margin-bottom: 32px;
          line-height: 1.6;
          font-weight: 500;
           font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        }
        
        .cta-button {
          padding: 16px 32px;
          background: linear-gradient(135deg, #8b5cf6, #7e5be7ff);
          color: #fff;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
        
          transition: all 0.3s ease;
          align-self: flex-start;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .cta-button:hover {
          background: linear-gradient(135deg, #7e5be7ff, #8b5cf6);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(167, 139, 250, 0.5);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .main-content {
            padding: 80px 16px 32px 16px;
            border-radius: 0;
          }
          
          .blog-title {
            font-size: 2.2rem;
            margin-bottom: 20px;
          }
          
          .blog-meta {
            flex-direction: column;
            gap: 12px;
          }
          
          .meta-item {
            font-size: 14px;
            padding: 6px 12px;
          }
          
          .title-image-container {
            margin-bottom: 32px;
            border-radius: 16px;
          }
          
          .title-image {
            border-radius: 16px;
          }
          
          .blog-content {
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 32px;
          }
          
          .blog-content h2 {
            font-size: 24px;
            margin: 32px 0 16px 0;
          }
          
          .blog-content h3 {
            font-size: 20px;
            margin: 24px 0 12px 0;
          }
          
          .navigation-container {
            flex-direction: column;
            gap: 16px;
            margin-top: 48px;
          }
          
          .nav-button {
            width: 100%;
            max-width: 280px;
            padding: 14px 24px;
            font-size: 15px;
          }
          
          .nav-spacer {
            display: none;
          }
          
          .cta-section {
            margin: 60px 16px;
            border-radius: 20px;
          }
          
          .cta-content {
            flex-direction: column;
          }
          
          .cta-image-container {
            padding: 24px;
            min-height: 200px;
          }
          
          .cta-text-container {
            padding: 32px 24px;
            text-align: center;
          }
          
          .cta-button {
            align-self: center;
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .main-content {
            padding: 70px 12px 24px 12px;
          }
          
          .blog-title {
            font-size: 1.8rem;
          }
          
          .blog-content {
            font-size: 15px;
          }
          
          .nav-button {
            padding: 12px 20px;
            font-size: 14px;
            min-width: 120px;
          }
          
          .cta-section {
            margin: 40px 12px;
          }
          
          .cta-text-container {
            padding: 24px 20px;
          }
          
          .cta-title {
            font-size: 22px;
          }
          
          .cta-description {
            font-size: 16px;
          }
        }
        
        /* Large Desktop */
        @media (min-width: 1440px) {
          .main-content {
            max-width: 1400px;
            padding: 100px 40px 60px 40px;
            border-radius: 24px;
            margin-top: 20px;
            margin-bottom: 20px;
            box-shadow: 0 0 60px rgba(0,0,0,0.05);
          }
          
          .blog-title {
            font-size: 3.5rem;
          }
          
          .blog-content {
            font-size: 19px;
            max-width: 900px;
          }
          
          .title-image-container {
            max-width: 1000px;
          }
          
          .cta-section {
            max-width: 1000px;
          }
        }
      `}</style>

      <div className="blog-container">
        {/* Progress Bar - positioned below navbar */}
        <div style={{
          position: 'fixed',
          top: '70px',
          left: '0',
          right: '0',
          height: '4px',
          background: 'rgba(0,0,0,0.05)',
          zIndex: 1000
        }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(90deg, #4F1985, #8b5cf6)',
            width: `${scrollProgress}%`,
            transition: 'width 0.1s ease',
            borderRadius: '0 2px 2px 0'
          }} />
        </div>

        {/* Main Content Container */}
        <div className="main-content">
          {/* Blog Header */}
          <header className="blog-header">
            <h1 className="blog-title">
              {blog.title}
            </h1>
            
            <div className="blog-meta">
              <div className="meta-item">
                <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span>{blog.author}</span>
              </div>
              <div className="meta-item">
                <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>{blog.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>

            {/* Title Image - Full image visible without cutting */}
            {blog.image && (
              <div className="title-image-container">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="title-image"
                />
              </div>
            )}
          </header>

          {/* Blog Content */}
          <article 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: processContentImages(blog.content) }} 
          />

          {/* Navigation */}
          <nav className="navigation-container">
            {adjacentPosts.prev ? (
              <button
                onClick={() => navigate(`/blogs/${adjacentPosts.prev.id}?page=${page}`)}
                className="nav-button nav-button-primary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5"/>
                  <path d="M12 19l-7-7 7-7"/>
                </svg>
                Previous
              </button>
            ) : <div className="nav-spacer"></div>}

            <button
              onClick={() => navigate(`/blogs?page=${page}`)}
              className="nav-button nav-button-secondary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              All Posts
            </button>

            {adjacentPosts.next ? (
              <button
                onClick={() => navigate(`/blogs/${adjacentPosts.next.id}?page=${page}`)}
                className="nav-button nav-button-primary"
              >
                Next
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14"/>
                  <path d="M12 5l7 7-7 7"/>
                </svg>
              </button>
            ) : <div className="nav-spacer"></div>}
          </nav>

          {/* CTA Banner */}
          <section className="cta-section">
            <div className="cta-content">
              <div className="cta-image-container">
                <div className="cta-image-wrapper">
                  <img
                    src={boltzBuzzLogo}
                    alt="Boltz Buzz Logo"
                    className="cta-logo"
                  />
                </div>
              </div>

              <div className="cta-text-container">
                <h3 className="cta-title">
                  Want More Insights?
                </h3>
                <p className="cta-description">
                  Join our buzzing community on LinkedIn for more amazing content and insights.
                </p>
                <button className="cta-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Buzz With Us on LinkedIn
                </button>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}