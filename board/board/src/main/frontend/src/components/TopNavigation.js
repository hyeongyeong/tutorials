import React from 'react';
import "./TopNavigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faCompass, faUser, faSearch} from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import {FaSearch, FaRegHeart, FaRegCompass, FaRegUser} from 'react-icons/fa';

function TopNavigation() {
  return (
    <div className="nav">
        <div className="nav_container">
            <div className="left" >
                <FontAwesomeIcon icon={faInstagram} className="icon" /><h2>| instagram </h2>  
            </div>
            <div class="search"> 
                <form class="search_form" action="">
                    <input id="search_input" type="text" name="search" placeholder="검색"/>
                </form>
            </div>
            <div className="right">
                <FaRegCompass className="icon"/>
                <FaRegHeart className="icon"/>
                <FaRegUser className="icon"/>
            </div>
        </div>
    </div>
    
  );
}

export default TopNavigation;
