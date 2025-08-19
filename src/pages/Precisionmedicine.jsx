import PMExploreModulesSection from "../components/buyneed/By Industry/Precision Medicine/PMmodules";
import PMFeaturesGrid from "../components/buyneed/By Industry/Precision Medicine/PMgrid";
import PMNumbers from "../components/buyneed/By Industry/Precision Medicine/Pmimagesnumber";
import PMShowcase from "../components/buyneed/By Industry/Precision Medicine/PMheader";

export default function PrecisionMedicine(){
    return(
<>
<PMShowcase />
<PMNumbers />
<PMFeaturesGrid />
<PMExploreModulesSection />
</>

    );
}