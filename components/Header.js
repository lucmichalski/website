import React, { Component } from 'react';
import styled from 'styled-components'

const HeaderGroup = styled.header`
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.5rem 1rem;
  background-color: #072F47; 
  color: #fff;
  margin-bottom: 1rem;
  justify-content: space-between!important
`

class Header extends Component {

  render() {
    return (
      <HeaderGroup>
        <h1 className="header-title">
          <a href="/">
            <img src="https://angulaire.io/wp-content/uploads/2019/08/Logo-white.svg" alt="Logo Grimp"/>
          </a>
        </h1>
      </HeaderGroup>
    )
      
  }
}

export default Header;