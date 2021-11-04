import React from 'react';
import "./BoardMain.css"
import Card from "../components/Card"
import UserRecommends from '../components/UserRecommends';

function Board() {
    const data = [
        {
            user : {
                path: "/images/profile/gyeong.png",
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
    const user = {
        user : {
            path: "/images/profile/wook.jpg",
            username : "욱이",
            location : "성남시 분당구 정자역"
        },
        recommends : 
        [
                {
                    path: "/images/profile.jpg",
                    username : "소개팅_D-Day",
                    location : "성남시 분당구 정자역"
                },
                {
                    path: "/images/profile.jpg",
                    username : "21.1.1",
                    location : "대부도"
                },{
                    path: "/images/profile.jpg",
                    username : "21.1.24",
                    location : "서울 식물원"
                }
                ,{
                    path: "/images/profile.jpg",
                    username : "21.2.28",
                    location : "강릉"
                }
        ]
    }

    return(
        <div className="board">
            <div className="board_container">
                <div className="board_left">
                    <Card data={data[0]}/>
                </div>
                <div className="board_right">
                    <div className="right_nav">
                        <div id="fixed_nav">
                            <UserRecommends data={user}/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    );
}

export default Board