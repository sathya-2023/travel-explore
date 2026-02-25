import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname, location.hash])

  const scrollTo = (id) => {
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', id)
    }
    setIsOpen(false)
  }

  const handleSectionNav = (event, hash) => {
    event.preventDefault()
    if (location.pathname === '/') {
      scrollTo(hash)
      return
    }
    setIsOpen(false)
    navigate({ pathname: '/', hash })
  }

  const handleHomeClick = (event) => {
    if (location.pathname === '/') {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.history.replaceState(null, '', '/')
    }
    setIsOpen(false)
  }

  return (
    <div className="nav-bar">
      <Link className="brand" to="/" aria-label="Travel Explore home" onClick={handleHomeClick}>
        Travel Explore
      </Link>
      <button 
        className="nav-toggle" 
        type="button" 
        aria-controls="primary-nav" 
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        Menu
      </button>
      <nav id="primary-nav" className={`nav ${isOpen ? 'is-open' : ''}`} aria-label="Primary">
        <Link to="/destinations" onClick={() => setIsOpen(false)}>Destinations</Link>
        <Link to={{ pathname: '/', hash: '#journeys' }} onClick={(e) => handleSectionNav(e, '#journeys')}>
          Journeys
        </Link>
        <Link to={{ pathname: '/', hash: '#insights' }} onClick={(e) => handleSectionNav(e, '#insights')}>
          Insights
        </Link>
        <Link to={{ pathname: '/', hash: '#testimonials' }} onClick={(e) => handleSectionNav(e, '#testimonials')}>
          Stories
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>
      <div className="nav-cta">
        <button className="ghost-button" type="button" onClick={(e) => handleSectionNav(e, '#newsletter')}>
          Get updates
        </button>
        <button className="primary-button" type="button" onClick={(e) => handleSectionNav(e, '#planner')}>
          Plan a trip
        </button>
      </div>
    </div>
  )
}

export default Navbar
