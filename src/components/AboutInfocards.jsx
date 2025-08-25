// import React from "react";

// const CultureCards = () => {
//   const cards = [
//     {
      
//       title: "Innovation at the Core",
//       text: `We believe innovation is not a one-off spark—it's a continuous process of curiosity, experimentation, and adaptation. From developing autonomous scientific workflows to designing new AI architectures for complex problem-solving, we are committed to pushing the boundaries of what's possible in science and technology.`,
//       img: "./what1.png",
//     },
//     {
      
//       title: "Open Source Research",
//       text: `We champion openness in science. By contributing tools, datasets, and methodologies to the open-source community, we enable researchers worldwide to collaborate, validate, and build upon shared knowledge—accelerating global progress in the process.`,
//       img: "./what2.png",
//     },
//     {
      
//       title: "Scientific Integrity",
//       text: `Every discovery we pursue is rooted in data-driven rigor and ethical research practices. We maintain transparency, reproducibility, and reliability as the foundation of all our solutions.`,
//       img: "./integrity.png",
//     },
//   ];

//   return (
//     <div className="culture-cards-container">
//       <h2 className="culture-title">
//         What we Stand for.
//         <span className="title-underline" />
//       </h2>

//       {cards.map((card, index) => (
//         <div key={index} className="culture-card">
//           <div
//             className="culture-card-image-container"
//             style={{ background: card.color }}
//           >
//             <img src={card.img} alt={card.title} className="culture-card-image" />
//           </div>
//           <div className="culture-card-text">
//             <h2 style={{ color: card.color }}>{card.title}</h2>
//             <p>{card.text}</p>
//           </div>
//         </div>
//       ))}

//       <style jsx>{`
//         .culture-cards-container {
//           max-width: 1100px;
//           margin: 40px auto;
//           padding: 0 20px;
//         }

//         .culture-title {
//           text-align: center;
//           font-size: 2.5rem;
//           padding-bottom: 20px;
//           font-weight: 400;
//           color: #4f1985;
//           position: relative;
//         }

//         .title-underline {
//           display: block;
//           width: 80px;
//           height: 4px;
//           background-color: #4f1985;
//           margin: 15px auto 0;
//           border-radius: 2px;
//         }

//         .culture-card {
//           display: flex;
//           flex-direction: row;
//           align-items: center;
//           background: #fff;
//           border-radius: 20px;
//           padding: 20px;
//           box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
//           margin-bottom: 30px;
//           overflow: hidden;
//         }

//         .culture-card-image-container {
//           padding: 20px;
//           border-radius: 20px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//         }

//         .culture-card-image {
//           width: 250px;
//           height: 220px;
//           border-radius: 15px;
          
//         }

//         .culture-card-text {
//           margin-left: 30px;
//           flex: 1;
//         }

//         .culture-card-text h2 {
//           font-size: 24px;
//           margin-bottom: 10px;
//         }

//         .culture-card-text p {
//           font-size: 16px;
//           line-height: 1.6;
//           color: #333;
//         }

//         /* Tablet & Mobile */
//         @media (max-width: 900px) {
//           .culture-cards-container {
//             margin-top: 190%; /* this works perfectly on smaller screens */
//             width: 100%;
//             max-width: 470px;
//           }

//           .culture-card {
//             flex-direction: column;
//             padding: 15px;
//             width: 100%;
//             max-width: 443px;
//           }

//           .culture-card-image-container {
//             width: 100%;
//             max-width: 400px;
//             margin-bottom: 20px;
//             padding: 15px;
            
//           }

//           .culture-card-image {
//             width: 100%;
//             max-width: 350px;
            
//           }

//           .culture-card-text {
//             margin-left: 0;
//             width: 100%;
//           }

//           .culture-card-text h2 {
//             font-size: 22px;
//             text-align: center;
//           }

//           .culture-card-text p {
//             font-size: 15px;
//             text-align: center;
//             text-align: justify;
//           }
//         }

//         @media (max-width: 600px) {
//           .culture-card-image-container {
//             max-width: 250px;
//           }

//           .culture-card-text h2 {
//             font-size: 20px;
//           }

//           .culture-card-text p {
//             font-size: 14px;
//           }

