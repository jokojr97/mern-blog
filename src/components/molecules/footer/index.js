import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ICDiscord, ICFacebook, ICGithub, ICInstagram, ICTelegram, ICTwitter, Logo } from '../../../assets'
import './footer.scss'

const Icon = ({ img }) => {
    return (
        <div className='icon-wrapper' >
            <img src={img} alt='icon' className='icon-medsos' />
        </div>
    )
}

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='footer'>
                <div>
                    <img src={Logo} alt="logo" className='logo' onClick={() => navigate("/")} />

                </div>
                <div className='social-wrapper'>
                    <Icon img={ICFacebook} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTelegram} />
                    <Icon img={ICDiscord} />
                    <Icon img={ICGithub} />
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer