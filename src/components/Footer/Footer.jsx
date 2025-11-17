import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="logo">
            <i className="fas fa-rocket"></i>
            <span>Digital Liberia</span>
          </div>
          <p>Accelerating Liberia's digital transformation through innovation, collaboration, and strategic investment.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#hero">About Initiative</a>
          <a href="#events">Launch Events</a>
          <a href="#focus">Focus Areas</a>
          <a href="#contact">Get Involved</a>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p><i className="fas fa-envelope"></i> info@digitalliberia.gov.lr</p>
          <p><i className="fas fa-phone"></i> +231 XXX-XXXXXX</p>
          <p><i className="fas fa-map-marker-alt"></i> Monrovia, Liberia</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Digital Liberia Initiative. Building the future, digitally.</p>
      </div>
    </footer>
  )
}

export default Footer
