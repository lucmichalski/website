import React from 'react';
import { Button } from 'antd'
import Link from 'next/link'
import Logo from '../assets/Logo'
import styled from 'styled-components'

const HeaderGroup = styled.header`
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  background: transparent;
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 100;

  &.HeaderOn {
    backdrop-filter: blur(20px);
    background: ${props => props.theme.bg.matt};
    border-bottom: 1px solid ${props => props.theme.bg.border};
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

type HeaderProps = {
  afterScroll: boolean;
};

class Header extends React.Component<HeaderProps> {

  state = {
    hasScrolled: false
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
  
    if (scrollTop > 5) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  
  render() {
    return (     
      <HeaderGroup className={(this.state.hasScrolled === true || this.props.afterScroll === false) && 'HeaderOn'}>
        <NavGroup>
          <a href="/">
            <Logo/>
          </a>
          <Link href={'/jobs/index'} as="/jobs">
            <Button type="link">Trouver un Job</Button>
          </Link>
          <Button type="primary">Se connecter</Button>
        </NavGroup>
      </HeaderGroup>
    )
  }
}

export default Header;