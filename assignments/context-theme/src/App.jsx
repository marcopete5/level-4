import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { ThemeContext } from './context/ThemeProvider';
import './App.css';

function App() {
    // Consume the context to get the current theme
    const { theme } = useContext(ThemeContext);

    return (
        // The main container's class changes, affecting global styles
        <div className={`app-container ${theme}-theme`}>
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
