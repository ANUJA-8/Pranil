import React from 'react';
import './Showcase.css'; // Separate CSS for better styling

const Showcase = () => (
    <div className="showcase-container">
        <div className="bitbeam-box left">
            <div className="bitbeam-image">
                <img src="/Assets/Beat_beam-Smart LED.png" alt="BitBeam Smart LED" />
            </div>
            <div className="bitbeam-content">
                <h1>BitBeam - Smart LED Lighting</h1>
                <p className="category">Brand Design</p>
                <p className="description">
                    BitBeam delivers smart, energy-efficient LED lighting solutions with 
                    customizable features for modern homes and workspaces.
                </p>
                <a href="#" className="full-project">Full Project ↗</a>
            </div>
        </div>

        <div className="bitbeam-box right">
            <div className="bitbeam-image">
                <img src="/Assets/Crater.png" alt="Crater" />
            </div>
            <div className="bitbeam-content">
                <h1>Crater - Design Studio</h1>
                <p className="category">Brand Design</p>
                <p className="description">
                    Crater Studio is a design studio specializing in the design and development of digital products, including web applications, mobile apps, and websites.
                </p>
                <a href="#" className="full-project">Full Project ↗</a>
            </div>
        </div>

        <div className="bitbeam-box left">
            <div className="bitbeam-image">
                <img src="/Assets/Hause of Sage.png" alt="Hause of Sage" />
            </div>
            <div className="bitbeam-content">
                <h1>Hause of Sage - Etsy shop redesign</h1>
                <p className="category">Logo Design</p>
                <p className="description">
                    House of Sage is an Etsy shop offering handmade herbal medicines and remedies, crafted with mushrooms and other natural herbs.
                </p>
                <a href="#" className="full-project">Full Project ↗</a>
            </div>
        </div>
    </div>
);



export default Showcase;
