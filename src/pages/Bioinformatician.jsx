import Medichemistheader from '../components/buyneed/By Role/Bioinformatician/Bioinformaticianheader';
import BioinsightZigZagSection from '../components/buyneed/By Role/Bioinformatician/Bioinformaticianinsight';
import BioinfoMarketingDaySection from '../components/buyneed/By Role/Bioinformatician/Bioinformaticianplusdata';
import Footer from '../components/Footer';
export default function Bioinformatician(){
    return(
        <>
        <Medichemistheader
        logo="./bioinfor.png.jpg"
      title="Bioinformatician"
      subtitle="By Role"
      description="Bioinformaticians turn complex biological datasets into actionable patterns and predictions.
They integrate omics, literature, and clinical data to uncover targets and mechanisms.
Their work drives data-informed decisions in discovery pipelines.

." />
        <BioinsightZigZagSection />
        <BioinfoMarketingDaySection />
        <Footer />
        </>
    ) 
}