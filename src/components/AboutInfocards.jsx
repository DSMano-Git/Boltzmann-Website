
// import React from "react";

// const CultureCards = () => {
//   const cards = [
//     {
//       color: "#4F1985",
//       title: "Innovation at the Core",
//       text: `We believe innovation is not a one-off spark—it’s a continuous process of curiosity, experimentation, and adaptation. From developing autonomous scientific workflows to designing new AI architectures for complex problem-solving, we are committed to pushing the boundaries of what’s possible in science and technology.
// .`,
//       img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
//     },
//     {
//       color: "#00B5AD", 
//       title: " Open Source Research",
//       text: ` We champion openness in science. By contributing tools, datasets, and methodologies to the open-source community, we enable researchers worldwide to collaborate, validate, and build upon shared knowledge—accelerating global progress in the process.
// .`,
//       img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
//     },
//     {
//       color: "#FF7F50", 
//       title: "Scientific Integrity",
//       text: ` Every discovery we pursue is rooted in data-driven rigor and ethical research practices. We maintain transparency, reproducibility, and reliability as the foundation of all our solutions.
// `,
//       img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
//     },
    
//   ];

//   return (
//     <div style={{ maxWidth: "1100px", margin: "40px auto" }}>
//          <h2
//           style={{
//             textAlign: "center",
//             fontSize: "2.5rem",
//            paddingBottom: '20px',
//             fontWeight: "400",
//             color: "#4F1985",
//             position: "relative"
//           }}
//         >
//           What we Stand for.
//           <span
//             style={{
//               display: "block",
//               width: "80px",
//               height: "4px",
//               backgroundColor: "#4F1985",
//               margin: "15px auto 0",
            
//               borderRadius: "2px"
//             }}
//           />
//         </h2>
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             background: "#fff",
//             borderRadius: "20px",
//             padding: "20px",
//             boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
//             marginBottom: "30px",
//             overflow: "hidden",
//           }}
//         >
//           {/* Image Container */}
//           <div
//             style={{
//               background: card.color,
//               padding: "20px",
//               borderRadius: "20px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               flexShrink: 0,
//             }}
//           >
//             <img
//               src={card.img}
//               alt={card.title}
//               style={{
//                 width: "250px",
//                 height: "auto",
//                 borderRadius: "15px",
//                 objectFit: "cover",
//               }}
//             />
//           </div>

//           {/* Text Section */}
//           <div style={{ marginLeft: "30px", flex: 1 }}>
//             <h2
//               style={{
//                 color: card.color,
//                 fontSize: "24px",
//                 marginBottom: "10px",
//               }}
//             >
//               {card.title}
//             </h2>
//             <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#333" }}>
//               {card.text}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CultureCards;


// import React from "react";

// const CultureCards = () => {
//   const cards = [
//     {
//       color: "#4F1985",
//       title: "Innovation at the Core",
//       text: `We believe innovation is not a one-off spark—it's a continuous process of curiosity, experimentation, and adaptation. From developing autonomous scientific workflows to designing new AI architectures for complex problem-solving, we are committed to pushing the boundaries of what's possible in science and technology.`,
//       img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
//     },
//     {
//       color: "#00B5AD", 
//       title: "Open Source Research",
//       text: `We champion openness in science. By contributing tools, datasets, and methodologies to the open-source community, we enable researchers worldwide to collaborate, validate, and build upon shared knowledge—accelerating global progress in the process.`,
//       img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
//     },
//     {
//       color: "#FF7F50", 
//       title: "Scientific Integrity",
//       text: `Every discovery we pursue is rooted in data-driven rigor and ethical research practices. We maintain transparency, reproducibility, and reliability as the foundation of all our solutions.`,
//       img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
//     },
//   ];

//   return (
//     <div style={{ maxWidth: "1100px", margin: "40px auto", padding: "0 20px" }}>
//       <h2
//         style={{
//           textAlign: "center",
//           fontSize: "2.5rem",
//           paddingBottom: '20px',
//           fontWeight: "400",
//           color: "#4F1985",
//           position: "relative"
//         }}
//       >
//         What we Stand for.
//         <span
//           style={{
//             display: "block",
//             width: "80px",
//             height: "4px",
//             backgroundColor: "#4F1985",
//             margin: "15px auto 0",
//             borderRadius: "2px"
//           }}
//         />
//       </h2>
      
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             background: "#fff",
//             borderRadius: "20px",
//             padding: "20px",
//             boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
//             marginBottom: "30px",
//             overflow: "hidden",
//           }}
//           className="culture-card"
//         >
//           {/* Image Container */}
//           <div
//             style={{
//               background: card.color,
//               padding: "20px",
//               borderRadius: "20px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               flexShrink: 0,
//             }}
//             className="culture-card-image-container"
//           >
//             <img
//               src={card.img}
//               alt={card.title}
//               style={{
//                 width: "250px",
//                 height: "auto",
//                 borderRadius: "15px",
//                 objectFit: "cover",
//               }}
//               className="culture-card-image"
//             />
//           </div>

