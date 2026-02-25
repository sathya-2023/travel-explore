import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Destinations({
  showHeading = true,
  showCta = false,
  startIndex = 0,
  limit,
  filters,
  onViewTrip
}) {
  const cardsRef = useRef([])

  const destinations = [
    {
      id: 'santorini',
      name: 'Santorini, Greece',
      nights: '8 nights',
      description: 'Golden cliffs, sunset sails, and boutique villas curated for slow travel.',
      price: 'From $2,980',
      priceValue: 2980,
      region: 'Europe',
      activities: ['beaches'],
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'kyoto',
      name: 'Kyoto, Japan',
      nights: '6 nights',
      description: 'Temple mornings, tea rituals, and Michelin-level dining experiences.',
      price: 'From $3,450',
      priceValue: 3450,
      region: 'Asia',
      activities: ['culture'],
      imageUrl:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'amsterdam',
      name: 'Amsterdam, Netherlands',
      nights: '5 nights',
      description: 'Canal-side stays, design districts, and cycling routes built for slow days.',
      price: 'From $2,140',
      priceValue: 2140,
      region: 'Europe',
      activities: ['city'],
      imageUrl:
        'https://images.unsplash.com/photo-1505765050516-f72dcac9c60b?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'patagonia',
      name: 'Patagonia, Chile',
      nights: '9 nights',
      description: 'Hike iconic trails, stay in lodges, and fly over glacial lakes.',
      price: 'From $4,120',
      priceValue: 4120,
      region: 'South America',
      activities: ['mountain'],
      imageUrl:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'marrakech',
      name: 'Marrakech, Morocco',
      nights: '7 nights',
      description: 'Riad evenings, atlas day trips, and guided souk tastings.',
      price: 'From $2,760',
      priceValue: 2760,
      region: 'Africa',
      activities: ['culture'],
      imageUrl:
        'https://images.unsplash.com/photo-1506384292696-0f7fcb1d4c27?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'reykjavik',
      name: 'Reykjavik, Iceland',
      nights: '6 nights',
      description: 'Geo-thermal lagoons, glacier walks, and northern light cabins.',
      price: 'From $3,890',
      priceValue: 3890,
      region: 'Europe',
      activities: ['wellness'],
      imageUrl:
        'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'banff',
      name: 'Banff, Canada',
      nights: '5 nights',
      description: 'Lakeside trails, mountain spa stays, and scenic gondolas.',
      price: 'From $2,430',
      priceValue: 2430,
      region: 'North America',
      activities: ['mountain'],
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'cape-town',
      name: 'Cape Town, South Africa',
      nights: '8 nights',
      description: 'Winelands excursions, coastal drives, and Table Mountain hikes.',
      price: 'From $3,620',
      priceValue: 3620,
      region: 'Africa',
      activities: ['beaches'],
      imageUrl:
        'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'queenstown',
      name: 'Queenstown, New Zealand',
      nights: '7 nights',
      description: 'Lakeside lodges, alpine flights, and adventure day passes.',
      price: 'From $3,980',
      priceValue: 3980,
      region: 'Oceania',
      activities: ['adventure'],
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'lisbon',
      name: 'Lisbon, Portugal',
      nights: '5 nights',
      description: 'River cruises, tiled alleys, and chef-led food walks.',
      price: 'From $2,210',
      priceValue: 2210,
      region: 'Europe',
      activities: ['city'],
      imageUrl:
        'https://images.unsplash.com/photo-1508606572321-901ea443707f?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'bali',
      name: 'Ubud, Bali',
      nights: '6 nights',
      description: 'Wellness villas, rice terrace treks, and artisan studios.',
      price: 'From $2,540',
      priceValue: 2540,
      region: 'Asia',
      activities: ['wellness'],
      imageUrl:
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'mexico-city',
      name: 'Mexico City, Mexico',
      nights: '5 nights',
      description: 'Art districts, mezcal tastings, and market-to-table dining.',
      price: 'From $2,080',
      priceValue: 2080,
      region: 'North America',
      activities: ['city'],
      imageUrl:
        'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80'
    }
  ]

  const activeFilters = filters || {}
  const matchesBudget = (dest, budget) => {
    if (!budget) return true
    if (budget === 'under-2500') return dest.priceValue < 2500
    if (budget === '2500-3500') return dest.priceValue >= 2500 && dest.priceValue <= 3500
    if (budget === '3500-plus') return dest.priceValue > 3500
    return true
  }

  const filteredDestinations = destinations.filter((dest) => {
    const regionMatch = !activeFilters.region || dest.region === activeFilters.region
    const budgetMatch = matchesBudget(dest, activeFilters.budget)
    const activityMatch =
      !activeFilters.activity || dest.activities.includes(activeFilters.activity)

    return regionMatch && budgetMatch && activityMatch
  })

  const visibleDestinations = filteredDestinations.slice(
    startIndex,
    typeof limit === 'number' ? startIndex + limit : filteredDestinations.length
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [filters, startIndex, limit])

  return (
    <section
      className="destinations"
      id="destinations"
      aria-labelledby={showHeading ? 'destinations-title' : undefined}
      aria-label={showHeading ? undefined : 'Destinations'}
    >
      {showHeading ? (
        <div className="section-heading">
          <p className="eyebrow">Featured destinations</p>
          <h2 id="destinations-title">Hand-selected routes for every kind of traveler.</h2>
        </div>
      ) : null}
      <div className="cards-grid">
        {visibleDestinations.map((dest, index) => (
          <article 
            key={dest.id} 
            className="destination-card reveal"
            ref={(el) => cardsRef.current[index] = el}
          >
            <div
              className="card-image"
              style={{
                backgroundImage: `linear-gradient(120deg, rgba(25, 25, 27, 0.2), rgba(25, 25, 27, 0.4)), url("${dest.imageUrl}")`
              }}
            ></div>
            <div className="card-body">
              <div className="card-header">
                <h3>{dest.name}</h3>
                <span>{dest.nights}</span>
              </div>
              <p>{dest.description}</p>
              <div className="card-footer">
                <span>{dest.price}</span>
                <button
                  className="ghost-button"
                  type="button"
                  onClick={() => onViewTrip?.(dest)}
                >
                  View trip
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {showCta ? (
        <div className="destinations-cta">
          <Link className="primary-button" to="/destinations">
            View all destinations
          </Link>
        </div>
      ) : null}
    </section>
  )
}

export default Destinations
