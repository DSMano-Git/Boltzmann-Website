import React, { useState } from 'react';
import Footer from '../components/Footer';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  /* ===== Responsive Styles ===== */
  const container = {
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '80px 20px',
    fontFamily: "'Poppins', sans-serif",
    '@media (max-width: 768px)': {
      padding: '60px 20px',
    },
    '@media (max-width: 480px)': {
      padding: '40px 15px',
    },
  };

  const grid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'flex-start',
    '@media (max-width: 1024px)': {
      gap: '40px',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '50px',
    },
  };

  const heading = {
    fontSize: '2.8rem',
    fontWeight: '500',
    color: '#1e293b',
    lineHeight: '1.3',
    marginBottom: '20px',
    '@media (max-width: 1200px)': {
      fontSize: '2.5rem',
    },
    '@media (max-width: 992px)': {
      fontSize: '2.2rem',
    },
    '@media (max-width: 768px)': {
      fontSize: '2rem',
      textAlign: 'center',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem',
    },
  };

  const highlight = { color: '#6116b1ff' };

  const subtext = {
    color: '#475569',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '40px',
    maxWidth: '550px',
    '@media (max-width: 768px)': {
      maxWidth: '100%',
      textAlign: 'center',
      fontSize: '1rem',
      marginBottom: '30px',
    },
  };

  const sectionTitle = {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    marginBottom: '15px',
    letterSpacing: '0.05em',
    '@media (max-width: 768px)': {
      textAlign: 'center',
    },
  };

  const badgeRow = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '40px',
    justifyContent: 'flex-start',
    '@media (max-width: 768px)': {
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto',
      paddingBottom: '20px',
      marginBottom: '30px',
      gap: '15px',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    '@media (max-width: 480px)': {
      gap: '10px',
    },
  };

  const badgeStyle = {
    height: '70px',
    objectFit: 'contain',
    flex: '0 0 auto',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
    '@media (max-width: 1200px)': {
      height: '60px',
    },
    '@media (max-width: 992px)': {
      height: '50px',
    },
    '@media (max-width: 768px)': {
      height: '45px',
      flexShrink: 0,
    },
    '@media (max-width: 480px)': {
      height: '40px',
    },
  };

  const contactDetails = {
    borderTop: '1px solid #e5e7eb',
    paddingTop: '30px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    '@media (max-width: 1024px)': {
      gap: '20px',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      alignItems: 'center',
      textAlign: 'center',
      gap: '25px',
    },
  };

  const contactItem = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '15px',
    },
  };

  const iconBox = {
    backgroundColor: 'rgba(124,58,237,0.1)',
    color: '#7c3aed',
    padding: '14px',
    borderRadius: '14px',
    fontSize: '1.3rem',
    flexShrink: 0,
    '@media (max-width: 480px)': {
      padding: '12px',
      fontSize: '1.1rem',
    },
  };

  const detailTitle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '5px',
    '@media (max-width: 480px)': {
      fontSize: '1rem',
    },
  };

  const detailText = {
    color: '#475569',
    lineHeight: '1.6',
    maxWidth: '320px',
    '@media (max-width: 768px)': {
      maxWidth: '100%',
    },
  };

  const formBox = {
    backgroundColor: '#fff',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)',
    border: '1px solid #ede9fe',
    '@media (max-width: 992px)': {
      padding: '30px',
    },
    '@media (max-width: 768px)': {
      margin: '0 auto',
      maxWidth: '600px',
    },
    '@media (max-width: 480px)': {
      padding: '25px 20px',
      borderRadius: '16px',
    },
  };

  const formTitle = {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '30px',
    background: '#4F1985',
    fontFamily: 'times',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    textAlign: 'center',
    '@media (max-width: 992px)': {
      fontSize: '1.6rem',
      marginBottom: '25px',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.4rem',
      marginBottom: '20px',
    },
  };

  const formLabel = {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#475569',
    marginBottom: '8px',
    display: 'block',
    '@media (max-width: 480px)': {
      fontSize: '0.95rem',
    },
  };

  const input = {
    width: 'calc(100% - 40px)',
    padding: '14px 20px',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    fontSize: '1rem',
    backgroundColor: '#f8fafc',
    marginBottom: '20px',
    outline: 'none',
    '@media (max-width: 480px)': {
      padding: '12px 16px',
      borderRadius: '12px',
      fontSize: '0.95rem',
      marginBottom: '16px',
    },
  };

  const textarea = {
    ...input,
    minHeight: '150px',
    resize: 'vertical',
    '@media (max-width: 480px)': {
      minHeight: '120px',
    },
  };

  const button = {
    marginTop: '10px',
    padding: '14px 28px',
    border: 'none',
    borderRadius: '14px',
    background: 'linear-gradient(90deg, #7c3aed, #6d28d9)',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    '@media (max-width: 480px)': {
      padding: '12px 24px',
      fontSize: '0.95rem',
    },
  };

  const successMessage = {
    marginTop: '20px',
    padding: '15px',
    borderRadius: '12px',
    backgroundColor: '#ecfdf5',
    border: '1px solid #a7f3d0',
    color: '#065f46',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
      padding: '12px',
      flexDirection: 'column',
      textAlign: 'center',
    },
  };

  // Function to apply responsive styles
  const responsiveStyle = (baseStyles) => {
    return {
      ...baseStyles,
      ...Object.fromEntries(
        Object.entries(baseStyles)
          .filter(([key]) => key.startsWith('@media'))
          .map(([key, value]) => [key, value])
      )
    };
  };

  return (
    <>
      {/* Page Heading */}
     <h2 style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontSize: '42px', 
            fontWeight: '200', 
            color: '#111827',
            margin: 0,
            padding: '20px',
            textAlign: 'center',
            fontWeight: 400,
            color: '#4F1985',
            fontSize: '2.5rem',
            fontFamily: 'timesnew'
          }}>
           Contact Us

             <span
            style={{
              display: "block",
              width: "80px",
              height: "4px",
              backgroundColor: "#4F1985",
              margin: "15px auto 0",
              borderRadius: "2px"
            }}
          />
          </h2>

      <div style={responsiveStyle(container)}>
        {/* Mobile Layout - Logos then Form */}
        <div style={{ 
          display: 'none',
          '@media (max-width: 768px)': {
            display: 'block'
          }
        }}>
          <div style={responsiveStyle(badgeRow)}>
            {[...Array(14)].map((_, i) => (
              <img
                key={i}
                src={`/logo-${i + 1}.png`}
                alt={`Logo ${i + 1}`}
                style={responsiveStyle(badgeStyle)}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={responsiveStyle(formBox)}
          >
            <h3 style={responsiveStyle(formTitle)}>We'd Love to Hear from You</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%' }}>
                <label style={responsiveStyle(formLabel)}>Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={responsiveStyle(input)}
                  placeholder="Enter Your Name"
                />

                <label style={responsiveStyle(formLabel)}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={responsiveStyle(input)}
                  placeholder="Enter Your Email"
                />

                <label style={responsiveStyle(formLabel)}>Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  style={responsiveStyle(input)}
                  placeholder="Enter Your Mobile Number"
                />

                <label style={responsiveStyle(formLabel)}>Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  style={responsiveStyle(textarea)}
                  placeholder="Enter your Message"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.97 }}
                style={{ 
                  ...responsiveStyle(button), 
                  margin: '20px auto 0 auto', 
                  display: 'flex', 
                  justifyContent: 'center' 
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      style={{ height: '20px', width: '20px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="animate-spin"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="4"
                        style={{ opacity: 0.25 }}
                      ></circle>
                      <path
                        fill="white"
                        style={{ opacity: 0.75 }}
                        d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </motion.button>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={responsiveStyle(successMessage)}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.5 4.48 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.4 8.6L8 12.2L15.6 4.6L17 6L8 15Z" />
                  </svg>
                  Your message has been sent successfully! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div style={{ 
          ...responsiveStyle(grid),
          '@media (max-width: 768px)': {
            display: 'none'
          }
        }}>
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={responsiveStyle(heading)}>
              Give your business the <br /> competitive edge with{' '}
              <span style={highlight}>Boltzmann Labs.</span>
            </h2>

            <p style={responsiveStyle(subtext)}>
              Discover how Meltwater can give your team unparalleled access to the
              insights you need to make an impact.
            </p>

            <p style={responsiveStyle(sectionTitle)}>Our Customers</p>

            {/* Logos */}
            <div style={responsiveStyle(badgeRow)}>
              {[...Array(14)].map((_, i) => (
                <img
                  key={i}
                  src={`/logo-${i + 1}.png`}
                  alt={`Logo ${i + 1}`}
                  style={responsiveStyle(badgeStyle)}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              ))}
            </div>

            {/* Contact Info - Now horizontal on desktop */}
            <div style={responsiveStyle(contactDetails)}>
              <div style={responsiveStyle(contactItem)}>
                <div style={responsiveStyle(iconBox)}><FaEnvelope /></div>
                <div>
                  <h3 style={responsiveStyle(detailTitle)}>Email Us</h3>
                  <p style={responsiveStyle(detailText)}>contact@boltzmann.co</p>
                </div>
              </div>

              <div style={responsiveStyle(contactItem)}>
                <div style={responsiveStyle(iconBox)}><FaPhoneAlt /></div>
                <div>
                  <h3 style={responsiveStyle(detailTitle)}>Call Us</h3>
                  <p style={responsiveStyle(detailText)}>+91 9498866488</p>
                </div>
              </div>

              <div style={responsiveStyle(contactItem)}>
                <div style={responsiveStyle(iconBox)}><FaMapMarkerAlt /></div>
                <div>
                  <h3 style={responsiveStyle(detailTitle)}>Visit Us</h3>
                  <p style={responsiveStyle(detailText)}>
                    B Block, Asian Sun City, 309, Forest Dept Colony, Kondapur,
                    Hyderabad, Telangana 500084
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={responsiveStyle(formBox)}
          >
            <h3 style={responsiveStyle(formTitle)}>We'd Love to Hear from You</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%' }}>
                <label style={responsiveStyle(formLabel)}>Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={responsiveStyle(input)}
                  placeholder="Enter Your Name"
                />

                <label style={responsiveStyle(formLabel)}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={responsiveStyle(input)}
                  placeholder="Enter Your Email"
                />

                <label style={responsiveStyle(formLabel)}>Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  style={responsiveStyle(input)}
                  placeholder="Enter Your Mobile Number"
                />

                <label style={responsiveStyle(formLabel)}>Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  style={responsiveStyle(textarea)}
                  placeholder="Enter your Message"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.97 }}
                style={{ 
                  ...responsiveStyle(button), 
                  margin: '20px auto 0 auto', 
                  display: 'flex', 
                  justifyContent: 'center' 
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      style={{ height: '20px', width: '20px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="animate-spin"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="4"
                        style={{ opacity: 0.25 }}
                      ></circle>
                      <path
                        fill="white"
                        style={{ opacity: 0.75 }}
                        d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </motion.button>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={responsiveStyle(successMessage)}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.5 4.48 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.4 8.6L8 12.2L15.6 4.6L17 6L8 15Z" />
                  </svg>
                  Your message has been sent successfully! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}