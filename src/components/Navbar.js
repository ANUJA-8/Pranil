import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/showcase">Showcase</Link>
        <Link to="/archive">Archive</Link>
        <Link to="/contact">Contact</Link>
    </nav>
);

export default Navbar;
