import './Home.css'
import Logo from './components/Logo'

function Footer() {
  return (
    
    <div id='footer'>

      <div className='footer-content'>

        <div className='contact-content'>
          <div className="mail">
            <div className="text-contact">columbia.pet@email.com</div>
            <div className='mail-icon'></div>
          </div>
          <div className="insta">
            <div className="text-contact">@columbia.pet</div>
            <div className='mail-icon'></div>
          </div>
          <div className="tell">
            <div className="text-contact">(11) 4975-8092</div>
            <div className='mail-icon'></div>
          </div>
        </div>
        <div className="navigation-links">
          <div className="contato"><div class="text-links">Contato</div></div>
          <div className="equipe"><div class="text-links">Equipe</div></div>
          <div className="servios"><div class="text-links">Serviços</div></div>
          <div className="sobre-ns"><div class="text-links">Sobre Nós</div></div>
        </div>
        <div className='logo-columbia-2'>
          <Logo />
        </div>

      </div>
    </div>
  
  )
}

export default Footer