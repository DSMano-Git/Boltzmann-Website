import React from "react";
import PropTypes from "prop-types";

const Bioinforheader = ({ logo, subtitle, title, description }) => {
  return (
    <section style={{ position: "relative", marginBottom: "2rem" }}>
      {/* Purple header */}
      <div style={{ backgroundColor: "#4F1985", height: "300px" }} />

      {/* Content card */}
      <div
        style={{
          background: "#fff",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          padding: "60px",
          maxWidth: "950px",
          margin: "-100px auto 0",
          display: "flex",
          alignItems: "center",
          gap: "60px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          flexDirection: "row",
        }}
      >
        {/* Image container */}
        <div
          style={{
            flex: "0 0 300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt=""
            style={{
              height: "230px",
              width: "390px",
              borderRadius: "30px",
            }}
          />
        </div>

        {/* Text content */}
        <div style={{ flex: 1 }}>
          {subtitle && (
            <p
              style={{
                color: "#4F1985",
                fontWeight: "600",
                fontSize: "1.1rem",
                marginBottom: "12px",
                letterSpacing: "1px",
              }}
            >
              {subtitle.toUpperCase()}
            </p>
          )}
          <h2
            style={{
              fontSize: "2.5rem",
              margin: "0 0 20px 0",
              fontWeight: "400",
              color: "#222",
              lineHeight: "1.2",
            }}
          >
            {title}
          </h2>
          {description && (
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#555",
                maxWidth: "600px",
                textAlign: 'justify'
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Inline responsive styles */}
      <style>
        {`
          @media (max-width: 1024px) {
            section > div:nth-child(2) {
              max-width: 85% !important;
              padding: 50px !important;
              gap: 40px !important;
            }
          }
          @media (max-width: 768px) {
            section > div:nth-child(2) {
              flex-direction: column !important;
              max-width: 80% !important;
              padding: 40px 20px !important;
              gap: 30px !important;
            }
            section > div:nth-child(2) > div:first-child {
              flex: 0 0 auto !important;
              width: 80% !important;
              max-width: 200px !important;
            }
            section > div:nth-child(2) img {
              max-height: 150px !important;
            }
            section > div:nth-child(2) h2 {
              font-size: 2rem !important;
            }
          }
          @media (max-width: 480px) {
            section > div:nth-child(2) {
              max-width: 90% !important;
              padding: 30px 15px !important;
              gap: 20px !important;
            }
            section > div:nth-child(2) > div:first-child {
              width: 70% !important;
              max-width: 180px !important;
            }
            section > div:nth-child(2) img {
              max-height: 120px !important;
            }
            section > div:nth-child(2) h2 {
              font-size: 1.8rem !important;
            }
            section > div:nth-child(2) p {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

Bioinforheader.propTypes = {
  logo: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Bioinforheader;
