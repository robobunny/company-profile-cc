import { useState, useEffect, useLayoutEffect } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleIsDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
  };

  const setThemeToLight = () => {
    setIsDarkMode(false);
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  };

  const setThemeToDark = () => {
    setIsDarkMode(true);
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  };

  useLayoutEffect(() => {
    const previousTheme = localStorage.getItem("theme");
    if (!previousTheme) {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      if (prefersDarkScheme) {
        setThemeToDark();
      } else {
        setThemeToLight();
      }
    } else if (previousTheme === "dark") {
      setThemeToDark();
    } else {
      setThemeToLight();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });

  return {
    isDarkMode,
    toggleIsDarkMode,
  };
}
