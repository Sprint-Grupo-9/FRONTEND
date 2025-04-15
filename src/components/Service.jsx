import React from "react"
import imageLink from "../assets/pet-logo.svg"
import PlusIcon from '../assets/plus-icon.svg'

function Service({ link, text, description}) {

    return (

        <div className="card-service">
            <div className="img-background">
                <img src={imageLink} alt="Logo Pet Columbia" width={20} />
            </div>
            <div className="content-card">
                <h2>{text}</h2>
                <p>{description}</p>
            </div>
            <button className='button-quaternary'><img src={PlusIcon} width={16}/> Adicionar Serviço</button>
        </div>

    )
}

export default Service

