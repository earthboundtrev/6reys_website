import React, { useState } from 'react';
import NavigationArrow from './NavigationArrow';

export default function Events() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Handle closing the modal
  const handleClose = () => setSelectedImage(null);

  return (
    <section id="events" className="py-20 bg-[#0A1929] text-white">
      <NavigationArrow />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <img src="https://i.imgur.com/8on1Bky.png" alt="Event Chicken" className="mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4 text-center">Upcoming Events</h2>
          <div className="text-gray-400 max-w-2xl mx-auto text-center">
          <p>
            Join us for our upcoming competitive events and become part of our growing community! 
          </p>

          <br />

          <p>
             Click on the images if you want to be able to see bigger versions of them!
          </p>
          
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <img 
              src="https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/december_calendar_caldendar_view.png"
              alt="December Calendar" 
              className="w-full h-full object-contain rounded-lg cursor-pointer"
              onClick={() => setSelectedImage("https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/december_calendar_caldendar_view.png")}
            />
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <img 
              src="https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Reys-_Jan_2025_250101_183703.jpg"
              alt="December Events" 
              className="w-full h-auto rounded-lg cursor-pointer"
              onClick={() => setSelectedImage("https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Reys-_Jan_2025_250101_183703.jpg")}
            />
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleClose}
        >
          <div className="max-w-[90vw] max-h-[90vh] relative">
            <button
              onClick={handleClose}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200"
              aria-label="Close modal"
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}