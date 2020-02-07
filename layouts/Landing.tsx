import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Content = styled.main`
  padding: 0 20px 20px;

  @media (min-width: 768px) { 
    padding: 0px 40px 20px;
  }

`;

const LandingLayout = ({ children }) => (
  <div>
    <Header afterScroll={true} />
    <Content>
      { children }
    </Content>
    <Footer />
  </div>
)

export default LandingLayout