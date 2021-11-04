import "./UserProfile.css"
import React from 'react';

function UserProfile(props) {
    return(
        <div className="user-group">
            <img className="user-img" src={props.data.path} alt="profile"/>
            <div className="user"> 
                <div id="card-name"> {props.data.username} </div>
                <div id="card-location"> {props.data.location} </div>
            </div>
        </div>
    );
}

export default UserProfile;