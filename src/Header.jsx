function Header(props){
    return(
        <div className='header'>
            <div className="link">
                <h1>{props.titulo || "Seviços"}</h1>
            </div>
        </div>
    )
}
export default Header