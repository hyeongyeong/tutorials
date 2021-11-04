import "./UserProfile.css"

function UserProfile2X(props) {
    return(
        <div className="user-group">
            <img className="user-img2X" src={props.data.path} alt="profile"/>
            <div className="user"> 
                <div id="card-name2X"> {props.data.username} </div>
                <div id="card-location2X"> {props.data.location} </div>
            </div>
        </div>
    );
}

export default UserProfile2X;