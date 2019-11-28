import React, { Component } from 'react';
import styled from 'styled-components'

const HeaderGroup = styled.header`
  position: fixed;
  z-index: 999;
  height: 80px;
  width: 100%;
`

const NavGroup = styled.nav`
  padding: 0px 20px;
  height: 100%;
`

const NavList = styled.ul`
  height: 100%;
  display: flex;
  margin: auto;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;

  & > a {
    padding: 12px 0px;
  }
  
  @media (min-width: 768px) { 
    padding: 0px 60px;
  }
`

class Header extends Component {

  render() {
    return (
      <HeaderGroup>
        <NavGroup>
          <NavList>
            <li>
              <a href="/">
                <img src="/logo-dark.svg" alt="Logo Grimp"/>
              </a>
            </li>
          </NavList>
        </NavGroup>
      </HeaderGroup>
    )
      
  }
}

export default Header;