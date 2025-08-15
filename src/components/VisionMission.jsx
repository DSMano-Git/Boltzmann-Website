import React from "react";

const VisionMission = () => {
  return (
    <section
      style={{
        width: "100%",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "60px",
            fontWeight: "700",
            color: "#4F1985",
            position: "relative"
          }}
        >
          What guides us
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

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "80px",
            flexWrap: "wrap"
          }}
        >
          {/* Left decorative shapes - Desktop */}
          <div style={{ 
            display: "flex", 
            gap: "30px",
            "@media (max-width: 768px)": {
              display: "none"
            }
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px", marginTop: "40px" }}>
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  backgroundColor: "#4F1985",
                  borderRadius: "16px",
                  opacity: 0.8,
                  transform: "rotate(-5deg)"
                }}
              />
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  backgroundColor: "#2AC7C7",
                  borderRadius: "16px",
                  opacity: 0.8,
                  transform: "rotate(3deg)"
                }}
              />
            </div>
            <div
              style={{
                width: "220px",
                height: "260px",
                backgroundColor: "#FFD22E",
                borderRadius: "16px",
                opacity: 0.8,
                transform: "rotate(2deg)"
              }}
            />
          </div>

          {/* Mobile/Tablet decorative shapes */}
          <div style={{ 
            display: "none",
            "@media (max-width: 768px)": {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              width: "100%",
              marginBottom: "30px"
            }
          }}>
            <div style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              width: "100%"
            }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#4F1985",
                  borderRadius: "12px",
                  opacity: 0.8,
                  transform: "rotate(-5deg)"
                }}
              />
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  backgroundColor: "#FFD22E",
                  borderRadius: "12px",
                  opacity: 0.8,
                  transform: "rotate(2deg)"
                }}
              />
            </div>
            <div
              style={{
                width: "120px",
                height: "120px",
                backgroundColor: "#2AC7C7",
                borderRadius: "12px",
                opacity: 0.8,
                transform: "rotate(3deg)"
              }}
            />
          </div>

          {/* Right Vision & Mission content */}
          <div style={{ 
            flex: "1", 
            minWidth: "300px", 
            maxWidth: "600px",
            "@media (max-width: 768px)": {
              maxWidth: "100%",
              padding: "0 10px"
            }
          }}>
            <div style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  color: "#4F1985",
                  fontSize: "1.8rem",
                  marginBottom: "20px",
                  fontWeight: "600",
                  position: "relative",
                  display: "inline-block",
                  "@media (max-width: 768px)": {
                    fontSize: "1.5rem"
                  }
                }}
              >
                Our Vision
                <span
                  style={{
                    position: "absolute",
                    bottom: "-8px",
                    left: 0,
                    width: "50px",
                    height: "3px",
                    backgroundColor: "#4F1985",
                    borderRadius: "2px"
                  }}
                />
              </h3>
              <p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: "1.8",
                  color: "#555",
                  marginLeft: "10px",
                  "@media (max-width: 768px)": {
                    fontSize: "1rem",
                    marginLeft: "0"
                  }
                }}
              >
                To become the platform company that powers World-changing ventures, each with the potential to transform its industry.
              </p>
            </div>
            
            <div>
              <h3
                style={{
                  color: "#4F1985",
                  fontSize: "1.8rem",
                  marginBottom: "20px",
                  fontWeight: "600",
                  position: "relative",
                  display: "inline-block",
                  "@media (max-width: 768px)": {
                    fontSize: "1.5rem"
                  }
                }}
              >
                Our Mission
                <span
                  style={{
                    position: "absolute",
                    bottom: "-8px",
                    left: 0,
                    width: "50px",
                    height: "3px",
                    backgroundColor: "#4F1985",
                    borderRadius: "2px"
                  }}
                />
              </h3>
              <p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: "1.8",
                  color: "#555",
                  marginLeft: "10px",
                  "@media (max-width: 768px)": {
                    fontSize: "1rem",
                    marginLeft: "0"
                  }
                }}
              >
                We apply cutting-edge technologies—Artificial Intelligence, Deep Learning, Machine Learning, and more—using data-driven approaches to transform conventional drug design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;