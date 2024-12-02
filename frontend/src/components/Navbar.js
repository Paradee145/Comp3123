import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <Link to="/" className="navbar-brand">Employee Management App</Link>
        </div>
    </nav>
);

export default Navbar;
