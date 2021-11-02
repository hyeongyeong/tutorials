import "./UserProfile.css"

function UserProfile2X() {
    return(
        <div className="user-group">
            <img className="user-img2X" src="/images/profile.jpg" alt="profile"/>
            <div className="user"> 
                <div id="card-name2X"> username </div>
                <div id="card-location2X"> location </div>
            </div>
        </div>
    );
}

export default UserProfile2X;