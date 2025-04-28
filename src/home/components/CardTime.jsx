import '../../home/Home.css'

function CardTime ({ texto, link }) {
    return (
        <div className="card-time">
            <div className="mask-group-wrapper">
                <div className="mask-group-2">
                    <img src={link} alt="" />
                </div>
            </div>
            <div className="text-card-time">
                {texto}
            </div>

        </div>
    )
}

{/* <div class="overlap-9">
              <div class="text-wrapper-13">Dora</div>
              <div class="mask-group-wrapper"><img class="mask-group-2" src="img/mask-group-3.png" /></div>
            </div> */}

export default CardTime;