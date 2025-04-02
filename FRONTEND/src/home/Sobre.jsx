import './Home.css'
import Card from './components/Card'
import imageLinkFundo from '../../../FRONTEND/src/assets/tab-about.png'
import imageLinkPet from '../../../FRONTEND/src/assets/tab-about.png'
import imageLinkPata from '../../../FRONTEND/src/assets/tab-about.png'
function Sobre(){

    <img src="{imageLinkFundo}" alt="tab-about" />

    return (

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
                <div className='text-sobre'>Sobre Nós</div>
                <img className='pata-sobre' src="{imageLinkPata}" alt="" />
            </div>
            
        </div>
    )

   
}