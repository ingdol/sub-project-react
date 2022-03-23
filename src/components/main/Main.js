import React, { useState } from 'react';
import { Button } from './Button';
import './Main.css';
import hostData from './hostData.js';
import stepData from './stepData.js';

function Main(props) {

    let [host, hostChange] = useState(hostData);
    let [step, stepChange] = useState(stepData);

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
                    <div class="loading">
                        <div>누구나</div>
                        <div>클래스</div>
                        <div>공간대여</div>
                        <p>호스트가 될 수 있어요</p>
                    </div>
                    {/* <p className='hostInfoTitle'> 호스트가 될 수 있어요</p> */}
                    <div className='hostSubInfo'>Daily&Linker와 함께라면 소모임 커뮤니티에서 클래스 및 공간대여의 호스트가 될 수 있습니다.</div>
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
                <Button buttonSize='btn--large'>5분만에 호스트 지원하기</Button>
            </div>
            <div className='stepInfo'>
                <p>호스트가 되는 과정</p>
                <p>간단한 신청 및 인증 절차로 누구나 쉽게 호스트가 될 수 있습니다.</p>
                <div className='stepBox'>
                    {
                    step.map(function(a, i){
                        return (
                        <Step step={step[i]}></Step>
                        )
                    })
                    }
                    <div></div>
                </div>
            </div>
        </div>
    );
}

function Card(props){
    return(
        <div className='hostItem'>
            <p>{props.i+1}</p>
            <p>{props.host.title}</p>
            <p>{props.host.content}</p>
        </div>
    )
}

function Step(props){
    return(
        <div className='stepItem'>
            <img src={props.step.image} />
            <p>{props.step.title}</p>
            <p>{props.step.content}</p>{/* 
            <div>
                <img src={props.step.next} />
            </div> */}
        </div>
    )
}

export default Main;