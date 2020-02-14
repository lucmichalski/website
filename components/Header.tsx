import React from 'react';
import { Button } from 'antd'
import Link from 'next/link'
import Logo from '../assets/Logo'
import Nav from '../components/Nav'
import styled from 'styled-components'

interface ThemeProps {
  readonly defaultTheme: string;
};

const HeaderGroup = styled.header<ThemeProps>`
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

    svg {
      path {
        fill: ${props => props.theme.text.primary};
      }
    }

    .theme-color {
      color: ${props => props.theme.text.primary};
    }

    .btn-rounded {
      border-radius: 22px;
    }

  }

  @media only screen and (min-width: 768px) {
    path {
      fill: ${props => (props.defaultTheme === "light") && "white"};
    }

    .theme-color {
      color: ${props => (props.defaultTheme === "light") && "white"};
    }
  }
  
`

const ButtonsGroup = styled.div`
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

type HeaderProps = {
  afterScroll: boolean;
  defaultTheme: string;
};


class Header extends React.Component<HeaderProps> {
  static defaultProps = {
    afterScroll: false,
    defaultTheme: "dark"
  };
  
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
      <HeaderGroup 
        className={(this.state.hasScrolled === true || this.props.afterScroll === false) && 'HeaderOn'}
        defaultTheme={this.props.defaultTheme}
      >
        <a href="/">
          <Logo/>
        </a>
        <Nav />
        <ButtonsGroup>
          <Link href="/signup" as="/signup">
            <Button type="link" className="theme-color">S'inscrire</Button>
          </Link>
          <Link href="/signin" as="/signin">
            <Button type="primary" className="btn-rounded">Se connecter</Button>
          </Link>
        </ButtonsGroup>
      </HeaderGroup>
    )
  }
}

export default Header;