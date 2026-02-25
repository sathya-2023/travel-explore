import { useState } from 'react'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'General inquiry',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('Thanks! We will reply within one business day.')
  }

  return (
    <main id="main">
      <section className="contact-page" aria-labelledby="contact-title">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Tell us about the trip you want to plan.</h2>
          <p>Share a few details and our travel team will follow up shortly.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              required
            />
          </label>
          <label>
            Email address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Topic
            <select name="topic" value={formData.topic} onChange={handleChange}>
              <option value="General inquiry">General inquiry</option>
              <option value="Custom itinerary">Custom itinerary</option>
              <option value="Group travel">Group travel</option>
              <option value="Partnerships">Partnerships</option>
            </select>
          </label>
          <label className="contact-message">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your dates, group size, and travel style."
              rows="5"
              required
            />
          </label>
          <button className="primary-button" type="submit">Send message</button>
          {status ? <p className="form-success">{status}</p> : null}
        </form>
      </section>
    </main>
  )
}

export default ContactPage
