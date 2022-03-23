import React from 'react';
import { Link } from 'react-router-dom';

function QnaListItem(props) {
    return (
        <div>
            <div class="num">{props.qna.hostqnaNo}</div>
            <div class="title"><Link to={"/qnadetailview/" + props.qna.hostqnaNo}>{props.qna.hostqnaTitle}</Link></div>
            <div class="writer">{props.qna.memNick}</div>
            <div class="date">{props.qna.hostqnaDate.split('T')[0]}</div>
        </div>  
    );
}

export default QnaListItem;