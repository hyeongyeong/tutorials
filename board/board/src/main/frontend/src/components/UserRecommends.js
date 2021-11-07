import "./UserRecommends.css";
import UserProfile2X from "./UserProfile/UserProfile2X.js"
import UserProfileFollow from "./UserProfile/UserProfileFollow.js"

function UserRecommends(props) {
    const follows = props.data.recommends.map(recommend => <UserProfileFollow data={recommend}></UserProfileFollow>);
    return (
        <div className="user_recommends">
            <UserProfile2X data={props.data.user}/>
            <div className="recommend-info">
                <div className="recommend-info-left"> 회원님을 위한 추천 </div>
                <div className="recommend-info-right"> 모두 보기 </div>
            </div>
            <div className="recommend-list">
                {follows}
            </div>
        </div>
    );
}

export default UserRecommends;