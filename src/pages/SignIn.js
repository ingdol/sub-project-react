import React, { useRef, useState } from 'react'
import "./SignIn.css"
import axios from 'axios'

function HostSign() {
    const idInput = useRef(null)
    const pwInput = useRef(null)

    // 오류 메세지
    const [idMsg, setIdMsg] = useState('')
    const [pwMsg, setPwMsg] = useState('')

    const onSubmit = () => {

        if (idInput.current.value.length <= 0) {
            setIdMsg("아이디를 입력해주세요.")
            return false;
        } else {
            setIdMsg("")
        }

        if (pwInput.current.value.length <= 0) {
            setPwMsg("비밀번호를 입력해주세요.")
            return false
        } else {
            setPwMsg("")
        }

        // Axios
        axios.post('http://localhost:8080/login', {
            memId: idInput.current.value,
            memPw: pwInput.current.value
        })
        .then(respone => {
            if (respone.data.result === "success") {
                console.log(respone.data.result)
                console.log(respone.data)
                window.sessionStorage.setItem("sessionId", respone.data.memId);
                window.sessionStorage.setItem("sessionNick", respone.data.memNick);
                window.location.href = '/'
                
            } else if (respone.data.result === "fail") {
                console.log(respone.data.result)
                setPwMsg("아이디와 비밀번호를 다시 확인해주세요.")
                return false;
            }
        })
        .catch(err => {
            console.log(err)
        })
            
    }

    return (
        <div className='host-container'>
            <h3>Login</h3>
            <form className='host-form'>
                <div className='use-input'>
                    <span className='inputTitle'>Email</span>
                    <span className='inputTitle'>Password</span>
                </div>
                <div>
                    <input
                        name='hostName'
                        className='host-input text-place'
                        type="text"
                        placeholder='ID'
                        ref={idInput}/>
                    <span className='warning-id'>{idMsg}</span>
                    <input
                        type="password"
                        className='host-input text-place'
                        placeholder='PASSWORD'
                        ref={pwInput}/>
                    <span className='warning-pw1'>{pwMsg}</span>
                    <span className='warning-pw2'>{pwMsg}</span>
                    <input
                        type="button"
                        className='host-submit'
                        value={"Login"}
                        onClick={onSubmit}/>
                </div>
            </form>
        </div>
    )
}

export default HostSign