import React from 'react';
import DaumPostcode from "react-daum-postcode";

const PopupPostCode = (props) => {
    // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        document.getElementById('spaceArea').value = fullAddress
        props.onClose()
    }

    const postCodeStyle = {
        backgroundColor: "white",
        display: "block",
        position: "absolute",
        left: "46%",
        width: "400px",
        height: "300px",
        padding: "10px 40px 10px 10px ",
        border: "2px solid #8000ff",
        borderRadius: "10px",
    };

    return (
        <div>

            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
            <button onClick={() => { props.onClose() }} className='postCode_btn'><img src="img/X.png" width="30px" height="30px" /></button>
        </div>
    )
}

export default PopupPostCode;