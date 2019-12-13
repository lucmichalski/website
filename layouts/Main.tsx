import Header from '../components/Header'
import styled from 'styled-components'

const Content = styled.main`
  padding: 0 20px;

  @media (min-width: 768px) { 
    padding: 0px 80px;
  }

`;

const MainLayout: React.FunctionComponent = ({ children }) => (
  <div>
    <Header/>
    <Content>
      { children }
    </Content>
  </div>
)

export default MainLayout