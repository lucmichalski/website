import React from 'react'
import { Row, Col, Button } from 'antd';
import styled from 'styled-components'
import Logo from './Logo'

const HeroGroup = styled.div`
  .logo {
    text-align: center;
    margin-top: 40px;
  }
`

const HeadingGroup = styled.div`
  h1 {
    @media only screen and (min-width: 768px) { 
      text-align: left;
    }
    text-align: center;
    font-size: 42px;
    margin-top: 40px;
  }

  p {
    @media only screen and (min-width: 768px) { 
      text-align: left;
    }
    font-family: Roboto Mono;
		color: ${props => props.theme.text.grey};
		font-size: 20px;
		font-weight: 400;
		line-height: 32px;
    margin-bottom: 1rem;
    text-align: center;
    max-width: 90%;
	}
`;

const StyledButton = styled(Button)`
  @media only screen and (min-width: 768px) {
    width: auto;
  }
  width: 100%;
  margin-top: 12px;
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

class HeroSide extends React.Component<HeroProps> {

  handleClick(e) {
    e.preventDefault();
    window.Calendly.initPopupWidget({url: 'https://calendly.com/grimp/demo'});
    return false;
  }

  render() {
    return (
      <HeroGroup>
        <div className="logo">
          <Logo height="39px" width="122px" />
        </div>
        <Row type="flex" justify="center" align="middle">
          <Col xs={{span: 24}} md={{span: 12, order: this.props.visualOrder}}>
            <HeadingGroup>
              <h1>{this.props.title}</h1>
              <p>{this.props.description}</p>
              <StyledButton type={this.props.button.type} size="large" onClick={this.handleClick} >{this.props.button.text}</StyledButton>
            </HeadingGroup>
          </Col>
          <Col xs={{span: 0}} md={{span: 10, order: this.props.contentOrder, offset: 2}}>
            <VisualGroup>
              <img src="/screen-optimize.png" width="100%"/>
            </VisualGroup>
          </Col>
        </Row>
      </HeroGroup>
    )
  }
}

export default HeroSide;