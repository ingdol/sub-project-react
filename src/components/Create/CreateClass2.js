import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ClassSelect from './ClassSelect';
import ClassCheck from './ClassCheck';
import './Class.css';
function CreateClass2(props) {
    return (
        <div>
            <table border="0" >
                <div className="CreateClass">
                    <tr><td colspan="2"><h3><img src="img/class.png" width="50px" height="50px" /><b> 클래스 개설</b></h3></td>

                    </tr>
                    <tr><td colspan="2"><hr width="900px" /></td></tr>
                    <tr><td><h4>개설할 클래스의 주소를 선택해주세요.</h4></td><td></td></tr>

                    <tr><td><Routes>
                        <Route path="/" element={<ClassSelect />} />
                    </Routes></td></tr>

                    <tr><td colspan="2"><br /><br /><br /><hr width="900px" /></td></tr>
                    <tr><td><h4>클래스의 카테고리를 선택해주세요.</h4></td></tr>
                    <tr><td><Routes>
                        <Route path="/" element={<ClassCheck />} />
                    </Routes></td></tr>
                </div>
            </table >
        </div >
    );
}

export default CreateClass2;