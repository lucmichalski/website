import { Row, Col, Button, Icon } from 'antd'
import styled from 'styled-components'
import Logo from './Logo'
import DarkModeToggle from './DarkModeToggle'
import LocaleSwitcher from './LocaleSwitcher'

const FooterGroup = styled.footer`
  background: ${props => props.theme.bg.matt};
  border-top: 1px solid ${props => props.theme.bg.border};
  padding: 140px 80px 30px;
`

const LeftGroup = styled.div`
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`
const RightGroup = styled.div`
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`

const LogoGroup = styled.div`
  margin-right: 12px;
`

const IconsGroup = styled.div`
  margin-right: 20px;

  .ant-btn {
    padding: 0 10px;
  }
  
  a {
    color: #333; 
  }
  

`

const CopyrightGroup = styled.div`
  p, a {
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    color: #666;
    margin-bottom: 0;
    margin-right: 5px;
  }

  a:hover {
    color: rgb(68, 68, 68);
  }

`

const Footer = () => {
  return (
    <FooterGroup>
      <Row type="flex" justify="center" align="middle">
        <Col xs={24} md={12}>
          <LeftGroup>
            <LogoGroup>
              <Logo />
            </LogoGroup>
            <DarkModeToggle />
          </LeftGroup>
        </Col>
        <Col xs={24} md={12}>
          <RightGroup>
            <IconsGroup>
              <Button type="link" size="large" href="https://linkedin.com" target="_blank" rel="noopener">
                <Icon type="linkedin" theme="filled"/>
              </Button>
              <Button type="link" size="large" href="https://twitter.com" target="_blank" rel="noopener">
                <Icon type="twitter"/>
              </Button>
              <Button type="link" size="large" href="https://facebook.com" target="_blank" rel="noopener">
                <Icon type="facebook" theme="filled"/>
              </Button>
              <Button type="link" size="large" href="https://instagram.com/" target="_blank" rel="noopener">
                <Icon type="instagram" theme="filled"/>
              </Button>
            </IconsGroup>
            <CopyrightGroup>
              <p>Copyright © 2020 <a href="https://angulaire.io" target="_blank" rel="noopener">Angulaire</a></p>
            </CopyrightGroup>
            <LocaleSwitcher />
          </RightGroup>
        </Col>
      </Row>
      
    </FooterGroup>
  )
}
export default Footer