import "../styles/Selection.css";
import React from "react";
import { useSelection, selectionStates } from "./contexts/SelectionContext";

function Selection() {
  const { activeSelection, setActiveSelection } = useSelection();
  const buttons = selectionStates;
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
        {buttons.map((button, index) => (
          <option key={index} value={JSON.stringify(button)}>
            {button.label}
          </option>
        ))}
      </select>
      <div className="separationLine"></div>
    </>
  );
}

export default Selection;
