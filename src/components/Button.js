import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/Theme";
export default function () {
  const { theme, setTheme } = useTheme();
  const handleToggleBtn = () => {
    setTheme(theme === "white" ? "dark" : "white");
  };
  return (
    <div theme={theme} className="btnContainer" onClick={handleToggleBtn}>
      <div className="btnContent">
        <div className="ball"></div>
        <FaSun className="img-sun" />
        <FaMoon className="img-moon" />
      </div>
    </div>
  );
}
