import { Bookmark, CastForEducation, CastForEducationOutlined, Chat, Event, People, QuestionAnswerOutlined, RssFeed, VideoSettings, Work } from '@mui/icons-material'
import './Sidebar.css'



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
                <ul className="sidebar__wrapper-friend-list">
                    <li className="sidebar__wrapper-friend">
                        <img src="/assets/person/1.jpeg" alt="" className="sidebar__wraper-friend-img" />
                        <span className="sidebar__wrapper-friend-name">Joe Doe</span>
                    </li>
                    <li className="sidebar__wrapper-friend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebar__wraper-friend-img" />
                        <span className="sidebar__wrapper-friend-name">Joe Doe</span>
                    </li>
                    <li className="sidebar__wrapper-friend">
                        <img src="/assets/person/3.jpeg" alt="" className="sidebar__wraper-friend-img" />
                        <span className="sidebar__wrapper-friend-name">Joe Doe</span>
                    </li>
                    <li className="sidebar__wrapper-friend">
                        <img src="/assets/person/4.jpeg" alt="" className="sidebar__wraper-friend-img" />
                        <span className="sidebar__wrapper-friend-name">Joe Doe</span>
                    </li>
                    <li className="sidebar__wrapper-friend">
                        <img src="/assets/person/4.jpeg" alt="" className="sidebar__wraper-friend-img" />
                        <span className="sidebar__wrapper-friend-name">Joe Doe</span>
                    </li>
                    <li className="sidebar__wrapper-friend">
                        <img src="/assets/person/4.jpeg" alt="" className="sidebar__wraper-friend-img" />
                        <span className="sidebar__wrapper-friend-name">Joe Doe</span>
                    </li>
                    <li className="sidebar__wrapper-friend">
                        <img src="/assets/person/4.jpeg" alt="" className="sidebar__wraper-friend-img" />
                        <span className="sidebar__wrapper-friend-name">Joe Doe</span>
                    </li>
                    <li className="sidebar__wrapper-friend">
                        <img src="/assets/person/4.jpeg" alt="" className="sidebar__wraper-friend-img" />
                        <span className="sidebar__wrapper-friend-name">Joe Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
