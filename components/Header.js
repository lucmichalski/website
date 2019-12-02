import React, { Component } from 'react';
import styled from 'styled-components'

const HeaderGroup = styled.header`
  height: 80px;
  width: 100%;
`

const NavGroup = styled.nav`
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  height: 100%;

  @media (min-width: 768px) { 
    padding: 0px 80px;
  }

`

class Header extends Component {

  render() {
    return (
      <HeaderGroup>
        <NavGroup>
          <a href="/">
            <img src="/logo-dark.svg" alt="Logo Grimp"/>
          </a>
        </NavGroup>
      </HeaderGroup>
    )
      
  }
}

export default Header;