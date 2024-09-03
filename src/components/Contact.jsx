import React, { useState } from 'react';
import './Contact.css';

const Contact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="contact">
      <h2>--Contact me--</h2>
      <h3>Fill up this form:-</h3>

      <form className="form-container" onSubmit={handleSubmit}>
        <h2>{props.title}</h2>

        <label className="form-label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Enter your name"
          />
        </label>

        <label className="form-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Enter your email"
          />
        </label>

        <label className="form-label">
          Message:
          <input
            type="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-input"
            placeholder="Enter your message"
          />
        </label>

        <button type="submit" className="form-button">Submit👍🏻</button>
      </form>
    </section>
  );
};

export default Contact;
