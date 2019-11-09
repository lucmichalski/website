import React, { Component } from 'react';
import styled from 'styled-components'

const HeaderGroup = styled.header`
  width: 1040px;
  max-width: 100%;
  padding: 0 20px;
  margin: auto;
  position: relative;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  z-index: 101;
  height: 80px;

  @media (min-width: 951px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
`

class Header extends Component {

  render() {
    return (
      <HeaderGroup>
        <a href="/">
          <img src="/logo.svg" alt="Logo Grimp"/>
        </a>
      </HeaderGroup>
    )
      
  }
}

export default Header;