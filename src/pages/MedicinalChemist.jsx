import Medichemistheader from '../components/buyneed/By Role/medicinalchemist/Medichemistheader';
import BrandPerformanceSection from '../components/buyneed/By Role/medicinalchemist/medicinalinsight';
import MarketingDaySection from '../components/buyneed/By Role/medicinalchemist/Medicinalplusdata';
import Footer from '../components/Footer'

export default function Medicinalchemist(){
    return(
<>
<Medichemistheader 
logo="./medicinalchemist.png.jpeg"
      title="Medicinal Chemists"
      subtitle="By Role"
      description="Medicinal chemists design and refine molecules to modulate biological targets effectively.
 They balance potency, selectivity, and safety while optimizing drug-like properties.
 Their insights bridge biological hypotheses with chemical innovation.
."/>
<BrandPerformanceSection />
<MarketingDaySection />
<Footer />
</>

    )
}