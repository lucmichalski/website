import Header from '../components/Header'
import Footer from '../components/Footer'
import { Row, Col } from 'antd'
import styled from 'styled-components'

const Content = styled.main`
  padding: 0 20px;

  @media (min-width: 768px) { 
    padding: 0px 80px;
  }
`

const Hero = styled(Row)`
  padding-top: 10rem;
  padding-bottom: 3rem;
`

const Page = ({ children }) => (
  <div>
    <Header afterScroll={false} />
    <Content>
      <Hero type="flex" justify="center" align="middle">
        <Col xs={24} md={10}>
          <h1>Playbooks</h1>
        </Col>
      </Hero>
      { children }
    </Content>
    <Footer />
  </div>
)

export default Page