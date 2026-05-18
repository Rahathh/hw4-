import { useState } from 'react'

export default function Cart({ cart, onUpdateQuantity, onRemove, onClear }) {
  const [ordered, setOrdered] = useState(false)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

async function handlePlaceOrder() {
  if (cart.length === 0) return

  const orderData = {
    items: cart,
    total: totalPrice,
  }

  try {
    const response = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })

    const data = await response.json()

    console.log(data)

    setOrdered(true)
    onClear()
  } catch (error) {
    console.log(error)
    alert("Failed to place order")
  }
}

  return (
    <section id="cart">
      <span className="section-label">Your Order</span>
      <h2 className="section-title">
        Shopping Cart <span className="cart-count-badge">{totalItems}</span>
      </h2>
      <p className="section-sub">Review your selected items, update quantities, remove dishes, or clear the cart anytime.</p>
      <div className="divider"></div>

      {ordered ? (
        <div className="order-success">
          <h3>🎉 Order Placed!</h3>
          <p>Thank you! Your order has been received. We'll have it ready shortly.</p>
          <button className="btn-primary-custom" onClick={() => setOrdered(false)}>
            Order Again
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-box">
            <div className="cart-items">
              {cart.length === 0 ? (
                <div className="cart-empty">
                  Your cart is empty right now. Add dishes from the menu and they will appear here instantly.
                </div>
              ) : (
                cart.map(item => (
                  <div className="cart-item" key={item.name}>
                    <div>
                      <div className="cart-item-name">{item.name}</div>
                      <div className="cart-item-meta">
                        ${item.price.toFixed(2)} each · Subtotal ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                    <div className="qty-controls">
                      <button className="qty-btn" onClick={() => onUpdateQuantity(item.name, -1)}>−</button>
                      <strong>{item.quantity}</strong>
                      <button className="qty-btn" onClick={() => onUpdateQuantity(item.name, 1)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => onRemove(item.name)}>Remove</button>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="cart-summary" style={{ border: "5px solid red" }}>
            <span className="section-label" style={{ marginBottom: '0.8rem' }}>Summary</span>
            <div className="cart-summary-row">
              <span>Items</span>
              <strong>{totalItems}</strong>
            </div>
            <div className="cart-summary-row">
              <span>Estimated Total</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
            <div className="cart-total-price">${totalPrice.toFixed(2)}</div>
            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
            <button className="clear-cart-btn" style={{ marginTop: '0.8rem' }} onClick={onClear}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
