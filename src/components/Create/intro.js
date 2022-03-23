import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Inbox from './inbox';

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

            </Routes>
        </div>
    );
}

export default intro;