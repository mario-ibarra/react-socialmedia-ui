import './Friend.css'

const Friend = ({friend}:any) => {
    return (
        <li className="sidebar__wrapper-friend">
            <img src={friend.profilePicture } alt="" className="sidebar__wraper-friend-img" />
            <span className="sidebar__wrapper-friend-name">{friend.username} </span>
        </li>

    )
}

export default Friend
