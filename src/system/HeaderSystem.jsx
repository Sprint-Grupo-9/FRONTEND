import Logo from '../components/Logo'

import '../system/System.css'

function HeaderSystem() {
  return (
    <div className="header">
      <div className="content-header">
        <button className='button-secondary'>Voltar ao Site</button>
        <h1>Perfil do Usuário</h1>
        <div className='logo'>
          <a href="URL">
            <Logo />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeaderSystem
