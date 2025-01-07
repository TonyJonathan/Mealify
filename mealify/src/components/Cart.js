import "../styles/Modal.css"

function Cart({ isOpen, onClose }) {
  if (!isOpen) return null 

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
      </div>
    </>
  )
}

export default Cart