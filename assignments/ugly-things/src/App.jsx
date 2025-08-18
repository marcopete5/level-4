import React from 'react';
import Form from './components/Form';
import UglyThingsList from './components/UglyThingsList';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <header>
                <h1>Ugly Things</h1>
            </header>
            <Form />
            <UglyThingsList />
        </div>
    );
}

export default App;
