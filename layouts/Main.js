import Meta from '../components/meta'
import Header from '../components/header'
import styled from 'styled-components'

const Content = styled.main`
  padding: 0 20px;

  @media (min-width: 768px) { 
    padding: 0px 80px;
  }

`;

export default ({ children }) => (
  <div>
    <Meta />
    <Header/>
    <Content>
      { children }
    </Content>
  </div>
)