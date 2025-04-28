
import IconButton from '../components/IconButton'
import Textbox from '../components/Textbox'
import UserImage from '../components/UserImage'
import Backend from './Backend'

import UserIcon from '../assets/user-icon.svg'
import ServicesIcon from '../assets/services-icon.svg'
import AppointsIcon from '../assets/appoints-icon.svg'
import PetsIcon from '../assets/pets-icon.svg'
import AppointIcon from '../assets/appoints-icon.svg'
import PenciIcon from '../assets/pencil-icon.svg'

import { useNavigate } from "react-router-dom";

import HeaderScreen from './HeaderScreen'


import './System.css'
import Appointment from '../components/Appointment'

function AppointsScreen() {

    const navigate = useNavigate();
  
    const goToProfile = () => navigate("/");

    const goToServices = () => navigate("/services");
  
    const goToAppoints = () => navigate("/appointments");
  
    const goToPets = () => navigate("/pets");
  
    const goToProfilePet = () => navigate("/profile-pet");
  
    const goToCalendar = () => navigate("/calendar");

  return (
    <div>
      <HeaderScreen Titulo="Agendamentos" />
      <div className="user-screen">
      <div className='total-content'>
        <div className="navigation-content">
          <div className="user-profile">
            <UserImage />
            <h2>Matheus</h2>
          </div>
          <div className="navigation-buttons">
            <IconButton action={goToProfile} link={UserIcon} text={'Perfil'} active={false} />
            <IconButton action={goToServices} link={ServicesIcon} text={'Serviços'} active={false} />
            <IconButton action={goToAppoints} link={AppointsIcon} text={'Agendamentos'} active={true} />
            <IconButton action={goToPets} link={PetsIcon} text={'Pets'} active={false} />
          </div>
        </div>

        <div className='content'>
          <div className="top">
            <p>Data</p>
            <p>Horário</p>
          </div>
            <Appointment 
            logo={AppointIcon} 
            text="Banho e Tosa" 
            description="Escovação, Desembolo" 
            date="15/05"
            time="15h"
            />
            <Appointment 
            logo={AppointIcon} 
            text="Corte de Unha" 
            date="12/05"
            time="10h"
            />
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default AppointsScreen
