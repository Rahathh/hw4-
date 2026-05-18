import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <nav id="navbar">
      <a href="#home" className="logo">Central Plate Kitchen</a>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><a href="#home" onClick={close}>Home</a></li>
        <li><a href="#menu" onClick={close}>Menu</a></li>
        <li><a href="#gallery" onClick={close}>Gallery</a></li>
        <li><a href="#cart" onClick={close}>Cart</a></li>
        <li><a href="#about" onClick={close}>About</a></li>
        <li><a href="#contact" onClick={close} className="nav-cta">Contact</a></li>
      </ul>
      <button
        className={`hamburger ${open ? 'open' : ''}`}
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  )
}
