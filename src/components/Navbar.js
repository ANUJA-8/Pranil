import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
    const today = new Date();
    const isBirthdaySpecial = today.getDate() === 18 && today.getMonth() === 2;
    const [user, setUser] = useState(null);

    const handleLoginSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        setUser(decoded);
        console.log("User Info:", decoded);
    };

    const handleLoginError = () => {
        setUser(null);
        console.log("Login Failed");
    };

    return (
        <nav className="navbar flex justify-between items-center px-4 py-2 bg-black text-white">
            <div className="flex gap-4">
                <Link to="contact" smooth duration={500}>Contact</Link>
                <Link to="home" smooth duration={500}>Home</Link>
                <Link to="showcase" smooth duration={500}>Showcase</Link>
                <Link to="archive" smooth duration={500}>Archive</Link>
                {isBirthdaySpecial && <Link to="birthday" smooth duration={500}>Birthday Special</Link>}
            </div>
            {!user && (
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginError}
                />
            )}
        </nav>
    );
};

export default Navbar;
