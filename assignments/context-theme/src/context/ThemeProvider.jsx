import React, { useState, createContext } from 'react';

// 1. Create the context object
const ThemeContext = createContext();

// 2. Create the provider component
function ThemeProvider(props) {
    // State to hold the current theme. 'light' is the default.
    // Other options: 'dark', 'funky'
    const [theme, setTheme] = useState('light');

    // Function to change the theme
    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    };

    // The value prop of the provider will be available to all consumer components
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

// 3. Export the provider and the context
export { ThemeProvider, ThemeContext };
