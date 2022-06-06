import React from "react";
import './input.scss'

const Input = ({ label, ...rest }) => {
    return (
        <div className="input-wraper">
            <p className="label">{label}</p>
            <input {...rest} className="input" />
        </div>
    )
}

export default Input