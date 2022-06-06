import React from 'react'
import './link.scss'

const Link = ({ title, onClick }) => {
    return (
        <div>
            <p onClick={onClick} className="link">{title}</p>
        </div>
    )
}

export default Link