export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="logo">Central Plate Kitchen</span>
          <p>A neighborhood kitchen with a fine dining soul — rooted in community, craft, and the finest seasonal ingredients New York has to offer.</p>
          <div className="social-links" style={{ marginTop: '1.5rem' }}>
            <a href="#" className="social-link" aria-label="Facebook">f</a>
            <a href="#" className="social-link" aria-label="Instagram">◎</a>
            <a href="#" className="social-link" aria-label="Twitter/X">𝕏</a>
            <a href="#" className="social-link" aria-label="TikTok">▲</a>
          </div>
        </div>
        <div>
          <p className="footer-heading">Navigate</p>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-heading">Visit</p>
          <ul className="footer-links">
            <li><a href="#">Private Events</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-heading">Hours</p>
          <div className="hours-row"><span className="hours-day">Mon – Thu</span><span className="hours-time">5 – 10pm</span></div>
          <div className="hours-row"><span className="hours-day">Fri – Sat</span><span className="hours-time">5 – 11pm</span></div>
          <div className="hours-row"><span className="hours-day">Sunday</span><span className="hours-time">4 – 9pm</span></div>
          <p style={{ marginTop: '1.2rem', fontSize: '0.8rem', color: '#555548' }}>
            Lunch service available<br />Fri – Sun · 12 – 2:30pm
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 Central Plate Kitchen. All rights reserved.</span>
        <span>142 Hudson St · Tribeca · New York, NY 10013</span>
      </div>
    </footer>
  )
}
