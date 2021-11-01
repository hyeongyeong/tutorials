import React from 'react';
import "./TopNavigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import {FaHome, FaRegPaperPlane,  FaRegPlusSquare, FaRegHeart, FaRegCompass, FaRegUser} from 'react-icons/fa';

function TopNavigation() {
  return (
    <div className="nav">
        <div className="nav_container">
            <div className="left" >
                <FontAwesomeIcon icon={faInstagram} className="icon" /><h2>| instagram </h2>  
            </div>
            <div class="search"> 
                <form class="search_form" action="">
                    <input id="search_input" type="text" name="search" placeholder="&#61442;  검색"/>
                </form>
            </div>
            <div className="right">
                <FaHome className="icon home"/>
                <FaRegPaperPlane className="icon"/>
                <FaRegPlusSquare className="icon plus"/>
                <FaRegCompass className="icon"/>
                <FaRegHeart className="icon"/>
                <FaRegUser className="icon"/>
            </div>
        </div>
    </div>
    
  );
}

export default TopNavigation;
