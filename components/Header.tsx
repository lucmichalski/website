import React, { Component } from 'react';
import styled from 'styled-components'

const HeaderGroup = styled.header`
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &.HeaderHidden {
      background: transparent;
    }

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

  @media (min-width: 768px) { 
    padding: 0px 80px;
  }
`

class Header extends Component {

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
  
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  state = {
    hasScrolled: false
  }
  
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <HeaderGroup className={this.state.hasScrolled ? 'HeaderScrolled' : 'HeaderHidden'}>
        <NavGroup>
          <a href="/">
            <img src="/logo-light.svg" alt="Logo Grimp"/>
          </a>
        </NavGroup>
      </HeaderGroup>
    )
  }
}

export default Header;