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
      description="Synthetic chemists transform molecular designs into real, testable compounds.
 They develop efficient, safe, and scalable synthetic routes.
 Their craftsmanship enables rapid validation of discovery hypotheses.

." 
 />
<SynthetichemistZigZagSection />
<SynthetichemistMarketingDaySection />
<Footer />
</>
    );
}