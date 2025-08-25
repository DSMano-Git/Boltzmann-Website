// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NavbarPage from './components/NavbarPage';
// import { HelmetProvider } from 'react-helmet-async';
// import HomePage from './pages/HomePage'
// import HackathonPage from './pages/HackathonPage';
// import About from './pages/AboutPage';
// import Blogs from './pages/BlogsPage';
// import Products from './pages/Products';
// import Pipeline from './components/Pipeline';
// import BlogDetails from './pages/BlogDetails';
// import ScrollToTop from './pages/Scrolltotop'
// import ContactUs from './pages/Contactus';
// import SmallmoleculeDesign from './pages/Smallmoleculedesign';
// import Proteinengineering from './pages/Proteinengineering';
// import Synthetic from './pages/Syntheticchemistry';
// export default function App() {
//   return (
//     <BrowserRouter>
//       <NavbarPage />
// <ScrollToTop />
//     <Routes>
//   <Route path="/" element={<HomePage />} />
//   <Route path="/about" element={<About />} />
//   <Route path="/products" element={<Products />} />
//   <Route path="/blogs" element={<Blogs />} />
//   <Route path="/blogs/:id" element={<BlogDetails />} />
//   <Route path="/blogs/:id" element={<BlogDetails />} />
//   <Route path="/pipeline" element={<Pipeline />} />
//   <Route path="/hackathon" element={<HackathonPage />} />
//   <Route path="/contact" element={<ContactUs />} />
//     <Route path="/smallmoleculedesign" element={<SmallmoleculeDesign />} />
//     <Route path="/proteinengineering" element={<Proteinengineering />} />
//     <Route path="/syntheticchemistry" element={<Synthetic />} />

  
// </Routes>

//     </BrowserRouter>
//   );
// }


// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NavbarPage from './components/NavbarPage';
// import { HelmetProvider } from 'react-helmet-async';
// import HomePage from './pages/HomePage';
// import HackathonPage from './pages/HackathonPage';
// import About from './pages/AboutPage';
// import Blogs from './pages/BlogsPage';
// import CategoryBlog from './pages/Categoryblogs';
// import Products from './pages/Products';
// import Pipeline from './components/Pipeline';
// import BlogDetails from './pages/BlogDetails';
// import ScrollToTop from './pages/Scrolltotop';
// import ContactUs from './pages/Contactus';
// import SmallmoleculeDesign from './pages/Smallmoleculedesign';
// import Proteinengineering from './pages/Proteinengineering';
// import Synthetic from './pages/Syntheticchemistry';
// import Medicinalchemist from '../src/pages/MedicinalChemist';
// import Biotechandpharma from '../src/pages/Biotechandpharma';
// export default function App() {
//   return (
//     <BrowserRouter>
//       <NavbarPage />
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/category" element={<CategoryBlog />} />
//         <Route path="/blogs/:id" element={<BlogDetails />} />
        
//         <Route path="/pipeline" element={<Pipeline />} />
//         <Route path="/hackathon" element={<HackathonPage />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/smallmoleculedesign" element={<SmallmoleculeDesign />} />
//         <Route path="/proteinengineering" element={<Proteinengineering />} />
//         <Route path="/syntheticchemistry" element={<Synthetic />} />
//         <Route path="/medicinal-chemists" element={<Medicinalchemist />} />
//         <Route path="/pharmaceuticals-biotech" element={<Biotechandpharma />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarPage from './components/NavbarPage';

import HomePage from './pages/HomePage';
import HackathonPage from './pages/HackathonPage';
import About from './pages/AboutPage';
// import LeaderDetails from './components/Leaderdetails';
import Blogs from './pages/BlogsPage';
import CategoryBlog from './pages/Categoryblogs';
import Products from './pages/Products';
import Pipeline from './components/Pipeline';
import BlogDetails from './pages/BlogDetails';
import ScrollToTop from './pages/Scrolltotop';
import ContactUs from './pages/Contactus';
import SmallmoleculeDesign from './pages/Smallmoleculedesign';
import Proteinengineering from './pages/Proteinengineering';
import Synthetic from './pages/Syntheticchemistry';
import Medicinalchemist from '../src/pages/MedicinalChemist';
import Biotechandpharma from '../src/pages/Biotechandpharma';
import Bioinformatician from '../src/pages/Bioinformatician';
import Synthetichemists from '../src/pages/Syntheticchemists';
import Pharmacologist from '../src/pages/Pharmacologist';
import Clinicalresearchers from '../src/pages/Clinicalresearchers';
import Chemicalss from './pages/Chemicals';
import Agrochemicals from './pages/Agrochemicals';
import Cros from './pages/Cro';
import Academicresearch from './pages/Academicresearch';
import PrecisionMedicine from './pages/Precisionmedicine';
import Multiomicsanalysis from './pages/Multiomicsanalysis';
import Clinicaltrials from './pages/Clinicaltrials';
import Materialsciences from './pages/Materialscience';
import ClinicalTrialshealth from './pages/Clinicaltrialsandhealth';
import Oursuite from './pages/Oursuite';
import Privacypolicy from './pages/Privacypoliy';
import Termsofusage from './pages/Termsofusage';
export default function App() {
  return (
    <BrowserRouter>
      <NavbarPage />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* Add the category route with parameter */}
        <Route path="/blog/:category" element={<CategoryBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        {/* <Route path="/leadership/:leaderId" element={<LeaderDetails />} /> */}
        <Route path="/pipeline" element={<Pipeline />} />
        <Route path="/hackathon" element={<HackathonPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/smallmoleculedesign" element={<SmallmoleculeDesign />} />
        <Route path="/proteinengineering" element={<Proteinengineering />} />
        <Route path="/syntheticchemistry" element={<Synthetic />} />
        <Route path="/multiomicsanalysis" element={<Multiomicsanalysis />} />
        <Route path="/clinicaltrials" element={<Clinicaltrials />} />
        <Route path="/oursuite" element={<Oursuite />} />
        <Route path="/medicinal-chemists" element={<Medicinalchemist />} />
        <Route path="/pharmaceuticals-biotech" element={<Biotechandpharma />} />
        <Route path="/bioinformatics" element={<Bioinformatician />} />
        <Route path="/synthetic-chemists" element={<Synthetichemists />} />
        <Route path="/pharmacologist" element={<Pharmacologist />} />
        <Route path="/clinical-researchers" element={<Clinicalresearchers />} />
        <Route path="/chemicals" element={<Chemicalss />} />
        <Route path="/agrochemicals" element={<Agrochemicals />} />
        <Route path="/cros" element={<Cros />} />
        <Route path="/academic-research" element={<Academicresearch/>} />
        <Route path="/precision-medicine" element={<PrecisionMedicine/>} />
        <Route path="/material-science" element={<Materialsciences/>} />
        <Route path="/clinical-trials" element={<ClinicalTrialshealth/>} />
        <Route path="/privacy-policy" element={<Privacypolicy/>} />
        <Route path="/terms" element={<Termsofusage/>} />

      </Routes>
    </BrowserRouter>
  );
}