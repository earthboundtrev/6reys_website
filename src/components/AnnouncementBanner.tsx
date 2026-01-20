import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { useAnnouncement } from '../contexts/AnnouncementContext';

export default function AnnouncementBanner() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isBannerVisible: isVisible, setIsBannerVisible: setIsVisible } = useAnnouncement();

  // Don't show on the closure announcement page
  if (location.pathname === '/closure-announcement') {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  const handleClick = () => {
    navigate('/closure-announcement');
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg cursor-pointer hover:from-purple-700 hover:to-pink-700 transition-colors"
      onClick={handleClick}
      style={{ minHeight: '40px' }}
    >
      <div className="max-w-7xl mx-auto flex items-center h-full gap-2 px-2 sm:px-4 py-1">
        <div className="flex-1 text-center text-xs sm:text-sm">
          <span className="font-semibold">As of January 19th, 2026, we are officially closed for business permanently.</span> It's been an amazing run and we would not change a thing! 
          <span className="underline ml-1">Click here to learn more.</span>
        </div>
        <button
          onClick={handleClose}
          className="flex-shrink-0 ml-2 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
