import { Search, Person, Chat, Notifications } from '@mui/icons-material'
import './Topbar.css'

function Topbar() {
    return (
        <div className='topbar__container'>
             <div className="topbar__left">
                 <span className="topbar__left-logo">Høyre Demo</span>
             </div>
             <div className="topbar__center">
                 <div className="topbar__center-searchbar">
                    <Search className='top__center-searchIcon' />
                    <input type="text" className="topbar__center-search-input" placeholder='Search for members, posts or videos' />
                 </div>
             </div>
             <div className="topbar__right">
                 <span className="topbar__right-link">Homepage</span>
                 <span className="topbar__right-link">Timeline</span>
              
                <div className="topbar__right-icons">
                    <div className="topbar__right-item">
                        <Person />
                        <span className="topbar__right-badge">4</span>
                    </div>
                    <div className="topbar__right-item">
                        <Chat />
                        <span className="topbar__right-badge">2</span>
                    </div>
                    <div className="topbar__right-item">
                        <Notifications />
                        <span className="topbar__right-badge">5</span>
                    </div>
                 </div>
                 <span className="topbar__right-name">Hei: Mandy</span>
                 <img src="/assets/person/4.jpeg" alt=""    className="topbar__right-img" />
             </div>

        </div>
    )
}

export default Topbar
