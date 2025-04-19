import React from "react"

function SwitchButton({ active, onClick }) {
  return (
    <div 
      className={`switch-button ${active ? 'active' : ''}`} 
      onClick={onClick}
    >
      <div className="switch-handle" />
    </div>
  )
}

export default SwitchButton
