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
            <iframe title="1" src="https://www.behance.net/embed/project/204443181?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
            <iframe title="2"  src="https://www.behance.net/embed/project/204443671?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
            <iframe title="3"  src="https://www.behance.net/embed/project/204435971?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
            <iframe title="4"  src="https://www.behance.net/embed/project/204437267?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
            {/* Behance Profile Card */}
            <div className="behance-card" onClick={openBehanceProfile}>
                <span>View Behance Profile</span>
            </div>

            <p>Explore my previous work and contributions.</p>

            {/* Social Media Icons */}
            <div className="social-icons">
                <a href="https://www.behance.net/flip-flop" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
                <a href="https://www.instagram.com/not_pranil?igsh=Z3VocmdxbGZ1djRz" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/pranil-markad-6676a9328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
        </div>
    );
};

export default Archive;
