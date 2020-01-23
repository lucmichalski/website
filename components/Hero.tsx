import { Row, Col } from 'antd';
import styled from 'styled-components'
import EmailForm from './EmailForm'
import Logo from './Logo'

const StyledRow = styled(Row)`
  padding: 40px 0px 40px;
`

const HeadingGroup = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  h1 {
    text-align: center;
  }

  p {
    @media only screen and (min-width: 768px) { 
      font-size: 26px;
    }
    font-family: Roboto Mono;
		color: ${props => props.theme.text.grey};
		font-size: 24px;
		font-weight: 400;
		line-height: 1.4;
		margin-bottom: 40px;
		text-align: center;
	}

  .logo {
    text-align: center;
    margin-bottom: 60px;
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
          <Logo height="48px" width="148px" />
        </div>
        <h1>Trouvez la meilleure version de votre site web</h1>
        <p>Testez les sections qui convertissent le mieux  
        grâce à une incroyable librairie de widgets marketing</p>
        <EmailForm />
      </HeadingGroup>
    </Col>
  </StyledRow>
)

export default Hero;