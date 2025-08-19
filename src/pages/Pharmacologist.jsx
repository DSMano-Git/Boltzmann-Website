import Pharmacoloheader from "../components/buyneed/By Role/Pharmacologists/Pharmacoloheader";
import PharmacoloZigZagSection from "../components/buyneed/By Role/Pharmacologists/Pharmacoloinsight";
import PharmacoloMarketingDaySection from "../components/buyneed/By Role/Pharmacologists/Pharmacoloplusdata";
import Footer from '../components/Footer'
export default function Pharmacologist(){
return(
<>
<Pharmacoloheader
logo="logo.png"
      title="Pharmacologists"
      subtitle="By Role"
      description="Medicinal chemists design and refine molecules to modulate biological targets effectively.
 They balance potency, selectivity, and safety while optimizing drug-like properties.
 Their insights bridge biological hypotheses with chemical innovation.
." 
/>
<PharmacoloZigZagSection />
<PharmacoloMarketingDaySection />
<Footer />
</>

)

}