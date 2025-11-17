import React from 'react'

const FocusAreas = () => {
  const focusItems = [
    { icon: 'fas fa-government', title: 'Digital Public Infrastructure', description: 'Modernizing government services and citizen engagement' },
    { icon: 'fas fa-coins', title: 'FinTech & Digital Payments', description: 'Expanding financial inclusion through LibPay and mobile money' },
    { icon: 'fas fa-graduation-cap', title: 'Tech Education', description: 'Building nationwide digital skills and capacity' },
    { icon: 'fas fa-shield-alt', title: 'Cybersecurity', description: 'Ensuring digital resilience and data protection' },
    { icon: 'fas fa-heartbeat', title: 'Digital Health', description: 'Transforming healthcare through telemedicine' },
    { icon: 'fas fa-tractor', title: 'AgriTech', description: 'Modernizing agriculture with digital platforms' }
  ]

  return (
    <section id="focus" className="focus-section">
      <div className="section-header">
        <h2>Strategic Focus Areas</h2>
        <p>Building the foundation for Liberia's digital future</p>
      </div>
      <div className="focus-grid">
        {focusItems.map((item, index) => (
          <div key={index} className="focus-item">
            <i className={item.icon}></i>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FocusAreas
