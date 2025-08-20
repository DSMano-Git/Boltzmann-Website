import CTShowcase from "../components/buyneed/By Industry/Clinical Trials/Ctheader";
import CTExploreModulesSection from "../components/buyneed/By Industry/Clinical Trials/Ctmodules";
import CTFeaturesGrid from "../components/Clinical Trials/CTFeatureGrid";
import CTNumbers from "../components/buyneed/By Industry/Clinical Trials/Ctimagesnumber";
import Footer from '../components/Footer'
export default function ClinicalTrials(){
    return(
<>
<CTShowcase />
<CTNumbers />
<CTFeaturesGrid />
<CTExploreModulesSection />
<Footer />
</>

    )
}