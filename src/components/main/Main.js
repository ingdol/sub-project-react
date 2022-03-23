import React, { useState } from 'react';
import { Button } from './Button';
import './Main.css';
import hostData from './hostData.js';

function Main(props) {

    let [host, hostChange] = useState(hostData);
    return (
        <div>
            <div className='background'>
                <p>클래스 및 공간대여</p>
                <p>누구나 지금 바로</p>
                <p>
                    <Button buttonSize='btn--large'>5분만에 호스트 지원하기</Button>
                </p>
            </div>
            <div className='hostInfo'>
                <div className='hostTitle'>
                {/* <div class="loading">
                    <span>누구나</span>
                    <span>클래스</span>
                    <span>공간대여</span>
                </div> */}
                    <h1> 호스트가 될 수 있어요</h1>
                    <p>Daily&Linker와 함께라면 소모임 커뮤니티에서</p>
                    <p>클래스 및 공간대여의 호스트가 될 수 있습니다.</p>
                </div>
                <div className='hostText'>
                    {
                    host.map(function(a, i){
                        return (
                        <Card host={host[i]} i={i}></Card>
                        )
                    })
                    }
                </div>
                
                
            </div>
        </div>
    );
}

function Card(props){
    return(
        <div className='hostItem'>
            <h1>{props.i+1}</h1>
            <h4>{props.host.title}</h4>
            <p>{props.host.content}</p>
        </div>
    )
}

export default Main;