import React, { useState, useEffect } from 'react'

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
          <img 
            src="/caa6124f-510b-4738-8000-6907bd32897b.png" 
            alt="Digital Liberia" 
            className="logo-image"
          />
          <span>Digital Liberia</span>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('hero')}>Home</button>
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
