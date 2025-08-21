import React, { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

export default function Oursuiterightdata() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleItem = (itemIndex) => {
    setOpenIndex(openIndex === itemIndex ? null : itemIndex);
  };

  const industries = [
    {
      title: "Pharmaceuticals & Biotechnology",
      desc: "Accelerate target-to-hit pipelines, optimize leads, and cut preclinical cycle times with intelligent automation."
    },
    {
      title: "Chemicals",
      desc: "Design novel molecules, assess synthesis pathways, and innovate sustainable formulations with AI-driven insights."
    },
    {
      title: "Agrochemicals & Crop Science",
      desc: "Discover safer, more effective crop protection compounds with predictive biology and structure-based design."
    },
    {
      title: "Contract Research Organizations (CROs)",
      desc: "Deliver faster, more reliable outcomes to clients with streamlined AI-powered discovery workflows."
    },
    {
      title: "Academic & Translational Research",
      desc: "Bring industrial-grade tools to your lab to explore therapeutic hypotheses, model molecules, and generate publishable insights."
    },
    {
      title: "Precision Medicine",
      desc: "Bridge genomics, phenotypes, and druggable targets with multi-modal data integration and patient-aware modeling."
    },
    {
      title: "Material Science",
      desc: "Explore, design, and validate new materials, polymers, and nanostructures with intelligent formulation and retrosynthesis tools."
    },
    {
      title: "Clinical Trials & Healthcare Innovation",
      desc: "Support smarter trial design and early intervention strategies by integrating drug discovery outputs with clinical data models."
    }
  ];

  const imageContent = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: isMobile ? "300px" : "600px",
        transform: isVisible ? "translateX(0)" : "translateX(-50px)",
        opacity: isVisible ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDelay: "0.2s"
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1693919653649-27492e78899d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0"
        alt="Industries We Serve"
        style={{
          borderRadius: "20px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );

  const accordionContent = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "16px",
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        opacity: isVisible ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDelay: "0.4s",
        height: "100%"
      }}
    >
      {industries.map((item, itemIndex) => {
        const isOpen = openIndex === itemIndex;
        
        return (
          <div
            key={itemIndex}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: isMobile ? "14px" : "18px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              opacity: isVisible ? 1 : 0,
              transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
              transitionDelay: `${0.6 + (itemIndex * 0.08)}s`
            }}
          >
            <button
              onClick={() => toggleItem(itemIndex)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "left",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <h3
                style={{
                  fontSize: isMobile ? "15px" : "17px",
                  fontWeight: 600,
                  color: "#1e293b",
                  margin: 0
                }}
              >
                {item.title}
              </h3>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
              }}>
                {isOpen ? (
                  <Minus size={16} color="#9333ea" style={{
                    transition: "all 0.3s ease"
                  }} />
                ) : (
                  <Plus size={16} color="#9333ea" style={{
                    transition: "all 0.3s ease"
                  }} />
                )}
              </div>
            </button>

            <div
              style={{
                maxHeight: isOpen ? "200px" : "0",
                opacity: isOpen ? 1 : 0,
                overflow: "hidden",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isOpen ? "translateY(0)" : "translateY(-10px)"
              }}
            >
              <p
                style={{
                  marginTop: "10px",
                  color: "#475569",
                  lineHeight: "1.6",
                  fontSize: isMobile ? "13px" : "14px",
                  margin: "10px 0 0 0"
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      ref={sectionRef}
      style={{
        backgroundColor: "#ffffff",
        padding: isMobile ? "40px 16px" : "80px 24px",
      }}
    >
      <h2
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? "32px" : "42px",
          fontWeight: 400,
          color: "#4F1985",
          margin: 0,
          padding: "20px",
          textAlign: "center",
          marginBottom: isMobile ? "40px" : "60px",
          lineHeight: 1.2,
          transform: isVisible ? "translateY(0)" : "translateY(-20px)",
          opacity: isVisible ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
        }}
      >
       Who It’s Built For

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
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "40px" : "60px",
          alignItems: "center",
        }}
      >
        {isMobile ? (
          <>
            {imageContent}
            {accordionContent}
          </>
        ) : (
          <>
            {imageContent}
            {accordionContent}
          </>
        )}
      </div>
    </div>
  );
}