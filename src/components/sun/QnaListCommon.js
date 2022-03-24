import React from 'react';
import { Link } from 'react-router-dom';
import './Qna.css';
import './Qnacommon.css';

function QnaListCommon(props) {
    var faq = props.qna.hostqnaFaq;
    console.log(faq);

    if(faq===0){
        return (
            <div className='common'>
                <div className="num">FAQ</div>
                <div className="title"><Link to={"/qnadetailview/" + props.qna.hostqnaNo+"/"+props.qna.memNick}>{props.qna.hostqnaTitle}</Link></div>
                <div className="writer"></div>
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