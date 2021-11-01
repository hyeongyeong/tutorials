import "./Comment.css"
function Comment(){
    return(
        <div className="comment-group">
            <span id="comment-name">
                username
            </span>
            <span id="comment-content">
                content
            </span>
        </div>
    );
}

export default Comment