import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [cart, setCart] = useState([])

  function addToCart(item) {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name)
      if (existing) {
        return prev.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { name: item.name, price: item.price, quantity: 1 }]
    })
  }

  function updateQuantity(name, change) {
    setCart(prev => {
      const updated = prev.map(i => i.name === name ? { ...i, quantity: i.quantity + change } : i)
      return updated.filter(i => i.quantity > 0)
    })
  }

  function removeFromCart(name) {
    setCart(prev => prev.filter(i => i.name !== name))
  }

  function clearCart() {
    setCart([])
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Menu onAddToCart={addToCart} />
      <Cart
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onClear={clearCart}
      />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
