import './Home.css'
import React from 'react';
import Card from './components/CardSobre'

function Sobre() {

  return (

    <section className='sobre-container'>

      

        <div className='about-content'>

          <p className='descricao'>
          Há 9 anos no mercado, o Pet Shop Columbia se dedica ao cuidado, bem-estar e felicidade dos pets e de seus tutores. Com uma equipe apaixonada por animais, oferecemos atendimento personalizado, produtos de qualidade e serviços especializados que fazem a diferença no dia a dia dos nossos clientes. Nossa experiência e compromisso consolidaram nossa reputação como referência em carinho e confiança.
          </p>

          <p className='endereco'>
            <span class="text-endereco">Endereço: <br /></span>
            <span class="text-endereco">Rua Columbia 971, Parque das Nações<br />Santo Andé, SP </span>
          </p>

          <div className='card-sobre'>
            <Card link={"src/assets/petFoto.webp"} />
          </div>

        

          <div className='about-title'>
            <div className='text-sobre'><h3>Sobre Nós</h3></div>
            <img className='pata-sobre' src="src/assets/pata-sobre.png" alt="" />
          </div>

        </div>
      
    </section>
  )


}

export default Sobre;