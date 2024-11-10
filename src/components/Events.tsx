import React from 'react';

export default function Events() {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <img src="https://i.imgur.com/8on1Bky.png" alt="Event Chicken" className="mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4 text-center">Upcoming Events</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join us for our upccoming competitive events and become part of our growing community!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <img 
              src="https://i.imgur.com/ELcIuuF.jpg"
              alt="November Calendar" 
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <img 
              src="https://i.imgur.com/4KxzNlg.jpg"
              alt="November Events" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}