import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact">
      <span className="section-label">Find Us</span>
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-sub">Reserve your table or send us a message — we'd love to hear from you.</p>
      <div className="divider"></div>

      <div className="contact-grid">
        <div>
          <div className="map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00425!3d40.71278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1628cb27ef%3A0x3a8c1b7e73a58e6e!2sTribeca%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            />
            <div className="map-label">📍 142 Hudson St, Tribeca, New York</div>
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <p style={{ color: '#9a9080', fontSize: '0.9rem' }}>
              📞 <a href="tel:+12129876543" style={{ color: 'var(--gold)', textDecoration: 'none' }}>+1 (212) 987-6543</a>
            </p>
            <p style={{ color: '#9a9080', fontSize: '0.9rem' }}>
              ✉️ <a href="mailto:rh@centralplatekitchen.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>rh@centralplatekitchen.com</a>
            </p>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Reservation request, dietary needs, private event inquiry..."
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button className="btn-submit" onClick={handleSubmit}>Send Message</button>
          {submitted && (
            <p style={{ color: '#6fcf97', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              ✓ Your message has been sent. We'll be in touch within 24 hours.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
