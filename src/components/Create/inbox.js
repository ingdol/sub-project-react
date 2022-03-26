import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Class2.css';
import './box.css'
import axios from 'axios';

function Inbox(props) {
    // state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/HostCheck');
        console.log(response.data);
        setData(response.data);
        setLoading(false);
    }

    const postSession = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/SessionFourList');
    }

    // 렌더링할 때마다 호출 
    // 빈배열 : loadData() 한 번만 호출
    useEffect(() => {
        axios.post(
            'http://localhost:8080/SessionFourList',
            {
                sNick: window.sessionStorage.getItem("sessionNick")
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(error => {
                console.log('error : ', error.response)
            });
        setTimeout(() => {
            loadData()
        }, 100);
        // loadData();
    }, []);

    const oncheck = (e) => {
        if (data === 0) {
            alert("호스트 권한이 필요합니다.");
            window.location.replace("/hostsign");
        }
        else {
            window.location.replace("/CreateClass");
        }
    }
    const oncheck2 = (e) => {
        if (data === 0) {
            alert("호스트 권한이 필요합니다.");
            window.location.replace("/hostsign");
        }
        else {
            window.location.replace("/CreateSpace");
        }
    }


    return (

        <div className="inbox">
            <table border="0" className="tabler">
                <tr><td width="400px">
                    <button className="inbox-2" onClick={oncheck}>
                        <h1>클래스 개설</h1><br />
                        <h2>클래스를 만들어보세요</h2>
                        클래스를 만들어 당신이 만든<br />
                        멋진 강의를 많은 사람들에게 보여주세요!<br /><br />
                        ＊호스트 권한이 필요합니다.
                    </button></td>
                    <td width="400px"><button className="inbox-2" onClick={oncheck2}>
                        <h1>공간 개설</h1><br />
                        <h2>당신의 공간을 등록해보세요.</h2>
                        당신이 소유한 공간을 소개하고<br />
                        많은 사람들이 이용할 수 있도록 해보세요!<br /><br />
                        ＊호스트 권한이 필요합니다.
                    </button>
                    </td></tr>
            </table>

        </div >


    );
}

export default Inbox;