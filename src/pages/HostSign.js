import React, { useRef, useState } from 'react'
import "./HostSign.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function HostSign() {
  const nameInput = useRef(null)
  const numInput = useRef(null)
  const infoInput = useRef(null)

  let history = useNavigate();

  // 오류 메세지
  const [nameMsg, setNameMsg] = useState('')
  const [numMsg, setNumMsg] = useState('')

  // 유효성 검사
  const nickRegex = new RegExp(/^[A-Za-z0-9-가-힣]{2,12}$/);
  const numRegex = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/);


  const onSubmit = () => {

    setNameMsg(nameInput.current.value)

    if(nickRegex.test(nameInput.current.value) === false) {
      setNameMsg("호스트 명은 2~12자리 입니다.")
      return false;
    } else {
      setNameMsg("")
    }

    if(numRegex.test(numInput.current.value) === false) {
      setNumMsg("휴대폰 번호를 입력해주세요.")
      return false
    } else {
      setNumMsg("")
    }

    axios.post('http://localhost:8080/host-sign', {
      hostName: nameInput.current.value,
      hostPhone: numInput.current.value,
      hostInfo: infoInput.current.value,
    })
    .then(respone => {
      console.log(respone)
      console.log(respone.data)
    })
    .catch(err => {
      console.log(err)
    })
    
    history('/')
  }

  return (
    <div className='host-container'>
      <h3>호스트 신청</h3>
      <form className='host-form'>
        <div className='use-input'>
          <span className='inputTitle'>호스트 명</span>
          <span className='inputTitle'>공개 연락처</span>
          <span className='inputTitle'>호스트 소개</span>
        </div>
        <div>
          <input name='hostName' className='host-input text-place' type="text" placeholder='호스트 명 입력' ref={nameInput} />
          <span className='warningName'>{nameMsg}</span>
          <input type="text" className='host-input text-place' placeholder='공개 연락처 입력' ref={numInput} />
          <span className='warningNum'>{numMsg}</span>
          <textarea className='host-info' placeholder='소개를 간단히 적어주세요.' maxLength={200} cols="30" rows="10" ref={infoInput}></textarea>
          <input type="button" className='host-submit' value={"호스트 신청하기"} onClick={onSubmit} />
        </div>
      </form>
    </div>
  )
}

export default HostSign