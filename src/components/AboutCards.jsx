
import React from "react";
import { FiCpu, FiLink, FiLayers } from "react-icons/fi";
import { motion } from "framer-motion";

const BusinessGuidance = () => {
  const cards = [
    {
      title: "AI + Automation",
      text: "Orchestrating multi-agent systems that handle complex research workflows.",
      icon: <FiCpu className="icon" />,
      color: "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)",
      delay: 0.2
    },
    {
      title: "Seamless Integration",
      text: "From in silico modeling to lab automation, our tools connect the dots.",
      icon: <FiLink className="icon" />,
      color: "linear-gradient(135deg, #059669 0%, #047857 100%)",
      delay: 0.4
    },
    {
      title: "Scalable Innovation",
      text: "Flexible enough for startups, powerful enough for enterprise R&D.",
      icon: <FiLayers className="icon" />,
      color: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  };

  return (
    <section className="business-guidance">
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          transition={{ delay: 0.1 }}
          className="section-header"
        >
         
        </motion.div>
 <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
           paddingBottom: '20px',
            fontWeight: "400",
            color: "#4F1985",
            position: "relative"
          }}
        >
          Our Approach.
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
        <motion.div
          className="cards-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="guidance-card"
              style={{ background: card.color }}
              variants={cardVariants}
              transition={{ delay: card.delay }}
            >
              <div className="card-icon-container">
                <div className="card-icon">{card.icon}</div>
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .business-guidance {
          padding-bottom: 20px;
          text-align: center;
          
          position: relative;
          overflow: hidden;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          
          position: relative;
        }
        
        .section-header {
          margin-bottom: 80px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
       
        
        .section-subtitle {
          font-size: 1.25rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto 30px;
          line-height: 1.6;
          font-weight: 400;
        }
        
      
        
        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          justify-content: center;
        }
        
        .guidance-card {
          color: #fff;
          border-radius: 16px;
          padding: 50px 35px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
         
          min-height: 300px;
          position: relative;
          overflow: hidden;
        }
        
        .card-icon-container {
          margin-bottom: 25px;
        }
        
        .card-icon {
          font-size: 2.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 20px;
          line-height: 1.3;
          color: white;
        }
        
        .card-text {
          font-size: 1.1rem;
          line-height: 1.7;
          opacity: 0.9;
          color: rgba(255, 255, 255, 0.9);
        }
        
        @media (max-width: 1200px) {
          .section-title {
            font-size: 2.7rem;
          }
        }
        
        @media (max-width: 992px) {
          .business-guidance {
         
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .guidance-card {
      
          }
        }
        
        @media (max-width: 768px) {
          .section-title {
            font-size: 2.2rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
          }
          
          .cards-container {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
        }
        
        @media (max-width: 576px) {
          .business-guidance {
            padding: 60px 15px;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .section-header {
            margin-bottom: 60px;
          }
          
          .guidance-card {
            padding: 35px 25px;
            min-height: 280px;
          }
        }
        
        @media (max-width: 400px) {
          .section-title {
            font-size: 1.8rem;
          }
          
          .cards-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default BusinessGuidance;