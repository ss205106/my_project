import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  background: #f8f9fa; /* 배경색 조정 */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 조정 */
`;

const HeaderContent = styled.div`
  max-width: 1200px; /* 헤더 내용 최대 너비 설정 */
  margin: 0 auto; /* 가운데 정렬 */
  display: flex; /* 요소들을 가로로 나란히 배열 */
  justify-content: space-between; /* 요소들 사이에 공간을 최대한 분배 */
  align-items: center; /* 세로 가운데 정렬 */
  padding: 20px; /* 내부 여백 추가 */
`;

const Logo = styled.h1`
  color: #343a40; /* 로고 텍스트 색상 */
  font-size: 24px; /* 로고 텍스트 크기 */
  margin: 0; /* 로고 텍스트의 기본 마진 제거 */
`;

const Navigation = styled.nav`
  ul {
    list-style: none; /* 목록 기호 제거 */
    padding: 0; /* 내부 여백 제거 */
    display: flex; /* 메뉴 항목들을 가로로 나란히 배열 */
  }
  li {
    margin-left: 20px; /* 메뉴 항목들 간의 간격 설정 */
  }
  a {
    text-decoration: none; /* 링크 밑줄 제거 */
    color: #343a40; /* 링크 색상 */
    font-size: 18px; /* 링크 텍스트 크기 */
    transition: transform 0.2s ease-in-out; /* 부드러운 이동 효과 */
    
    &:hover {
      transform: translateY(-30px); /* 마우스 오버 시 위로 3px 이동 */
    }
  }
`;

const MainPage = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Main</Logo>
        <Navigation>
          <ul>
            <li><Link to='/'>메인</Link></li>
            <li><Link to='/store'>쇼핑몰</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default MainPage;