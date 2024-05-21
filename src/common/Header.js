import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import "../css/Header.css";
import { CiDumbbell } from "react-icons/ci";

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
        <nav className='navbar'>
        <div className='navbar_logo'>
            <CiDumbbell size={35} color="blue" className='icon_logo' />
            <h2>BRAND</h2>
        </div>
            <ul id='navbar_menu' className={menuOpen ? 'open' : ''}>
                <li><Link to="store">store</Link></li>
                <li><Link to="#">커뮤니티</Link></li>
                <li><Link to="#">문의게시</Link></li>
                <li><Link to="#">구매후기</Link></li>
            </ul>

            <ul id='navbar_menu2' className={menuOpen ? 'open' : ''}>
                <li><Link to="#">로그인</Link></li>
                <li><Link to="#">마이페이지</Link></li>
            </ul>
            <GiHamburgerMenu className='icon_hamburger' onClick={toggleMenu}/>
    </nav>
    );
};

export default Header;