import React from "react";
import Slider from "react-slick";
import styled from '@emotion/styled';

const SliderItem = styled.div`
  border-radius: 20px;
  height: 200px;
  width: 315px;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  margin-bottom: 40px;
  margin-bottom: 40px;
  transition: all 250ms ease-out;
  
  & > img {
    width: 100%;
    height: 100%;
  }
`;

class HeroSlider extends React.Component {
  render() {
    var settings = {
      vertical: true,
      swipe: false,
      arrows: false,
      cssEase: 'linear',
      autoplay: true, 
      autoplaySpeed: 0,
      speed: 750,
      pauseOnHover: true,
      slidesToShow: 2,
      infinite: true,
      slidesToScroll: 0.1
    };
    return (
      <Slider {...settings}>
        <SliderItem>
          <img src="http://placekitten.com/g/400/200" />
        </SliderItem>
        <SliderItem>
          <img src="http://placekitten.com/g/400/200" />
        </SliderItem>
        <SliderItem>
          <img src="http://placekitten.com/g/400/200" />
        </SliderItem>
        <SliderItem>
          <img src="http://placekitten.com/g/400/200" />
        </SliderItem>
      </Slider>
    );
  }
}

export default HeroSlider;