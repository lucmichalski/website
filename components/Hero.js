import { Row, Col, DemoBox } from 'antd';
import styled from 'styled-components'
import EmailForm from './EmailForm'
import HeroSlider from './HeroSlider'

const DesktopWidgetsGroup = styled.div`
  bottom: 0;
  left: 650px;
  overflow-y: hidden;
  position: absolute;
  top: 0;
  display: -ms-flexbox;
  display: flex;

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