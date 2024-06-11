import React from 'react';
import { useSelector } from 'react-redux';
import "../css/Mypage.css"
import Header from '../common/Header';
import Footer from '../common/Footer';
import { FaRegUserCircle } from "react-icons/fa";
const MyPage = () => {
    const {user} = useSelector(state=>({
        user:state.user.user
    }))
    return (
        <div>
            <Header/>
            <div id="mypageBody">
                <div className='myContent'>
                    <ul className='list'>
                        <li>주문조회</li>
                        <li>위시 리스트</li>
                        <li>취소/교환/반품</li>
                        <li>포인트</li>
                        <li>1:1문의</li>
                        <li>정보수정</li>
                        <li>회원탈퇴</li>
                    </ul>
                    <div className='userBody'>
                        <div className='userContent'>
                            <div className='userprofile'>
                                <FaRegUserCircle id='icon'/>
                                <div>
                                    <h4>{user.username}님 안녕하세요.</h4>
                                    <p>누적 구매금액:0원</p>
                                </div>
                            </div>
                            <div className='point'>
                                <p>포인트</p>
                                <h1>1,000P</h1>
                            </div>
                        </div>
                        <div className='userItem'>
                            <h1>장바구니</h1>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MyPage;