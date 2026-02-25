import { useState } from 'react'

function Planner() {
  const [formData, setFormData] = useState({
    destination: '',
    month: '',
    travelers: 2,
    budget: '',
  })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! We will send your custom plan within 48 hours.')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section className="planner" id="planner" aria-labelledby="planner-title">
      <div className="section-heading">
        <p className="eyebrow">Trip planner</p>
        <h2 id="planner-title">Tell us your vibe. We will build the itinerary.</h2>
        <p>Answer a few questions and receive a custom plan within 48 hours.</p>
      </div>
      <form className="planner-form" onSubmit={handleSubmit}>
        <label>
          Destination type
          <select name="destination" value={formData.destination} onChange={handleChange}>
            <option value="">Choose a region</option>
            <option value="coastal">Coastal retreat</option>
            <option value="mountain">Mountain escape</option>
            <option value="city">City immersion</option>
            <option value="remote">Remote hideaway</option>
          </select>
        </label>
        <label>
          Travel month
          <input 
            type="month" 
            name="month" 
            value={formData.month} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Travelers
          <input 
            type="number" 
            name="travelers" 
            min="1" 
            max="12" 
            value={formData.travelers} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Budget range
          <select name="budget" value={formData.budget} onChange={handleChange}>
            <option value="">Select range</option>
            <option value="mid">$1,500 - $3,000</option>
            <option value="luxe">$3,000 - $5,500</option>
            <option value="elite">$5,500+</option>
          </select>
        </label>
        <button className="primary-button" type="submit">Get my plan</button>
      </form>
      {status ? <p className="form-success">{status}</p> : null}
    </section>
  )
}

export default Planner
