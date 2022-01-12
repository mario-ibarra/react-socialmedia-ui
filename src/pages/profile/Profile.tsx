import Feedbar from '../../components/feedbar/Feedbar'
import Rightbar from '../../components/rightbar/Rightbar'
import './Profile.css'

interface RightbarCompProps {
    profileComp?: React.ReactNode;
}

const Profile = () => {
    return (
            <div className="profile__container">
                <div className="profile__header">
                    <img src="./assets/post/3.jpeg" alt="" className="profile__header-coverImg" />
                    <img src="./assets/person/8.jpeg" alt="" className="profile__header-mainAvatar" />
                    
                </div>

                <div className="profile__info">
                    <div className="profile__info-top">
                        <h5 className="profile__info-top-username">Jane Doe</h5>
                        <span>Hello all my friends</span>
                    </div>
                    <div className="profile__info-bottom">
                        <Feedbar />
                        <Rightbar  profileComp={<Profile />} />
                    </div>


                </div>
            </div>
        
        
    )
}

export default Profile
