import "../styles/Selection.css"
import React from "react"

function Selection({ activeSelection, setActiveSelection }) {
  
  const buttons = ["TOUS 🍽️", "VIANDES 🥩", "POISSON 🐠", "VÉGÉ 🥗"]; 
  const selectOptions = []; 
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
      <select
        value={activeSelection}
        onChange={(e) => setActiveSelection(e.target.value)}
        className="select"
      >
        {selectOptions}
      </select>
      <div className="separationLine"></div>
      </>
);
}


export default Selection