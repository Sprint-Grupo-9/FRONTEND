
import IconButton from '../components/IconButton'
import Textbox from '../components/Textbox'
import UserImage from '../components/UserImage'
import Backend from './Backend'

import UserIcon from '../assets/user-icon.svg'
import ServicesIcon from '../assets/services-icon.svg'
import AppointsIcon from '../assets/appoints-icon.svg'
import PetsIcon from '../assets/pets-icon.svg'


import { useNavigate } from "react-router-dom";

import './System.css'

import HeaderScreen from './HeaderScreen'
import Pet from '../components/Pet'

function PetsScreen() {

  const navigate = useNavigate();
  
  const goToProfile = () => navigate("/");

  const goToServices = () => navigate("/services");

  const goToAppoints = () => navigate("/appointments");

  const goToPets = () => navigate("/pets");

  const goToProfilePet = () => navigate("/profile-pet");

  const goToCalendar = () => navigate("/calendar");

  return (
    <div>
      <HeaderScreen Titulo="Pets" />
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
              <IconButton action={goToAppoints} link={AppointsIcon} text={'Agendamentos'} active={false} />
              <IconButton action={goToPets} link={PetsIcon} text={'Pets'} active={true} />
            </div>
          </div>

          <div className='content'>
            <Pet 
            logo={PetsIcon}
            text="Mike" 
            description="Cachorro" 
            date="15/05"
            time="15h"
            />
            <Pet 
            logo={PetsIcon}
            text="Tom" 
            description="Gato" 
            date="15/05"
            time="15h"
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default PetsScreen
