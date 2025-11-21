// src/components/Footer/Footer.jsx
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-block">
          <h4>MellowMeal</h4>
          <p>Where Every Bite Feels Like Home</p>
        </div>

        <div className="footer-block">
          <h5>Contact</h5>
          <p>Phone: +91 98765 43210</p>
          <p>Email: hello@mellowmeal.com</p>
        </div>

        <div className="footer-block">
          <h5>Timing</h5>
          <p>Mon - Sun: 8:00 AM - 11:00 PM</p>
        </div>

        <div className="footer-block">
          <h5>Address</h5>
          <p>12 Food Street, Flavor Town, India</p>
        </div>
      </div>

      <div className="feedback-area">
        <form className="feedback-form" onSubmit={(e) => { e.preventDefault(); alert('Thanks for your feedback!') }}>
          <input type="email" placeholder="Your email" required />
          <input type="text" placeholder="Your feedback" required />
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="footer-bottom">© {new Date().getFullYear()} MellowMeal. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
