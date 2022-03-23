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

            <div class="board_wrap">
                <div class="board_title">
                    <strong>QnA 등록</strong>
                </div>
                <form class="board_write_wrap" name="frmInsert" onSubmit={onSubmit} onReset={onReset}>
                    <div class="board_write">
                        <div class="title">
                            <dl>
                                <dt>제목</dt>
                                <dd><input type="text" name="hostqnaTitle" value={qna.hostqnaTitle} onChange={onChange} placeholder="제목"/></dd>
                            </dl>
                        </div>
                        <div class="info">
                            <dl>
                                <dt>글쓴이</dt>
                                <dd><input type="text" name="memNick" value={qna.memNick} onChange={onChange} placeholder="글쓴이"/></dd>
                            </dl>
                        </div>
                        <div class="cont">
                            <textarea name="hostqnaInfo" value={qna.hostqnaInfo} onChange={onChange}></textarea>
                        </div>
                    </div>
                    <div class="bt_wrap">
                        <input type="submit" value="등록" />
                        <input type="reset" value="취소" /> 
                    </div>
                </form>
            </div>

        </div>
    );
}

export default QnaInsert;