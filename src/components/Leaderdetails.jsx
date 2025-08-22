// import React from "react";
import { useParams, Link } from "react-router-dom";

export default function LeaderDetails() {
  const { leaderId } = useParams();

  const bios = {
    "sarath-kolli": {
      name: "SARATH KOLLI",
      alumni: "IIT Bombay Alumni",
      image: "/sarath-sir.png",
      content: `Sarath Kolli is the Co-Founder and Chief Executive Officer of Boltzmann Labs, 
an AI-driven drug discovery company pioneering autonomous science in India. Since co-founding 
the company in 2019, Sarath has spearheaded its mission to transform pharmaceutical R&D 
through cutting-edge AI, multi-agent systems, and automation. Under his leadership, Boltzmann 
Labs—also known as Bayes Labs—has developed advanced computational tools to accelerate hit 
identification, molecular optimization, and synthetic pathway design. With a strong vision for 
building India's tech-bio ecosystem, Sarath is driving initiatives that merge AI innovation 
with real-world therapeutic impact.`
    },
    "paritosh-prashar": {
      name: "DR. PARITOSH PRASHAR",
      alumni: "IIT Kanpur Alumni",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `Dr Paritosh Prashar is the Co-Founder and Director of Boltzmann Labs, bringing 
deep expertise in biotechnology, drug discovery, and translational research. He joined 
Boltzmann Labs' leadership in 2023, complementing the company's AI capabilities with his 
strong domain background. His expertise encompasses pre-clinical drug discovery including 
target identification and validation, assay development, biomarker analysis, and in vitro 
studies for IND filing, iPSC and CAR-T cells generation and validation. At Boltzmann Labs, 
Dr Prashar plays a pivotal role in shaping strategy, scientific direction, and collaborations 
with industry partners.`
    }
  };

  const leader = bios[leaderId];

  if (!leader) {
    return (
      <div style={styles.notFoundContainer}>
        <h2 style={styles.notFoundTitle}>Leader Not Found</h2>
        <p style={styles.notFoundText}>
          The leader you're looking for doesn't exist in our records.
        </p>
        <Link to="/about#leadership" style={styles.backButton}>
          ← Back to Leadership
        </Link>
      </div>
    );
  }

  return (
    <section style={styles.container}>
      <div style={styles.content}>
        <div style={styles.imageContainer}>
          <img 
            src={leader.image} 
            alt={leader.name}
            style={styles.image}
          />
        </div>
        
        <div style={styles.textContainer}>
          <div style={styles.header}>
            <span style={styles.alumni}>{leader.alumni}</span>
            <h1 style={styles.name}>{leader.name}</h1>
            <div style={styles.divider}></div>
          </div>
          
          <div style={styles.bioContainer}>
            <p style={styles.contentText}>{leader.content}</p>
          </div>
        </div>
        
        <div style={styles.buttonContainer}>
          <Link to="/about#leadership" style={styles.backButton}>
            ← Back to Leadership
          </Link>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "2rem",
    backgroundColor: "#f8fafc",
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "900px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(79, 25, 133, 0.15)",
    overflow: "hidden",
    padding: "2.5rem",
  },
  imageContainer: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    overflow: "hidden",
    marginBottom: "2rem",
    border: "4px solid #f1f5f9",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  textContainer: {
    width: "100%",
    textAlign: "center",
    marginBottom: "2rem",
  },
  header: {
    marginBottom: "2rem",
  },
  alumni: {
    display: "inline-block",
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#4F1985",
    backgroundColor: "rgba(79, 25, 133, 0.1)",
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    marginBottom: "1rem",
  },
  name: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#1a202c",
    margin: "0.5rem 0",
    lineHeight: "1.2",
  },
  divider: {
    height: "3px",
    width: "60px",
    backgroundColor: "#4F1985",
    margin: "1.5rem auto",
    borderRadius: "2px",
  },
  bioContainer: {
    marginBottom: "2rem",
  },
  contentText: {
    lineHeight: "1.8",
    color: "#4a5568",
    fontSize: "1.05rem",
    textAlign: "justify",
    whiteSpace: "pre-line",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  backButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4F1985",
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1rem",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(79, 25, 133, 0.2)",
    border: "none",
    cursor: "pointer",
    minWidth: "200px",
  },
  notFoundContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50vh",
    textAlign: "center",
    padding: "2rem",
  },
  notFoundTitle: {
    fontSize: "1.8rem",
    color: "#4F1985",
    marginBottom: "1rem",
  },
  notFoundText: {
    fontSize: "1.1rem",
    color: "#718096",
    marginBottom: "2rem",
  },
};

// Add hover effect using JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const backButtons = document.querySelectorAll('a[style*="backButton"]');
  backButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.backgroundColor = "#3A1266";
      this.style.transform = "translateY(-2px)";
      this.style.boxShadow = "0 6px 12px rgba(79, 25, 133, 0.3)";
    });
    button.addEventListener('mouseleave', function() {
      this.style.backgroundColor = "#4F1985";
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 4px 6px rgba(79, 25, 133, 0.2)";
    });
  });
});