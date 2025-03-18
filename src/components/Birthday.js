import React from 'react';
import './Birthday.css';
import chotu1 from '../assets/1.jpg'; // Ensure your image is inside /src/assets/
import chotu2 from '../assets/2.jpg';

const Birthday = () => (
    <div className="home">
        <div className="content">
            <h1 >
                <span className="highlight">Wish You many Many returns of the day Pranil.</span>
            </h1>
            <h2>Graphic Designer and Best Human Being</h2>
        </div>

        <div className="image-container">
            <img src={chotu1} alt="Pranil" />
        </div>
        <div className="image-containerr">
            <img src={chotu2} alt="Pranil" />
        </div>
    </div>
);

export default Birthday;
