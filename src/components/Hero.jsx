import { useState, useEffect, useRef } from 'react'

function Hero() {
  const [proofNumbers, setProofNumbers] = useState({ journeys: 0, guides: 0, rating: 0 })
  const proofRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            animateNumbers()
          }
        })
      },
      { threshold: 0.7 }
    )

    if (proofRef.current) {
      observer.observe(proofRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateNumbers = () => {
    const duration = 1200
    const targets = { journeys: 850, guides: 120, rating: 4.9 }
    const start = performance.now()

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setProofNumbers({
        journeys: Math.floor(targets.journeys * progress),
        guides: Math.floor(targets.guides * progress),
        rating: (targets.rating * progress).toFixed(1),
      })
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  const scrollTo = (id) => {
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Curated travel studio</p>
        <h1 id="hero-title">Design your next escape with local experts.</h1>
        <p className="hero-subtitle">
          Handpicked stays, immersive day plans, and real-time support from a team that knows the way.
        </p>
        <div className="hero-actions">
          <button className="primary-button" type="button" onClick={() => scrollTo('#planner')}>
            Start planning
          </button>
          <button className="ghost-button" type="button" onClick={() => scrollTo('#destinations')}>
            Explore destinations
          </button>
        </div>
        <div className="hero-proof" ref={proofRef}>
          <div>
            <p className="proof-number">{proofNumbers.journeys}</p>
            <p className="proof-label">Journeys crafted</p>
          </div>
          <div>
            <p className="proof-number">{proofNumbers.guides}</p>
            <p className="proof-label">Local guides</p>
          </div>
          <div>
            <p className="proof-number">{proofNumbers.rating}</p>
            <p className="proof-label">Average rating</p>
          </div>
        </div>
      </div>
      <div className="hero-card" role="presentation">
        <div className="hero-card__media">
          <div className="hero-card__tag">Featured</div>
          <div className="hero-card__title">Iceland Aurora Week</div>
          <p>Chase the northern lights with private guides and cozy lodges.</p>
          <div className="hero-card__meta">
            <span>7 nights</span>
            <span>From $2,450</span>
          </div>
        </div>
        <div className="hero-card__footer">
          <div>
            <p className="meta-label">Best season</p>
            <p className="meta-value">Nov - Mar</p>
          </div>
          <button className="primary-button" type="button" onClick={() => scrollTo('#journeys')}>
            See details
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
