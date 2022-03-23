import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoginTestItem from './LoginTestItem';

function LoginTest(props) {
    // state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/viewMemberList');
        console.log(response.data);
        setData(response.data.memList);
        setLoading(false);
    }

    // 렌더링할 때마다 호출 
    // 빈배열 : loadData() 한 번만 호출
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            
                <div>
                    {
                        data.map(function (prd, i) {
                            return <LoginTestItem prd={prd} key={i} />
                        })
                    }
                </div>
        </div>
    );
}

export default LoginTest;