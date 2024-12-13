import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import useTheme from "./useTheme"; // Import the custom hook

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme(); // Get the current theme and toggle function

  return (
    <button onClick={toggleTheme} style={styles.button}>
      <FontAwesomeIcon
        icon={theme === "light" ? faMoon : faSun}
        style={styles.icon}
      />
    </button>
  );
};

const styles = {
  button: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "24px",
    color: "#6a4c93",
    transition: "color 0.3s ease",
  },
  icon: {
    fontSize: "1.5rem",
  },
};

export default ThemeSwitcher;
