import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

export default function Footer() {
    // Consume the context to get the current theme
    const { theme } = useContext(ThemeContext);

    return (
        // The class name changes dynamically
        <footer className={`footer ${theme}-theme`}>
            <p>
                &copy; 2025 ThemeSwitcher Inc. - You are using the {theme}{' '}
                theme.
            </p>
        </footer>
    );
}
