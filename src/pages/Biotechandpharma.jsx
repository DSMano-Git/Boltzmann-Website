import ProteinEngineeringShowcase from '../components/buyneed/By Industry/Biotechpharma/Biotechandpharmaheader';
import PharmaFeaturesGrid from '../components/buyneed/By Industry/Biotechpharma/Biotechandpharmagrid'
import BiotechExploreModulesSection from '../components/buyneed/By Industry/Biotechpharma/Biotechandpharmamodules'
import ProteinNumbers from '../components/buyneed/By Industry/Biotechpharma/Biotechandpharmaimagesnumber';
import Footer from '../components/Footer'
export default function Biotechandpharma() {
    return(
<>
<ProteinEngineeringShowcase

 logo="logo.png"
      title="We're Boltzmann"
      subtitle="About us"
      description="Since 2019, our AI-powered discovery platform has been transforming the way researchers, scientists, and innovators work—enabling faster breakthroughs, reducing costs, and driving sustainable innovation."/>
<ProteinNumbers />
<PharmaFeaturesGrid />
<BiotechExploreModulesSection />
<Footer />
</>

    )
}