import React, { Component } from 'react';
import { Button } from 'antd'
import styled from 'styled-components'

const HeaderGroup = styled.header`
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  background: transparent;

  &.HeaderScrolled {
    position: fixed;
    width: 100%;
    height: 80px;
    background: white;
    z-index: 100;
    background: white;
    backdrop-filter: blur(20px);
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
  
  &.HeaderHidden {
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

class Header extends Component {

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
      <HeaderGroup className={(this.state.hasScrolled) === true && 'HeaderScrolled'}>
        <NavGroup className={(this.state.hasScrolled) === false && 'HeaderHidden'}>
          <a href="/">
            <img src="/logo-light.svg" alt="Logo Grimp"/>
          </a>
          <Button type="link" href="#" onClick={this.handleClick} >Intégration sur Demande</Button>
        </NavGroup>
      </HeaderGroup>
    )
  }
}

export default Header;