import "./Comment.css"
import React from 'react';
function Comment(props){
    return(
        <div className="comment-group">
            <span id="comment-name">
                {props.data.username}
            </span>
            <span id="comment-content">
                {props.data.content}
            </span>
        </div>
    );
}

export default Comment