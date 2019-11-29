import styled from 'styled-components';

const Slider = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 200px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

`;

const SliderItem = styled.div`
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  margin-top: 40px;
  margin-right: 40px;
  margin-bottom: 60px;
  min-width: 100%;
  
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const MobileSlider = () => (
  <>
    <Slider>
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
  </>
)

export default MobileSlider;