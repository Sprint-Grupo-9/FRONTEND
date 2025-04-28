import '../home/Home.css'

function Textbox({ label, placeholder, value, name, onChange, size, disabled }) {

    const sizeClass = size ? `textbox-${size}` : "textbox-1";

    return (
        <div className={sizeClass}>
            <div className="input-group">
                <label>{label}</label>
                <input
                    type="text"
                    id={label}
                    name={name}
                    placeholder={placeholder}
                    value={value || ''}
                    onChange={onChange}
                    disabled={disabled}
                />
            </div>
        </div>
    )
}

export default Textbox;
