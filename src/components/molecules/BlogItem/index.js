import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogItem.scss'

const BlogItem = () => {
    return (
        <div className='blog-item'>
            <img src={RegisterBg} alt="Post" className='image-thumbnail' />
            <div className='content-detail'>
                <p className='title'>Title Post</p>
                <p className='author'>Author - Date Post</p>
                <p className='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget massa imperdiet, pharetra velit in, tempor neque. Suspendisse velit elit, porta ac ligula sit amet, pellentesque aliquet neque. In vulputate sapien metus, sit amet auctor ex finibus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse tristique pretium suscipit. Sed iaculis orci vel massa rutrum placerat.</p>
            </div>
        </div>
    )
}

export default BlogItem