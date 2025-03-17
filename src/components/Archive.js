import React from 'react';
import './archive.css';
import { FaBehance, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Archive = () => {
    const openBehanceProfile = () => {
        const width = 1200;
        const height = 900;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;

        window.open(
            "https://www.behance.net/flip-flop",
            "BehanceProfile",
            `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
        );
    };

    return (
        <div className="archive">
            {/* Behance Profile Card */}
            <div className="behance-card" onClick={openBehanceProfile}>
                <span>View Behance Profile</span>
            </div>

            <p>Explore my previous work and contributions.</p>

            {/* Social Media Icons */}
            <div className="social-icons">
                <a href="https://www.behance.net/flip-flop" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
        </div>
    );
};

export default Archive;
