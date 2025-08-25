import React from "react";
import { Linkedin } from "lucide-react";

export default function LeadershipSection() {
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const leaders = [
    {
      name: "SARATH KOLLI",
      title: "Co-Founder & Chief Executive Officer",
      image: "/Sarath_white.png",
      linkedin: "https://in.linkedin.com/in/kollisarath",
      route: "sarath-kolli",
      description: "Sarath Kolli is the Co-Founder and Chief Executive Officer of Boltzmann Labs, an AI-driven drug discovery company pioneering autonomous science in India. Since co-founding the company in 2019, Sarath has spearheaded its mission to transform pharmaceutical R&D through cutting-edge AI, multi-agent systems, and automation. Under his leadership, Boltzmann Labs—also known as Bayes Labs—has developed advanced computational tools to accelerate hit identification, molecular optimization, and synthetic pathway design. With a strong vision for building India's tech-bio ecosystem, Sarath is driving initiatives that merge AI innovation with real-world therapeutic impact."
    },
    {
      name: "DR. PARITOSH PRASHAR",
      title: "Co-Founder & Director",
      image: "/paritosh-sir.png",
      linkedin: "https://www.linkedin.com/in/paritosh-prashar-04a366163",
      route: "paritosh-prashar",
      description: "Dr Paritosh Prashar is the Co-Founder and Director of Boltzmann Labs, bringing deep expertise in biotechnology, drug discovery, and translational research. He joined Boltzmann Labs' leadership in 2023, complementing the company's AI capabilities with his strong domain background. His Expertise encompasses pre-clinical drug discovery including target identification and validation, assay development, biomarker analysis, and in vitro studies for IND filing, iPSC and CAR-T cells generation and validation. At Boltzmann Labs, Dr Prashar plays a pivotal role in shaping strategy, scientific direction, and collaborations with industry partners."
    }
  ];

  const isMobileOrTablet = isMobile;

  return (
    <section style={{
      padding: "1rem 1rem 6rem",
      marginBottom: "3rem"
    }}>
      <div style={{ maxWidth: "1100px", margin: "15px auto",background: '#ffffff'}}>
        <header style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <h2 style={{
            color: "#4F1985",
           fontSize: '32px', 
            fontWeight: '200', 
            
            background: "linear-gradient(135deg, #4F1985 )",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Our Leadership
             <span
            style={{
              display: "block",
              width: "80px",
              height: "4px",
              backgroundColor: "#4F1985",
              margin: "2px auto 0",
              borderRadius: "2px"
            }}
          />
          </h2>
          <p style={{
            color: "#64748b",
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            Meet the visionary leaders driving innovation in AI-powered drug discovery
          </p>
        </header>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobileOrTablet ? "1fr" : "repeat(2, minmax(0, 1fr))",
          gap: "2.5rem",
          alignItems: "stretch"
        }}>
          {leaders.map((leader, idx) => (
            <article
              key={idx}
              onClick={() => {
                // Navigate functionality would go here
                console.log(`Navigate to /leadership/${leader.route}`);
              }}
              style={{
                cursor: "pointer",
                borderRadius: "20px",
                padding: "1.5rem 1rem",
                boxShadow: "0 10px 30px rgba(79, 25, 133, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)",
                border: "1px solid rgba(79, 25, 133, 0.08)",
                transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                position: "relative",
                overflow: "hidden",
                transform: "translateY(0)",
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}
             
            >
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
              }}>
                <div style={{
                  marginBottom: "2rem"
                }}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    style={{
                      width: "180px",
                      height: "220px",
                      objectFit: "cover",
                      
                    }}
                  />
                </div>

                <div style={{ width: "100%" }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    marginBottom: "0.5rem"
                  }}>
                    <h3 style={{
                      margin: "0",
                      fontSize: "1.8rem",
                      fontWeight: "700",
                      color: "#1e293b",
                      letterSpacing: "-0.025em"
                    }}>
                      {leader.name}
                    </h3>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(leader.linkedin, "_blank", "noopener,noreferrer");
                      }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        background: "#0a66c2",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        flexShrink: 0
                      }}
                      
                    >
                      <Linkedin size={16} />
                    </button>
                  </div>
                  
                 <i> <p style={{
                    
                    color: "#4F1985",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    margin: "0 0 1.5rem 0"
                  }}>
                    {leader.title}
                  </p> </i>

                  <p style={{
                    color: "#475569",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    margin: "0",
                    textAlign: "justify"
                  }}>
                    {leader.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}