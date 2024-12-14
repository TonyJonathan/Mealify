import "../styles/Selection.css"
import React, { useState } from "react"

function Selection() {
  const [activeSelection, setActiveSelection] = useState("TOUS 🍽️");
  const buttons = ["TOUS 🍽️", "VIANDES 🥩", "POISSON 🐠", "VÉGÉ 🥗"]; 
  const selectOptions = [<option key="0">Tous les plats</option>]; 
  for (let i = 0; i < buttons.length; i++){
    selectOptions.push(<option key={i + 1}>{buttons[i]}</option>)
  }

  return (
    <>
    <div className="selectionList">
    {buttons.map((label, index) => (
      <button
        key={index}
        className={`selectionButtons ${activeSelection === label ? "active" : ""}`}
        onClick={() => setActiveSelection(label)}
      >
        {label}
      </button>
    ))}
      </div>
      <select value={activeSelection} onChange={(e) => setActiveSelection(e.target.value)}>{selectOptions}</select>
      <div className="separationLine"></div>
      </>
);
}


export default Selection