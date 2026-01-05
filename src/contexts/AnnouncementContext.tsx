import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AnnouncementContextType {
  isBannerVisible: boolean;
  setIsBannerVisible: (visible: boolean) => void;
}

const AnnouncementContext = createContext<AnnouncementContextType | undefined>(undefined);

export function AnnouncementProvider({ children }: { children: ReactNode }) {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <AnnouncementContext.Provider value={{ isBannerVisible, setIsBannerVisible }}>
      {children}
    </AnnouncementContext.Provider>
  );
}

export function useAnnouncement() {
  const context = useContext(AnnouncementContext);
  if (context === undefined) {
    throw new Error('useAnnouncement must be used within an AnnouncementProvider');
  }
  return context;
}