//           {/* Text Section */}
//           <div style={{ marginLeft: "30px", flex: 1 }} className="culture-card-text">
//             <h2
//               style={{
//                 color: card.color,
//                 fontSize: "24px",
//                 marginBottom: "10px",
//               }}
//             >
//               {card.title}
//             </h2>
//             <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#333" }}>
//               {card.text}
//             </p>
//           </div>
//         </div>
//       ))}

//       <style jsx>{`
//         @media (max-width: 900px) {
//           .culture-card {
//             flex-direction: column !important;
//             margin-top: 20px;
//           }
          
//           .culture-card-image-container {
//             margin-bottom: 20px;
//             width: 100%;
//           }
          
//           .culture-card-image {
//             width: 100% !important;
//             max-width: 400px;
//           }
          
//           .culture-card-text {
//             margin-left: 0 !important;
//             width: 100%;
//           }
//         }
        
//         @media (max-width: 600px) {
//           h2 {
//             font-size: 2rem !important;
            
//           }
          
//           .culture-card {
//             padding: 15px !important;
//           }
          
//           .culture-card-image-container {
//             padding: 15px !important;
            
//           }
//         }
        
//         @media (max-width: 400px) {
//           h2 {
//             font-size: 1.8rem !important;
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
      color: "#4F1985",
      title: "Innovation at the Core",
      text: `We believe innovation is not a one-off spark—it's a continuous process of curiosity, experimentation, and adaptation. From developing autonomous scientific workflows to designing new AI architectures for complex problem-solving, we are committed to pushing the boundaries of what's possible in science and technology.`,
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      color: "#00B5AD",
      title: "Open Source Research",
      text: `We champion openness in science. By contributing tools, datasets, and methodologies to the open-source community, we enable researchers worldwide to collaborate, validate, and build upon shared knowledge—accelerating global progress in the process.`,
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      color: "#FF7F50",
      title: "Scientific Integrity",
      text: `Every discovery we pursue is rooted in data-driven rigor and ethical research practices. We maintain transparency, reproducibility, and reliability as the foundation of all our solutions.`,
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="culture-cards-container">
      <h2 className="culture-title">
        What we Stand for.
        <span className="title-underline" />
      </h2>

      {cards.map((card, index) => (
        <div key={index} className="culture-card">
          <div
            className="culture-card-image-container"
            style={{ background: card.color }}
          >
            <img src={card.img} alt={card.title} className="culture-card-image" />
          </div>
          <div className="culture-card-text">
            <h2 style={{ color: card.color }}>{card.title}</h2>
            <p>{card.text}</p>
          </div>
        </div>
      ))}

      <style jsx>{`
        .culture-cards-container {
          max-width: 1100px;
          margin: 40px auto;
          padding: 0 20px;
        }

        .culture-title {
          text-align: center;
          font-size: 2.5rem;
          padding-bottom: 20px;
          font-weight: 400;
          color: #4f1985;
          position: relative;
        }

        .title-underline {
          display: block;
          width: 80px;
          height: 4px;
          background-color: #4f1985;
          margin: 15px auto 0;
          border-radius: 2px;
        }

        .culture-card {
          display: flex;
          flex-direction: row;
          align-items: center;
          background: #fff;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
          overflow: hidden;
        }

        .culture-card-image-container {
          padding: 20px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .culture-card-image {
          width: 250px;
          height: auto;
          border-radius: 15px;
          object-fit: cover;
        }

        .culture-card-text {
          margin-left: 30px;
          flex: 1;
        }

        .culture-card-text h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .culture-card-text p {
          font-size: 16px;
          line-height: 1.6;
          color: #333;
        }

        /* Tablet & Mobile */
        @media (max-width: 900px) {
          .culture-cards-container {
            margin-top: 190%; /* this works perfectly on smaller screens */
            width: 100%;
            max-width: 470px;
          }

          .culture-card {
            flex-direction: column;
            padding: 15px;
            width: 100%;
            max-width: 443px;
          }

          .culture-card-image-container {
            width: 100%;
            max-width: 400px;
            margin-bottom: 20px;
            padding: 15px;
            
          }

          .culture-card-image {
            width: 100%;
            max-width: 350px;
            
          }

          .culture-card-text {
            margin-left: 0;
            width: 100%;
          }

          .culture-card-text h2 {
            font-size: 22px;
            text-align: center;
          }

          .culture-card-text p {
            font-size: 15px;
            text-align: center;
            text-align: justify;
          }
        }

        @media (max-width: 600px) {
          .culture-card-image-container {
            max-width: 250px;
          }

          .culture-card-text h2 {
            font-size: 20px;
          }

          .culture-card-text p {
            font-size: 14px;
          }

          .culture-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 400px) {
          .culture-card-image-container {
            max-width: 200px;
          }

          .culture-card-text h2 {
            font-size: 18px;
          }

          .culture-card-text p {
            font-size: 13px;
          }

          .culture-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CultureCards;
