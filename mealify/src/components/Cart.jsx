import "../styles/Modal.css"
import "../styles/Cart.css"
import React from 'react'

function Cart({ isOpen, onClose, addToMenu, setAddToMenu }) {
  if (!isOpen) return null 
  console.log(addToMenu.length)
  return (
    <>
      <div className="cart-overlay" onClick={onClose}>
        <div className="cart-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
          {addToMenu.length === 0 ? (
            <div className="empty-cart">
              <p>Votre panier est vide</p>
              <button>Retour à la sélection</button>
            </div>
          ): null}
          
        </div>
      </div>
    </>
  )
}

export default Cart