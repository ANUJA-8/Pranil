import React from 'react';
import './Home.css';
import profileImage from '../assets/Pranil.png'; // Ensure your image is inside /src/assets/
import Contact from './Contact';
import { Link } from 'react-router-dom';
const Home = () => (
    <div className="home">
        <div className="content">
            <h1 >
                Hello, <span className="highlight">I'm Pranil.</span>
            </h1>
            <h2>Graphic Designer in Pune.</h2>
            <p>
                I design with clarity and purpose, creating visuals that are both useful and reliable. 
                Every project is an opportunity to solve problems through thoughtful and effective design.
            </p>
            <div className="buttons">
            <div>
            <Link to="/contact">
                <button className="btn primary">Get in Touch</button>
            </Link>

            <Link to="/archive">
                <button className="btn secondary">View Work</button>
            </Link>
        </div>
            </div>
        </div>

        <div className="image-container">
            <img src={profileImage} alt="Pranil" />
        </div>
    </div>
);

export default Home;
