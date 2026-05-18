import { useState, useEffect } from 'react'

const slides = [
  { img: '/steak.jpg', c1: '#3d1f0a', c2: '#8c3a10', num: '01 / 06', title: 'The Tomahawk', desc: 'Our 48oz dry-aged masterpiece, finished over an open hardwood fire.' },
  { img: '/veggies.jpg', c1: '#1a2a1a', c2: '#2d4a2d', num: '02 / 06', title: 'Garden Fresh', desc: 'Seasonal produce sourced directly from our partner farms each morning.' },
  { img: '/wine.jpg', c1: '#2a1a30', c2: '#4a2060', num: '03 / 06', title: 'The Wine Cellar', desc: 'Over 300 labels curated by our resident sommelier from six continents.' },
  { img: '/fire.jpg', c1: '#2a1a08', c2: '#5c3a10', num: '04 / 06', title: 'The Open Kitchen', desc: 'Watch our chefs work the live fire — theatre and technique in harmony.' },
  { img: '/cookie.jpg', c1: '#1a1a2a', c2: '#202038', num: '05 / 06', title: 'Pastry Lab', desc: 'Desserts built daily from scratch — each one a small work of art.' },
  { img: '/tables.jpg', c1: '#0f1a14', c2: '#1a3020', num: '06 / 06', title: 'The Dining Room', desc: 'Warm walnut interiors, candlelit tables — an atmosphere built for memories.' },
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)

  const goTo = (n) => setCurrent((n + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000)
    return () => clearInterval(timer)
  }, [current])

  return (
    <section id="gallery">
      <span className="section-label">A Visual Feast</span>
      <h2 className="section-title">Gallery</h2>
      <p className="section-sub">A glimpse into the warmth, craft, and artistry that defines every visit to Central Plate Kitchen.</p>
      <div className="divider"></div>

      <div className="slider-wrap">
        <div className="slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, i) => (
            <div className="slide" key={i}>
              <div className="slide-inner">
                <div className="slide-bg" style={{ '--c1': slide.c1, '--c2': slide.c2 }}>
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="slide-caption">
                  <p className="slide-num">{slide.num}</p>
                  <h3>{slide.title}</h3>
                  <p>{slide.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-controls">
        <button className="slider-btn" aria-label="Previous" onClick={() => goTo(current - 1)}>←</button>
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i)} />
          ))}
        </div>
        <button className="slider-btn" aria-label="Next" onClick={() => goTo(current + 1)}>→</button>
      </div>
    </section>
  )
}
