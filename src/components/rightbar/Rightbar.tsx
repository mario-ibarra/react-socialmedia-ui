import './Rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';



function Rightbar({ profileComp}:any) {

        const HomeRightbar = () => {
            return(
            <>
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
            </>
            )
        };

        const ProfileRightbar = () => {
            return (
                <>
                    <h4 className="rightbar__title">User information</h4>
                    <div className="rigthbar__info">
                        <div className="rightbar__info-item">
                            <span className="rightbar__info-key">City:</span>
                            <span className="rightbar__info-value">Atantla</span>
                        </div>
                        <div className="rightbar__info-item">
                            <span className="rightbar__info-key">From:</span>
                            <span className="rightbar__info-value">Madrid</span>
                        </div>
                        <div className="rightbar__info-item">
                            <span className="rightbar__info-key">Relationship:</span>
                            <span className="rightbar__info-value">Single</span>
                        </div>
                    </div>

                    <h4 className="rightbar__title">user friends</h4>
                    <div className="rightbar__followings">
                        <div className="rightbar__following">
                            <img src="./assets/person/rambo1.jpg" alt="" className="rightbar__following-img" />
                            <span className="rightbar__following-name">Jhon Rambo</span>
                        </div>
                        <div className="rightbar__following">
                            <img src="./assets/person/1.jpeg" alt="" className="rightbar__following-img" />
                            <span className="rightbar__following-name">Jane Doe</span>
                        </div>
                        <div className="rightbar__following">
                            <img src="./assets/person/2.jpeg" alt="" className="rightbar__following-img" />
                            <span className="rightbar__following-name">Peter Pan</span>
                        </div>
                        <div className="rightbar__following">
                            <img src="./assets/person/3.jpeg" alt="" className="rightbar__following-img" />
                            <span className="rightbar__following-name">Jhon Wayne</span>
                        </div>
                        <div className="rightbar__following">
                            <img src="./assets/person/3.jpeg" alt="" className="rightbar__following-img" />
                            <span className="rightbar__following-name">Jhon Wayne</span>
                        </div>
                        <div className="rightbar__following">
                            <img src="./assets/person/4.jpeg" alt="" className="rightbar__following-img" />
                            <span className="rightbar__following-name">Cindy Craftford</span>
                        </div>
                        <div className="rightbar__following">
                            <img src="./assets/person/5.jpeg" alt="" className="rightbar__following-img" />
                            <span className="rightbar__following-name">Jeff Beson</span>
                        </div>
                        <div className="rightbar__following">
                            <img src="./assets/person/6.jpeg" alt="" className="rightbar__following-img" />
                            <span className="rightbar__following-name">Elon Musk</span>
                        </div>
                    </div>
                </>
            )
        }
    
    return (
        <div className='rightbar__container'>
            <div className="rightbar__container-wrapper">
                    {profileComp ? <ProfileRightbar  /> : <HomeRightbar />}
            </div>         
        </div>
    )
}


export default Rightbar
