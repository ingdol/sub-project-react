import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Class2.css';
import './box.css'
function inbox(props) {
    return (

        <div className="inbox">
            <table border="0" border-spacing="30px">
                <tr><Link to="/CreateClass"><td><div className="inbox-2">
                    <h2>클래스 개설</h2><br />
                    <h3>클래스를 만들어보세요</h3>
                    클래스를 만들어 당신이 만든<br />
                    멋진 강의를 많은 사람들에게 보여주세요!<br /><br />
                    ＊호스트 권한이 필요합니다.
                </div></td></Link>
                    <Link to="/CreateSpace"><td><div className="inbox-2">
                        <h2>공간 개설</h2><br />
                        <h3>당신의 공간을 등록해보세요.</h3><br />
                        당신이 소유한 공간을 소개하고<br />
                        많은 사람들이 이용할 수 있도록 해보세요!<br />
                    </div>
                    </td></Link></tr>
            </table>

        </div >


    );
}

export default inbox;