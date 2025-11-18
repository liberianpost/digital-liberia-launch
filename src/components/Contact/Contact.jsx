import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ text: '', type: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      organization: '',
      interest: ''
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage({ text: '', type: '' })

    try {
      const response = await fetch('/launch-interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          interest: formData.interest
        })
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setMessage({ 
          text: data.message, 
          type: 'success' 
        })
        resetForm()
      } else {
        setMessage({ 
          text: data.message || 'There was an error submitting your interest. Please try again.', 
          type: 'error' 
        })
      }
    } catch (error) {
      console.error('Submission error:', error)
      setMessage({ 
        text: 'There was an error submitting your interest. Please check your connection and try again.', 
        type: 'error' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get Involved in the Digital Revolution</h2>
          <p>
            Join government, private sector, innovators, and international partners 
            in building Liberia's digital future.
          </p>
        </div>
        
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="organization">Organization</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Your company or organization"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="interest">Area of Interest *</label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            >
              <option value="">Select your interest</option>
              <option value="partner">Partnership</option>
              <option value="investor">Investment</option>
              <option value="startup">Startup Participation</option>
              <option value="attendance">Event Attendance</option>
              <option value="volunteer">Volunteer</option>
              <option value="media">Media Coverage</option>
            </select>
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="spinner-small"></div>
                Submitting...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i>
                Express Interest
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
