import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './SpaceClassList.css';

function SpaceClassListItem(props) {
    return (
        <span id='wrap'>
            <div>
                {
                    props.space.spacePhoto === ''
                        ? <img src={"img/default.png"} />
                        : <img src={"img/"+props.space.spacePhoto} />
                }
            </div>
            <span id='SpaceCard'>
                <p id='title'>{props.space.spaceTitle}</p>
                <p id='area'>{props.space.spaceArea}</p>
                <Link to={"/UpdateSpace/" + props.space.spaceNo}><button class='fixBtn'>수정</button></Link>
            </span>
        </span>
    );
}

export default SpaceClassListItem;