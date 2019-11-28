import { Row, Col, DemoBox } from 'antd';
import styled from 'styled-components'
import EmailForm from './EmailForm'
import HeroSlider from './HeroSlider'

const WidgetsGroup = styled.div`
  bottom: 0;
  left: 650px;
  overflow-y: hidden;
  position: absolute;
  top: 0;
  display: -ms-flexbox;
  display: flex;
`;

const WidgetsHolder = styled.div`
  margin-right: 40px;
`;

const Hero = () => (
  <Row type="flex" align="middle">
    <Col xs={24} md={12}>
      <h1>Empower content strategy conversions</h1>
      <p>The all-in-one tool dedicated to content-centric marketers.
      Create, embed, test, and measure – with Grimp.</p>
      <EmailForm />
    </Col>
    <WidgetsGroup>
      <WidgetsHolder>
        <HeroSlider />
      </WidgetsHolder>
      <WidgetsHolder>
        <HeroSlider />
      </WidgetsHolder>
    </WidgetsGroup>
  </Row>
)

export default Hero;