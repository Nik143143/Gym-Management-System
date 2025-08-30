// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Imperial Fit.</h2>
        </div>

        <div className="footer-info">
          <p>1, Imperial street, Ahmedabad, India</p>
          <p>Email: info@imperialfit.com</p>
          <p>Contact: (1) 123456789</p>
        </div>
        <div className="footer-socials">
          <a
            href="https://facebook.com/Imperialfit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/public/facebook.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com/imperialfit" target="_blank">
            <img src="/public/twitter.jpg" alt="Twitter" />
          </a>
          <a
            href="https://instagram.com/imperialfit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/public/instagram.jpg" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
