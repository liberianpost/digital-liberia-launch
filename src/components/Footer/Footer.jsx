import React from 'react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="logo">
            <img 
              src="/caa6124f-510b-4738-8000-6907bd32897b.png" 
              alt="Digital Liberia" 
              className="logo-image"
            />
            <span>Digital Liberia</span>
          </div>
          <p>Accelerating Liberia's digital transformation through innovation, collaboration, and strategic investment.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <button onClick={() => scrollToSection('hero')}>About Initiative</button>
          <button onClick={() => scrollToSection('events')}>Launch Events</button>
          <button onClick={() => scrollToSection('focus')}>Focus Areas</button>
          <button onClick={() => scrollToSection('contact')}>Get Involved</button>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p><i className="fas fa-envelope"></i> info@digitalliberia.com</p>
          <p><i className="fas fa-phone"></i> +231 775055817</p>
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
