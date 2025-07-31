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

          <br/>

          <p>
             Follow us on <a href="https://www.facebook.com/profile.php?id=100088216744060" className="text-white font-semibold hover:underline">Facebook</a> to keep with up all of our updates and events!
          </p>

          <br />

          <p>
             Click on the images below if you want to be able to see bigger versions of them!
          </p>
          
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 p-4 rounded-lg">
            <img 
              src="https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/july_calendar_list.jpg"
              alt="July Events for 6R's Entertainment Yard in list form" 
              className="w-full h-full object-contain rounded-lg cursor-pointer"
              onClick={() => setSelectedImage("https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/july_calendar_list.jpg")}
            />
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <img 
              src="https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/aug_calendar_list.jpg"
              alt="August Events for 6R's Entertainment Yard in list form" 
              className="w-full h-auto rounded-lg cursor-pointer"
              onClick={() => setSelectedImage("https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/aug_calendar_list.jpg")}
            />
          </div>
        </div>

        {/* Tournament Videos Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Want to see what some of our tournaments are like?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Check out some of the archived livestreams from the previous months below:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/-3tym79UImA?si=luAkMmx8Zys3OE1K" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/FVLkL_oR1p0?si=m6q-6VuUrE30ddA4" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/FlmqLBdgYG0?si=nZOjhhnV_hbo_S-2" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/vuRsWQCgVP0?si=_Nkw3Txpcmm59qlu" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
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