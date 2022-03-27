import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import './Class2.css';
import './Space.css';
import axios from 'axios';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';


function CreateSpace2(props) {
    let history = useNavigate();

    const [spa, setSpa] = useState({
        spaceTitle: '',
        spaceInfo: '',
        memNick: sessionStorage.getItem("sessionNick"),
        spacePrice1: 0,
        spacePrice2: 0,
        spacePerNum: 0,
        spacePerMax: 0,

    });
    const [spaceArea, setSpaceArea] = useState("");
    const [spaceCtgNo, setSpaceCtgNo] = useState("");
    const onChange = (e) => {
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
        setSpa({
            ...spa, // 기존의 prd 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };
    const handleSelect = (e) => {
        setSpaceArea(e.target.value);
    };
    const handleSelect2 = (e) => {
        setSpaceCtgNo(e.target.value);
    };
    const onReset = () => {
        setSpa({
            spaceTitle: '',
            spaceInfo: '',
            spaceCtgNo: '',
            memNick: sessionStorage.getItem("sessionNick"),
            spacePrice1: 0,
            spacePrice2: 0,
            spacePerNum: 0,
            spacePerMax: 0,
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();

        var frmData = new FormData(document.SpaceInsert);

        axios.post('http://localhost:8080/Space/insert/', frmData)
            .then(
                response => {
                    alert("공간 개설이 완료되었습니다.");
                    history('/SpaceClassList'); //상품 정보 조회 화면으로 이동
                }
            );
    }
    // const Nick = sessionStorage.getItem("sessionNick")
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    // 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }

    // 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }

    return (
        <div >
            <form name="SpaceInsert" onSubmit={onSubmit} onReset={onReset}>
                <table border="0" className="checkboxa2" >
                    <div className="CreateSpace">
                        <tr><td colspan="2"><h3><img src="img/space.png" width="50px" height="50px" /><b> 공간 개설</b></h3></td>

                        </tr>
                        <tr><td colspan="2"><hr width="900px" /></td></tr>
                        <tr><td><input type="hidden" name="memNick" value={spa.memNick} onChange={onChange} />
                            <h4>개설할 공간의 주소를 선택해주세요.</h4></td><td></td></tr>

                        {/* <tr><td colspan="2"><select name="spaceArea" className="spaceArea" value={spaceArea} onChange={handleSelect}>
                            <option value={""} key={""}>시/도 선택</option>
                            <option value={"강원"} key={"강원"}>강원</option>
                            <option value={"경기"} key={"경기"}>경기</option>
                            <option value={"경남"} key={"경남"}>경남</option>
                            <option value={"경북"} key={"경북"}>경북</option>
                            <option value={"광주"} key={"광주"}>광주</option>
                            <option value={"대구"} key={"대구"}>대구</option>
                            <option value={"대전"} key={"대전"} >대전</option>
                            <option value={"부산"} key={"부산"}>부산</option>
                            <option value={"서울"} key={"서울"}>서울</option>
                            <option value={"울산"} key={"울산"} >울산</option>
                            <option value={"인천"} key={"인천"} >인천</option>
                            <option value={"전남"} key={"전남"}>전남</option>
                            <option value={"전북"} key={"전북"}>전북</option>
                            <option value={"제주"} key={"제주"}>제주</option>
                            <option value={"충남"} key={"충남"}>충남</option>
                            <option value={"충북"} key={"충북"}>충북</option>
                        </select> */}

                        <tr><td colspan="2"><input type="text" id="spaceArea" className="memAddress1" name="spaceArea" size="70" placeholder="직접 입력" readonly />
                            <button type='button' className="Addressbutton" onClick={openPostCode}>우편번호 검색</button>
                            <div id='popupDom'>
                                {isPopupOpen && (
                                    <PopupDom>
                                        <PopupPostCode onClose={closePostCode} />
                                    </PopupDom>
                                )}
                            </div>
                        </td></tr>

                        <tr><td colspan="2"><br /><br /><br /><hr width="900px" /></td></tr>
                        <tr><td><h4>당신의 공간은 어떤 공간입니까?</h4></td></tr>
                        <tr><td><select name="spaceCtgNo" className="spaceCtgNo" value={spaceCtgNo} onChange={handleSelect2}>
                            <option value="1">파티룸</option>
                            <option value="2">회의실</option>
                            <option value="3">펜션</option>
                            <option value="4">골프 연습장</option>
                            <option value="5">야외운동시설</option>
                            <option value="6">실내운동시설</option>
                            <option value="7">문화생활시설</option>
                        </select>
                        </td></tr>
                        <tr><td colspan="2"><br /><br /><hr width="900px" /></td></tr>
                        <tr><td colspan="2"><h4>당신의 공간을 소개해보세요.</h4></td></tr>
                        <tr><td colspan="2"><input type="text" name="spaceTitle" className="spaceTitle" placeholder="소개글의 제목을 입력해주세요."
                            onfocus="this.placeholder=''" onblur="this.placeholder='소개글의 제목을 입력해주세요.'" value={spa.spaceTitle} onChange={onChange} /></td></tr>
                        <tr><td colspan="2"><br /><textarea className="spaceInfo" name="spaceInfo" rows="15" cols="100" placeholder="당신의 공간을 소개해보세요."
                            onfocus="this.placeholder=''" onblur="this.placeholder='당신의 공간을 소개해보세요.'" value={spa.spaceInfo} onChange={onChange}></textarea></td></tr>
                        <tr><td colspan="2"><br /><hr width="900px" /><h4>공간 상세설정</h4></td></tr>
                        <tr><td colspan="2"><span className="pop">회원들이 공간을 대여하는데 필요한 최소 비용과 최대 비용을 적어주세요.<br /></span>
                            <input type="text" className="spacePrice1" name="spacePrice1" placeholder="최소 비용" /> ~
                            <input type="text" className="spacePrice2" name="spacePrice2" placeholder="최대 비용" /><br /></td></tr>
                        <tr><td colspan="2"><span className="pop">공간에 수용할 수 있는 인원의 범위를 적어주세요.<br /></span>
                            <input type="text" className="spacePerNum" name="spacePerNum" placeholder="최소 수용인원" /> ~
                            <input type="text" className="spacePerMax" name="spacePerMax" placeholder="최소 수용인원" /><br /><br /></td></tr>
                        {/* 
                        <tr><td colspan="2"><input type="file" name="file3" className="uploadFile3" accept="image/*" /></td></tr> */}

                        <tr><td colspan="2"><input type="submit" value="공간 개설하기" className="subbox2" onChange={onChange} /></td></tr>
                    </div>
                </table >
            </form>
        </div >
    );
}

export default CreateSpace2;