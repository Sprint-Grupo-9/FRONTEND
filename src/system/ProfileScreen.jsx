
import IconButton from '../components/IconButton'
import Textbox from '../components/Textbox'
import UserImage from '../components/UserImage'
import Backend from './Backend'

import UserIcon from '../assets/user-icon.svg'
import ServicesIcon from '../assets/services-icon.svg'
import AppointsIcon from '../assets/appoints-icon.svg'
import PetsIcon from '../assets/pets-icon.svg'
import PenciIcon from '../assets/pencil-icon.svg'

import { useNavigate } from "react-router-dom";


import './System.css'
import HeaderScreen from './HeaderScreen'

function ProfileScreen() {

  const navigate = useNavigate();

  const goToServices = () => {
    navigate("/services");
  };

  return (
    <div>
      <HeaderScreen Titulo="Perfil do Usuário"/>
      <div className="user-screen">
      <div className='total-content'>
        <div className="navigation-content">
          <div className="user-profile">
            <UserImage />
            <h2>Matheus</h2>
          </div>
          <div className="navigation-buttons">
            <IconButton link={UserIcon} text={'Perfil'} active={true} />
            <IconButton action={goToServices} link={ServicesIcon} text={'Serviços'} active={false} />
            <IconButton link={AppointsIcon} text={'Agendamentos'} active={false} />
            <IconButton link={PetsIcon} text={'Pets'} active={false} />
          </div>
        </div>

        <div className='content'>

          <div className="row-button">
            <button className='button-primary'> <img src={PenciIcon} width={20}/> Editar Dados </button>
          </div>
          <div className="row">
            <Textbox label='Nome' placeholder='Matheus' value='Matheus'></Textbox>
            <Textbox label='CPF' placeholder='440.824.488-02' value=''></Textbox>
          </div>

          <div className="row">
            <Textbox label='Email' placeholder='matheus@gmail.com' value=''></Textbox>
            <Textbox label='Telefone' placeholder='(11) 94023-4507' value=''></Textbox>
          </div>

          <div className="row">
            <Textbox label='CEP' placeholder='01504-000' value='' size="2"></Textbox>
            <Textbox label='Número' placeholder='266' value='' size="3"></Textbox>
            <Textbox label='Complemento' placeholder='Ap. 51' value=''></Textbox>
          </div>

          <div className="row">
            <Textbox label='Logradouro' placeholder='Rua Vergueiro' value=''></Textbox>
            <Textbox label='Bairro' placeholder='Liberdade' value=''></Textbox>
          </div>

          <div className="row">
            <Textbox label='Senha' placeholder='***********' value=''></Textbox>
            <Textbox label='Confirmar Senha' placeholder='***********' value=''></Textbox>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default ProfileScreen
