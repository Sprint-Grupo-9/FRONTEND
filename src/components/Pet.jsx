import React from "react"
import PetIcon from "../assets/pet-logo.svg"
import PlusIcon from '../assets/plus-icon.svg'
import ChevronIcon from '../assets/chevron-icon.svg'
import ServicesIcon from '../assets/services-icon.svg'
import PenciIcon from '../assets/pencil-icon.svg'

function Pet({ logo, text, description, time, date }) {
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

      <button className='button-quaternary'>
        <img src={PenciIcon} width={16} /> Editar Dados do Pet
      </button>


    </div>
  )
}

export default Pet
