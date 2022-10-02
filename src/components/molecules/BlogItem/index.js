import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterBg } from '../../../assets'
import './blogItem.scss'

const BlogItem = (props) => {
    const navigate = useNavigate()
    const { _id, image, title, description, date } = props
    return (
        <div className='blog-item'>
            <img src={image} onClick={() => navigate(`/detail/${_id}`)} alt="Post" className='image-thumbnail' />
            <div className='content-detail'>
                <p className='title' onClick={() => navigate("/detail/1")}>{title}</p>
                <p className='author'>Author - {date}</p>
                <p className='body'>{description}</p>
            </div>
        </div>
    )
}

export default BlogItem