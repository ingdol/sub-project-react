import React from 'react';
import axios from 'axios';
import './SpaceClassList.css';

function ClassListItem(props) {
    return (
        <span id='wrap'>
            <img src={props.class.classPhoto}/>
            <span id='SpaceCard'>
                <p id='title'>{props.class.classTitle}</p>
                <p id='area'>{props.class.classArea}</p>
                <button class='fixBtn'>수정</button>
            </span>
        </span>
    );
}

export default ClassListItem;