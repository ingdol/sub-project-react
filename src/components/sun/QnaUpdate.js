import { useParams,useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Qna.css';

function QnaUpdate(props) {
    let history = useNavigate();
    const { hostqnaNo } = useParams();
    const [qna,setQna] = useState({
        hostqnaNo:'',
        memNick:'',
        hostqnaTitle:'',
        hostqnaInfo:'',
        hostqnaDate:'',
        hostqnaFaq:'',
        hostqnaCom:''
     });

    const [loading, setLoading] = useState(false);

    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/qnadetailview/' + hostqnaNo);
        console.log(response.data);
        setQna({
            hostqnaNo:response.data.hostqnaNo,
            memNick:response.data.memNick,
            hostqnaTitle:response.data.hostqnaTitle,
            hostqnaInfo:response.data.hostqnaInfo,
            hostqnaDate:response.data.hostqnaDate,
            hostqnaFaq:response.data.hostqnaFaq,
            hostqnaCom:response.data.hostqnaCom
         });
         setLoading(false);
    }

    useEffect(() => {
        loadData();
    }, []);

    const onChange = (e) => {
        const { value, name } = e.target;    
        setQna({
            ...qna,
            [name]: value
        });
    };

    const onReset = () => {
        setQna({           
            hostqnaNo:qna.hostqnaNo,
            memNick:'',
            hostqnaTitle:'',
            hostqnaInfo:'',
            hostqnaDate:'',
            hostqnaFaq:'',
            hostqnaCom:''
        })        
    };    

    const onSubmit = (e) => {
        e.preventDefault();
        var frmData = new FormData(document.frmUpdate);
        axios.post('http://localhost:8080/qnaupdate/', frmData)
            .then(
                response => {
                    alert("수정 완료");
                    history('/qnalist');
                }
            );
    }

    return (
        <div>

            <div class="board_wrap">
                <div class="board_title">
                    <strong>QnA 수정</strong>
                </div>
                <form class="board_write_wrap" name="frmUpdate" onSubmit={onSubmit} onReset={onReset}>
                    <div class="board_write">
                        <div class="title">
                            <dl>
                                <dt>제목</dt>
                                <dd><input type="text" name="hostqnaTitle" value={qna.hostqnaTitle} onChange={onChange}/></dd>
                            </dl>
                        </div>
                        <div class="info">
                            <dl>
                                <dt>글쓴이</dt>
                                <dd><input type="text" name="memNick" value={qna.memNick} onChange={onChange} readOnly/></dd>
                            </dl>
                            <dl className='dnone'>
                                <dt>글번호</dt>
                                <dd><input type="text" name="hostqnaNo" value={qna.hostqnaNo} readOnly/></dd>
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

export default QnaUpdate;