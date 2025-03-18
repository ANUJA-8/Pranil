import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaBehance, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
    const form = useRef();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidPhone, setIsValidPhone] = useState(true);

    const validatePhoneNumber = (value) => {
        const phoneRegex = /^[0-9]{10}$/; // Allows 10 to 15 digits
        setIsValidPhone(phoneRegex.test(value) || value === '');
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!isValidPhone) {
            alert("Please enter a valid phone number!");
            return;
        }

        emailjs
            .sendForm('service_cbefiff', 'template_y64vetv', form.current, {
                publicKey: 'hq3P627Gnr6vrpMIw',
            })
            .then(() => {
                console.log('SUCCESS!');
            })
            .catch((error) => {
                console.log('FAILED...', error.text);
            });
    };

    return (
        <div className="contact-container">
            {/* Left Side: Contact Info */}
            <div className="contact-info">
                <h2>Need design that tells <span className="highlight">your story?</span></h2>
                <p>
                    <a href="mailto:pranilmarkad.design@gmail.com" className="phone-link" >pranilmarkad.design@gmail.com</a>
                </p>

                <p>
                    <a href="tel:9404636865" className="phone-link">9404636865</a>
                </p>

                {/* Social Media Links */}
                <div className="social-icons">
                    <a href="https://www.behance.net/flip-flop" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/pranil-markad-6676a9328/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>

            {/* Right Side: Contact Form */}
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder="Enter your name" required />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder="Enter your email" required />
                </div>

                <div className="form-group">
                    <label>Phone Number (Optional)</label>
                    <input
                        type="text"
                        name="user_phone"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                            validatePhoneNumber(e.target.value);
                        }}
                    />
                    {!isValidPhone && <p className="error-message">Invalid phone number! Must be 10-15 digits.</p>}
                </div>

                <div className="form-group">
                    <label>How can I help?</label>
                    <textarea name="message" placeholder="Type your message..." required />
                </div>

                <input type="submit" value="Get In Touch" className="submit-button" />
            </form>
        </div>
    );
};

export default Contact;
