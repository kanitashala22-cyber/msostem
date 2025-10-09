import { useState, useEffect } from "react";


// Supported languages
export type Language = "en" | "sq";

export function useLanguage(defaultLang: Language = "en") {
  const [language, setLanguage] = useState<Language>(defaultLang);

  // Load saved language from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("site_language") as Language;
    if (saved === "en" || saved === "sq") {
      setLanguage(saved);
    }
  }, []);

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("site_language", language);
  }, [language]);

  // Toggle between English and Albanian
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "sq" : "en"));
  };

  return { language, setLanguage, toggleLanguage };
}
