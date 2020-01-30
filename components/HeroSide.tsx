import React from 'react'
import { Row, Col, Button } from 'antd';
import styled from 'styled-components'
import Logo from '../assets/Logo'

const HeroGroup = styled.div`
  background: ${props => props.theme.bg.matt};
  padding: 60px 0;
  
  @media (min-width: 768px) { 
    margin: 0 -80px;
    padding: 60px 0 80px 80px;
  }

  .logo {
    text-align: center;
  }
`

const HeadingGroup = styled.div`
  h1 {
    @media only screen and (min-width: 768px) { 
      text-align: left;
    }
    text-align: center;
    margin-top: 40px;
  }

  p {
    @media only screen and (min-width: 768px) { 
      text-align: left;
      max-width: 90%;
    }
    font-size: 22px;
    text-align: center;
	}
`;

const ButtonsGroup = styled.div`

`

const StyledButton = styled(Button)`
  @media only screen and (min-width: 768px) {
    width: auto;
  }
  width: 100%;
  margin-top: 12px;
`


type HeroProps = { 
  title: string,
  description: string,
  buttons: any,
  visualOrder: number, 
  contentOrder: number,
}

class HeroSide extends React.Component<HeroProps> {

  handleClick(e) {
    e.preventDefault();
    window.Calendly.initPopupWidget({url: 'https://calendly.com/grimp/demo'});
    return false;
  }

  render() {

    const { title, description, buttons } = this.props
    console.log(buttons)
    return (
      <HeroGroup>
        <div className="logo">
          <Logo height="39px" width="122px" />
        </div>
        <Row type="flex" justify="center" align="middle">
          <Col xs={{span: 24}} md={{span: 12, order: this.props.visualOrder}}>
            <HeadingGroup>
              <h1>{title}</h1>
              <p>{description}</p>
              <ButtonsGroup>
                {buttons.map((button) => (
                  <StyledButton type={button.type} size="large" onClick={this.handleClick}>{button[`text_fr`]}</StyledButton>
                ))}
              </ButtonsGroup>
            </HeadingGroup>
          </Col>
          <Col xs={{span: 0}} md={{span: 10, order: this.props.contentOrder, offset: 2}}>
            <img src="/screen-optimize.png" width="100%"/>
          </Col>
        </Row>
      </HeroGroup>
    )
  }
}

export default HeroSide;