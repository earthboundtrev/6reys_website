import React from 'react';
import { Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(39%20of%2057).png")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-slate-900/95 to-slate-900/90"></div>
      </div>
      
      <div className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block text-white">An Unmatched</span>
                <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Incredible Gaming Experience!
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Step into our arcade, retro-gaming, and gaming paradise! Featuring classic and modern arcade games, modern and retro consoles, and the most iconic arcade titles from the golden age of gaming.
              </p>

              <div className="mt-8 flex flex-col lg:flex-row lg:gap-8">
                <a
                  href="/games"
                  className="mb-4 lg:mb-0 w-full lg:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-pink-700 transition-colors"
                >
                  <span className="lg:hidden">View Our Games!</span>
                  <span className="hidden lg:inline">Our Games!</span>
                </a>
                <a
                  href="/parties"
                  className="mb-4 lg:mb-0 w-full lg:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-pink-700 transition-colors"
                >
                  Schedule a Party with us!
                </a>
                <a
                  href="/events"
                  className="w-full lg:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-pink-700 transition-colors"
                >
                  <span className="lg:hidden">View Our Events!</span>
                  <span className="hidden lg:inline">Our Events!</span>
                </a>
              </div>
            </div>
            
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://i.imgur.com/xCmlmje.png"
                  alt="6reys Entertainment Yard logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}