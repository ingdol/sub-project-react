import React from 'react';
import { Link } from 'react-router-dom';

function QnaListItem(props) {
    return (
            <tr>
                <td>{props.qna.hostqnaNo}</td>
                <td>{props.qna.memNick}</td>
                <td><Link to={"/qnadetailview/" + props.qna.hostqnaNo}>{props.qna.hostqnaTitle}</Link></td>
                <td>{props.qna.hostqnaDate}</td>
            </tr>
    );
}

export default QnaListItem;