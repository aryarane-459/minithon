import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import RoomListings from './components/RoomListings';
import PhotoGallery from './components/PhotoGallery';
import InquiryForm from './components/InquiryForm';
import MapSection from './components/MapSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Hero />
              <RoomListings />
              <PhotoGallery />
              <Testimonials />
              <MapSection />
              <InquiryForm />
              <FAQ />
            </motion.div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;