import React from "react";
import useCssDarkMode from "../../hooks/useCssDarkMode";

const ThemeSelector = () => {
  const { isDarkMode, toggleIsDarkMode } = useCssDarkMode();
  return (
    <button className="secondary" onClick={toggleIsDarkMode}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeSelector;
