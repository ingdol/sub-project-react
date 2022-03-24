import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Class.css';

function UpdateClass(props) {
    // (1) Part1 : classNo 해당되는 상품 정보 받아오기 
    // detailView와 동일

    // 파라미터로 받아 온 값
    const { classNo } = useParams();

    //state
    const [Class, setClass] = useState({
        classNo: '',
        memNick: '',
        classArea: '',
        hobbyNo: '',
        classTitle: '',
        classInfo: ''
    });
    const [classArea, setClassArea] = useState("");

    const [loading, setLoading] = useState(false);

    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/DetailClass/' + classNo);
        console.log(response.data);
        setClass({
            classNo: response.data.classNo,
            memNick: response.data.memNick,
            classArea: response.data.classArea,
            hobbyNo: response.data.hobbyNo,
            classTitle: response.data.classTitle,
            classInfo: response.data.classInfo
        });
        setLoading(false);
    }

    // 렌더링할 때마다 호출 
    // 빈배열 : loadData() 한 번만 호출
    useEffect(() => {
        loadData();
    }, []);

    // (2) Part2 : 폼에 입력된 값을 전송하고 DB 업데이트
    // insert와 유사 (Mapping Url만 다름고 onChange, onReset, onSubmit 동일)
    const onChange = (e) => {
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
        setClass({
            ...Class, // 기존의 prd 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const handleSelect = (e) => {
        setClassArea(e.target.value);
    };

    const onReset = () => {
        setClass({
            classNo: '',
            memNick: '',
            classArea: '',
            hobbyNo: '',
            classTitle: '',
            classInfo: ''
        })
    };

    let history = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        var frmUpdate = new FormData(document.ClassInsert);

        axios.post('http://localhost:8080/UpdateClass', frmUpdate)
            .then(
                response => {
                    alert("수정 완료");
                    history('/SpaceClassList'); // 클래스 공간 조회 화면으로 이동
                }
            );
    }

    return (
        <div >
            <form name="ClassInsert" onSubmit={onSubmit} onReset={onReset}>
                <input type="hidden" value={Class.classNo} Name="classNo" onChange={onChange} />
                <table border="0" className="checkboxa2" >
                    <div className="CreateClass">
                        <tr><td colspan="2"><h3><img src="img/class.png" width="50px" height="50px" /><b> 클래스 개설</b></h3></td>

                        </tr>
                        <tr><td colspan="2"><hr width="900px" /></td></tr>
                        <tr><td><input type="hidden" Name="memNick" value={Class.memNick} className="memNick" onChange={onChange} />
                            <h4>개설할 클래스의 주소를 선택해주세요.</h4></td><td></td></tr>

                        <tr><td colspan="2"><select name="classArea" className="classArea" onChange={handleSelect}>
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
                        </select>
                        </td></tr>

                        <tr><td colspan="2"><br /><br /><br /><hr width="900px" /></td></tr>
                        <tr><td><h4>클래스의 카테고리를 선택해주세요.</h4></td></tr>
                        <tr><td><input type="radio" id="toggle3-1" className="toggle3-1" name="hobbyNo" value="1" onChange={onChange} />
                            <label for="toggle3-1" ><img src="img/1.jpg" width="100px" height="100px" /></label>
                            <input type="radio" id="toggle3-2" className="toggle3-2" name="hobbyNo" value="2" onChange={onChange} />
                            <label for="toggle3-2"><img src="img/2.jpg" width="100px" height="100px" /></label>
                            <input type="radio" id="toggle3-3" className="toggle3-3" name="hobbyNo" value="3" onChange={onChange} />
                            <label for="toggle3-3"><img src="img/3.jpg" width="100px" height="100px" /></label>
                            <input type="radio" id="toggle3-4" className="toggle3-4" name="hobbyNo" value="4" onChange={onChange} />
                            <label for="toggle3-4"><img src="img/4.jpg" width="100px" height="100px" /></label><br />
                            <input type="radio" id="toggle3-5" className="toggle3-5" name="hobbyNo" value="5" onChange={onChange} />
                            <label for="toggle3-5"><img src="img/5.jpg" width="100px" height="100px" /></label>
                            <input type="radio" id="toggle3-6" className="toggle3-6" name="hobbyNo" value="6" onChange={onChange} />
                            <label for="toggle3-6"><img src="img/6.jpg" width="100px" height="100px" /></label>
                            <input type="radio" id="toggle3-7" className="toggle3-7" name="hobbyNo" value="7" onChange={onChange} />
                            <label for="toggle3-7"><img src="img/7.jpg" width="100px" height="100px" /></label>
                            <input type="radio" id="toggle3-8" className="toggle3-8" name="hobbyNo" value="8" onChange={onChange} />
                            <label for="toggle3-8"><img src="img/8.jpg" width="100px" height="100px" /></label>
                            <input type="radio" id="toggle3-9" className="toggle3-9" name="hobbyNo" value="9" onChange={onChange} />
                            <label for="toggle3-9"><img src="img/9.jpg" width="100px" height="100px" /></label></td></tr>
                        <tr><td colspan="2"><br /><br /><hr width="900px" /></td></tr>
                        <tr><td colspan="2"><h4>자신의 클래스를 소개해보세요.</h4></td></tr>
                        <tr><td colspan="2"><input type="text" name="classTitle" className="classTitle" placeholder="소개글의 제목을 입력해주세요."
                            onfocus="this.placeholder=''" onblur="this.placeholder='소개글의 제목을 입력해주세요.'" value={Class.classTitle} onChange={onChange} /></td></tr>
                        <tr><td colspan="2"><br /><textarea id="classInfo" name="classInfo" rows="15" cols="100" placeholder="클래스에 대한 설명을 입력해주세요"
                            onfocus="this.placeholder=''" onblur="this.placeholder='클래스에 대한 설명을 입력해주세요'" value={Class.classInfo} onChange={onChange}></textarea></td></tr>
                        <tr><td colspan="2"><input type="submit" id="subbox" value="클래스 수정하기" className="subbox" onChange={onChange} /></td></tr>
                    </div>
                </table >
            </form>
        </div >
    );
}

export default UpdateClass;