import React from "react";
import { motion } from "framer-motion";
import { FiActivity, FiUsers, FiGlobe } from "react-icons/fi";

const MissionCardsVertical = () => {
  const cards = [
    {
      icon: <FiActivity size={28} />,
      title: "The Future of Science",
      content: "At Boltzmann Labs, we believe the future of science is autonomous, intelligent, and collaborative. Our AI-powered discovery platform transforms the way researchers work—enabling faster breakthroughs at reduced costs."
    },
    {
      icon: <FiUsers size={28} />,
      title: "Multidisciplinary Team",
      content: "We are AI engineers, scientists, and industry experts working at the intersection of life sciences, chemistry, and advanced computing. We create multi-agent systems and intelligent tools for unprecedented efficiency."
    },
    {
      icon: <FiGlobe size={28} />,
      title: "Transformative Impact",
      content: "From drug discovery to materials science, our technology adapts, learns, and scales. Combining cutting-edge AI with domain expertise, we're transforming how science happens across industries."
    }
  ];

  return (
    <section className="vertical-cards">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
          
            fontWeight: "400",
            color: "#4F1985",
            position: "relative"
          }}
        >
          Visionary Approach.
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
        </motion.h2>
        
        <div className="cards-stack">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="card-content">
                <div className="card-icon" style={{ color: "#7c3aed" }}>
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
              <div className="purple-accent" />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .vertical-cards {
          padding-top: 20px;
          
        }
        
        .container {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .section-title {
          font-size: 2.75rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 3rem;
          color: #1f2937;
          position: relative;
        }
        
       
        .cards-stack {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        
        .card {
          position: relative;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
        
        .card-content {
          padding: 3rem;
          padding-left: 4rem;
        }
        
        .purple-accent {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 6px;
          background: linear-gradient(to bottom, #8b5cf6, #6d28d9);
        }
        
        .card-icon {
          width: 60px;
          height: 60px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(124, 58, 237, 0.1);
          border-radius: 50%;
        }
        
        h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          color: #1f2937;
        }
        
        p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #4b5563;
        }
        
        @media (max-width: 768px) {
          .vertical-cards {
            padding: 4rem 1.5rem;
          }
          
          .section-title {
            font-size: 2.25rem;
            margin-bottom: 3.5rem;
          }
          
          .card-content {
            padding: 2.5rem;
            padding-left: 3rem;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }
          
          .card-content {
            padding: 2rem;
            padding-left: 2.5rem;
          }
          
          .card-icon {
            width: 50px;
            height: 50px;
            margin-bottom: 1.5rem;
          }
          
          h3 {
            font-size: 1.3rem;
          }
          
          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default MissionCardsVertical;