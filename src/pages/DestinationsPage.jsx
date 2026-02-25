import { useState } from 'react'
import { Link } from 'react-router-dom'
import Destinations from '../components/Destinations'

function DestinationsPage({ onOpenBooking }) {
  const [filters, setFilters] = useState({
    region: '',
    budget: '',
    activity: ''
  })

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({ region: '', budget: '', activity: '' })
  }

  return (
    <main id="main">
      <section className="destinations-filters" aria-label="Destination filters">
        <div className="filters-panel">
          <div className="filter-field">
            <label htmlFor="filter-region">Region</label>
            <select
              id="filter-region"
              value={filters.region}
              onChange={(event) => updateFilter('region', event.target.value)}
            >
              <option value="">All regions</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Africa">Africa</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
          <div className="filter-field">
            <label htmlFor="filter-budget">Budget</label>
            <select
              id="filter-budget"
              value={filters.budget}
              onChange={(event) => updateFilter('budget', event.target.value)}
            >
              <option value="">All budgets</option>
              <option value="under-2500">Under $2,500</option>
              <option value="2500-3500">$2,500 - $3,500</option>
              <option value="3500-plus">$3,500+</option>
            </select>
          </div>
          <div className="filter-field">
            <label htmlFor="filter-activity">Activities</label>
            <select
              id="filter-activity"
              value={filters.activity}
              onChange={(event) => updateFilter('activity', event.target.value)}
            >
              <option value="">All activities</option>
              <option value="beaches">Beaches</option>
              <option value="mountain">Mountain</option>
              <option value="city">City</option>
              <option value="culture">Culture</option>
              <option value="adventure">Adventure</option>
              <option value="wellness">Wellness</option>
            </select>
          </div>
          <div className="filter-action">
            <button className="ghost-button" type="button" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        </div>
      </section>
      <div className="destinations-page">
        <Destinations showHeading={false} limit={9} filters={filters} onViewTrip={onOpenBooking} />
      </div>
      <div className="page-pagination">
        <Link className="ghost-button" to="/destinations/page-2">Next destinations</Link>
      </div>
    </main>
  )
}

export default DestinationsPage
