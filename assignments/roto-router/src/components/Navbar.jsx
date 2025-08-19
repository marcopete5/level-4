import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-brand">
                PlumbPerfect
            </Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </div>
        </nav>
    );
}
