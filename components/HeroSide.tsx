import { Row, Col, Button } from 'antd';
import styled from 'styled-components'
import Logo from './Logo'

const HeroGroup = styled.div`
  margin-bottom: 40px;

  .logo {
    text-align: center;
    margin-bottom: 60px;
  }

  @media (min-width: 768px) { 
    margin-top: 80px;
  }
`

const HeadingGroup = styled.div`
  h1 {
    @media only screen and (min-width: 768px) { 
      text-align: left;
    }
    text-align: center;
    font-size: 42px;
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
	}
`;

const ButtonGroup = styled.div`
  margin-top: 12px;

  button {
    @media only screen and (min-width: 768px) {
      width: auto;
    }
    width: 100%;
  }
`

const VisualGroup = styled.div`
  @media only screen and (min-width: 768px) {
    margin-right: -80px;
  }
`


type HeroProps = { 
  title: string,
  description: string,
  button: any,
  visualOrder: number, 
  contentOrder: number,
}

const HeroSide = ({ title, description, button, visualOrder, contentOrder }: HeroProps) => {
  return (
    <HeroGroup>
      <div className="logo">
        <Logo height="48px" width="148px" />
      </div>
      <Row type="flex" justify="center" align="middle">
        <Col xs={{span: 24}} md={{span: 12, order: visualOrder}}>
          <HeadingGroup>
            <h1>{title}</h1>
            <p>{description}</p>
            <ButtonGroup>
              <Button type={button.type} size="large">{button.text}</Button>
            </ButtonGroup>
          </HeadingGroup>
        </Col>
        <Col xs={{span: 0}} md={{span: 10, order: contentOrder, offset: 2}}>
          <VisualGroup>
            <img src="/screen-optimize.png" width="100%" />
          </VisualGroup>
        </Col>
      </Row>
    </HeroGroup>
  )
}

export default HeroSide;