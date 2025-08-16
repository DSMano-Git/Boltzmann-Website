import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarPage from './components/NavbarPage';

import HomePage from './pages/HomePage'
import HackathonPage from './pages/HackathonPage';
import About from './pages/AboutPage';
import Blogs from './pages/BlogsPage';
import Products from './pages/Products';
import Pipeline from './components/Pipeline';
import BlogDetails from './pages/BlogDetails';
import UltraSmoothTimeline from './components/Aboutjourney';
import ContactUs from './pages/Contactus';
import SmallmoleculeDesign from './pages/Smallmoleculedesign';
import Proteinengineering from './pages/Proteinengineering';
import Synthetic from './pages/Syntheticchemistry';
export default function App() {
  return (
    <BrowserRouter>
      <NavbarPage />
    <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<About />} />
  <Route path="/products" element={<Products />} />
  <Route path="/blogs" element={<Blogs />} />
  <Route path="/blogs/:id" element={<BlogDetails />} />
  <Route path="/pipeline" element={<Pipeline />} />
  <Route path="/hackathon" element={<HackathonPage />} />
  <Route path="/contact" element={<ContactUs />} />
    <Route path="/smallmoleculedesign" element={<SmallmoleculeDesign />} />
    <Route path="/proteinengineering" element={<Proteinengineering />} />
    <Route path="/syntheticchemistry" element={<Synthetic />} />

  
</Routes>

    </BrowserRouter>
  );
}
