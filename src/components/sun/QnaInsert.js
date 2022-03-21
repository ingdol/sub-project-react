import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function QnaInsert(props) {
    let history = useNavigate();    
    
    // state
    const [qna,setQna] = useState({
        //hostqnaNo:'',
        memNick:'',
        hostqnaTitle:'',
        hostqnaInfo:'',
        hostqnaFaq:''
    });
    const onChange = (e) => {
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
        setQna({
            ...qna, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };
    const onReset = () => {
        setQna({
            hostqnaNo:'',
            memNick:'',
            hostqnaTitle:'',
            hostqnaInfo:'',
            hostqnaFaq:''
        })
    };
    const onSubmit = (e) => {
        e.preventDefault();

        var frmData = new FormData(document.frmInsert);

        axios.post('http://localhost:8080/qnaInsert/', frmData)
            .then(
                response => {
                    alert("등록 완료");
                    history('/qnalist'); //상품 정보 조회 화면으로 이동//js에서 location이랑 같다고보면됨
                }
            );
    }

    return (
        <div>
            <h3>상품 등록</h3>
            <form name="frmInsert" onSubmit={onSubmit} onReset={onReset} >
                닉네임 : <input type="text" name="memNick" value={qna.memNick} onChange={onChange}/><br/><br/>
                제목 : <input type="text" name="hostqnaTitle" value={qna.hostqnaTitle} onChange={onChange}/><br/><br/>
                내용 : <textarea name="hostqnaInfo" value={qna.hostqnaInfo} onChange={onChange}></textarea>
               <br/>
            <input type="submit" value="등록" />
            <input type="reset" value="취소" />             
            </form>
        </div>
    );
}

export default QnaInsert;