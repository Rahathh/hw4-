import { useEffect, useState } from "react"


function MenuCard({ item, onAddToCart }) {
  return (
    <div className="menu-card">
      <div className="menu-card-top">
        <span className="menu-item-name">{item.name}</span>
        <span className="menu-item-price">${item.price}</span>
      </div>
      <p className="menu-item-desc">{item.desc}</p>
      {item.tag && <span className="menu-item-tag">{item.tag}</span>}
      <div className="menu-card-actions">
        <button className="add-cart-btn" onClick={() => onAddToCart(item)}>
          Add to Cart
        </button>
        <span className="cart-pill">{item.pill}</span>
      </div>
    </div>
  )
}

export default function Menu({ onAddToCart }) {
  const [activeTab, setActiveTab] = useState('starters')
  const [menu, setMenu] = useState([])

  const tabs = [
    { key: 'starters', label: 'Starters' },
    { key: 'mains', label: 'Mains' },
    { key: 'desserts', label: 'Desserts' },
    { key: 'drinks', label: 'Drinks' },
  ]

  useEffect(() => {
  fetch("http://localhost:5000/api/menu")
    .then(res => res.json())
    .then(data => setMenu(data))
}, [])

  return (
    <section id="menu">
      <span className="section-label">What We Serve</span>
      <h2 className="section-title">Our Menu</h2>
      <p className="section-sub">Every dish is crafted to order using locally sourced, seasonal ingredients.</p>
      <div className="divider"></div>

      <div className="menu-tabs">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {menu
  .filter(item => item.category === activeTab)
  .map(item => (
          <MenuCard key={item.name} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}
