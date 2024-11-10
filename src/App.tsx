import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Games from './components/Games';
import Events from './components/Events';
import Location from './components/Location';
import Parties from './components/Parties';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import Tradeins from './components/Tradeins';
import Prizes from './components/Prizes';

function App() {
  return (
    <Router>
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
        <Route path="/tradeins" element={  
            <>
            <Navbar />
            <Tradeins/>
            <Footer />
          </>
        } />
        <Route path="/prizes" element={  
            <>
            <Navbar />
            <Prizes/>
            <Footer />
          </>
        } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;