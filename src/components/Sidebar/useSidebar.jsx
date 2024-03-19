import { useContext, useMemo, useState } from 'react';
import { createContext } from 'react';

export const SidebarContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const value = useMemo(() => {
    const closeSidebar = () => setIsOpen(false);
    const openSidebar = () => setIsOpen(true);
    const toggleSidebar = () => setIsOpen(prev => !prev);

    return { isOpen, closeSidebar, openSidebar, toggleSidebar };
  }, [isOpen]);

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }

  return context;
};
