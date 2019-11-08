import { Col } from 'antd';
import styled from 'styled-components'
import EmailForm from './EmailForm'

const BodyWrapper = styled.div`
  text-align: center;
`

const Heading = () => (
  <div style={{paddingTop: "120px"}}>
    <Col span={12} offset={6}>
      <BodyWrapper>
        <h1>Enpower content startegy conversion</h1>
        <h4>The all-in-one tool dedicated to content-centric marketers.
        Create, embed, test, and measure – with Grimp.</h4>
        <EmailForm />
      </BodyWrapper>
    </Col>
  </div>
)

export default Heading;