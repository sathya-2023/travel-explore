import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Planner from '../components/Planner'
import Destinations from '../components/Destinations'
import Journeys from '../components/Journeys'
import Insights from '../components/Insights'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'
import Newsletter from '../components/Newsletter'

function Home({ onOpenBooking }) {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const target = document.querySelector(location.hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  return (
    <main id="main">
      <Planner />
      <Destinations limit={3} showCta onViewTrip={onOpenBooking} />
      <Journeys onReserve={onOpenBooking} />
      <Insights />
      <Testimonials />
      <Stats />
      <Newsletter />
    </main>
  )
}

export default Home
