import { createContext, useState, useContext } from "react";

// How to use
// 1. Wrap components in ThemeProvider
// 2. Access darkMode and toggleDarkMode using 
//    const {darkMode, toggleDarkMode} = useTheme(); 

const ThemeContext = createContext(null);

export const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    }
    
    return (
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => useContext(ThemeContext);