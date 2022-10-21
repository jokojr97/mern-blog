import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../../components'
import './home.scss'

import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const HomePage = () => {
    const [dataBlog, setDataBlog] = useState([]);
    const dispacth = useDispatch();

    // const { dataBlog, name } = useSelector(state => state);
    const stateGlobal = useSelector(state => state.homeReducer);

    console.log("dataBlog Global", stateGlobal);
    useEffect(() => {
        setTimeout(() => {
            // dispacth({ type: 'UPDATE_NAME' })
        }, 3000);
        Axios.get('http://localhost:4000/v1/blog/posts?page=1&perPage=5w')
            .then(result => {
                console.log('data API: ', result);
                const responseAPI = result.data;
                setDataBlog(responseAPI.data);
                // dispacth({ type: 'UPDATE_DATA_BLOG', payload: responseAPI.data })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
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