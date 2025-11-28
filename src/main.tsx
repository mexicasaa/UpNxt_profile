import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { Projects } from './pages/Projects.tsx'
import { ProjectDetail } from './pages/ProjectDetail.tsx'
import { Contact } from './pages/Contact.tsx'
import { AboutUs } from './pages/AboutUs.tsx'
import { ServicesPage } from './pages/ServicesPage.tsx'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="bg-primary min-h-screen text-secondary font-sans selection:bg-accent selection:text-primary">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
