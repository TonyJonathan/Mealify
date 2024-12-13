import "../styles/Selection.css"
import React, { useState } from "react"

function Selection() {
  const [activeButton, setActiveButton] = useState(null);
  const buttons = ["VIANDES 🥩", "POISSON 🐠", "VÉGÉ 🥗", "< 660KCAL 📉"]; 
  return (
    <>
    <div className="selectionList">
    {buttons.map((label, index) => (
      <button
        key={index}
        className={`selection ${activeButton === index ? "active" : ""}`}
        onClick={() => setActiveButton(index)}
        onBlur={() => setActiveButton(null)}
      >
        {label}
      </button>
    ))}
    </div>
      <div className="separationLine"></div>
      </>
);
}


export default Selection