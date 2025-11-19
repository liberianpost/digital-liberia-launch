import React from 'react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDonateClick = () => {
    window.open('https://www.gofundme.com/f/support-digital-liberias-tech-revolution/cl/s?utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=copy_link&lang=en_GB&ts=1763551323', '_blank')
  }

  const features = [
    {
      icon: 'fas fa-rocket',
      title: 'Launch Event',
      description: 'February 27-28, 2026. Be part of history in the making.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Super App',
      description: 'Integrated government, business, and community services.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Digital ID',
      description: 'Secure national digital identity and payment systems.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Support Us',
      description: 'Help fuel the digital revolution with your contribution.'
    }
  ]

  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-gradient">Liberia's Digital Revolution</span>
            <span className="title-accent">Begins Here</span>
          </h1>
          <p className="hero-subtitle">
            Join us in launching a unified digital ecosystem that will transform 
            public services, financial inclusion, and innovation across Liberia.
          </p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className={`feature-item gradient-card feature-card-${index + 1}`}>
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary"
            >
              <i className="fas fa-user-plus"></i>
              Register Interest
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="btn btn-secondary"
            >
              <i className="fas fa-info-circle"></i>
              Event Details
            </button>
            <button 
              onClick={handleDonateClick}
              className="btn btn-donate"
            >
              <i className="fas fa-heart"></i>
              Support Our Mission
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-elements">
            <div className="floating-card card-1 floating white-card">
              <i className="fas fa-id-card"></i>
              <span>Digital ID</span>
            </div>
            <div className="floating-card card-2 floating white-card" style={{animationDelay: '1s'}}>
              <i className="fas fa-wallet"></i>
              <span>LibPay</span>
            </div>
            <div className="floating-card card-3 floating white-card" style={{animationDelay: '2s'}}>
              <i className="fas fa-mobile"></i>
              <span>Super App</span>
            </div>
            <div className="floating-card card-4 floating white-card" style={{animationDelay: '1.5s'}}>
              <i className="fas fa-heart"></i>
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
