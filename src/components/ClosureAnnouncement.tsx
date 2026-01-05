import React from 'react';
import NavigationArrow from './NavigationArrow';

export default function ClosureAnnouncement() {
  return (
    <div className="min-h-screen bg-[#0A1929] pt-8">
      <NavigationArrow />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            6R's Entertainment Yard Closure Announcement
          </h1>
          <p className="text-gray-300 text-lg">
            Thank you for your support over the past 3 years!
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="flex justify-center">
            <iframe 
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02ZxS4FhvXzmnPN82R72wdQDFHoqXiurG5hVRfVYbroPFMzyP8dvhRSPx91SLVdUDpl%26id%3D100088216744060&show_text=true&width=500" 
              width="500" 
              height="732" 
              style={{border:'none', overflow:'hidden'}} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="6R's Entertainment Yard Closure Announcement"
              className="w-full max-w-full"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-pink-700 text-white rounded-md transition-colors"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
}
