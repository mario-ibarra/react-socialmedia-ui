import './Online.css'


const Online = ({user}:any) => {
    return (
        <li  className="friendList-item">
            <div className="friendList-item__container">
                <img src={user.profilePicture} alt="" className="friendList-item-profileImg" />
                <span className="friendList-item-online"></span>
            </div>
                <span className="friendList-item-profileName">{user.username}</span>
        </li>
    )
}

export default Online
