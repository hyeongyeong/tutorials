import React from 'react';
import "./BoardMain.css"
import Card from "../components/Card"
function Board() {
    return(
        <div className="board">
            <div className="board_container">
                <div className="board_left">
                    <Card />
                </div>
                <div className="board_right">

                </div>
                
            </div>
        </div>
        
    );
}

export default Board