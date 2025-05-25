import { createContext, useState, useContext, useEffect } from "react";


const ThemeContext = createContext();
const THEME_KEY = 'tasker-theme';


export function ThemeProvider({children}){
    const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(isDark));
  }, [isDark]);

    const toggleTheme = () =>{
        setIsDark(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext)
