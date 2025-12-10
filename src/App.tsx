import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, ScrollToTop } from './components/layout';
import { Hero } from './components/home/Hero';
import { Services } from './components/home/Services';
import { Pricing } from './components/home/Pricing';
import { Process } from './components/home/Process';
import { Portfolio } from './components/home/Portfolio';

import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { ServicesPage } from './pages/ServicesPage';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { ImmigrationAutomation } from './pages/ImmigrationAutomation';
import { RealEstateAutomation } from './pages/RealEstateAutomation';
import { ClinicAutomation } from './pages/ClinicAutomation';
import { TrainingAutomation } from './pages/TrainingAutomation';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Services />
              <Pricing />
              <Process />
              <Portfolio />
            </main>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />

          {/* Niche Landing Pages */}
          <Route path="/immigration-automation" element={<ImmigrationAutomation />} />
          <Route path="/realestate-automation" element={<RealEstateAutomation />} />
          <Route path="/clinic-automation" element={<ClinicAutomation />} />
          <Route path="/training-automation" element={<TrainingAutomation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
