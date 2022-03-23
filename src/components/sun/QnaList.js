import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import QnaListItem from './QnaListItem';
import './Qna.css';
import QnaListCommon from './QnaListCommon';

function QnaList(props) {
    // state
    // useState([]) 임!! 배열에 담음!! 주의...
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/qnalist');
        console.log(response.data);
        console.log(response.data.qnaList);
        setData(response.data.qnaList);
        setLoading(false);
    }

    // 렌더링할 때마다 호출 
    // 빈배열 : loadData() 한 번만 호출
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>

            <div className="board_wrap">
                <div className="board_title">
                    <strong>QnA 게시판</strong>
                </div>
                <div class="board_list_wrap">
                    <div className="board_list">
                        <div className="top">
                            <div className="num">번호</div>
                            <div className="title">제목</div>
                            <div className="writer">글쓴이</div>
                            <div className="date">작성일</div>
                        </div>
                            {
                                data.map(function (qna, i) {
                                    return <QnaListCommon qna={qna} key={i} />
                                })
                            }
                            {
                                data.map(function (qna, i) {
                                    return <QnaListItem qna={qna} key={i} />
                                })
                            }    
                    </div>
                    <div className="btn">
                        <Link to="/qnaInsert"><div className='qnatop1'>QnA등록</div></Link>
                    </div>        
                </div>
            </div>

        </div>
    );
}

export default QnaList;