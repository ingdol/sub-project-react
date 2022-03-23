import { useParams,useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
            <h3>QnA 수정</h3>
            <form name="frmUpdate" onSubmit={onSubmit} onReset={onReset} >
                글번호 : <input type="text" name="hostqnaNo" value={qna.hostqnaNo} readOnly/><br/><br/>
                닉네임 : <input type="text" name="memNick" value={qna.memNick} onChange={onChange}/><br/><br/>
                제목 : <input type="text" name="hostqnaTitle" value={qna.hostqnaTitle} onChange={onChange}/><br/><br/>
                내용 : <textarea name="hostqnaInfo" value={qna.hostqnaInfo} onChange={onChange}></textarea>
               <br/>
            <input type="submit" value="수정" />
            <input type="reset" value="취소" />             
            </form>
        </div>
    );
}

export default QnaUpdate;