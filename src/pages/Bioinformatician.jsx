import Medichemistheader from '../components/buyneed/By Role/Bioinformatician/Bioinformaticianheader';
import BioinsightZigZagSection from '../components/buyneed/By Role/Bioinformatician/Bioinformaticianinsight';
import BioinfoMarketingDaySection from '../components/buyneed/By Role/Bioinformatician/Bioinformaticianplusdata';
import Footer from '../components/Footer';
export default function Bioinformatician(){
    return(
        <>
        <Medichemistheader
        logo="logo.png"
      title="Bioinformatician"
      subtitle="By Role"
      description="Medicinal chemists design and refine molecules to modulate biological targets effectively.
 They balance potency, selectivity, and safety while optimizing drug-like properties.
 Their insights bridge biological hypotheses with chemical innovation.
." />
        <BioinsightZigZagSection />
        <BioinfoMarketingDaySection />
        <Footer />
        </>
    ) 
}