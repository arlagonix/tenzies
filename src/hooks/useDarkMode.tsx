import { useState, useEffect } from "react";

interface useDarkModeType {
  /** If true, then dark mode is on */
  isDarkMode: boolean;
  /** Toggles dark mode between on and off */
  toggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function useDarkMode(): useDarkModeType {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const userSystemTheme =
      window.matchMedia("(prefers-color-scheme: dark)")?.matches ?? false;
    return (
      JSON.parse(localStorage.getItem("isDarkMode") ?? "null") ??
      userSystemTheme
    );
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = (): void => {
    setIsDarkMode((prev) => !prev);
  };

  return { isDarkMode, toggleDarkMode };
}
