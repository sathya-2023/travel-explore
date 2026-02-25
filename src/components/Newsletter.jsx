import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks for subscribing! Your first itinerary arrives soon.')
    setEmail('')
  }

  return (
    <section className="newsletter" id="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter-card">
        <div>
          <p className="eyebrow">Stay inspired</p>
          <h2 id="newsletter-title">Monthly itineraries and exclusive releases.</h2>
          <p>Join 18,000 travelers receiving curated ideas and early access to new routes.</p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label>
            Email address
            <input 
              type="email" 
              name="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </label>
          <button className="primary-button" type="submit">Join the list</button>
          <p className="form-note">We only send what helps you travel better.</p>
          {status ? <p className="form-success">{status}</p> : null}
        </form>
      </div>
    </section>
  )
}

export default Newsletter
