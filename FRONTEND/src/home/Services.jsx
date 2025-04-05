import './Home.css'
import Card from './components/Card'

function Services() {
    return (
        

                <div className="services">

                    

                    <div className="titulo-services">
                        <h3>Serviços</h3>
                    </div>
                    <div className="cards">
                        <Card texto="Banho e Tosa" link="src/assets/banho-logo.svg" />
                        <Card texto="Taxi Dog" link="src/assets/taxi-logo.svg" />
                        <Card texto="Veterinário" link="src/assets/pet-logo.svg" />
                    </div>
                    
                </div>
           
    )
}

export default Services