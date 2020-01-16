import { Row, Col } from 'antd';
import styled from 'styled-components'
import EmailForm from './EmailForm'

const StyledRow = styled(Row)`
  padding: 80px 0px 40px;
`

const HeadingGroup = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  h1, p {
    text-align: center;
  }

  .logo {
    text-align: center;
    margin-bottom: 60px;
    
    img {
      height: 48px;
    }
  }

  @media (min-width: 768px) { 
    margin-top: 80px;
  }
`;

const Hero = () => (
  <StyledRow type="flex" justify="center" align="middle">
    <Col xs={24} md={18}>
      <HeadingGroup>
        <div className="logo">
          <img src="/logo-light.svg" alt="Logo Grimp"/>
        </div>
        <h1>Trouvez la meilleure version de votre site web</h1>
        <p>Testez les sections qui convertissent le mieux  
        grâce à une incroyable librarie de widgets marketing</p>
        <EmailForm />
      </HeadingGroup>
    </Col>
  </StyledRow>
)

export default Hero;