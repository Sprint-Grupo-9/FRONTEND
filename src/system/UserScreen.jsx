
import Textbox from '../components/Textbox'
import UserImage from '../components/UserImage'
import './System.css'


function UserScreen() {
  return (
    <div className="user-screen">
      <div className='total-content'>
        <div className="navigation-content">
          <div className="user-profile">
            <UserImage />
            <h2>Perfil do Usuário</h2>
          </div>
          <div className="navigation-buttons">
            <button className='button-navigation'>Perfil</button>
            <button className='button-navigation'>Serviços</button>
            <button className='button-navigation'>Agendamentos</button>
            <button className='button-navigation'>Pets</button>
          </div>
        </div>
        <div className="content">
          <Textbox label='Nome' placeholder='' value=''></Textbox>
        </div>
      </div>
    </div>
  )
}

export default UserScreen
