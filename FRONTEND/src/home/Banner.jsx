import './Home.css'

function Banner() {
    return (
        <div className="banner">
        ° 
           <div className="content-banner">
                <div className="titulo-banner">
                    <h2>TUDO PARA</h2>
                    <h1>SEU PET</h1>
                    <p>Proporcione um cuidado especial para seu melhor amigo.</p>
                </div>
                <div className="buttons">
                    <button className='button-primary'>Agendar Serviços</button>
                    <button className='button-tertiary'>Meus Agendamentos</button>
                </div>
            </div>
        </div>
    )
}

export default Banner 