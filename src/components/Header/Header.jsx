import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

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
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">
            <i className="fas fa-rocket"></i>
          </div>
          <span>Digital Liberia</span>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('events')}>Events</button>
          <button onClick={() => scrollToSection('focus')}>Focus Areas</button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="btn btn-secondary"
          >
            Get Involved
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
