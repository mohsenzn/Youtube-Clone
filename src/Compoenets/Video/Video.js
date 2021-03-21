import React from 'react'
import './video.scss';
import {AiFillEye, AiOutlineColumnHeight} from 'react-icons/ai'
const Video = () => {
    return (
        <div className="video">
        <div className="video_top">
            {/* <img src={medium.url} alt=""/> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTuVENe1Qw0U_l8osYKFzudhzc2f1kVMKLg&usqp=CAU" alt=""/>
            <span>5:50</span>
        </div>
        <div className="video_title">
            Create app in 10 minutes 
        </div>
        <div className="video_detail">
            <span>
                <AiFillEye />10B views •

            </span>
            <span> 1 year ago</span>
        </div>
        <div className="video_channel">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTuVENe1Qw0U_l8osYKFzudhzc2f1kVMKLg&usqp=CAU" alt=""/>
            <p>JawwadAKhter</p>
        </div>
    </div>
    )
}

export default Video
