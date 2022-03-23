import React from 'react';
import { Link } from 'react-router-dom';
import './Qna.css';

function QnaListCommon(props) {
    var faq = props.qna.hostqnaFaq;
    console.log(faq);

    if(faq==0){
        return (
            <div>
                <div className="num">FAQ</div>
                <div className="title"><Link to={"/qnadetailview/" + props.qna.hostqnaNo}>{props.qna.hostqnaTitle}</Link></div>
                <div className="writer">{props.qna.memNick}</div>
                <div className="date">{props.qna.hostqnaDate.split('T')[0]}</div>
            </div>  
        );
    }
    else {
        return(
            <div className="dnone"></div>
        );
    }
}

export default QnaListCommon;