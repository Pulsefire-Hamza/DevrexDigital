import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import WhyWork from './components/WhyWork';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';  // Import PrivacyPolicy component
import Terms from './pages/Terms';  // Import Terms component
import Footer from './components/Footer';  // Import Footer component
import OurTeam from './components/OurTeam';
import ClientLogos from './components/ClientLogos';
import Reviews from './pages/Reviews';



const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">  
      <div className="fixed top-0 -z-50 h-full w-full">
        <div className="absolute top-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative min-h-screen flex flex-col justify-between">
        <Navbar />
        
        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><HeroSection /><AboutUs /><WhyWork /> <OurTeam/> <ClientLogos/>    </>} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />  {/* Privacy Policy Route */}
            <Route path="/terms" element={<Terms />} />  {/* Terms Route */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
