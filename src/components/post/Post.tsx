import { MoreVert } from '@mui/icons-material'
import './Post.css'
import { Users } from '../../dummyData'
import { useState } from 'react';

interface IPostProps{
    id: number;
    desc?: string;
    photo: string;
    date: string;
    userId: number;
    like: number;
    comment: number;
}

function Post({ post }: any) {

    const [like, setlike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const user = Users.filter(u=> u.id ===2);
    console.log(user[0].username);

    const likeHandler = () => {
        setlike(isLiked ? like-1 : like + 1)
        setIsLiked(!isLiked)
    }
    
    return (
        <div className='post__container'>
            <div className="post__container-wrapper">
                <div className="post__container-wrapper-top">
                    <div className="post__container-wrapper-topLeft">
                    <img src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt="" className="post__container-wrapper-topLeftImg" />
                    <span className="wrapper-topLeftUsername">{Users.filter((u)=> u.id === post.userId)[0].username} </span>
                    <span className="wrapper-topLeftDate">{post.date}</span>
                    </div>
                    <div className="wrapper-topRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="post__container-wrapper-center">
                    <span className="wrapper__center-text">{post?.desc}</span>
                    <img src={post.photo} alt="" className="wrapper__center-postImg" />
                </div>
                <div className="post__container-wrapper-bottom">
                        <div className="post__wrapper-bottomLeft">
                            <img src="/assets/like.png" alt="" className="likeIcon"  onClick={likeHandler}/>
                            <img src="/assets/heart.png" alt="" className="likeIcon" onClick={likeHandler}/>
                            <div className="post__wrapper-bottomLeftCounter"> {like} people liked </div>
                        </div>
                        <div className="post__wrapper-bottomRight">
                            <span className="post__bottomRight-comments">{post.comment} comments</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Post
