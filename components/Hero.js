import { Row, Col, DemoBox } from 'antd';
import styled from 'styled-components'
import EmailForm from './EmailForm'
import HeroSlider from './HeroSlider'

const WidgetsGroup = styled.div`
  display: -ms-flexbox;
  display: flex;
`;

const WidgetsHolder = styled.div`
  margin-right: 40px;
`;

const Hero = () => (
  <Row type="flex" justify="center" align="middle">
    <Col xs={24} md={12}>
      <h1>Empower content strategy conversions</h1>
      <p>The all-in-one tool dedicated to content-centric marketers.
      Create, embed, test, and measure – with Grimp.</p>
      <EmailForm />
    </Col>
    <Col xs={24} md={12}>
      <WidgetsGroup>
        <WidgetsHolder>
          <HeroSlider />
        </WidgetsHolder>
        <WidgetsHolder>
          <HeroSlider />
        </WidgetsHolder>
      </WidgetsGroup>
    </Col>
  </Row>
)

export default Hero;