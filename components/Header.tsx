import React from 'react';
import { Button } from 'antd'
import Link from 'next/link'
import Logo from '../assets/Logo'
import Nav from '../components/Nav'
import styled from 'styled-components'

const HeaderGroup = styled.header`
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  background: transparent;
  position: fixed;
  width: 100%;
  height: 80px;
  padding: 0px 80px;
  z-index: 100;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  &.HeaderOn {
    backdrop-filter: blur(20px);
    background: ${props => props.theme.bg.matt};
    border-bottom: 1px solid ${props => props.theme.bg.border};
  }
`

const ButtonsGroup = styled.div`
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;

  button {

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
        <a href="/">
          <Logo/>
        </a>
        <Nav />
        <ButtonsGroup>
          <Link href="/signup" as="/signup">
            <Button type="link">S'inscrire</Button>
          </Link>
          <Link href="/signin" as="/signin">
            <Button type="primary">Se connecter</Button>
          </Link>
        </ButtonsGroup>
      </HeaderGroup>
    )
  }
}

export default Header;