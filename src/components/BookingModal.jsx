import { useEffect, useState } from 'react'

function BookingModal({ isOpen, onClose, context }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dates: '',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    setFormData({ name: '', email: '', dates: '', notes: '' })
    setSubmitted(false)
  }, [isOpen, context])

  useEffect(() => {
    if (!isOpen) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <p className="eyebrow">Request details</p>
            <h2 id="booking-title">Plan {context?.title || 'this trip'}</h2>
          </div>
          <button className="ghost-button" type="button" onClick={onClose}>
            Close
          </button>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
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
            Preferred dates
            <input
              type="text"
              name="dates"
              value={formData.dates}
              onChange={handleChange}
              placeholder="e.g. May 12 - May 20"
            />
          </label>
          <label>
            Notes
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Tell us about your style, must-haves, or questions."
              rows="3"
            />
          </label>
          {submitted ? (
            <p className="form-success">Request received. Our travel team will reply shortly.</p>
          ) : null}
          <div className="modal-actions">
            <button className="primary-button" type="submit">
              Submit request
            </button>
            <button className="ghost-button" type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingModal
