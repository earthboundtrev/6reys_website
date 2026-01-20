import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Games from './components/Games';
import Events from './components/Events';
import Location from './components/Location';
import Footer from './components/Footer';
import AnnouncementBanner from './components/AnnouncementBanner';
import ClosureAnnouncement from './components/ClosureAnnouncement';
import { AnnouncementProvider } from './contexts/AnnouncementContext';

import Prizes from './components/Prizes';
import { useScrollToTop } from './hooks/useScrollToTop';

function App() {
  useScrollToTop();
  
  return (
    <AnnouncementProvider>
      <div className="min-h-screen bg-black">
        <AnnouncementBanner />
        <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
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
        <Route path="/closure-announcement" element={
          <>
            <Navbar />
            <ClosureAnnouncement />
            <Footer />
          </>
        } />
      </Routes>
      </div>
    </AnnouncementProvider>
  );
}

export default App;