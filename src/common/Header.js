import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../css/Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            if (menuOpen && window.innerWidth > 625) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [menuOpen]);


    return (
        <header>
            <section className="hbody">
                <article className="nav">
                    <div className="title">
                        <Link to="/"><h1>BRAND</h1></Link>
                    </div>
                    <ul id="menu1" className={menuOpen ? 'open' : ''}>
                        <li><Link to="/store">stroe</Link></li>
                        <li><Link to="/notice">커뮤니티</Link></li>
                        <li><Link to="/contact">문의게시판</Link></li>
                        <li><Link to="/contact">구매후기</Link></li>
                    </ul>
                    <ul id="menu2">
                        <li><Link to="/store">stroe</Link></li>
                        <li><Link to="/">커뮤니티</Link></li>
                        <li><Link to="/notice">문의게시판</Link></li>
                        <li><Link to="/contact">구매후기</Link></li>
                    </ul>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} className="fas" />
                    </div>
                    <ul id="menu3">
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/register">회원가입</Link></li>
                        <li><Link to="/contact">마이페이지</Link></li>
                    </ul>
                </article>
            </section>
        </header>
    );
};

export default Header;