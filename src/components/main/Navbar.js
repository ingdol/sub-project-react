import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar(props) {
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

    return (
        <div className='NavBar'>
        <IconContext.Provider value={{ color: '#40A6FB' }}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className='navbar-log' onClick={closeMobileMenu}>
                        <div className="logoImgDiv">
                            <img className="logoImg" src="img/logo.jpg" />
                        </div>
                    </Link>
                    {/* 메뉴바 */}
                    <div className="menu-icon" onClick={handleClick}>
                        {/* 메뉴바 클릭하면 true일때 x 모양, false일때 bar 모양 */}
                        { click ? <FaTimes /> : <FaBars /> }
                    </div>
                    {/* 메뉴리스트 */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                CREATE
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                MY
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Q&A
                            </Link>
                        </li>
                        <li className='nav-btn'>
                            {button ? (
                                <Link to='/sign-up' className='btn-link' >
                                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                </Link>
                            ) : (
                                <Link to='/sign-up' className='btn-link' >
                                    <Button buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'
                                        onClick={closeMobileMenu}>SIGN UP</Button>
                                </Link>
                            )}

                        </li>
                    </ul>
                </div>
            </div>
        </IconContext.Provider>
        </div>
        
    );
}

export default Navbar;