import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom'; // Change to HashRouter
import { MovieProvider } from './context/MovieContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            {' '}
            // Use HashRouter here
            <MovieProvider>
                <App />
            </MovieProvider>
        </HashRouter>
    </React.StrictMode>
);
