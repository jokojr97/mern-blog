import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../../components'
import './home.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setDataBlog } from '../../../config/redux/action'

const HomePage = () => {
    const dispatch = useDispatch();
    const { dataBlog } = useSelector(state => state.homeReducer);

    useEffect(() => {
        dispatch(setDataBlog());
    }, [dispatch])
    const history = useNavigate();
    return (
        <div className='home-page-wrapper'>
            <div className='create-wrapper'>
                <Button title="Create Post" onClick={() => history("/create")} />
            </div>
            <Gap height={20} />
            <div className='content-wrapper'>
                {dataBlog.map(blog => {
                    return <BlogItem
                        key={blog._id}
                        title={blog.title}
                        description={blog.description}
                        image={`http://localhost:4000/${blog.image}`}
                        date={blog.createdAt} />
                })}
            </div>
            {/* <p>{name}</p> */}
            <Gap height={20} />
            <div className="pagination">
                <Button title="Previous" />
                <Gap width={20} />
                <Button title="Next" />
            </div>
        </div>
    )
}

export default HomePage