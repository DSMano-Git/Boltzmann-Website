import MSFeaturesGrid from "../components/buyneed/By Industry/Material Science/Msgrid";
import MSExploreModulesSection from "../components/buyneed/By Industry/Material Science/Msmodules";
import MSShowcase from "../components/buyneed/By Industry/Material Science/Msheader";
import MSNumbers from "../components/buyneed/By Industry/Material Science/Msimagesnumber";
import Footer from '../components/Footer';

export default function Materialsciences(){
    return(
<>
<MSShowcase />
<MSNumbers />
<MSFeaturesGrid />
<MSExploreModulesSection />
<Footer />
</>

    )
}