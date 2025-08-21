
// import React, { useState, useEffect } from "react";

// export default function ProteinOverlappingCard() {
//   const [isLaptop, setIsLaptop] = useState(false);

//   useEffect(() => {
//     const checkWidth = () => {
//       setIsLaptop(window.innerWidth >= 1024);
//     };
//     checkWidth();
//     window.addEventListener("resize", checkWidth);
//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   return (
//     <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
//       {/* Top purple section */}
//       <div
//         style={{
//           background: "linear-gradient(135deg, #4F1985 0%, #6A1B9A 100%)",
//           height: "calc(100vh - 150px)",
//           minHeight: "600px",
//           maxHeight: "790px",
//           width: "100%",
//           color: "white",
//           padding: "20px",
//           boxSizing: "border-box",
//           textAlign: "center",
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         <div
//           style={{
//             maxWidth: "900px",
//             margin: "0 auto",
//             position: "relative",
//             zIndex: 2,
//             padding: "0 20px",
//           }}
//         >
//           <h2
//             style={{
//               marginBottom: "20px",
//               fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
//               fontWeight: 400,
//               letterSpacing: "0.5px",
//               lineHeight: 1.2,
//               paddingTop: "40px",
//             }}
//           >
//             Protein Engineering
//           </h2>
//           <p
//             style={{
//               maxWidth: "700px",
//               margin: "0 auto",
//               fontSize: "clamp(1rem, 2vw, 1.2rem)",
//               lineHeight: 1.6,
//               opacity: 0.9,
//               marginBottom: "30px",
//             }}
//           >
//             Reimagine how proteins are designed, optimized, and brought to life — faster, smarter, more precise.
//           </p>
//           <button
//             style={{
//               backgroundColor: "white",
//               color: "#4F1985",
//               border: "none",
//               padding: "12px 30px",
//               borderRadius: "30px",
//               fontSize: "1rem",
//               fontWeight: 500,
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               marginBottom: "20px",
//             }}
//           >
//             Request Demo
//           </button>
//         </div>
//       </div>

//       {/* White bottom section */}
//       <div
//         style={{
//           backgroundColor: "#ffffff",
//           width: "100%",
//           paddingTop: isLaptop ? "380px" : "min(300px, 30vw)", // reduced so height looks balanced
//           borderTopLeftRadius: "60px",
//           borderTopRightRadius: "60px",
//           marginTop: isLaptop ? "-160px" : "min(-150px, -15vw)", // overlap just enough
//           position: "relative",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Center splash image */}
//       <div
//         style={{
//           position: "absolute",
//           top: isLaptop ? "330px" : "min(400px, 50vw)", // visually centered for desktop
//           left: "50%",
//           transform: "translateX(-50%)",
//           zIndex: 2,
//           width: "90%",
//           maxWidth: "900px",
//           padding: "0 20px",
//           boxSizing: "border-box",
//         }}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//           alt="Splash"
//           style={{
//             width: "100%",
//             borderRadius: "16px",
           
//             transition:
//               "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//           }}
//         />
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ProteinOverlappingCard() {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Animate children one after another
      },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, duration: 0.6 } },
  };

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* Top purple section */}
      <div
        style={{
          background: "linear-gradient(135deg, #4F1985 0%, #6A1B9A 100%)",
          height: "calc(100vh - 150px)",
          minHeight: "600px",
          maxHeight: "790px",
          width: "100%",
          color: "white",
          padding: "20px",
          boxSizing: "border-box",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            padding: "0 20px",
          }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            style={{
              marginBottom: "20px",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 400,
              letterSpacing: "0.5px",
              lineHeight: 1.2,
              paddingTop: "40px",
            }}
            variants={fadeUpVariant}
          >
            Protein Engineering
          </motion.h2>

          <motion.p
            style={{
              maxWidth: "700px",
              margin: "0 auto 30px",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.6,
              opacity: 0.9,
            }}
            variants={fadeUpVariant}
          >
            Reimagine how proteins are designed, optimized, and brought to life — faster, smarter, more precise.
          </motion.p>

          <motion.button
            style={{
              backgroundColor: "white",
              color: "#4F1985",
              border: "none",
              padding: "12px 30px",
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: 500,
              cursor: "pointer",
              marginBottom: "20px",
            }}
            variants={buttonVariant}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={()=>window.location.href='/contact'}
          >
            Request Demo
          </motion.button>
        </motion.div>
      </div>

      {/* White bottom section */}
      <div
        style={{
          backgroundColor: "#ffffff",
          width: "100%",
          paddingTop: isLaptop ? "380px" : "min(300px, 30vw)",
          borderTopLeftRadius: "60px",
          borderTopRightRadius: "60px",
          marginTop: isLaptop ? "-160px" : "min(-150px, -15vw)",
          position: "relative",
          zIndex: 1,
        }}
      ></div>

      {/* Center splash image (static) */}
      <div
        style={{
          position: "absolute",
          top: isLaptop ? "330px" : "min(400px, 50vw)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          width: "90%",
          maxWidth: "900px",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          alt="Splash"
          style={{
            width: "100%",
            borderRadius: "16px",
          }}
        />
      </div>
    </div>
  );
}
