import { Link, Routes, Route } from 'react-router-dom';
import QnaList from './QnaList';
import QnaInsert from './QnaInsert';
import Sun from './Sun';
import './Qna.css';
import QnaDetailView from './QnaDetailView';

function QnaTop(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">[홈] </Link>
                </li>
                <li>
                    <Link to="/qnalist">전체QnA리스트</Link>
                </li>
                <li>
                    <Link to="/qnaInsert">QnA등록</Link>
                </li>
            </ul >

            <hr />
            <Routes>
                <Route path="/" element={<Sun />} />
                <Route path="/qnalist" element={<QnaList/>} />
                <Route path="/qnaInsert" element={<QnaInsert />} />
                <Route path="/qnadetailview/:hostqnaNo" element={<QnaDetailView />} />
            </Routes>
        </div >
    );
}

export default QnaTop;