import { Link, Routes, Route } from 'react-router-dom';
import QnaList from './QnaList';
import QnaInsert from './QnaInsert';
import './Qna.css';
import QnaDetailView from './QnaDetailView';
import QnaUpdate from './QnaUpdate';

function QnaTop(props) {
    return (
        <div>
            <div className='qnatop'>
                {/* <Link to="/sunmain"><div className='qnatop1'>홈</div></Link> */}
                <a href="/"><div className='qnatop1'>홈</div></a>
                <Link to="/qnalist"><div className='qnatop1'>QnA리스트</div></Link>
                <Link to="/qnaInsert"><div className='qnatop1'>QnA등록</div></Link>
            </div>
            <Routes>
                {/* <Route path="/sunmain" element={<Sun />} /> */}
                <Route path="/qnalist" element={<QnaList/>} />
                <Route path="/qnaInsert" element={<QnaInsert />} />
                <Route path="/qnadetailview/:hostqnaNo" element={<QnaDetailView></QnaDetailView>} />
                <Route path="/qnaupdate/:hostqnaNo" element={<QnaUpdate></QnaUpdate>} />
            </Routes>
        </div >
    );
}

export default QnaTop;