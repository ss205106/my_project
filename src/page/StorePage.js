import React from 'react';
import Header from '../common/Header'
import SlideDiv from '../component/item/SlideDiv';
import styled from "styled-components";
import product from "../component/item/product.json"
import palette from '../common/Pallete';
import Carousel from '../common/Carousel';
import Footer from '../common/Footer';
const Div=styled.div`
  width:810px;
  margin:0px auto;
  overflow: hidden;
  height: 250px;
`
const CarouselDiv = styled.div`
margin-bottom:30px;
`
const StorePage = () => {
    return (
            <>
            <Header/>
            <div id="body" >
                <CarouselDiv>
                    <Carousel/>
                </CarouselDiv>
                <div id='itemContainer' style={{backgroundColor:`${palette.Gray[1]}`}}>
                    <Div>
                        <SlideDiv title="벨트" count={6} product={product.itme1} img="img2"/>
                    </Div>
                    <Div>
                        <SlideDiv title="스트랩" count={6} product={product.itme2} img="img1"/>
                    </Div>
                </div>
            </div>
            <Footer />
            </>
            
    );
};

export default StorePage;