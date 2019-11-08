import { Col } from 'antd';
import styled from 'styled-components'

const BodyWrapper = styled.div`
  text-align: center;
`
const Title = styled.h1`
  background-color: #072F47;
`

const EarlyAccessEmail = styled.div`
  background-color: #072F47;
`

const Heading = () => (
  <div style={{paddingTop: "120px"}}>
    <Col span={12} offset={6}>
      <BodyWrapper>
        <Title>Enpower content startegy conversion</Title>
        <h4>The all-in-one tool dedicated to content-centric marketers.
        Create, embed, test, and measure – with Grimp.</h4>
        <EarlyAccessEmail>hi</EarlyAccessEmail>
      </BodyWrapper>
    </Col>
  </div>
)

export default Heading;