import { Row, Col, Button, Icon } from 'antd'
import styled from 'styled-components'
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

const IconsGroup = styled.div`
  text-align: center;
  
  .ant-btn {
    padding: 0 6px;
  }
  
  a {
    color: ${props => props.theme.bg.greyDark};
  }
  

`

const CopyrightGroup = styled.div`
  p, a {
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    color: ${props => props.theme.bg.greyDark};
  }

  a:hover {
    color: rgb(68, 68, 68);
  }

`

const Footer = () => {
  return (
    <FooterGroup>
      <Row type="flex" justify="center" align="middle">
        <Col xs={24} md={8}>
          <LeftGroup>
            <DarkModeToggle />
          </LeftGroup>
        </Col>
        <Col xs={24} md={8}>
          <IconsGroup>
            <Button type="link" size="large" href="https://linkedin.com/company/grimphq" target="_blank" rel="noopener">
              <Icon type="linkedin" theme="filled"/>
            </Button>
            <Button type="link" size="large" href="https://twitter.com/grimphq" target="_blank" rel="noopener">
              <Icon type="twitter"/>
            </Button>
            <Button type="link" size="large" href="https://www.facebook.com/grimphq/" target="_blank" rel="noopener">
              <Icon type="facebook" theme="filled"/>
            </Button>
            <Button type="link" size="large" href="https://instagram.com/grimphq" target="_blank" rel="noopener">
              <Icon type="instagram" theme="filled"/>
            </Button>
          </IconsGroup>
          <CopyrightGroup>
            <p>Copyright © 2020 <a href="https://angulaire.io" target="_blank" rel="noopener">Angulaire</a></p>
          </CopyrightGroup>
        </Col>
        <Col xs={24} md={8}>
          <RightGroup>
            <LocaleSwitcher />
          </RightGroup>
        </Col>
      </Row>
      
    </FooterGroup>
  )
}
export default Footer