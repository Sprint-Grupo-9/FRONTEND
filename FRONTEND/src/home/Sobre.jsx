import './Home.css'
import React from 'react';

// const Sobre = () => {
//   return (
//     <div className="tab-about">
//       <div className="about-content-wrapper">
//         <div className="about-content">
//           <h2 className="about-title">
//             <span className="text-wrapper-12">Sobre Nós</span>
//           </h2>
//           <p className="about-description">
//             Somos especializados em cuidados e transporte para seu pet.
//           </p>
//           <p className="about-address">Endereço: Rua Exemplo, 123 - Cidade</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sobre;


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

          <div className='about-image'><img className='mask-group' src="{imageLinkPet}" alt="" /></div>

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