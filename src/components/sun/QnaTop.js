import { Link } from 'react-router-dom';
import './Qna.css';

function QnaTop(props) {
    return (
        <div>
            <div className='qnatop'>
                <Link to="/qnalist"><div className='qnatop1'>QnA리스트</div></Link>
                <Link to="/qnaInsert"><div className='qnatop1'>QnA등록</div></Link>
            </div>
        </div >
    );
}

export default QnaTop;