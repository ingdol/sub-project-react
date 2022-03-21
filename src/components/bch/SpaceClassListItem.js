import React from 'react';
import axios from 'axios';

function SpaceClassListItem(props) {
    return (
        <div>
            {props.space.spaceNo}
            {props.space.memNick}
            {props.class.classTitle}
        </div>
    );
}

export default SpaceClassListItem;