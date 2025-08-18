import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

export default function Main() {
    // Consume the context to get the current theme
    const { theme } = useContext(ThemeContext);

    return (
        // The class name changes dynamically
        <main className={`main-content ${theme}-theme`}>
            <h1>
                Welcome to the {theme.charAt(0).toUpperCase() + theme.slice(1)}{' '}
                Theme
            </h1>
            <p>
                Use the dropdown in the navigation bar to switch between themes!
            </p>
            <div className="content-box">
                <h3>Content Box 1</h3>
                <p>
                    This box demonstrates the layout change in the 'Funky'
                    theme.
                </p>
            </div>
            <div className="content-box">
                <h3>Content Box 2</h3>
                <p>
                    In Light and Dark themes, these boxes stack vertically. In
                    Funky, they are side-by-side.
                </p>
            </div>
        </main>
    );
}
