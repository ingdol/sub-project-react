import { useParams,useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QnaDetailView(props) {

    let history = useNavigate();   
     // 파라미터로 받아 온 값
    const {hostqnaNo} = useParams();

    // 삭제 눌렀을때
    const onDeleteItem = () => {
        if (window.confirm("삭제하시겠습니까?")) {
            console.log(hostqnaNo);
            axios.get('http://localhost:8080/qnadelete/' + hostqnaNo)
                .then(
                    () => {
                        history('/qnalist');
                        window.location.reload();
                    }
                ).catch(err => console.log(err));
        }
    }

    const onUpdateItem =() =>{
        if (window.confirm("수정하시겠습니까?")) {            
                history('/qnaupdate/'+hostqnaNo);
                // window.location.reload();
        }
    }

    // state
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
 
     // 서버에 요청해서 데이터 받아옴
     // state 값 저장
     const loadData = async () => {
         setLoading(true);
         const response = await axios.get('http://localhost:8080/qnadetailview/'+hostqnaNo);
         console.log(response.data);
         console.log(response.data.hostqnaDate);
         console.log(response.data.hostqnaDate.split('T')[0]);
         
         setQna({
            hostqnaNo:response.data.hostqnaNo,
            memNick:response.data.memNick,
            hostqnaTitle:response.data.hostqnaTitle,
            hostqnaInfo:response.data.hostqnaInfo,
            hostqnaDate:response.data.hostqnaDate.split('T')[0],
            hostqnaFaq:response.data.hostqnaFaq,
            hostqnaCom:response.data.hostqnaCom
         });
         setLoading(false);
     }
 
     // 렌더링할 때마다 호출 
     // 빈배열 : loadData() 한 번만 호출
     useEffect(() => {
         loadData();
     }, []);
 
 
     return (
        <div>

            <section class="board_wrap">
                <div class="board_title">
                    <strong>QnA 상세게시판</strong>
                </div>
                <div class="board_view_wrap">
                    <div class="board_view">
                        <div class="title">
                            제목 : {qna.hostqnaTitle}
                        </div>
                        <div class="info">
                            <dl>
                                <dt>번호</dt>
                                <dd>{qna.hostqnaNo}</dd>
                            </dl>
                            <dl>
                                <dt>글쓴이</dt>
                                <dd>{qna.memNick}</dd>
                            </dl>
                            <dl>
                                <dt>작성일</dt>
                                <dd>{qna.hostqnaDate}</dd>
                            </dl>                            
                        </div>
                        <div class="cont">
                            <br/><br/>
                            {qna.hostqnaInfo}
                            <br/><br/><br/>
                        </div>
                    </div>
                    <div class="bt_wrap">
                        <button onClick={onUpdateItem}>수정</button>
                        <button onClick={onDeleteItem}>삭제</button>
                    </div>
                </div>
            </section>

        </div>
     );
}

export default QnaDetailView;