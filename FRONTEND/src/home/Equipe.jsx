import './Home.css'
import CardTime from './components/CardTime'


function Equipe() {

    return (
        <section className='time-container'>
            <div className="time">

                <div className="time-titulo">
                    <h3 className='text-time'>Equipe</h3>
                </div>
                <div className="cards-equipe">
                    <CardTime texto="Banho e Tosa" link="src/assets/banho-logo.svg" />
                    <CardTime texto="Taxi Dog" link="src/assets/taxi-logo.svg" />
                    <CardTime texto="Veterinário" link="src/assets/pet-logo.svg" />
                </div>

            </div>
        </section>


    )
}

export default Equipe