import { Row, Col } from 'antd';
import styled from 'styled-components'
import EmailForm from './EmailForm'
import DesktopSlider from './sliders/DesktopSlider'
import MobileSlider from './sliders/MobileSlider'

const HeadingGroup = styled.div`
  margin-top: 40px;

  @media (min-width: 768px) { 
    margin-top: 80px;
  }
`;

const DesktopWidgetsGroup = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 720px;
  overflow-y: hidden;
  display: -ms-flexbox;
  display: flex;

  @media (max-width: 768px) { 
    display: none;
  }
`;

const WidgetsHolder = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  margin-right: 40px;
  width: 315px;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const MobileWidgetsGroup = styled.div`
  @media (min-width: 769px) { 
    display: none;
  }
`;

const Hero = () => (
  <>
    <Row type="flex" justify="start" align="middle">
      <Col xs={24} md={10}>
        <HeadingGroup>
          <h1>Conversions widgets for busy marketers</h1>
          <p>The all-in-one tool to empower blogposts, landing pages or websites.
          Create, embed, test, and measure – with Grimp.</p>
          <EmailForm />
        </HeadingGroup>
      </Col>
    </Row>
    <DesktopWidgetsGroup>
      <WidgetsHolder>
        <DesktopSlider />
      </WidgetsHolder>
      <WidgetsHolder>
        <DesktopSlider />
      </WidgetsHolder>
    </DesktopWidgetsGroup>
    <MobileWidgetsGroup>
      <MobileSlider />
    </MobileWidgetsGroup>
  </>
)

export default Hero;