import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login(props) {
    let history = useNavigate();

    //state
    const [mem, setMem] = useState({
        memId: '',
        memPwd: ''
    });

    const onChange = (e) => {
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
        setMem({
            ...mem, // 기존의 prd 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        var frmData = new FormData(document.loginForm);

        axios.post('http://localhost:8080/login', frmData)
            .then(
                response => {
                    alert("로그인 성공");
                    history('/');

                }
            );
    }

    return (
        <div className='LoginBox'>
            <div className='LoginTitle'>
                로그인
            </div>
            <div>
                환영합니다.
                로그인을 해주세요!
            </div>
            <form name="loginForm" onSubmit={onSubmit} >
                <div><input className='inputIDPW'
                    type="text"
                    name="memId"
                    placeholder="아이디(이메일)"
                    value={mem.memId}
                    onChange={onChange} />
                <div><input className='inputIDPW'
                    type="text"
                    name="memPwd"
                    placeholder="비밀번호"
                    value={mem.memPwd}
                    onChange={onChange} /></div>
                <div></div><button className='btn--large'><input className='nonStyle' type="submit" value="LOGIN" /></button>
                </div>
            </form>
        </div>
    );
}

export default Login;