
import CRheader from "../components/buyneed/By Role/Clinical Researchers/CRheader";
import CRZigZagSection from "../components/buyneed/By Role/Clinical Researchers/CRinsight";
import CRMarketingDaySection from "../components/buyneed/By Role/Clinical Researchers/CRplusdata";
import Footer from "../components/Footer";
export default function Clinicalresearchers(){
return(
<>
<CRheader
logo="clinicalresearchers.png.jpg"
      title="Clinical Researchers"
      subtitle="By Role"
      description="Clinical researchers translate preclinical findings into patient-centered trials.
 They design studies to test safety, efficacy, and real-world impact.
 Their work ensures scientific discoveries become viable therapeutic solutions.

."  />
<CRZigZagSection />
<CRMarketingDaySection />
<Footer />
</>

)
}

