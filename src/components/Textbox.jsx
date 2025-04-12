import '../home/Home.css'

function Textbox({ label, placeholder, value }) {
    return (
        <div className='textbox'>
            <div class="input-group">
                <label for="nome">{label}</label>
                <input type="text" id={label} placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Textbox
