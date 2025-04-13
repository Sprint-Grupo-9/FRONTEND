import '../home/Home.css'

function Textbox({ label, placeholder, value, size}) {

    const sizeClass = size ? `textbox-${size}` : "textbox-1";

    return (
        <div className={sizeClass}>
            <div class="input-group">
                <label>{label}</label>
                <input type="text" id={label} placeholder={placeholder} value={value}/>
            </div>
        </div>
    )
}

export default Textbox
