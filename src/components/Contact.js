import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaBehance, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
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
                <p>pranilmarkad.design@gmail.com</p>
                <p>9404636865</p>

                {/* Social Media Links */}
                <div className="social-icons">
                    <a href="https://www.behance.net/flip-flop" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>

            {/* Right Side: Contact Form */}
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                    <label>Your name</label>
                    <input type="text" name="user_name" placeholder="Enter your name" required />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder="Enter your email" required />
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
