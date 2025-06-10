import React from 'react';
import '../css/Footer.css';
import { Eye, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div>
          <div className="footer-logo">
            <Eye size={32} color="#60a5fa" />
            <span>VisionCraft</span>
          </div>
          <p className="footer-description">
            Your trusted partner for premium eyewear solutions. We combine style, comfort, and technology to bring you the perfect vision experience.
          </p>
          <div className="social-icons">
            <a href="#"><Facebook size={24} /></a>
            <a href="#"><Twitter size={24} /></a>
            <a href="#"><Instagram size={24} /></a>
            <a href="#"><Youtube size={24} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="footer-title">Customer Service</h3>
          <ul className="footer-links">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="footer-title">Get in Touch</h3>
          <ul className="footer-contact">
            <li className="contact-item"><Phone size={18} color="#60a5fa" /> 1-800-VISION-1</li>
            <li className="contact-item"><Mail size={18} color="#60a5fa" /> hello@visioncraft.com</li>
            <li className="contact-item"><MapPin size={18} color="#60a5fa" /> 123 Vision Street, New York, NY 10001</li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="newsletter">
        <h3>Stay Updated</h3>
        <p>Subscribe to get special offers and updates</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        <p>© 2024 VisionCraft. All rights reserved.</p>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
