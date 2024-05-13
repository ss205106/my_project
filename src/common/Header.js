import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/Header.css"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div id="header1">
                <div className='box1'>
                    <input type='text' name='search' placeholder='검색'/>
                    <ul className={menuOpen ? 'ulBox1 active' : 'ulBox1'}>
                        <li><Link to="/">로그인</Link></li>
                        <li><Link to="/">회원가입</Link></li>
                        <li><Link to="/">마이페이지</Link></li>
                        <li><Link to="/">장바구니</Link></li>
                    </ul>
                </div>
            </div>
            <div id="header2">
                <div className='box2'>
                <Link to="/">로고</Link>
                    <ul className={menuOpen ? 'ulBox2 active' : 'ulBox2'}>
                        <li><Link to="/">SHOP</Link></li>
                        <li><Link to="/">커뮤니티</Link></li>
                        <li><Link to="/">문의게시판</Link></li>
                        <li><Link to="/">구매후기</Link></li>
                    </ul>
                </div>
            </div>
            <button className="navbar__toggleBtn" onClick={toggleMenu}>Menu</button>
        </>
    );
};

export default Header;