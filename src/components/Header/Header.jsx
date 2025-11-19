import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const handleDonateClick = () => {
    window.open('https://www.gofundme.com/f/support-digital-liberias-tech-revolution/cl/s?utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=copy_link&lang=en_GB&ts=1763551323', '_blank')
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <img 
            src="/caa6124f-510b-4738-8000-6907bd32897b.png" 
            alt="Digital Liberia" 
            className="logo-image"
          />
          <span>Digital Liberia</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <button onClick={() => scrollToSection('hero')}>Home</button>
          <button onClick={() => scrollToSection('events')}>Events</button>
          <button onClick={() => scrollToSection('focus')}>Focus Areas</button>
          <button onClick={handleDonateClick} className="donate-btn">
            <i className="fas fa-heart"></i>
            Donate
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="btn btn-secondary"
          >
            Get Involved
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('hero')}>
            <i className="fas fa-home"></i>
            Home
          </button>
          <button onClick={() => scrollToSection('events')}>
            <i className="fas fa-calendar"></i>
            Events
          </button>
          <button onClick={() => scrollToSection('focus')}>
            <i className="fas fa-bullseye"></i>
            Focus Areas
          </button>
          <button onClick={handleDonateClick} className="donate-btn">
            <i className="fas fa-heart"></i>
            Donate
          </button>
          <button onClick={() => scrollToSection('contact')}>
            <i className="fas fa-envelope"></i>
            Get Involved
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  )
}

export default Header
