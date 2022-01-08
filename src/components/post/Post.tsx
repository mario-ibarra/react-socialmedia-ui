import { MoreVert } from '@mui/icons-material'
import './Post.css'

function Post() {
    return (
        <div className='post__container'>
            <div className="post__container-wrapper">
                <div className="post__container-wrapper-top">
                    <div className="post__container-wrapper-topLeft">
                    <img src="/assets/person/5.jpeg" alt="" className="post__container-wrapper-topLeftImg" />
                    <span className="wrapper-topLeftUsername">Mandy</span>
                    <span className="wrapper-topLeftDate">5 min ago</span>
                    </div>
                    <div className="wrapper-topRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="post__container-wrapper-center">
                    <span className="wrapper__center-text">Hi, it is my first post :)</span>
                    <img src="/assets/post/3.jpeg" alt="" className="wrapper__center-postImg" />
                </div>
                <div className="post__container-wrapper-bottom">
                        <div className="post__wrapper-bottomLeft">
                            <img src="/assets/like.png" alt="" className="likeIcon" />
                            <img src="/assets/heart.png" alt="" className="likeIcon" />
                            <div className="post__wrapper-bottomLeftCounter"> 32 people liked </div>
                        </div>
                        <div className="post__wrapper-bottomRight">
                            <span className="post__bottomRight-comments">9 comments</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Post
