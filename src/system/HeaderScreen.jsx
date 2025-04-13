import Logo from '../components/Logo'
import LeftIcon from '../assets/left-arrow.svg'

import '../system/System.css'

function HeaderScreen({Titulo}) {
  return (
    <div className="header">
      <div className="content-header">
        <button className='button-secondary'><img src={LeftIcon} width={10}/> Voltar ao Site</button>
        <h1>{Titulo}</h1>
        <div className='logo'>
          <a href="URL">
            <Logo />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeaderScreen
