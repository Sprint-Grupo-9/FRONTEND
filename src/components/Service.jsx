import React from "react"
import imageLink from "../assets/pet-logo.svg"
import PlusIcon from '../assets/plus-icon.svg'
import ChevronIcon from '../assets/chevron-icon.svg'

function Service({ text, description, showChevron = true, onChevronClick, isChevronRotated = false }) {
  return (
    <div className="card-service">
      {showChevron && (
        <img
          src={ChevronIcon}
          alt="Chevron Icon"
          width={40}
          className={`red-filter chevron ${isChevronRotated ? 'rotate' : ''}`}
          onClick={onChevronClick}
        />
      )}

      <div className="img-background">
        <img
          src={imageLink}
          alt="Logo Pet Columbia"
          width={20}
        />
      </div>

      <div className="content-card">
        <h2>{text}</h2>
        <p>{description}</p>
      </div>

      <button className='button-quaternary'>
        <img src={PlusIcon} width={16} /> Adicionar Serviço
      </button>
    </div>
  )
}

export default Service
