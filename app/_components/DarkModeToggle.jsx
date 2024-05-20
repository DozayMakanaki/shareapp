"use client"; // Ensure this is at the top of the file

import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg   text-black dark:text-white transition-colors duration-300 focus:outline-none flex items-center"
    >
      {darkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
      
    </button>
  );
};

export default DarkModeToggle;
