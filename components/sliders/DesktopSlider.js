import React from "react";
import Slider from "react-slick";
import styled from '@emotion/styled';

const SliderItem = styled.div`
  border-radius: 20px;
  width: 315px;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  margin-bottom: 40px;
  transition: all 250ms ease-out;
  height: 100%;
  
  & > img {
    width: 100%;
    height: 100%;
  }
`;

class DesktopSlider extends React.Component {
  render() {
    var settings = {
      vertical: true,
      arrows: false,
      cssEase: 'linear',
      autoplay: true, 
      autoplaySpeed: 0,
      speed: 500,
      pauseOnHover: true,
      slidesToShow: 4,
      slidesToScroll: 0.1,
      infinite: false
    };
    return (
      <Slider {...settings}>
        <SliderItem>
          <img src="/widget1.png" alt="Widget Grimp"/>
        </SliderItem>
        <SliderItem>
          <img src="/widget2.png" alt="Widget Grimp"/>
        </SliderItem>
        <SliderItem>
          <img src="/widget3.png" alt="Widget Grimp"/>
        </SliderItem>
        <SliderItem>
          <img src="/widget4.png" alt="Widget Grimp"/>
        </SliderItem>
        <SliderItem>
          <img src="/widget5.png" alt="Widget Grimp"/>
        </SliderItem>
        <SliderItem>
          <img src="/widget6.png" alt="Widget Grimp"/>
        </SliderItem>
      </Slider>
    );
  }
}

export default DesktopSlider;