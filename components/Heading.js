import { Row, Col, DemoBox } from 'antd';
import styled from 'styled-components'
import EmailForm from './EmailForm'

const BodyWrapper = styled.div`
  text-align: center;
`

const Heading = () => (
  <Row type="flex" justify="center" align="middle" style={{paddingTop: "120px"}}>
    <Col xs={20} md={12}>
      <BodyWrapper>
        <h1>Enpower content strategy conversions</h1>
        <h4>The all-in-one tool dedicated to content-centric marketers.
        Create, embed, test, and measure – with Grimp.</h4>
        <EmailForm />
      </BodyWrapper>
    </Col>
  </Row>
)

export default Heading;