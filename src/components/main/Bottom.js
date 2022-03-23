import React from 'react';
import './Bottom.css';

function Bottom(props) {
    return (
        <div className='footerBox'>
            <div className="bottomMenuBox1">
                Daily&Linker
            </div>
            <div><table className="footerTable1">
                        <tr><td className="footerTitle1" colspan = "2">고객센터</td></tr>
                        <tr><td className="footerText1">이메일</td><td>cs@daliylinker.com</td></tr>
                        <tr><td className="footerText1">고객센터</td><td>02-123-4567</td></tr>
                        <tr><td className="footerText1">업무시간</td><td>평일 10:00 - 17:00 (점심 12:00 - 13:00)</td></tr></table></div>
                    <hr className="footerHr" />
                    <div><table className="footerTable2">
                            <tr><td className="footerTitle2" colspan = "2">Daily&Linker</td></tr>
                            <tr><td className="footerText2" colspan = "2">(주)데일리앤링커 | 사업자 등록번호 : 123-45-67890</td></tr>
                            <tr><td className="footerText2" colspan = "2">대표 : 코딩라이트  |  개인정보 관리 책임자 : 코딩라이트</td></tr>
                            <tr><td className="footerText2" colspan = "2">㈜데일리앤링커은 통신판매중개자로서 거래당사자가 아니며, 호스트가 등록한 상품정보 및 거래에 대해 ㈜프렌트립은 일체의 책임을 지지 않습니다.<br/>
                                NICEPAY 안전거래 서비스 : 고객님의 안전거래를 위해 현금 결제 시, 저희 사이트에서 가입한 구매안전 서비스를 이용할 수 있습니다.</td></tr>
                    </table></div>
                    <div className="bottomMenuBox2">
                        이용약관&nbsp;|&nbsp;개인정보처리방침&nbsp;|&nbsp;위치기반 서비스
                    </div>
        </div>
    );
}

export default Bottom;