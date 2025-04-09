import Logo from './components/Logo'

import './Home.css'

function Header() {
  return (
    <div className="header">
      <div className="content-header">
        <div className='logo'>
          <a href="URL">
            <Logo />
          </a>
        </div>
        <div className='links'>
          <a href="URL">Serviços</a>
          <a href="URL">Sobre Nós</a>
          <a href="URL">Equipe</a>
          <a href="URL">Contato</a>
        </div>
        <div className='buttons'>
          <button className='button-primary'>Cadastre-se</button>
          <button className='button-secondary'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Header
