import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

export default function Navbar() {
    // Consume the context to get the theme and the function to change it
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
        // The class name changes dynamically based on the current theme
        <nav className={`navbar ${theme}-theme`}>
            <h2>ThemeSwitch</h2>
            <div className="theme-selector">
                <label htmlFor="theme-select">Select Theme: </label>
                {/* This dropdown changes the theme state in the context */}
                <select
                    id="theme-select"
                    value={theme}
                    onChange={(e) => changeTheme(e.target.value)}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="funky">Funky</option>
                </select>
            </div>
        </nav>
    );
}
