import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Carousel.css'

const Carousel = () => {
   const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 2000, // 필요에 따라 조정
       arrows: false,
   };
   return (
    <Slider {...settings}>
        <div className="image-container">   
            <img src="/img/img1.png"
                 style={{ width: '60%', height: '260px', margin: '5px auto'}}
                 alt="Image 1" />
        </div>
        <div className="image-container">
            <img src="/img/img2.png"
                 style={{ width: '60%', height: '260px',  margin: '5px auto' }}
                 alt="Image 2" />
        </div>
        <div className="image-container">
            <img src="/img/img3.png"
                 style={{ width: '60%', height: '260px', margin: '5px auto'}}
                 alt="Image 3" />
        </div>
        {/* 필요에 따라 추가 이미지 슬라이드를 더 넣어주세요 */}
    </Slider>
);
};
export default Carousel;