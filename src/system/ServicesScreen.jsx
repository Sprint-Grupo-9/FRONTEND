
import IconButton from '../components/IconButton'
import Textbox from '../components/Textbox'
import UserImage from '../components/UserImage'
import Backend from './Backend'

import UserIcon from '../assets/user-icon.svg'
import ServicesIcon from '../assets/services-icon.svg'
import AppointsIcon from '../assets/appoints-icon.svg'
import PetsIcon from '../assets/pets-icon.svg'
import PenciIcon from '../assets/pencil-icon.svg'
import ExcludeIcon from '../assets/exclude-icon.svg'

import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import './System.css'
import HeaderScreen from './HeaderScreen'
import Service from '../components/Service'
import Subservice from '../components/Subservice'
import Card from '../components/Card'

function ServicesScreen() {

  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/");
  };

  const goToServices = () => {
    navigate("/services");
  };

  const goToAppoints = () => {
    navigate("/appointments");
  };

  const goToPets = () => {
    navigate("/pets");
  };

  const [serviceOpen, setServiceOpen] = useState(false)

  const toggleService = () => {
    setServiceOpen(prev => !prev)
  }

  return (
    <div>
      <HeaderScreen Titulo="Serviços" />
      <div className="user-screen">
        <div className='total-content'>
          <div className="navigation-content">
            <div className="user-profile">
              <UserImage />
              <h2>Matheus</h2>
            </div>
            <div className="navigation-buttons">
              <IconButton action={goToProfile} link={UserIcon} text={'Perfil'} active={false} />
              <IconButton action={goToServices} link={ServicesIcon} text={'Serviços'} active={true} />
              <IconButton action={goToAppoints} link={AppointsIcon} text={'Agendamentos'} active={false} />
              <IconButton action={goToPets} link={PetsIcon} text={'Pets'} active={false} />
            </div>
          </div>

          <div className='content'>
            <div className="row-button">
              <button className='button-quinary'> Serviço 1 <img src={ExcludeIcon} width={16} /> </button>
              <button className='button-quinary'> Serviço 2 <img src={ExcludeIcon} width={16} /> </button>
              <button className='button-quinary'> Serviço 3 <img src={ExcludeIcon} width={16} /> </button>
            </div>
            

            <Service
              text="Banho"
              description="Selecione abaixo os subserviços"
              showChevron={true}
              onChevronClick={toggleService}
              isChevronRotated={serviceOpen}
            />

            {serviceOpen && (
              <>
              <div className='row-3'>
                <Subservice text="Hidratação" />
                <Subservice text="Tosa Higiênica" />
              </div>
              <div className='row-3'>
                <Subservice text="Desembolo" />
                <Subservice text="Tosa na Máquina" />
              </div>
              <div className='row-3'>
                <Subservice text="Botinha" />
                <Subservice text="Escovação" />
              </div>
              <div className='row-3'>
                <Subservice text="Tosa Bebê na Máquina" />
                
              </div>
              </>
              
            )}
            <Service
              text="Banho e Tosa"
              description="Descrição do Serviço"
              showChevron={false}
            />
            <div className="row">
              <button className='button-primary'> Escolher Data </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ServicesScreen
