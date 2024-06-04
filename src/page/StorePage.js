import React from 'react';
import Header from '../common/Header'
import SlideDiv from '../component/item/SlideDiv';
import styled from "styled-components";
import product from "../component/item/product.json"
import palette from '../common/Pallete';
import Carousel from '../common/Carousel';
import Footer from '../common/Footer';
import { Detail_item } from '../modules/sotreRedux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const itemClick=(id,img)=>{
        // console.log(img)
        if(img==="img1"){
            dispatch(Detail_item(id,"item1"))
        }else if(img === "img2"){
            dispatch(Detail_item(id,"item2"))
        }else if(img === "img3"){
            dispatch(Detail_item(id,"item3"))
        }
        
        navigate("/ItemPage")
    }
    return (
            <>
            <Header/>
            <div id="body" >
                <CarouselDiv>
                    <Carousel/>
                </CarouselDiv>
                <div id='itemContainer' style={{backgroundColor:`${palette.Gray[1]}`}}>
                    <Div>
                        <SlideDiv title="벨트" count={6} product={product.itme2} img="img2" itemClick={itemClick}/>
                    </Div>
                    <Div>
                        <SlideDiv title="스트랩" count={6} product={product.itme1} img="img1" itemClick={itemClick}/>
                    </Div>
                    <Div>
                        <SlideDiv title="스트랩" count={6} product={product.itme3} img="img3" itemClick={itemClick}/>
                    </Div>
                </div>
            </div>
            <Footer />
            </>
            
    );
};

export default StorePage;