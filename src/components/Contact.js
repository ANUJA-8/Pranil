
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const styles = {
    container: {
      width: '100%',
      maxWidth: '600px',  // Control max width of the container
      margin: '20px auto', // Position container in a way that leaves space around it
      padding: '20px',
      backgroundColor: '#222',  // Dark background for the form container
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',  // Pronounced shadow for contrast
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      color: '#fff',  // Light text for readability on dark background
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#f1f1f1',  // Light gray for better contrast on dark background
      marginBottom: '5px',
    },
    input: {
      padding: '12px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #444',  // Darker border to blend with the background
      backgroundColor: '#333',  // Slightly lighter background for inputs
      color: '#fff',  // White text for readability
      width: '100%',
      boxSizing: 'border-box',
    },
    textarea: {
      padding: '12px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #444',  // Dark border for textarea
      backgroundColor: '#333',
      color: '#fff',
      width: '100%',
      boxSizing: 'border-box',
      minHeight: '150px',
    },
    submitButton: {
      padding: '12px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#007BFF',  // Blue button with white text
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    submitButtonHover: {
      backgroundColor: '#0056b3',  // Darker blue on hover
    },
    additionalInfo: {
      marginTop: '20px',
      color: '#f1f1f1',  // Light text for the additional content
      fontSize: '14px',
    },
  };
  
  
  

 const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_cbefiff', 'template_y64vetv', form.current, {
          publicKey: 'hq3P627Gnr6vrpMIw',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
        <div style={styles.container}>
  <form ref={form} onSubmit={sendEmail} style={styles.form}>
    <div style={styles.formGroup}>
      <label style={styles.label}>Name</label>
      <input type="text" name="user_name" style={styles.input} required />
    </div>

    <div style={styles.formGroup}>
      <label style={styles.label}>Email</label>
      <input type="email" name="user_email" style={styles.input} required />
    </div>

    <div style={styles.formGroup}>
      <label style={styles.label}>Message</label>
      <textarea name="message" style={styles.textarea} required />
    </div>

    <input type="submit" value="Send" style={styles.submitButton} />
  </form>

  <div style={styles.additionalInfo}>
    <p>Contact Pranil on 940463686.</p>
  </div>
</div>

      
    );
  };


export default Contact;

