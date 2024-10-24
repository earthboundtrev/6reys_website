import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Games from './components/Games';
import Events from './components/Events';
import Location from './components/Location';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Games />
      <Events />
      <Location />
    </div>
  );
}

export default App;