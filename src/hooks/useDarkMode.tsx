import { useState, useEffect } from "react";

export default function useDarkMode(): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const userSystemTheme = window.matchMedia("(prefers-color-scheme: dark)")?.matches ?? false;
    return JSON.parse(localStorage.getItem("isDarkMode") ?? "null") ?? userSystemTheme;
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = (): void => {
    setIsDarkMode((prev) => !prev);
  };

  return [isDarkMode, toggleDarkMode];
}
