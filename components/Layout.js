import React, { Component } from 'react';
import styled from 'styled-components'

const HeaderGroup = styled.header`
  height: 80px;
  width: 100%;
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