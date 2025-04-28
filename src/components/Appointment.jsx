import React from "react"
import PetIcon from "../assets/pet-logo.svg"
import PlusIcon from '../assets/plus-icon.svg'
import ChevronIcon from '../assets/chevron-icon.svg'
import ServicesIcon from '../assets/services-icon.svg'
import PenciIcon from '../assets/pencil-icon.svg'


function Appointment({ logo, text, description, time, date}) {
  return (
    <div className="card-service">
      <div className="img-background">
        <img
          src={logo}
          alt="Logo Pet Columbia"
          width={20}
        />
      </div>

      <div className="content-card">
        <h2>{text}</h2>
        <p>{description}</p>
      </div>
      <div className="date">
        <h3>{date}</h3>
      </div>
      <div className="date">
        <h3>{time}</h3>
      </div>
      
      
    </div>
  )
}

export default Appointment
