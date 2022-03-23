import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// 한 행
function LoginTestItem(props) {
    let history = useNavigate();

    //state
    const [mem, setMem] = useState({
        memId: '',
        memPw: ''
    });

    let [memId, setMemId] = useState('');
    function savaMemId() {
        var newArray = [...memId];
        newArray[0] = mem.memId;
        setMemId( newArray ); 
    }
    const onChange = (e) => {
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
        setMem({
            ...mem, // 기존의 prd 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    return (
        
        <div>
            
            <div>{props.prd.memId}</div>
            <div>{props.prd.memPw}</div>
            <input
                type="text"
                name="memId"
                value={mem.memId}
                onChange={onChange}/>
            <input
                type="text"
                name="memPw"
                value={mem.memPw}
                onChange={onChange} />
            <input onClick={()=>{ 
                { mem.memId === props.prd.memId&&mem.memPw === props.prd.memPw?alert(props.prd.memNick)  :alert("로그인 성공3")} }} value="등록" />
    </div>
    
    
    );
}

// 다음과 같이 해도 됨
// function ProductListItem( { prd }) {
//     return (
//         <div>
//             <tr>
//                 <td>{prd.prdNo}</td>
//                 <td>{prd.prdName}</td>
//                 <td>{prd.prdPrice}</td>
//                 <td>{prd.prdCompany}</td>
//                 <td>{prd.prdStock}</td>
//             </tr>
//         </div>
//     );
// }

export default LoginTestItem;