import { useState, useEffect, useRef } from 'react'

function Stats() {
  const [stats, setStats] = useState({ satisfaction: 0, response: 0, guides: 0, zones: 0 })
  const statsRef = useRef([])
  const hasAnimated = useRef(false)

  const statData = [
    { id: 'satisfaction', label: 'Satisfaction score', target: 98 },
    { id: 'response', label: 'Average response in minutes', target: 36 },
    { id: 'guides', label: 'Partner guides', target: 120 },
    { id: 'zones', label: 'Time zones covered', target: 24 }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            if (!hasAnimated.current) {
              hasAnimated.current = true
              animateStats()
            }
          }
        })
      },
      { threshold: 0.6 }
    )

    statsRef.current.forEach((stat) => {
      if (stat) observer.observe(stat)
    })

    return () => observer.disconnect()
  }, [])

  const animateStats = () => {
    const duration = 1200
    const start = performance.now()

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setStats({
        satisfaction: Math.floor(98 * progress),
        response: Math.floor(36 * progress),
        guides: Math.floor(120 * progress),
        zones: Math.floor(24 * progress),
      })
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  return (
    <section className="stats" aria-labelledby="stats-title">
      <div className="section-heading">
        <p className="eyebrow">Proof in numbers</p>
        <h2 id="stats-title">Trusted by travelers across 42 countries.</h2>
      </div>
      <div className="stats-grid">
        {statData.map((stat, index) => (
          <div 
            key={stat.id} 
            className="stat-card reveal"
            ref={(el) => statsRef.current[index] = el}
          >
            <p className="stat-number">{stats[stat.id]}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
