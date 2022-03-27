import React from 'react';
import { Link } from 'react-router-dom';

function QnaListItem(props) {
    console.log(window.sessionStorage.getItem("sessionNick"));
    console.log(window.sessionStorage.getItem("sessionId"));
    console.log(props.qna.memNick);
    return (
        <div>
            <div className="num">{props.qna.hostqnaNo}</div>
            <div className="title"><Link to={"/qnadetailview/" + props.qna.hostqnaNo +"/"+ props.qna.memNick}>{props.qna.hostqnaTitle}</Link></div>
            <div className="writer">{props.qna.memNick}</div>
            <div className="date">{props.qna.hostqnaDate.split('T')[0]}</div>
        </div>  
    );
}

export default QnaListItem;