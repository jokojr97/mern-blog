import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RegisterBg } from '../../../assets';
import './detailBlog.scss'

const DetailBlog = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    return (
        <div className='detail-blog-wrapper'>
            {/* Ini adalah halaman Detail Blog postingan ke {postId} */}
            <img className='image-post' src={RegisterBg} alt="post detail" />
            <p className='title'>Title blog</p>
            <p className='meta'>author - date post</p>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in volutpat tortor. Mauris massa dolor, posuere in leo sit amet, commodo aliquam felis. Aliquam consequat quis nulla vitae porta. Nam auctor nunc sed libero porta, sit amet euismod est venenatis. Cras elementum sed ligula eu laoreet. Pellentesque dapibus malesuada dictum. Integer efficitur enim ac nunc iaculis, sit amet tempus libero malesuada. Aliquam interdum vehicula ligula, sed suscipit magna suscipit in.

                Ut egestas metus quis nisl finibus, id tristique mauris sagittis. Quisque vel metus nibh. Vivamus sem arcu, scelerisque quis neque quis, interdum tincidunt neque. Aenean id placerat nunc. Vivamus eget odio auctor, dapibus mi non, cursus risus. Sed elit felis, dignissim sit amet commodo condimentum, suscipit dapibus est. Vestibulum fringilla, erat a vestibulum tristique, risus nulla accumsan velit, at sagittis leo eros ut felis. Integer blandit est hendrerit mi sagittis, non faucibus felis aliquam. Quisque dui libero, aliquam porta placerat non, finibus eu erat. Ut mattis congue nulla at ullamcorper. Mauris tristique porta commodo. Curabitur ac consectetur sapien. Aenean condimentum tristique velit at dignissim. Praesent sit amet dolor ut dolor accumsan consectetur ac cursus metus. Maecenas ut neque purus. Nam gravida ex tempor sem sollicitudin venenatis.

                Fusce ornare mauris pulvinar lectus semper pellentesque. Proin sit amet elit neque. Ut volutpat et erat in commodo. Nam et sem feugiat, convallis lorem nec, gravida neque. Nullam vel iaculis enim. Curabitur dignissim viverra condimentum. Nunc ante justo, porta sit amet est sed, suscipit mattis nibh. Proin vel arcu sodales, ornare nunc sed, egestas lectus. Nulla facilisi. Vestibulum maximus dictum diam quis posuere. Vestibulum ut convallis risus, at pellentesque velit. Fusce tempor ipsum ante, vel lobortis tortor interdum at. Fusce condimentum ornare imperdiet. Integer sed nulla interdum, eleifend quam vulputate, mollis orci. Sed laoreet dignissim justo. Donec sagittis ultricies libero non rhoncus.</p>
            <p className="back" onClick={() => navigate("/")}>Kembali ke Home</p>
        </div >
    )
}

export default DetailBlog