import ChemicalFeatureCard from "../components/buyneed/By Industry/Chemicals/Chemicalsgrid";
import Chemicals from "../components/buyneed/By Industry/Chemicals/Chemicalsimagesnumber";
import ChemicalsShowcase from "../components/buyneed/By Industry/Chemicals/Chemicalsheader";
import ChemicalsModulesSection from "../components/buyneed/By Industry/Chemicals/Chemicalsmodules";
import Footer from '../components/Footer'
export default function Chemicalss(){
    return(
<>
<ChemicalsShowcase />
<Chemicals />
<ChemicalFeatureCard />
<ChemicalsModulesSection />
<Footer />

</>

    )
}