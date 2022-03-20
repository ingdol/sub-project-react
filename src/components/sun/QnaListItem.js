import React from 'react';
import { Link } from 'react-router-dom';

function QnaListItem({qnaList}) {
    return (
        <div>
            <tr>
                <td><Link to={"/qnaDetailView/" + qnaList.hostqnaNo}>{qnaList.hostqnaNo}</Link></td>
                <td>{qnaList.memNick}</td>
                <td>{qnaList.hostqnaTitle}</td>
                <td>{qnaList.hostqnaDate}</td>
            </tr>
        </div>
    );
}

export default QnaListItem;