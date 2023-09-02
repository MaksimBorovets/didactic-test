import React, { createContext, useState, useEffect } from 'react';
import { isMobile } from '../constants';

interface IChatContext {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IChatContextProvider {
  children: React.ReactNode;
}

export const ChatContext = createContext<IChatContext>({
  isSidebarOpen: false,
  toggleSidebar: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
});

export const ChatStateProvider = ({ children }: IChatContextProvider) => {
  const initialIsSidebarOpen = localStorage.getItem('isSidebarOpen');
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    initialIsSidebarOpen
      ? JSON.parse(initialIsSidebarOpen)
      : isMobile
      ? false
      : true,
  );
  const [isAdmin, setIsAdmin] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Update local storage when isSidebarOpen changes
  useEffect(() => {
    localStorage.setItem('isSidebarOpen', JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  return (
    <ChatContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        isAdmin,
        setIsAdmin,
      }}>
      {children}
    </ChatContext.Provider>
  );
};
