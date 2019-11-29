import { Row, Col, DemoBox } from 'antd';
import styled from 'styled-components'
import EmailForm from './EmailForm'
import HeroSlider from './HeroSlider'

const DesktopWidgetsGroup = styled.div`
  top: 0;
  position: absolute;
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

`;

const Hero = () => (
  <>
    <Row type="flex" justify="left" align="middle" style={{height: '100vh'}}>
      <Col xs={24} md={10}>
        <h1>Conversions widgets for busy marketers</h1>
        <p>The all-in-one tool to empower blogposts, landing pages or websites.
        Create, embed, test, and measure – with Grimp.</p>
        <EmailForm />
      </Col>
    </Row>
    <DesktopWidgetsGroup>
      <WidgetsHolder>
        <HeroSlider />
      </WidgetsHolder>
      <WidgetsHolder>
        <HeroSlider />
      </WidgetsHolder>
    </DesktopWidgetsGroup>
  </>
)

export default Hero;