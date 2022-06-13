import React from 'react'
import { useParams } from 'react-router-dom'

const DetailBlog = () => {
    const { postId } = useParams();
    return (
        <div>Ini adalah halaman Detail Blog postingan ke {postId}</div>
    )
}

export default DetailBlog