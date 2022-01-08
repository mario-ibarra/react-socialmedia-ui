import Post from '../post/Post';
import Share from '../share/Share';
import './Feedbar.css';


function Feedbar() {
    return (
        <div className='feedbar__container'>
            <div className="feedbar__container-wrapper">
                <Share  />
                 <Post /> 
                 <Post /> 
                 <Post /> 
                 <Post /> 
                 <Post /> 
                 <Post /> 
                 <Post /> 
                 <Post /> 
            </div>
        </div>
    )
}

export default Feedbar
