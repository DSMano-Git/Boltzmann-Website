import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import MultiomicsBrandShowcase from "../components/multiomicsanalysiscomp/MultiomicsImages_description";
import MultiomicsInsightCards from "../components/multiomicsanalysiscomp/Multiomicsinsights";
import MultiomicsModulesSection from "../components/multiomicsanalysiscomp/Multiomicsmodules";
import MultiomicsFeaturesGrid from "../components/multiomicsanalysiscomp/MultiomicsFeatureGrid";
import MultiomicsOverlappingCard from "../components/multiomicsanalysiscomp/Multiomicsheader";
import LaptopSection from "./LaptopAnimationLandingPage";
import Footer from "../components/Footer";

export default function Multiomicsanalysis() {
  const { ref: laptopRef, inView: laptopInView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // triggers when 30% of section is visible
  });

  return (
    <>
      <MultiomicsOverlappingCard />
      <MultiomicsBrandShowcase />
      <MultiomicsInsightCards />
      <MultiomicsModulesSection />
      <MultiomicsFeaturesGrid />

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
