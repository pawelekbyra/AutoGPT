"use client";
import React, { createContext, useContext } from 'react';

const LanguageContext = createContext({
  t: (key: string, params?: any) => key,
  lang: 'en'
});

export const useTranslation = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageContext.Provider value={{ t: (key, params) => key, lang: 'en' }}>
      {children}
    </LanguageContext.Provider>
  );
};
