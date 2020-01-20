import React, { Component } from 'react';
import { Button, Menu } from 'antd'
import Logo from './Logo'
import styled from 'styled-components'

const HeaderGroup = styled.header`
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  background: transparent;

  &.HeaderOn {
    position: fixed;
    width: 100%;
    height: 80px;
    z-index: 100;
    backdrop-filter: blur(20px);
    background: ${props => props.theme.bg.matt};
  }
`


const NavGroup = styled.nav`
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0px 20px;
  height: 100%;
  
  &.HeaderOff {
    display: none;
  }

  @media (min-width: 768px) { 
    padding: 0px 80px;
  }
  
`

declare global {
  interface Window {
    Calendly: any;
  }
}

type HeaderProps = {
  afterScroll: boolean;
};

class Header extends React.Component<HeaderProps> {

  state = {
    hasScrolled: false
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
  
    if (scrollTop > 1000) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  handleClick(e) {
    e.preventDefault();
    window.Calendly.initPopupWidget({url: 'https://calendly.com/grimp/demo'});
    return false;
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  
  render() {
    return (     
      <HeaderGroup className={(this.state.hasScrolled === true || this.props.afterScroll === false) && 'HeaderOn'}>
        <NavGroup className={(this.state.hasScrolled === false && this.props.afterScroll === true) && 'HeaderOff'}>
          <a href="/">
            <Logo/>
          </a>
          <Button type="link" href="#" onClick={this.handleClick} >Intégration sur Demande</Button>
        </NavGroup>
      </HeaderGroup>
    )
  }
}

export default Header;