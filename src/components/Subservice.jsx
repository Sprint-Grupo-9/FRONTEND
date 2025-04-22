import React from "react";
import SwitchButton from "./SwitchButton";

function Subservice({ text, isSelected, onToggle }) {
  return (
    <div className="card-service-2">
      <div className="content-card">
        <h2>{text}</h2>
      </div>
      <SwitchButton active={isSelected} onClick={() => onToggle(!isSelected)} />
    </div>
  );
}

export default Subservice;
