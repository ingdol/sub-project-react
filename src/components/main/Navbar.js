import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import { useNavigate } from 'react-router-dom';
import daily from './img/logo.jpg'

function Navbar(props) {

    let history = useNavigate();
    /* 클릭하기 전 false = bar모양 */
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    /* 클릭 이벤트가 오면 click 값 바꿈 */
    const handleClick = () => setClick(!click);
    /* 다른 버튼 누르면 메뉴창 닫힘 */
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if (window.sessionStorage.getItem('sessionId') === null) {
            console.log('isLogin ?? :: ', isLogin)
        } else {
            setIsLogin(true)
            console.log('isLogin ?? :: ', isLogin)
        }
    })

    const onLogout = () => {
        // sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
        window.sessionStorage.removeItem('sessionId')
        window.sessionStorage.removeItem('sessionNick')
        setIsLogin(false)
        history('/');
    }

    return (
        <div className='NavBar'>
            <IconContext.Provider value={{ color: '#40A6FB' }}>
                <div className="navbar">

                    {/* 메뉴바 */}
                    <div className="menu-icon" onClick={handleClick}>
                        {/* 메뉴바 클릭하면 true일때 x 모양, false일때 bar 모양 */}
                        {click ? <FaTimes /> : <FaBars />}
                    </div>

                    {isLogin ?
                        <div className="navbar-container container">
                            <Link to='/' className='navbar-log' onClick={props.closeMobileMenu}>
                                <div className="logoImgDiv">
                                    <img className="logoImg" src={daily} />
                                </div>
                            </Link>
                            {/* 메뉴리스트 */}
                            <ul className={props.click ? 'nav-menu active' : 'nav-menu'}>
                                <li className='nav-item'>
                                    <Link to='/Intro' className='nav-links' onClick={closeMobileMenu}>
                                        CREATE
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/SpaceClassList' className='nav-links' onClick={closeMobileMenu}>
                                        MY
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/QnaList' className='nav-links' onClick={closeMobileMenu}>
                                        Q&A
                                    </Link>
                                </li>
                                <li className='nav-btn'>
                                    {/* {button ? ( */}
                                    <Button buttonStyle='btn--outline'
                                        type='button'
                                        onClick={onLogout}>LOGOUT</Button>

                                    { /* ) : (
                                    <Link to='/sign-up' className='btn-link' >
                                        <Button buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'
                                            onClick={closeMobileMenu}>SIGN UP</Button>
                                    </Link>
                                )} */}

                                </li>
                            </ul>
                        </div> :
                        <LogoutNav></LogoutNav>
                    }
                </div>
            </IconContext.Provider>
        </div>

    );
}

function LoginNav(props) {
    return (
        <div className="navbar-container container">
            <Link to='/' className='navbar-log' onClick={props.closeMobileMenu}>
                <div className="logoImgDiv">
                    <img className="logoImg" src={daily} />
                </div>
            </Link>
            {/* 메뉴리스트 */}
            <ul className={props.click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/Intro' className='nav-links' onClick={props.closeMobileMenu}>
                        CREATE
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/SpaceClassList' className='nav-links' onClick={props.closeMobileMenu}>
                        MY
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/QnaList' className='nav-links' onClick={props.closeMobileMenu}>
                        Q&A
                    </Link>
                </li>
                <li className='nav-btn'>
                    {/* {button ? ( */}
                    <Button buttonStyle='btn--outline'
                        type='button'
                        onClick={props.onLogout}>LOGOUT</Button>

                    { /* ) : (
                                <Link to='/sign-up' className='btn-link' >
                                    <Button buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'
                                        onClick={closeMobileMenu}>SIGN UP</Button>
                                </Link>
                            )} */}

                </li>
            </ul>
        </div>
    );
}

function LogoutNav(props) {
    return (
        <div className="navbar-container container">
            <Link to='/' className='navbar-log' onClick={props.closeMobileMenu}>
                <div className="logoImgDiv">
                    <img className="logoImg" src={daily} />
                </div>
            </Link>
            {/* 메뉴리스트 */}
            <ul className={props.click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/SpaceClassListAll' className='nav-links' onClick={props.closeMobileMenu}>
                        ALL
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/QnaList' className='nav-links' onClick={props.closeMobileMenu}>
                        Q&A
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/signin' className='nav-links' onClick={props.closeMobileMenu}>
                    호스트 신청
                    </Link>
                </li>
                <li className='nav-btn'>
                    {/* {button ? ( */}
                    <Link to='/signin' className='btn-link' >
                        <Button buttonStyle='btn--outline'
                            onClick={props.closeMobileMenu}>LOGIN</Button>
                    </Link>
                    { /* ) : (
                                <Link to='/sign-up' className='btn-link' >
                                    <Button buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'
                                        onClick={closeMobileMenu}>SIGN UP</Button>
                                </Link>
                            )} */}

                </li>
            </ul>
        </div>
    );
}

export default Navbar;