import React from 'react'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Events from './components/Events/Events.jsx'
import FocusAreas from './components/FocusAreas/FocusAreas.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import './styles/globals.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          <Hero />
          <Events />
          <FocusAreas />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
