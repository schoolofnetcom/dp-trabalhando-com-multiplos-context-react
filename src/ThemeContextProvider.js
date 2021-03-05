import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [darkTheme, setDarkTheme] = useState({ button: '#000000', color: '#ffffff' });
    const [lightTheme, setLightTheme] = useState({ button: '#ffffff', color: '#000000' });
    const [isLightTheme, setIsLightTheme] = useState(true);
    const toggleTheme = () => setIsLightTheme(!isLightTheme);
    return (
        <ThemeContext.Provider value={{ isLightTheme, lightTheme, darkTheme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;