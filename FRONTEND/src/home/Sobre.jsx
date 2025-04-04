import './Home.css'
import React from 'react';
import Card from './components/CardSobre'

function Sobre() {

  return (

    <section className='sobre-container'>

      {/* <div className='tab-about'> */}

        <div className='about-content'>

          <p className='descricao'>
            text
          </p>

          <p className='endereco'>
            <span class="text-endereco">Endereço: <br /></span>
            <span class="text-endereco">Rua Columbia 123, Vila Boa<br />São Paulo, SP </span>
          </p>

          <div className='card-sobre'>
            <Card link={"src/assets/mask-group-5.png"} />
          </div>

          {/* <div className='about-image'><img className='mask-group' src="{imageLinkPet}" alt="" /></div> */}

          <div className='about-title'>
            <div className='text-sobre'><h3>Sobre Nós</h3></div>
            <img className='pata-sobre' src="{imageLinkPata}" alt="" />
          </div>

        </div>
      {/* </div> */}
    </section>
  )


}

export default Sobre;