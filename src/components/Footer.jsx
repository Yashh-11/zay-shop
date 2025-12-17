import React from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}
        <div className="footer-col">
          <h3 className="brand">Zay Shop</h3>
          <ul>
            <li><FaMapMarkerAlt /> 123 Consectetur at ligula 10660</li>
            <li><FaPhoneAlt /> 010-020-0340</li>
            <li><FaEnvelope /> info@company.com</li>
          </ul>
        </div>

        {/* Middle */}
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li>Luxury</li>
            <li>Sport Wear</li>
            <li>Men's Shoes</li>
            <li>Women's Shoes</li>
            <li>Popular Dress</li>
            <li>Gym Accessories</li>
            <li>Sport Shoes</li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-col">
          <h4>Further Info</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Shop Locations</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="social-icons">
          <span><FaFacebookF /></span>
          <span><FaInstagram /></span>
          <span><FaTwitter /></span>
          <span><FaLinkedinIn /></span>
        </div>

        <div className="newsletter">
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="copyright">
        Copyright © 2021 Company Name | Designed by
        <span> TemplateMo</span>
      </div>
    </footer>
  );
};

export default Footer;
