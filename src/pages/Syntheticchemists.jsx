import Synthetichemistrheader from "../components/buyneed/By Role/Syntheticchemists/Syntheticchemistheader";
import SynthetichemistZigZagSection from "../components/buyneed/By Role/Syntheticchemists/Syntheticchemistinsight";
import SynthetichemistMarketingDaySection from "../components/buyneed/By Role/Syntheticchemists/Syntheticchemistplusdata";
import Footer from "../components/Footer";
export default function Syntheticchemist(){

    return(
        <>
<Synthetichemistrheader
 logo="logo.png"
      title="Synthetic Chemists"
      subtitle="By Role"
      description="Medicinal chemists design and refine molecules to modulate biological targets effectively.
 They balance potency, selectivity, and safety while optimizing drug-like properties.
 Their insights bridge biological hypotheses with chemical innovation.
." 
 />
<SynthetichemistZigZagSection />
<SynthetichemistMarketingDaySection />
<Footer />
</>
    );
}