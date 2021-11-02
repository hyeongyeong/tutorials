import React from 'react';
import "./BoardMain.css"
import Card from "../components/Card"
import UserRecommends from '../components/UserRecommends';
function Board() {
    return(
        <div className="board">
            <div className="board_container">
                <div className="board_left">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="board_right">
                    <div className="right_nav">
                        <div id="fixed_nav">
                            <UserRecommends />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    );
}

export default Board