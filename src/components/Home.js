import React from 'react';
import './Home.css';
import profileImage from '../assets/Pranil.png';
import { Link } from 'react-scroll';

const Home = () => (
        <div className="home">
        <div className="content">
                <h1>
                    Hi, <span className="highlight">I'm Pranil</span>
                </h1>
                <h2>Creative Designer | Pune</h2>
                <p>
                    I specialize in <strong>Logo Design</strong>, <strong>Website Design</strong>,
                    <strong> Wall Design</strong>, and <strong>Poster Design</strong>.
                    With a passion for purposeful design, I create visual experiences that connect brands with their audience.
                </p>
                <p>
                    Whether you're building a brand from scratch or upgrading your digital presence, I craft tailored solutions
                    with clarity, impact, and consistency.
                </p>
                <div className="buttons">
                    <Link to="contact" smooth={true} duration={500}>
                        <button className="btn primary">Request a Design</button>
                    </Link>
                    <Link to="archive" smooth={true} duration={500}>
                        <button className="btn secondary">Explore My Work</button>
                    </Link>
                </div>
        </div>
        <div className="image-container">
            <img src={profileImage} alt="Pranil" />
        </div>
    </div>
);

export default Home;
