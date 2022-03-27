import { useParams,useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QnaDetailView(props) {

    let history = useNavigate();   
    // 파라미터로 받아 온 값
    const {hostqnaNo} = useParams();
    const {memNick} = useParams();
    const sessionNick = window.sessionStorage.getItem("sessionNick");
    console.log('세션닉네임 : '+sessionNick+'/받아온 닉네임 : '+memNick);

    // 렌더링할 때마다 호출 
    // 빈배열 : loadData() 한 번만 호출
     useEffect(() => {
        loadData();
        console.log(props);
    }, []);
    

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
                window.location.reload();
        }
    }

    // state
     const [qna,setQna] = useState({
        hostqnaNo:hostqnaNo,
        memNick:memNick,
        hostqnaTitle:'',
        hostqnaInfo:'',
        hostqnaDate:'',
        hostqnaFaq:'',
        hostqnaCom:''
     });
     const [comment,setComment] = useState('');
     
     const [loading, setLoading] = useState(false);
 
     // 서버에 요청해서 데이터 받아옴
     // state 값 저장
     const loadData = async () => {
         setLoading(true);
         const response = await axios.get('http://localhost:8080/qnadetailview/'+hostqnaNo+'/'+memNick);
        //  console.log(response.data);
        //  console.log(response.data.hostqnaDate);
        //  console.log(response.data.hostqnaDate.split('T')[0]);
         console.log(response.data.memNick);
         console.log(sessionNick);
         
         setQna({
            hostqnaNo:response.data.hostqnaNo,
            memNick:response.data.memNick,
            hostqnaTitle:response.data.hostqnaTitle,
            hostqnaInfo:response.data.hostqnaInfo,
            hostqnaDate:response.data.hostqnaDate.split('T')[0],
            hostqnaFaq:response.data.hostqnaFaq,
            hostqnaCom:response.data.hostqnaCom
         });
         setComment(response.data.hostqnaCom);
         console.log(comment);
         //setLoading(false);
         console.log(qna.memNick);
         console.log(response.data.hostqnaCom);
     }

     console.log(comment);
     
     if(sessionNick === memNick && comment !== null){ // 1.수정o / 2.관리자답변o
     return (
            <div>
    
                <section className="board_wrap">
                    <div className="board_title">
                        <strong>QnA 상세게시판</strong>
                    </div>
                    <div className="board_view_wrap">
                        <div className="board_view">
                            <div className="title">
                                제목 : {qna.hostqnaTitle}
                            </div>
                            <div className="info">
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
                            <div className="cont">
                                <br/><br/>
                                {qna.hostqnaInfo}
                                <br/><br/><br/>
                            </div>
                            {/* ------------------------------------------- */}
                            <div className="contcomment">
                                <br/>
                                <div className='commentmain'><p>관리자</p></div>
                                <div className='commentinfo'>
                                <p>{qna.hostqnaCom}</p>
                                </div>
                                <br/>
                            </div>
                        </div>
                        <div className="bt_wrap">
                            <button onClick={onUpdateItem}>수정</button>
                            <button onClick={onDeleteItem}>삭제</button>
                        </div>
                    </div>
                </section>
    
            </div>
         );
     }

     else if(sessionNick !== memNick && comment !== null){ // 수정x / 관리자답변o
        return (
            <div>
    
                <section className="board_wrap">
                    <div className="board_title">
                        <strong>QnA 상세게시판</strong>
                    </div>
                    <div className="board_view_wrap">
                        <div className="board_view">
                            <div className="title">
                                제목 : {qna.hostqnaTitle}
                            </div>
                            <div className="info">
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
                            <div className="cont">
                                <br/><br/>
                                {qna.hostqnaInfo}
                                <br/><br/><br/>
                            </div>
                            <div className="contcomment">
                                <br/>
                                <div className='commentmain'><p>관리자</p></div>
                                <div className='commentinfo'>
                                <p>{qna.hostqnaCom}</p>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </section>
    
            </div>
         );
    }

    else if(sessionNick !== memNick && comment === null){ // 수정x / 관리자답변x
        return (
            <div>
    
                <section className="board_wrap">
                    <div className="board_title">
                        <strong>QnA 상세게시판</strong>
                    </div>
                    <div className="board_view_wrap">
                        <div className="board_view">
                            <div className="title">
                                제목 : {qna.hostqnaTitle}
                            </div>
                            <div className="info">
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
                            <div className="cont">
                                <br/><br/>
                                {qna.hostqnaInfo}
                                <br/><br/><br/>
                            </div>
                        </div>
                    </div>
                </section>
    
            </div>
         );
    }

    else{ // 수정o / 관리자답변x
        return (
            <div>
    
                <section className="board_wrap">
                    <div className="board_title">
                        <strong>QnA 상세게시판</strong>
                    </div>
                    <div className="board_view_wrap">
                        <div className="board_view">
                            <div className="title">
                                제목 : {qna.hostqnaTitle}
                            </div>
                            <div className="info">
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
                            <div className="cont">
                                <br/><br/>
                                {qna.hostqnaInfo}
                                <br/><br/><br/>
                            </div>
                        </div>
                        <div className="bt_wrap">
                            <button onClick={onUpdateItem}>수정</button>
                            <button onClick={onDeleteItem}>삭제</button>
                        </div>
                    </div>
                </section>
    
            </div>
         );
    }
}

export default QnaDetailView;