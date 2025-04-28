import React from "react"


function IconButton({ action, link, text, active}) {

    const buttonClass = active ? "button-navigation-active" : "button-navigation";

    return (
        <button className={buttonClass} onClick={action}>
            <img src={link} width={16}/>
            <h3>{text}</h3>
        </button>
    )
}

export default IconButton

