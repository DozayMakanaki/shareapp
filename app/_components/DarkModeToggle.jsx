"use client"; // Ensure this is at the top of the file

import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-black dark:text-white transition-colors duration-300 focus:outline-none"
    >
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
