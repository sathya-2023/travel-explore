import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Home from './pages/Home'
import DestinationsPage from './pages/DestinationsPage'
import DestinationsPage2 from './pages/DestinationsPage2'
import ContactPage from './pages/ContactPage'
import BookingModal from './components/BookingModal'
import Footer from './components/Footer'

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isDestinations = location.pathname.startsWith('/destinations')
  const [bookingContext, setBookingContext] = useState(null)

  const handleOpenBooking = (item) => {
    if (!item) return
    setBookingContext({ title: item.name || item.title || 'this trip' })
  }

  const handleCloseBooking = () => {
    setBookingContext(null)
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <div className="page">
        <header className="site-header" id="top">
          <Navbar />
          {isHome ? <Hero /> : null}
          {isDestinations ? (
            <div className="page-hero">
              <p className="eyebrow">Destinations</p>
              <h1>Curated journeys designed around the place.</h1>
              <p>
                Compare signature stays, local guides, and seasonal highlights across our most
                loved regions.
              </p>
            </div>
          ) : null}
        </header>
        <Routes>
          <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
          <Route
            path="/destinations"
            element={<DestinationsPage onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/destinations/page-2"
            element={<DestinationsPage2 onOpenBooking={handleOpenBooking} />}
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
      <BookingModal
        isOpen={Boolean(bookingContext)}
        onClose={handleCloseBooking}
        context={bookingContext}
      />
    </>
  )
}

export default App
