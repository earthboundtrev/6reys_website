import React from 'react';
import { Calendar, Trophy } from 'lucide-react';

export default function Events() {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Trophy className="h-12 w-12 text-pink-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our competitive events and become part of our growing community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg">
            <Calendar className="h-8 w-8 text-pink-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Fighting Games Meet Up!</h3>
            <p className="text-gray-400 mb-4">Every Saturday @ 6PM</p>
            <ul className="text-gray-400 space-y-2">
              <li>• Street Fighter III: 3rd Strike</li>
              <li>• Guilty Gear XX Accent Core +R</li>
              <li>• The King of Fighters '98</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg">
            <Calendar className="h-8 w-8 text-pink-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Monthly High Score Challenge</h3>
            <p className="text-gray-400 mb-4">Last Friday of Every Month</p>
            <ul className="text-gray-400 space-y-2">
              <li>• DoDonPachi</li>
              <li>• Battle Garegga</li>
              <li>• Mushihimesama</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}