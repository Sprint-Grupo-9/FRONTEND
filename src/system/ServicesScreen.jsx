
import IconButton from '../components/IconButton'
import Textbox from '../components/Textbox'
import UserImage from '../components/UserImage'
import Backend from './Backend'

import UserIcon from '../assets/user-icon.svg'
import ServicesIcon from '../assets/services-icon.svg'
import AppointsIcon from '../assets/appoints-icon.svg'
import PetsIcon from '../assets/pets-icon.svg'
import PenciIcon from '../assets/pencil-icon.svg'

import './System.css'
import HeaderScreen from './HeaderScreen'

function ServicesScreen() {

  return (
    <div>
      <HeaderScreen Titulo="Serviços"/>
      <div className="user-screen">
      <div className='total-content'>
        <div className="navigation-content">
          <div className="user-profile">
            <UserImage />
            <h2>Matheus</h2>
          </div>
          <div className="navigation-buttons">
            <IconButton link={UserIcon} text={'Perfil'} active={false} />
            <IconButton link={ServicesIcon} text={'Serviços'} active={true} />
            <IconButton link={AppointsIcon} text={'Agendamentos'} active={false} />
            <IconButton link={PetsIcon} text={'Pets'} active={false} />
          </div>
        </div>

        <div className='content'>

        </div>
      </div>
    </div>
    </div>
    
  )
}

export default ServicesScreen
