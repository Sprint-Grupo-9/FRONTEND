import '../../home/Home.css'

function Card({ texto, link }) {
    return (
        <div className="card-service">
            <div className="image-card">
                <div className="individual-image">
                    <img src={link} alt="" />
                </div>
            </div>
            <div className="content-card">
                {texto}
            </div>

            <button className='button-primary'>Agendar</button>
        </div>
    )
}

export default Card
