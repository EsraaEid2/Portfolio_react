import React, { createContext, useState, useEffect } from "react";

// Create a context for the theme
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Initialize the theme state based on localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Toggle the theme and save it to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save to localStorage
  };

  useEffect(() => {
    // Apply the theme class to the body element when the theme changes
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
