import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <img src="https://i.postimg.cc/zXJB38vp/icon.png" alt="Harmony Hub Logo" />
            <span>Harmony Hub</span>
          </Link>
          <p className="footer-description">
            Dedicated to providing support, resources, and hope for those facing mental health challenges. Your well-being is our priority.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/resource">Resources</Link></li>
            <li><Link to="/support-groups">Support Groups</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt /> <span>C-24 Raju Park</span></li>
            <li><FaPhone /> <span>Helpline: 988</span></li>
            <li><FaEnvelope /> <span>support@harmonyhub.org</span></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Newsletter</h3>
          <p className="newsletter-description">Subscribe for mental health tips, resources, and updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" className="newsletter-input" />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Harmony Hub. All rights reserved.
          </p>
          <ul className="footer-bottom-links">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer