import "../styles/Modal.css"
import "../styles/Cart.css"
import { MealList } from "../data/MealList"
import AddDish from "./AddDish"
import React, { useEffect, useState } from 'react'

function Cart({ isOpen, onClose, addToMenu, setAddToMenu, setOpenList }) {
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
          )
            : <div className="cart-container">
              <p className="title">Votre panier</p>
              <p className="good-choices">Bon choix ! Voici vos plats :</p>
              {addToMenu.map((dish) => {
                const meal = MealList.find((mealItem) => mealItem.name === dish.name); 
                const zeroQuantity = - dish.quantity; 
                return meal ? (  
                      <div className="dish-div" key={meal.id}>
                        <img src={meal.thumbnail} alt="meal.name" />
                        <p>{meal.name}<span>i</span>x{dish.quantity} </p>
                        <button
                          className="delete-button"
                          onClick={() => AddDish({meal: dish, addToMenu, setAddToMenu, servingsNumber: zeroQuantity} )}
                        >
                        ×
                        </button>
                      </div>
                ) : null
                
                  })
                }
                <div className="show-ingredients">
                <button className="addButton" onClick={() => { onClose(); setOpenList(true); }}>Ingrédients</button>
                </div>
              </div>
          }
        </div>
      </div>
    </>
  );
}

export default Cart


