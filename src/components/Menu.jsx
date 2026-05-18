import { useEffect, useState } from "react"

function MenuCard({ item, onAddToCart }) {
  return (
    <div className="menu-card">
      <div className="menu-card-top">
        <span className="menu-item-name">{item.name}</span>
        <span className="menu-item-price">${item.price}</span>
      </div>

      <p className="menu-item-desc">{item.description}</p>

      <div className="menu-card-actions">
        <button
          className="add-cart-btn"
          onClick={() => onAddToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default function Menu({ onAddToCart }) {
  const [activeTab, setActiveTab] = useState("starters")
  const [menu, setMenu] = useState([])

  const tabs = [
    { key: "starters", label: "Starters" },
    { key: "mains", label: "Mains" },
    { key: "desserts", label: "Desserts" },
    { key: "drinks", label: "Drinks" },
  ]

  useEffect(() => {
    fetch("http://localhost:5000/api/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <section id="menu">
      <h2>HELLO TEST</h2>

      <div className="menu-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {menu
          .filter((item) => item.category === activeTab)
          .map((item) => (
            <MenuCard
              key={item._id}
              item={item}
              onAddToCart={onAddToCart}
            />
          ))}
      </div>
    </section>
  )
}