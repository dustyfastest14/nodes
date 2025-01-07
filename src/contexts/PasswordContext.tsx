'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PasswordContextType {
  isAuthenticated: boolean;
  authenticate: (password: string) => boolean;
}

const PasswordContext = createContext<PasswordContextType | undefined>(undefined);

export function PasswordProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = (password: string) => {
    const isValid = password === process.env.NEXT_PUBLIC_APP_PASSWORD;
    setIsAuthenticated(isValid);
    return isValid;
  };

  return (
    <PasswordContext.Provider value={{ isAuthenticated, authenticate }}>
      {children}
    </PasswordContext.Provider>
  );
}

export function usePassword() {
  const context = useContext(PasswordContext);
  if (context === undefined) {
    throw new Error('usePassword must be used within a PasswordProvider');
  }
  return context;
} 