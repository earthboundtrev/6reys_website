import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Games from './components/Games';
import Events from './components/Events';
import Location from './components/Location';
import Parties from './components/Parties';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

import Prizes from './components/Prizes';
import { useScrollToTop } from './hooks/useScrollToTop';

function App() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <PricingSection />
            <Location />
            <Footer />
          </>
        } />
        <Route path="/games" element={
          <>
            <Navbar />
            <Games />
            <Footer />
          </>
        } />
        <Route path="/parties" element={
          <>
            <Navbar />
            <Parties />
            <Footer />
          </>
        } />
        <Route path="/events" element={
          <>
            <Navbar />
            <Events />
            <Footer />
          </>
        } />

        <Route path="/prizes" element={
          <>
            <Navbar />
            <Prizes />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;