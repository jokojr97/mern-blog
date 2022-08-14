import React from 'react'
import { BlogItem, Button, Gap } from '../../../components'
import './home.scss'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const history = useNavigate();
    return (
        <div className='home-page-wrapper'>
            <div className='create-wrapper'>
                <Button title="Create Post" onClick={() => history("/create")} />
            </div>
            <Gap height={20} />
            <div className='content-wrapper'>
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
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