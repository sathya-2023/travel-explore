import { useEffect, useRef } from 'react'

function Insights() {
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

  const insights = [
    {
      id: 'local',
      title: 'Local-first curation',
      description: 'We partner with community guides to unlock experiences beyond the tourist map.'
    },
    {
      id: 'concierge',
      title: '24/7 concierge',
      description: 'Real humans answer from any time zone, keeping your trip effortless.'
    },
    {
      id: 'flexible',
      title: 'Flexible booking',
      description: 'Hold your itinerary without commitment and secure your dates later.'
    }
  ]

  return (
    <section className="insights" id="insights" aria-labelledby="insights-title">
      <div className="section-heading">
        <p className="eyebrow">Travel insights</p>
        <h2 id="insights-title">What you get with every Travel Explore plan.</h2>
      </div>
      <div className="insight-grid">
        {insights.map((insight, index) => (
          <div 
            key={insight.id} 
            className="insight-card reveal"
            ref={(el) => cardsRef.current[index] = el}
          >
            <h3>{insight.title}</h3>
            <p>{insight.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Insights
