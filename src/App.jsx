import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ProjectGrid from './components/ProjectGrid';
import ProjectDetail from './components/ProjectDetail';
import Navbar from './components/Navbar';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Experience />
      <Skills />
      <ProjectGrid />
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>

      <footer style={{ padding: '4rem 0', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem', letterSpacing: '1px' }}>
        <p>© 2026 Nikita Khadse</p>
      </footer>
    </div>
  );
}

export default App;
