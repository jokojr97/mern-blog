import React from 'react'
import { useNavigate } from 'react-router-dom'
import './header.scss'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <p className='logo-apps' onClick={() => navigate("/")}>MERN_Blog</p>
            <p className='menu-item'>Logout</p>
        </div>
    )
}

export default Header