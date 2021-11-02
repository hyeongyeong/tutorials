import "./UserProfile.css"

function UserProfile() {
    return(
        <div className="user-group">
            <img className="user-img" src="/images/profile.jpg" alt="profile"/>
            <div className="user"> 
                <div id="card-name"> username </div>
                <div id="card-location"> location </div>
            </div>
        </div>
    );
}

export default UserProfile;