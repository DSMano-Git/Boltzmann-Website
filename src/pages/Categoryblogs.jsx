import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Adver from "./Adver";

const CategoryBlog = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [Pdata, setPdata] = useState([]);
  const [Reference, setReference] = useState([]);
  const [Search, setSearch] = useState('');
  const [reslmessage, setreslmessage] = useState('');
  const [Postnotfound, setPostnotfound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fixed categories to match BlogsPage
  const categories = ['Technology', 'Case Studies', 'Education', 'Collaboration', 'Industrial Insights'];

  // Improved image extraction function
  const extractImageFromContent = (content) => {
    if (!content || typeof content !== 'string') {
      return require('../newimages/blank.jpg');
    }

    try {
      const imgTagRegex = /<img[^>]+>/gi;
      const imgMatch = content.match(imgTagRegex);
      
      if (!imgMatch || imgMatch.length === 0) {
        return require('../newimages/blank.jpg');
      }

      const firstImgTag = imgMatch[0];
      const srcRegex = /src\s*=\s*["']([^"']+)["']/i;
      const srcMatch = firstImgTag.match(srcRegex);
      
      if (!srcMatch || srcMatch.length < 2) {
        return require('../newimages/blank.jpg');
      }

      const imageUrl = srcMatch[1].trim();
      
      if (!imageUrl || imageUrl.length === 0) {
        return require('../newimages/blank.jpg');
      }

      if (imageUrl.startsWith('data:image/') || 
          imageUrl.startsWith('http://') || 
          imageUrl.startsWith('https://') ||
          imageUrl.startsWith('/')) {
        return imageUrl;
      }

      return require('../newimages/blank.jpg');
    } catch (error) {
      console.error('Error extracting image from content:', error);
      return require('../newimages/blank.jpg');
    }
  };

  const FETCHPosts = async () => {
    if (!category) return;
    
    // Check if category is valid
    if (!categories.includes(category)) {
      setPostnotfound(true);
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    setPostnotfound(false);
    
    try {
      const REF = collection(db, 'boltzmannlabs-posts');
      const q = query(REF, where("categories", "array-contains", category));
      
      await onSnapshot(q, (POSTE) => {
        const postarray = [];
        
        POSTE.forEach(Posts => {
          const postData = Posts.data();
          if (postData.published) {
            const extractedImage = extractImageFromContent(postData.content);
            
            postarray.push({
              id: Posts.id,
              Author: postData.author || 'Admin',
              category: postData.categories, // Use categories array
              title: postData.title || 'Untitled',
              content: postData.content,
              date: postData.created_date ? postData.created_date.toDate() : new Date(),
              image: extractedImage
            });
          }
        });
        
        if (postarray.length === 0) {
          setPostnotfound(true);
        } else {
          setPostnotfound(false);
        }
        
        // Sort by date (newest first)
        postarray.sort((a, b) => b.date - a.date);
        
        setPdata(postarray);
        setReference(postarray);
        setIsLoading(false);
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
      setPostnotfound(true);
      setIsLoading(false);
    }
  };

  const SearchFun = () => {
    if (!Search.trim()) {
      setPdata(Reference);
      setreslmessage('');
      setPostnotfound(Reference.length === 0);
      return;
    }

    const data = Reference;
    const refineddata = data.filter((data) => {
      return data.title.toLowerCase().includes(Search.toLowerCase().trim());
    });
    
    if (refineddata.length === 0) {
      setPostnotfound(true);
    } else {
      setPostnotfound(false);
    }
    
    setPdata(refineddata);
    setreslmessage(Search.trim());
  };

  const clearSearch = () => {
    setSearch('');
    setPdata(Reference);
    setreslmessage('');
    setPostnotfound(Reference.length === 0);
  };

  // Image component with error handling
  const BlogImage = ({ src, alt, style, fallbackSrc, onClick }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
      if (!hasError) {
        setHasError(true);
        setImgSrc(fallbackSrc || require('../newimages/blank.jpg'));
      }
    };

    const handleLoad = () => {
      setHasError(false);
    };

    return (
      <img
        style={style}
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        onClick={onClick}
      />
    );
  };

  useEffect(() => {
    document.title = `Boltzmann | ${category || 'Category'} Blog`;
    FETCHPosts();
    window.scrollTo(0, 0);
  }, [category]);

  const isMobile = window.innerWidth < 600;

  // If invalid category, show error
  if (category && !categories.includes(category)) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '50px' }}>
        <h2 style={{ color: '#501f84', marginBottom: '20px' }}>Invalid Category</h2>
        <p>The category "{category}" does not exist.</p>
        <button
          onClick={() => navigate('/blogs')}
          style={{
            background: '#501f84',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Back to All Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <p style={{ fontWeight: 'bold', color: 'black' }}>
        Category: <span style={{ color: '#501f84' }}>{category}</span>
      </p>
      
      <section className="blog_area sec_pad" style={{ padding: '80px 0px' }}>
        <div className="container">
          <Adver />
          
          {/* Search Bar */}
          <div className="widget sidebar_widget widget_search" style={{ marginBottom: '100px' }}>
            <div 
              className="searchbar" 
              style={{
                borderStyle: 'solid',
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: '10px',
                borderColor: '#501f84'
              }}
            >
              <input
                style={{
                  border: 'none',
                  background: 'none',
                  outline: 'none',
                  width: '90%',
                  paddingLeft: '10px'
                }}
                placeholder="Enter key words"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    SearchFun();
                  }
                }}
                onChange={(e) => setSearch(e.target.value)}
                value={Search}
              />
              <button
                style={Search === '' ? { display: 'none' } : { border: 'none', background: 'none', cursor: 'pointer' }}
                onClick={clearSearch}
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
              <button style={{ border: 'none', background: 'none', cursor: 'pointer' }} onClick={SearchFun}>
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          {/* Category Header */}
          <div>
            <p style={{ color: 'black', fontWeight: 'bold', fontSize: '16px', marginBottom: '50px' }}>
              CATEGORY: {category}
              <span>
                <button
                  onClick={() => navigate('/blogs')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '10px' }}
                >
                  <i className="fa fa-times" aria-hidden="true" />
                </button>
              </span>
            </p>
          </div>

          <div
            className="row"
            style={
              isMobile
                ? { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }
                : { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }
            }
          >
            {/* Sidebar */}
            <div
              className="col-lg-4"
              style={
                isMobile
                  ? { maxWidth: '100%', flex: '0 0 100%' }
                  : { maxWidth: '20%', flex: '0 0 20%' }
              }
            >
              <div className="blog-sidebar" style={{ paddingLeft: '10px', marginBottom: '150px' }}>
                <div className="widget sidebar_widget widget_recent_post mt_60" style={{ marginTop: '0px' }}>
                  <div className="widget_title">
                    <h3
                      className="f_p f_size_20 t_color3"
                      style={{ color: 'black', textAlign: 'left', fontSize: '22px' }}
                    >
                      Categories
                    </h3>
                    <div className="border_bottom" style={{ maxWidth: '80%' }}></div>
                  </div>
                  <div style={{ maxHeight: '600px' }}>
                    <ul className="list-unstyled">
                      {categories
                        .filter((data) => data !== category)
                        .map((data, index) => (
                          <li key={index}>
                            <button
                              style={{ 
                                background: 'none', 
                                border: 'none', 
                                cursor: 'pointer',
                                textAlign: 'left',
                                padding: '5px 0',
                                width: '100%'
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                navigate(`/blog/${data}`);
                              }}
                            >
                              <span style={{ color: '#501f84', textDecoration: 'none' }}>{data}</span>
                            </button>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div
              className="col-lg-8"
              style={
                isMobile
                  ? { maxWidth: '100%', flex: '0 0 100%' }
                  : { maxWidth: '80%', flex: '0 0 80%' }
              }
            >
              {/* Search Results Message */}
              {reslmessage !== '' && (
                <div style={{ marginBottom: '10px' }}>
                  <span style={{ color: '#501f84', fontWeight: 600 }}>
                    Search results for "{reslmessage}"
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
                    <i className="fa fa-times" aria-hidden="true" />
                  </button>
                </div>
              )}

              {/* Content Area */}
              {Pdata.length === 0 ? (
                Postnotfound ? (
                  <div style={{ textAlign: 'center', padding: '40px' }}>
                    <p style={{ fontSize: '20px', color: 'red', padding: '10px' }}>
                      No posts found {reslmessage ? `for "${reslmessage}"` : ''} in {category} category
                    </p>
                    {reslmessage && (
                      <button
                        onClick={clearSearch}
                        style={{
                          background: '#501f84',
                          color: 'white',
                          border: 'none',
                          padding: '10px 20px',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          marginTop: '10px'
                        }}
                      >
                        Clear Search
                      </button>
                    )}
                  </div>
                ) : isLoading ? (
                  <div style={{ width: '100%', height: '100%', minHeight: '50vh', textAlign: 'center' }}>
                    <span className="loader" style={{ position: 'relative', top: '50%' }}></span>
                  </div>
                ) : null
              ) : (
                <div className="row" id="blog_masonry">
                  {Pdata.map((data, index) => (
                    <div
                      className="col-lg-6 col-sm-6"
                      style={
                        isMobile
                          ? { maxWidth: '100%', marginBottom: '30px' }
                          : { maxWidth: '32%', justifyContent: 'space-between', marginBottom: '30px' }
                      }
                      key={index}
                    >
                      <div
                        className="blog_grid_item mb-30"
                        style={
                          isMobile
                            ? {
                                maxHeight: '100%',
                                boxShadow: '0px 2px 4px 0px rgba(12, 0, 46, 0.06)',
                                cursor: 'pointer',
                                borderRadius: '10px',
                                overflow: 'hidden'
                              }
                            : {
                                maxHeight: '100%',
                                minHeight: '100%',
                                overflow: 'hidden',
                                boxShadow: '0px 2px 4px 0px rgba(12, 0, 46, 0.06)',
                                border: 'solid',
                                borderRadius: '10px',
                                borderWidth: 'thin',
                                cursor: 'pointer'
                              }
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/blogs/${data.id}`); // Updated to match BlogsPage route
                        }}
                      >
                        <div className="blog_img" style={{ padding: '10px', background: 'none' }}>
                          <BlogImage
                            style={
                              isMobile
                                ? { width: '100%', height: 'auto', textAlign: 'center', borderRadius: '5px' }
                                : {
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                    textAlign: 'center',
                                    border: 'solid',
                                    borderRadius: '10px',
                                    borderWidth: '0.05px'
                                  }
                            }
                            src={data.image}
                            alt="Blog Image"
                            fallbackSrc={require('../newimages/blank.jpg')}
                          />
                        </div>
                        <div className="blog_content" style={{ padding: '10px', maxWidth: '90%' }}>
                          <a>
                            <h5
                              className="f_p f_size_20 f_500 t_color mb_20"
                              style={{
                                fontSize: '17px',
                                fontWeight: 'bold',
                                height: '4.5rem',
                                overflow: 'hidden',
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                textOverflow: 'ellipsis',
                                lineHeight: '1.4'
                              }}
                            >
                              <span className="blogtitle">{data.title}</span>
                            </h5>
                          </a>
                          <div
                            className="entry_post_info"
                            style={{
                              fontSize: '10px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginTop: '10px'
                            }}
                          >
                            <span
                              style={{
                                fontSize: '12px',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                maxWidth: '50%',
                                textOverflow: 'ellipsis',
                                color: '#666'
                              }}
                            >
                              {data.Author || 'Admin'}
                            </span>
                            <span style={{ fontSize: '12px', color: '#666' }}>
                              {data.date.toString().slice(4, 15)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryBlog;