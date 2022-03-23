import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(props) {
    let history = useNavigate();

    //state
    const [mem, setMem] = useState({
        memId: '',
        memPw: ''
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
        <div>
            <form name="loginForm" onSubmit={onSubmit} > 
                <input
                    type="text"
                    name="memId"
                    value={mem.memId}
                    onChange={onChange} />
                <input
                    type="text"
                    name="memPwd"
                    value={mem.memPwd}
                    onChange={onChange} />
                <input type="submit" value="등록" />
            </form>
        </div>
    );
}

export default Login;