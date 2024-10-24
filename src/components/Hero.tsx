import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          Rural Retro Arcade
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
          Experience authentic Japanese arcade culture in the heart of rural America
        </p>
        <a
          href="#games"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all"
        >
          Explore Our Games
        </a>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="h-8 w-8 text-pink-500" />
        </div>
      </div>
    </div>
  );
}