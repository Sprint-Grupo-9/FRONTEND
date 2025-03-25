function Card(props){
    return(
        <div className='card'>
            <h1>{props.titulo || "Default"}</h1>
            <p>{props.paragrafo}</p>
        </div>
    )
}
export default Card