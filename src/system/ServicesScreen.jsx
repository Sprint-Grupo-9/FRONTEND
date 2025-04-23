import IconButton from '../components/IconButton'
import UserImage from '../components/UserImage'
import UserIcon from '../assets/user-icon.svg'
import ServicesIcon from '../assets/services-icon.svg'
import AppointsIcon from '../assets/appoints-icon.svg'
import PetsIcon from '../assets/pets-icon.svg'
import ExcludeIcon from '../assets/exclude-icon.svg'
import BanhoLogo from '../assets/banho-logo.svg'

import { useState } from 'react'
import { useNavigate } from "react-router-dom"

import './System.css'
import HeaderScreen from './HeaderScreen'
import Service from '../components/Service'
import Subservice from '../components/Subservice'

function ServicesScreen() {
  const navigate = useNavigate()
  const [serviceOpen, setServiceOpen] = useState(false)
  const [userServices, setUserServices] = useState([])
  const [selectedSubservices, setSelectedSubservices] = useState({});

  const goToProfile = () => navigate("/")
  const goToServices = () => navigate("/services")
  const goToAppoints = () => navigate("/appointments")
  const goToPets = () => navigate("/pets")

  const toggleService = () => {
    setServiceOpen(prev => !prev)
  }

  const handleAddService = (serviceName) => {
    if (!userServices.includes(serviceName)) {
      setUserServices(prev => [...prev, serviceName])
    }
  }

  const handleRemoveService = (indexToRemove) => {
    setUserServices(prev => prev.filter((_, i) => i !== indexToRemove))
  }

  const handleToggleSubservice = (name, isSelected) => {
    setSelectedSubservices(prev => ({
      ...prev,
      [name]: isSelected
    }));
  };

  const goToCalendar = () => {
    if (userServices.length === 0) {
      alert("Por favor, adicione pelo menos um serviço antes de continuar.")
      return
    }

    localStorage.setItem('selectedServices', JSON.stringify(userServices))
    localStorage.setItem('selectedServices', JSON.stringify(userServices));
    localStorage.setItem('selectedSubservices', JSON.stringify(selectedSubservices));

    navigate("/calendar")
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
              {userServices.map((service, index) => (
                <button
                  className='button-quinary'
                  key={index}
                  onClick={() => handleRemoveService(index)}
                >
                  {service} <img src={ExcludeIcon} width={16} />
                </button>
              ))}
            </div>

            <Service
              logo={BanhoLogo}
              text="Banho"
              description="Selecione abaixo os subserviços"
              showChevron={true}
              onChevronClick={toggleService}
              isChevronRotated={serviceOpen}
              onAddService={() => handleAddService("Banho")}
            />

            {serviceOpen && (
              <>
                <div className='row-3'>
                  <Subservice
                    text="Hidratação"
                    isSelected={selectedSubservices["Hidratação"] || false}
                    onToggle={(checked) => handleToggleSubservice("Hidratação", checked)}
                  />
                  <Subservice
                    text="Tosa Higiênica"
                    isSelected={selectedSubservices["Tosa Higiênica"] || false}
                    onToggle={(checked) => handleToggleSubservice("Tosa Higiênica", checked)}
                  />
                </div>
                <div className='row-3'>
                  <Subservice
                    text="Desembolo"
                    isSelected={selectedSubservices["Desembolo"] || false}
                    onToggle={(checked) => handleToggleSubservice("Desembolo", checked)}
                  />
                  <Subservice
                    text="Tosa na Máquina"
                    isSelected={selectedSubservices["Tosa na Máquina"] || false}
                    onToggle={(checked) => handleToggleSubservice("Tosa na Máquina", checked)}
                  />
                </div>
                <div className='row-3'>
                  <Subservice
                    text="Botinha"
                    isSelected={selectedSubservices["Botinha"] || false}
                    onToggle={(checked) => handleToggleSubservice("Botinha", checked)}
                  />
                  <Subservice
                    text="Escovação"
                    isSelected={selectedSubservices["Escovação"] || false}
                    onToggle={(checked) => handleToggleSubservice("Escovação", checked)}
                  />
                </div>
                <div className='row-3'>
                  <Subservice
                    text="Tosa Bebê na Máquina"
                    isSelected={selectedSubservices["Tosa Bebê na Máquina"] || false}
                    onToggle={(checked) => handleToggleSubservice("Tosa Bebê na Máquina", checked)}
                  />
                </div>
              </>
            )}

            <Service
              logo={PetsIcon}
              text="Corte de Unha"
              showChevron={false}
              onAddService={() => handleAddService("Corte de Unha")}
            />

            <div className="row">
              <button className='button-primary' onClick={goToCalendar}>Escolher Data</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesScreen
