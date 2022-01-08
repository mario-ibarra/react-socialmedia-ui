import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import './Share.css'

function Share() {
    return (
        <div className='share__container'>
            <div className="share__container-wrapper">
                <div className="share__container-wrapper-top">
                    
                    <img src="/assets/person/1.jpeg" alt="" className="share_container-wrapper-postImg" />
                    
                    <input placeholder="What's in your main" className="share__wrapper-top-input" />
                </div>
                <hr className="share__container-division" />
                <div className="share__container-wrapper-bottom">
                        <div className="share__container-wrapper-bottomOption">
                            <PermMedia htmlColor='tomato'  className="share__container-wrapper-bottomIcon" />
                            <span className="share__container-wrapper-text">Photo or video</span>
                        </div>
                        <div className="share__container-wrapper-bottomOption">
                            <Label htmlColor='blue'  className="share__container-wrapper-bottomIcon" />
                            <span className="share__container-wrapper-text">Tag</span>
                        </div>
                        <div className="share__container-wrapper-bottomOption">
                            <Room htmlColor='green'  className="share__container-wrapper-bottomIcon" />
                            <span className="share__container-wrapper-text">Location</span>
                        </div>
                        <div className="share__container-wrapper-bottomOption">
                            <EmojiEmotions htmlColor='orange' className="share__container-wrapper-bottomIcon" />
                            <span className="share__container-wrapper-text">Feelings</span>
                        </div>
            <button className="btn share__button"> Share</button>
                </div>
            </div>
           
        </div>
    )
}

export default Share
