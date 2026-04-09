import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const themeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const exsitingTheme = localStorage.getItem("EduCore_theme");

  if (exsitingTheme) return exsitingTheme;

  const body = document.body;

  useEffect(() => {
    if (body.contains("")) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [theme]);

  let toggoleButton = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    localStorage.setItem("EduCore_theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ toggoleButton, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
