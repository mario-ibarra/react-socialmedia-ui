import { Bookmark, CastForEducation, CastForEducationOutlined, Chat, Event, People, QuestionAnswerOutlined, RssFeed, VideoSettings, Work } from '@mui/icons-material'
import './Sidebar.css'
import { Users } from '../../dummyData';
import Friend from '../friends/Friend';



function Sidebar() {
    return (
        <div className='sidebar__container'>
            <div className="sidebar__wrapper">
                <ul className="sidebar__wrapper-list">
                    <li className="sidebar__wrapper-list-item">
                        <RssFeed />
                        <span className="sidebar__wrapper-item-text">Feed</span>
                    </li>
                    <li className="sidebar__wrapper-list-item">
                        <Chat />
                        <span className="sidebar__wrapper-item-text">Chat</span>
                    </li>
                    <li className="sidebar__wrapper-list-item">
                        <VideoSettings />
                        <span className="sidebar__wrapper-item-text">Videos</span>
                    </li>
                    <li className="sidebar__wrapper-list-item">
                        <People />
                        <span className="sidebar__wrapper-item-text">Groups</span>
                    </li>
                    <li className="sidebar__wrapper-list-item">
                        <Bookmark />
                        <span className="sidebar__wrapper-item-text">Bookmarks</span>
                    </li>
                    <li className="sidebar__wrapper-list-item">
                        <QuestionAnswerOutlined />
                        <span className="sidebar__wrapper-item-text">Questions</span>
                    </li>
                    <li className="sidebar__wrapper-list-item">
                        <Event />
                        <span className="sidebar__wrapper-item-text">Events</span>
                    </li>
                    <li className="sidebar__wrapper-list-item">
                        <CastForEducationOutlined />
                        <span className="sidebar__wrapper-item-text">Courses</span>
                    </li>
                    <li className="sidebar__wrapper-list-item">
                        <Work />
                        <span className="sidebar__wrapper-item-text">Jobs</span>
                    </li>
                </ul>
                <button className=" btn sidebar__container-button">Show More</button>
                <hr className="sidebar__wraper-hr" />

                <h4 className="sidebar__wrapper-friendList">Friends</h4>
                <ul className="sidebar__wrapper-friend-list">
                    {Users.map((friend)=>(
                        <Friend key={friend.id } friend={friend}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
