import React from 'react'
import './Events.css'

const Events = () => {
  const events = [
    {
      icon: 'fas fa-bullhorn',
      title: 'Opening Night',
      date: 'February 27, 2026',
      theme: '"Reimagining Liberia\'s Digital Future"',
      description: 'Witness the unveiling of Digital Liberia\'s vision and experience live demonstrations of our core platforms.',
      features: ['National Address', 'Super App Launch', 'Live Demos'],
      gradient: 'var(--success-color), var(--info-color)'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Pitch & Innovation Day',
      date: 'February 28, 2026',
      theme: '"Innovation, Partnerships & Opportunities"',
      description: 'Startup pitches, investor meetings, and deep-dive workshops across all digital sectors.',
      features: ['Startup Pitches', 'Investor Roundtable', 'Sector Workshops'],
      gradient: 'var(--purple-color), var(--info-color)'
    }
  ]

  return (
    <section id="events" className="events-section">
      <div className="action-grid">
        {events.map((event, index) => (
          <div key={index} className="action-card">
            <div 
              className="card-icon"
              style={{background: `linear-gradient(135deg, ${event.gradient})`}}
            >
              <i className={event.icon}></i>
            </div>
            <h3 className="card-title">{event.title}</h3>
            <p className="card-date">{event.date}</p>
            <p className="card-theme">{event.theme}</p>
            <p className="card-description">{event.description}</p>
            <div className="card-features">
              {event.features.map((feature, featureIndex) => (
                <span key={featureIndex} className="feature-tag">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Events
