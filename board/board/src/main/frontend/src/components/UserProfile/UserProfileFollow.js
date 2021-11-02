import "./UserProfileFollow.css"
import UserProfile from "./UserProfile"

function UserProfileFollow() {
    return (
        <div className="recommend-follow-group">
            <UserProfile/>
            <div className="recommend-follow-btn"> 팔로우 </div>
        </div>
    );
}

export default UserProfileFollow;