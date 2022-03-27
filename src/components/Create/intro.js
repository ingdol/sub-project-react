import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Inbox from './inbox';

import './Class2.css';

function intro(props) {


    return (
        <div>
            <ul>
                <li>
                    <br />
                    <br /><br /><br />
                </li>
            </ul>



            <Routes>
                <Route path="/" element={<Inbox />} />

            </Routes>
        </div>
    );
}

export default intro;