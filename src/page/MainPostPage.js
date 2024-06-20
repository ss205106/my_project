import React, { useRef } from 'react';
import MainHeader from "../common/MainHeader.js"
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import "../css/MainPost.css"
const Spacer = styled.div`
  height: 2.7rem;
`;
const MainPostPage = () => {
    function useMoveScroll() {
        const element = useRef(null);
        const navigate = useNavigate()
        const onMoveToElement = () => {
            navigate("/")
          element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
        return { element, onMoveToElement };
      }
    
      const goodsTabs = {
        0: { ...useMoveScroll(), name: 'Home' },
        1: { ...useMoveScroll(), name: 'About' },
        2: { ...useMoveScroll(), name: 'Portfolio' },
      };
    
    return (
        <div>
            <MainHeader goodsTabs={goodsTabs}/>
            <Spacer/>
            <div id='MPbody'>
                <div className='MPContent'>
                    <h2>Redux</h2>
                    <p>리덕스는 가장 많이 사용하는 리액트 상태 관리 라이브러리입니다.<br/>
                        리덕스를 사용하면 컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜서 더욱 
                        효율적으로 관리할 수 있습니다. 또한, 컴포넌트끼리 똑같은 상태를 공유해야 할 때도 여러 
                        컴포넌트를 거치지 않고 손쉽게 상태 값을 전달하거나 업데이트할 수 있습니다.
                    </p>
                    <div className='MPimgBox'>
                        <img src='/img/redux1.PNG'/>
                        <img src='/img/redux2.PNG'/>
                        <img src='/img/redux3.PNG'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPostPage;