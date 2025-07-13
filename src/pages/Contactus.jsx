import React from 'react';
import Footer from '../components/Footer';
export default function ContactUs() {
  const container = {
    width: '1100px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Georgia, serif',
  };

  const header = {
    textAlign: 'center',
    fontSize: '1.8rem',
    marginBottom: '30px',
    color: '#333',
  };

  const highlight = {
    color: '#3b82f6',
  };

  const grid = {

    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  };

  const side = {
    flex: '1 1 300px',
    minWidth: '280px',
  };

  const leftColumn = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const card = {
    backgroundColor: '#f3f0f0',
    borderRadius: '12px',
    padding: '30px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '1.2rem',
    marginTop: '25px'
  };

  const iconStyle = {
    marginRight: '20px',
    fontSize: '1.2rem',
  };

  const labelStyle = {
    fontSize: '1.3rem',
  };

  const rightColumn = {
    maxWidth: '500px',
  };

  const formTitle = {
    marginBottom: '20px',
    fontSize: '1.5rem',
    color: '#333',
  };

  const form = {
    display: 'flex',
    flexDirection: 'column',
  };

  const formLabel = {
    margin: '12px 0 6px',
    fontSize: '0.95rem',
  };

  const input = {
    padding: '10px 18px',
    border: '1px solid #ccc',
    borderRadius: '25px',
    fontSize: '0.95rem',
    outline: 'none',
    marginBottom: '10px',
  };

  const textarea = {
    ...input,
    minHeight: '100px',
    resize: 'vertical',
  };

  const button = {
    marginTop: '16px',
    marginBottom: '20px',
    margin: 'auto',
    padding: '6px 16px',
    backgroundColor: '#6b21a8',
    color: '#fff',
    border: 'none',
    borderRadius: '16px',
    fontSize: '0.75rem',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  };

  return (
    <>
    <div style={container}>
      <h2 style={header}>
        Contact <span style={highlight}>Us</span>
      </h2>
      <div style={grid}>
        <div style={{ ...side, ...leftColumn }}>
          <div style={card}>
            <span style={iconStyle}>Icon</span>
            <span style={labelStyle}>Office Email</span>
          </div>
          <div style={card}>
            <span style={iconStyle}>Icon</span>
            <span style={labelStyle}>Mobile Number</span>
          </div>
          <div style={card}>
            <span style={iconStyle}>Icon</span>
            <span style={labelStyle}>Office Address</span>
          </div>
          <div style={card}>
            <span style={iconStyle}>Icon</span>
            <span style={labelStyle}>Office Address</span>
          </div>
        </div>
        <div style={{ ...side, ...rightColumn }}>
          <h3 style={formTitle}>
            <span style={highlight}>We'd Love to Hear</span> from You
          </h3>
          <form style={form}>
            <label style={formLabel}>Name</label>
            <input type="text" placeholder="Enter Your Name" style={input} />

            <label style={formLabel}>Email</label>
            <input type="email" placeholder="Enter Your Email" style={input} />

            <label style={formLabel}>Mobile Number</label>
            <input type="tel" placeholder="Enter Your Mobile Number" style={input} />

            <label style={formLabel}>Message</label>
            <textarea placeholder="Enter your Message" style={textarea}></textarea>

            <button type="submit" style={button}>Send Message</button>
          </form>
        </div>
      </div>
     
    </div>
     <Footer />
     </>
  );
}
