import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const NavigationArrow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show arrows if we're at the top of the page
    const isAtTop = window.scrollY === 0;
    
    if (isAtTop) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []); // Run once when component mounts

  // Add scroll listener to ensure arrows don't reappear on scroll to top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Bottom center arrow - hidden on mobile, visible on sm and up */}
      <div className="hidden sm:fixed sm:bottom-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:animate-bounce">
        <div className="bg-pink-500 p-3 rounded-full shadow-lg hover:bg-pink-600 cursor-pointer">
          <ArrowDown className="h-10 w-10 text-white" />
        </div>
      </div>

      {/* Side arrow - visible on all screens */}
      <div className="fixed top-1/2 right-[15%] transform -translate-y-1/2 animate-bounce">
        <div className="bg-pink-500 p-3 rounded-full shadow-lg hover:bg-pink-600 cursor-pointer">
          <ArrowDown className="h-10 w-10 text-white" />
        </div>
      </div>
    </>
  );
};

export default NavigationArrow;
