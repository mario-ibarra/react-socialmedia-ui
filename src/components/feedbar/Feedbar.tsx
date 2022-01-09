import Post from '../post/Post';
import Share from '../share/Share';
import './Feedbar.css';
import { Posts } from '../../dummyData'

interface IPostProps {
    id: number;
    desc?: string;
    photo: string;
    date: string;
    userId: number;
    like: number;
    comment: number;
}

const Feedbar = () =>{
    return (
        <div className='feedbar__container'>
            <div className="feedbar__container-wrapper">
                <Share  />
                {Posts.map((post) => (
                    <Post key={post.id} post={post}/> 
                ))}
   
            </div>
        </div>
    )
}

export default Feedbar
