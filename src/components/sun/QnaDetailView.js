import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QnaDetailView(props) {
     // 파라미터로 받아 온 값
     const {hostqnaNo} = useParams();

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
 
     // 렌더링할 때마다 호출 
     // 빈배열 : loadData() 한 번만 호출
     useEffect(() => {
         loadData();
     }, []);
 
 
     return (
         <div>
             <h3>QnA상세조회</h3> 
             <h6>{qna.hostqnaNo}</h6>
             <h6>{qna.memNick}</h6>
             <h6>{qna.hostqnaTitle}</h6>
             <h6>{qna.hostqnaInfo}</h6>
             <h6>{qna.hostqnaFaq}</h6>
             <h6>{qna.hostqnaDate}</h6>
             <h6>{qna.hostqnaCom}</h6>
         </div>
     );
}

export default QnaDetailView;