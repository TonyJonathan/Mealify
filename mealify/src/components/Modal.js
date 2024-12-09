import React from "react";
import "../styles/Modal.css"; // Styles pour le modal

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Ne pas afficher si `isOpen` est faux

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        {children} {/* Contenu du modal */}
      </div>
    </div>
  );
}

export default Modal;