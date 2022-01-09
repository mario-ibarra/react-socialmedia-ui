import './Rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';



function Rightbar() {
    
    return (
        <div className='rightbar__container'>
            <div className="rightbar__container-wrapper">
                <div className="wrapper__birthday-container">
                    <img src="/assets/gift.png" alt="birthday celebration" className="birthday-img" />
                    <span className="birthday-text">
                        <b>Cindy Craftford</b> and <b>3 others members </b>have birthday today
                    </span>
                </div>
                <img src="/assets/social.jpg" alt="" className="rigthbar__container-img" />
                <h4 className="rigthbar__container-title">Online Friends</h4>
                <ul className="rigthbar__container-friendsList">
                    {Users.map((user) => (
                    <Online key={user.id} user={user} />
                    ))}
                </ul>

            </div>         
        </div>
    )
}


export default Rightbar
