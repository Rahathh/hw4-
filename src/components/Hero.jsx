export default function Hero() {
  return (
    <section id="home">
      <div className="hero-bg-text">CPK</div>
      <div className="hero-content">
        <span className="hero-tag">Est. 2008 · New York</span>
        <h1>Where Every<br /><em>Plate</em> Tells a Story</h1>
        <p className="hero-desc">
          Central Plate Kitchen is a neighborhood dining experience rooted in seasonal
          ingredients, crafted by chefs who believe every meal should tell a story.
        </p>
        <div className="btn-group">
          <a href="#menu" className="btn-primary-custom">Explore Menu</a>
          <a href="#contact" className="btn-outline-custom">Reserve a Table</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        Scroll
      </div>
    </section>
  )
}
