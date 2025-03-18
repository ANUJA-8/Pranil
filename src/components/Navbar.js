import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const today = new Date();
    const isBirthdaySpecial = today.getDate() === 18 && today.getMonth() === 2; // March is 2 (0-based index)

    return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/showcase">Showcase</Link>
        <Link to="/archive">Archive</Link>
        <Link to="/contact">Contact</Link>
        {isBirthdaySpecial && <Link to="/birthday">Birthday Special</Link>}
        </nav>
        )
};

export default Navbar;
