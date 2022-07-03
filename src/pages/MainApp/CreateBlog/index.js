import React from 'react'
import { Input, Button, Upload, TextArea, Gap } from '../../../components'
import './createblog.scss'

const CreateBlog = () => {
    return (
        <div className='create-blog'>
            <center><h1>Create New Blog Post</h1></center>
            <Input label="Post Title" />
            <p>Upload Image</p>
            <Upload />
            <TextArea />
            <Gap height={10} />
            <div className='button-action' >
                <Button title="save" />
            </div>
        </div>


    )
}

export default CreateBlog