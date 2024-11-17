import { createContext, useState, useEffect } from "react";

const ResponsiveContext = createContext(null);

export function ResponsiveProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    const handleResize = (event) => {
      setIsMobile(event.matches);
    };

    handleResize(mediaQuery);
    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <ResponsiveContext.Provider value={isMobile}></ResponsiveContext.Provider>
  );
}
