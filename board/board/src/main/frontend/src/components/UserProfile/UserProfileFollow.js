import "./UserProfileFollow.css"
import UserProfile from "./UserProfile"

function UserProfileFollow(props) {
    return (
        <div className="recommend-follow-group">
            <UserProfile data={props.data}/>
            <div className="recommend-follow-btn"> 팔로우 </div>
        </div>
    );
}

export default UserProfileFollow;