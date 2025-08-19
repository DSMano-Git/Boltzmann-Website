import AgroExploreModulesSection from "../components/buyneed/By Industry/Agrochemicals and Crop Science/Agrochemicalsmodules";
import AgroFeaturesGrid from "../components/buyneed/By Industry/Agrochemicals and Crop Science/Agrochemicalsgrid";
import AgroNumbers from "../components/buyneed/By Industry/Agrochemicals and Crop Science/Agrochemicalsimagesnumber";
import AgroShowcase from "../components/buyneed/By Industry/Agrochemicals and Crop Science/Agrochemicalsheader";
import Footer from '../components/Footer'
export default function Agrochemicals(){
    return(
<>
<AgroShowcase />
<AgroNumbers />
<AgroFeaturesGrid />


<AgroExploreModulesSection />
<Footer />
</>


    )
}