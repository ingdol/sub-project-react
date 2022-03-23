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
            <h3>QnA 게시판</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>글번호</th>
                        <th>글쓴이</th>
                        <th>제목</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(function (qna, i) {
                            return <QnaListItem qna={qna} key={i} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default QnaList;