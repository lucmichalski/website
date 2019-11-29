import { Row, Col } from 'antd';
import styled from 'styled-components'
import EmailForm from './EmailForm'
import DesktopSlider from './sliders/DesktopSlider'
import MobileSlider from './sliders/MobileSlider'

const DesktopWidgetsGroup = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 650px;
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;

  @media (max-width: 768px) { 
    display: none;
  }
`;

const WidgetsHolder = styled.div`
  margin-right: 40px;
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
        <h1>Conversions widgets for busy marketers</h1>
        <p>The all-in-one tool to empower blogposts, landing pages or websites.
        Create, embed, test, and measure – with Grimp.</p>
        <EmailForm />
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