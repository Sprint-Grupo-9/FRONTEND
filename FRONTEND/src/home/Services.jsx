import './Home.css'
import Card from './components/Card'

function Services() {
    return (
        <>
            <div id='services'>
                <div className='rectangle'></div>
                <img className="tab-services" src="src/assets/tab-services.png" />

                <div className='container-service'>

                    <div className="services">
                        <div className="titulo-services">
                            <h3>Serviços</h3>
                            <img class="pata-services" src="src/assets/pata-services.png" />
                        </div>
                        <div className="cards">
                            <Card texto="Banho e Tosa" link="src/assets/banho-logo.svg" />
                            <Card texto="Taxi Dog" link="src/assets/taxi-logo.svg" />
                            <Card texto="Veterinário" link="src/assets/pet-logo.svg" />

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Services