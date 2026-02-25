import { Link } from 'react-router-dom'
import Destinations from '../components/Destinations'

function DestinationsPage2({ onOpenBooking }) {
  return (
    <main id="main">
      <section className="destinations-page-intro">
        <div className="section-heading">
          <p className="eyebrow">More destinations</p>
          <h2>Continue exploring the collection.</h2>
          <p>Smaller groups, deeper access, and custom pacing for each place.</p>
        </div>
      </section>
      <Destinations showHeading={false} startIndex={9} limit={3} onViewTrip={onOpenBooking} />
      <div className="page-pagination">
        <Link className="ghost-button" to="/destinations">Back to destinations</Link>
      </div>
    </main>
  )
}

export default DestinationsPage2
