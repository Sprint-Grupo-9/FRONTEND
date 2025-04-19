import React, { useState } from "react"
import imageLink from "../assets/pet-logo.svg"
import PlusIcon from '../assets/plus-icon.svg'
import SwitchButton from "./SwitchButton"

function Subservice({ text }) {
  const [isActive, setIsActive] = useState(true)

  const toggleSwitch = () => {
    setIsActive(prev => !prev)
  }

  return (
    <div className="card-service-2">
      <div className="content-card">
        <h2>{text}</h2>
      </div>
      <SwitchButton active={isActive} onClick={toggleSwitch} />
    </div>
  )
}

export default Subservice
