import React from 'react';
import {FaRegBookmark, FaRegSmile, FaEllipsisH,FaRegHeart, FaRegComment, FaRegPaperPlane} from 'react-icons/fa';
import "./Card.css"
import Comment from './Comment';
import UserProfile from './UserProfile/UserProfile';
import SimpleImageSlider from "react-simple-image-slider";

function Card(props){
    const comments = props.data.comments.map(comment => <Comment data={comment}></Comment>);
    return(
        <div className="card">
            <div className="head">
                <UserProfile data={props.data.user}/>
                <div className="card-more">
                    <FaEllipsisH className="icon card-more"/>
                </div>
            </div>
            <div className="card-image">
                <SimpleImageSlider id="image-slider" width={600} height={600} images={props.data.images} showBullets={false} showNavs={true} />
            </div>
            <div className="info">
                <div className="icons">
                    <div className="icons-left">
                        <div>
                            <FaRegHeart className="icon"/>
                            <FaRegComment className="icon"/>
                            <FaRegPaperPlane className="icon"/>
                        </div>
                        <div className="user-views">
                            조회 <span id="views">1234</span>회
                        </div>
                    </div>
                    <div className="icons-right">
                        <FaRegBookmark className="icon"/>
                    </div>
                </div>
                <div className="card_comment">
                    {comments}
                </div>
            </div>
            
            <hr className="card_comment-divider"/>
            <form className="card_comment-group">
                <FaRegSmile className="icon add-icon"/>
                <input type="text" className="comment-input input-form" placeholder="댓글 달기..."/>
                <input type="button" className="comment-submit input-form" value="게시"/>
            </form>
        </div>
    );
}

export default Card