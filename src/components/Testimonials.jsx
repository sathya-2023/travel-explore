import { useState, useEffect, useRef } from 'react'

function Testimonials() {
  const testimonials = [
    {
      quote: "Travel Explore planned every detail, so we could focus on living the moment. The local guide in Kyoto was magic.",
      name: "Ava Li · San Francisco",
    },
    {
      quote: "Every stop felt handpicked. The Sahara nights were unreal, and the team handled every curveball.",
      name: "Daniel Ortega · Austin",
    },
    {
      quote: "The itinerary was balanced and restorative. We loved the boutique stays and thoughtful food tours.",
      name: "Priya Nair · Toronto",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 6000)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isHovered, testimonials.length])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="section-heading">
        <p className="eyebrow">Traveler stories</p>
        <h2 id="testimonials-title">Every journey becomes a story worth telling.</h2>
      </div>
      <div 
        className="testimonial-card" 
        aria-live="polite"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="testimonial-content">
          <p className="testimonial-quote">"{current.quote}"</p>
          <p className="testimonial-name">{current.name}</p>
        </div>
        <div className="testimonial-controls">
          <button type="button" className="ghost-button" onClick={handlePrev}>
            Previous
          </button>
          <button type="button" className="ghost-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
