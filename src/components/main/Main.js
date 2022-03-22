import React from 'react';
import { Button } from './Button';
import './Main.css';

function Main(props) {
    return (
        <div>
            <div className='background'>
                <p>클래스 및 공간대여</p>
                <p>누구나 지금 바로</p>
                <p>
                    <Button variant="primary">5분만에 호스트 지원하기</Button>
                </p>
            </div>
        </div>
    );
}

export default Main;