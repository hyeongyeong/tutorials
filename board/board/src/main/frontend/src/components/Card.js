import {FaRegBookmark, FaRegHeart, FaRegComment, FaRegShareSquare} from 'react-icons/fa';
import "./Card.css"
function Card(){
    return(
        
        <div className="card">
            <div className="head">
                <img src="/images/profile.jpg" alt="profile"/>
                username
            </div>
            <div className="card-image">
                <img src="/images/card_image.jpg" alt="image"/>
            </div>
            <div className="info">
                <div className="info-left">
                    <FaRegHeart className="icon"/>
                    <FaRegComment className="icon"/>
                    <FaRegShareSquare className="icon"/>
                </div>
                <div className="info-right">
                    <FaRegBookmark className="icon"/>
                </div>
            </div>
            <div className="card_comment">
                comment1<br/>
                comment2<br/>
            </div>
            <div className="card_comment-form">
                <form action="">
                    <input type="text" placeholder="댓글 입력 .."/>
                </form>
            </div>
        </div>
    );
}

export default Card