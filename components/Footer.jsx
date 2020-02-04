import { Row, Col, Button, Icon } from 'antd'
import styled from 'styled-components'
import DarkModeToggle from './DarkModeToggle'

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
          <CopyrightGroup>
            <p>Made with ❤️ by <a href="https://angulaire.io" target="_blank" rel="noopener">Angulaire</a></p>
          </CopyrightGroup>
        </Col>
        <Col xs={24} md={8}>
          <RightGroup>
          </RightGroup>
        </Col>
      </Row>
      
    </FooterGroup>
  )
}
export default Footer