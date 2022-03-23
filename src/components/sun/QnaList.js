import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QnaListItem from './QnaListItem';
import './Qna.css';

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

            <div class="board_wrap">
                <div class="board_title">
                    <strong>QnA 게시판</strong>
                </div>
                <div class="board_list_wrap">
                    <div class="board_list">
                        <div class="top">
                            <div class="num">번호</div>
                            <div class="title">제목</div>
                            <div class="writer">글쓴이</div>
                            <div class="date">작성일</div>
                        </div>
                            {
                                data.map(function (qna, i) {
                                    return <QnaListItem qna={qna} key={i} />
                                })
                            }            
                    </div>
                </div>
            </div>

        </div>
    );
}

export default QnaList;