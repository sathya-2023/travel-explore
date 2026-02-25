import { useEffect, useRef } from 'react'

function Journeys({ onReserve }) {
  const cardsRef = useRef([])

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
  }, [])

  const journeys = [
    {
      id: 'nordic',
      title: 'Nordic Lights',
      description: 'Private aurora hunts, Nordic spas, and Icelandic cuisine workshops.',
      features: ['Guided glacier hike', 'Geo-thermal lagoon access', 'Small group of 8'],
      price: 'From $2,450'
    },
    {
      id: 'moroccan',
      title: 'Moroccan Atlas',
      description: 'Ride camels into the Sahara and dine with artisan families.',
      features: ['Riad stays in Marrakech', 'Chef-hosted cooking', 'Desert stargazing'],
      price: 'From $1,980'
    },
    {
      id: 'peru',
      title: 'Peru Sacred Valley',
      description: 'Sunrise over Machu Picchu with private guides and local weavers.',
      features: ['Luxury train access', 'Andean wellness ritual', 'Marketplace tours'],
      price: 'From $2,780'
    }
  ]

  return (
    <section className="journeys" id="journeys" aria-labelledby="journeys-title">
      <div className="section-heading">
        <p className="eyebrow">Signature journeys</p>
        <h2 id="journeys-title">Experiences designed for connection and wonder.</h2>
      </div>
      <div className="journey-grid">
        {journeys.map((journey, index) => (
          <article 
            key={journey.id} 
            className="journey-card reveal"
            ref={(el) => cardsRef.current[index] = el}
          >
            <h3>{journey.title}</h3>
            <p>{journey.description}</p>
            <ul>
              {journey.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="journey-footer">
              <span>{journey.price}</span>
              <button
                className="primary-button"
                type="button"
                onClick={() => onReserve?.(journey)}
              >
                Reserve
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Journeys
