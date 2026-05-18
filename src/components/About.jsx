export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-visual">
          <span className="about-big-icon">🏛️</span>
          <div className="about-visual-label">
            <h4>Founded in 2008</h4>
            <p>Lower Manhattan, New York</p>
          </div>
        </div>
        <div>
          <span className="section-label">Our Story</span>
          <h2 className="section-title">Born From Passion,<br />Built on Community</h2>
          <div className="divider"></div>
          <p style={{ color: 'var(--warm-gray)', lineHeight: 1.9, marginBottom: '1.2rem' }}>
            Central Plate Kitchen began in 2008 when chef Marcus Webb returned from years cooking
            across Europe, carrying a single conviction: that great food starts with great ingredients
            and the people who grow them.
          </p>
          <p style={{ color: 'var(--warm-gray)', lineHeight: 1.9, marginBottom: '2rem' }}>
            What started as a 28-seat supper club in a converted Tribeca townhouse is now one of
            New York's most beloved dining destinations — but our philosophy hasn't changed. We source
            from fewer than thirty farms. We change our menu weekly. And we still cook everything over hardwood.
          </p>
          <div className="about-stats">
            <div className="stat"><div className="stat-num">16+</div><div className="stat-label">Years of Excellence</div></div>
            <div className="stat"><div className="stat-num">30</div><div className="stat-label">Partner Farms</div></div>
            <div className="stat"><div className="stat-num">3</div><div className="stat-label">James Beard Nominations</div></div>
            <div className="stat"><div className="stat-num">★★</div><div className="stat-label">Michelin Stars</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
