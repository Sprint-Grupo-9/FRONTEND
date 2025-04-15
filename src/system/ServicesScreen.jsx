
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


import { useNavigate } from "react-router-dom";

import './System.css'
import HeaderScreen from './HeaderScreen'
import Service from '../components/Service'
import ServiceTop from '../components/ServiceTop'
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
              text="Banho e Tosa" 
              description="Descrição do Serviço"
            />
            <Service 
              text="Banho e Tosa" 
              description="Descrição do Serviço"
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default ServicesScreen
