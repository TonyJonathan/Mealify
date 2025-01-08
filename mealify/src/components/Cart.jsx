import "../styles/Modal.css"
import "../styles/Cart.css"
import React from 'react'

function Cart({ isOpen, onClose, addToMenu, setAddToMenu }) {
  if (!isOpen) return null 
  console.log(addToMenu)
  return (
    <>
      <div className="cart-overlay" onClick={onClose}>
        <div className="cart-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
          
        </div>
      </div>
    </>
  )
}

export default Cart