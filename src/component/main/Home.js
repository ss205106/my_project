import React, { useRef } from 'react';
import TextAnimation from './TextAnimation';
import styled from 'styled-components';
import "../../css/Home.css"
const Spacer = styled.div`
  height: 2.7rem;
`;

const Home = ({goodsTabs}) => {
    

  return (
    <div className='HomeBody'>
          <Spacer ref={goodsTabs[0].element}/>
        <div  className='HomeContent'>
            <div className='myProfile'>
                <img src='/img/myimg.png'/>
                <div style={{margin:"0 auto"}}>
                    <TextAnimation  />
                </div>
            </div>
           
      </div>

      <div ref={goodsTabs[1].element} style={{margin:"1300px"}}>
        리뷰
      </div>

      <div ref={goodsTabs[2].element}>
        상품 문의
      </div>
    </div>
  );
};

export default Home;
