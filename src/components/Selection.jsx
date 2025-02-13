import "../styles/Selection.css";
import React from "react";

function Selection({ activeSelection, setActiveSelection, selectionStates }) {
  const buttons = selectionStates;
  console.log(selectionStates);
  const selectOptions = [];
  for (let i = 0; i < buttons.length; i++) {
    selectOptions.push(<option key={i + 1}>{buttons[i]}</option>);
  }

  return (
    <>
      <div className="selectionList">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`selectionButtons ${activeSelection.value === button.value ? "active" : ""}`}
            onClick={() => setActiveSelection(button)}
          >
            {button.label}
          </button>
        ))}
      </div>
      <select
        value={JSON.stringify(activeSelection)}
        onChange={(e) => setActiveSelection(JSON.parse(e.target.value))}
        className="select"
      >
        {selectOptions.label}
      </select>
      <div className="separationLine"></div>
    </>
  );
}

export default Selection;
