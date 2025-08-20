import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import CTBrandShowcase from "../components/Clinical Trials/CTImages_description";
import CTFeaturesGrid from "../components/Clinical Trials/CTFeatureGrid";
import CTInsightCards from "../components/Clinical Trials/CTinsights";
import CTModulesSection from "../components/Clinical Trials/CTmodules";
import CTOverlappingCard from "../components/Clinical Trials/CTheader";
import LaptopSection from "./LaptopAnimationLandingPage";
import Footer from "../components/Footer";

export default function Clinicaltrials() {
  const { ref: laptopRef, inView: laptopInView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // triggers when 30% of section is visible
  });

  return (
    <>
      <CTOverlappingCard />
      <CTBrandShowcase />
      <CTInsightCards />
      <CTModulesSection />
      <CTFeaturesGrid />

      <motion.div
        ref={laptopRef}
        initial={{ opacity: 0, y: 60 }}
        animate={laptopInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.2,
        }}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1400px",
          }}
        >
          <LaptopSection isOpen={laptopInView} />
        </div>
      </motion.div>

      <Footer />
    </>
  );
}
