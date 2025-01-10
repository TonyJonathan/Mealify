import "../styles/Modal.css"
import "../styles/Cart.css"
import React, { useEffect, useState } from 'react'

function Cart({ isOpen, onClose, addToMenu }) {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowOverlay(true), 1); 
    } else {
      setShowOverlay(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`cart-overlay ${showOverlay ? "open" : ""}`}
        onClick={onClose}
      >
        <div className="cart-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
          {addToMenu.length === 0 ? (
            <div className="empty-cart">
              <p>Votre panier est vide</p>
              <button onClick={onClose}>Retour à la sélection</button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Cart