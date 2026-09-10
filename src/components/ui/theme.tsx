"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ThemeContextType = {
  language: "en" | "bn";
  setLanguage: (lang: "en" | "bn") => void;
  toggleLanguage: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "bn">("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "bn" : "en"));
  };

  return (
    <ThemeContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
