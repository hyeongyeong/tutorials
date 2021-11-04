import React from 'react';
import "./BoardMain.css"
import Card from "../components/Card"
import UserRecommends from '../components/UserRecommends';

function Board() {
    const data = [
        {
            user : {
                path: "/images/profile.jpg",
                username : "소개팅_D-Day",
                location : "성남시 분당구 정자역"
            },
            images : [
                { url: "/images/meet/1.jpg" },
                { url: "/images/meet/2.jpg" },
                { url: "/images/meet/3.jpg" },
                { url: "/images/meet/4.jpg" },
                { url: "/images/meet/5.jpg" },
                { url: "/images/meet/6.jpg" },
                { url: "/images/meet/7.jpg" },
                { url: "/images/meet/8.jpg" },
            ],
            comments : [
                { username: "소개팅_D-Day", content: "그 땐, 그랬었지.."},
                { username: "경이", content: "오빤 어떤게 기억에 남아?"}
            ]
        },
    ];

    return(
        <div className="board">
            <div className="board_container">
                <div className="board_left">
                    <Card data={data[0]}/>
                </div>
                <div className="board_right">
                    <div className="right_nav">
                        <div id="fixed_nav">
                            {/* <UserRecommends data={data[0].user}/> */}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    );
}

export default Board