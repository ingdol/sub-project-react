import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpaceListItem from './SpaceListItem';
import ClassListItem from './ClassListItem';

function SpaceClassList(props) {
    // state
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [loading, setLoading] = useState(false);

    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/SpaceClassList');
        console.log(response.data);
        setData(response.data.space);
        setData2(response.data.class);
        setLoading(false);
    }

    const postSession = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/SessionForList');
    }

    // 렌더링할 때마다 호출 
    // 빈배열 : loadData() 한 번만 호출
    useEffect(() => {
        axios.post(
            'http://localhost:8080/SessionForList', 
            { 
                sNick : window.sessionStorage.getItem("sessionNick")
            }) 
            .then(function (response) {
                 console.log(response); 
                }) 
            .catch(error => { 
                console.log('error : ',error.response) 
            });
            setTimeout( () => {
                loadData()
            }, 50);
        // loadData();
    }, []);
    return (
        <div>
            <h2>내 공간</h2>
            {
                Object.keys(data).length === 0
                ? <h1 class="none">등록된 공간이 없습니다.</h1>
                : data.map(function (space, i) {
                    return <SpaceListItem space={space} key={i} />
                })
            }
            <hr id='SpaceClassLine' />
            <h2>내 클래스</h2>
            {
                Object.keys(data2).length === 0
                ? <h1 class="none">등록된 클래스가 없습니다.</h1>
                : data2.map(function (class2, i) {
                    return <ClassListItem class={class2} key={i} />
                })
                
            }

        </div>
    );
}

export default SpaceClassList;