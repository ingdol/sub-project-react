import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Inbox from './inbox';
import CreateClass from './CreateClass';
import CreateClass2 from './CreateClass2';
import './Class.css';
function intro(props) {


    return (
        <div>
            <ul>
                <li>
                    <b>개설 페이지</b>

                </li>
            </ul>
            <hr />
            <Routes>
                <Route path="/" element={<Inbox />} />
                <Route path="/CreateClass" element={<CreateClass />} />
                <Route path="/CreateClass2" element={<CreateClass2 />} />
            </Routes>
        </div>
    );
}

export default intro;