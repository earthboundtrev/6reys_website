import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface NavigationArrowProps {
  waitForScroll?: boolean; // Optional prop to determine behavior
}

const NavigationArrow: React.FC<NavigationArrowProps> = ({ waitForScroll = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (waitForScroll) {
      // Complex scroll-aware logic for pages that need it
      setIsVisible(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      const observer = new MutationObserver(() => {
        if (window.scrollY === 0) {
          const showArrowTimer = setTimeout(() => {
            setIsVisible(true);
            
            const hideArrowTimer = setTimeout(() => {
              setIsVisible(false);
            }, 3000);

            return () => clearTimeout(hideArrowTimer);
          }, 500);

          observer.disconnect();
          return () => clearTimeout(showArrowTimer);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
      });

      return () => {
        observer.disconnect();
      };
    } else {
      // Simple immediate display logic
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, waitForScroll]);

  // Rest of scroll listener logic
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
