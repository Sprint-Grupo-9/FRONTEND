import './Home.css'

function Footer() {
    return (
        <section className='footer-content'>

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
                <div className="text-contact">11 98765-4321</div>
                <div className='mail-icon'></div>
              </div>
            </div>
            <div className="navigation-links">
              <div className="contato"><div class="text-wrapper-21">Contato</div></div>
              <div className="equipe"><div class="text-wrapper-21">Equipe</div></div>
              <div className="servios"><div class="text-wrapper-21">Serviços</div></div>
              <div className="sobre-ns"><div class="text-wrapper-21">Sobre Nós</div></div>
            </div>
        </section>
    )
}

export default Footer