//           .culture-title {
//             font-size: 2rem;
//           }
//         }

//         @media (max-width: 400px) {
//           .culture-card-image-container {
//             max-width: 200px;
//           }

//           .culture-card-text h2 {
//             font-size: 18px;
//           }

//           .culture-card-text p {
//             font-size: 13px;
//           }

//           .culture-title {
//             font-size: 1.8rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CultureCards;



import React from "react";

const CultureCards = () => {
  const cards = [
    {
      title: "Innovation at the Core",
      text: `We believe innovation is not a one-off spark—it's a continuous process of curiosity, experimentation, and adaptation. From developing autonomous scientific workflows to designing new AI architectures for complex problem-solving, we are committed to pushing the boundaries of what's possible in science and technology.`,
      img: "./what1.png",
      color: "#6a11cb",
    },
    {
      title: "Open Source Research",
      text: `We champion openness in science. By contributing tools, datasets, and methodologies to the open-source community, we enable researchers worldwide to collaborate, validate, and build upon shared knowledge—accelerating global progress in the process.`,
      img: "./what2.png",
      color: "#2575fc",
    },
    {
      title: "Scientific Integrity",
      text: `Every discovery we pursue is rooted in data-driven rigor and ethical research practices. We maintain transparency, reproducibility, and reliability as the foundation of all our solutions.`,
      img: "./what3.png",
      color: "#4f1985",
    },
  ];

  return (
    <div className="culture-cards-container">
      <div className="culture-header">
        <h2 className="culture-title">
          What we Stand for.
          <span className="title-underline" />
        </h2>
      </div>

      <div className="culture-cards-grid">
        {cards.map((card, index) => (
          <div key={index} className="culture-card">
            <div
              className="culture-card-image-container"
              style={{ backgroundColor: `${card.color}15` }} // Light background using the color with opacity
            >
              <img src={card.img} alt={card.title} className="culture-card-image" />
            </div>
            <div className="culture-card-text">
              <h3 style={{ color: card.color }}>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .culture-cards-container {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 1.5rem;
        }

        .culture-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .culture-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #4f1985;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }

        .title-underline {
          position: absolute;
          bottom: -0.75rem;
          left: 50%;
          transform: translateX(-50%);
          width: 5rem;
          height: 0.25rem;
          background: linear-gradient(90deg, #4F1985 0%, #4F1985 100%);
          border-radius: 0.125rem;
        }

        .culture-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .culture-card {
          display: flex;
          background: #fff;
          border-radius: 1.25rem;
          padding: 1.5rem;
          box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .culture-card:hover {
          transform: translateY(-0.25rem);
          box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.12);
        }

        .culture-card-image-container {
          flex-shrink: 0;
          padding: 1.5rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 300px;
          height: 250px;
        }

        .culture-card-image {
          width: 80%;
          height: 80%;
          
          border-radius: 1rem;
        }

        .culture-card-text {
          margin-left: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .culture-card-text h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .culture-card-text p {
          font-size: 1rem;
          line-height: 1.7;
          color: #444;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .culture-cards-container {
            margin: 4rem auto;
          }
          
          .culture-title {
            font-size: 2.25rem;
          }
          
          .culture-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .culture-card-image-container {
            width: 100%;
            max-width: 350px;
            margin-bottom: 1.5rem;
          }
          
          .culture-card-text {
            margin-left: 0;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .culture-cards-container {
            margin: 3rem auto;
            padding: 0 1rem;
          }
          
          .culture-title {
            font-size: 2rem;
          }
          
          .culture-card {
            padding: 1.25rem;
          }
          
          .culture-card-image-container {
            padding: 1rem;
            height: 200px;
          }
          
          .culture-card-text h3 {
            font-size: 1.35rem;
          }
          
          .culture-card-text p {
            font-size: 0.95rem;
            text-align: justify;
          }
        }

        /* Small Mobile */
        @media (max-width: 400px) {
          .culture-title {
            font-size: 1.75rem;
          }
          
          .culture-card-image-container {
            height: 180px;
          }
          
          .culture-card-text h3 {
            font-size: 1.25rem;
          }
          
          .culture-card-text p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CultureCards;