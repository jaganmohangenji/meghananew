import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ServicesHub from './pages/ServicesHub';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<ServicesHub />} />
        <Route path="services/:serviceId" element={<ServiceDetail />} />
        <Route path="projects" element={<Projects />} />
        <Route path="technologies" element={<Technologies />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
