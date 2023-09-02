import React, { createContext, useState, useEffect } from 'react';

interface IStorageContext {
  activeSessionSecret: string;
  activeEmail: string;
  updateActiveSessionSecret: (newSessionSecret: string) => void;
  updateActiveEmail: (newEmail: string) => void;
  clearActiveSessionSecret: () => void;
  clearActiveEmail: () => void;
}

interface IContextProvider {
  children: React.ReactNode;
}

export const StorageContext = createContext<IStorageContext>({
  activeSessionSecret: '',
  activeEmail: '',
  updateActiveSessionSecret: () => {},
  updateActiveEmail: () => {},
  clearActiveSessionSecret: () => {},
  clearActiveEmail: () => {},
});

export const StorageStateProvider = ({ children }: IContextProvider) => {
  const [activeSessionSecret, setActiveSessionSecret] = useState<string>('');
  const [activeEmail, setActiveEmail] = useState<string>('');

  useEffect(() => {
    const storedSessionSecret = localStorage.getItem('active_session_secret');
    const storedEmail = localStorage.getItem('active_email');

    if (storedSessionSecret) {
      setActiveSessionSecret(storedSessionSecret);
    }

    if (storedEmail) {
      setActiveEmail(storedEmail);
    }
  });

  const updateActiveSessionSecret = (newSessionSecret: string) => {
    setActiveSessionSecret(newSessionSecret);
    localStorage.setItem('active_session_secret', newSessionSecret);
  };

  const updateActiveEmail = (newEmail: string) => {
    setActiveEmail(newEmail);
    localStorage.setItem('active_email', newEmail);
  };

  const clearActiveSessionSecret = () => {
    setActiveSessionSecret('');
    localStorage.removeItem('active_session_secret');
  };

  const clearActiveEmail = () => {
    setActiveEmail('');
    localStorage.removeItem('active_email');
  };

  return (
    <StorageContext.Provider
      value={{
        activeSessionSecret,
        activeEmail,
        updateActiveSessionSecret,
        updateActiveEmail,
        clearActiveSessionSecret,
        clearActiveEmail,
      }}>
      {children}
    </StorageContext.Provider>
  );
};
