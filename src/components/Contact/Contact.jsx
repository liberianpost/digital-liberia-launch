import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { submitInterest } from '../../utils/api'
import './Contact.css'

const Contact = () => {
  const { formData, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    organization: '',
    interest: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ text: '', type: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage({ text: '', type: '' })

    try {
      await submitInterest(formData)
      setMessage({ 
        text: 'Thank you for your interest! We will contact you soon about the Digital Liberia launch.', 
        type: 'success' 
      })
      resetForm()
    } catch (error) {
      setMessage({ 
        text: 'There was an error submitting your interest. Please try again.', 
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
            className="btn btn-primary login-submit-btn"
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
