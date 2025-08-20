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
      description="Pharmacologists study how molecules interact with biological systems.
They assess efficacy, safety, and mechanisms of action through experiments and modeling.
Their evaluations guide candidate selection and development.
.
." 
/>
<PharmacoloZigZagSection />
<PharmacoloMarketingDaySection />
<Footer />
</>

)

}