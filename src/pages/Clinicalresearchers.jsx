
import CRheader from "../components/buyneed/By Role/Clinical Researchers/CRheader";
import CRZigZagSection from "../components/buyneed/By Role/Clinical Researchers/CRinsight";
import CRMarketingDaySection from "../components/buyneed/By Role/Clinical Researchers/CRplusdata";
import Footer from "../components/Footer";
export default function Clinicalresearchers(){
return(
<>
<CRheader
logo="logo.png"
      title="Clinical Researchers"
      subtitle="By Role"
      description="Medicinal chemists design and refine molecules to modulate biological targets effectively.
 They balance potency, selectivity, and safety while optimizing drug-like properties.
 Their insights bridge biological hypotheses with chemical innovation.
."  />
<CRZigZagSection />
<CRMarketingDaySection />
<Footer />
</>

)
}

