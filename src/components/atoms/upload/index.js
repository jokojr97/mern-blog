import React from 'react'
import { RegisterBg } from '../../../assets'
import './upload.scss'

const upload = () => {
    return (
        <div className='upload'>
            <img src={RegisterBg} alt="preview" className='preview' />
            <input type="file" />
        </div>
    )
}

export default upload