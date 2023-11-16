import "@/styles/globals.css";
import Header from "@/components/Header";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

const store = configureStore({
  reducer: {},
});

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  // check and reset theme when `darkMode` changes
  useEffect(() => {
    themeCheck();
  }, [darkMode]);

  // check theme on component mount
  useEffect(() => {
    themeCheck();
  }, []);

  // check and reset theme
  const themeCheck = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  };
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Component {...pageProps} />
    </>
  );
}
